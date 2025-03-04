import React from "react";
import Pill from "./Pill";

const ActiveFilters = ({filters, setFilters, setFilterMushrooms}) => {
    return (
        <div className="flex flex-row flex-wrap pl-6 self-start gap-2">
            {filters.map((filterData) => 
                (filterData.pills.map((pill, index) => 
                    pill.active ? <Pill 
                                    key={index} 
                                    displayName={pill.name} 
                                    isSelected={pill.active} 
                                    setFilters={setFilters} 
                                    setFilterMushrooms={setFilterMushrooms}
                                /> : null
                ))
            )}  
        </div>
    );
}
export default ActiveFilters;