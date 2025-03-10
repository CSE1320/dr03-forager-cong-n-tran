import React from "react";
import Mushroom from "./Mushroom";


const MushroomList = ({mushrooms, setMushrooms, isDashboard, type = "dashboard"}) => {
    const format = type === "similar" ? "justify-between" : ""
    return (
        <div className="">
            <ul className={`flex flex-wrap ${format} gap-2`}>
                {mushrooms.map((mushroom, id) => (
                    <li key={id}>
                        <Mushroom 
                            imagePath={mushroom.image} 
                            title={mushroom.title} 
                            scientificName={mushroom.scientificName}
                            description={mushroom.description}
                            isToxic={mushroom.toxic}
                            setMushrooms={setMushrooms}
                            card={true}
                            dashboard={isDashboard}
                            size={type}
                            clickable={true}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default MushroomList;