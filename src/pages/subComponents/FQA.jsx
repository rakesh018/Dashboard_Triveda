import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Services() {
    const [fqas, setFQAs] = useState([]);

    const [question,setQuestion] = useState("")
    const [answer,setAnswer] = useState("")


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
    }, [])

    //add FAQ

    async function handleAddFAQ()
    {
        try {
            const apiUrl = import.meta.env.VITE_API_URL;
            const response = await axios.post(`${apiUrl}/api/website/addFQA`,{question,answer});
         
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    //delete fqa
    const handleDelete = async (id) => {
        console.log(id)
        try {
            const apiUrl = import.meta.env.VITE_API_URL;
            const response = await axios.delete(`${apiUrl}/api/website//deleteFQA/${id}`);
            console.log(response)
            setFQAs(prevFQAs => prevFQAs.filter(fqa => fqa._id !== id));
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="ml-52 bg-black w-full flex-row p-8 items-center justify-center h-screen">
            <div className="bg-gray-900 shadow-md rounded-md p-6 mb-8">
                <h1 className="text-3xl font-semibold text-gray-50">FQA Section</h1>
            </div>

            <div className='bg-gray-900 w-full shadow-md rounded-md p-6 mb-8'>
                <div className='mt-4 flex w-[500px] flex-col gap-4 items-left'>
                    <input
                        type='text'
                        placeholder='Add question'
                        value={question}
                        onChange={(e)=>setQuestion(e.target.value)}
                        className='bg-gray-800 border border-gray-700 text-gray-200 w-[500px] px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-gray-600'
                    />
                    <input
                        type='text'
                        placeholder='Add Answer'
                        value={answer}
                        onChange={(e)=>setAnswer(e.target.value)}
                        className='bg-gray-800 border border-gray-700 text-gray-200 w-[500px] px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-gray-600'
                    />
                    <button
                        type="button"
                        onClick={handleAddFAQ()}
                        className="text-white font-bold bg-violet-950 hover:bg-violet-600 focus:ring-4 rounded-md text-sm px-5 py-3"
                    >
                        Add to FAQs
                    </button>
                </div>
            </div>
            <div className="bg-gray-900 shadow-md rounded-md p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-50 mb-4">FAQs</h2>

                {fqas.length > 0 ? (
                    fqas.map(fqa => (

                        <div key={fqa._id} className="bg-gray-800 p-4 mb-4 rounded-md flex flex-row items-center gap-10">
                            <div className='w-[700px]'>
                                <h3 className="text-lg font-semibold text-violet-500">{fqa.question}</h3>
                                <p className="text-gray-300 mt-2">{fqa.answer}</p>
                            </div>
                            <div className='flex gap-3'>
                                <button className='bg-green-500 px-3 py-2 rounded-md'>Update</button>
                                <button className='bg-red-700 px-3 py-2 rounded-md' onClick={() => handleDelete(fqa._id)}>Delete</button>
                            </div>
                        </div>


                    ))
                ) : (
                    <p className="text-gray-300">No FAQs available.</p>
                )}
            </div>
        </div>
    );
}
