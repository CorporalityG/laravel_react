import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Caretojoinus.css";
import right_image2 from "./images/right_image2.png";
import bottom from "./images/bottom.png";
import top from "./images/top.png";
import image_back from "./images/image_back.png";
import wall from "./images/wall.png";
import middle from "./images/middle.png";
import rectangle from "./images/rectangle.png";
import { useNavigate } from "react-router";
import { API_IMG_URL } from '../../../../config';

function Caretojoinus(pageDetail) {

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
    <div className="caretojoinus_parentdiv">
      <div className="left_wall">
        <img src={wall} alt="wall" />
      </div>
      <div className="container caretojoinus_container">
        <div className="caretojoinus_main">
          <div
            className="caretojoinus_text"
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
          >
            <div className="caretojoinus_heading">{`${pageDetail.join_us_title}`}</div>
            <div className="caretojoinus_description">
              {`${pageDetail.join_us_description}`}
            </div>
            <div className="caretojoinus_button">
              <button onClick={() => { navigate(`/${pageDetail.join_us_btn_link}`); topHandle(); }}>{`${pageDetail.join_us_btn_text}`}</button>
            </div>
          </div>
          <div className="bottom_rectangle">
            <img src={bottom} alt="bottom" />
          </div>
          <div className="center_rectangle">
            <img src={middle} alt="middle" />
          </div>
          <div className="middle_rectangle">
            <img src={rectangle} alt="rectangle" />
          </div>
          <div className="top_rectangle">
            <img src={top} alt="top" />
          </div>

          <div
            className="caretojoinus_image"
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
          >
            <div className="right_image_container">
              <img
                src={`${API_IMG_URL}pages/${pageDetail.join_us_image}`} alt={`${pageDetail.join_us_title}`}
                className="caretojoinus_rightimage"
              />
            </div>
            <div className="back_image">
              <img src={image_back} alt="image_back" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Caretojoinus;
