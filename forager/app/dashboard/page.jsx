"use client";
import UserGreeting from '@/components/UserGreeting';
import NavBar from '../../components/NavBar'; // Adjust the path as necessary
import BackgroundScreen from '@/components/BackgroundScreen';
import BackgroundWhiteOverlay from '@/components/BackgroundWhiteOverlay';
import Search from '@/components/Search';
import MushroomList from '@/components/MushroomList';
import { filterData } from '@/data/development';
import { mushroomData } from '@/data/development';
import { useState } from 'react';
import ActiveFilters from '@/components/ActiveFilters';

export default function DashboardPage() {
  const [filters, setFilters] = useState(filterData);
  const [filterMushrooms, setFilterMushrooms] = useState(mushroomData);

  return (
    <div className="flex flex-col h-screen">
      <BackgroundScreen>
        <UserGreeting name={"Chantelle"}/>
        <BackgroundWhiteOverlay>
          <Search filters={filters} setFilters={setFilters} setFilterMushrooms={setFilterMushrooms}/>
          <div className='w-full pt-10 flex flex-col justify-between gap-2'>
            <div className="pl-6 text-3xl font-bold text-[#324053] "> My Collections</div>        
            <ActiveFilters 
              filters={filters} 
              setFilters={setFilters} 
              setFilterMushrooms={setFilterMushrooms}
            />
            <MushroomList 
              mushrooms={filterMushrooms}
              setFilterMushrooms={setFilterMushrooms}
              isDashboard={true}
            />
          </div>
        </BackgroundWhiteOverlay>
      </BackgroundScreen>
      <NavBar />
    </div>
  );
}
//border-2 border-blue-500 