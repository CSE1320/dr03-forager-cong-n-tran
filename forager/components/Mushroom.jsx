import React from "react";
import MatchComponent from "./MatchComponent";
import { FaPlus } from "react-icons/fa";
import MatchPercent from "./MatchPercent";
import { mushroomData } from "@/data/development";
const Mushroom = ({ imagePath, title, description, scientificName, isToxic, setMushrooms, card = false, dashboard = false, size = 'dashboard', clickable = false}) => {

    // importing css makes the css do weird things (sometimes render sometimes not)
    const mushroomSize = {
        dashboard: {
            containerClass: "w-32 h-40", 
            imageWrapperClass: "w-24 h-32 pt-1", 
            imageClass: "h-28 p-1", 
            percentContainer: "pt-0.5 pl-1`", 
            warningIconClass: "w-6 h-6 pl-2 pt-2 ", 
            titleClass: "text-base text-center", 
            titleCardClass: "flex-col items-center"
        }, 
        mushroom: {
            containerClass: "w-72 h-88", 
            imageWrapperClass: "w-72 h-64 pt-5", 
            imageClass: "w-full h-48 p-2", 
            percentContainer: "pt-0.5 pl-1`", 
            warningIconClass: "w-5 h-5 mt-0.5 ml-3", 
            titleClass: "text-3xl self-start", 
            titleCardClass: "flex-row justify-between mt-6"
        }, 
        compare: {
            containerClass: "w-48 h-72", 
            imageWrapperClass: "w-40 h-64", 
            imageClass: "w-full h-48 mt-6 p-1 ", 
            percentContainer: "pt-0.5 pl-1`", 
            warningIconClass: "text-base text-center", 
            titleClass: "pt-2 text-2xl  text-center", 
            titleCardClass: "flex-col items-center"
        }, 
        similar: {
            containerClass: "w-46 h-48", 
            imageWrapperClass: "w-32 h-40", 
            imageClass: "w-full h-32 p-1", 
            percentContainer: "pt-2 pl-2", 
            warningIconClass: "text-base text-center mt-1", 
            titleClass: "pt-2 text-xl  text-center", 
            titleCardClass: "flex-col items-center"
        },  
        default: {
            containerClass: "w-32 h-40", 
            imageWrapperClass: "w-24 h-32", 
            imageClass: "w-[90px] h-24", 
            percentContainer: "pt-0.5 pl-1`", 
            warningIconClass: "text-base text-center", 
            titleClass: "text-base text-center", 
            titleCardClass: "flex-col items-center"
        }, 
    }
    const mushroomStyle = mushroomSize[size]
    
    const hadnleMoveScreen = () => {
        window.location.href = "/mushroom";
    }

    const handleFavoriteClick = () => {
        setMushrooms(mushroomData.map(mushroom => 
                mushroom.title === title ? { ...mushroom, favorite: true } : mushroom
            )
        );
    }

    const titleTag = () => {
        if (!card) {
            return (
                <div className={`flex ${mushroomStyle.titleCardClass} w-full`}>
                    <div>
                        <h1 className={`${mushroomStyle.titleClass} text-[#203B5F] rounded-md }`}>{title}</h1>
                        <div className="self-start">
                            <h3 className="text-xl text-[#203b5f] opacity-70">
                                {scientificName} 
                            </h3>
                        </div>
                    </div>
                    <button className="mt-3 mr-1 bg-[#579076] w-12 h-12 rounded-full flex justify-center items-center">
                        <FaPlus onClick={handleFavoriteClick} className="text-white text-2xl"/>
                    </button>
                </div>
                )
            }
        else{
            return (
                <div className={`flex ${mushroomStyle.titleCardClass} w-full`}>
                    <div>
                        <h1 className={`${mushroomStyle.titleClass} text-[#203B5F] rounded-md }`}>{title}</h1>
                    </div>
                </div>
            )
        }
        }

    return (
        <div 
            className={`flex flex-col items-center ${mushroomStyle.containerClass}`} 
            onClick={clickable ? hadnleMoveScreen : null}
        >
            <div className={`flex relative bg-white shadow-xl ${mushroomStyle.imageWrapperClass}`}>
                <img className={`${mushroomStyle.imageClass}`} src={imagePath} alt={description} />
                {isToxic && (
                    <div className={`flex flex-row gap-2 absolute top-0 left-0 ${mushroomStyle.percentContainer}`}> 
                        {size === 'similar' && (
                            <MatchPercent percent={90} toxic={isToxic}/>
                        )}
                        <img
                            src={card && dashboard ? "/icons/ic_round-warning.png" : "/icons/skull.png"}
                            alt={card && dashboard ? "Warning" : "Skull face"}
                            className={mushroomStyle.warningIconClass}
                        />
                        {isToxic && !dashboard && (
                            <MatchComponent percent={90} toxic={isToxic} />
                        )}
                    </div> 
                )}
            </div>
            {titleTag()}
        </div>
    );
}
export default Mushroom;
//"https://www.woodlandtrust.org.uk/media/48295/deathcap-fungi-amanita-phalloides-alamy-brgxfp-naturepix.jpg"
//border-2 border-blue-500 


// <div className={`flex ${titleCardClass} w-full`}>
//     <div>
//         <h1 className={`${titleClass} text-[#203B5F] rounded-md }`}>{title}</h1>
//         {!card && (
//             <div className="self-start">
//                 <h3 className="text-xl text-[#203b5f] opacity-70">
//                     {scientificName} 
//                 </h3>
//             </div>
//         )}
//     </div>
//     {!card && (
//         <button className="mt-3 mr-1 bg-[#579076] w-12 h-12 rounded-full flex justify-center items-center">
//             <FaPlus onClick={onClick} className="text-white text-2xl"/>
//         </button>
//     )}
// </div>