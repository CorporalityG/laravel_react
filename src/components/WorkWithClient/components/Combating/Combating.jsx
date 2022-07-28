import React, { useEffect } from "react";
import aos from "aos";
import "../Combating/Combating.css";
import backCombating from "./backCombating.png";
import groupCombating from "./GroupCombating.png";
import textrectCombating from "./text-rectCombating.png";
import { API_IMG_URL } from '../../../../config';

const Combating = (pageDetail) => {
  useEffect(() => {
    aos.init({ duration: "2000" });
  }, []);
  return (
    <div className="COmbatinG">
      <div className="threeboxes_combat">
        <img src={groupCombating} alt="groupCombating" className="Combating_group" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
            <div
              data-aos="fade-right"
              data-aos-delay="1000"
              className=" Combating_images_column"
            >
              <div className="MainAndBack_Combating">
                <div className="Combating_main">
                  <div className="Combating_main_on_div">
                    {pageDetail.combating_image && <img src={`${API_IMG_URL}pages/${pageDetail.combating_image}`} alt={`${pageDetail.combating_title}`} />}
                  </div>
                </div>
                <img src={backCombating} alt="backCombating" className="Combating_back" />
              </div>
              <div className="Texting_in_image_Combating">
                <p className="Image_texting_1">
                  {`${pageDetail.combating_box_title}`}
                </p>
                <p className="Image_texting_2">
                  {`${pageDetail.combating_box_subtitle}`}
                </p>
                <img src={textrectCombating} alt="textrectCombating" className="Image_rect" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 ">
            <div
              data-aos="fade-left"
              data-aos-delay="1000"
              className="Combating_texting_coloumn"
            >
              <p className="Combating_texting_column-1">
                {`${pageDetail.combating_title}`}
              </p>
              <p className="Combating_texting_column-2">
                {`${pageDetail.combating_subtitle}`}
              </p>
              <p className="Combating_texting_column-3">
                {`${pageDetail.combating_description}`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Combating;
