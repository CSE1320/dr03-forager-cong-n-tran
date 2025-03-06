import React from "react";

const PageHeader = ({ title, previousScreen }) => {
    const onBack = () => {
        // if (previousScreen) {
        //     previousScreen();
        // }
    }
    return (
        <div className="relative bg-[#579076] w-full h-32 flex items-end">
            <button className="absolute left-0 bottom-0  ml-3">
                <img src="/icons/back.png" alt="Back" className="w-8 h-16"/>
            </button>
            <h1 className="absolute bottom-0 mb-3 w-full text-center text-3xl text-[#FFFFFF] font-bold">{title}</h1>
        </div>
    );
}
export default PageHeader;