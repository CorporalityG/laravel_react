import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import top_backExpertise from "./images/back1Expertise.png";
import top_rectangleExpertise from "./images/poly1Expertise.png";
import bottom_backExpertise from "./images/back2Expertise.png";
import bottom_rectangleExpertise from "./images/poly2Expertise.png";
import heading_1_arrowExpertise from "./images/arrow1Expertise.png";
import "../Components/SACComp6.css";
import { API_IMG_URL } from '../../../config';

function SACComp6(pageDetail) {
  useEffect(() => {
    Aos.init();
  });

  return (
    <div className="container">
      {
        pageDetail ?
          <div className="SACComp6_community_support_main-Invirogating">
            <div
              className="SACComp6_community_support_first-Invirogating"

            >
              <div className="SACComp6_text_1_invirogating">
                <div className="SACComp6_community_first_heading-Invirogating">
                  <div className="SACComp6_community_first_heading_text-Invirogating">{`${pageDetail.community_item_1_title}`}</div>
                  <div className="SACComp6_community_first_heading_arrow-Invirogating">
                    <img src={heading_1_arrowExpertise} alt="Deep Industry Expertise" />
                  </div>

                </div>

                <div className="SACComp6_community_first_description-Invirogating">
                  {`${pageDetail.community_item_1_description}`}
                </div>
              </div>
              <div className="SACComp6_community_top_image-Invirogating">
                <img src={`${API_IMG_URL}pages/${pageDetail.community_item_1_image}`} alt={`${pageDetail.community_item_1_title}`} className="SACComp6_community_top_image_image-Invirogating" />
              </div>
              <div className="SACComp6_community_top_back_image-Invirogating">
                <img src={top_backExpertise} alt="Invirogating" />
              </div>
              <div className="SACComp6_community_top_rectangle-Invirogating">
                <img src={top_rectangleExpertise} alt="Invirogating" />
              </div>
            </div>
            <div
              className="SACComp6_community_support_second-Invirogating"
            >
              <div className="SACComp6_text_2_invirogating">
                <div className="SACComp6_community_second_heading-Invirogating">
                  <div className="SACComp6_community_second_heading_text-Invirogating">
                    {`${pageDetail.community_item_2_title}`}
                  </div>
                  <div className="SACComp6_community_second_heading_arrow-Invirogating">
                    <img src={heading_1_arrowExpertise} alt="Agility and Enterprise Resilience" />
                  </div>

                </div>
                <div className="SACComp6_community_second_description-Invirogating">
                  {`${pageDetail.community_item_2_description}`}


                </div>
              </div>
              <div className="SACComp6_ImageINSecond_Leaderships">
                <div className="SACComp6_community_bottom_image-Invirogating">
                  <img
                    src={`${API_IMG_URL}pages/${pageDetail.community_item_2_image}`} alt={`${pageDetail.community_item_2_title}`}
                    className="SACComp6_community_bottom_image_image-Invirogating"
                  />
                </div>
                <div className="SACComp6_community_bottom_back_image-Invirogating">
                  <img src={bottom_backExpertise} alt="Invirogating" />
                </div>
              </div>
              <div className="SACComp6_community_bottom_rectangle-Invirogating">
                <img src={bottom_rectangleExpertise} alt="Invirogating" />
              </div>
            </div>
          </div>
          : null
      }
    </div>
  );
}

export default SACComp6;
