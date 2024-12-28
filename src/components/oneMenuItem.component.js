import React from 'react';
import oops from "../public/img/OOOPS.png";
import add from "../public/img/add.png";

import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';
// import { addToCart } from '../utils/cartSlice.js';

const OneMenuItem = ({item,resData}) => {
    const dispatch = useDispatch();
    const addItemCart = () => {
        dispatch(addItem([resData,[item.card.info]]))
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
                <button  onClick={addItemCart} className="addButton absolute z-10 bottom-1 left-1 text-md  bg-white rounded-3xl px-2 py-1 border-2  hover:bg-orange-200 flex items-center">
                    Add&nbsp;<img className="h-5 w-5 inline" src={add} alt="add to cart" />
                </button>
                </div>
            </div>
            <hr className="w-full"/>
        </>
    );
};

export default OneMenuItem;