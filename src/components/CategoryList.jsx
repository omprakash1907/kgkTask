import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../reducer/CategorySlice';
import { Link } from 'react-router-dom';


//Rating category
const StarRating = ({ rating }) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push(<i key={i} className="bi bi-star-fill text-warning"></i>);
        } else {
            stars.push(<i key={i} className="bi bi-star text-warning"></i>);
        }
    }

    return <>{stars}</>;
};

//Static Data to Display on List
const itemsData = {
    '1': {
        name: 'Automobile',
        items: [
            { id: '1', name: 'Toyota', price: 10000, image: 'https://cdn.carbuzz.com/gallery-images/2021-toyota-corolla-hatchback-front-angle-view-carbuzz-757749-1600.jpg', rating: 3 },
            { id: '2', name: 'Honda Civic', price: 15000, image: 'https://st.automobilemag.com/uploads/sites/11/2015/10/2016-Honda-Civic-Touring-front-three-quarters-041.jpg', rating: 5 },
            { id: '3', name: 'Chevrolet Equinox', price: 20000, image: 'https://drishtimagazine.com/wp-content/uploads/2018/12/2018-Chevrolet-Equinox-pic-1.jpg', rating: 2 },
            { id: '4', name: 'Nissan Altima', price: 12000, image: 'https://cdn.carbuzz.com/gallery-images/1600/529000/700/529704.jpg', rating: 4 },
            { id: '5', name: 'BMW 3 Series', price: 13000, image: 'https://mediacloud.carbuyer.co.uk/image/private/s--T8r5MfAB--/v1582627350/carbuyer/2020/01/01_23.jpg', rating: 3 },
        ],
    },
    '2': {
        name: 'Gardening',
        items: [
            { id: '1', name: 'Garden Trowel', price: 2000, image: 'https://www.theseedcollection.com.au/assets/alt_1/GD707.jpg?1565583094', rating: 3 },
            { id: '2', name: 'Pruning Shears', price: 2500, image: 'https://hicksnurseries.com/wp-content/uploads/2017/03/pruning-shears-compressor.jpg', rating: 4 },
            { id: '3', name: 'Garden Fork', price: 3000, image: 'https://ruxley-manor.co.uk/shop/gallery/70100761-1.jpg', rating: 2 },
            { id: '4', name: 'Watering Can', price: 3500, image: 'https://www.gardeningknowhow.com/wp-content/uploads/2017/05/watering-cans.jpg', rating: 5 },
            { id: '5', name: 'Garden Hoe', price: 4000, image: 'https://tse2.mm.bing.net/th?id=OIP.j1bCve3rzNW33tu6chKSoQHaHa&pid=Api&P=0&h=180', rating: 3 },
        ],
    },
    '3': {
        name: 'Home & Furniture',
        items: [
            { id: '1', name: 'Living Room Furniture', price: 20000, image: 'https://cdn.designbump.com/wp-content/uploads/2015/08/Living-Room-ideas.jpg', rating: 3 },
            { id: '2', name: 'Bedroom Furniture', price: 25000, image: 'https://www.primeclassicdesign.com/images/modern-italian-bedroom-sets/bed-group-with-nightstands-dresser-mirror-chest-of-drawers-grey-naples.jpg', rating: 4 },
            { id: '3', name: 'Dining Room Furniture', price: 30000, image: 'https://tse3.mm.bing.net/th?id=OIP.NEWoIb-oEbFxPcsgir-SCQHaF6&pid=Api&P=0&h=180', rating: 2 },
            { id: '4', name: 'Home Office Furniture', price: 35000, image: 'https://foter.com/photos/239/executive-home-office-3.jpg', rating: 5 },
            { id: '5', name: 'Garden Hoe', price: 40000, image: 'https://thepluslifeblog.com/wp-content/uploads/2021/06/Screen-Shot-2021-06-26-at-2.58.20-PM.png', rating: 3 },
        ],
    },
    '4': {
        name: 'DYI Furniture',
        items: [
            { id: '1', name: 'Pallet Furniture', price: 23000, image: 'http://101pallets.com/wp-content/uploads/2016/06/storage-friendly-pallet-milk-and-honey-wooden-seat.jpg', rating: 3 },
            { id: '2', name: 'Repurposed Furniture', price: 15000, image: 'https://i.pinimg.com/originals/fc/3a/b3/fc3ab35b14db8a21167cf7acda33b9e9.gif', rating: 4 },
            { id: '3', name: 'Upcycled Furniture', price: 19000, image: 'http://1.bp.blogspot.com/-77WVhauiE10/VhOJXNjyf8I/AAAAAAAAIfo/YBM3vA2DMj8/s1600/upcycled%2Bdresser.jpg', rating: 2 },
            { id: '4', name: 'Plywood Furniture', price: 35000, image: 'https://i.pinimg.com/originals/86/96/db/8696db8541cfc1b7843cc204399b3d37.png', rating: 5 },
            { id: '5', name: 'Concrete Furniture', price: 40000, image: 'https://tse1.mm.bing.net/th?id=OIP.lu0XF2I9fNPczNdEf2UxkQHaE8&pid=Api&P=0&h=180', rating: 3 },
        ],
    },
    '5': {
        name: 'Bed Room Furniture',
        items: [
            { id: '1', name: 'Bed Frames', price: 42000, image: 'https://i5.walmartimages.com/asr/4aff7464-dbac-4dfb-aa7b-e770d4a03abe.543302fb045d0fbe1e8be67df5fcbaf2.jpeg', rating: 3 },
            { id: '2', name: 'Dressers and Chests', price: 15000, image: 'https://images.homedepot-static.com/productImages/f377b0fd-c130-4bc8-b871-a9aea43aac29/svn/vintage-oak-sauder-dressers-chests-420613-64_1000.jpg', rating: 4 },
            { id: '3', name: 'Nightstands', price: 19000, image: 'https://i5.walmartimages.com/asr/6aeec545-457f-4166-9edb-ae5b731a867e.0561fa844a5966e93174538a1daaac72.jpeg', rating: 2 },
            { id: '4', name: 'Wardrobes and Armoires', price: 25000, image: 'https://secure.img1-fg.wfcdn.com/im/89209442/compr-r85/9046/90462683/shaker-wardrobe-armoire.jpg', rating: 5 },
            { id: '5', name: 'Bedroom Vanities', price: 44000, image: 'https://foter.com/photos/252/bedroom-vanity-with-storage.jpg', rating: 3 },
        ],
    },
    '6': {
        name: 'Camera',
        items: [
            { id: '1', name: 'DSLR Cameras', price: 42000, image: 'https://www.bhphotovideo.com/images/images2500x2500/sony_dsc_hx300_b_cyber_shot_dsc_hx300_digital_camera_926281.jpg', rating: 3 },
            { id: '2', name: 'Mirrorless Cameras', price: 15000, image: 'https://www.popphoto.com/uploads/2021/06/25/377A3429.jpg?width=1440', rating: 4 },
            { id: '3', name: 'Compact Cameras', price: 19000, image: 'https://dancarrphotography.com/wp-content/uploads/2013/03/A_DFCP1_BK_frt34r.jpg', rating: 2 },
            { id: '4', name: 'Cinema EOS Cameras', price: 25000, image: 'http://static.bhphoto.com/images/images2000x2000/1040921.jpg', rating: 5 },
            { id: '5', name: 'Professional Video Cameras', price: 44000, image: 'https://i1.adis.ws/i/canon/3666C006_XA40-GB_02/3666c006_xa40-gb_02?w=1500&bg=gray95', rating: 3 },
        ],
    },
    '7': {
        name: 'Tablets',
        items: [
            { id: '1', name: 'Apple iPad Pro', price: 42000, image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/refurb-ipad-pro-11-wifi-silver-2021?wid=1150&hei=1150&fmt=jpeg&qlt=95&.v=1674663704665', rating: 3 },
            { id: '2', name: 'Samsung Galaxy Tab S7', price: 15000, image: 'https://brain-images-ssl.cdn.dixons.com/4/1/10222914/u_10222914.jpg', rating: 4 },
            { id: '3', name: 'Amazon Fire HD 10', price: 19000, image: 'https://tse4.mm.bing.net/th?id=OIP.xLLt5Jc9nPDKyroDxL8D_wHaFl&pid=Api&P=0&h=180', rating: 2 },
            { id: '4', name: 'Microsoft Surface Pro 7', price: 25000, image: 'https://eshop.compos.cz/microsoft-surface-pro-7-i7-1065g7-16gb-256gb-platinum-commercial_ie1978031.jpg', rating: 5 },
            { id: '5', name: 'Lenovo Tab P11', price: 44000, image: 'https://p4-ofp.static.pub/ShareResource/na/products/tablets/725x515/lenovo-tab-p11.png', rating: 3 },
        ],
    },
    '8': {
        name: 'Clothing',
        items: [
            { id: '1', name: 'Nike Shoes', price: 4200, image: 'https://tse3.mm.bing.net/th?id=OIP.tJQjxbLRRaEt9B4OB546kAHaHw&pid=Api&P=0&h=180', rating: 3 },
            { id: '2', name: 'Levis Jeans', price: 1500, image: 'https://i.pinimg.com/originals/e4/5d/06/e45d06f3e914c46e43f8ff31b5836ade.jpg', rating: 4 },
            { id: '3', name: 'Adidass Tshirt', price: 1900, image: 'https://cdnc.lystit.com/photos/10c8-2015/08/28/adidas-originals-navy-california-t-shirt-ab7604-blue-product-0-320676121-normal.jpeg', rating: 2 },
            { id: '4', name: 'Columbia Jacket', price: 2500, image: 'https://cdn.ssactivewear.com/Images/Style/6420_fl.jpg', rating: 5 },
            { id: '5', name: 'H&M Jersy', price: 4400, image: 'https://media1.popsugar-assets.com/files/thumbor/0e2k7M8luJL_KHaL9tBgwiItv9Q/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2020/03/09/985/n/1922564/59a750c2d363ec95_netimgimkb5r/i/HM-Jersey-Jacket.jpg', rating: 3 },
        ],
    },
    '9': {
        name: 'Jewellary',
        items: [
            { id: '1', name: 'Gold Ring', price: 42000, image: 'https://i0.wp.com/diorahjewellers.com/wp-content/uploads/2019/02/oval-moissanite-engagement-ring-rose-gold-2.png', rating: 3 },
            { id: '2', name: 'Silver Chain', price: 15000, image: 'http://cdn.shopify.com/s/files/1/0948/4808/products/s-l1600_2_fea1d334-40eb-4324-9c32-df7916d98ebe_1024x1024.jpg?v=1572183196', rating: 4 },
            { id: '3', name: 'Gold Earrings', price: 52000, image: 'https://tse4.mm.bing.net/th?id=OIP.W6e0DV8VL7ZZ98v3QovPkAHaHa&pid=Api&P=0&h=180', rating: 2 },
            { id: '4', name: 'Diamond Bracelet', price: 25000, image: 'https://i.etsystatic.com/21591756/r/il/abd5e3/2739364093/il_fullxfull.2739364093_sfo0.jpg', rating: 5 },
            { id: '5', name: 'Watch', price: 4400, image: 'http://cdn.bgr.com/2015/08/invicta-watch.jpg?quality=98&strip=all', rating: 3 },
        ],
    },
    '10': {
        name: 'Clothing',
        items: [
            { id: '1', name: 'Bose Speaker', price: 4200, image: 'https://www.bhphotovideo.com/images/images2000x2000/bose_752195_0400_soundlink_color_ii_bluetooth_1282069.jpg', rating: 3 },
            { id: '2', name: 'JBL GO Speakers', price: 1500, image: 'https://msldigital.com.my/wp-content/uploads/2021/03/0f6c898bb39ca6b7e2b0ba215635c829.jpeg', rating: 4 },
            { id: '3', name: 'Sony SRX', price: 1900, image: 'https://www.bhphotovideo.com/images/images2000x2000/sony_srsxb10_blk_srsxb10_extra_bass_wireless_1319165.jpg', rating: 2 },
            { id: '4', name: 'Harman Kardon', price: 2500, image: 'https://i5.walmartimages.com/asr/03acc654-60b9-4486-893a-8af9c03977d4_1.7204e146b130e3ebd8580942fca1ec5f.jpeg', rating: 5 },
            { id: '5', name: 'Sonos', price: 4400, image: 'https://tse2.mm.bing.net/th?id=OIP.Z0CpJ7GaLTHdvP_xLgrv5gHaFj&pid=Api&P=0&h=180', rating: 3 },
        ],
    },
};

const CategoryList = () => {
    const dispatch = useDispatch();
    const selectedCategory = useSelector((state) => state.category.selectedCategory);
    const categoryData = itemsData[selectedCategory] || { name: '', items: [] };
    const { name: categoryName, items } = categoryData;

    const [sortedItems, setSortedItems] = useState(items);
    const [sortType, setSortType] = useState('');
    const [filterRating, setFilterRating] = useState(0);
    const [cart, setCart] = useState({});

    const handleIncrement = (id) => {
        setCart(prevCart => ({
            ...prevCart,
            [id]: (prevCart[id] || 0) + 1
        }));
    };

    const handleDecrement = (id) => {
        setCart(prevCart => {
            const newCart = { ...prevCart };
            if (newCart[id] && newCart[id] > 0) {
                newCart[id]--;
            }
            return newCart;
        });
    };


    //To store data in local storage
    useEffect(() => {
        const storedCategory = localStorage.getItem('selectedCategory');
        if (storedCategory) {
            dispatch(setCategory(storedCategory));
        }
    }, [dispatch]);

    //To filter Data according to Condition
    useEffect(() => {
        let updatedItems = [...items];

        if (sortType === 'priceLowToHigh') {
            updatedItems.sort((a, b) => a.price - b.price);
        } else if (sortType === 'priceHighToLow') {
            updatedItems.sort((a, b) => b.price - a.price);
        } else if (sortType === 'ratingLowToHigh') {
            updatedItems.sort((a, b) => a.rating - b.rating);
        } else if (sortType === 'ratingHighToLow') {
            updatedItems.sort((a, b) => b.rating - a.rating);
        }

        if (filterRating > 0) {
            updatedItems = updatedItems.filter(item => item.rating >= filterRating);
        }

        setSortedItems(updatedItems);
    }, [items, sortType, filterRating]);

    return (
        <>
            <div className="container-fluid bg-theme">
                {/* Breadcrumb */}
                <div className="container py-3">
                    <div className="d-flex align-items-center justify-content-between">
                        <h1 className='text-white fw-bold col-4'>{categoryName}</h1>
                        <div className="d-flex justify-content-around col-8">
                            <div className="col-6 roadmap ">
                                <div className="d-flex justify-content-between">
                                    <span className='text-white mt-1'>1 km</span>
                                    <span className='text-white mt-1'>50 km</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="d-flex py-2">
                    <Link to={'/'} className='text-secondary'>All Categories - </Link>
                    <span>{categoryName}</span>
                </div>
                <div className="d-flex justify-content-between align-items-center py-3">
                    <h2 className='fw-bold text-theme-primary'>Filter</h2>
                    <span className='text-theme-primary fw-semibold'>See All <i className="bi bi-arrow-right"></i></span>
                </div>
                <div className="row">
                    {/* Aside panel */}
                    <div className="col-md-3">
                        <aside className="bg-light">
                            <div className="mb-3">
                                <label className="form-label text-orange mb-4">Sort By</label>
                                <div className="form-check mb-3">
                                    <input className="form-check-input" type="radio" name="sort" id="priceLowToHigh" value="priceLowToHigh" onChange={() => setSortType('priceLowToHigh')} />
                                    <label className="form-check-label" >
                                        Price: Low to High
                                    </label>
                                </div>
                                <div className="form-check mb-3">
                                    <input className="form-check-input" type="radio" name="sort" id="priceHighToLow" value="priceHighToLow" onChange={() => setSortType('priceHighToLow')} />
                                    <label className="form-check-label" >
                                        Price: High to Low
                                    </label>
                                </div>
                                <div className="form-check mb-3">
                                    <input className="form-check-input" type="radio" name="sort" id="ratingLowToHigh" value="ratingLowToHigh" onChange={() => setSortType('ratingLowToHigh')} />
                                    <label className="form-check-label" >
                                        Rating: Low to High
                                    </label>
                                </div>
                                <div className="form-check mb-3">
                                    <input className="form-check-input" type="radio" name="sort" id="ratingHighToLow" value="ratingHighToLow" onChange={() => setSortType('ratingHighToLow')} />
                                    <label className="form-check-label" >
                                        Rating: High to Low
                                    </label>
                                </div>
                            </div>
                        </aside>
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            {/* item listing */}
                            {sortedItems.map(item => (
                                <div key={item.id} className="col-md-4 mb-3">
                                    <div className="card">
                                        <img src={item.image} alt={item.name} className="card-img-top" style={{ height: '300px', objectFit: 'cover' }}/>
                                        <div className="card-body">
                                            <h5 className="card-title text-theme-primary fw-bold">{item.name}</h5>
                                            <span className='text-secondary'>MRP.</span>
                                            <p className="card-text text-danger">Rs. {item.price}</p>
                                            <p className="card-text">Rating: <StarRating rating={item.rating} /></p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <button className="btn bg-theme text-white rounded-0 me-2 w-50">Add to Cart</button>
                                                <div className="d-flex align-items-center w-50  " style={{border:'2px solid grey'}}>
                                                    <button className="btn  rounded-0 btn-sm me-2 px-3 fw-bold " onClick={() => handleDecrement(item.id)}>-</button>
                                                    <span className='px-3'>{cart[item.id] || 1}</span>
                                                    <button className="btn  rounded-0 btn-sm ms-2 px-3 fw-bold" onClick={() => handleIncrement(item.id)}>+</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CategoryList;