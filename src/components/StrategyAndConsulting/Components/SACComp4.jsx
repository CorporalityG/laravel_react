import "./SACComp4.css";
import rec13 from "./images/rec13.png";
import arrow from "./images/arrow.png";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { API_IMG_URL } from '../../../config';

export default function SACComp4(pageDetail) {
  useEffect(() => {
    AOS.init({ disable: "mobile" });
    AOS.refresh();
  }, []);
  return (
    <div>
      {
        pageDetail ?
          <div className="p-0 container sacc4Container d-flex flex-column justify-content-center">
            <div className="sacc4Top d-flex flex-column align-items-center">
              <p className="sacc4Heading1">
                {`${pageDetail.marketing_innovation_title}`}
              </p>
              <p className="sacc4Para1">
                {`${pageDetail.marketing_innovation_description}`}
              </p>
            </div>
            <div className="sacc4Middle d-flex flex-row flex-wrap justify-content-center">
              <div
                data-aos="flip-left"
                data-aos-duration="3000"
                className="sacc4RecCard"
              >
                <p className="sacc4Heading2">{`${pageDetail.marketing_innovation_item_1_title}`}</p>
                <p className="sacc4Para2">
                  {`${pageDetail.marketing_innovation_item_1_description}`}
                </p>
                <div className="sacc4RCBottom d-flex justify-content-center align-items-center">
                  <img className="sacc4Rec13" src={rec13} alt="rec13" />
                  <img className="sacc4Arrow" src={arrow} alt="arrow" />
                  <span className="sacc4Button">{`${pageDetail.marketing_innovation_item_1_btn_text}`}</span>
                </div>
              </div>
              <div
                data-aos="flip-left"
                data-aos-delay="300"
                data-aos-duration="3000"
                className="sacc4RecCard"
              >
                <p className="sacc4Heading2">{`${pageDetail.marketing_innovation_item_2_title}`}</p>
                <p className="sacc4Para2">
                  {`${pageDetail.marketing_innovation_item_2_description}`}
                </p>
                <div className="sacc4RCBottom d-flex justify-content-center align-items-center">
                  <img className="sacc4Rec13" src={rec13} alt="rec13" />
                  <img className="sacc4Arrow" src={arrow} alt="arrow" />
                  <span className="sacc4Button">{`${pageDetail.marketing_innovation_item_2_btn_text}`}</span>
                </div>
              </div>
              <div
                data-aos="flip-left"
                data-aos-delay="600"
                data-aos-duration="3000"
                className="sacc4RecCard"
              >
                <p className="sacc4Heading2">{`${pageDetail.marketing_innovation_item_3_title}`}</p>
                <p className="sacc4Para2">
                  {`${pageDetail.marketing_innovation_item_3_description}`}
                </p>
                <div className="sacc4RCBottom d-flex justify-content-center align-items-center">
                  <img className="sacc4Rec13" src={rec13} alt="rec13" />
                  <img className="sacc4Arrow" src={arrow} alt="arrow" />
                  <span className="sacc4Button">{`${pageDetail.marketing_innovation_item_3_btn_text}`}</span>
                </div>
              </div>
            </div>
            <div className="sacc4Bottom d-flex flex-column">
              <div className="sacc4Row1 d-flex flex-row justify-content-between">
                <div data-aos="flip-left"
                  data-aos-duration="3000" className="">
                  <div className="sacc4DiamondCard sacc4D1 d-flex justify-content-center align-items-center">
                    <div className="sacc4DCContent">
                      <p className="sacc4Heading2">{`${pageDetail.marketing_innovation_item_4_title}`}</p>
                      <p className="sacc4Para2">
                        {`${pageDetail.marketing_innovation_item_4_description}`}
                      </p>
                      <div className="sacc4DCBottom d-flex justify-content-center align-items-center">
                        <img className="sacc4Rec13" src={rec13} alt="rec13" />
                        <img className="sacc4Arrow" src={arrow} alt="arrow" />
                        <span className="sacc4Button">{`${pageDetail.marketing_innovation_item_4_btn_text}`}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-aos="flip-right"
                  data-aos-duration="3000" data-aos-delay="1000" className="">
                  <div className="sacc4DiamondCard sacc4D2 d-flex justify-content-center align-items-center">

                    <div className="sacc4DCContent">
                      <p className="sacc4Heading2">{`${pageDetail.marketing_innovation_item_5_title}`}</p>
                      <p className="sacc4Para2">
                        {`${pageDetail.marketing_innovation_item_5_description}`}
                      </p>
                      <div className="sacc4DCBottom d-flex justify-content-center align-items-center">
                        <img className="sacc4Rec13" src={rec13} alt="rec13" />
                        <img className="sacc4Arrow" src={arrow} alt="arrow" />
                        <span className="sacc4Button">{`${pageDetail.marketing_innovation_item_5_btn_text}`}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sacc4DiamondCard sacc4BlankDiamondCard1 sacc4BlankDiamondCard"></div>
              </div>
              <div className="sacc4Row2 d-flex flex-row justify-content-between">
                <div className="sacc4DiamondCard sacc4BlankDiamondCard2 sacc4BlankDiamondCard"></div>
                <div data-aos="flip-left"
                  data-aos-duration="3000" data-aos-delay="1500" className="">
                  <div className="sacc4DiamondCard sacc4D3 d-flex justify-content-center align-items-center">

                    <div className="sacc4DCContent">
                      <p className="sacc4Heading2">{`${pageDetail.marketing_innovation_item_6_title}`}</p>
                      <p className="sacc4Para2">
                        {`${pageDetail.marketing_innovation_item_6_description}`}
                      </p>
                      <div className="sacc4DCBottom d-flex justify-content-center align-items-center">
                        <img className="sacc4Rec13" src={rec13} alt="rec13" />
                        <img className="sacc4Arrow" src={arrow} alt="arrow" />
                        <span className="sacc4Button">{`${pageDetail.marketing_innovation_item_6_btn_text}`}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-aos="flip-right"
                  data-aos-duration="3000" data-aos-delay="2000" className="">
                  <div className="sacc4DiamondCard sacc4D4 d-flex justify-content-center align-items-center">

                    <div className="sacc4DCContent">
                      <p className="sacc4Heading2">{`${pageDetail.marketing_innovation_item_7_title}`}</p>
                      <p className="sacc4Para2">
                        {`${pageDetail.marketing_innovation_item_7_description}`}
                      </p>
                      <div className="sacc4DCBottom d-flex justify-content-center align-items-center">
                        <img className="sacc4Rec13" src={rec13} alt="rec13" />
                        <img className="sacc4Arrow" src={arrow} alt="arrow" />
                        <span className="sacc4Button">{`${pageDetail.marketing_innovation_item_1_btn_text}`}</span>
                      </div>
                    </div>
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
