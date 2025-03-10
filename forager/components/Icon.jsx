import React from "react";

const Icon = ({imagePath, isButton = false, onClick = null}) => {
    const size = isButton ? "w-16 h-16" : "w-10 h-10"
    
    return (
        <button className={size} onClick={onClick}> 
            <img src={imagePath}/>
        </button>
    )


}
export default Icon; 