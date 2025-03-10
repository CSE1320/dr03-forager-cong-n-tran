import React from "react";
import { mushroomData } from "@/data/development";


// should be done
const Pill = ({displayName, isSelected, setFilters, setFilterMushrooms}) => {

    const isSelectedColor = isSelected ? "bg-[#579076] text-white" : "bg-[#D9D9D9] text-[#7C7C7C]";
    
    const handleFilters = () => {

        setFilters(prevFilters => {
            const newFilters = prevFilters.map(filter => ({
            ...filter,
            pills: filter.pills.map(pill => 
                pill.name === displayName ? { ...pill, active: !isSelected } : pill
            )
            }));
            const activeFilters = newFilters.flatMap(filter => 
            filter.pills.filter(pill => pill.active).map(pill => pill.name)
            );
            console.log(activeFilters)
            if (activeFilters.length === 0) {
            setFilterMushrooms(mushroomData);
            } else {
            setFilterMushrooms(mushroomData.filter(mushroom => 
                activeFilters.every(pill => 
                Object.values(mushroom.filters).flat().includes(pill) ||
                (pill === "Favorites" && mushroom.filters.favorites) ||
                (pill === "Recents" && mushroom.filters.recent)
                )
            ));
            }
            return newFilters;
        });
        


    };

    return (
        <div onClick={handleFilters} className={`flex justify-center items-center gap-10 px-4 rounded-[100px] whitespace-nowrap cursor-pointer ${isSelectedColor}`}>
            <p>{displayName}</p>
        </div>
    );
}
export default Pill;