// Base.js
import React from 'react';
import SideBar from '../Components/SideBar';
import NavBar from '../Components/NavBar';

export default function Base({children}) {
  return (

    <div className=' bg-slate-400'>
      <div className="flex h-screen">
      <SideBar />
      <div className="flex flex-col w-full">
        <NavBar />
        <div className="overflow-y-auto p-4 bg-slate-400">
        {children}
        </div>
      </div>
    </div>
    </div>
  );
}
