import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useEffect } from 'react';
import { Announcements, Banner, ButtonCount } from './components/home';


function App() {

  return (
    <div className="App">
      <Banner />
      <ButtonCount />
      <Announcements />
    </div>
  );
}

export default App;
