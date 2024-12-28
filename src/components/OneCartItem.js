import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem, removeItem, deleteItem } from '../utils/cartSlice';
import oops from "../public/img/OOOPS.png";
import cancel from "../public/img/cancel.png";

const OneCartItem = ({ item, restaurant }) => {
    const dispatch = useDispatch();
    const add = () => {
        dispatch(addItem([restaurant,[item]]))
    }
    const remove= () => {
        dispatch(removeItem([restaurant,[item]]))
    }
    const deleteI = () => {
        dispatch(deleteItem([restaurant,[item]]))
    }
    if (item.quantity === 0) {
        return;
    }
    return (
        <>
            <div className="flex justify-between p-3">
                <div className= "itemDetails w-3/4 mr-3">
                    <div className="font-bold">{item.name}</div>
                    <div>{item.price/100}.00</div>
                    <div>{item.ratings.aggregatedRating.rating}</div>
                    <div>{item.description}</div>
                </div>
                <div className="flex justify-between w-3/12 items-center">
                    <button onClick={remove} className=" h-8 w-8 text-xl  bg-white rounded-3xl px-2 border-2 border-grey-400 hover:bg-gray-100">-</button>
                    <div className="itemPhoto w-40 mx-auto relative flex justify-center items-center">
                        <img className="h-32 w-40 rounded-3xl mr-0 relative z-0" src={item.imageId ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.imageId}` : oops} alt="item image"/>
                        <button className="addButton absolute z-10 bottom-1 left-1 text-xl  bg-white rounded-3xl px-2 border-2 border-grey-400 hover:bg-gray-100">{item.quantity}</button>
                    </div>
                    <button onClick={add} className=" h-8 w-8 text-xl  bg-white rounded-3xl px-2 border-2 border-grey-400 hover:bg-gray-100">+</button>
                </div>
                <div className="flex justify-between w-1/12 ">
                    <button onClick={deleteI} className=" h-7 w-7 text-l bg-white-2  hover:bg-red-100 rounded-3xl mx-auto">
                        <img src={cancel} alt="cancel image"/>
                    </button>
                </div>
                
            </div>
            <hr className="w-full"/>
        </>
    );
};

export default OneCartItem;