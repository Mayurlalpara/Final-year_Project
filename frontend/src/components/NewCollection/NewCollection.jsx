/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useRef, useState } from 'react';
import { StoreContext } from '../../context/StoreContext';
import HFoodItem from '../FoodItem/HomeFoodItem';
import './NewCollection.css';

const NewCollection = () => {
  const { newFood } = useContext(StoreContext);
  const scrollWrapperRef = useRef(null);

  const foodItems = [...newFood];

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollWrapperRef.current) {
        const scrollAmount = scrollWrapperRef.current.offsetWidth / 4;
        scrollWrapperRef.current.scrollBy({
          left: scrollAmount,
          behavior: 'smooth',
        });

        if (scrollWrapperRef.current.scrollLeft >=
            scrollWrapperRef.current.scrollWidth - scrollWrapperRef.current.offsetWidth) {
          scrollWrapperRef.current.scrollLeft = 0;
        }
      }
    }, 3000);

    return () => clearInterval(interval); 
  }, [foodItems]);

  return (
    <div className="newcollection">
      <h2>New flavors are here—give them a try!</h2>
      <div className="foods-list" ref={scrollWrapperRef}>
        {foodItems.map((item, index) => (
          <div key={index} className="food-items-wrapper">
            <HFoodItem
              id={item._id}
              name={item.name}
              price={item.price}
              description={item.description}
              image={item.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewCollection;
