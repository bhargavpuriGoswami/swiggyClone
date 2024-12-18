import React from "react";
import { restaurantImageURL } from "../utils/constants.js";

function getMenu(){
    
}

function RestaurantCard({imageId, dealHeader, dealSubHeader, name, cuisines, rating, deliveryTime, address}) {
return (  
    <div className="restaurant-card">
        <div className="img-container">
            <img src={restaurantImageURL+imageId} alt="restaurant card image"/>
            <div  className="offer-container">
                {dealHeader.length > 0 &&
                    <span>{dealHeader} </span>    
                }
                {dealSubHeader.length > 0 &&
                    <span>{dealSubHeader}</span>
                }
            </div>

        </div>
        <div className= "details-container"> 
            <h3>{name}</h3>
            <div className="rating-container">
                <p>{rating},</p>
                <p>{deliveryTime}</p>
            </div>
            <p className="cuisines">{cuisines}</p>
            <p>{address}</p>  
        </div>
    </div>    
);}

export default RestaurantCard;