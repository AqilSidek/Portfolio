import "./navbar.css";
import React from "react";
import { navbarIcon } from "../media/aq.png";


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
          <div className="link-item">Hello There</div>
        </div>
      </div>
    );
  }
}
