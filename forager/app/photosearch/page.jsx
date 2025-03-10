"use client"; 
import React from 'react';
import NavBar from '../../components/NavBar';
import NagivateButton from '@/components/NavigateButton';
import Icon from '@/components/Icon';
import { iconImagePaths } from '@/data/development';

export default function PhotoSearchPage() {
  const backgroundImage = {backgroundImage: 'url(/icons/camera_screen.png)'}
  const onClick = () => {
    window.location.href = "/mushroom";
}

  
  return (
    <div className="page">
      <div className="flex flex-col justify-between h-screen bg-cover bg-center" style={backgroundImage}>
        <div className="relative flex items-end justify-between bg-black bg-opacity-50 h-32">
          <NagivateButton destination={"/dashboard"} header={true}/>
          <div className="ml-auto pb-2 pr-4">
            <Icon imagePath={iconImagePaths.flash}/>
          </div>
        </div>
        <div className="flex items-center justify-center flex-grow">
          <div className="border-2 border-white w-64 h-64"></div>
        </div>
        <div className="flex items-center justify-evenly bg-black bg-opacity-50 h-32">
          <Icon imagePath={iconImagePaths.album}/>
          <Icon imagePath={iconImagePaths.cameraButton} isButton={true} onClick={onClick}/>
          <Icon imagePath={iconImagePaths.flip}/>
        </div>
      </div>
    </div>
  );
}
