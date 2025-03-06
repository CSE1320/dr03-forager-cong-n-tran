import React from "react";
import Mushroom from "./Mushroom";


const MushroomList = ({mushrooms, setMushrooms}) => {
    return (
        <div className="flex flex-wrap gap-1 p-2">
            {mushrooms.map((mushroom, id) => (
                <Mushroom 
                    key={id}
                    imagePath={mushroom.image} 
                    title={mushroom.title} 
                    scientificName={mushroom.scientificName}
                    description={mushroom.description}
                    isToxic={mushroom.toxic}
                    setMushrooms={setMushrooms}
                />
            ))}
        </div>
    );
}
export default MushroomList;