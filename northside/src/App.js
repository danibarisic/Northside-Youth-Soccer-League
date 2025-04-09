import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from "./components/home";
import { Registration } from "./components/registration";
import { Schedules } from "./components/schedules";
import { Navbar } from "./components/navbar"

export const Banner = () => {
  return (
    <h1>NorthSide Youth Soccer League</h1>
  )
};

function App() {
  return (
    <div className="App">
      <Banner />
      <Router>
        <div className="navbar-container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schedules" element={<Schedules />} />
            <Route path="/registration" element={<Registration />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
