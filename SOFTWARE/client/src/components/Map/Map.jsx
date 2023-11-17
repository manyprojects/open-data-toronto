import React from 'react';
import './Map.scss';
import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  Circle,
  MarkerClusterer,
} from '@react-google-maps/api';

const center = { lat: 44, lng: -80 };
const options = {
  disableDefaultUI: true,
  clickableIcons: false,
};

const Map = () => {
  return (
    <div className='container'>
      <div className='controls'>
        <h1>Map Page</h1>
      </div>
      <div className='map'>
        <GoogleMap
          zoom={10}
          center={center}
          //   options={options} we turn this on if we want use controls like street view
          mapContainerClassName='map-container'
        ></GoogleMap>
      </div>
    </div>
  );
};

export default Map;
