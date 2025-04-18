/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h2>Explore Our Menu</h2>
      {/* <p className='ex-menu-text'>
      Customize your dining experience with our wide selection of dishes and options.  We make it easy to find exactly what you're looking for, delivered right to your door.
      </p> */}
      <div className='ex-menu-list'>
        {menu_list.map((item, index) => (
          <div
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? 'All' : item.menu_name
              )
            }
            key={index}
            className='ex-menu-list-item'
          >
            <div className="image-container">
              <img
                className={category === item.menu_name ? 'active' : ''}
                src={item.menu_image}
                alt={item.menu_name}
              />
            </div>
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

// ExploreMenu.propTypes = {
//   category: PropTypes.string.isRequired,
//   setCategory: PropTypes.func.isRequired,
// };

export default ExploreMenu;