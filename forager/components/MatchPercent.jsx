import React from "react";

const MatchPercent = ({percent, isToxic = false}) => {
    let backgroundColor = 'bg-[#A5A5A5E5]';

    if (isToxic){
        if (percent >= 90){
            backgroundColor = 'bg-[#FF5050]'; 
        } else if (percent >= 80) {
            backgroundColor = 'bg-[#FF6666]';
        } else if (percent >= 70) {
            backgroundColor = 'bg-[#FF7E7E]';
        } else if (percent >= 60) {
            backgroundColor = 'bg-[#FF9999]';
        } else if (percent > 50) {
            backgroundColor = 'bg-[#FFB2B2]';
        }
    } else {
        if (percent >= 90) {
            backgroundColor = 'bg-[#73D89FE5]';
        } else if (percent >= 80) {
            backgroundColor = 'bg-[#80E6B2E5]';
        } else if (percent >= 70) {
            backgroundColor = 'bg-[#99F2CCE5]';
        } else if (percent >= 60) {
            backgroundColor = 'bg-[#B2FFD9E5]';
        } else if (percent > 50) {
            backgroundColor = 'bg-[#CCFFE5E5]';
        }
    }

    return (
        <div className={`flex items-center justify-center text-center rounded-sm w-8 h-7 ${backgroundColor}`}>
            <strong className="text-white font-black text-xs">
                {percent}%
            </strong>
        </div>
    ); 
}
export default MatchPercent