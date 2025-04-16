/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import FeedBack from '../../components/FeedBack/FeedBack'


const Home = () => {

    const [category,setCategory] = useState("All");

  return (
    <div className='home'>
      <Header />
      {/* < ExploreMenu category={category} setCategory={setCategory}/> */}
      {/* <FoodDisplay category={category}/> */}
      <FeedBack/>
    </div>
  )
}

export default Home
