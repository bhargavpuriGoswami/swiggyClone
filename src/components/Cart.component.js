import React, { useEffect, useId } from 'react';
import { useSelector } from 'react-redux';
import CartSection from './CartSection.component';
import { clearCart } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';


const CartComponent = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((store)=>store.cart.items)
    
    useEffect(() => {
    }, [cartItems])
    return (
        <div>
            <h2>Shopping Cart</h2>
            <button onClick={() => {dispatch(clearCart())}} className="bg-white py-2 hover:bg-gray-100 text-gray-800 font-semibold px-4 border border-gray-400 rounded shadow">Clear Cart</button>
            {cartItems.length > 0 ? 
                cartItems.map((item) => {
                const key = useId()
                    return <CartSection key={key} item={item}/>
                })
                : <p>Cart is empty</p>
            }
        </div>
    );
};

export default CartComponent;