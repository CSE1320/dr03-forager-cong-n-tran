import React from "react";

const BackgroundScreen = ({children}) => {
    return (
        <div className="bg-[#397367] flex justify-center items-center fixed inset-0">   
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