import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import images from "./components/images";
import { Home } from "./components/home";
import { Schedules } from "./components/schedules";
import { Navbar } from "./components/navbar"
import { GameDetails } from './components/gamedetails';
import { MessageInput } from './components/messaging';
import { PhotoInput } from './components/photos';
import { Footer } from './components/footer';

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
  const { gameId } = useParams();
  return (
    <div className="App">
      <Router>
        <div className="header-container">
          <Banner />
          <div className="navbar-container">
            <Navbar gameId={gameId} />
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedules" element={<Schedules />} />
          <Route path="/details/:gameId" element={<GameDetails />} />
          <Route path="/messaging/:gameId" element={<MessageInput />}
          />
          <Route path="/photos/:gameId" element={<PhotoInput />}
          />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
