import React from "react";
import { API_IMG_URL } from '../../../config';
import "./Banner2.css";
import { Link } from "react-router-dom";

export default function Banner2(pageDetail) {
  return (
    <div className="container-lg">
      {
        pageDetail ?
          <div className="homeThreeBoxes">
            <div className="d-flex justify-content-center align-items-center py-0 dbanner">

              <div data-aos="flip-left" className="sbox d-flex align-items-center my-3 px-3 justify-content-evenly position-relative">
                <div className="boxContent p-3 align-items-center position-absolute">
                  <p className=" boxHead text-center mt-5">
                    {`${pageDetail.box_1_title}`}
                  </p>
                  <p className="text-wrap text-center mt-2">
                    {`${pageDetail.box_1_description}`}
                  </p>
                  <Link to={`${pageDetail.box_1_btn_link}`} className="learn-more" aria-label={`${pageDetail.box_1_title}`}>
                    <span className="learn-more-text">{`${pageDetail.box_1_btn_text}`}
                      <span className="learn-more-arrow"></span>
                    </span>
                  </Link>
                </div>
                <div className="littleD align-items-center position-absolute top-0 start-50 translate-middle-x">
                  <div className="purpleD align-items-center"></div>
                  <div className="position-absolute top-50 start-50 translate-middle align-items-center dImg">
                    {pageDetail.box_1_icon && <img src={`${API_IMG_URL}pages/${pageDetail.box_1_icon}`} alt={`${pageDetail.box_1_title}`} className="img-fluid" />}
                  </div>
                </div>
                <div className="box position-relative">
                  <div className="position-absolute start-50 top-0 translate-middle-x my-4">
                    <div className="dd1 ddy"></div>
                  </div>
                  <div className="position-absolute start-0 bottom-0 translate-middle-x mx-4 my-5">
                    <div className="dd1 ddb"></div>
                  </div>
                </div>
              </div>

              <div data-aos="flip-right" className="sbox d-flex align-items-center my-3 px-3 justify-content-evenly position-relative">
                <div className="boxContent p-3 align-items-center position-absolute">
                  <p className=" boxHead text-center mt-5">
                    {`${pageDetail.box_2_title}`}
                  </p>
                  <p className="text-wrap text-center mt-2">
                    {`${pageDetail.box_2_description}`}
                  </p>
                  <Link to={`${pageDetail.box_2_btn_link}`} className="learn-more" aria-label={`${pageDetail.box_2_title}`}>
                    <span className="learn-more-text">{`${pageDetail.box_2_btn_text}`}
                      <span className="learn-more-arrow"></span>
                    </span>
                  </Link>
                </div>
                <div className="littleD align-items-center position-absolute top-0 start-50 translate-middle-x">
                  <div className="purpleD align-items-center"></div>
                  <div className="position-absolute top-50 start-50 translate-middle align-items-center dImg">
                    {pageDetail.box_2_icon && <img
                      src={`${API_IMG_URL}pages/${pageDetail.box_2_icon}`}
                      alt={`${pageDetail.box_2_title}`}
                      className="img-fluid"
                    />}
                  </div>
                </div>
                <div className="box">
                  <div className="position-absolute start-50 top-0 translate-middle-x my-4">
                    <div className="dd1 ddy"></div>
                  </div>
                  <div className="position-absolute start-0 bottom-0 translate-middle-x mx-4 my-5">
                    <div className="dd1 ddb"></div>
                  </div>
                </div>
              </div>

              <div data-aos="flip-left" className="sbox d-flex align-items-center my-3 px-3 justify-content-evenly position-relative">
                <div className="boxContent p-3 align-items-center position-absolute">
                  <p className=" boxHead text-center mt-5">{`${pageDetail.box_3_title}`}</p>
                  <p className="text-wrap text-center mt-2">
                    {`${pageDetail.box_3_description}`}
                  </p>
                  <Link to={`${pageDetail.box_3_btn_link}`} className="learn-more" aria-label={`${pageDetail.box_3_title}`}>
                    <span className="learn-more-text">{`${pageDetail.box_3_btn_text}`}
                      <span className="learn-more-arrow"></span>
                    </span>
                  </Link>
                </div>
                <div className="littleD align-items-center position-absolute top-0 start-50 translate-middle-x">
                  <div className="purpleD align-items-center"></div>
                  <div className="position-absolute top-50 start-50 translate-middle align-items-center dImg">
                    {pageDetail.box_3_icon && <img src={`${API_IMG_URL}pages/${pageDetail.box_3_icon}`} alt={`${pageDetail.box_3_title}`} className="img-fluid" />}
                  </div>
                </div>
                <div className="box">
                  <div className="position-absolute start-50 top-0 translate-middle-x my-4">
                    <div className="dd1 ddy"></div>
                  </div>
                  <div className="position-absolute start-0 bottom-0 translate-middle-x mx-4 my-5">
                    <div className="dd1 ddb"></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          : null
      }
    </div>
  );
}
