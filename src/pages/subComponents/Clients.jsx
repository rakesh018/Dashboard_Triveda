import React from 'react';

export default function Clients() {
    const clients = [
        { name: 'Luffy', image: 'l.jpg', },
        { name: 'Zoro', image: 'z.jpg', },
        { name: 'Sanji', image: 's.jpg', },
    ];

    return (
        <div className='ml-52 bg-black w-full flex-row p-8 items-center justify-center h-screen'>
            <div className='bg-gray-900 shadow-md rounded-md p-6 mb-8'>
                <h1 className='text-3xl font-semibold text-gray-50'>Clients Details</h1>
            </div>

            <div className='bg-gray-900 w-full shadow-md rounded-md p-6 mb-8'>
                <div className='mt-4 flex w-[500px] flex-col gap-4 items-left'>
                    <input
                        type='text'
                        placeholder='Add Client Name'
                        className='bg-gray-800 border border-gray-700 text-gray-200 w-[500px] px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-gray-600'
                    />
                    <input
                        type='file'
                        accept='image/*'
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
                <h1 className='text-xl font-semibold text-gray-50'>Clients</h1>
                <div className='bg-gray-900 shadow-md rounded-md p-6 font-opensans'>
                    <table className='w-full text-sm text-left text-gray-700'>
                        <thead className='text-xs uppercase bg-gray-950 text-gray-50'>
                            <tr>
                                <th scope='col' className='px-6 py-3'>Client Name</th>
                                <th scope='col' className='px-6 py-3'>image</th>
                                <th scope='col' className='px-6 py-3'>Manage</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clients.map((client, index) => (
                                <tr key={index} className={`bg-gray-950 ${index !== clients.length - 1 ? 'border-b' : ''} border-gray-50`}>
                                    <th scope='row' className='px-6 py-4 font-medium text-gray-50'>{client.name}</th>
                                    <td className='px-6 py-4 text-gray-50'><a href={`mailto:${client.image}`}>{client.image}</a></td>
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
