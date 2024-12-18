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
        <div className='m-0 w-full flex justify-between h-12 border border-black'>
            <div className='h-full w-40'>
                <img className='h-4/5 mt-1 ml-1' src={logo} alt='swiggy logo' />
            </div>
            <div className='h-full w-2/5 pr-5'>
                <ul className='h-full font-sans font-bold flex flex-row justify-between items-center'>
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
                    <button className="bg-white py-2 hover:bg-gray-100 text-gray-800 font-semibold px-4 border border-gray-400 rounded shadow" onClick={() => {
                        btnText === "Login" ? setBtnText("Logout") : setBtnText("Login")
                    }}>
                        {btnText}
                    </button>
                </ul>
            </div>
        </div>
    );
}   
export default Header;