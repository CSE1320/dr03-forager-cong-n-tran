import React from "react";

const NagivateButton = ({name = '', destination = ''}) => {
    return (
        <button className="w-full h-5  gap-2  text-[#888787] flex items-center justify-end">
            <strong className="text-sm whitespace-nowrap">Compare</strong>
            <img src="/icons/gray_arrow-outlined.png" alt="gray arrow icon" className="w-3 h-5"/>
        </button>
    );
}
export default NagivateButton;