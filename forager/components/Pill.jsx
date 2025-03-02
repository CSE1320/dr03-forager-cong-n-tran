import React from "react";


// should be done
const Pill = ({displayName, isSelected}) => {

    const isSelectedColor = isSelected ? "bg-[#579076] text-white" : "bg-[#D9D9D9] text-[#7C7C7C]";
    
    return (
        <div  className={`flex justify-center items-center gap-10 px-4 rounded-[100px] whitespace-nowrap ${isSelectedColor}`}>
            <p >{displayName}</p>
        </div>
    );
}
export default Pill;