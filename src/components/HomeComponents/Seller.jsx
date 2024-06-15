import React from 'react'
import babyShop from '../../assets/images/shopBag.png'
import Mcd from '../../assets/images/McDonalds.png'
import electronics from '../../assets/images/Navin-Electronics.webp'
import croma from '../../assets/images/CromaLogo.png'
import bhatia from '../../assets/images/bhatia.png'
import sumul from '../../assets/images/sumul.png'

const Seller = () => {

    const sellerList = [
        {
            name: 'Baby Shop',
            img: babyShop,
            time: '10 : 30 AM to 9 : 30 PM',
            location: 'G2 Wood Square, Beside',
            distance: '2 Km'
        },
        {
            name: 'McDonalds',
            img: Mcd,
            time: '9 : 30 AM to 6 : 30 PM',
            location: 'S No. 3, GF Millianaire',
            distance: '3 Km'
        },
        {
            name: 'Electronics',
            img: electronics,
            time: '10 : 30 AM to 8 : 30 PM',
            location: 'Indoor Stadium Ln, Megh',
            distance: '3 Km'
        },
        {
            name: 'Croma',
            img: croma,
            time: '11 : 30 AM to 8 : 30 PM',
            location: 'Official store. Proton Plus',
            distance: '3 Km'
        },
        {
            name: 'Bhatia',
            img: bhatia,
            time: '9 : 30 AM to 12 : 00 PM',
            location: 'Rajhans Plaza Upper',
            distance: '3 Km'
        },
        {
            name: 'Sumul',
            img: sumul,
            time: '9 : 30 AM to 12 : 00 PM',
            location: 'Surat, Gujarat 395009',
            distance: '3 Km'
        },
    ]

    return (
        <div className="container py-5">
            <div className="d-flex justify-content-between align-items-center">
                <h2 className='fw-bold text-theme-primary'>Shops Nearby you</h2>
                <span className='text-theme-primary fw-semibold'>See All <i className="bi bi-arrow-right"></i></span>
            </div>
            <div className="col-12 py-4">
                <div className="d-flex justify-content-between align-items-center">
                    {
                        sellerList.map((item, index) => (
                            <div key={index} className="col-2 px-1">
                                <div className="p-2 text-center">
                                    <div className='img-h d-flex align-items-center p-2'>
                                        <img src={item.img} alt={item.name} className='img-fluid' />
                                    </div>
                                    <h5 className='text-theme-primary'>{item.name}</h5>
                                    <p className='text-secondary fs-7 mb-1'>{item.location}</p>
                                    <div className="text-secondary mb-2 fs-7">
                                        <i className="bi bi-stopwatch text-success me-1"></i>
                                        <span>{item.time}</span>
                                    </div>
                                    <div className='fs-7 text-theme-primary'>
                                        <i className="bi bi-geo-alt me-1"></i>
                                        <span>{item.distance}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Seller
