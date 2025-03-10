"use client";
import React from "react";
import { useState } from "react";
import { FaSearch, FaFilter } from "react-icons/fa";
import FilterSetting from "./FilterSettings";
import { mushroomData } from "@/data/development";


const Search= ({filters, setFilters, setFilterMushrooms}) => {
    const [showFilter, setShowFilter] = useState(false);

    const toggleFilter = () => {
        setShowFilter(!showFilter);
    };

    const handleSearch = (event) => {
        const query = event.target.value.toLowerCase();
        const filteredMushrooms = mushroomData.filter(mushroom =>
            mushroom.title.toLowerCase().includes(query)
        );
        setFilterMushrooms(filteredMushrooms);
    };
    return (
        <div className= "w-full h-12 flex items-center justify-end px-5">   
            <div className="bg-white h-full flex justify-center items-center rounded-3xl flex-grow overflow-hidden">
                <FaSearch color="gray" className="mr-2 ml-4 text-xl"/>
                <input 
                    className="pl-4 flex-grow text-xl outline-none focus:ring-0 focus:border-transparent" 
                    type="text" 
                    placeholder="Search for a mushroom" 
                    onChange={handleSearch}
                />
            </div>
            <button onClick={toggleFilter} className="ml-2 text-xl">
                <img src="icons/filter.png" alt="filter image" className="w-6 h-6" />
            </button>
            {showFilter && <FilterSetting 
                            filterData={filters} 
                            setFilters={setFilters} 
                            setFilterMushrooms={setFilterMushrooms} 
                            onClose={toggleFilter} />}
        </div>
    );
}
export default Search;
//border-2 border-blue-500 