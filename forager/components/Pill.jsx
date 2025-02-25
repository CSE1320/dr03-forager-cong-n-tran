import React from "react";

const Pill = ({displayName, isSelected}) => {
    return (
        <div  className={`flex justify-center items-center gap-10 px-4 rounded-[100px] ${
            isSelected ? "bg-[#579076] text-white" : "bg-[#D9D9D9] text-[#7C7C7C]"
          }`}>
            <p className="">{displayName}</p>
        </div>
    );
}
export default Pill;