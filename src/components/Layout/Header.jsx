import React from 'react'
import logo from '../../assets/images/header_logo.png';

const Header = () => {
    return (
        <div className="container-fluid shadow py-2">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="logo">
                        <img src={logo} alt="logo" className='img-fluid' />
                    </div>
                    <div className="right-menu d-flex fs-5 text-theme-primary">
                        <p className='mb-0'>Variyadi Bazaar, Near</p>
                        <i class="bi bi-geo-alt ms-2"></i>
                        <i class="bi bi-search ms-2"></i>
                        <i class="bi bi-cart ms-2"></i>
                        <i class="bi bi-heart ms-2"></i>
                        <i class="bi bi-box-arrow-right ms-2"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header