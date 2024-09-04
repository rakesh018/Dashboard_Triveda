import React from 'react';
import Logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="h-screen w-64 bg-black text-white flex flex-col border-r-[1px] border-gray-700 border-opacity-50">
      <div className="p-4">
        <img src={Logo} width={70} height={70} alt="Logo" />
      </div>

      <div className="flex flex-col flex-grow">
        <nav className="flex flex-col gap-8 px-4 font-opensans">
          <Link to="/">
            <div className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md p-2">
              Clients Dashboard
            </div>
          </Link>
          <Link to='/websitedasboard'>
          <a className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md p-2">
            Website Dashboard
          </a>
          </Link>
        <Link to='/jobs'>
        <a className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md p-2">
            Jobs
          </a>
        </Link>
       
          <a className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md p-2">
            Notifications
          </a>
          <a className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md p-2">
            Settings
          </a>
        </nav>

        <div className="p-4 mt-auto">
          <button className="w-full bg-red-500 hover:bg-red-600 text-white rounded-md p-2">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
