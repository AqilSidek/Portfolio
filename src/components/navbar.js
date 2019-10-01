import "./navbar.css";
import React from "react";
import { navbarIcon } from "../media/aq.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar-wrapper">
        <div>
            <img src={ navbarIcon } alt="icon" />
        </div>
        <div className="links-wrapper">
          <div className="link-item">Home</div>
          <div className="link-item">Work</div>
          <div className="link-item">Contact</div>
        </div>
      </div>
    );
  }
}
