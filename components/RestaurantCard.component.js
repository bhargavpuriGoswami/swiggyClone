import React from "react";
import { restaurantImageURL } from "../utils/constants.js";

function RestaurantCard({imageId, offer, name, cuisines, rating, deliveryTime, address}) {
return (  
    <div className="restaurant-card">
        <div className="img-container">
            <img src={restaurantImageURL+imageId} alt="restaurant card image"/>
            <div className="offer-container">{offer}</div>    
        </div>
        <div className= "details-container"> 
            <h3>{name}</h3>
            <div className="rating-container">
                <p>{rating}</p>
                <p>{deliveryTime}</p>
            </div>
            <p>{cuisines}</p>
            <p>{address}</p>  
        </div>
    </div>    
);}

export default RestaurantCard;