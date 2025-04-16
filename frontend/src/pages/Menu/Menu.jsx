/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './Menu.css'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'

const Menu = () => {
    const [category,setCategory] = useState("All");
  return (
    <div>
      <FoodDisplay category={category} />
    </div>
  )
}

export default Menu
