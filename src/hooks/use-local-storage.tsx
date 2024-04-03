import { useEffect, useState } from 'react';

interface LocalStorageProps<T> {
  key: string;
  defaultValue: T;
}

export default function useLocalStorage<T>({
  key,
  defaultValue,
}: LocalStorageProps<T>) {
  // const [value, setValue] = useState<T>(() => {
  //   const storedValue = localStorage.getItem(key)
  //   return storedValue !== null ? (JSON.parse(storedValue) as T) : defaultValue
  // })

  const [value, setValue] = useState<T>(() => defaultValue);

  useEffect(() => {
    const storedValue = localStorage.getItem(key);
    if (storedValue !== null) {
      setValue(JSON.parse(storedValue) as T);
    }
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue] as const;
}
