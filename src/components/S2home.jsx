import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import RadioIcon from '@mui/icons-material/Radio';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ScheduleIcon from '@mui/icons-material/Schedule';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import Person2Icon from '@mui/icons-material/Person2';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
function S2home() {
  return (
    
   <div className="relative h-screen p-6 bg-[url('/plyst.jpg')] bg-cover bg-center ">
  {/* Background image overlay to create opacity effect */}
  <div className="absolute inset-0 bg-gradient-to-b from-blue-200 via-blue-500 to-blue-800 opacity-60"></div>

  {/* Main content */}
  <div className="relative z-10 font-thin flex flex-row text-black">
    <div className="lft h-[93vh] w-64 border-r-[2px] flex flex-col space-y-2 border-black">
      <div className="ttle flex flex-row">
        <img src='nobglgo.png' className='h-12 w-12'/>
        <p className="text-center text-3xl font-bold text-black mb-4 pt-1 ml-4 ">Spotify</p>
      </div>

      <div className="1 mx-2 mt-4 flex flex-row text-xl pt-2 font-thin h-10">
        <HomeIcon className="text-4xl mr-2 mt-1" />
        <p className="text-lg mt-[1px] ">Home</p>
      </div>

      <div className="1 mx-2 mt-4 flex flex-row text-xl pt-2 font-thin h-10">
        <TravelExploreIcon className="text-4xl mr-2 mt-1" />
        <p className="text-lg">Browse</p>
      </div>

      <div className="1 mx-2 mt-4 flex flex-row text-xl pt-2 font-thin h-10">
        <RadioIcon className="text-4xl mr-2 mt-1" />
        <p className="text-lg">Radio</p>
      </div>

      <p className="text-xl pt-4 font-semibold">Library</p>

      <div className="1 mx-2 mt-4 flex flex-row text-xl pt-2 font-thin h-10">
        <AccountCircleIcon className="text-4xl mr-2 mt-1" />
        <p className="text-lg">Made for you</p>
      </div>

      <div className="1 mx-2 mt-4 flex flex-row text-xl pt-2 font-thin h-10">
        <ScheduleIcon className="text-4xl mr-2 mt-1" />
        <p className="text-lg">Recently Played</p>
      </div>

      <div className="1 mx-2 mt-4 flex flex-row text-xl pt-2 font-thin h-10">
        <FavoriteRoundedIcon className="text-4xl mr-2 mt-1" />
        <p className="text-lg">Favourite songs</p>
      </div>

      <div className="1 mx-2 mt-4 flex flex-row text-xl pt-2 font-thin h-10">
        <LibraryMusicIcon className="text-4xl mr-2 mt-1" />
        <p className="text-lg">Albums</p>
      </div>

      <div className="1 mx-2 mt-4 flex flex-row text-xl pt-2 font-thin h-10">
        <Person2Icon className="text-4xl mr-2 mt-1" />
        <p className="text-lg">Artists</p>
      </div>
<div className="ttt flex felx-row">
<QueueMusicIcon className="text-4xl mr-2 mt-5" />
<p className="text-xl pt-4 font-semibold mb-2">My Playlists</p>
</div>
      <div className="bx border-[1px] rounded-xl border-black mr-20 pl-5 ">
      <p className="text-lg font-medium ml-2">Phonk</p>
      <p className="text-lg font-medium ml-2">Cooked</p>
      <p className="text-lg font-medium ml-2">Jim</p>
      </div>
     
    </div>
    <div className="main">
      <p className='text-4xl ml-10 font-light mt-5'>Your Top Albums</p>
      <div className="2 flex flex-col justify-between h-[70vh] mt-10 ">
      <div className="top  flex flex-row h-40 mb-20 mx-10  space-x-20">
         <div className="1 flex flex-col border-[1px] border-black p-2 w-52   h-60 rounded-xl bg-black">
             <img src='bob.jpeg' className='h-40 w-40 rounded-lg ml-3 mt-1'/>
             <p className='font-medium mt-1 text-md text-white text-center'>Bob Schneider</p>
             <p className='font-normal  text-sm text-gray-400 text-center'>2024 - Lana del rey</p>
         </div>
         <div className="2 flex flex-col border-[1px] border-black p-2  w-52   h-60 rounded-xl bg-black">
         <img src='nor.jpeg' className='h-40 w-40 rounded-lg ml-3 mt-1'/>
         <p className='font-medium mt-1 text-md text-white text-center'>Norman Rockwell</p>
         <p className='font-normal  text-sm text-gray-400 text-center'>2019 - Lana del rey</p>
         </div>
         <div className="3 flex flex-col border-[1px] border-black p-2  w-52   h-60 rounded-xl bg-black">
         <img src='ult.jpeg' className='h-40 w-40 rounded-lg ml-3 mt-1'/>
         <p className='font-medium mt-1 text-md text-white text-center'>Ultraviolence</p>
         <p className='font-normal  text-sm text-gray-400 text-center'>2014 - Lana del rey</p>
         </div>
         <div className="4 flex flex-col border-[1px] border-black p-2  w-52   h-60 rounded-xl bg-black">
         <img src='hny.jpeg' className='h-40 w-40 rounded-lg ml-3 mt-1'/>
         <p className='font-medium mt-1 text-md text-white text-center'>Born to die</p>
         <p className='font-normal  text-sm text-gray-400 text-center'>2012 - Lana del rey</p>
         </div>
       
      </div>
      <p className='text-4xl ml-10 font-light my-8'>More for Lana Del Rey</p>
      <div className="btm flex flex-row h-40 mb-10 mx-10 space-x-20 ">
      <div className="4 flex flex-col border-[1px] border-black p-2  w-52   h-60 rounded-xl bg-black">
         <img src='pl1.png' className='h-40 w-40 rounded-lg ml-3 mt-1'/>
         <p className='font-medium mt-1 text-md text-white text-center'>Best of lana de rey</p>
         <p className='font-normal  text-sm text-gray-400 text-center'>By User2109</p>
         </div>
         <div className="4 flex flex-col border-[1px] border-black p-2  w-52   h-60 rounded-xl bg-black">
         <img src='pl2.png' className='h-40 w-40 rounded-lg ml-3 mt-1'/>
         <p className='font-medium mt-1 text-md text-white text-center'>This is Lana del rey</p>
         <p className='font-normal  text-sm text-gray-400 text-center'>By spotify</p>
         </div>
         <div className="4 flex flex-col border-[1px] border-black p-2  w-52   h-60 rounded-xl bg-black">
         <img src='pl3.png' className='h-40 w-40 rounded-lg ml-3 mt-1'/>
         <p className='font-medium mt-1 text-md text-white text-center'>All lana del rey songs</p>
         <p className='font-normal  text-sm text-gray-400 text-center'>By User2005</p>
         </div>
         <div className="4 flex flex-col border-[1px] border-black p-2  w-52   h-60 rounded-xl bg-black">
         <img src='pl4.png' className='h-40 w-40 rounded-lg ml-3 mt-1'/>
         <p className='font-medium mt-1 text-md text-white text-center'>Lana del rey radio</p>
         <p className='font-normal  text-sm text-gray-400 text-center'>By Spotify</p>
         </div>
      </div>
      </div>
   
    </div>
  </div>
</div>


  )
}

export default S2home