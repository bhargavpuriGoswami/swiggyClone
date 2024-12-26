import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../utils/cartSlice';
import oops from "../public/img/OOOPS.png";
import OneCartItem from './OneCartItem.js';

const OneCartSection = ({oneSection}) => {
    const dispatch = useDispatch();
    const restaurant = oneSection[0];
    const items = oneSection.slice(1);

    if (items.length === 0) {
        console.log("empty")
        return; 
    }

    return(
        <div className="border  border-gray-400 p-3 m-5 w-2/3 mx-auto">
        <h2>{restaurant.name}</h2>
        {
        items[0].map((item) => {
            
            const add = () => {
                dispatch(addItem([restaurant,[item]]))
            }
            const remove= () => {
                dispatch(removeItem([restaurant,[item]]))
            }
        return(
            <>
            <OneCartItem item={item} restaurant={restaurant}/>
            </>
        )
        })}
    </div>
    )
};

export default OneCartSection;