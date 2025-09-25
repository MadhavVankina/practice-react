import { lazy } from "react";
import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Store = lazy(() => import("./pages/Store"));

function App() {
  return (
    <div className="">
      <Navbar
        items={{
          Home: "/",
          About: "/about",
          Store: "/store",
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </div>
  );
}

export default App;

const Navbar = ({ items }: any) => {
  // const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <div style={{ display: "flex", gap: "10px" }}>
        {Object.entries(items).map(([key, value]: any) => (
          <Link to={value}>{key}</Link>
        ))}
      </div>

      <div className="CART">
        <button>Items added : </button>
      </div>
    </div>
  );
};
