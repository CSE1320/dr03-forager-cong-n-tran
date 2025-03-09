import React from "react";


const BubbleText = ({header, description, bgColor, img = '', imgAlt = '', }) => {
    return (
        <div className={`text-[#FFFFFF] w-full rounded-md px-4 py-1 ${bgColor}`}>
            <div className="flex align-center text-xl">
                {img.length > 0 && <img src={img} alt={imgAlt} />}
                <strong className="font-bold">{header}</strong>
            </div>
            <ul className="text-base break-words">
                {description.map((item, index) => (
                    <li key={index} className="list-none">{item}</li>
                ))}
            </ul>
        </div>
    );
}
export default BubbleText;