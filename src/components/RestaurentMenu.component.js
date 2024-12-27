import React, { useEffect, useState } from 'react'
import { mock_res_menu } from '../utils/constants.js';
import Shimmer from './Shimmer.component.js';
import { useParams } from 'react-router';
import { useLocation } from 'react-router-dom';
import deliveryImage from "../public/img/deliveryImage.svg";
import MenuSection from './menuSection.component.js';
import loadingGif from "../public/img/elastic.gif";

function RestaurentMenu() {
    const [resMenu, setResMenu] = useState([])
    const restaurantId = useParams().resId
    const location = useLocation();
    const restaurant= location.state?.restaurant;
    
    const resData = {
        name: restaurant.info.name,
        id: restaurant.info.id,
        image: restaurant.info.cloudinaryImageId
    }
    
    
    
    useEffect(() => {
        fetchResMenu();
    }, []);
    const fetchResMenu = async () => {
        try {
            const menuResAPI = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.0044745&lng=72.55311549999999&restaurantId=${restaurantId}&catalog_qa=undefined&submitAction=ENTER`);
            const jsonMenu = await menuResAPI.json();
            const cards = jsonMenu.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards;
            setResMenu(cards)
            console.log("API")
        } catch (error) {
            setResMenu(mock_res_menu)
            console.log("MOCK")
        }
    }
    if (resMenu.length == 0) {
        return <div className="h-full flex justify-center items-center"><img src={loadingGif} alt="loading" /></div>
    }
    return (
        <div>
            <div className="w-full my-1 mt-0 mx-auto px-10 py-2  rounded-2xl rounded-t-none sticky top-0 z-50 border border-gray-200 bg-white">
                <p className="font-bold text-xl">{restaurant.info.name}</p>
                <p className="font-bold text-lg inline-block">⭑ {restaurant.info.avgRatingString} | ({restaurant.info.totalRatingsString} Ratings)</p>
                <p className='inline-block'>&nbsp;{restaurant.info.costForTwo}</p>
                <p><img src={deliveryImage} className='h-5 w-5 inline-block'/>  {restaurant.info.sla.slaString}</p>
            </div>



            {resMenu.map((card) => {
                if (card.card.card.itemCards) {
                    return <MenuSection key={card.card.card.title} title={card.card.card.title} items={card.card.card.itemCards} resData={resData}  />
                } 
            })}
        </div>
    )
}

export default RestaurentMenu