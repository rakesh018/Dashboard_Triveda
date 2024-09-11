import axios from 'axios';
import React, { useEffect, useState } from 'react';


export default function Services() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        async function getServices() {
            try {
                const apiUrl = import.meta.env.VITE_API_URL;
                const response = await axios.get(`${apiUrl}/api/website/getServices`);
                console.log(response.data);
                setServices(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        getServices();
    }, []);

  
    useEffect(() => {
        console.log('Services updated:', services);
    }, [services]);

    return (
        <div className='ml-52 bg-black w-full flex-row p-8 items-center justify-center h-screen'>
            <div className='bg-gray-900 shadow-md rounded-md p-6 mb-8'>
                <h1 className='text-3xl font-semibold text-gray-50'>Services Details</h1>
            </div>

            <div className='bg-gray-900 w-full shadow-md rounded-md p-6 mb-8'>
                <div className='mt-4 flex w-[500px] flex-col gap-4 items-left'>
                    <input
                        type='text'
                        placeholder='Add Service Name'
                        className='bg-gray-800 border border-gray-700 text-gray-200 w-[500px] px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-gray-600'
                    />
                    <input
                        type='text'
                        placeholder='Add Description '
                        className='bg-gray-800 border border-gray-700 text-gray-200 w-[500px] px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-gray-600'
                    />
                    <button
                        type='button'
                        className='text-white font-bold bg-violet-950 hover:bg-violet-600 focus:ring-4 rounded-md text-sm px-5 py-3'
                    >
                        Add to Services
                    </button>
                </div>
            </div>

            <div className='bg-gray-900 shadow-md rounded-md p-6 mb-8'>
                <h1 className='text-xl font-semibold text-gray-50'>Services</h1>
                <div>
                    {services && services.length > 0 ? (
                        services.map((service) => (
                            <div key={service.id} className='text-gray-200'>
                                <h1>{service.serviceName}</h1>
                                <p>{service.serviceDescription}</p>
                            </div>
                        ))
                    ) : (
                     <p>Loading..</p>
                    )}
                </div>
            </div>
        </div>
    );
}
