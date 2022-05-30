import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import main from "../OurImpetus/main.png";
import main2 from "../OurImpetus/main2.png";
import backimg from "../OurImpetus/back.png";
import wall from "../OurImpetus/wall.png";
import smallrect from "../OurImpetus/small.png";
import rect from "../OurImpetus/rect.png";
import text_rectangle from "../OurImpetus/text_rectangle.png";
import yellow_back from "../OurImpetus/yellow_back.png";
import "./First.css";

function FirstNew() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
    Aos.init({ disable: "mobile" });
  });

  return (
    <div className="ourimpetus_parent">
      <img src={yellow_back} alt="yellow_back" className="ourimpetus_yellowback" />
      <div className="container">
        <div className="ourimpetus_container">
          <div
            className="ourimpetus_text_side"
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            data-aos-offset="0"
          >
            <div className="impetus_text_box1">
              <img src={rect} alt="rect" />
            </div>
            <div className="impetus_text_box2">
              <img src={text_rectangle} alt="text_rectangle" />
            </div>
            <h1 className="ourimpetus_textside_heading">Our Impetus</h1>
            <div className="ourimpetus_textside_description">
            To Deliver The Best In Digital Marketing And Sales Solutions Using
              Innovation And Intuition To Craft Business Brilliance
            </div>
            <div className="ourimpetus_textside_smalltext">
              We create long-lasting values while helping you embrace change in
              quickly altering marketing scenarios
            </div>
          </div>

          <div
            className="our_impetus_image_side"
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            data-aos-offset="0"
          >
            <div className="imageside_maincontainer">
              <div className="imagesidecontainer2">
                <img src={main2} alt="main2" className="impetus_mainimage" />
              </div>
              <div className="impetus_main_backside">
                <img src={backimg} alt="backimg" />
              </div>
              <div className="impetus_main_wall">
                <img src={wall} alt="wall" />
              </div>
              <div className="impetus_main_box">
                <img src={smallrect} alt="smallrect" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstNew;
