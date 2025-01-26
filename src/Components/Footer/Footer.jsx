import React from "react";

export default function Footer() {
  return (
    <footer className='text-white bg-[#2C3E50]'>
      <div className='container mx-auto'>
        <div className='flex flex-wrap'>
          <div className='item w-full sm:w-1/2 md:w-1/3'>
            <h4>LOCATION</h4>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>

          <div className='item w-full sm:w-1/2 md:w-1/3'>
            <h4>AROUND THE WEB</h4>
            <div className='flex items-center'>
              <div className='px-4 cursor-pointer flex items-center justify-center border border-white rounded-full w-12 h-12'>
                <i className='fab fa-facebook-f'></i>
              </div>
              <div className='px-4 cursor-pointer flex items-center justify-center border border-white rounded-full w-12 h-12'>
                <i className='fab fa-twitter'></i>
              </div>
              <div className='px-4 cursor-pointer flex items-center justify-center border border-white rounded-full w-12 h-12'>
                <i className='fab fa-linkedin-in'></i>
              </div>
              <div className='px-4 cursor-pointer flex items-center justify-center border border-white rounded-full w-12 h-12'>
                <i className='fab fa-dribbble'></i>
              </div>
            </div>

            <div className='item w-full sm:w-1/2 md:w-1/3'>
              <h4>LOCATION</h4>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
          </div>

          <div className='item w-full sm:w-1/2 md:w-1/3'>
            <h4>ABOUT FREELANCER</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque,
              neque?
            </p>
          </div>

          <div className='bg-[#2C3E50] text-white'>
            <p>Copyright © Your Website 2021</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
