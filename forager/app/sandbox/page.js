import Button from "@/components/Button";
import Message from "../../components/Message";
import Pill from "../../components/Pill";
import Polaroid from "../../components/Polaroid";
import Search from "@/components/Search";
import React from "react";
import PillList from "@/components/PillList";
import { filterData } from "@/data/development";
import FilterList from "@/components/FilterList";
import FilterSetting from "@/components/FilterSettings";
import BackgroundScreen from "@/components/BackgroundScreen";
import UserGreeting from "@/components/UserGreeting";


export default function SandboxPage() {
  return (
    <div className="page flex justify-center items-center flex-row flex-nowrap bg-gray-200">
    {/* <Search filterData={filterData}/> */}
    {/* <Pill displayName="Texas" isSelected={true}/> */}
    {/* <FilterList filterData={filterData}/> */}
    {/* <FilterSetting filterData={filterData}/> */}
    {/* <BackgroundScreen/>
      <UserGreeting name={"Chantelle"}/>
    <BackgroundScreen/> */}
    </div>
  );
}


  