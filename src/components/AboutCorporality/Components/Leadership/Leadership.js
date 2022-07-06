import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import "./Leadership.css";
import { API_IMG_URL } from '../../../../config';

function Leadership(pageDetail) {

  useEffect(() => {
    Aos.init();
    Aos.init({ disable: "mobile" });
  });

  return (
    <div className="leadership_parent">
      <div className="container">
        <div className="leadership_main">
          <div
            className="leadership_heading"
            data-aos="fade-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            {`${pageDetail.team_title}`}
          </div>

          <div
            className="leadership_content"
            data-aos="fade-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            {`${pageDetail.team_description}`}
          </div>

          <div className="leadership_cards">
            <div
              className="leadership_card_1"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <div className="leadership1_image">
                <img src={`${API_IMG_URL}pages/${pageDetail.team_member_1_image}`} alt={`${pageDetail.team_member_1_name}`} />
              </div>
              <div className="leader_card_content_box">
                <div className="card_content_h1">{`${pageDetail.team_member_1_name}`}</div>
                <div className="card_content_h2">{`${pageDetail.team_member_1_designation}`}</div>
                <div className="card_content_description">
                  {`${pageDetail.team_member_1_bio}`}
                </div>
              </div>
            </div>
            <div
              className="leadership_card_2"
              data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <div className="leadership2_image">
                <img src={`${API_IMG_URL}pages/${pageDetail.team_member_2_image}`} alt={`${pageDetail.team_member_2_name}`} />
              </div>

              <div className="leader_card_content_box">
                <div className="card_content_h1">{`${pageDetail.team_member_2_name}`}</div>
                <div className="card_content_h2">{`${pageDetail.team_member_2_designation}`}</div>
                <div className="card_content_description">
                  {`${pageDetail.team_member_2_bio}`}
                </div>
              </div>
            </div>
          </div>
          <Link to={`/${pageDetail.team_btn_link}`}
            className="leadership_button"
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000">{`${pageDetail.team_btn_text}`}</Link>
        </div>
      </div>
    </div>
  );
}

export default Leadership;
