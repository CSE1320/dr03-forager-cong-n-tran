import Button from "@/components/Button";
import Message from "../../components/Message";
import Pill from "../../components/Pill";
import Mushroom from "../../components/Mushroom";
import Search from "@/components/Search";
import React from "react";
import PillList from "@/components/PillList";
import { filterData } from "@/data/development";
import FilterList from "@/components/FilterList";
import FilterSetting from "@/components/FilterSettings";
import BackgroundScreen from "@/components/BackgroundScreen";
import UserGreeting from "@/components/UserGreeting";
import MushroomList from "@/components/MushroomList";
import { mushroomData } from "@/data/development";
import MatchComponent from "@/components/MatchComponent";


export default function SandboxPage() {
  const mushroom = {
    image: "https://www.woodlandtrust.org.uk/media/48295/deathcap-fungi-amanita-phalloides-alamy-brgxfp-naturepix.jpg",
    title: "Death Cap",
    description: "One of the most poisonous mushrooms in the world.",
    toxic: true,
    scientificName: "Amanita phalloides",
    filters: {
        tags: ["Poisonous", "Deadly"],
        regions: ["Europe", "North America"],
        category: "Poisonous",
        favorites: false,
        recent: false
    }
}
  return (
    <div className="page flex justify-center items-center flex-row flex-nowrap bg-gray-200">
    {/* <Search filterData={filterData}/> */}
    {/* <Pill displayName="Texas" isSelected={true}/> */}
    {/* <FilterList filterData={filterData}/> */}
    {/* <FilterSetting filterData={filterData}/> */}
    {/* <BackgroundScreen/>
      <UserGreeting name={"Chantelle"}/>
    <BackgroundScreen/> */}
      {/* <MushroomList mushrooms={mushroomData}/> */}
      <Mushroom 
        imagePath={mushroom.image}
        title={mushroom.title}
        description={mushroom.description}
        isToxic={mushroom.toxic}
        scientificName={mushroom.scientificName}
        card={false}
      />
      {/* <MatchComponent percent={90} toxic={true}/> */}
    </div>
  );
}


  