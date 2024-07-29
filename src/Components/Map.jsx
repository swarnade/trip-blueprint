import React, { useState, useEffect } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '100%',
};

const libraries = ['places'];

const MapComponent = ({ apiKey, locationName }) => {
  const [center, setCenter] = useState(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries,
  });

  useEffect(() => {
    if (isLoaded && window.google) {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: locationName }, (results, status) => {
        if (status === 'OK') {
          setCenter({
            lat: results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng(),
          });
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
      });
    }
  }, [isLoaded, locationName]);

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading Maps...</div>;
  }

  return (
    <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={10}>
      {center && <Marker position={center} />}
    </GoogleMap>
  );
};

const Maps = (props) => {

  const apiKey = process.env.REACT_APP_API_MAPS; // Replace with your actual API key
  console.log(apiKey);
  const locationName = props.place;

  return <MapComponent apiKey={apiKey} locationName={locationName} />;
};

export default Maps;
