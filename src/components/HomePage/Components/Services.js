import React, { useEffect, useState } from "react";
import { BASE_URL, API_IMG_URL } from '../../../config';
import Aos from "aos";
import "./Services.css";
import { Link } from "react-router-dom";

function Services(pageDetail) {
  const [learn, setLearn] = useState(1);

  const showOneButton = (ele) => {
    const buttons = document.querySelectorAll(".button_main");
    ele.classList.add("button_active");
    for (var i of buttons) {
      if (i !== ele) {
        i.classList.remove("button_active");
      }
    }
  };

  const showOneDiv = (index) => {
    setLearn(index);

    document.querySelector(
      `.service-main-content:nth-child(${index})`
    ).style.display = "block";

    const divs = document.querySelectorAll(
      `.service-main-content:not(:nth-child(${index}))`
    );
    for (let i of divs) {
      i.style.display = "none";
    }
  };

  const buttonHandler = ({ ele, index }) => {
    showOneButton(ele);
    showOneDiv(index);
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="services_container_parent">
      {
        pageDetail ?
          <div className="container-fluid px-0">
            <div className="main_services_container">
              <div className="services_heading" data-aos="fade-down">Services</div>
              <div className="button_container container-lg" data-aos="fade-up" data-aos-duration="2100">
                <div className="button_list_main">
                  <div className="button_list">
                    <div
                      className="button_main button_active"
                      id="button_main_1"
                      onClick={(e) => buttonHandler({ ele: e.target, index: 1 })}
                    >
                      {`${pageDetail.service_1_tab_title}`}
                    </div>
                    <div
                      className="button_main"
                      id="button_main_2"
                      onClick={(e) => buttonHandler({ ele: e.target, index: 2 })}
                    >
                      {`${pageDetail.service_2_tab_title}`}
                    </div>
                    <div
                      className="button_main"
                      id="button_main_3"
                      onClick={(e) => buttonHandler({ ele: e.target, index: 3 })}
                    >
                      {`${pageDetail.service_3_tab_title}`}
                    </div>
                    <div
                      className="button_main"
                      id="button_main_4"
                      onClick={(e) => buttonHandler({ ele: e.target, index: 4 })}
                    >
                      {`${pageDetail.service_4_tab_title}`}
                    </div>
                    <div
                      className="button_main"
                      id="button_main_5"
                      onClick={(e) => buttonHandler({ ele: e.target, index: 5 })}
                    >
                      {`${pageDetail.service_5_tab_title}`}
                    </div>
                    <div
                      className="button_main"
                      id="button_main_6"
                      onClick={(e) => buttonHandler({ ele: e.target, index: 6 })}
                    >
                      {`${pageDetail.service_6_tab_title}`}
                    </div>
                    <div
                      className="button_main"
                      id="button_main_7"
                      onClick={(e) => buttonHandler({ ele: e.target, index: 7 })}
                    >
                      {`${pageDetail.service_7_tab_title}`}
                    </div>
                    <div
                      className="button_main"
                      id="button_main_7"
                      onClick={(e) => buttonHandler({ ele: e.target, index: 8 })}
                    >
                      {`${pageDetail.service_8_tab_title}`}
                    </div>
                  </div>
                </div>
              </div>

              <div className="services-main-content">

                <div className="service-main-content" id="service_1">
                  <div className="service-main">
                    <div className="service-left aos-init" data-aos="fade-right" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-offset="0">
                      <span className="services-dots"></span>
                      {pageDetail.service_1_image && <img className="service-img" src={`${API_IMG_URL}pages/${pageDetail.service_1_image}`} alt={`${pageDetail.service_1_tab_title}`} />}
                      <span className="services-rectangle-1"></span>
                    </div>

                    <div className="service-right aos-init" data-aos="fade-left" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-offset="0">
                      <span className="services-vector"></span>
                      <span className="services-line"></span>
                      <span className="services-rectangle-2"></span>
                      <span className="services-rectangle-3"></span>
                      <span className="corporality-global-icon"></span>

                      <div className="service-content-main">
                        <div className="service-heading">{`${pageDetail.service_1_title}`}</div>
                        <div className="service-content" dangerouslySetInnerHTML={{ __html: pageDetail.service_1_description }}></div>
                        <div className="service-btn">
                          <Link to={`${pageDetail.service_1_btn_link}`} className="service-view-more">{`${pageDetail.service_1_btn_text}`}</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="service-main-content" id="service_2">
                  <div className="service-main">
                    <div className="service-left">
                      <span className="services-dots"></span>
                      {pageDetail.service_2_image && <img className="service-img" src={`${API_IMG_URL}pages/${pageDetail.service_2_image}`} alt={`${pageDetail.service_2_tab_title}`} />}
                      <span className="services-rectangle-1"></span>
                    </div>

                    <div className="service-right">
                      <span className="services-vector"></span>
                      <span className="services-line"></span>
                      <span className="services-rectangle-2"></span>
                      <span className="services-rectangle-3"></span>
                      <span className="corporality-global-icon"></span>

                      <div className="service-content-main">
                        <div className="service-heading">{`${pageDetail.service_2_title}`}</div>
                        <div className="service-content" dangerouslySetInnerHTML={{ __html: pageDetail.service_2_description }}></div>
                        <div className="service-btn">
                          <Link to={`${pageDetail.service_2_btn_link}`} className="service-view-more">{`${pageDetail.service_2_btn_text}`}</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="service-main-content" id="service_3">
                  <div className="service-main">
                    <div className="service-left">
                      <span className="services-dots"></span>
                      {pageDetail.service_3_image && <img className="service-img" src={`${API_IMG_URL}pages/${pageDetail.service_3_image}`} alt={`${pageDetail.service_3_tab_title}`} />}
                      <span className="services-rectangle-1"></span>
                    </div>

                    <div className="service-right">
                      <span className="services-vector"></span>
                      <span className="services-line"></span>
                      <span className="services-rectangle-2"></span>
                      <span className="services-rectangle-3"></span>
                      <span className="corporality-global-icon"></span>

                      <div className="service-content-main">
                        <div className="service-heading">{`${pageDetail.service_3_title}`}</div>
                        <div className="service-content" dangerouslySetInnerHTML={{ __html: pageDetail.service_3_description }}></div>
                        <div className="service-btn">
                          <Link to={`${pageDetail.service_3_btn_link}`} className="service-view-more">{`${pageDetail.service_3_btn_text}`}</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="service-main-content" id="service_4">
                  <div className="service-main">
                    <div className="service-left">
                      <span className="services-dots"></span>
                      {pageDetail.service_4_image && <img className="service-img" src={`${API_IMG_URL}pages/${pageDetail.service_4_image}`} alt={`${pageDetail.service_4_tab_title}`} />}
                      <span className="services-rectangle-1"></span>
                    </div>

                    <div className="service-right">
                      <span className="services-vector"></span>
                      <span className="services-line"></span>
                      <span className="services-rectangle-2"></span>
                      <span className="services-rectangle-3"></span>
                      <span className="corporality-global-icon"></span>

                      <div className="service-content-main">
                        <div className="service-heading">{`${pageDetail.service_4_title}`}</div>
                        <div className="service-content" dangerouslySetInnerHTML={{ __html: pageDetail.service_4_description }}></div>
                        <div className="service-btn">
                          <Link to={`${pageDetail.service_4_btn_link}`} className="service-view-more">{`${pageDetail.service_4_btn_text}`}</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="service-main-content" id="service_5">
                  <div className="service-main">
                    <div className="service-left">
                      <span className="services-dots"></span>
                      {pageDetail.service_5_image && <img className="service-img" src={`${API_IMG_URL}pages/${pageDetail.service_5_image}`} alt={`${pageDetail.service_5_tab_title}`} />}
                      <span className="services-rectangle-1"></span>
                    </div>

                    <div className="service-right">
                      <span className="services-vector"></span>
                      <span className="services-line"></span>
                      <span className="services-rectangle-2"></span>
                      <span className="services-rectangle-3"></span>
                      <span className="corporality-global-icon"></span>

                      <div className="service-content-main">
                        <div className="service-heading">{`${pageDetail.service_5_title}`}</div>
                        <div className="service-content" dangerouslySetInnerHTML={{ __html: pageDetail.service_5_description }}></div>
                        <div className="service-btn">
                          <Link to={`${pageDetail.service_5_btn_link}`} className="service-view-more">{`${pageDetail.service_5_btn_text}`}</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="service-main-content" id="service_6">
                  <div className="service-main">
                    <div className="service-left">
                      <span className="services-dots"></span>
                      {pageDetail.service_6_image && <img className="service-img" src={`${API_IMG_URL}pages/${pageDetail.service_6_image}`} alt={`${pageDetail.service_6_tab_title}`} />}
                      <span className="services-rectangle-1"></span>
                    </div>

                    <div className="service-right">
                      <span className="services-vector"></span>
                      <span className="services-line"></span>
                      <span className="services-rectangle-2"></span>
                      <span className="services-rectangle-3"></span>
                      <span className="corporality-global-icon"></span>

                      <div className="service-content-main">
                        <div className="service-heading">{`${pageDetail.service_6_title}`}</div>
                        <div className="service-content" dangerouslySetInnerHTML={{ __html: pageDetail.service_6_description }}></div>
                        <div className="service-btn">
                          <Link to={`${pageDetail.service_6_btn_link}`} className="service-view-more">{`${pageDetail.service_6_btn_text}`}</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="service-main-content" id="service_7">
                  <div className="service-main">
                    <div className="service-left">
                      <span className="services-dots"></span>
                      {pageDetail.service_7_image && <img className="service-img" src={`${API_IMG_URL}pages/${pageDetail.service_7_image}`} alt={`${pageDetail.service_7_tab_title}`} />}
                      <span className="services-rectangle-1"></span>
                    </div>

                    <div className="service-right">
                      <span className="services-vector"></span>
                      <span className="services-line"></span>
                      <span className="services-rectangle-2"></span>
                      <span className="services-rectangle-3"></span>
                      <span className="corporality-global-icon"></span>

                      <div className="service-content-main">
                        <div className="service-heading">{`${pageDetail.service_7_title}`}</div>
                        <div className="service-content" dangerouslySetInnerHTML={{ __html: pageDetail.service_7_description }}></div>
                        <div className="service-btn">
                          <Link to={`${pageDetail.service_7_btn_link}`} className="service-view-more">{`${pageDetail.service_7_btn_text}`}</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="service-main-content" id="service_8">
                  <div className="service-main">
                    <div className="service-left">
                      <span className="services-dots"></span>
                      {pageDetail.service_8_image && <img className="service-img" src={`${API_IMG_URL}pages/${pageDetail.service_8_image}`} alt={`${pageDetail.service_8_tab_title}`} />}
                      <span className="services-rectangle-1"></span>
                    </div>

                    <div className="service-right">
                      <span className="services-vector"></span>
                      <span className="services-line"></span>
                      <span className="services-rectangle-2"></span>
                      <span className="services-rectangle-3"></span>
                      <span className="corporality-global-icon"></span>

                      <div className="service-content-main">
                        <div className="service-heading">{`${pageDetail.service_8_title}`}</div>
                        <div className="service-content" dangerouslySetInnerHTML={{ __html: pageDetail.service_8_description }}></div>
                        <div className="service-btn">
                          <Link to={`${pageDetail.service_8_btn_link}`} className="service-view-more">{`${pageDetail.service_8_btn_text}`}</Link>
                        </div>
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

export default Services;
