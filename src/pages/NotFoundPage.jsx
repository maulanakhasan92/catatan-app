import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage(){
    return(
        <div>
            <p>404 Not Found</p>
            <Link to='/'>Kembali ke Beranda</Link>
        </div>
    )
}

export default NotFoundPage;