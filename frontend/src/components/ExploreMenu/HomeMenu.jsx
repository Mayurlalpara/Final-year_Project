/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import './HomeMenu.css'; 
import { assets, menu_list } from '../../assets/assets';
import { Link } from 'react-router-dom';

const HomeMenu = ({ category, setCategory }) => {
  const menuRef = useRef(null); // Ref for scrolling the menu

  const scrollMenu = (direction) => {
    const menuWrapper = menuRef.current;
    const scrollAmount = direction === 'left' ? -200 : 200; // Adjust scroll distance as needed
    menuWrapper.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <div className='home-menu-container' id='home-menu'>
      <h2>What's On Your Mind?</h2>

      <div className="nav-buttons">
        <button className="nav-button" onClick={() => scrollMenu('left')}> <img src={assets.arleft} alt="" /> </button>
        <button className="nav-button" onClick={() => scrollMenu('right')}> <img src={assets.arright} alt="" /> </button>
      </div>
      <hr className="menu-divider" />
      <br/>
      <div className='menu-wrapper' ref={menuRef}>
        {menu_list.map((item, index) => (
          <div
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? 'All' : item.menu_name
              )
            }
            key={index}
            className='menu-item'
          >
            <div className="menu-image-wrapper">
                <Link to={"/menu"}>
              <img
                className={category === item.menu_name ? 'menu-active' : ''}
                src={item.menu_image}
                alt={item.menu_name}
                />
                </Link>
            </div>
            {/* <p className="menu-name">{item.menu_name}</p> */}
          </div>
        ))}
      </div>

      <hr className="menu-divider" />
    </div>
  );
};

export default HomeMenu;
