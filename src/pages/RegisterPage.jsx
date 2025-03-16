import React from "react";
import { Link } from "react-router-dom";
import RegisterInput from "../components/RegisterInput";

function RegisterPage() {
    return (
        <section>
            <h2>Isi Form untuk mendaftar!</h2>
            <RegisterInput />
            <p>Sudah Punya Akun? <b><Link to="/">Masuk</Link></b></p>
        </section>
    )
}

export default RegisterPage;