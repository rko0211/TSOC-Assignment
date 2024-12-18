import React from 'react'
import banner from '../assets/banner.png'
function Banner() {
  return (
    <div>

      <div className='max-w-[1280px] mx-auto'>
        <img src={banner} alt="Banner" className='w-full mb-10 h-auto' />
      </div>

    </div>
  )
}

export default Banner