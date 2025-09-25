import useLocalstorage from "../hooks/useLocalstorage";

const Home = () => {
  const [count, setCount] = useLocalstorage("count", 0);
  return (
    <div>
      {count}
      <button onClick={() => setCount((prev: number) => prev + 1)}>
        Increase
      </button>
      <button onClick={() => setCount((prev: number) => prev - 1)}>
        Decrease
      </button>
    </div>
  );
};

export default Home;
