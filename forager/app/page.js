"use client";

import DashboardPage from './dashboard/page';  // Use relative path
import Sandbox from './sandbox/page';  // Use relative path
import React from 'react';
import { useState } from 'react';
import { filterData, mushroomData } from '@/data/development';

export default function Home() {
  // return <DashboardPage/>;  // Render the DashboardPage as the default for the '/' route
  return <Sandbox />;  // Render the Sandbox as the default for the '/' route
}
