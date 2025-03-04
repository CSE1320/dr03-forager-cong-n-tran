import React from "react";


const BackgroundWhiteOverlay = ({children}) => {
    return (
        <div className="bg-[#F2F2F2] pt-8 flex flex-col items-center rounded-t-md fixed bottom-0 w-full h-4/5">   
            {children}
        </div>
    );
}
export default BackgroundWhiteOverlay;