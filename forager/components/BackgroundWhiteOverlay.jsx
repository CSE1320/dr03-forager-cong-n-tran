import React from "react";
import { backgroundColors } from "@/data/development";

const BackgroundWhiteOverlay = ({children}) => {
    return (
        <div className={`${backgroundColors.default} pt-8 flex flex-col items-center rounded-t-md fixed bottom-0 w-full h-4/5`}>   
            {children}
        </div>
    );
}
export default BackgroundWhiteOverlay;