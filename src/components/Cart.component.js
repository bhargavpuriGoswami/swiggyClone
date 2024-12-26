import React, { useEffect, useId } from 'react';
import { useSelector } from 'react-redux';
import { clearCart } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../utils/cartSlice';   
import oops from "../public/img/OOOPS.png";
import OneCartSection from './OneCartSection';


const TestCart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((store)=>store.cart.items)
    
    useEffect(() => {
    }, [cartItems])

    if (cartItems.length === 0) {
        return <p>Cart is empty</p>
    }

    return (
        
        <div>
        <div className="flex justify-between py-2 w-2/3 mx-auto">
            <h2 className='text-2xl font-bold'>Your shopping cart</h2>
            <button onClick={() => {dispatch(clearCart())}} className="bg-white py-2 hover:bg-gray-100 text-gray-800 font-semibold px-4 border border-gray-400 rounded shadow">Clear Cart</button>
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
    );
};

export default TestCart;