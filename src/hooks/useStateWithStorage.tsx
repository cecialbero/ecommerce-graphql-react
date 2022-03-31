import { useState, useEffect } from 'react';

export default function useStateWithStorage(
  key: string,
  defaultValue: unknown
) {
  const [value, setValue] = useState(() => {
    const saved: any = localStorage.getItem(key);
    return saved || defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}