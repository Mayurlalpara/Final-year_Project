/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import './FooddDisplay.css';
import { StoreContext } from '../../context/StoreContext.jsx';
import HFoodItem from '../FoodItem/HomeFoodItem.jsx';

const NewFoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);

    return (
        <div className='fooddisplay' id='fooddisplay'>
            <h2>Your Favorite Flavors, Just a Click Away!</h2>
            <div className="food-list">
                {food_list.map((item, index) => {
                    if (category === 'All' || category === item.category) {
                        return (
                            <div key={index} className="food-item-wrapper">
                                <HFoodItem
                                    id={item._id}
                                    name={item.name}
                                    price={item.price}
                                    description={item.description}
                                    image={item.image}
                                />
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default NewFoodDisplay;