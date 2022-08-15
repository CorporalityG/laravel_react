import React, { useEffect } from "react";
import "../Innovation/Innovation.css";
import aos from "aos";
import smallInnovation from "../Innovation/small2Innovation.png";
import small2Innovation from "../Innovation/smallInnovation.png";
import groupInnovation from "../Innovation/GroupInnovation.png";

const Innovation = (pageDetail) => {

  useEffect(() => {
    aos.init({ duration: 3000 });
  }, []);

  return (
    <div className="fifthcomponent-Innovation effectiveImage-Innovation">
      <img className="group5-Innovation" src={groupInnovation} alt="groupInnovation" />
      <div className="container">
        <div className="row ">
          <div
            data-aos="zoom-in"
            className="text-Innovation d-flex align-items-center justify-content-center flex-column"
          >
            <p className="cont-5-text-1-Innovation">
              {`${pageDetail.innovation_title}`}
            </p>
            <p className="cont-5-text-2-Innovation">
              {`${pageDetail.innovation_description}`}
            </p>
            <img src={small2Innovation} className="small2-5-Innovation" alt="Innovation" />
            <img src={smallInnovation} className="small-5-Innovation" alt="Innovation" />
            <a href={`${pageDetail.innovation_btn_link ?? '#'}`} className="linkinnovation">
              <div className="link-Innovation">
                <div className="button-4-Innovation">
                  <div className="button-link-Innovation" href="#">
                    {`${pageDetail.innovation_btn_text}`}
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="navbor-Innovation"></div>
    </div>
  );
};

export default Innovation;
