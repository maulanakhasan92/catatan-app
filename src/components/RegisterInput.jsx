import React from "react";
import useInput from "../hooks/useInput";
import { register } from "../utils/api";
import { useNavigate } from "react-router-dom";

function RegisterInput() {
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const navigate = useNavigate();

  async function onSubmitHandler(event) {
    event.preventDefault();

    const { error } = await register({
      name: name,
      email: email,
      password: password,
    });
    if (!error) {
      navigate("/");
    }
  }


  return(
    <form onSubmit={onSubmitHandler} className='input-register'>
      <input type="text" placeholder="Nama" value={name} onChange={onNameChange} />
      <input type="email" placeholder="Email" value={email} onChange={onEmailChange} />
      <input type="password" placeholder="Password" autoComplete='current-password' value={password} onChange={onPasswordChange} />
      <button>Daftar</button> 
    </form>
        )   
}

export default RegisterInput;