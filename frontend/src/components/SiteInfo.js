/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { assets } from "../assets/assets";

const { foodList } = useContext(StoreContext);
const menu_list = assets.menu_list;

const siteInfo = {
  name: "Everyone's Meal",
  description:
    "At Everyone's Meal, we're passionate about creating delicious, high-quality meals that everyone can enjoy. We believe that good food should be accessible to all, which is why we offer a diverse menu at affordable prices. Order online and experience the difference.",
  mission:
    "To deliver exceptional food at affordable prices while fostering inclusivity and accessibility.",
  tagline: "Delicious meals for everyone, delivered to your doorstep.",
  features: [
    "Wide variety of handcrafted dishes",
    "Affordable and accessible menu options",
    "Easy online ordering system",
    "Prompt delivery services",
    "Excellent customer support",
  ],
  stats: {
    users: "100,000+",
    cities: "9+",
    ordersDelivered: "300,000+",
  },
  contactDetails: {
    phone: "+91 8758461872",
    email: "contact@gmail.com",
  },
  website: "everyonesmeal.com",
  products: { foodList },
  menu: { menu_list },
};

export { siteInfo };
