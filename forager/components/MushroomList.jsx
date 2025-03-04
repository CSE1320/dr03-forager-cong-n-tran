import React from "react";
import Mushroom from "./Mushroom";


const MushroomList = ({mushrooms}) => {
    return (
        <div className="flex flex-wrap gap-1 p-2">
            {mushrooms.map((mushroom, id) => (
                <Mushroom 
                    key={id}
                    imagePath={mushroom.image} 
                    title={mushroom.title} 
                    description={mushroom.description}
                    isToxic={mushroom.toxic}/>
            ))}
        </div>
    );
}
export default MushroomList;