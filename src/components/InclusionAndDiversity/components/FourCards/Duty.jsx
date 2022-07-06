import React, { useEffect } from "react";
import "../FourCards/Duty.css";
import aos from 'aos'
import { API_IMG_URL } from '../../../../config';

const Duty = (pageDetail) => {

  useEffect(() => {
    aos.init({ disable: "mobile" });
  }, [])

  return (
    <div className="Duty_Four">
      <div className="container d-flex flex-column ">
        <div className="row Row1_Duty_text_box d-flex flex-column">
          <p data-aos="fade-down" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="Duty-row1-text-1">{`${pageDetail.boundaries_title}`}</p>
          <p data-aos="fade-down" data-aos-easing="ease-out-cubic" data-aos-duration="2000"
            data-aos-delay="1000" className="Duty-row1-text-2">
            {`${pageDetail.boundaries_description}`}
          </p>
        </div>
        <div className="row Duty-row-cards">
          <div data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000"
            data-aos-delay="1000" className="col-xl-6 justify-content-center align-items-center">
            <div className="Duty_images_card Duty_image_card_1_top">
              <div className="Inc_Div_duty_card_img">
                <div className="Inc_Div_duty_card_img_inner">
                  <img src={`${API_IMG_URL}pages/${pageDetail.boundaries_item_1_image}`} alt={`${pageDetail.boundaries_item_1_title}`} />
                </div>
              </div>
              <div className="Duty_card_text Duty_card_text_1">
                <p className="Duty_card_text_1_heading">{`${pageDetail.boundaries_item_1_title}`}</p>
                <p className="Duty_card_text_2_Description">
                  {`${pageDetail.boundaries_item_1_description}`}
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000"
            data-aos-delay="1500" className="col-xl-6 2-Card-whole-column justify-content-center align-items-center">
            <div className="Duty_images_card Duty-images-card-2">
              <div className="Inc_Div_duty_card_img">
                <div className="Inc_Div_duty_card_img_inner">
                  <img src={`${API_IMG_URL}pages/${pageDetail.boundaries_item_2_image}`} alt={`${pageDetail.boundaries_item_2_title}`} />
                </div>
              </div>
              <div className="Duty_card_text_2">
                <p className="Duty_card_text_1_heading">{`${pageDetail.boundaries_item_2_title}`}</p>
                <p className="Duty_card_text_2_Description">
                  {`${pageDetail.boundaries_item_2_description}`}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="Duty_space"></div>
        <div className="row second_row_incl">
          <div data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000"
            data-aos-delay="2000" className="col-xl-6 justify-content-center align-items-center">
            <div className="Duty_images_card Duty-images-card-3">
              <div className="Inc_Div_duty_card_img">
                <div className="Inc_Div_duty_card_img_inner">
                  <img src={`${API_IMG_URL}pages/${pageDetail.boundaries_item_3_image}`} alt={`${pageDetail.boundaries_item_3_title}`} />
                </div>
              </div>
              <div className="Duty_card_text_3 ">
                <p className="Duty_card_text_1_heading dutyText-3-card-heading">
                  {`${pageDetail.boundaries_item_3_title}`}
                </p>
                <p className="Duty_card_text_2_Description">
                  {`${pageDetail.boundaries_item_3_description}`}
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000"
            data-aos-delay="2000" className="col-xl-6 justify-content-center align-items-center">
            <div className="Duty_images_card Duty-images-card-4">
              <div className="Inc_Div_duty_card_img">
                <div className="Inc_Div_duty_card_img_inner">
                  <img src={`${API_IMG_URL}pages/${pageDetail.boundaries_item_4_image}`} alt={`${pageDetail.boundaries_item_4_title}`} />
                </div>
              </div>
              <div className="Duty_card_text_4 ">
                <p className="Duty_card_text_1_heading">
                  {`${pageDetail.boundaries_item_4_title}`}
                </p>
                <p className="Duty_card_text_2_Description">
                  {`${pageDetail.boundaries_item_4_description}`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Duty;
