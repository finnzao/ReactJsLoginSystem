import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Exo&display=swap');

.container{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(104, 157, 255);
    height: 100vh;
    width: 100vw;
    font-family: 'Exo', sans-serif;
  }
  
  *{
    margin:0;
  }
  
  body {
    overflow: hidden;
    font-family: 'Exo', sans-serif;
  }
  
  .form {
    display: flex;
    background-color: #15172b;
    border-radius: 20px;
    box-sizing: border-box;
    height: 500px;
    padding: 20px;
    width: 60%;
    flex-direction: column;
    align-items: center;
  }
  .error_field{
    color:red;
    margin:5px;
  }
  .signup{
    margin-top:10px;
    color:#8c90ac;
    font-size:0.7rem;
  }
  .signup a{
    color: inherit;
    text-decoration: none;
  }
  .signup a:hover {
    color:#00A0C6; 
    text-decoration:none; 
    cursor:pointer;  
}
  .signup a{
    cursor: pointer;
    background-color: Transparent;
    background-repeat:no-repeat;
    border: none;
    color:#eee;
    font-size:0.8rem;
  }
  .title {
    color: #eee;
  
    font-size: 36px;
    font-weight: 600;
    margin-top: 30px;
  }
  
  .subtitle {
    color: #eee;
  
    font-size: 16px;
    font-weight: 600;
    margin-top: 10px;
  }
  
  .input-container {
    height: 50px;
    position: relative;
    width: 100%;
  }
  
  .ic1 {
    margin-top: 40px;
  }
  
  .ic2 {
    margin-top: 30px;
  }
  
  .input {
    background-color: #303245;
    border-radius: 12px;
    border: 0;
    box-sizing: border-box;
    color: #eee;
    font-size: 18px;
    height: 100%;
    outline: 0;
    padding: 4px 20px 0;
    width: 100%;
  }
  
  .cut {
    background-color: #15172b;
    border-radius: 10px;
    height: 20px;
    left: 20px;
    position: absolute;
    top: -20px;
    transform: translateY(0);
    transition: transform 200ms;
    width: 76px;
  }
  
  .cut-short {
    width: 70px;
  }
  
  .input:focus ~ .cut,
  .input:not(:placeholder-shown) ~ .cut {
    transform: translateY(8px);
  }
  
  .placeholder {
    color: #65657b;
    font-family: sans-serif;
    left: 20px;
    line-height: 14px;
    pointer-events: none;
    position: absolute;
    transform-origin: 0 50%;
    transition: transform 200ms, color 200ms;
    top: 20px;
  }
  
  .input:focus ~ .placeholder,
  .input:not(:placeholder-shown) ~ .placeholder {
    transform: translateY(-30px) translateX(10px) scale(0.75);
  }
  
  .input:not(:placeholder-shown) ~ .placeholder {
    color: #808097;
  }
  
  .input:focus ~ .placeholder {
    color: #dc2f55;
  }
  
  .submit {
    background-color: #08d;
    border-radius: 12px;
    border: 0;
    box-sizing: border-box;
    color: #eee;
    cursor: pointer;
    font-size: 18px;
    height: 50px;
    margin-top: 38px;
    outline: 0;
    text-align: center;
    width: 100%;
  }
  
  .submit:active {
    background-color: #06b;
  }
  
  @media only screen and (max-width: 768px) {
    .form{
      width:70%
    }
  }
  
  @media only screen and (max-width: 470px) {
    .form{
      width:100%
    }
      .container{
        background-color: #15172b;
      }
  } 
`;

export default GlobalStyle;