import React from "react";
import { restaurantImageURL } from "../utils/constants.js";


function RestaurantCard({imageId, dealHeader, dealSubHeader, name, cuisines, rating, deliveryTime, address}) {
return (  
    <div className="restaurant-card w-64 h-80 m-2 mx-3 hover:shadow-xl hover:shadow-gray-200 rounded-2xl">
        <div className="img-container relative w-full h-3/6">
            <img src={restaurantImageURL+imageId} alt="restaurant card image" className="w-full h-full relative z-10 rounded-2xl"/>
            <div  className="offer-container absolute z-20 bottom-1 left-1 text-white text-sm bg-orange-500 rounded-full p-1 font-bold ">
                {dealHeader.length > 0 &&
                    <span>{dealHeader} </span>    
                }
                {dealSubHeader.length > 0 &&
                    <span>{dealSubHeader}</span>
                }
            </div>

        </div>
        <div className= "details-container m-0 p-0 ml-3 mt-2"> 
            <h3 className='font-bold text-lg'>{name}</h3>
            <div className="rating-container flex mt-1">
                <p>{rating},</p>
                <p>{deliveryTime}</p>
            </div>
            <p className="cuisines text-xs text-gray-600">{cuisines}</p>
            <p>{address}</p>  
        </div>
    </div>    
);}

export default RestaurantCard;