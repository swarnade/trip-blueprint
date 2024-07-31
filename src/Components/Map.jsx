// src/MapComponent.js
import React, { useEffect, useRef, useState } from 'react';
import { MapsScript } from "./MapsScript";

const Map = ({ apiKey, destination }) => {
  const mapRef = useRef(null);
  const [currentPosition, setCurrentPosition] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCurrentPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      },
      (error) => {
        console.error("Error fetching the user's location: ", error);
      }
    );
  }, []);

  useEffect(() => {
    if (currentPosition) {
      MapsScript().then((google) => {
        const map = new google.maps.Map(mapRef.current, {
          center: currentPosition,
          zoom: 15
        });

        const directionsService = new google.maps.DirectionsService();
        const directionsRenderer = new google.maps.DirectionsRenderer();
        directionsRenderer.setMap(map);

        const request = {
          origin: currentPosition,
          destination: destination,
          travelMode: 'DRIVING'
        };

        directionsService.route(request, (result, status) => {
          if (status === 'OK') {
            directionsRenderer.setDirections(result);
          } else {
            console.error('Directions request failed due to ', status);
          }
        });
      }).catch(error => {
        console.error("Failed to load Google Maps API: ", error);
      });
    }
  }, [currentPosition, apiKey, destination]);

  return (
    <div className='h-full'>
      <div ref={mapRef} style={{ height: '100%', width: '100%' }} ></div>
    </div>
  );
};

export default Map;
