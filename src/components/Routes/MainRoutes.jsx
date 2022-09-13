import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Ngo from "../Ngo/Ngo";
import Volunteer from "../Volunteer/Volunteer";

const MainRoutes = () => {
  return (
    <React.Fragment>
      <Header tx />
      <Routes>
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/ngo" element={<Ngo />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </React.Fragment>
  );
};

export default MainRoutes;
