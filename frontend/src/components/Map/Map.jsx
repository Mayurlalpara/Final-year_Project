/* eslint-disable no-unused-vars */
import React from 'react';
import './Map.css'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const mapStyles = {
    height: '100vh',
    width: '100%',
    border: '2px solid black', // Adding border directly in JSX
    borderRadius: '20px',
    margin: 'auto',
};

const defaultCenter = {
  lat: 23.5839368, // Example latitude (mehsana)
  lng: 72.3731963, // Example longitude
};

const GoogleMapsComponent = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyB7gCJHO0Fa8_RpKYvPOcNXqJD8Rkdwlm8">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}>
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapsComponent;
