import React from 'react'
import { assets } from '../assets/assets.js'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border-2 border-craft-tan rounded-lg overflow-hidden shadow-lg'>
      {/* {Hero left side} */}

      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 bg-craft-cream'>

            <div className='text-craft-brown'>
              <div className='flex items-center gap-2'>

                <p className='w-8 md:w-11 h-[2px] bg-craft-rust'></p>
                <p className='font-medium text-sm md:text-base tracking-wider'>ARTISAN FAVORITES</p>

              </div>
              <h1 className='craft-heading text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Handcrafted with Love</h1>
              <div className='flex items-center gap-2'>
                <p className='font-semibold text-sm md:text-base tracking-wide'>EXPLORE CRAFTS</p>
                <p className='w-8 md:w-11 h-[1px] bg-craft-rust'></p>
              </div>
            </div>
      </div>
        
      {/* {Hero right side} */}
      <img src={assets.hero_img} alt='hero' className='w-full sm:w-1/2 ' />

    </div>
  )
}

export default Hero