import React from "react";
import { restaurantImageURL } from "../utils/constants.js";

function RestaurantCard() {
return (  
    <div className="restaurant-card">
        <div className="img-container">
            <img src={restaurantImageURL+"urunoz7pzrpxoyakthp4"} alt="restaurant card image"/>
            <div className="offer-container">offer</div>    
        </div>
        <div className= "details-container"> 
            <h3>Restaurant Name</h3>
            <div className="rating-container">
                <p>stars</p>
                <p>delivery time</p>
            </div>
            <p>cuisines</p>
            <p>address</p>  
        </div>
    </div>    
);}

export default RestaurantCard;