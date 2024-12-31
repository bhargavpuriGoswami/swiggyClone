import React, { useEffect, useId } from 'react';
import { useSelector } from 'react-redux';
import { clearCart } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';
import OneCartSection from './OneCartSection';
import empty_cart from "../public/img/empty-cart.png";
import { Link } from 'react-router-dom';
import Login from "./Login.component.js";
import { useContext } from "react";
import LoginFormContext from "./Contexts/LoginFormContext.js";



const TestCart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((store)=>store.cart.items)
    const { showLoginForm, setShowLoginForm } = useContext(LoginFormContext);
    useEffect(() => {
    }, [cartItems])
    const page = () => {
        return(
            <div className="flex flex-col items-center">
                <img src={empty_cart} alt="Cart empty." />
                <p className="text-2xl font-bold text-orange-500">YOUR CART IS CURRENTLY EMPTY!</p>
                <Link to="/"><button className=" text-xl bg-orange-300 py-2 hover:bg-orange-500 text-black font-bold px-4 border border-gray-400 rounded-3xl shadow my-6">Continue Shopping</button></Link>
            </div>
        )}

    const pageItems = () => {
        return(
            <div>
                <div className="flex justify-between py-2 w-2/3 mx-auto">
                    <h2 className='text-2xl font-bold'>Your shopping cart</h2>
                    <button onClick={() => {dispatch(clearCart())}} className="bg-white py-2 hover:bg-orange-100 text-gray-800 font-semibold px-4 border border-gray-400 rounded-3xl shadow">Clear Cart</button>
                </div>
                
                { cartItems.map((oneSection) => {
                    
                    const restaurant = oneSection[0];
                    const items = oneSection.slice(1);
                    if (items.length === 0) {
                    console.log("empty")
                    return; 
                    }
                    return(
                        <>
                        <OneCartSection oneSection={oneSection}/>
                        </>
                    )
                })
                }
            </div>
        )
    }

    if (cartItems.length === 0) {  
        return(
        showLoginForm? 
        <>
            {page()}
            <Login openModal={showLoginForm} />
        </>
        :
        page()
        )
    }


    return (   
        showLoginForm? 
        <>
            {pageItems()}
            <Login openModal={showLoginForm} />
        </>
        :
        pageItems()
    );
};

export default TestCart;