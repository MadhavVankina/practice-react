import { useState } from "react";

const useToggle = (initialValue: boolean) => {
  const [value, setValue] = useState(initialValue);

  const toggleValue = () => {
    setValue((prev: boolean) => !prev);
  };

  return [value, toggleValue];
};

export default useToggle;
