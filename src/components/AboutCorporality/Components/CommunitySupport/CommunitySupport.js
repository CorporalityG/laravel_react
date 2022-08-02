import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./CommunitySupport.css";
import top_back from "./images/top_back.png";
import top_rectangle from "./images/top_rectangle.png";
import bottom_back from "./images/bottom_back.png";
import bottom_rectangle from "./images/bottom_rectangle.png";
import heading_1_arrow from "./images/heading_1_arrow.png";
import heading_2_arrow from "./images/heading_2_arrow.png";
import { API_IMG_URL } from '../../../../config';

function CommunitySupport(pageDetail) {

  useEffect(() => {
    Aos.init();
    Aos.init({ disable: "mobile" });
  }, []);

  return (
    <div className="communitysupport_parent">
      <div className="container">
        <div className="community_support_main">
          <div
            className="community_support_first "
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div className="community_first_heading">
              <div className="community_first_heading_text">
                {`${pageDetail.community_item_1_title}`}
              </div>
              <div className="community_first_heading_arrow ">
                <img src={heading_1_arrow} alt="heading_1_arrow" />
              </div>
            </div>
            <div className="community_first_description">
              {`${pageDetail.community_item_1_description}`}
            </div>
            <div className="community_top_image">
              {pageDetail.community_item_1_image && <img
                src={`${API_IMG_URL}pages/${pageDetail.community_item_1_image}`} alt={`${pageDetail.community_item_1_title}`}
                className="community_top_image_image"
              />}
            </div>
            <div className="community_top_back_image">
              <img src={top_back} alt="top_back" />
            </div>
            <div className="community_top_rectangle">
              <img src={top_rectangle} alt="top_rectangle" />
            </div>
          </div>
          <div
            className="community_support_second  "
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div className="community_second_heading">
              <div className="community_second_heading_text">
                {`${pageDetail.community_item_2_title}`}
              </div>
              <div className="community_second_heading_arrow">
                <img src={heading_2_arrow} alt="heading_2_arrow" />
              </div>
            </div>
            <div className="community_second_description">
              {`${pageDetail.community_item_2_description}`}
            </div>
            <div className="community_bottom_image">
              {pageDetail.community_item_2_image && <img
                src={`${API_IMG_URL}pages/${pageDetail.community_item_2_image}`} alt={`${pageDetail.community_item_2_title}`}
                className="community_bottom_image_image"
              />}
            </div>
            <div className="community_bottom_back_image">
              <img src={bottom_back} alt="bottom_back" />
            </div>
            <div className="community_bottom_rectangle">
              <img src={bottom_rectangle} alt="bottom_rectangle" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunitySupport;
