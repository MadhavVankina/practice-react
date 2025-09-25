import { useEffect, useState } from "react";

const useLocalstorage = (key: string, initialValue: any) => {
  const [value, setValue] = useState(() => {
    let currentValue;

    try {
      currentValue = JSON.parse(localStorage.getItem(key) || initialValue);
    } catch (err) {
      currentValue = initialValue;
    }

    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

export default useLocalstorage;
