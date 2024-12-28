import React, { useEffect, useState } from 'react';
import OneMenuItem from './oneMenuItem.component.js';
import uplist from "../public/img/uplist.png";
import downlist from "../public/img/downlist.png";





const MenuSection = ({title,items,resData}) => {
    const [collapseArrow, setCollapseArrow] = useState(downlist);
    const [showItems, setShowItems] = useState(false);
    const clickItem = () => {
        showItems ? setCollapseArrow(downlist) : setCollapseArrow(uplist)
        setShowItems(!showItems)
    }
    return (
        <div className='w-2/3 mx-auto border-b-8 border-gray-50 p-2 px-4 cursor-pointer hover:bg-gray-100 hover:rounded-t-lg'>
            <div className='flex justify-between ' onClick={clickItem}>
                <p className="font-bold text-xl">{title}</p>
                <button className="w-5" onClick={clickItem}>
                    <img src={collapseArrow} alt="collapse arrow" />
                </button>
            </div>
            <div className={showItems == false ? "hidden" : "block"}>
                {items.map((item) => {
                    return <OneMenuItem key={item.card.info.name} item={item} resData={resData} />
                })}
            </div>
        </div>
        

    );
};

export default MenuSection;