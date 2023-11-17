import React from 'react';
import { GoogleMap } from "@react-google-maps/api"

const Map = (props) => {
    const containerStyle = {
        width: '400px',
        height: '400px'
      };
      
      const center = {
        lat: -3.745,
        lng: -38.523
      };

    const { isloaded } = props;
    return isloaded && (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            // onLoad={onLoad}
            // onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        </GoogleMap>
    );
};

export default Map;