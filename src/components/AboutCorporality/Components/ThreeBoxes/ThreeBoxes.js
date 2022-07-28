import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./ThreeBoxes.css";
import { API_IMG_URL } from '../../../../config';

function ThreeBoxes(pageDetail) {
  useEffect(() => {
    Aos.init();
    Aos.init({ disable: "mobile" });
  });

  return (
    <div className="container">
      <div className="threeboxes_main">
        <div
          className="threeboxes_first"
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <div className="first_box_image">
            {pageDetail.counter_1_icon && <img src={`${API_IMG_URL}pages/${pageDetail.counter_1_icon}`} alt={`${pageDetail.counter_1_title}`} />}
          </div>
          <div className="first_box_text">
            <div className="first_heading">{`${pageDetail.counter_1_number}`}</div>
            <div className="first_description">{`${pageDetail.counter_1_title}`}</div>
          </div>
        </div>
        <div
          className="threeboxes_second"
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <div className="second_box_image">
            {pageDetail.counter_2_icon && <img src={`${API_IMG_URL}pages/${pageDetail.counter_2_icon}`} alt={`${pageDetail.counter_2_title}`} />}
          </div>
          <div className="second_box_text">
            <div className="second_heading">{`${pageDetail.counter_2_number}`}</div>
            <div className="second_description">{`${pageDetail.counter_2_title}`}</div>
          </div>
        </div>
        <div
          className="threeboxes_third"
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <div className="third_box_image">
            {pageDetail.counter_3_icon && <img src={`${API_IMG_URL}pages/${pageDetail.counter_3_icon}`} alt={`${pageDetail.counter_3_title}`} />}
          </div>
          <div className="third_box_text">{`${pageDetail.counter_3_title}`}</div>
        </div>
      </div>
    </div>
  );
}

export default ThreeBoxes;
