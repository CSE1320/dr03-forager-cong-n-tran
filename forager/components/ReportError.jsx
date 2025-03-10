import React from "react";
import { backgroundColors } from "@/data/development";

const ReportError = ({ visible = true }) => {
    return (
        <div className={`w-full flex justify-between items-center ${visible ? '' : 'hidden'}`}>
            <p className="text-xs">Not what you expected?</p>
            <button>
                <div className={`${backgroundColors.warning} text-white  w-28 h-8 rounded-md flex justify-center items-center pl-1.5`}>
                    <strong className="text-sm whitespace-nowrap">Report Error</strong>
                    <img src="/icons/right_arrow.png" alt="right arrow icon" className="w-5 h-5"/>
                </div>
            </button>
        </div>
    );
}
export default ReportError;