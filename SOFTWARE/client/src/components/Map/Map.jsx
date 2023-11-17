import React, { useCallback, useRef, useState } from 'react';
import './Map.scss';
import graphOne from '../../assets/graphs/trendline_occupancy.png';
import Places from '../Places/Places';
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
  const mapRef = useRef();
  const onLoad = useCallback((map) => (mapRef.current = map), []);

  const [location, setLocation] = useState(null);

  console.log(location);

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

      <Places
        onSetLocation={setLocation}
        setLocation={(location) => {
          setLocation(location);
          mapRef.current?.panTo(location);
        }}
      />

      <div className='map'>
        <GoogleMap
          zoom={10}
          center={center}
          // options={options}
          mapContainerClassName='map-container'
          onLoad={onLoad}
        ></GoogleMap>
      </div>

      <div className='stats'>
        <div className='stats__three'>
          <h4 className='stat__title'>Weekly Average Bed Occupancy Rate</h4>
          <img
            src={graphOne}
            alt='graph'
            className='graph__one'
          />
        </div>
        <div className='stats__four'>
          <h1 className='stat__title'>Graph 2</h1>

          <img
            src={graphOne}
            alt='graph'
            className='graph__one'
          />
        </div>
      </div>
    </div>
  );
};

export default Map;
