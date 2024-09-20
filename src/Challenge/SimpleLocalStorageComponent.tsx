import React from 'react';
import useLocalStorage from './useLocalStorage';

const SimpleLocalStorageComponent: React.FC = () => {
  const [username, setUsername] = useLocalStorage('username');

  return (
    <div>
      <h1>Username: {username}</h1>
      <input 
        type="text" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
    </div>
  );
};
export default SimpleLocalStorageComponent;