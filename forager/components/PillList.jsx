import React from "react";
import Pill from "./Pill";


// should be done
const PillList = ({header, pillData, setFilters, setFilterMushrooms}) => {
    return (
        <div className="p-4">
            <h4 className="text-2xl text-left font-bold mb-4">
                {header}
            </h4>
            <div className="flex flex-wrap gap-2">
                {pillData.map((pill, index) => (
                    <Pill 
                        key={index} 
                        displayName={pill.name} 
                        isSelected={pill.active} 
                        setFilters={setFilters} 
                        setFilterMushrooms={setFilterMushrooms}
                    />
                ))}
            </div>
        </div>
    );
}
export default PillList;