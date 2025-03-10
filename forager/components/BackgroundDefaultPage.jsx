import React from "react";

const BackgroundDefaultPage = ({children}) => {
    return (
        <div className="bg-[#F2F2F2] flex flex-col h-full overflow-y-scroll ">   
            {children}
        </div>
    );
}
export default BackgroundDefaultPage;