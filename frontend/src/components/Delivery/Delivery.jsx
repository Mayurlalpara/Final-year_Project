/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Delivery.css';

const Delivery = () => {
    return (
        <div className="delivery-container">
            <h2 className="delivery-title">Delivery Information</h2>

            <p className="delivery-intro">At Everyone's Meal, we strive to make your dining experience as convenient as possible. Here's everything you need to know about our delivery service:</p>

            <div className="delivery-section">
                <h3 className="delivery-heading">Delivery Areas</h3>
                <p>We currently deliver to addresses within 180 miles of our restaurant, covering most areas of Gujarat. Unfortunately, we are unable to deliver to Mumbai at this time due to limited access, high traffic. If you are unsure whether we deliver to your location, please enter your address at checkout or contact us.</p>
            </div>

            <div className="delivery-section">
                <h3 className="delivery-heading">Delivery Times</h3>
                <p>Our estimated delivery time is 30-45 minutes for most orders. Delivery times may vary depending on order volume, traffic conditions, and unforeseen circumstances such as severe weather. We will do our best to keep you informed of any significant delays. Lunch orders are typically delivered between 12:00 PM and 2:00 PM. </p>
            </div>

            <div className="delivery-section">
                <h3 className="delivery-heading">Delivery Fees</h3>
                <p>A flat delivery fee of ₹20 applies to all orders under ₹1000. Orders over ₹10000 qualify for free delivery! Delivery fees are calculated based on distance. The exact delivery cost will be displayed at checkout. </p>
            </div>

            <div className="delivery-section">
                <h3 className="delivery-heading">Delivery Process</h3>
                <p>Once you place your order, you will receive a confirmation email with your order details. Our delivery driver will contact you by phone, SMS shortly before arriving with your meal. We offer Standard delivery. For contactless delivery, our driver will leave your order at your doorstep and notify you upon delivery. Please ensure that your delivery address is accurate and complete, including any apartment numbers, building names, or gate codes.</p>
            </div>

            <div className="delivery-section">
                <h3 className="delivery-heading">If You're Not Available</h3>
                <p>If you are not available to receive your order at the scheduled delivery time, our driver will attempt to contact you. If we are unable to reach you within 30 minutes, the order may be returned to the restaurant, and a re-delivery fee may apply. Please contact us as soon as possible to reschedule your delivery.</p>
            </div>

            <div className="delivery-section">
                <h3 className="delivery-heading">Special Instructions</h3>
                <p>You can add special delivery instructions during checkout, such as "Leave at the back door," "Apartment number 302," or "Gate code 1234." We will do our best to accommodate your requests.</p>
            </div>

            <div className="delivery-section">
                <h3 className="delivery-heading">Delivery Partners [If Applicable]</h3>
                <p>We partner with Srtipe payment to provide efficient and reliable delivery services.</p>
            </div>

            <div className="delivery-section">
                <h3 className="delivery-heading">Contact Us</h3>
                <p>For any delivery-related inquiries or assistance, please contact us at
                +91 8758461872 or
                contact@gmail.com.</p>
            </div>

            <p className="delivery-policy-change"><em>Our delivery policy is subject to change without notice. Please check this page regularly for updates.</em></p>
        </div>
    );
}

export default Delivery;
