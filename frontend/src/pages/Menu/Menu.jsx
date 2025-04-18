/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './Menu.css'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';

const Menu = () => {
    const [category,setCategory] = useState("All");
  return (
    <div>
         < ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category} />
    </div>
  )
}

export default Menu
