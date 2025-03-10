import React from "react";
import NagivateButton from "./NavigateButton";
import { backgroundColors } from "@/data/development";

const PageHeader = ({ title, destination }) => {
    return (
        <div className={`${backgroundColors.header} flex top-0 sticky w-full h-32 flex items-end z-50`}>
            <NagivateButton destination={destination} header={true}/>
            <h1 className="absolute bottom-0 mb-3 w-full text-center text-3xl text-white font-bold">{title}</h1>
        </div>
    );
}
export default PageHeader;