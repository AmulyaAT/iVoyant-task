import React from 'react';
import LocationDisplay from './components/LocationDisplay';

const App: React.FC = () => {
  return (
    <div>
      <h1>Current Location</h1>
      <LocationDisplay />
    </div>
  );
};

export default App;
