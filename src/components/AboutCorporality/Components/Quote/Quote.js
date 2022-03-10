import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Quote.css";
import group_boxes from "../Quote/group_boxes.png";
import priya_mam from "../Quote/priya_mam.png";
import quotation_mark from "../Quote/quotation_mark.png";

function Quote() {
  useEffect(() => {
    Aos.init();
    Aos.init({ disable: "mobile" });
  });

  return (
    <>
      <div className="quote_container_parent">
        <div className="box_image">
          <img src={group_boxes} alt="" />
        </div>
        <div className="container">
          <div className="quote_container">
            <div className="all_contents">
              <div className="" data-aos="zoom-out" data-aos-duration="1000">
                <div className="main_upper_text">
                  Corporality Global practices true agility the way it is
                  supposed to work. All of us across the organisation work
                  towards a common goal and identify with the brand as if it
                  were our very own.
                </div>
                <div className="main_bottom_text">
                  - Priya Mishra, CEO, Founder Corporality Global
                </div>
              </div>
            </div>

            <div
              className="image_left "
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <img src={priya_mam} alt="" />
            </div>
            <div className="quote_image">
              <img src={quotation_mark} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Quote;
