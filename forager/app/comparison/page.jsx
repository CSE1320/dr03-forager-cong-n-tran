"use client";
import BackgroundDefaultPage from '@/components/BackgroundDefaultPage';
import PageHeader from '@/components/PageHeader';
import ReportError from '@/components/ReportError';
import NavBar from '../../components/NavBar';
import BubbleText from '@/components/BubbleText';
import Mushroom from '@/components/Mushroom';
import Table from '@/components/Table';
import { mushroomData, yourMushroomData } from '@/data/development';
import { useState } from 'react';

export default function MushroomComparisonPage() {

  const [yourMushroom, setYourMushroom] = useState(yourMushroomData)
  const [compareMushroom, setCompareMushroom] = useState(mushroomData[0])

  return (
    <div className="page">
      <PageHeader title="Compare" destination="/mushroom" />
      <BackgroundDefaultPage>
        <div className="flex flex-col items-center ml-16 mr-16">
          <div className='flex flex-col gap-2 mt-12'>
            <ReportError visible={false}/>
            <BubbleText 
                header="WARNING" 
                description={["This is a toxic species, proceed with caution."]}
                bgColor="bg-[#FF5050]"
                img="/icons/icon_warning.svg"
                imgAlt="warning icon"
              /> 
            </div>
        </div>
        <div className='flex flex-col items-center ml-7 mr-7 gap-5'>
          <div className='flex mt-10'>
            <Mushroom 
              imagePath={yourMushroom.image}
              title={yourMushroom.title}
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
