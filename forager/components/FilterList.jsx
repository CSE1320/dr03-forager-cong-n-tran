import React from "react";
import PillList from "./PillList";
import { IoMdClose } from "react-icons/io";


const FilterList = ({filterData, setFilters, setFilterMushrooms, onClose}) => {
    return (
        <div className="flex-col h-full w-[95%]">
            <div className="relative flex justify-center items-center h-12 w-full">
                <h4 className="text-base font-extrabold">
                    FILTER
                </h4>
                <div className="absolute right-0 pr-2 cursor-pointer">
                    <IoMdClose onClick={onClose} className="text-4xl"/>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                {filterData.map((filter, index) => (
                    <PillList 
                        key={index} 
                        header={filter.title} 
                        pillData={filter.pills} 
                        setFilters={setFilters} 
                        setFilterMushrooms={setFilterMushrooms} 
                    />
                ))}
            </div>
        </div>
    );
}; 
export default FilterList;

//border-2 border-blue-500 