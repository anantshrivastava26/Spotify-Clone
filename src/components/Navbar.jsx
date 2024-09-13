import React from 'react'

function Navbar() {
  return (
    <div className='Main flex pt-6 justify-between bg-black text-white h-full pb-20 flex-row'>
        <div className="lgo ml-16">
           <img src='nobglgo.png' className='h-12 w-12'/>
        </div>
        <div className="cnts space-x-10 mr-16 text-[25px] font-semibold text-zinc-400 flex flex-row">
           <p className='bg-blue-200 text-blue-700 rounded-2xl text-[20px] px-4 h-8'>Home</p>
           <p className='bg-blue-200 text-blue-700 rounded-2xl text-[20px] px-4 h-8'>Your Playlist</p>
           <p className='bg-blue-200 text-blue-700 rounded-2xl text-[20px] px-4 h-8'>Contact Us</p>
           <input placeholder='Search' className='h-9 text-xl mt-[-3px] bg-blue-200 rounded-3xl pl-5 border-blue-700 border-[1px]  w-40 opacity-80 outline-none placeholder-blue-500 text-blue-700'></input>
        </div>
    </div>
  )
}

export default Navbar