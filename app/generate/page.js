import React from 'react'

const Generate = () => {
    return (
        <div className='bg-[#225ac0]    min-h-screen grid grid-cols-2' >
            <div className="col1 flex justify-center items-center flex-col ">
                <h1 className='font-bold text-4xl ' >Create Your Bittree</h1>
                <div className='flex flex-col gap-5 my-8 ' >
                    <input className='bg-white px-3 py-3 focus:outline-blue-500 rounded-full ' type="text" placeholder='Enter link text'  />
                    <input className='bg-white px-3 py-3 focus:outline-blue-500 rounded-full ' type="text" placeholder='Enter link'  />

                </div>
            </div>
            <div className="col2 h-screen overflow-hidden">
                <img className="object-cover h-full w-full" src="/generate.webp" alt="Generate Your Links"/>
            </div>
        </div>
    )
}

export default Generate
