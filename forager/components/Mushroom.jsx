import React from "react";
import MatchComponent from "./MatchComponent";

const Mushroom = ({ imagePath, title, description, isToxic, scientificName, card = true }) => {
    const containerClass = card ? "w-32 h-40" : "w-72 h-80";
    const imageWrapperClass = card ? "w-24 h-32" : "w-72 h-72 pt-4";
    const imageClass = card ? "w-[90px] h-24" : "w-64 h-48 ";
    const warningIconClass = card ? "w-6 h-6 pl-2 pt-2 " : "w-5 h-5 mt-0.5 ml-3"; // it don't exist lol
    const titleClass = card ? "text-base" : "text-3xl self-start";

    return (
        <div className={` ${containerClass} flex flex-col items-center`}>
            <div className={` ${imageWrapperClass} flex relative justify-center bg-white shadow-md`}>
                <img className={` ${imageClass} object-cover mt-3`} src={imagePath} alt={description} />
                {isToxic && (
                    <div className="flex flex-row gap-2 absolute top-0 left-0 pt-0.5"> 
                        <img
                            src={card ? "/icons/ic_round-warning.png" : "/icons/skull.png"}
                            alt={card ? "Warning" : "Skull face"}
                            className={`top-0 left-0 ${warningIconClass}`}
                        />
                        {isToxic && !card && (
                            <MatchComponent percent={90} toxic={isToxic} />
                        )}
                    </div>
                    
                )}
                
            </div>
            <h1 className={`${titleClass} text-[#203B5F] rounded-md `}>{title}</h1>
            {!card && (
                <div className="self-start ">
                    <h3 className="text-xl text-[#203b5f] opacity-70">
                        {scientificName} 
                    </h3>
                </div>
            )}
        </div>
    );
}
export default Mushroom;
//"https://www.woodlandtrust.org.uk/media/48295/deathcap-fungi-amanita-phalloides-alamy-brgxfp-naturepix.jpg"
//border-2 border-blue-500 