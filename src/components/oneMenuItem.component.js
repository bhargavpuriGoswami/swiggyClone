import React from 'react';
import oops from "../public/img/OOOPS.png";

import { useDispatch } from 'react-redux';
import { addToCart } from '../utils/cartSlice.js';

const OneMenuItem = ({item,resData}) => {
    const dispatch = useDispatch();
    const addItem = () => {

        dispatch(addToCart([resData,[item.card.info]]))
    }
    return (
        <>
            <div className="flex justify-between py-3">
                <div className= "itemDetails w-3/4 mr-3">
                    <div className="font-bold">{item.card.info.name}</div>
                    <div>{item.card.info.price/100}.00</div>
                    <div>{item.card.info.ratings.aggregatedRating.rating}</div>
                    <div>{item.card.info.description}</div>
                </div>
                <div className="itemPhoto w-1/6 relative">
                <img className="h-32 w-40 rounded-3xl mr-0 relative z-0" src={item.card.info.imageId ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}` : oops} alt="item image"/>
                <button  onClick={addItem} className="addButton absolute z-10 bottom-1 left-1 text-xl  bg-white rounded-3xl px-2 border-2 border-grey-400 hover:bg-gray-100">Add +</button>
                </div>
            </div>
            <hr className="w-full"/>
        </>
    );
};

export default OneMenuItem;