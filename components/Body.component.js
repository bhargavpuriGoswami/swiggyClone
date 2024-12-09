import React from 'react';
import RestaurantCard from './RestaurantCard.component.js';

const Body = () => {
    return (
        <div className='body'>
            <div className="search-container">
                search
            </div>
            <div className="restaurant-container">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </div>
        </div>
    );
}


export default Body;