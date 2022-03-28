import React from "react";
import "./Team.css";

export default function Team() {
  return (
    <body id="team">
      <h1>Team</h1>
      <div className="row">
        <div className="column">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src="https://i.postimg.cc/4NrdrqmY/Shohrukh-Jalolov.jpg"
                  alt="Avatar"
                  height="300px"
                  width="300px"
                />
              </div>
              <div class="flip-card-back">
                <h1>Shohrukh Jalolov</h1>
                <p>Architect and Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src="https://i.postimg.cc/4NrdrqmY/Shohrukh-Jalolov.jpg"
                  alt="Avatar"
                  height="300px"
                  width="300px"
                />
              </div>
              <div class="flip-card-back">
                <h1>Shohrukh Jalolov</h1>
                <p>Web</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src="https://i.postimg.cc/4NrdrqmY/Shohrukh-Jalolov.jpg"
                  alt="Avatar"
                  height="300px"
                  width="300px"
                />
              </div>
              <div class="flip-card-back">
                <h1>Shohrukh Jalolov</h1>
                <p>Architect and Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
