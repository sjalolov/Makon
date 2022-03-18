import React from "react";
import Typical from "react-typical";
import "./Profile.css";
//Used rfc to generate react js functional component

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text"> Shohrukh</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "React.js",
                    1000,
                    "Next.js",
                    1000,
                    "Python",
                    1000,
                    "All & Web Designer",
                    1000,
                    "Web App Developer",
                    1000,
                  ]}
                />
              </h1>
              <span className="primary-role-tagline">
                Me and My team, we build amazing web applications for you and
                your!
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button type="button" className="btn-primary-btn">
              {" "}
              Who am I?{" "}
            </button>
            <a
              href="Shohrukh_Jalolov_Resume.pdf"
              download="Shohrukh_Jalolov_Resume.pdf"
            >
              <button type="button" className="btn-primary-btn">
                {" "}
                My  Resume
              </button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
