import React from 'react';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import logo from '../public/img/logo.png';


const Header = () => {

    const [btnText, setBtnText] = useState("Login")
    const [btnText1, setBtnText1] = useState("Login1")

    useEffect(() => {
    }, [])

    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='app-logo' src={logo} alt='swiggy logo' />
            </div>
            <div className='nav-container'>
                <ul>
                    <li>
                        <Link to="/">   Home   </Link>
                    </li>
                    <li>
                        <Link to="/about">   About us   </Link>
                    </li>
                    <li>
                        <Link to="/contact">   Contact us   </Link>
                    </li>
                    <li>
                        <Link to="/cart">   Cart   </Link>
                    </li>
                    <button onClick={() => {
                        btnText === "Login" ? setBtnText("Logout") : setBtnText("Login")
                    }}>
                        {btnText}
                    </button>
                    <button onClick={() => {
                        btnText1 === "Login1" ? setBtnText1("Logout1") : setBtnText1("Login1")
                    }}>{btnText1}</button>
                </ul>
            </div>
        </div>
    );
}   
export default Header;