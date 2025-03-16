import React from "react";
import useInput from "../hooks/useInput";
import { login } from "../utils/api";
import PropTypes from "prop-types";

function LoginInput({ loginSuccess }) {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  async function onLogin(event) {
    event.preventDefault();

    const { error, data } = await login({ email, password });
    if (!error) {
      loginSuccess(data);
    }
  }

  return (
    <form onSubmit={onLogin} className='input-login'>
      <input type="email" placeholder='Email' value={email} onChange={onEmailChange} />
      <input type="password" placeholder='Password' value={password} onChange={onPasswordChange} />
      <button>Masuk</button>
    </form>
  );
}

LoginInput.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginInput;


