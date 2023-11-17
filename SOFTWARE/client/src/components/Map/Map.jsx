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
      <div className='stats'>
        <div className='stats__one'>
          <h1 className='stat__title'>Stat 1</h1>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, eius.
          Aliquid natus aliquam quaerat, doloribus, magni temporibus cumque
          repellat et similique dolor qui. Maxime, alias dolore? Dicta quidem
          amet rem!
        </div>
        <div className='stats__two'>
          <h1 className='stat__title'>Stat 2</h1>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus porro
          rem, reiciendis, nihil est quae voluptate maxime iure assumenda fugiat
          alias? Magnam aliquam, autem consequatur ut numquam minus qui porro.
        </div>
      </div>

      <div className='map'>
        <GoogleMap
          zoom={10}
          center={center}
          //   options={options} we turn this on if we want use controls like street view
          mapContainerClassName='map-container'
        ></GoogleMap>
      </div>

      <div className='stats'>
        <div className='stats__three'>
          <h1 className='stat__title'>Graph 1</h1>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, eius.
          Aliquid natus aliquam quaerat, doloribus, magni temporibus cumque
          repellat et similique dolor qui. Maxime, alias dolore? Dicta quidem
          amet rem!
        </div>
        <div className='stats__four'>
          <h1 className='stat__title'>Graph 2</h1>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus porro
          rem, reiciendis, nihil est quae voluptate maxime iure assumenda fugiat
          alias? Magnam aliquam, autem consequatur ut numquam minus qui porro.
        </div>
      </div>
    </div>
  );
};

export default Map;
