import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./TeamSpiritLeadership.css";
import top_back from "./back1.png";
import top_rectangle from "./polygon1.png";
import bottom_back from "./back2.png";
import bottom_rectangle from "./polygon2.png";
import { API_IMG_URL } from '../../../../config';

function Leadership(pageDetail) {

  useEffect(() => {
    Aos.init();
  });

  return (
    <div className="container">
      <div className="community_support_main-Leaderships">
        <div
          data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000"

          className="community_support_first-Leaderships"

        >
          <div className="text1_leadership">
            <div className="community_first_heading-Leaderships">
              <div className="community_first_heading_text-Leaderships">{`${pageDetail.partnerships_item_1_title}`}</div>

            </div>
            <div className="community_first_description-Leaderships">
              {`${pageDetail.partnerships_item_1_description}`}
            </div>
          </div>

          <div className="first_leadership_image">
            <div className="community_top_image-Leaderships">
              <img src={`${API_IMG_URL}pages/${pageDetail.partnerships_item_1_image}`} alt={`${pageDetail.partnerships_item_1_title}`} className="community_top_image_image-Leaderships" />
            </div>
            <div className="community_top_back_image-Leaderships">
              <img src={top_back} alt="top_back" />
            </div>
          </div>
          <div className="community_top_rectangle-Leaderships">
            <img src={top_rectangle} alt="top_rectangle" />
          </div>
        </div>
        <div
          className="community_support_second-Leaderships"
          data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-delay="500"
        >
          <div className="text2_Leaderships">
            <div className="community_second_heading-Leaderships">
              <div className="community_second_heading_text-Leaderships">
                {`${pageDetail.partnerships_item_2_title}`}
              </div>

            </div>
            <div className="community_second_description-Leaderships">
              {`${pageDetail.partnerships_item_2_description}`}

            </div>
          </div>
          <div className="ImageINSecond_Leaderships">
            <div className="community_bottom_image-Leaderships">
              <img
                src={`${API_IMG_URL}pages/${pageDetail.partnerships_item_2_image}`} alt={`${pageDetail.partnerships_item_2_title}`} 
                className="community_bottom_image_image-Leaderships"
              />
            </div>
            <div className="community_bottom_back_image-Leaderships">
              <img src={bottom_back} alt="bottom_back" />
            </div>
          </div>
          <div className="community_bottom_rectangle-Leaderships">
            <img src={bottom_rectangle} alt="bottom_rectangle" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leadership;
