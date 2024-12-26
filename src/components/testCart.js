import React, { useEffect, useId } from 'react';
import { useSelector } from 'react-redux';
import CartSection from './CartSection.component';
import { clearCart } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';


const TestCart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((store)=>store.cart.items)
    
    useEffect(() => {
        console.log(cartItems)
    }, [cartItems])

    if (cartItems.length === 0) {
        return <p>Cart is empty</p>
    }

    return (
        <div>cart</div>
    );
};

export default TestCart;