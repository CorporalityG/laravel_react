import React from "react";
import { BASE_URL, API_IMG_URL } from '../../../config';
import "./Banner2.css";
import { Link } from "react-router-dom";
// import rightArrow from "../Components/images/vector_1.png"

export default function Banner2(pageDetail) {
  return (
    <div className="container-lg">
      <div className="homeThreeBoxes">
        <div className="d-flex justify-content-center align-items-center py-0 dbanner">
          {Array(3).fill(1).map((item, i) =>
            <div key={i} data-aos="flip-left" className="sbox d-flex align-items-center my-3 px-3 justify-content-evenly position-relative">
              <div className="boxContent p-3 align-items-center position-absolute">
                <p className=" boxHead text-center mt-5">
                {`${pageDetail.box_1_title}`}{/* {`pageDetail.box_${i}_title`} */}
                </p>
                <p className="text-wrap text-center mt-2">
                  Creating high-quality solutions for large enterprises with complex
                  workflows
                </p>
                <Link to={`/article`} className="learn-more">Learn More
                  <img src={BASE_URL + '/img/HomePage/media/right-arrow.png'} alt="Arrow" />
                </Link>
                {/*<div className="learn-more">
                Learn More
                <img src={BASE_URL + '/img/HomePage/media/right-arrow.png'} alt="Arrow" />
              </div>*/}
              </div>
              <div className="littleD align-items-center position-absolute top-0 start-50 translate-middle-x">
                <div className="purpleD align-items-center"></div>
                <div className="position-absolute top-50 start-50 translate-middle align-items-center dImg">
                  <img src={BASE_URL + '/img/HomePage/media/Vector.png'} alt="Vector" className="img-fluid" />
                </div>
              </div>
              <div className="box position-relative">
                <div className="position-absolute start-50 top-0 translate-middle-x my-4">
                  <img
                    src={BASE_URL + '/img/HomePage/media/polygon-23.png'}
                    alt="polygon"
                    className="img-fluid dd1"
                  />
                </div>
                <div className="position-absolute start-0 bottom-0 translate-middle-x mx-4 my-5">
                  <img
                    src={BASE_URL + '/img/HomePage/media/polygon-24.png'}
                    alt="polygon"
                    className="img-fluid dd1"
                  />
                </div>
              </div>
            </div>
          )}

          {/* <div data-aos="flip-right" className="sbox d-flex align-items-center my-3 px-3 justify-content-evenly position-relative">
            <div className="boxContent p-3 align-items-center position-absolute">
              <p className=" boxHead text-center mt-5">
                Sustainable Growth
              </p>
              <p className="text-wrap text-center mt-2">
                Prospective plans to give back to society making a green
                environment a reality
              </p>
              <Link to={`/sustainable-growth`} className="learn-more">
                Learn More
                <img src={BASE_URL + '/img/HomePage/media/right-arrow.png'} alt="Arrow" />
              </Link>
            </div>
            <div className="littleD align-items-center position-absolute top-0 start-50 translate-middle-x">
              <div className="purpleD align-items-center"></div>
              <div className="position-absolute top-50 start-50 translate-middle align-items-center dImg">
                <img
                  src={BASE_URL + '/img/HomePage/media/planet.png'}
                  alt="planet"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="box">
              <div className="position-absolute start-50 top-0 translate-middle-x my-4">
                <img
                  src={BASE_URL + '/img/HomePage/media/polygon-23.png'}
                  alt="polygon"
                  className="img-fluid dd1"
                />
              </div>
              <div className="position-absolute start-0 bottom-0 translate-middle-x mx-4 my-5">
                <img
                  src={BASE_URL + '/img/HomePage/media/polygon-24.png'}
                  alt="polygon"
                  className="img-fluid dd1"
                />
              </div>
            </div>
          </div>

          <div data-aos="flip-left" className="sbox d-flex align-items-center my-3 px-3 justify-content-evenly position-relative">
            <div className="boxContent p-3 align-items-center position-absolute">
              <p className=" boxHead text-center mt-5">Agility</p>
              <p className="text-wrap text-center mt-2">
                Utilising agile in it’s true form to provide timely, transparent
                and reliable outcomes
              </p>
              <Link to={`/about-corporality`} className="learn-more">See Our Framework
                <img src={BASE_URL + '/img/HomePage/media/right-arrow.png'} alt="Arrow" />
              </Link>
            </div>
            <div className="littleD align-items-center position-absolute top-0 start-50 translate-middle-x">
              <div className="purpleD align-items-center"></div>
              <div className="position-absolute top-50 start-50 translate-middle align-items-center dImg">
                <img src={BASE_URL + '/img/HomePage/media/agile.png'} alt="agile" className="img-fluid" />
              </div>
            </div>
            <div className="box">
              <div className="position-absolute start-50 top-0 translate-middle-x my-4">
                <img
                  src={BASE_URL + '/img/HomePage/media/polygon-23.png'}
                  alt="polygon"
                  className="img-fluid dd1"
                />
              </div>
              <div className="position-absolute start-0 bottom-0 translate-middle-x mx-4 my-5">
                <img
                  src={BASE_URL + '/img/HomePage/media/polygon-24.png'}
                  alt="polygon"
                  className="img-fluid dd1"
                />
              </div>
            </div>
          </div> */}

        </div>
      </div>
    </div>
  );
}
