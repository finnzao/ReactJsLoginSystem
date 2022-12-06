import React, { useState } from "react";
import GlobalStyle from './style';
import Button from "../../componets/Button";
import {Link,useNavigate} from "react-router-dom";
import userAuth from "../../hooks/userAuth";
import Input from "../../componets/Input"
const Signin= ()=>{

  const [email,setEmail]= useState("");
  const [senha,setSenha]=useState("");
  const [error,setError]=useState("");
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
    
      <input id="password" className="input" type="password" placeholder=" " onChange={(e)=>[setEmail(e.target.value),setError("")]}   />
      <div className="cut cut-short"></div>
      <label for="password" className="placeholder" type="text">Password</label>
    </div>
    
    <div className="signup"><p>Don't have account ?<Link to="/signup">Signup</Link></p></div>
    <button type="text" className="submit">Enter</button>
  
  </div>
  
  </div>
  

    )
}

export default Signin;    