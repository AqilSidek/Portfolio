import React from "react";

import "./Pages.css";

export default class AisKrim extends React.Component {
  render() {
    return (
      // overall div
      <div className="content-container">
        {/* title */}
        <div className="page-header">
          <h1 className="header">Ais Krim</h1>
        </div>

        {/* 2-column section */}
        <div className="brief-section">
          {/* first column */}
          <div className="column-one">
            <div>
              <h5>Type:</h5> <h4 className="column-text">Individual Project</h4>
            </div>
            <div>
              <h5>My Role:</h5> <h4 className="column-text">UI/UX Designer</h4>
            </div>
            <div>
              <h5>Timeline:</h5> <h4 className="column-text">1 week</h4>
            </div>
          </div>

          {/* second column */}
          <div className="column-two">
            <h5>Summary: </h5>

            <h4 className="column-text">
              This project was an exercise in designing a website using Adobe
              XD.
              <br />
              <br />
              In the future, this website can be implemented using React or HTML
              and CSS.
            </h4>
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
