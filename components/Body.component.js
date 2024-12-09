import React from 'react';
import RestaurantCard from './RestaurantCard.component.js';

const Body = () => {
    return (
        <div className='body'>
            <div className="search-container">
                search
            </div>
            <div className="restaurant-container">
                <RestaurantCard 
                    imageId="urunoz7pzrpxoyakthp4"
                    offer="20% off over ₹500"
                    name="Baskin Robbins"
                    cuisines="Ice Cream, Desserts"
                    rating="4.2 ⭑"
                    deliveryTime="20-30 minutes"
                    address="3283 Homestead Dr"
                />

            </div>
        </div>
    );
}


export default Body;