import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Work from './components/pages/work';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="container">
      <div className="navigation">
        <Navbar />
      </div>
      <div>
        <Work />
      </div>
     
    </div>
  );
}

export default App;
