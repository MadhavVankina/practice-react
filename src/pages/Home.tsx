import { useEffect, useState, useRef } from "react";
import useLocalstorage from "../hooks/useLocalstorage";

const Home = () => {
  const [count, setCount] = useLocalstorage("count", 0);
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  // function useDebounce(fn: () => void, delay: number, deps: any[]) {
  //     const timerId = useRef<ReturnType<typeof setTimeout>>(null);

  //     useEffect(() => {
  //         if (timerId.current) clearTimeout(timerId.current);
  //         timerId.current = setTimeout(() => {
  //             fn();
  //         }, delay);

  //         return () => {
  //             if (timerId.current) clearTimeout(timerId.current);
  //         };
  //     }, deps);
  // }

  const fetchAPI = () => {
    console.log("I'm fetching API...");
  };

  // useDebounce(fetchAPI, 500, [value]);

  useEffect(() => {
    let timerId = setTimeout(() => {
      fetchAPI();
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [value]);

  return (
    <div>
      {count}
      <button onClick={() => setCount((prev: number) => prev + 1)}>
        Increase
      </button>
      <button onClick={() => setCount((prev: number) => prev - 1)}>
        Decrease
      </button>
      <input value={value} onChange={handleChange} />
    </div>
  );
};

export default Home;
