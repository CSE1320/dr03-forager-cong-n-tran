import Link from "next/link";
import React from "react";

const NagivateButton = ({name = '', destination = '', header=false}) => {
    const buttonLocation = header ? "absolute left-0 bottom-0 ml-3": "w-full h-5 text-[#888787] flex justify-end ";
    const imgSource = header ? "/icons/back.png": "/icons/gray_arrow-outlined.png";
    const imgSize = header ? "w-8 h-16": "w-3 h-5";
    return (
            <div className={buttonLocation}>
                <Link href={destination} passHref>
                    <div className="border-2 border-blue-500 flex flex-row gap-2">
                        <strong className="text-sm whitespace-nowrap">{name}</strong>
                        <img src={imgSource} alt="gray arrow icon" className={imgSize}/>
                    </div>
                </Link>
            </div>

    );
}
export default NagivateButton;