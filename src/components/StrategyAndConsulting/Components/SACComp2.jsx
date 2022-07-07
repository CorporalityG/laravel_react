import React, { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";
import main2Organic from "./images/secondMain.png";
import wall2Organic from "./images/secondWall.png";
import small2Organic from "./images/secondRect.png";
import side2Organic from "./images/secondSideRect.png";
import "../Components/SACComp2.css";
import { API_IMG_URL } from '../../../config';

const SACComp2 = (pageDetail) => {
  useEffect(() => {
    aos.init({ duration: 3000 });
  }, []);
  return (
    <div className="SACC2_prev2">
      {
        pageDetail ?
          <>
            <img className="SACC2_side2-container" src={side2Organic} alt="side2Organic" />
            <div className="container">
              <div className="row">
                <div className="col-lg-6 SACC2_imaging-2 d-flex justify-content-center align-items-center flex-column">
                  <div className="SACC2_images-2">
                    <img className="SACC2_wall2-container" src={wall2Organic} alt="wall2Organic" />

                    <img className="SACC2_small2-container" src={small2Organic} alt="small2Organic" />
                    <div className="SACC2_img-container">
                      <div className="SACC2_hoverinit SACC2_Inc_Div_our-faith-main-img">
                        <div
                          alt="main2Organic"
                          data-aos="fade-up-right"
                          data-aos-duration="2000"
                          data-aos-delay="10"
                        >
                          <img className="SACC2_main2 " src={`${API_IMG_URL}pages/${pageDetail.organic_growth_image}`} alt={`${pageDetail.organic_growth_title}`} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 SACC2_texting-2">
                  <p
                    data-aos="fade-left"
                    data-aos-duration="3000"
                    className="SACC2_prev-2-text-1"
                  >
                    {`${pageDetail.organic_growth_title}`}
                  </p>
                  <p
                    data-aos="fade-left"
                    data-aos-delay="300"
                    data-aos-duration="3000"
                    className="SACC2_prev-2-text-2"
                  >
                    {`${pageDetail.organic_growth_description}`}
                  </p>
                  <div
                    data-aos="fade-left"
                    data-aos-delay="900"
                    data-aos-duration="3000"
                    className="SACC2_text-box "
                  >
                    <p className="SACC2_text-box-content">
                      {`${pageDetail.organic_growth_subtitle}`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
          : null
      }
    </div>
  );
};

export default SACComp2;
