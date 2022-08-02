import "./SACComp3.css";
import wall from "./images/wall.png";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SACComp3 = (pageDetail) => {
  useEffect(() => {
    AOS.init({ disable: "mobile" });
    AOS.refresh();
  }, []);
  return (
    <div className="sacc3_parent">
      {
        pageDetail ?
          <div className="container">
            <div className="sacc3Container">
              <div data-aos="flip-left"
                data-aos-delay="300"
                data-aos-duration="3000" className="sacc3TextContainer">
                <div

                  className="sacc3TextWrapper d-flex flex-row"
                >
                  <div className="sacc3Left">
                    <img src={wall} alt="wall" />
                  </div>
                  <div className="sacc3Right">
                    <p className="sacc3Heading1">{`${pageDetail.marketing_strategy_title}`}</p>
                    <p className="sacc3Heading2">
                      {`${pageDetail.marketing_strategy_subtitle}`}
                    </p>
                    <p className="sacc3Para">
                      {`${pageDetail.marketing_strategy_description}`}
                    </p>
                    <a className="sacc3Button" href={`/${pageDetail.marketing_strategy_btn_link}`}>
                      {`${pageDetail.marketing_strategy_btn_text}`}
                    </a>
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
export default SACComp3;
