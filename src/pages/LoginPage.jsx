import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import LoginInput from "../components/LoginInput";

function LoginPage({ loginSuccess }) {
    return (
      <section className='login-page'>
        <h2>Masuk untuk melanjutkan..</h2>
        <LoginInput loginSuccess={loginSuccess} />
        <p>Belum punya akun? <b><Link to="/register">Daftar</Link></b></p>
      </section>
    );
  }
   
  LoginPage.propTypes = {
    loginSuccess: PropTypes.func.isRequired,
  }
   
  export default LoginPage;