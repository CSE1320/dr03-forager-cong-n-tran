import React from "react";

const Polaroid = ({ imagePath, title, description }) => {
    return (
        <div className="w-[120px] h-[160px] flex flex-col items-center">
            <div className="flex relative justify-center w-[100px] h-[125px] bg-white shadow-md">
                <img className="w-[90px] h-[95px] object-cover mt-[5px]" src={"https://www.woodlandtrust.org.uk/media/48295/deathcap-fungi-amanita-phalloides-alamy-brgxfp-naturepix.jpg"} alt={description} />
            </div>
            <h1 className="title">{title}</h1>
        </div>
    );
}
export default Polaroid;

//border-2 border-blue-500 