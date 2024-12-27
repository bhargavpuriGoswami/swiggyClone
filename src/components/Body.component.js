import React, { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard.component.js';
import { MOCK_API_RESULT } from '../utils/constants.js';
import Shimmer from './Shimmer.component.js';
import Filter from './Filter.component.js';
import { Link } from 'react-router-dom';

const Body = () => {

    const [restaurants, setRestaurants] =   useState([]);
    const [filterRestaurants, setFilterRestaurants] = useState([]);
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
            setFilterRestaurants(fetchedRestaurants);
        } catch (error) {
            const fetchedRestaurants = MOCK_API_RESULT;
            //when we use setRestaurants, react will re-render the component
            setRestaurants(fetchedRestaurants);
            setFilterRestaurants(fetchedRestaurants);
        }
        

    };
    return restaurants.length == 0? <><div className='ml-48 my-3' ><Filter filterFunction={fetchRestaurants}/></div><Shimmer /></>:
    (
        <div className='body'>
            <div className="m-2 w-1/3 ml-48 h-full flex justify-around ">
                <input type="text" placeholder="Search" className=" search-input shadow appearance-none border hover:border-orange-100 rounded-3xl w-1/2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-3/5 py-2" 
                onChange={(e) => {
                    searchQuery = e.target.value
                }}
                />
                <button className="bg-white hover:bg-orange-100 text-gray-800 font-semibold px-4 border border-gray-400 rounded-3xl shadow h-3/5 py-2"
                onClick={async() => {
                    const searchBox = document.querySelector(".search-input");
                    searchBox.value = "";
                    const filteredList = filterRestaurants.filter((restaurant) => {
                        return restaurant.info.name.toLowerCase().includes(searchQuery.toLowerCase());
                    });
                    setRestaurants(filteredList);
                }}
                >Search</button>   
                <button className="bg-white hover:bg-orange-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-3xl shadow h-3/5"
                onClick={() => {
                    let filterList = restaurants.filter((restaurant) =>{
                        return restaurant.info.avgRating >= 4.5;
                    });              
                    setRestaurants(filterList);
                }}
                >Top rated</button>
                <Filter className="h-full"filterFunction={fetchRestaurants}/>
            </div>
            <div className="restaurant-container flex flex-wrap w-4/5 mx-auto">
                {
                    restaurants.map((restaurant) => {
                        let dealHeader = "";
                        let dealSubHeader = "";
                        if(restaurant.info.aggregatedDiscountInfoV3){
                            dealHeader = restaurant.info.aggregatedDiscountInfoV3.header;
                            dealSubHeader = restaurant.info.aggregatedDiscountInfoV3.subHeader||""; 
                        } 
                        
                        return (    

                            <Link 
                                  to={{
                                    pathname: `/restaurant/${restaurant.info.id}`,
                                    }}
                                    state={{ restaurant }} key={restaurant.info.id}>
                                <RestaurantCard 
                                key={restaurant.info.id}
                                imageId={restaurant.info.cloudinaryImageId}
                                dealHeader={dealHeader}
                                dealSubHeader={dealSubHeader}
                                name={restaurant.info.name}
                                cuisines={restaurant.info.cuisines.join(", ")}
                                rating={`⭑ ${restaurant.info.avgRating}`}
                                deliveryTime={restaurant.info.sla.slaString}
                                address={restaurant.info.areaName}
                                />
                            </Link>
                        );
                    })
                }


            </div>
        </div>
    );
}


export default Body;