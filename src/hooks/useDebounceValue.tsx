/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from 'react';

export const useDebounceValue = (input: string = '', time: number = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(input);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setDebouncedValue(input);
    }, time);

    return () => {
      // callback de limpieza
      clearTimeout(timeOut);
    };
  }, [input]);
  return debouncedValue;
};
