import React, { useEffect, useState } from 'react';
import OneMenuItem from './oneMenuItem.component.js';




const MenuSection = ({title,items}) => {
    const [collapseArrow, setCollapseArrow] = useState("⌄");
    const [showItems, setShowItems] = useState(false);
    const clickItem = () => {
        collapseArrow === "^" ? setCollapseArrow("⌄") : setCollapseArrow("^")
        setShowItems(!showItems)
    }
    return (
        <div className='w-2/3 mx-auto border-b-8 border-gray-50 p-2 px-4 cursor-pointer'>
            <div className='flex justify-between ' onClick={clickItem}>
                <p className="font-bold text-xl">{title}</p>
                <button onClick={clickItem}> {collapseArrow} </button>
            </div>
            <div className={showItems == false ? "hidden" : "block"}>
                {items.map((item) => {
                    return <OneMenuItem key={item.card.info.name} item={item} />
                })}
            </div>
        </div>
        

    );
};

export default MenuSection;