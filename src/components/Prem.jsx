import React from 'react'

function Prem() {
  return (
    <div className='h-screen bg-gradient-to-b from-black via-black  to-blue-900 pt-16'>
  <p className='text-2xl text-center font-light   text-blue-500 border-[1px] border-blue-500  bg-black h-16 pt-3 mx-[420px] rounded-xl'>
  Select a plan below or start 1-month free trial
</p>
<div className="main flex flex-row justify-between mx-8 space-x-8 mt-10">

<div className="1 text-center py-10 border-t border-l border-r border-blue-500 w-full h-[65vh] rounded-xl hover:shadow-[0_5px_15px_5px_rgba(59,130,246,0.7)] flex flex-col justify-between hover:bg-blue-300 group">
  <div className="tp text-white text-3xl font-medium group-hover:text-blue-900">
    <p>Individual</p>
  </div>
  <div className="md flex flex-col space-y-4 ">
    <p className='text-blue-500 text-xl group-hover:text-blue-900 font-medium'>1 Account</p>
    <p className='text-white text-4xl group-hover:text-blue-900  font-thin'>6.99$ / month</p>
  </div>
  <div className="bm flex flex-col font-thin text-xl space-y-1 text-blue-300 group-hover:text-blue-900">
    <p>Ad free listening</p>
    <p>Play anywhere even offline</p>
    <p>On demand playback</p> 
  </div>
</div>

<div className="1 text-center py-10 border-t border-l border-r border-blue-500 w-full h-[65vh] rounded-xl hover:shadow-[0_5px_15px_5px_rgba(59,130,246,0.7)] flex flex-col justify-between hover:bg-blue-300 group">
  <div className="tp text-white text-3xl font-medium group-hover:text-blue-900">
    <p>Duo</p>
  </div>
  <div className="md flex flex-col space-y-4 ">
    <p className='text-blue-500 text-xl group-hover:text-blue-900 font-medium'>2 Accounts</p>
    <p className='text-white text-4xl group-hover:text-blue-900  font-thin'>8.99$ / month</p>
  </div>
  <div className="bm flex flex-col font-thin text-xl space-y-1 text-blue-300 group-hover:text-blue-900">
    <p>2 premium accounts for a couple under 1 roof</p>
    
    <p>Ad free listening</p> 
  </div>
</div>

<div className="1 text-center py-10 border-t border-l border-r border-blue-500 w-full h-[65vh] rounded-xl hover:shadow-[0_5px_15px_5px_rgba(59,130,246,0.7)] flex flex-col justify-between hover:bg-blue-300 group">
  <div className="tp text-white text-3xl font-medium group-hover:text-blue-900">
    <p>Family</p>
  </div>
  <div className="md flex flex-col space-y-4 ">
    <p className='text-blue-500 text-xl group-hover:text-blue-900 font-medium'>Up to 6 accounts</p>
    <p className='text-white text-4xl group-hover:text-blue-900  font-thin'>11.99$ / month</p>
  </div>
  <div className="bm flex flex-col font-thin text-xl space-y-1 text-blue-300 group-hover:text-blue-900">
    <p>6 premium accounts for family members</p>
    <p>Ad free listening</p>
    <p>Block explicit music</p> 
  </div>
</div>

<div className="1 text-center py-10 border-t border-l border-r border-blue-500 w-full h-[65vh] rounded-xl hover:shadow-[0_5px_15px_5px_rgba(59,130,246,0.7)] flex flex-col justify-between hover:bg-blue-300 group">
  <div className="tp text-white text-3xl font-medium group-hover:text-blue-900">
    <p>Student</p>
  </div>
  <div className="md flex flex-col space-y-4 ">
    <p className='text-blue-500 text-xl group-hover:text-blue-900 font-medium'>1 Account</p>
    <p className='text-white text-4xl group-hover:text-blue-900  font-thin'>3.99$ / month</p>
  </div>
  <div className="bm flex flex-col font-thin text-xl space-y-1 text-blue-300 group-hover:text-blue-900">
    
    <p>Special discount for eligible students in universities</p>
    <p>Ad free listening</p>
  </div>
</div>

</div>



    </div>
  )
}

export default Prem