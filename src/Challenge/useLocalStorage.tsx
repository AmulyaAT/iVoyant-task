import { useState } from 'react';

function useLocalStorage(key: string) {
  const [storedValue, setStoredValue] = useState<string>(() => {
    const item = window.localStorage.getItem(key);
    return item !== null ? item : '';
  });
  const updateValue = (value: string) => {
    setStoredValue(value);
    window.localStorage.setItem(key, value);
  };
  return [storedValue, updateValue] as const;
}
export default useLocalStorage;
