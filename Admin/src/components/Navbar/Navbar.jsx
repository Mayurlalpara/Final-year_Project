/* eslint-disable no-unused-vars */
import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={assets.logo} className='logo' alt="" />
        <h2>Admin Panal</h2>
      <img className='profile' src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navbar
