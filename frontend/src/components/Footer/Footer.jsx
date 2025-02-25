/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import {Link} from "react-router-dom"


const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
      <div className="footer-content-left">
        <img className='logo' src={assets.logo} alt="" />
        <p>At Everyone's Meal, we're passionate about creating delicious, high-quality meals that everyone can enjoy. We believe that good food should be accessible to all, which is why we offer a diverse menu at affordable prices. Order online and experience the difference.</p>
        <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
        </div>
        </div>
      <div className="footer-content-center">
        <h2>Company</h2>
        <ul>
          <a href="#explore-menu">
       <li>Home</li>
          </a>
        <li><Link style={{textDecoration:"none",color:"rgb(250, 85, 85)"}} to="/About">
                About Us
            </Link></li>
        <li><Link style={{textDecoration:"none",color:"rgb(250, 85, 85)"}} to="/service">
            Delivery
            </Link>
            </li>
        <li><Link style={{textDecoration:"none",color:"rgb(250, 85, 85)"}} to="/privacypolicy">
          Privacy Policy
            </Link>
          </li>

        </ul>
      </div>
      <div className="footer-content-right">
        <h2>Get in Touch</h2>
            <ul>
                <li>+91 8758461872</li>
                <li>contact@gmail.com</li>
            </ul>
      </div>

      </div>
      <hr />
      <p className="copyright">Copyright 2024 © everyonesmeal.com - All right Reserved.</p>
    </div>
  )
}

export default Footer
