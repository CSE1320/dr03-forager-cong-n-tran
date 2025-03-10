import React from "react";


const ReportError = ({ visible = true }) => {
    return (
        <div className={`w-full flex justify-between items-center ${visible ? '' : 'hidden'}`}>
            <p className="text-xs">Not what you expected?</p>
            <button>
                <div className="w-28 h-8 bg-[#FF5050] text-[#FFFFFF] rounded-md flex justify-center items-center pl-1.5">
                    <strong className="text-sm whitespace-nowrap">Report Error</strong>
                    <img src="/icons/right_arrow.png" alt="right arrow icon" className="w-5 h-5"/>
                </div>
            </button>
        </div>
    );
}
export default ReportError;