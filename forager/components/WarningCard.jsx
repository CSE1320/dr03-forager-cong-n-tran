import React from "react";

const WarningCard = () => {
    return (
        <div className="border-2 border-blue-500 bg-[#FF5050] text-[#FFFFFF] rounded-lg px-4 py-1" >
            <div className="border-2 border-blue-500 flex align-center text-xl">
                <img src="/icons/icon_warning.svg" alt="warning icon"/>
                <strong className="font-bold">WARNING</strong>
            </div>
            <p className="text-base break-words">This is a toxic species, proceed with caution.</p>
        </div>
    );
}
export default WarningCard;

// border-2 border-blue-500