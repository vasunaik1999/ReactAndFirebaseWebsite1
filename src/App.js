import React from 'react'
import "./index.css";
import { Routes ,Route } from 'react-router-dom';
import Home from './Components/Home';
import ContactUs from './Pages/ContactUs';
import Error from './Pages/Error';
import Service from './Pages/Service';
import AboutUs from './Pages/AboutUs';

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<AboutUs />}></Route>
        <Route exact path="/contact" element={<ContactUs />}></Route>
        <Route exact path="/service" element={<Service />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </>
  );
};

export default App