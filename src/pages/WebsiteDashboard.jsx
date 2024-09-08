import React from 'react';

export default function WebsiteDashboard() {
    return (
        <div className='w-full ml-64 min-h-screen bg-black p-8 text-textColor-light font-opensans'>
            <div className='bg-gray-900 shadow-md rounded-md p-6 mb-8'>
                <h1 className='text-3xl font-semibold text-gray-50'>Website Dashboard</h1>
            </div>

          
            <div className='bg-gray-900 shadow-md rounded-md p-6 mb-8'>
                <h1 className='text-xl font-semibold text-gray-50'>Services</h1>
                <div className='mt-4 flex flex-row gap-4 items-center'>
                    <input
                        type='text'
                        placeholder='Add New Service'
                        className='bg-gray-800 border border-gray-700 text-gray-200 w-[500px] px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-gray-600'
                    />
                  
                    <button
                        type="button"
                        className="text-white font-bold bg-violet-950 hover:bg-violet-600 focus:ring-4 rounded-md text-sm px-5 py-3"
                    >
                        Add Service
                    </button>
                </div>
               
            </div>

            <div className='bg-gray-900 shadow-md rounded-md p-6 mb-8'>
                <h1 className='text-xl font-semibold text-gray-50'>Clients</h1>
                <div className='mt-4 flex flex-row gap-4 items-center'>
                    <input
                        type='text'
                        placeholder='Add New Client'
                        className='bg-gray-800 border border-gray-700 text-gray-200 w-[500px] px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-gray-600'
                    />
                    <button
                        type="button"
                        className="text-white font-bold bg-violet-950 hover:bg-violet-600 focus:ring-4 rounded-md text-sm px-5 py-3"
                    >
                        Add Client
                    </button>
                </div>
            </div>

            <div className='bg-gray-900 shadow-md rounded-md p-6 mb-8'>
                <h1 className='text-xl font-semibold text-gray-50'>Work Portfolio</h1>
                <div className='mt-4 flex flex-col gap-4 w-96'>
                    <input
                        type='text'
                        placeholder='Add Title'
                        className='bg-gray-800 border  border-gray-700 text-gray-200 px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-gray-600 w-full'
                    />
                    <input
                        type='text'
                        placeholder='Add Description'
                        className='bg-gray-800 border border-gray-700 text-gray-200 px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-gray-600 w-full'
                    />

                    <button
                        type="button"
                        className="text-white font-bold bg-violet-950 hover:bg-violet-600 focus:ring-4 focus:ring-violet-300 rounded-md text-sm px-5 py-3 w-full"
                    >
                        Add
                    </button>
                </div>
            </div>
            <div className='bg-gray-900 shadow-md rounded-md p-6 mb-8'>
                <h1 className='text-xl font-semibold text-gray-50'>Work Portfolio</h1>
                <div className='mt-4 flex flex-col gap-4 w-96'>
                 
                  <h1></h1>

                    <button
                        type="button"
                        className="text-white font-bold bg-violet-950 hover:bg-violet-600 focus:ring-4 focus:ring-violet-300 rounded-md text-sm px-5 py-3 w-full"
                    >
                        Add
                    </button>
                </div>
            </div>

        </div>
    );
}
