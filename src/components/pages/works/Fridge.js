import React from "react";

import "./Pages.css";

export default class Fridge extends React.Component {
  render() {
    return (
      // overall div
      <div className="content-container">
        {/* title */}
        <div className="page-header">
          <h1 className="header">Fridge</h1>
        </div>

        {/* 2-column section */}
        <div className="brief-section">
          {/* first column */}
          <div className="column-one">
            <div>
              <h5>Type:</h5> <h4 className="column-text">Individual UI/UX Project</h4>
            </div>
            <div>
              <h5>My Role:</h5> <h4 className="column-text">UI/UX Designer</h4>
            </div>
            <div>
              <h5>Timeline:</h5> <h4 className="column-text">4 months</h4>
            </div>
          </div>

          {/* second column */}
          <div className="column-two">
            <h5>Summary: </h5>

            <h4 className="column-text">
              My team and I were tasked with creating a human-computer
              interaction solution to a real world problem of our choice.
              <br />
              <br />
              We decided to tackle the issue of sizing inconsistencies when
              shopping online for clothes, and explored solutions to help take
              the guesswork out of choosing the correct size.
              <br />
              <br />
              In the future, this idea could be developed using React as the
              front-end technology.
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
