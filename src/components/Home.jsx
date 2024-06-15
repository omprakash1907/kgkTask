import React from 'react'
import bannerImg from '../assets/images/cloths.webp'
import Category from './HomeComponents/Category'
import Seller from './HomeComponents/Seller'
import Banner from './HomeComponents/Banner'
import ProductList from './HomeComponents/ProductList'

const Home = () => {
    return (
        <>
            <div className="container home">
                <div className="d-flex">
                    <div className="col-6 py-5 pe-5">
                        <h1 className='fw-bold text-theme-primary'>
                            We are here to provide <br />all services.
                        </h1>
                        <p className='fs-5 text-secondary mb-4'>
                            Company that provides local search for different services in india over the phone and online
                        </p>
                        <label class="label w-100 rounded-5 text-start py-3 px-4">
                            <span>
                                <i class="bi bi-search text-theme-primary fs-5"></i>
                            </span>
                            <input
                                type="text"
                                class="input"
                                placeholder="Search for products anywhere in india "
                                className='w-75 border-0 text-secondary text-opacity-50'
                            />
                        </label>

                    </div>
                    <div className="col-6">
                        <img src={bannerImg} alt="bannerImg" className='img-fluid' />
                    </div>
                </div>
            </div>
            <Category />
            <Seller />
            <Banner />
            <ProductList />
        </>
    )
}

export default Home