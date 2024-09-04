import React from 'react';

export default function ClientsDashboard() {
  return (
    <div className='w-full min-h-screen bg-black p-8 text-textColor-light font-opensans'>
      <div className='bg-gray-900 shadow-md rounded-md p-6 mb-8'>
        <h1 className='text-3xl font-semibold text-gray-50'>Clients Dashboard</h1>
      </div>
      
      <div className='bg-gray-900 shadow-md rounded-md p-6'>
        <table className='w-full text-sm text-left text-gray-700'>
          <thead className='text-xs uppercase bg-gray-950 text-gray-50'>
            <tr>
              <th scope='col' className='px-6 py-3'>Client name</th>
              <th scope='col' className='px-6 py-3'>Email</th>
              <th scope='col' className='px-6 py-3'>Purpose</th>

            </tr>
          </thead>
          <tbody>
            <tr className='bg-gray-950  border-b border-gray-50'>
              <th scope='row' className='px-6 py-4 font-medium text-gray-50'>Luffy</th>
              <td className='px-6 py-4 text-gray-50'>luffy@gmail.com</td>
              <td className='px-6 py-4 text-gray-50'>App Development</td>
            </tr>
            <tr className='bg-gray-950 border-b border-gray-50'>
            <th scope='row' className='px-6 py-4 font-medium text-gray-50'>Zoro</th>
              <td className='px-6 py-4 text-gray-50'>zoro@gmail.com</td>
              <td className='px-6 py-4 text-gray-50'>App Development</td>
            </tr>
            <tr className='bg-gray-950 border-b border-gray-50'>
            <th scope='row' className='px-6 py-4 font-medium text-gray-50'>Sanji</th>
              <td className='px-6 py-4 text-gray-50'>sanji@gmail.com</td>
              <td className='px-6 py-4 text-gray-50'>Web Development</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
