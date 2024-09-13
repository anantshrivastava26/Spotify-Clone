import React from 'react';

const Foot = () => {
  return (
    <>
    <footer className="bg-blue-200 text-blue-800 h-screen flex items-center justify-center">
      <div className="w-full max-w-6xl text-sm">
       
        <div className="flex justify-around mx-32 text-center">
          
          
          <div className="flex flex-col space-y-2 text-md">
            <h3 className="font-bold text-xl">Company</h3>
            <p>About</p>
            <p>Jobs</p>
            <p>For the Record</p>
          </div>

          
          <div className="flex flex-col space-y-2 text-md">
            <h3 className="font-bold text-xl">Communities</h3>
            <p>For Artists</p>
            <p>Developers</p>
            <p>Advertising</p>
            <p>Investors</p>
            <p>Vendors</p>
            <p>Spotify for Work</p>
          </div>

          
          <div className="flex flex-col space-y-2 text-md">
            <h3 className="font-bold text-xl">Useful links</h3>
            <p>Support</p>
            <p>Free Mobile App</p>
          </div>
        </div>

        
        <div className="border-t mt-20 pt-10 border-blue-900 space-x-8 text-lg text-blue-800 flex justify-center">
          <p>Legal</p>
          <p>Privacy Center</p>
          <p>Privacy Policy</p>
          <p>Cookies</p>
          <p>About Ads</p>
        </div>
        <div className=" mee text-xl font-bold text-center text-blue-800 mt-10 ">
          <p>About Me </p>
          <p className='text-lg font-light mt-5'>Sumedh Sawant </p>
          <p className='text-lg font-light '>CSE-AIML [2nd Year] </p>
          <p className='text-lg font-light mt-2 '>Hope u like the design :) </p>
      </div>
      </div>

      

  
     
    </footer>
    
    </>
    
  );
};

export default Foot;
