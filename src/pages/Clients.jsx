import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import Button from '../components/Button';

export default function Clients() {
    const [clients, setClients] = useState([]);
    const [companyName, setCompanyName] = useState("");
    const [logo, setLogo] = useState(null);
    const [loading, setLoading] = useState(true); 
    const [buttonLoading, setButtonLoading] = useState(false);

    useEffect(() => {
        async function fetchClients() {
            try {
                const apiUrl = import.meta.env.VITE_API_URL;
                const response = await axios.get(`${apiUrl}/api/website/getAllClientCompanies`);
                setClients(response.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false); 
            }
        }

        fetchClients();
    }, []);

    async function handleAddClient(event) {
        event.preventDefault(); // Prevent default form submission
        setButtonLoading(true);
        
        const formData = new FormData();
        formData.append('companyName', companyName);
        formData.append('image', logo);  

        try {
            const apiUrl = import.meta.env.VITE_API_URL;
            const response = await axios.post(`${apiUrl}/api/website/addClientCompany`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setCompanyName("");
            setLogo(null);
            setClients([...clients, response.data]);
        } catch (error) {
            console.log(error);
        } finally {
            setButtonLoading(false);
        }
    }

    async function handleDeleteClient(id) {
        try {
            const apiUrl = import.meta.env.VITE_API_URL;
            await axios.delete(`${apiUrl}/api/website/deleteClient/${id}`);
            setClients(clients.filter(client => client._id !== id)); // Remove deleted client from the list
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='ml-52 bg-black w-full min-h-screen flex-row p-8 items-center justify-center'>
            <div className='bg-gray-900 shadow-md rounded-md p-6 mb-8'>
                <h1 className='text-3xl font-semibold text-gray-50'>Clients Details</h1>
            </div>

            <div className='bg-gray-900 w-full shadow-md rounded-md p-6 mb-8'>
                <form onSubmit={handleAddClient} className='mt-4 flex w-[500px] flex-col gap-4 items-left'>
                    <input
                        type='text'
                        placeholder='Add Client Company Name'
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        required
                        className='bg-gray-800 border border-gray-700 text-gray-200 w-[500px] px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-gray-600'
                    />
                    <input
                        type='file'
                        accept='image/*'
                        onChange={(e) => setLogo(e.target.files[0])}
                        required
                        className='bg-gray-800 border border-gray-700 text-gray-200 w-[500px] px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-gray-600'
                    />

                    <Button label="Add Client" handlebutton={handleAddClient} buttonLoading={buttonLoading} />
                </form>
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
                            {loading ? (
                                <tr>
                                    <td colSpan="3" className='text-center py-4'>
                                        Loading...
                                    </td>
                                </tr>
                            ) : (
                                clients.map((client, index) => (
                                    <tr key={index} className={`bg-gray-950 ${index !== clients.length - 1 ? 'border-b' : ''} border-gray-50`}>
                                        <th scope='row' className='px-6 py-4 font-medium text-gray-50'>{client.companyName}</th>
                                        <td className='px-6 py-4 text-gray-50'>
                                            <img src={client.logo} width={20} height={20} alt="Client logo" />
                                        </td>
                                        <td className='px-6 py-4 text-gray-50'>
                                            <div className='flex gap-3'>
                                              
                                                <Button  label="Update" />
                                                <Button handlebutton={() => handleDeleteClient(client._id)} label="Delete"    bgColor="bg-rose-600"  />
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
