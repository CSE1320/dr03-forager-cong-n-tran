import React from "react";
import FilterList from "./FilterList";
import { createPortal } from "react-dom";

const FilterSettings = ({filterData, setFilters, setFilterMushrooms, onClose}) => {
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };
    
    return createPortal(
        <div
            className="flex justify-center items-center fixed inset-0 bg-black bg-opacity-50"
            onClick={handleOverlayClick}
        >
            <div className="bg-white pt-2 mt-28 rounded-2xl w-11/12 h-full flex justify-center items-center">
                <FilterList 
                    filterData={filterData} 
                    setFilters={setFilters} 
                    setFilterMushrooms={setFilterMushrooms} 
                    onClose={onClose}
                />
            </div>
        </div>,
        document.body
    );
}
export default FilterSettings;