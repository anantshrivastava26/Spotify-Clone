import React from 'react'

function Home() {
  return (
    <> 
<div className="main +  z-10 rounded-[120px] h-[100vh]">
<div className=" font-poppins  flex rounded-3xl flex-row pt-5 justify-between px-20 w-full">
    <p className='text-lg font-[300] text-white bg-black rounded-3xl py-1 px-4 '>Sumedh</p>
    <p className='text-sm  font-[500] border-[1px] border-black rounded-3xl pt-2 px-4 '>Spotify Webpage Clone </p>
    <p className='text-md font-[500] font-poppins italic text-white bg-black rounded-3xl pt-2 px-3  '>NSCC SRM</p>
   </div>
   
   <div className="txt flex items-center flex-col font-baskervville justify-center  mt-10  text-greenbg h-[65vh]">
   <div className="title flex flex-row">
   <img className='h-40 w-40 mt-12 mr-5' src='logo.jpeg'/>
   <p className='text-[160px]  font-thin italic'>Spotify</p>
   </div>
  
   <p className='n text-[40px]  '>Designed and Styled in my way</p>
   <p className='text-lg text-black mt-20 font-poppins border-[1px] border-black rounded-3xl py-1 px-4'>Scroll down</p>
   </div>
</div>


   
   
    </>
  )
}

export default Home