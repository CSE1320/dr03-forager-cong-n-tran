import React from "react";
import Mushroom from "./Mushroom";


const MushroomList = ({mushrooms, setMushrooms, isDashboard}) => {
    return (
        <div className="">
            <ul className="border-2 border-blue-500 flex flex-wrap gap-1">
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
                            size="dashboard"
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default MushroomList;