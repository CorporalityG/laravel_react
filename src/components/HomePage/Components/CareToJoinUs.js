import React, { useEffect } from "react";
import { API_IMG_URL } from '../../../config';
import Aos from "aos";
import "./CareToJoinUs.css";
import { useNavigate } from "react-router";

function CareToJoinUs(pageDetail) {
  useEffect(() => {
    Aos.init();
  }, []);

  const navigate = useNavigate();
  const topHandle = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <>
      {
        pageDetail ?
          <div className="caretojoinus_parent">
            <div className="left-wall"></div>
            <div className="container-lg careto-joinus-container">
              <div className="row">
                <div className="col-md-12">
                  <div className="caretojoinus-main">
                    <div className="caretojoinus-text aos-init aos-animate" data-aos="fade-right" data-aos-duration="2000" data-aos-easing="ease-in-out">
                      <div className="caretojoinus-heading">{`${pageDetail.join_us_title}`}</div>
                      <div className="caretojoinus-description">
                        <p>{`${pageDetail.join_us_description}`}</p>
                      </div>
                      <div className="caretojoinus-button">
                        <button onClick={() => { navigate(pageDetail.join_us_btn_link); topHandle(); }}>{`${pageDetail.join_us_btn_text}`}</button>
                      </div>
                    </div>
                    <div className="bottom-rectangle"></div>
                    <div className="center-rectangle"></div>
                    <div className="middle-rectangle">
                    </div>
                    <div className="top-rectangle"></div>

                    <div className="caretojoinus-image aos-init aos-animate" data-aos="fade-left" data-aos-duration="2000" data-aos-easing="ease-in-out">
                      <div className="right-image-container">
                        {pageDetail.join_us_image && <div className="caretojoinus-rightimage" style={{ backgroundImage: "url(" + API_IMG_URL + "/pages/"+ pageDetail.join_us_image +")" }}></div>}
                      </div>
                      <div className="back-image"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          : null
      }
    </>
  );
}

export default CareToJoinUs;
