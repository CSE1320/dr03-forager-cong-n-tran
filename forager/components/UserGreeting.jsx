import React from "react";
import { backgroundColors } from "@/data/development";

const UserGreeting = ({name}) => {
    const getInitial = (name) => {
        return name ? name.charAt(0).toUpperCase() : '';
    };

    return (
        <div className="text-white font-black flex flex-row justify-between w-full pt-16 pr-6 pl-6 fixed top-0">
            <div>
                <div className="">
                    <p className="text-2xl"> Hi, </p>
                    <h1 className="text-5xl">{name}!</h1>
                </div>
            </div>
            <div className="pt-8">
                <div className={`${backgroundColors.profile} text-2xl rounded-full flex items-center justify-center h-12 w-12`}>
                    {getInitial(name)}
                </div>
            </div>
        </div>
    );
}
export default UserGreeting;