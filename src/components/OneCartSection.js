import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../utils/cartSlice';
import oops from "../public/img/OOOPS.png";
import OneCartItem from './OneCartItem.js';

const OneCartSection = ({oneSection}) => {
    const dispatch = useDispatch();
    const restaurant = oneSection[0];
    const items = oneSection.slice(1);
    let totalPrice = 0;

    if (items.length === 0) {
        console.log("empty")
        return; 
    }

    return(
        <div className="border  border-gray-400 p-3 m-5 w-2/3 mx-auto">
        <h2>{restaurant.name}</h2>
        {
        items[0].map((item) => {
        totalPrice = (totalPrice + ((item.price/100) * item.quantity));
        return(
            <>
            <OneCartItem item={item} restaurant={restaurant}/>
            </>
        )
        })}
        <div className="flex justify-between p-3">
        <p className="font-bold m-4">Total Price: {totalPrice}.00</p>
        <button className=" bg-orange-300 hover:bg-green-300 text-black font-semibold px-4 border border-gray-400 rounded-3xl shadow">Place Order</button>
        </div>
        
    </div>
    )
};

export default OneCartSection;