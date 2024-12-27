import React  from 'react';
import { useState, useEffect, useContext } from "react";
import { Link } from 'react-router-dom';
import logo from '../public/img/logo.png';
import  UserContext  from "./UserContext";
import { useSelector } from 'react-redux';


const Header = () => {
    const {LoggedInUser} = useContext(UserContext)
    const [btnText, setBtnText] = useState("Login")

    const cartItems = useSelector((store)=>store.cart.items)
    const [cartCount, setCartCount] = useState(0)

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

    

    return (
        <div className='m-0 w-full flex justify-between h-12 bg-gray-50 '>
            <div className='h-full w-40'>
                <img className=' h-4/5 mt-1 ml-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300' src={logo} alt='swiggy logo' />
            </div>
            <div className='h-full w-2/5 pr-5'>
                <ul className='h-full font-sans font-bold flex flex-row justify-between items-center'>
                    <li className="hover:text-orange-400 hover:bg-gray-50 p-2 rounded-3xl">
                        <Link to="/">   Home   </Link>
                    </li>
                    <li className="hover:text-orange-400 hover:bg-gray-50 p-2 rounded-3xl">
                        <Link to="/about">   About us   </Link>
                    </li>
                    <li className="hover:text-orange-400 hover:bg-gray-50 p-2 rounded-3xl">
                        <Link to="/contact">   Contact us   </Link>
                    </li>
                    <li className="hover:text-orange-400 hover:bg-gray-50 p-2 rounded-3xl">
                        <Link to="/cart">   Cart<span className=" px-1 text-orange-400 border-2 border-orange-400  ml-1">{cartCount}</span>   </Link>
                    </li>
                    <button className="bg-white py-2 hover:bg-orange-100 text-gray-800 font-semibold px-4 border border-gray-400 rounded-3xl shadow" onClick={() => {
                        btnText === "Login" ? setBtnText(LoggedInUser) : setBtnText("Login")
                    }}>
                        {btnText}
                    </button>
                </ul>
            </div>
        </div>
    );
}   
export default Header;