import React from "react";
import * as C from './style'
const Input= ({type,placerholder,value,onChange})=>{
    return(
        <C.input
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placerholder}
        />
    )
}

export default Input;