import React from 'react';
import uselocation from '../hooks/useGeolocation';

const LocationDisplay: React.FC = () => {
  const { location, error, loading } = uselocation();

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;
console.log("location", location,"error", error,"loading", loading)
  return (
    <div>
      {location.lat && location.log ? (
        <p>
          Latitude: {location.lat} <br/>
          Longitude: {location.log}
        </p>
      ) : (
        <p>Location not available</p>
      )}
    </div>
  );
};

export default LocationDisplay;
