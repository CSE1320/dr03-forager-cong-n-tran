import React from "react";
import { backgroundColors } from "@/data/development";

const BackgroundScreen = ({children}) => {
    return (
        <div className={`flex justify-center items-center fixed inset-0 ${backgroundColors.dashboardHeader}`}>   
            <img 
                src="/icons/mushroomBackground.png" 
                alt="Forager Mushroom Background image" 
                className="absolute top-0 right-0 h-64 w-64"
            />
            {children}
        </div>
    );
}
export default BackgroundScreen;