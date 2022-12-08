import React, { useState } from "react";
import GlobalStyle from './styles';
import {Link,useNavigate} from "react-router-dom";
import AuthProvider from "../../hooks/useAuth";


const Signin= ()=>{

  const {signin}=AuthProvider();
  const navigate= useNavigate();


  const [email,setEmail]= useState("");
  const [senha,setSenha]=useState("");
  const [error,setError]=useState("");

  const handLogin=()=>{
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    const EmailVal=email;
    if(!email | !senha){
      setError("Please enter your credentials")
      return;
    };
    setEmail(EmailVal);
    if (!email.match(pattern)){
      setError("Email invalid")
    }
    const res=signin(email,senha)
    if (res){
      setError(res);
      return;
    }

    navigate("/home");

  };

    return(
      <div className='container'>
          <GlobalStyle></GlobalStyle>
  

    <div className="form"> 
    <div className="title">Welcome</div>
    <div className="subtitle">Please insert yours credetions</div>
    <div className="input-container ic1">
      
      <input id="user" className="input" type="text" placeholder=" " value={email} onChange={(e)=>[setEmail(e.target.value),setError("")]} />
      <div className="cut"></div>
      <label for="user" className="placeholder">UserName</label>
    </div>
    
  
    <div className="input-container ic2">
    
      <input id="password" className="input" type="password" placeholder=" " onChange={(e)=>[setSenha(e.target.value),setError("")]}   />
      <div className="cut cut-short"></div>
      <label for="password" className="placeholder" type="text">Password</label>
    </div>

    <p className="error_field">{error}</p>
    <div className="signup"><p>Don't have account ?<Link to="/signup">Signup</Link></p></div>
    <button type="text" className="submit" onClick={handLogin}>Enter</button>
  
  </div>
  
  </div>
  

    )
}

export default Signin;    