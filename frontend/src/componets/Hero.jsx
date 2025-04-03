import React from 'react'
import { assets } from '../‏‏assets/frontend_assets/assets'

const Hero = () => {
  return (
    <div className='flex xl:flex-row lg:flex-col xm:flex-col sm:flex-col w-full justify-center items-center  border border-gray-400 '>
        <div className='w-1/2 gap-10 sm:w-full py-10 flex flex-col  items-center'>
          <div className=' flex flex-col xl:flex-col lg:flex-col  sm:flex-col gap-5 '>
            <div className='flex  gap-2 items-center'>
                <p className='h-[2px] w-11 bg-gray-400'></p>
                <p className=' text-lg text-gray-600 font-bold'>OUR BESTSELLERS</p>
            </div>
             <h1 className='xl:text-7xl lg:text-5xl md:text-5xl sm:text-4xl  text-gray-600 font-bold'>Latest Arrival</h1>
             <div className='flex items-center gap-2'>
                <p className='text-lg text-gray-600 font-bold font-poppins'>SHOP NOW</p>
                <p className='h-[2px] w-11 bg-gray-400'></p>
             </div>
        </div>
        </div>
        <div className='w-1/2 lg:w-full sm:w-full xm:w-full  '>
             <img src={assets.hero_img} className='xl:w-full lg:w-full h-full object-cover' alt="" />
        </div>    
    </div>
  )
}

export default Hero
