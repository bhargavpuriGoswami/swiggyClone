import React, { use }  from 'react';
import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../public/img/logo.png';
import  LoginFormContext  from "./Contexts/LoginFormContext.js";
import { useSelector } from 'react-redux';



const Header = () => {
    const [openModal, setOpenModal] = useState(false);
    const [currentPage, setCurrentPage] = useState("/");
    const cartItems = useSelector((store)=>store.cart.items)
    const [cartCount, setCartCount] = useState(0)

    const { showLoginForm, setShowLoginForm } = useContext(LoginFormContext);
    const {loginBtnText, setLoginBtnText} = useContext(LoginFormContext);
    useEffect(() => {
        let count = 0
        cartItems.map((item) => {
            item[1].map((i) => {
                if(i.quantity){
                    count += i.quantity}
            })
        })
        setCartCount(count)
    }, [cartItems])
    const handleLogin = () => {
        if(loginBtnText === "Login"){
            setLoginBtnText("Logout")
            setShowLoginForm(true)

        }
        else{
            setShowLoginForm(false)
        }
    }



    
    

    return (
        <div className='m-0 w-full flex justify-between h-12 bg-gray-50 '>
            <div className='h-full w-40'>
            <Link to={{pathname: `/`,}}> 
                <img className=' h-4/5 mt-1 ml-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300' src={logo} alt='swiggy logo' />
                </Link>
            </div>
            <div className='h-full w-2/5 pr-5'>
                <ul className='h-full font-sans font-bold flex flex-row justify-between items-center'>
                    <li className="hover:text-orange-400 hover:bg-gray-50 p-2 rounded-3xl" onClick={() => {setCurrentPage("/")}}>
                        <Link to={{pathname: `/`,}}>   Home   </Link>
                    </li>
                    <li className="hover:text-orange-400 hover:bg-gray-50 p-2 rounded-3xl" onClick={() => {setCurrentPage("/about")}}>
                        <Link to={{pathname: `/about`,}}>   About us   </Link>
                    </li>
                    <li className="hover:text-orange-400 hover:bg-gray-50 p-2 rounded-3xl" onClick={() => {setCurrentPage("/contact")}}>
                        <Link to={{pathname: `/contact`,}}>   Contact us   </Link>
                    </li>
                    <li className="hover:text-orange-400 hover:bg-gray-50 p-2 rounded-3xl" onClick={() => {setCurrentPage("/cart")}}>
                        <Link to={{pathname: `/cart`,}}>Cart<span className=" px-1 text-orange-400 border-2 border-orange-400  ml-1">{cartCount}</span></Link>
                    </li>
                    <button className="bg-white py-2 hover:bg-orange-100 text-gray-800 font-semibold px-4 border border-gray-400 rounded-3xl shadow" 
                    onClick={handleLogin}>{loginBtnText}
                    </button>
                </ul>
            </div>
        </div>
    );
}   
export default Header;