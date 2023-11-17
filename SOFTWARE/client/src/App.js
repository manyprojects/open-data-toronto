
import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
import axios from 'axios';

// const dataPath =  "./data/addresses.json";

// this part of code for Leslie to populate the map

const MapComponent = () => {

  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: 43.654,
    lng: -79.388
  };


  const addresses = [
      {
        name: 'location-1',
        address: '482 Front St W 2nd floor, Toronto, ON M5V 0W1'
      },
      {
        name: 'location-2',
        address: "27 King's College Cir, Toronto, ON M5S 1A1"
      },
      {
        name: 'location-3',
        address: '344 Bloor St W, Toronto, ON M5S 1W9'
      }
  ]



  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    const fetchGeocodes = async () => {
      const updatedMarkers = await Promise.all(
        addresses.map(async (address) => {
          try {
            const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
              params: {
                address: address.address, // Assuming your address is stored in 'address' field
                key: 'AIzaSyDoVgew2-FFcZT20wm33gLVXP6uvgfL6d0',
              },
            });

            const result = response.data.results[0];
            if (result) {
              const { formatted_address, geometry } = result;
              const { location } = geometry;

              return {
                position: {
                  lat: location.lat,
                  lng: location.lng,
                },
                title: formatted_address,
              };
            }
          } catch (error) {
            console.error(`Error geocoding address: ${address.address}`, error.message);
          }

          return null;
        })
      );

      setMarkers(updatedMarkers.filter(Boolean));
    };

    fetchGeocodes();
  }, [addresses]);

  return (
    <LoadScript googleMapsApiKey="AIzaSyDoVgew2-FFcZT20wm33gLVXP6uvgfL6d0">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={marker.position}
            title={marker.title}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
