import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Services() {
    const [fqas, setFQAs] = useState([]);

    useEffect(() => {
        async function fetchFQAS() {
            try {
                const apiUrl = import.meta.env.VITE_API_URL;
                const response = await axios.get(`${apiUrl}/api/website/getFQAs`);
                setFQAs(response.data);
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchFQAS();
    }, []);

    return (
        <div className="ml-52 bg-black w-full flex-row p-8 items-center justify-center h-screen">
            <div className="bg-gray-900 shadow-md rounded-md p-6 mb-8">
                <h1 className="text-3xl font-semibold text-gray-50">FQA Section</h1>
            </div>

            <div className="bg-gray-900 shadow-md rounded-md p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-50 mb-4">FAQs</h2>
               
                {fqas.length > 0 ? (
                    fqas.map(fqa => (
                        <div key={fqa._id} className="bg-gray-800 p-4 mb-4 rounded-md">
                            <h3 className="text-lg font-semibold text-violet-500">{fqa.question}</h3>
                            <p className="text-gray-300 mt-2">{fqa.answer}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-300">No FAQs available.</p>
                )}
            </div>
        </div>
    );
}
