import React from 'react';
import RestaurantCard from './RestaurantCard.component.js';
import { MOCK_API_RESULT } from '../utils/constants.js';

const Body = () => {
    return (
        <div className='body'>
            <div className="search-container">
                search
            </div>
            <div className="restaurant-container">
                {
                    MOCK_API_RESULT.map((restaurant) => {
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