import React, { useState } from "react";
import Header from "./Food-Website/Header";
import Hero from "./Food-Website/Hero";
import Footer from "./Food-Website/Footer";
import Delivery from "./Food-Website/Delivery";
import FoodSlider from "./Food-Website/FoodSlider";
import OurFood from "./Food-Website/OurFood";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Food-Website/Home";
import AboutUs from "./Food-Website/AboutUs";
import SignIn from "./Food-Website/SignIn";

const App = () => {
  const [count, setCount] = useState(0);

  const handleAddtoCart = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <BrowserRouter>
        <Header count={count} />
        <Routes>
          <Route
            path="/"
            element={<Home handleAddtoCart={handleAddtoCart} />}
          />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route
            path="/ourfood"
            element={<OurFood handleAddtoCart={handleAddtoCart} />}
          />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
