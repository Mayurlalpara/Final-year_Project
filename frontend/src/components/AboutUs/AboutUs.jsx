/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import "./AboutUs.css";
import { Link } from 'react-router-dom';
import GoogleMapsComponent from '../Map/Map';


const AboutUs = () => {
    return (
        <div className="about-us-container">
            <h2 className="about-us-title">About Us</h2>


            <span className="about-us-welcome">Welcome to Everyone's Meal</span>

            <div className="about-us-content">
                <p>Everyone's Meal: Where flavor meets convenience.</p>
                <p>At Everyone's Meal, we're passionate about creating delicious, high-quality meals that everyone can enjoy. We believe that good food should be accessible to all, which is why we offer a diverse menu at affordable prices. Order online and experience the difference.</p>
                <p>Everyone's Meal: Explore our menu of delicious dishes and have your meal delivered right to your door.</p>
            </div>

            <div className="about-us-content">
                <h3 className="about-us-heading">Our Mission</h3>
                <p>Our mission is simple: Experience restaurant-quality food from the comfort of your home. Order online from Everyone's Meal and enjoy fast and reliable delivery.</p>
            </div>

            <div className="about-us-content">
                <h3 className="about-us-heading">Quality You Can Trust</h3>
                <ul className="about-us-list">
                    <li>Easy Online Ordering: Emphasize the simplicity and convenience of ordering through our website.</li>
                    <li>Menu Variety: Showcase the range of dishes we offer.</li>
                    <li>Fast and Reliable Delivery: Promote the speed and dependability of our delivery service.</li>
                    <li>Food Quality: Highlight the freshness and quality of our ingredients and preparation.</li>
                    <li>Special Offers/Promotions: If applicable, mention any deals or discounts available.</li>
                </ul>
            </div>

            <div className="location">
                <h3 className="about-us-heading">This Is Where You Can Find Us!! </h3>
                <br/>
        <GoogleMapsComponent />
                <br/>

            </div>
            <div className="about-us-cta-container">
                <Link to={'/search'} className="about-us-cta">Order Now</Link>
            </div>

        </div>
    );
}

export default AboutUs;