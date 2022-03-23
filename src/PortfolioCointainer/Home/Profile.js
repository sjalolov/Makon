import React from "react";
import "./Profile.css";
import { HiOutlineSearch } from "react-icons/hi";

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const fontStyles = {
  color: "black",
  fontSize: "30px",
  position: "20px",
  marginTop: "5px",
};

const fontStylesSeacrh = {
  color: "White",
  fontSize: "30px",
  position: "20px",
  marginTop: "5px",
  marginRight: "10px",
  cursor: "pointer",
};


export default function Profile(your) {
  return (
    <body>
      <header>
        <nav>
          <div class="navbar">
            <div class="logo">
              <img
                src="https://i.postimg.cc/w3KVPzZ6/e40f564c-614f-4ec2-9b2d-6bef980617ce-removebg-preview.png"
                alt="Logo"
              />{" "}
            </div>
            <ul class="menu">
              <li>
                <a href="none">Home</a>
              </li>
              <li>
                <a href="none">Latest</a>
              </li>
              <li>
                <a href="none">Category</a>
              </li>
              <li>
                <a href="none">Services</a>
              </li>
              <li>
                <a href="none">Contact</a>
              </li>
            </ul>
            <div class="searchBox">
              <input type="search" placeholder="Search" />
              <HiOutlineSearch style={fontStylesSeacrh}/>
            </div>
          </div>
        </nav>
        <div class="content">
          <div class="text-content">
            <div class="text">Hi, Welcome To</div>
            <div class="name">макон</div>
            <div class="job">
              <div class="job">
                <span>We are Here to Build For You</span>
                <div class="typing-text">
                  <span class="one">Makon Place</span>
                </div>
              </div>
            </div>
            <div class="buttons">
              <button>About Ue</button>
              <button>Follow Us</button>
            </div>
          </div>
          <div class="girl">
            {/* <img
              src="https://i.postimg.cc/4NrdrqmY/Shohrukh-Jalolov.jpg"
              alt="Logo"
            />{" "} */}
          </div>
        </div>
        <div class="media-icons">
          <a href="https://shohrukhjalolov.com/">
            <FaFacebook style={fontStyles} />
          </a>
          <a href="https://shohrukhjalolov.com/">
            <FaInstagram style={fontStyles} />
          </a>
          <a href="https://shohrukhjalolov.com/">
            <FaYoutube style={fontStyles} />
          </a>
          <a href="https://shohrukhjalolov.com/">
            <FaGithub style={fontStyles} />
          </a>
          <a href="https://shohrukhjalolov.com/">
            <FaLinkedin style={fontStyles} />
          </a>
        </div>
      </header>
    </body>
  );
}
