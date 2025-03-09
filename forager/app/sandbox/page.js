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
import PageHeader from "@/components/PageHeader";
import WarningCard from "@/components/WarningCard";
import ReportError from "@/components/ReportError";
import NagivateButton from "@/components/NavigateButton";
import BubbleText from "@/components/BubbleText";
import { similarMushrooms } from "@/data/development";
import Table from "@/components/Table";


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
  const m = mushroomData[0]
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
        imagePath={m.image}
        title={m.title}
        description={m.description}
        isToxic={m.toxic}
        scientificName={m.scientificName}
        card={true}
        dashboard={true}
        size="mushroom"
      />
      {/* <MushroomList mushrooms={similarMushrooms}/> */}
      {/* <MatchComponent percent={90} toxic={true}/> */}
      {/* <PageHeader title="Match Result"/> */}
      {/* <WarningCard/> */}
      {/* <ReportError/> */}
      {/* <NagivateButton/> */}
      {/* <BubbleText 
        header="Fast Facts" 
        description={["Cap Diameter: 5-15cm", "Gill Color: White",  "Stem Color: White",  "Habitat: Temperate regions"]}
        bgColor="bg-[#8E4A49]"
      />  */}
      {/* <Table compareData={mushroomData}/> */}
      
    </div>
  );
}


  