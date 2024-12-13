import React, { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard.component.js';
import { MOCK_API_RESULT } from '../utils/constants.js';
import Shimmer from './Shimmer.component.js';
import Filter from './Filter.component.js';

const Body = () => {

    const [restaurants, setRestaurants] =   useState([]);
    let searchQuery = "";
    //useEffect will run only once, when the component mounts
    useEffect(() => {
        fetchRestaurants();
    }, []);


    const fetchRestaurants = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0044745&lng=72.55311549999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        try {
            const json = await data.json();
            const fetchedRestaurants = json?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants; 
            //when we use setRestaurants, react will re-render the component
            setRestaurants(fetchedRestaurants);
        } catch (error) {
            const fetchedRestaurants = MOCK_API_RESULT;
            //when we use setRestaurants, react will re-render the component
            setRestaurants(fetchedRestaurants);
        }
        

    };
    return restaurants.length == 0? <><Filter filterFunction={fetchRestaurants}/><Shimmer /></>:
    (
        <div className='body'>
            <div className="filter-container">
                <div className="search-container">
                    <input type="text" placeholder="Search" className="search-input" 
                    onChange={(e) => {
                        searchQuery = e.target.value
                        console.log(searchQuery);
                    }}
                    />
                    <button className="search-button"
                    onClick={() => {
                        const filteredList = restaurants.filter((restaurant) => {
                            return restaurant.info.name.toLowerCase().includes(searchQuery.toLowerCase());
                        })
                        setRestaurants(filteredList);
                    }}
                    >Search</button>   
                </div>
                <button className="rated-button"
                onClick={() => {
                    let filterList = restaurants.filter((restaurant) =>{
                        return restaurant.info.avgRating >= 4.5;
                    });              
                    setRestaurants(filterList);
                }}
                >Top rated restaurants</button>
                <Filter filterFunction={fetchRestaurants}/>
            </div>
            <div className="restaurant-container">
                {
                    
                    restaurants.map((restaurant) => {
                        let dealHeader = "";
                        let dealSubHeader = "";
                        if(restaurant.info.aggregatedDiscountInfoV3){
                            dealHeader = restaurant.info.aggregatedDiscountInfoV3.header;
                            dealSubHeader = restaurant.info.aggregatedDiscountInfoV3.subHeader||""; 
                        } 
                        
                        return (
                            <RestaurantCard 
                                key={restaurant.info.id}
                                imageId={restaurant.info.cloudinaryImageId}
                                offer={dealHeader+" "+dealSubHeader}
                                name={restaurant.info.name}
                                cuisines={restaurant.info.cuisines.join(", ")}
                                rating={`⭑ ${restaurant.info.avgRating}`}
                                deliveryTime={restaurant.info.sla.slaString}
                                address={restaurant.info.areaName}
                            />
                        );
                    })
                }


            </div>
        </div>
    );
}


export default Body;