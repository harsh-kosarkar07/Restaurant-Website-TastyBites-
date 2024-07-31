
import Header from "./Food-Website/Header";
import Footer from "./Food-Website/Footer";
import OurFood from "./Food-Website/OurFood";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Food-Website/Home";
import AboutUs from "./Food-Website/AboutUs";
import SignIn from "./Food-Website/SignIn";
import Cart from "./Food-Website/Cart";

const App = () => {
  

  return (
    <div>
      <BrowserRouter>
        <Header  />
        <Routes>
          <Route
            path="/"
            element={<Home  />}
          />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route
            path="/ourfood"
            element={<OurFood  />}
          />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/cart" element={<Cart/>} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
