import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import car from './../../assets/images/car.png';
import gardening from './../../assets/images/gardening.png';
import sofa from './../../assets/images/sofa.png';
import furniture from './../../assets/images/furniture.png';
import room from './../../assets/images/room.png';
import camera from './../../assets/images/camera.png';
import tablet from './../../assets/images/tablet.png';
import cloths from './../../assets/images/clothes-rack.png';
import jewelry from './../../assets/images/jewelry.png';
import speaker from './../../assets/images/speaker.png';
import { setCategory } from '../../reducer/CategorySlice';

const categories = [
  { id: '1', name: 'Automobile', image: car },
  { id: '2', name: 'Gardening', image: gardening },
  { id: '3', name: 'Home & Fur..', image: sofa },
  { id: '4', name: 'DYI Furniture', image: furniture },
  { id: '5', name: 'Bed Room fu.', image: room },
  { id: '6', name: 'Camera', image: camera },
  { id: '7', name: 'Tablets', image: tablet },
  { id: '8', name: 'Clothing', image: cloths },
  { id: '9', name: 'Jewellery', image: jewelry },
  { id: '10', name: 'Speaker', image: speaker }
];

const Category = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCategoryClick = (id) => {
    dispatch(setCategory(id));
    navigate(`/categories/${id}`);
  };

  return (
    <div className="container py-5">
      <h2 className='fw-bold text-theme-primary'>Choose you are looking for</h2>
      <div className="col-12 pt-4">
        <div className="d-flex justify-content-between align-items-center">
          {categories.map(category => (
            <div key={category.id} className="col-1" onClick={() => handleCategoryClick(category.id)}>
              <div className='p-3'>
                <img src={category.image} alt={category.name} className='img-fluid' />
              </div>
              <p className='text-theme-primary text-center fw-semibold'>{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
