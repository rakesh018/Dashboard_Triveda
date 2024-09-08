import React from 'react'

export default function Clients() {
  return (
    <div className='bg-gray-900 shadow-md rounded-md p-6 mb-8'>
    <h1 className='text-xl font-semibold text-gray-50'>Clients</h1>
    <div className='mt-4 flex flex-col gap-4 items-center'>
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
  )
}
