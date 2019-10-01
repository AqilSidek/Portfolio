import React from "react";

import "./Pages.css";

export default class ReactPortfolio extends React.Component {
  render() {
    return (
      // overall div
      <div className="content-container">
        {/* title */}
        <div className="page-header">
          <h1 className="header">React-based Portfolio</h1>
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
                Front End Web Developer
                <br />
                UI/UX Designer
              </h4>
            </div>
            <div>
              <h5>Timeline:</h5> <h4 className="column-text">4 months</h4>
            </div>
          </div>

          {/* second column */}
          <div className="column-two">
            <h5>Summary: </h5>

            <h4 className="column-text">
              This website was built to practice and teach myself React while
              simultaneously showcasing my other coding, and UI/UX projects.
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
