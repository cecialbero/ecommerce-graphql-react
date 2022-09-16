import { useState, useEffect } from 'react';

export default function useStateWithStorage(
  key: string,
  defaultValue: unknown
) {
  const [value, setValue] = useState();

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));

    setValue(() => {
      const saved: any = localStorage.getItem(key);
      return saved || defaultValue;
    })
  }, [key, value]);

  return [value, setValue];
}