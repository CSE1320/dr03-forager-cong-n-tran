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
import MushroomList from '@/components/MushroomList';
import { mushroomData } from '@/data/development';


export default function MushroomPage() {

  const [filters, setFilters] = useState("");
  const matchResultMushroom = mushroomData[0];
  const similarMushrooms = mushroomData.slice(1, 5);
  

  return (
    <div>
      <PageHeader title="Match Results" destination="/dashboard"/>
      <BackgroundDefaultPage>
        <div className="flex flex-col items-center ml-16 mr-16 gap-6">
          <div className='flex flex-col gap-2 mt-2'>
            <ReportError/>
            <BubbleText 
              header="WARNING" 
              description={["This is a toxic species, proceed with caution."]}
              bgColor="bg-[#FF5050]"
              img="/icons/icon_warning.svg"
              imgAlt="warning icon"
            /> 
          </div>
          <div className='flex flex-col gap-2'>
            <NagivateButton name="Compare" destination="/comparison"/>
            <Mushroom 
              imagePath={matchResultMushroom.image}
              title={matchResultMushroom.title}
              description={matchResultMushroom.description}
              isToxic={matchResultMushroom.toxic}
              setMushrooms={setFilters}
              scientificName={matchResultMushroom.scientificName}
              size='mushroom'
            />
          </div>
          <BubbleText 
            header="Fast Facts" 
            description={["Cap Diameter: 5-15cm", "Gill Color: White",  "Stem Color: White",  "Habitat: Temperate regions"]}
            bgColor="bg-[#8E4A49]"
          /> 
          <p className='text-base'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
          </p>
          <div className='text-center'>
            <strong className='text-2xl text-[#324053]'>
              Similar Matches
            </strong>
            <MushroomList 
              mushrooms={similarMushrooms}
              type={"similar"}
              isDashboard={true}
            />
          </div>
        </div>
      
 
      </BackgroundDefaultPage>
      <NavBar />
    </div>
  );
}


  {/* <Link href="/comparison">
    <button>Go to Mushroom Comparison Page</button>
  </Link> */}