import React from 'react';

export default function Sidebar() {
  return (
    <div className="h-screen w-64 bg-black  text-white flex flex-col justify-between border-r-[1px] border-opacity-5">

      <div className="p-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      
  
      <nav className="flex flex-col gap-4 px-4">
        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md p-2">
          Dashboard
        </a>
        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md p-2">
          Profile
        </a>
        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md p-2">
          Settings
        </a>
        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md p-2">
          Notifications
        </a>
      </nav>
      
   
      <div className="p-4">
        <button className="w-full bg-red-500 hover:bg-red-600 text-white rounded-md p-2">
          Logout
        </button>
      </div>
    </div>
  );
}
