import React from "react";

import "./Pages.css";
import "../../../App.css";

export default class BikeRental extends React.Component {
  render() {
    return (
      // overall div
      <div className="content-container">
        {/* title */}
        <div className="page-header">
          <h1 className="header">Bike Rental Booking System</h1>
        </div>

        {/* 2-column section */}
        <div className="brief-section">
          {/* first column */}
          <div className="column-one">
            <div>
              <h5>Type:</h5> <h4 className="column-text">Individual Project</h4>
            </div>
            <div>
              <h5>My Role:</h5>{" "}
              <h4 className="column-text">
                Front End Developer
                <br />
                UI/UX Designer
              </h4>
            </div>
            <div>
              <h5>Timeline:</h5> <h4 className="column-text">1 week</h4>
            </div>
          </div>

          {/* second column */}
          <div className="column-two">
            <div>
              <h5>Summary: </h5>

              <h4 className="column-text">
                This is a front end prototype for a bike rental booking system
                created as part of my interview process for TopView Sightseeing.
              </h4>
            </div>
            <div>
              <h5>Hosted Project Link: </h5>
              <a href="https://aqilsidek.github.io/TopView-Bike-Rental">
                <h4 className="link-text-2">GitHub.io</h4>
              </a>
            </div>
            <div>
              <h5>Project Source Code: </h5>
              <h4>
                <a href="https://github.com/AqilSidek/TopView-Bike-Rental">
                  <h4 className="link-text-2">GitHub</h4>
                </a>
              </h4>
            </div>
          </div>
        </div>

        {/* images */}
        <div></div>

        {/* project description */}
        <div></div>
      </div>
    );
  }
}
