import React from "react";
import "./Contactme.css";
import { FaStar } from "react-icons/fa";

export default function Contactme() {
  return (
    <body>
      <div class="container">
        <div class="box">
          <div class="image">
            <img
              src="https://i.postimg.cc/4NrdrqmY/Shohrukh-Jalolov.jpg"
              alt="Logo"
            />
          </div>
          <div class="name_job">Marjona</div>
          <div class="rating">
            <FaStar class="fas fa-star" />
            <FaStar class="fas fa-star" />
            <FaStar class="fas fa-star" />
            <FaStar class="fas fa-star" />
            <FaStar class="fas fa-star" />
          </div>
          <p>
            {" "}
            Lorem ipsum dolor sitamet, stphen hawkin so adipisicing elit.
            Ratione disuja doloremque reiciendi nemo.
          </p>
          <div class="btns">
            <button>Email Us</button>
            <button>Phone Call</button>
          </div>
        </div>
        <div class="box">
          <div class="image">
            <div class="image">
              <img
                src="https://i.postimg.cc/4NrdrqmY/Shohrukh-Jalolov.jpg"
                alt="Logo"
              />
            </div>
          </div>
          <div class="name_job">Shohrukh</div>
          <div class="rating">
          <FaStar class="fas fa-star" />
            <FaStar class="fas fa-star" />
            <FaStar class="fas fa-star" />
            <FaStar class="fas fa-star" />
            <FaStar class="fas fa-star" />
          </div>
          <p>
            {" "}
            Lorem ipsum dolor sitamet, stphen hawkin so adipisicing elit.
            Ratione disuja doloremque reiciendi nemo.
          </p>
          <div class="btns">
            <button>Email Us</button>
            <button>Phone call</button>
          </div>
        </div>
        <div class="box">
          <div class="image">
            <div class="image">
              <img
                src="https://i.postimg.cc/4NrdrqmY/Shohrukh-Jalolov.jpg"
                alt="Logo"
              />
            </div>
          </div>
          <div class="name_job">Farrukh</div>
          <div class="rating">
          <FaStar class="fas fa-star" />
            <FaStar class="fas fa-star" />
            <FaStar class="fas fa-star" />
            <FaStar class="fas fa-star" />
            <FaStar class="fas fa-star" />
          </div>
          <p>
            {" "}
            Lorem ipsum dolor sitamet, stphen hawkin so adipisicing elit.
            Ratione disuja doloremque reiciendi nemo.
          </p>
          <div class="btns">
            <button>Email Us</button>
            <button>Phone call</button>
          </div>
        </div>
      </div>
    </body>
  );
}
