import React, { useEffect } from 'react';
import OneCartItem from './OneCartItem.js';

const CartSection = ({item}) => {
    const restaurant = item[0];
    const items = item.slice(1);

    useEffect(() => {
    }, [items])
    
    if (items.length === 0) {
        console.log("empty")
        return <p>Cart is empty</p>
    }

    return (
        <div className="border  border-gray-400 p-3 m-5">
            <h2>{restaurant.name}</h2>
            {items[0].map((item) => {
                return <OneCartItem key={item.id} item={item} restaurant={restaurant}/> 
            })} 
            <div className="flex justify-between m-3">
                <p>Total Price: {items[0].reduce((total, item) => total + ((item.price/100)*item.quantity), 0)}</p>
                <button className=" bg-orange-300 py-2 hover:bg-orange-400 text-black font-semibold px-4 border border-gray-400 rounded shadow">Checkout</button>
            </div>
        </div>
    );
};

export default CartSection;