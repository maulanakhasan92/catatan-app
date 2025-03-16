import React from "react";
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AiOutlineHome, AiOutlineLogout} from 'react-icons/ai';
import ToggleTheme from "./ToggleTheme";

function Navigation({logout, name}){

    return(
        <nav className="navigation">
            <ul>
                <li><button className="button-home"><Link to='/'><AiOutlineHome /></Link></button></li>
                <li><ToggleTheme /></li>
                <li> <button className="button-logout" onClick={logout}><AiOutlineLogout/>{name}</button></li>
            </ul>
        </nav>
    )
}

Navigation.propTypes = {
    logout: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
  };
  
export default Navigation;