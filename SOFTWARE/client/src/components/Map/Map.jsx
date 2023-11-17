import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import './Map.scss';
import graphOne from '../../assets/graphs/trendline_occupancy.png';
import graphTwo from '../../assets/graphs/newplot.png';
import dash from '../../assets/graphs/dash.png';
import Places from '../Places/Places';
import shelterGeo from '../../data/geocodes.json';
import {
  GoogleMap,
  Marker,
  // DirectionsRenderer,
  // Circle,
  // MarkerClusterer,
} from '@react-google-maps/api';

const center = { lat: 44, lng: -80 };
const options = {
  disableDefaultUI: true,
  clickableIcons: false,
};

const Map = () => {
  const mapRef = useRef();
  const onLoad = useCallback((map) => (mapRef.current = map), []);
  const shelters = useMemo(() => {
    return shelterGeo;
  }, [center]);
  // const shelters = useMemo(() => {
  //   return generateShelters(center);
  // }, [center]);

  const [location, setLocation] = useState(null);

  return (
    <div className='container'>
      <h1 className='insights'>Key Insights</h1>
      <div className='stats'>
        <div className='stats__one stat'>
          <h1 className='stat__title'>61</h1>
          <p>number of open shelters</p>
          <p className='update'>updated 10s ago</p>
        </div>
        <div className='stats__two stat'>
          <h1 className='stat__title'>8940</h1>
          <p>average service users per day</p>
          <p className='update'>updated 5mins ago</p>
        </div>

        <div className='stats__one stat'>
          <h1 className='stat__title'>41</h1>
          <p>organizations running shelters</p>
          <p className='update'>updated 2mins ago</p>
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

          {shelters &&
            shelters.map((shelter) => {
              return (
                <Marker
                  key={(shelter.lat, shelter.lng)}
                  position={shelter}
                />
              );
            })}
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
