"use client";
import BackgroundDefaultPage from '@/components/BackgroundDefaultPage';
import PageHeader from '@/components/PageHeader';
import ReportError from '@/components/ReportError';
import NavBar from '../../components/NavBar';
import BubbleText from '@/components/BubbleText';
import Mushroom from '@/components/Mushroom';
import Table from '@/components/Table';
import { mushroomData, similarMushrooms } from '@/data/development';
import { useState } from 'react';

export default function MushroomComparisonPage() {

  const [yourMushroom, setYourMushroom] = useState(mushroomData[0])
  const [compareMushroom, setCompareMushroom] = useState(mushroomData[1])

  return (
    <div className="page">
      <BackgroundDefaultPage>
      <PageHeader title="Compare" destination="/mushroom" />
      <div className="border-2 border-blue-500 flex flex-col items-center ml-16 mr-16 mt-10">
        <BubbleText 
            header="WARNING" 
            description={["This is a toxic species, proceed with caution."]}
            bgColor="bg-[#FF5050]"
            img="/icons/icon_warning.svg"
            imgAlt="warning icon"
          /> 
      </div>
      <div className='flex flex-col items-center ml-10 mr-10 mt-10 '>
        <div className='flex'>
          <Mushroom 
            imagePath={yourMushroom.image}
            title={"Your Photo"}
            description={yourMushroom.description}
            isToxic={yourMushroom.toxic}
            scientificName={yourMushroom.scientificName}
            size='compare'
            card={true}
          />
          <Mushroom 
            imagePath={compareMushroom.image}
            title={compareMushroom.title}
            description={compareMushroom.description}
            isToxic={compareMushroom.toxic}
            scientificName={compareMushroom.scientificName}
            size='compare'
            card={true}
          />
        </div>
        <Table 
          mushroom1={yourMushroom} 
          setMushroom1={setYourMushroom}
          mushroom2={compareMushroom}
          setMushroom2={setCompareMushroom}
        />
      </div>
      </BackgroundDefaultPage>
      <NavBar />
    </div>
  );
}
