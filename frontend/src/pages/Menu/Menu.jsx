/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './Menu.css'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import HomeMenu from '../../components/ExploreMenu/HomeMenu';
import NewFoodDisplay from '../../components/FoodDisplay/NewFoodDisplay';

const Menu = () => {
    const [category,setCategory] = useState("All");
  return (
    <div>
         < ExploreMenu category={category} setCategory={setCategory}/>
         {/* <HomeMenu category={category} setCategory={setCategory} /> */}
      <NewFoodDisplay category={category} />
    </div>
  )
}

export default Menu
