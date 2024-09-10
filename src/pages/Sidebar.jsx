import React from 'react';
import Logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  return (
    <div className="fixed h-screen w-52 bg-black text-white flex flex-col border-r-[1px] border-gray-700 border-opacity-50">
      <div className="p-4">
        <img src={Logo} width={70} height={70} alt="Logo" />
      </div>

      <div className="flex flex-col flex-grow">
        <nav className="flex flex-col gap-8 px-4 font-opensans">
          <Link to="/">
            <div className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md p-2">
              Contacts Dashboard
            </div> 
          </Link>

       <div className='flex flex-col gap-2'>
       <div className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md  p-2 cursor-pointer" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            Website Dashboard
          </div>
          {isDropdownOpen && (
            <div className="left-0 right-3 w-44  bg-gray-800 rounded-md shadow-lg z-10">
              <Link to='/websitedashboard/clients'>
                <div className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md p-2">
                 Clients
                </div>
              </Link>
              <Link to='/websitedashboard/services'>
                <div className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md p-2">
                 Services
                </div>
              </Link>
              <Link to='/websitedashboard/reports'>
                <div className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md p-2">
                  Testimonals
                </div>
              </Link>
              <Link to='/websitedashboard/reports'>
                <div className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md p-2">
                 Portfolio
                </div>
              </Link>
              <Link to='/websitedashboard/fqas'>
                <div className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md p-2">
                 FAQ's
                </div>
              </Link>
            </div>
          )}
       </div>

          <Link to='/jobs'>
            <div className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md p-2">
              Jobs
            </div>
          </Link>
          <div className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md p-2">
            Notifications
          </div>
          <div className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md p-2">
            Settings
          </div>
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
