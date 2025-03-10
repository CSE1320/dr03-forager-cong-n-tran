import React from "react";
import { backgroundColors } from "@/data/development";


const BackgroundDefaultPage = ({children}) => {
    return (
        <div className={`${backgroundColors.default} flex flex-col h-full overflow-y-scroll`}>   
            {children}
        </div>
    );
}
export default BackgroundDefaultPage;