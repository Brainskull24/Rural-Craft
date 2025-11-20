import React from 'react'
import {assets} from '../assets/assets.js'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base'>
        <div className='bg-craft-cream p-6 rounded-lg border-2 border-craft-tan hover:shadow-lg transition-shadow'>
            <img src={assets.exchange_icon} alt='exchange icon' className='w-12 m-auto mb-5' />
            <p className='font-bold text-craft-brown'>Authentic Handmade</p>
            <p className='text-craft-earth mt-2'>Every craft is 100% handmade by skilled artisans</p>
        </div>
        <div className='bg-craft-cream p-6 rounded-lg border-2 border-craft-tan hover:shadow-lg transition-shadow'>
            <img src={assets.quality_icon} alt='quality icon' className='w-12 m-auto mb-5' />
            <p className='font-bold text-craft-brown'>7 Days Return Policy</p>
            <p className='text-craft-earth mt-2'>We provide 7 days free return policy</p>
        </div>
        <div className='bg-craft-cream p-6 rounded-lg border-2 border-craft-tan hover:shadow-lg transition-shadow'>
            <img src={assets.support_img} alt='support icon' className='w-12 m-auto mb-5' />
            <p className='font-bold text-craft-brown'>Support Artisans</p>
            <p className='text-craft-earth mt-2'>Your purchase directly supports rural craft workers</p>
        </div>
    </div>
  )
}

export default OurPolicy