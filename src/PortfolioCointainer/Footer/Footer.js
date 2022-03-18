import React from 'react'
import "./Footer.css"
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaGithub,
    FaLinkedin,
  } from "react-icons/fa";
  const fontStyles = { color: "white", fontSize: "30px" };


export default function Footer() {
  return (
    <body>
      <footer>
        <div class="footer-content">
          <h3>Foolish Developer</h3>
          <p>
            Raj Template is a blog website where you will find great tutorials
            on web design and development. Here each tutorial is beautifully
            described step by step with the required source code.
          </p>
          <div className="icon">
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
        </div>
        <div class="footer-bottom">
          <p>
            copyright &copy; <a href="n">Makon 2022</a>{" "}
          </p>
          <div class="footer-menu">
            <ul class="f-menu">
              <li>
                <a href="n">Home</a>
              </li>
              <li>
                <a href="n">About</a>
              </li>
              <li>
                <a href="n">Contact</a>
              </li>
              <li>
                <a href="n">Blog</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </body>
  );
}
