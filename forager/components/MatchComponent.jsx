import { backgroundColors } from "@/data/development";
import React from "react";

const MatchComponent = ({percent, toxic}) => {
    const matchIcon = toxic ? (
        <img 
            className="h-4 w-4"
            src="/icons/icon_warning.svg"
            alt="Warning"
            />): (
            <img
                // src="/icons/ic-round-check.png"
                // alt="Check"
            />
        );

    return (
        <div className="flex flex-row items-center">
            <div className={`${backgroundColors.warning} w-24 h-6 flex flex-row items-center rounded-sm gap-0.5 pl-0.5`}>
                {matchIcon}
                <h4 className="text-white font-bold text-left text-sm ">
                    {percent}% Match
                </h4>
            </div>
        </div>
    );
}
export default MatchComponent;