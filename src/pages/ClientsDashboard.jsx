import React from 'react';

export default function ClientsDashboard() {
  const clients = [
    { name: 'Luffy', email: 'luffy@gmail.com', purpose: 'App Development' },
    { name: 'Zoro', email: 'zoro@gmail.com', purpose: 'App Development' },
    { name: 'Sanji', email: 'sanji@gmail.com', purpose: 'Web Development' },
  ];

  return (
    <div className='w-full min-h-screen bg-black p-8 text-textColor-light font-opensans'>
      <div className='bg-gray-900 shadow-md rounded-md p-6 mb-8'>
        <h1 className='text-3xl font-semibold text-gray-50'>Clients Dashboard</h1>
      </div>
      
      <div className='bg-gray-900 shadow-md rounded-md p-6 font-opensans'>
        <table className='w-full text-sm text-left text-gray-700'>
          <thead className='text-xs uppercase bg-gray-950 text-gray-50'>
            <tr>
              <th scope='col' className='px-6 py-3'>Client name</th>
              <th scope='col' className='px-6 py-3'>Email</th>
              <th scope='col' className='px-6 py-3'>Purpose</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client, index) => (
              <tr key={index} className={`bg-gray-950 ${index !== clients.length-1 ? 'border-b':''}  border-gray-50`}>
                <th scope='row' className='px-6 py-4 font-medium text-gray-50'>{client.name}</th>
                <td className='px-6 py-4 text-gray-50'><a href={`mailto:${client.email}`}>{client.email}</a></td>
                <td className='px-6 py-4 text-gray-50'>{client.purpose}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
