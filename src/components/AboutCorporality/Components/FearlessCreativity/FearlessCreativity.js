import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./FearlessCreativity.css";
import { API_IMG_URL } from '../../../../config';

function FearlessCreativity(pageDetail) {

  useEffect(() => {
    Aos.init();
    Aos.init({ disable: "mobile" });
  }, []);

  return (
    <div className="container fearless_parent">
      <div className="fearlesscreativity_main container">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="aos-init aos-animate"
        >
          <div className="fearless_image_side">
            <div className="fearless_main_image">
              {pageDetail.fearless_image && <img src={`${API_IMG_URL}pages/${pageDetail.fearless_image}`} alt={`${pageDetail.fearless_title}`} />}
            </div>
          </div>
        </div>
        <div className="fearless_content_side">
          <div
            className="fearless_heading"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            {`${pageDetail.fearless_title}`}
          </div>
          <div className="fearless_content">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <div className="fearless_content_1">
                <div className="fearless_content_imageside">
                  {pageDetail.fearless_item_1_icon && <img src={`${API_IMG_URL}pages/${pageDetail.fearless_item_1_icon}`} alt={`${pageDetail.fearless_item_1_title}`} />}
                </div>
                <div className="fearless_content_textside">
                  <div className="textside_heading">
                    {`${pageDetail.fearless_item_1_title}`}
                  </div>
                  <div className="textside_content">
                    {`${pageDetail.fearless_item_1_description}`}
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="750"
            >
              <div className="fearless_content_2">
                <div className="fearless_content_imageside">
                  {pageDetail.fearless_item_2_icon && <img src={`${API_IMG_URL}pages/${pageDetail.fearless_item_2_icon}`} alt={`${pageDetail.fearless_item_2_title}`} />}
                </div>
                <div className="fearless_content_textside">
                  <div className="textside_heading">{`${pageDetail.fearless_item_2_title}`}</div>
                  <div className="textside_content">
                    {`${pageDetail.fearless_item_2_description}`}
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1000"
            >
              <div className="fearless_content_3">
                <div className="fearless_content_imageside">
                  {pageDetail.fearless_item_3_icon && <img src={`${API_IMG_URL}pages/${pageDetail.fearless_item_3_icon}`} alt={`${pageDetail.fearless_item_3_title}`} />}
                </div>
                <div className="fearless_content_textside">
                  <div className="textside_heading">{`${pageDetail.fearless_item_3_title}`}</div>
                  <div className="textside_content">
                    {`${pageDetail.fearless_item_3_description}`}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FearlessCreativity;
