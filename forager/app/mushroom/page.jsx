"use client";
import Link from 'next/link';
import NavBar from '../../components/NavBar';
import PageHeader from '../../components/PageHeader';
import BackgroundDefaultPage from '@/components/BackgroundDefaultPage';
import Mushroom from '@/components/Mushroom';
import WarningCard from '@/components/WarningCard';
import { useState } from 'react';
import ReportError from '@/components/ReportError';
import NagivateButton from '@/components/NavigateButton';
import BubbleText from '@/components/BubbleText';


export default function MushroomPage() {

  const [filters, setFilters] = useState("");
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
    <BackgroundDefaultPage>
      <PageHeader title="Match Results"/>
      <div className="border-2 border-blue-500 flex flex-col items-center ml-16 mr-16 overflow-y-scroll ">
        <ReportError/>
        <BubbleText 
          header="WARNING" 
          description={["This is a toxic species, proceed with caution."]}
          bgColor="bg-[#FF5050]"
          img="/icons/icon_warning.svg"
          imgAlt="warning icon"
        /> 
        <NagivateButton name="Compare" destination="/comparison"/>
        <Mushroom 
          imagePath={mushroom.image}
          title={mushroom.title}
          description={mushroom.description}
          isToxic={mushroom.toxic}
          setMushrooms={setFilters}
          scientificName={mushroom.scientificName}
          card={false}
        />
        <BubbleText 
          header="Fast Facts" 
          description={["Cap Diameter: 5-15cm", "Gill Color: White",  "Stem Color: White",  "Habitat: Temperate regions"]}
          bgColor="bg-[#8E4A49]"
        /> 
        <p className='text-base'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
        </p>
        <strong className='text-2xl text-[#324053]'>
          Similar Matches
        </strong>
         
      </div>
     
      {/* <NavBar /> */}
    </BackgroundDefaultPage>
  );
}


  {/* <Link href="/comparison">
    <button>Go to Mushroom Comparison Page</button>
  </Link> */}