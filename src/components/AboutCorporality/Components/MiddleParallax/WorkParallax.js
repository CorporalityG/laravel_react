import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./WorkParallax.css";
import right_rectangle from "./images/right_rectangle.png";
import top_rectangle from "./images/top_rectangle.png";
import threeboxes from "./images/threeboxes.png";
import { useNavigate } from "react-router";

function WorkParallax(pageDetail) {
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
              {`${pageDetail.how_we_work_title}`}
            </div>

            <div
              className="parallax_description"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              {`${pageDetail.how_we_work_description}`}
            </div>

            <div
              className="bottom_button"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <button onClick={() => { navigate(`/${pageDetail.how_we_work_btn_link}`); topHandle(); }}> {`${pageDetail.how_we_work_btn_text}`} </button>
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
