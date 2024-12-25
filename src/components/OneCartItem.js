import React, { useEffect } from 'react';
import oops from "../public/img/OOOPS.png";

import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../utils/cartSlice.js';

const OneCartItem = ({ item , restaurant }) => {

    useEffect(() => {
    }, [item])
    const dispatch = useDispatch();
    const addItem = () => {
        dispatch(addToCart([restaurant,[item]]))
    }
    const removeItem = () => {
        dispatch(removeFromCart([restaurant,[item]]))
    }
    return (
        <>
            <div className="flex justify-between py-3">
                <div className= "itemDetails w-3/4 mr-3">
                    <div className="font-bold">{item.name}</div>
                    <div>{item.price/100}.00</div>
                    <div>{item.ratings.aggregatedRating.rating}</div>
                    <div>{item.description}</div>
                </div>
                <div className="itemPhoto w-1/6 relative">
                <img className="h-32 w-40 rounded-3xl mr-0 relative z-0" src={item.imageId ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.imageId}` : oops} alt="item image"/>
                <button className="addButton absolute z-10 bottom-1 left-1 text-xl  bg-white rounded-3xl px-2 border-2 border-grey-400 hover:bg-gray-100">{item.quantity}</button>
                </div>
                <button onClick={removeItem}>-</button>
                <button className="addButton text-xl  bg-white rounded-3xl px-2 border-2 border-grey-400 hover:bg-gray-100">{item.quantity}</button>
                <button onClick={addItem}>+</button>
            </div>
            <hr className="w-full"/>
        </>
    );
};

export default OneCartItem;