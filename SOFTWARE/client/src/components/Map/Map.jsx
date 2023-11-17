import React, { useCallback, useMemo, useRef, useState } from 'react';
import './Map.scss';
import graphOne from '../../assets/graphs/trendline_occupancy.png';
import graphTwo from '../../assets/graphs/newplot.png';
import dash from '../../assets/graphs/dash.png';
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
  const shelters = useMemo(() => generateShelters(center), [center]);

  const [location, setLocation] = useState(null);

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
          zoom={8}
          center={center}
          options={options}
          mapContainerClassName='map-container'
          onLoad={onLoad}
        >
          {location && <Marker position={location} />}

          {shelters.map((shelter) => (
            <Marker
              key={shelter.lat}
              position={shelter}
            />
          ))}
        </GoogleMap>
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
          <h4 className='stat__title'>Weekly Average Room Occupancy Rate</h4>

          <img
            src={graphTwo}
            alt='graph'
            className='graph__one'
          />
        </div>
      </div>

      <div className='stats__bottom'>
        <img
          src={dash}
          alt='Dashboard'
        />
      </div>
    </div>
  );
};

const generateShelters = (position) => {
  // const shelters = [
  //   { lat: 42, lng: -80 },
  //   { lat: 44, lng: -80 },
  //   { lat: 46, lng: -80 },
  // ];
  const shelters = [];
  for (let i = 0; i < 100; i++) {
    const direction = Math.random() < 0.5 ? -2 : 2;
    shelters.push({
      lat: position.lat + Math.random() / direction,
      lng: position.lng + Math.random() / direction,
    });
  }
  return shelters;
};

export default Map;
