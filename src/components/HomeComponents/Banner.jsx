import React from 'react'
import banner from '../../assets/images/banner.webp'

const Banner = () => {
  return (
    <div className="container py-5">
        <img src={banner} alt="banner" className='img-fluid' />
    </div>
  )
}

export default Banner