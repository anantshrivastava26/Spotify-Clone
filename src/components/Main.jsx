import React from 'react'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LibraryAddCheckRoundedIcon from '@mui/icons-material/LibraryAddCheckRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import LinearDeterminate from './LinearDeterminate ';
import SearchIcon from '@mui/icons-material/Search';
import VerifiedIcon from '@mui/icons-material/Verified';
import MicIcon from '@mui/icons-material/Mic';
function Main() {
  return (
    <div className="relative h-screen p-6 bg-[url('/assets/test.jpg')] bg-cover bg-center ">
      {/* Background image overlay to create opacity effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-blue-900 opacity-80"></div>
      
      {/* Main content */}
      <div className="relative z-10 flex row">
        <div className="lft  pt-2  h-[80vh] mr-10 opacity-85  bg-zinc-800 rounded-3xl w-72">
          <img src='/assets/nobglgo.png' alt="Logo" className='h-12 w-12 ml-28 mt-2 mb-5'/>
          <div className="flex flex-col space-y-4">
             <div className="1 text-white mx-10 bg-zinc-900 rounded-xl  text-md pt-2 font-thin h-10">
             <HomeRoundedIcon className="text-white text-5xl mr-2 mb-1 ml-4 " />
              Home
             </div>
             <div className="1 text-white mx-10 bg-zinc-900 rounded-xl  text-md pt-2 font-thin h-10">
             <LibraryAddCheckRoundedIcon className="text-white text-5xl mr-2 mb-1 ml-4 " />
              Your Library
             </div>
             <div className="1 text-white mx-10 border-[1px] border-white rounded-xl  text-md pt-2 font-thin h-10">
             <AddBoxRoundedIcon className="text-white text-5xl mr-2 mb-1 ml-4 " />
              Create Playlist
             </div>
             <div className="1 text-white mx-10 border-[1px] border-white rounded-xl  text-md pt-2 font-thin h-10">
             <FavoriteRoundedIcon className="text-red-500 text-5xl mr-2 mb-1 ml-4 " />
              Liked Songs
             </div>
             <div className="5 h-48"> 
                <img src='/assets/lft.jpeg' className='bg-contain h-40 w-40 mt-1 rounded-xl ml-14'/>
                <p className='text-md  mt-2 font-thin text-white text-center'>Born To Die</p>
             </div>
             <div className="6 text-white mx-12  mr-16 pl-5 pt-8 flex flex-row space-x-5   ">
                     <div className="ig">
                     <InstagramIcon className="text-white" style={{ fontSize: '2rem' }} />
                     </div>                     <div className="fb">
                     <FacebookIcon className="text-white" style={{ fontSize: '2rem' }} />
                     </div>
                     <div className="tw">
                     <XIcon className="text-white" style={{ fontSize: '2rem' }} />
                     </div>
             </div>
          </div>
        </div>
        <div className="flex flex-col mb-4">
          <div className="top flex flex-row justify-between   bg-zinc-800   w-[1150px] h-20 rounded-3xl mb-5">
            <div className="srch flex flex-row">
                <div className="txt">
                    <input placeholder='Search' className='rounded-3xl text-xl mt-5 ml-6 px-6 w-96 bg-zinc-600 text-zinc-300 h-11'/>
                </div>
                <div className="icn bg-zinc-600 rounded-full h-11 w-11 mt-5 ml-5 flex items-center justify-center">
  <SearchIcon className="text-white" style={{ fontSize: '2rem' }} />
</div>

            </div>
            <div className="pfle flex flex-row pr-10">
            <button className='bg-gradient-to-r from-greenbg to-green-800 ml-5  rounded-3xl px-2 h-9 w-36 mt-5 text-xl  text-white font-semibold'>Premium</button>
            <div className="icn bg-[url('/icnlana.jpg')] bg-contain rounded-full h-11 w-11 mt-5 ml-5 flex items-center justify-center"></div>
            </div>
          </div>
          <div className="bdy flex flex-row justify-between space-x-8 h-[67vh] ">
                   <div className="lft  w-full ">
                       <p className='text-xl font-thin text-white ml-8 mt-5 mb-8 '>Queue</p>
                       <div className="sngs flex flex-col space-y-5">
                       <div className="1 flex flex-row text-white font-medium ml-8 hover:rounded-xl  hover:p-2 hover:bg-zinc-600 hover:opacity-60">
                          <img src='/assets/s1.jpeg' className='h-14 w-14 rounded-lg '/>
                          <div className="txt flex flex-col ml-5">
                          <p className='text-lg'>Honeymoon</p>
                          <p className='text-zinc-400 text-sm'>Lana Del Rey</p>
                          </div>
                          <p className='ml-60 mt-3 '>3.42</p>
                          
                       </div>
                       <div className="1">
                       <div className="1 flex flex-row text-white font-medium ml-8 hover:rounded-xl  hover:p-2 hover:bg-zinc-600 hover:opacity-60">
                          <img src='/assets/s2.jpeg' className='h-14 w-14 rounded-lg '/>
                          <div className="txt flex flex-col ml-5">
                          <p className='text-lg'>Die Mountain Dew</p>
                          <p className='text-zinc-400 text-sm'>Lana Del Rey</p>
                          </div>
                          <p className='ml-[190px] mt-3 '>3.42</p>
                          
                       </div>
                       </div>
                       <div className="1">
                       <div className="1 flex flex-row text-white font-medium ml-8 hover:rounded-xl  hover:p-2 hover:bg-zinc-600 hover:opacity-60">
                          <img src='/assets/s3.jpeg' className='h-14 w-14 rounded-lg '/>
                          <div className="txt flex flex-col ml-5">
                          <p className='text-lg'>Born To Die</p>
                          <p className='text-zinc-400 text-sm'>Lana Del Rey</p>
                          </div>
                          <p className='ml-[250px] mt-3 '>3.42</p>
                          
                       </div>
                       </div>
                       <div className="1">
                       <div className="1 flex flex-row text-white font-medium ml-8 hover:rounded-xl  hover:p-2 hover:bg-zinc-600 hover:opacity-60">
                          <img src='/assets/s4.jpeg' className='h-14 w-14 rounded-lg '/>
                          <div className="txt flex flex-col ml-5">
                          <p className='text-lg'>13 Beaches</p>
                          <p className='text-zinc-400 text-sm'>Lana Del Rey</p>
                          </div>
                          <p className='ml-[255px] mt-3 '>3.42</p>
                          
                       </div>
                       </div>
                       <div className="1">
                       <div className="1 flex flex-row text-white font-medium ml-8 hover:rounded-xl  hover:p-2 hover:bg-zinc-600 hover:opacity-60">
                          <img src='/assets/s5.jpeg' className='h-14 w-14 rounded-lg '/>
                          <div className="txt flex flex-col ml-5">
                          <p className='text-lg'>Summertime Sadness</p>
                          <p className='text-zinc-400 text-sm'>Lana Del Rey</p>
                          </div>
                          <p className='ml-[165px] mt-3 '>4.25</p>
                          
                       </div>
                       </div>
                       </div>
                       
                   </div>

                   <div className="rgt space-y-2 mt-52 pt-5 pl-10  bg-gradient-to-r from-blue-200 to-blue-500 rounded-2xl w-full flex flex-col text-white">
                    <div className="cdlana flex flex-row">
                    <div className=" flex flex-col">
                    <p className='text-sm font-thin text-black'>192,258,112  monthly listeners</p>
                    <div className="flex flex-row pt-1 mt-1">
                    <VerifiedIcon className="text-blue-900 mr-2 mt-[0.5px]" style={{ fontSize: '1.5rem' }} />
                    <p className='text-lg text-blue-900 font-medium '> Verified artist</p>
                    </div>
                    </div>
                    <img src='/assets/cdlana.jpeg' className='h-20 w-20 ml-8 rounded-lg'/>
                    </div>
                    <p className='text-5xl font-bold tracking-[0.10em] text-blue-800 py-4 pb-5'>Lana Del Rey</p>
                    <div className="2 flex flex-row">
                        <button className='bg-gradient-to-r from-blue-800 to-blue-600  rounded-3xl px-2 h-9 w-36 mt-5 text-xl  text-white font-semibold' >Explore</button>
                        <div className="icn">
                        <MicIcon className="text-white r-2 mt-6  ml-24" style={{ fontSize: '2rem' }} />
                        </div>
                    </div>
                   </div>
 


          </div>
        </div>
      </div>

      {/* Bottom content */}
      <div className="relative w-full h-24 rounded-3xl overflow-hidden">
  <div className="absolute inset-0 bg-zinc-500  bg-opacity-70"></div>
  <div className="relative flex flex-row justify-between items-center h-full">
    <div className="1">
        <div className="1 flex felx-row">
        <img src='/assets/lana.jpeg' className='h-20 w-20 ml-5 rounded-xl'/>
        <div className="txt mt-2">
        <p className='text-white font-thin ml-5'>Lana del rey</p>
        <p className='font-bold text-white ml-5 text-3xl'>West Coast</p>
        </div>
        </div>
     
      
    </div>
    <div className="2 flex flex-col">
        <div className="up flex flex-row justify-between mb-2 pt-2 w-[300px]">
        <ShuffleIcon className="text-white" style={{ fontSize: '2rem' }} />
        <SkipPreviousIcon className="text-white" style={{ fontSize: '2rem' }} />
        <PlayCircleIcon className="text-white" style={{ fontSize: '2rem' }} />
        <SkipNextIcon className="text-white" style={{ fontSize: '2rem' }} />
        <AllInclusiveIcon className="text-white" style={{ fontSize: '2rem' }} />
        </div>
        <div className="dwn flex flex-row">
        <LinearDeterminate />
       
        </div>
       
    </div>
    <div className="3 mr-10">
    <FavoriteRoundedIcon className="text-red-500" style={{ fontSize: '2rem' }} />
    <button className='bg-greenbg ml-5 rounded-3xl px-2 h-9 w-24 text-black font-bold'>Follow</button>
    </div>
   
  </div>
</div>
    </div>
  )
}

export default Main
