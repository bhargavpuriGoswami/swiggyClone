import React from 'react';

const Filter = ({filterFunction}) => {
    return (
        <div className="all-filter">
            <button className="All-button"
                onClick={() => {
                filterFunction();
            }}>All</button>
        </div>
    )
}   
export default Filter  ;