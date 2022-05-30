import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./WorkParallax.css";
import right_rectangle from "./images/right_rectangle.png";
import top_rectangle from "./images/top_rectangle.png";
import threeboxes from "./images/threeboxes.png";
import { useNavigate } from "react-router";

function WorkParallax() {
  useEffect(() => {
    Aos.init();
    Aos.init({ disable: "mobile" });
  });

  const navigate = useNavigate();
  const topHandle = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div className="aboutus_parallax_parent">
      <div className="boxes_left">
        <img src={threeboxes} alt="threeboxes" />
      </div>
      <div className="container">
        <div className="outer_container">
          <div className="parallax_container">
            <div
              className="parallax_main_heading"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              We make marketing truly work for you.
              <br /> How we work?
            </div>

            <div
              className="parallax_description"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              The digital era is here and rapid business transformations are
              essential to keep your pockets full. Our processes are inclined to
              meet customer expectations and create lasting value while staying
              scalable and adaptive.
            </div>

            <div
              className="bottom_button"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <button onClick={() => { navigate("/go-to-marketing"); topHandle(); }}> Our Services </button>
            </div>
            <div className="box_top">
              <img src={top_rectangle} alt="top_rectangle" />
            </div>
            <div className="box_right">
              <img src={right_rectangle} alt="right_rectangle" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkParallax;
