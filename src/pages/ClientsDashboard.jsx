import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Spinner from '../components/Spinner';

export default function ClientsDashboard() {
const [clients,setClients] = useState([])
const [loading,setLoading] = useState(true)
  useEffect(()=>{
   
    async function fetchContacts() 
    {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const data = await axios.get(`${apiUrl}/api/website/getContacts`)
        setClients(data.data)
        console.log(data)
        console.log(clients)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    } 

    fetchContacts()
  },[])
 

  

  return (
    <div className='w-full ml-52 min-h-screen bg-black p-8 text-textColor-light font-opensans'>
      <div className='bg-gray-900 shadow-md rounded-md p-6 mb-8'>
        <h1 className='text-3xl font-semibold text-gray-50'>Clients Dashboard</h1>
      </div>
      
      {!loading ?
      (
        <div className='bg-gray-950 shadow-md rounded-md p-6 font-opensans'>
        <table className='w-full text-sm text-left text-gray-700'>
          <thead className='text-xs uppercase bg-gray-950 text-gray-50'>
            <tr>
              <th scope='col' className='px-6 py-3'>Client name</th>
              <th scope='col' className='px-6 py-3'>Phone Number</th>
              <th scope='col' className='px-6 py-3'>Email</th>
              <th scope='col' className='px-6 py-3'>Work</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client, index) => (
              <tr key={index} className={`bg-gray-950 ${index !== clients.length-1 ? 'border-b':''} hover:bg-gray-900 border-gray-50`}>
                <th scope='row' className='px-6 py-4 font-medium text-gray-50'>{client.clientName}</th>
                <th scope='row' className='px-6 py-4 font-medium text-gray-50'>{client.phoneNumber}</th>

                <td className='px-6 py-4 text-gray-50'><a href={`mailto:${client.email}`}>{client.email}</a></td>
                <td className='px-6 py-4 text-gray-50'>{client.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      )   : (
        <Spinner/>
      )
    }
    </div>
  );
}
