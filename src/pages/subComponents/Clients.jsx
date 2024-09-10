import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Clients() {
    const [clients, setClients] = useState([]);
    const [companyName, setCompanyName] = useState("");
    const [logo, setLogo] = useState("");

    useEffect(() => {
        async function fetchClients() {
            try {
                const apiUrl = import.meta.env.VITE_API_URL;
                const response = await axios.get(`${apiUrl}/api/website/getAllClientCompanies`);
                setClients(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchClients();
    }, []);

    async function handleAddClient() {
        const formData = new FormData(); 
        formData.append('companyName', companyName);
        formData.append('image', logo);  

        try {
            const apiUrl = import.meta.env.VITE_API_URL;
            const response =  await axios.post(`${apiUrl}/api/website/addClientCompany`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setCompanyName(""); 
            setLogo(null);
            setClients([...clients,response.data])
          
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='ml-52 bg-black w-full h-auto flex-row p-8 items-center justify-center '>
            <div className='bg-gray-900 shadow-md rounded-md p-6 mb-8'>
                <h1 className='text-3xl font-semibold text-gray-50'>Clients Details</h1>
            </div>

            <div className='bg-gray-900 w-full shadow-md rounded-md p-6 mb-8'>
                <div className='mt-4 flex w-[500px] flex-col gap-4 items-left'>
                    <input
                        type='text'
                        placeholder='Add Client Company Name'
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className='bg-gray-800 border border-gray-700 text-gray-200 w-[500px] px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-gray-600'
                    />
                    <input
                        type='file'
                        accept='image/*'
                        onChange={(e) => setLogo(e.target.files[0])} // Correct file handling
                        className='bg-gray-800 border border-gray-700 text-gray-200 w-[500px] px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-gray-600'
                    />
                    <button
                        onClick={handleAddClient}
                        type="button"
                        className="text-white font-bold bg-violet-950 hover:bg-violet-600 focus:ring-4 rounded-md text-sm px-5 py-3"
                    >
                        Add Client
                    </button>
                </div>
            </div>

            <div className='bg-gray-900 shadow-md rounded-md p-6 mb-8'>
                <h1 className='text-xl font-semibold text-gray-50'>Clients</h1>
                <div className='bg-gray-900 shadow-md rounded-md p-6 font-opensans'>
                    <table className='w-full text-sm text-left text-gray-700'>
                        <thead className='text-xs uppercase bg-gray-950 text-gray-50'>
                            <tr>
                                <th scope='col' className='px-6 py-3'>Client Name</th>
                                <th scope='col' className='px-6 py-3'>Image</th>
                                <th scope='col' className='px-6 py-3'>Manage</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clients.map((client, index) => (
                                <tr key={index} className={`bg-gray-950 ${index !== clients.length - 1 ? 'border-b' : ''} border-gray-50`}>
                                    <th scope='row' className='px-6 py-4 font-medium text-gray-50'>{client.companyName}</th>
                                    <td className='px-6 py-4 text-gray-50'><img src={client.logo} width={20} height={20} alt="Client logo" /></td>
                                    <td className='px-6 py-4 text-gray-50'>
                                        <div className='flex gap-5'>
                                            <button className='bg-green-500 px-3 py-2 rounded-md'>Update</button>
                                            <button className='bg-red-700 px-3 py-2 rounded-md'>Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
