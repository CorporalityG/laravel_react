import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./AllCardsNew.css";
import joiner from "./images/joiner.png";
import line_horizontal from "./images/line_horizontal.png";
import line_vertical from "./images/line_vertical.png";
import aa from "./images/1-1.png";
import ab from "./images/1-2.png";
import ac from "./images/1-3.png";
import ad from "./images/1-4.png";
import ae from "./images/1-5.png";
import ba from "./images/2-5.png";
import bb from "./images/2-4.png";
import bc from "./images/2-3.png";
import bd from "./images/2-2.png";
import be from "./images/2-1.png";
import ca from "./images/3-1.png";
import cb from "./images/3-2.png";
import cc from "./images/3-3.png";
import cd from "./images/3-4.png";
import ce from "./images/3-5.png";
import da from "./images/4-1.png";
import db from "./images/4-2.png";
import dc from "./images/4-3.png";
import dd from "./images/4-4.png";
// import ea from "./images/5-1.png";
// import eb from "./images/5-2.png";
// import ec from "./images/5-3.png";
import { API_IMG_URL } from '../../../config';

function AllCardsNew(pageDetail) {
  useEffect(() => {
    Aos.init();
  });
  return (
    <>
      <div className="container-lg gotomarketing_cards_container">
        <div className="gotomarketing_all_cards_parent ">
          <div className="gotomarketing_line_vertical">
            <img src={line_vertical} alt="line_vertical" />
          </div>
          <div
            className="gotomarketing_cards_text_side_1 aos-init aos-animate"
            data-aos="zoom-in"
            data-aos-duration="2500"
          >
            <div className="gotomarketing_line_horizontal_1">
              <img src={line_horizontal} alt="line_horizontal" />
            </div>

            <div className="gotomarketing_cards_top_heading_text ">
              {`${pageDetail.articulating_planning_phase_title}`}
            </div>
            <div className="gotomarketing_cards_top_heading_joiner">
              <img src={joiner} alt="joiner" />
            </div>
          </div>

          <div
            className="gotomarketing_image_side_1_card1 aos-init aos-animate"
            data-aos="flip-left"
            data-aos-duration="2500"
            data-aos-delay="500"
          >
            <div className="gotomarketing_side1_card1_image">
              {pageDetail.articulating_planning_phase_item_1_image && <img src={`${API_IMG_URL}pages/${pageDetail.articulating_planning_phase_item_1_image}`} alt={`${pageDetail.articulating_planning_phase_item_1_title}`} />}
            </div>
            <div className="gotomarketing_side1_card1_text">
              {`${pageDetail.articulating_planning_phase_item_1_title}`}
            </div>
          </div>

          <div
            className="gotomarketing_image_side_1_card2 aos-init aos-animate"
            data-aos="flip-left"
            data-aos-duration="2500"
            data-aos-delay="1000"
          >
            <div className="gotomarketing_side1_card2_image">
              {pageDetail.articulating_planning_phase_item_2_image && <img src={`${API_IMG_URL}pages/${pageDetail.articulating_planning_phase_item_2_image}`} alt={`${pageDetail.articulating_planning_phase_item_2_title}`} />}
            </div>
            <div className="gotomarketing_side1_card2_text">
              {`${pageDetail.articulating_planning_phase_item_2_title}`}
            </div>
          </div>

          <div
            className="gotomarketing_image_side_1_card3 aos-init aos-animate"
            data-aos="flip-left"
            data-aos-duration="2500"
            data-aos-delay="1500"
          >
            <div className="gotomarketing_side1_card3_image">
              {pageDetail.articulating_planning_phase_item_2_image && <img src={`${API_IMG_URL}pages/${pageDetail.articulating_planning_phase_item_2_image}`} alt={`${pageDetail.articulating_planning_phase_item_2_title}`} />}
            </div>
            <div className="gotomarketing_side1_card3_text">
              {`${pageDetail.articulating_planning_phase_item_2_title}`}
            </div>
          </div>

          <div
            className="gotomarketing_image_side_1_card4 aos-init aos-animate"
            data-aos="flip-left"
            data-aos-duration="2500"
            data-aos-delay="2000"
          >
            <div className="gotomarketing_side1_card4_image">
              {pageDetail.articulating_planning_phase_item_4_image && <img src={`${API_IMG_URL}pages/${pageDetail.articulating_planning_phase_item_4_image}`} alt={`${pageDetail.articulating_planning_phase_item_4_title}`} />}
            </div>
            <div className="gotomarketing_side1_card4_text">
              {`${pageDetail.articulating_planning_phase_item_4_title}`}
            </div>
          </div>

          <div
            className="gotomarketing_image_side_1_card5 aos-init aos-animate"
            data-aos="flip-left"
            data-aos-duration="2500"
            data-aos-delay="2000"
          >
            <div className="gotomarketing_side1_card5_image">
              {pageDetail.articulating_planning_phase_item_5_image && <img src={`${API_IMG_URL}pages/${pageDetail.articulating_planning_phase_item_5_image}`} alt={`${pageDetail.articulating_planning_phase_item_5_title}`} />}
            </div>
            <div className="gotomarketing_side1_card5_text">
              {`${pageDetail.articulating_planning_phase_item_5_title}`}
            </div>
          </div>

          {/* ROW 2 */}

          <div
            className="gotomarketing_cards_text_side_2 aos-init aos-animate"
            data-aos="zoom-in"
            data-aos-duration="2500"
          >
            <div className="gotomarketing_line_horizontal_2">
              <img src={line_horizontal} alt="Prep Phase line" />
            </div>
            <div className="gotomarketing_cards_top_heading_text">
              {`${pageDetail.articulating_prep_phase_title}`}
            </div>
            <div className="gotomarketing_cards_top_heading_joiner">
              <img src={joiner} alt="Prep Phase" />
            </div>
          </div>

          <div
            className="gotomarketing_image_side_2_card1 aos-init aos-animate"
            data-aos="flip-left"
            data-aos-duration="2500"
            data-aos-delay="500"
          >
            <div className="gotomarketing_side2_card1_image">
              {pageDetail.articulating_prep_phase_item_1_image && <img src={`${API_IMG_URL}pages/${pageDetail.articulating_prep_phase_item_1_image}`} alt={`${pageDetail.articulating_prep_phase_item_1_title}`} />}
            </div>
            <div className="gotomarketing_side2_card1_text">
              {`${pageDetail.articulating_prep_phase_item_1_title}`}
            </div>
          </div>

          <div
            className="gotomarketing_image_side_2_card2 aos-init aos-animate"
            data-aos="flip-left"
            data-aos-duration="2500"
            data-aos-delay="1000"
          >
            <div className="gotomarketing_side2_card2_image">
              {pageDetail.articulating_prep_phase_item_2_image && <img src={`${API_IMG_URL}pages/${pageDetail.articulating_prep_phase_item_2_image}`} alt={`${pageDetail.articulating_prep_phase_item_2_title}`} />}
            </div>
            <div className="gotomarketing_side2_card2_text">
              {`${pageDetail.articulating_prep_phase_item_2_title}`}
            </div>
          </div>

          <div
            className="gotomarketing_image_side_2_card3 aos-init aos-animate"
            data-aos="flip-left"
            data-aos-duration="2500"
            data-aos-delay="1500"
          >
            <div className="gotomarketing_side2_card3_image">
              {pageDetail.articulating_prep_phase_item_3_image && <img src={`${API_IMG_URL}pages/${pageDetail.articulating_prep_phase_item_3_image}`} alt={`${pageDetail.articulating_prep_phase_item_3_title}`} />}
            </div>
            <div className="gotomarketing_side2_card3_text">
              {`${pageDetail.articulating_prep_phase_item_3_title}`}
            </div>
          </div>
          <div
            className="gotomarketing_image_side_2_card4 aos-init aos-animate"
            data-aos="flip-left"
            data-aos-duration="2500"
            data-aos-delay="1500"
          >
            <div className="gotomarketing_side2_card4_image">
              {pageDetail.articulating_prep_phase_item_4_image && <img src={`${API_IMG_URL}pages/${pageDetail.articulating_prep_phase_item_4_image}`} alt={`${pageDetail.articulating_prep_phase_item_4_title}`} />}
            </div>
            <div className="gotomarketing_side2_card4_text">
              {`${pageDetail.articulating_prep_phase_item_4_title}`}
            </div>
          </div>
          <div
            className="gotomarketing_image_side_2_card5 aos-init aos-animate"
            data-aos="flip-left"
            data-aos-duration="2500"
            data-aos-delay="1500"
          >
            <div className="gotomarketing_side2_card5_image">
              {pageDetail.articulating_prep_phase_item_5_image && <img src={`${API_IMG_URL}pages/${pageDetail.articulating_prep_phase_item_5_image}`} alt={`${pageDetail.articulating_prep_phase_item_5_title}`} />}
            </div>
            <div className="gotomarketing_side2_card5_text">
              {`${pageDetail.articulating_prep_phase_item_5_title}`}
            </div>
          </div>

          {/* ROW 3 */}

          <div
            className="gotomarketing_cards_text_side_3 aos-init aos-animate"
            data-aos="zoom-in"
            data-aos-duration="2500"
          >
            <div className="gotomarketing_line_horizontal_3">
              <img src={line_horizontal} alt="Execution Phase line" />
            </div>
            <div className="gotomarketing_cards_top_heading_text">
              {`${pageDetail.articulating_execution_phase_title}`}
            </div>
            <div className="gotomarketing_cards_top_heading_joiner">
              <img src={joiner} alt="Execution Phase" />
            </div>
          </div>

          <div
            className="gotomarketing_image_side_3_card1 aos-init aos-animate"
            data-aos="flip-left"
            data-aos-duration="2500"
            data-aos-delay="500"
          >
            <div className="gotomarketing_side3_card1_image">
              {pageDetail.articulating_execution_phase_item_1_image && <img src={`${API_IMG_URL}pages/${pageDetail.articulating_execution_phase_item_1_image}`} alt={`${pageDetail.articulating_execution_phase_item_1_title}`} />}
            </div>
            <div className="gotomarketing_side3_card1_text">
              {`${pageDetail.articulating_execution_phase_item_1_title}`}
            </div>
          </div>

          <div
            className="gotomarketing_image_side_3_card2 aos-init aos-animate"
            data-aos="flip-left"
            data-aos-duration="2500"
            data-aos-delay="1000"
          >
            <div className="gotomarketing_side3_card2_image">
              {pageDetail.articulating_execution_phase_item_2_image && <img src={`${API_IMG_URL}pages/${pageDetail.articulating_execution_phase_item_2_image}`} alt={`${pageDetail.articulating_execution_phase_item_2_title}`} />}
            </div>
            <div className="gotomarketing_side3_card2_text">
              {`${pageDetail.articulating_execution_phase_item_2_title}`}
            </div>
          </div>

          <div
            className="gotomarketing_image_side_3_card3 aos-init aos-animate"
            data-aos="flip-left"
            data-aos-duration="2500"
            data-aos-delay="1500"
          >
            <div className="gotomarketing_side3_card3_image">
              {pageDetail.articulating_execution_phase_item_3_image && <img src={`${API_IMG_URL}pages/${pageDetail.articulating_execution_phase_item_3_image}`} alt={`${pageDetail.articulating_execution_phase_item_3_title}`} />}
            </div>
            <div className="gotomarketing_side3_card3_text">
              {`${pageDetail.articulating_execution_phase_item_3_title}`}
            </div>
          </div>

          <div
            className="gotomarketing_image_side_3_card4 aos-init aos-animate"
            data-aos="flip-left"
            data-aos-duration="2500"
            data-aos-delay="2000"
          >
            <div className="gotomarketing_side3_card4_image">
              {pageDetail.articulating_execution_phase_item_4_image && <img src={`${API_IMG_URL}pages/${pageDetail.articulating_execution_phase_item_4_image}`} alt={`${pageDetail.articulating_execution_phase_item_4_title}`} />}
            </div>
            <div className="gotomarketing_side3_card4_text">
              {`${pageDetail.articulating_execution_phase_item_4_title}`}
            </div>
          </div>

          <div
            className="gotomarketing_image_side_3_card5 aos-init aos-animate"
            data-aos="flip-left"
            data-aos-duration="2500"
            data-aos-delay="2000"
          >
            <div className="gotomarketing_side3_card5_image">
              {pageDetail.articulating_execution_phase_item_5_image && <img src={`${API_IMG_URL}pages/${pageDetail.articulating_execution_phase_item_5_image}`} alt={`${pageDetail.articulating_execution_phase_item_5_title}`} />}
            </div>
            <div className="gotomarketing_side3_card5_text">
              {`${pageDetail.articulating_execution_phase_item_5_title}`}
            </div>
          </div>

          <div
            className="gotomarketing_cards_text_side_4 aos-init aos-animate"
            data-aos="zoom-in"
            data-aos-duration="2500"
          >
            <div className="gotomarketing_line_horizontal_4">
              <img src={line_horizontal} alt="Monitoring Phase Line" />
            </div>

            <div className="gotomarketing_cards_top_heading_text">
              {`${pageDetail.articulating_monitoring_phase_title}`}
            </div>
            <div className="gotomarketing_cards_top_heading_joiner">
              <img src={joiner} alt="Monitoring Phase" />
            </div>
          </div>

          <div
            className="gotomarketing_image_side_4_card1 aos-init aos-animate"
            data-aos="flip-left"
            data-aos-duration="2500"
            data-aos-delay="500"
          >
            <div className="gotomarketing_side4_card1_image">
              {pageDetail.articulating_monitoring_phase_item_1_image && <img src={`${API_IMG_URL}pages/${pageDetail.articulating_monitoring_phase_item_1_image}`} alt={`${pageDetail.articulating_monitoring_phase_item_1_title}`} />}
            </div>
            <div className="gotomarketing_side4_card1_text">
              {`${pageDetail.articulating_monitoring_phase_item_1_title}`}
            </div>
          </div>

          <div
            className="gotomarketing_image_side_4_card2 aos-init aos-animate"
            data-aos="flip-left"
            data-aos-duration="2500"
            data-aos-delay="1000"
          >
            <div className="gotomarketing_side4_card2_image">
              {pageDetail.articulating_monitoring_phase_item_2_image && <img src={`${API_IMG_URL}pages/${pageDetail.articulating_monitoring_phase_item_2_image}`} alt={`${pageDetail.articulating_monitoring_phase_item_2_title}`} />}
            </div>
            <div className="gotomarketing_side4_card2_text">
              {`${pageDetail.articulating_monitoring_phase_item_2_title}`}
            </div>
          </div>

          <div
            className="gotomarketing_image_side_4_card3 aos-init aos-animate"
            data-aos="flip-left"
            data-aos-duration="2500"
            data-aos-delay="1500"
          >
            <div className="gotomarketing_side4_card3_image">
              {pageDetail.articulating_monitoring_phase_item_3_image && <img src={`${API_IMG_URL}pages/${pageDetail.articulating_monitoring_phase_item_3_image}`} alt={`${pageDetail.articulating_monitoring_phase_item_3_title}`} />}
            </div>
            <div className="gotomarketing_side4_card3_text">
              {`${pageDetail.articulating_monitoring_phase_item_3_title}`}
            </div>
          </div>

          <div
            className="gotomarketing_image_side_4_card4 aos-init aos-animate"
            data-aos="flip-left"
            data-aos-duration="2500"
            data-aos-delay="2000"
          >
            <div className="gotomarketing_side4_card4_image">
              {pageDetail.articulating_monitoring_phase_item_4_image && <img src={`${API_IMG_URL}pages/${pageDetail.articulating_monitoring_phase_item_4_image}`} alt={`${pageDetail.articulating_monitoring_phase_item_4_title}`} />}
            </div>
            <div className="gotomarketing_side4_card4_text">
              {`${pageDetail.articulating_monitoring_phase_item_4_title}`}
            </div>
          </div>

          <div
            className="gotomarketing_image_side_4_card5 aos-init aos-animate"
            data-aos="flip-left"
            data-aos-duration="2500"
            data-aos-delay="2000"
          >
            <div className="gotomarketing_side4_card4_image">
              {pageDetail.articulating_monitoring_phase_item_5_image && <img src={`${API_IMG_URL}pages/${pageDetail.articulating_monitoring_phase_item_5_image}`} alt={`${pageDetail.articulating_monitoring_phase_item_5_title}`} />}
            </div>
            <div className="gotomarketing_side4_card4_text">
              {`${pageDetail.articulating_monitoring_phase_item_5_title}`}
            </div>
          </div>

          <div
            className="gotomarketing_image_side_4_card6 aos-init aos-animate"
            data-aos="flip-left"
            data-aos-duration="2500"
            data-aos-delay="2000"
          >
            <div className="gotomarketing_side4_card4_image">
              {pageDetail.articulating_monitoring_phase_item_6_image && <img src={`${API_IMG_URL}pages/${pageDetail.articulating_monitoring_phase_item_6_image}`} alt={`${pageDetail.articulating_monitoring_phase_item_6_title}`} />}
            </div>
            <div className="gotomarketing_side4_card4_text">
              {`${pageDetail.articulating_monitoring_phase_item_6_title}`}
            </div>
          </div>

          <div
            className="gotomarketing_image_side_4_card7 aos-init aos-animate"
            data-aos="flip-left"
            data-aos-duration="2500"
            data-aos-delay="2000"
          >
            <div className="gotomarketing_side4_card4_image">
              {pageDetail.articulating_monitoring_phase_item_7_image && <img src={`${API_IMG_URL}pages/${pageDetail.articulating_monitoring_phase_item_7_image}`} alt={`${pageDetail.articulating_monitoring_phase_item_7_title}`} />}
            </div>
            <div className="gotomarketing_side4_card4_text">
              {`${pageDetail.articulating_monitoring_phase_item_7_title}`}
            </div>
          </div>



        </div>
      </div>
    </>
  );
}

export default AllCardsNew;
