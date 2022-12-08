import React from "react";
import * as C from "./styles";

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <C.Input
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      autoComplete="off"
      required
    />
  );
};

export default Input;
