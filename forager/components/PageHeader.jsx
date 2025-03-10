import React from "react";
import NagivateButton from "./NavigateButton";

const PageHeader = ({ title, destination }) => {
    return (
        <div className="flex top-0 sticky bg-[#579076] w-full h-32 flex items-end z-50">
            <NagivateButton destination={destination} header={true}/>
            <h1 className="absolute bottom-0 mb-3 w-full text-center text-3xl text-[#FFFFFF] font-bold">{title}</h1>
        </div>
    );
}
export default PageHeader;