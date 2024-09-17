import { useState } from "react";

const Login = () => {
const [inputValue, setinputValue] = useState(" ")

const handlerInputValue = (e) =>{
   const value= e.target.value;
   if (value.toLowerCase().includes("o")){
    alert ("Por favor nombres sin la letra 'o' ");
   }
   else {
    setinputValue(value);
   }
} 

const handlerRegistration = () => {
    if (inputValue === "" || inputValue.toLowerCase().includes("o")){
        alert ("Usuario Inválido para registrarse");
      }  else {
        alert ("Usuario registrado correctamente");
     }
    }


return (
    <div>
        <input type="text" value={inputValue} onChange={handlerInputValue} placeholder="Ingrese su nombre de usuario" />
        <button onClick={handlerRegistration}>Registrarse</button>
        <p>{inputValue}</p>
    </div>
)
}

export default Login