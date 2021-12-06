import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import User from "../views/User";
import Navbar from "../components/navbar";

const Layouts = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
};

export default Layouts;
