import React, { useEffect, useState } from 'react'

const ProductList = () => {
    const [products, setProducts] = useState([])

    //Fetching Prdocut From Fake Api
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json.slice(0, 6))) // Limit to first 6 products
    }, [])

    return (
        <div className="container py-5">
            <div className="d-flex justify-content-between align-items-center">
                <h2 className='fw-bold text-theme-primary'>Deal of the Day</h2>
                <span className='text-theme-primary fw-semibold'>See All <i className="bi bi-arrow-right"></i></span>
            </div>
            <div className="col-12 py-4">
                <div className="d-flex justify-content-between align-items-center flex-wrap">
                    {
                        products.map((product, index) => (
                            <div key={index} className="col-2 px-1 mb-3">
                                <div className="p-2 text-center border product-card">
                                    <div className='img-h d-flex align-items-center justify-content-center p-2 position-relative'>
                                        <img src={product.image} alt={product.title} className='img-fluid' style={{ maxHeight: '150px' }} />
                                        <div className="rounded-circle bg-orange py-2 px-1 position-absolute top-0 start-0">
                                            <span className='text-white'> Sale</span>
                                        </div>
                                    </div>
                                    <h5 className='text-theme-primary fs-6'>{product.title}</h5>
                                    <p className='text-danger fs-7 mb-0'>${product.price}</p>
                                    <div className="text-secondary fs-7 mb-0">
                                        <i className="bi bi-star-fill text-warning me-1"></i>
                                        <span>{product.rating?.rate}</span>
                                    </div>
                                    <div className='fs-7 text-theme-primary'>
                                        <i className="bi bi-geo-alt me-1"></i>
                                        <span>{product.category}</span>
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

export default ProductList
