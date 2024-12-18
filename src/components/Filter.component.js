import React from 'react';

const Filter = ({filterFunction}) => {
    return (
        <div className="all-filter">
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                onClick={() => {
                filterFunction();
            }}>All</button>
        </div>
    )
}   
export default Filter  ;