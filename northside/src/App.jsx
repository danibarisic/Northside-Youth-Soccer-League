import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import images from "./components/images";
import { Home } from "./components/home";
import { Registration } from "./components/registration";
import { Schedules } from "./components/schedules";
import { Navbar } from "./components/navbar"
import { GameDetails } from './components/gamedetails';

export const Banner = () => {
  return (
    <>
      <div className="banner-container">
        {/* <img className="logoImg" src={images.logo} alt="Soccer Ball Logo" /> */}
        <img className="logoImg" src={images.ballLogo} alt="NYSL Logo" />
        <h1 className="display-1 text-white mt-4">NYSL</h1>
      </div>
    </>
  )
};

function App() {
  return (
    <div className="App">
      <Router>
        <div className="header-container">
          <Banner />
          <div className="navbar-container">
            <Navbar />
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedules" element={<Schedules />} />
          <Route path="/details/:id" element={<GameDetails />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
