import React, { useEffect, useState } from 'react'
import { mock_res_menu } from '../utils/constants.js';
import Shimmer from './Shimmer.component.js';
import { useParams } from 'react-router';

function RestaurentMenu() {
    const [resMenu, setResMenu] = useState([])
    const restaurantId = useParams().resId
    
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
        return <h1>Loading...</h1>
    }
    return (
        <div>
            {resMenu.map((card) => {
                if (card.card.card.itemCards) {
                    return <>
                        <h3 className="font-bold text-xl ml-5" key={card.card.card.title}>{card.card.card.title} {card.card.card.itemCards.length}</h3>
                        <ol className='list-decimal'>
                        {card.card.card.itemCards.map((item) => {
                            return <li className=" ml-20" key={item?.card?.info?.id}>
                                {item?.card?.info?.name}
                            </li>
                        })}
                        </ol>
                    </>
                } 
            })}
        </div>
    )
}

export default RestaurentMenu