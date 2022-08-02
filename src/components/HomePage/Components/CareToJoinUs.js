import React, { useEffect } from "react";
import { BASE_URL, API_IMG_URL } from '../../../config';
import Aos from "aos";
import "aos/dist/aos.css";
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
            <div className="left-wall">
              <img src={BASE_URL + '/img/HomePage/care-to-join-us/wall.png'} alt="wall" />
            </div>
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
                    <div className="bottom-rectangle">
                      <img src={BASE_URL + '/img/HomePage/care-to-join-us/bottom.png'} alt="bottom" />
                    </div>
                    <div className="center-rectangle">
                      <img src={BASE_URL + '/img/HomePage/care-to-join-us/middle.png'} alt="middle" />
                    </div>
                    <div className="middle-rectangle">
                      <img src={BASE_URL + '/img/HomePage/care-to-join-us/rectangle.png'} alt="rectangle" />
                    </div>
                    <div className="top-rectangle">
                      <img src={BASE_URL + '/img/HomePage/care-to-join-us/top.png'} alt="top" />
                    </div>

                    <div className="caretojoinus-image aos-init aos-animate" data-aos="fade-left" data-aos-duration="2000" data-aos-easing="ease-in-out">
                      <div className="right-image-container">
                        {pageDetail.join_us_image && <img src={`${API_IMG_URL}pages/${pageDetail.join_us_image}`} alt={`${pageDetail.join_us_title}`} className="caretojoinus-rightimage" />}
                      </div>
                      <div className="back-image">
                        <img src={BASE_URL + '/img/HomePage/care-to-join-us/image_back.png'} alt="image_back" />
                      </div>
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
