import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    const EmailVal=email;
    setEmail(EmailVal);
    if (!email | !emailConf | !senha) {
      setError("Please enter your credentials");
      return;
    } 
    if (!email.match(pattern)){
      setError("Email invalid")
      return
    }
    else if (email !== emailConf) {
      setError("Invalid email confirmation");
      return;
    }

    const res = signup(email, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("Account created ");
    navigate("/");
  };

  return (
    <C.Container>
      <C.Label>Register new account</C.Label>
      <C.Content>
        <Input
          type="email"
          placeholder="Email..."
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="email"
          placeholder="Confirm your email..."
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Password"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Signup" onClick={handleSignup} />
        <C.LabelSignin>
        Already registered?
          <C.Strong>
            <Link to="/">&nbsp;Login</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  );
};

export default Signup;
