import React, { useEffect, useState } from "react";
import { BASE_URL, API_IMG_URL } from '../../../config';
import Aos from "aos";
import "aos/dist/aos.css";
import "./Services.css";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function Services(pageDetail) {
  const [learn, setLearn] = useState(1);
  const navigate = useNavigate();

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

  const learnMoreHandler = () => {
    switch (learn) {
      case 1: navigate("/goto-market-strategy"); break;
      case 2: navigate("/digital-media-marketing"); break;
      case 3: navigate("/strategic-consultancy"); break;
      case 4: navigate("/corporate-strategy"); break;
      case 5: navigate("/sustainable-growth"); break;
      case 6: navigate("/brand-positioning"); break;
      case 7: navigate("/cxo-strategy"); break;
      default: break;
    }
  }

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
                </div>
              </div>

              <div className="services-main-content">

                <div className="service-main-content" id="service_1">
                  <div className="service-main">
                    <div className="service-left aos-init" data-aos="fade-right" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-offset="0">
                      <img className="services-dots" src={BASE_URL + '/img/HomePage/services/services-dots.png'} alt="services-dots" />
                      <img className="service-img" src={`${API_IMG_URL}pages/${pageDetail.service_1_image}`} alt={`${pageDetail.service_1_tab_title}`} />
                      <img className="services-rectangle-1" src={BASE_URL + '/img/HomePage/services/services-rectangle-1.png'} alt="services-rectangle-1" />
                    </div>

                    <div className="service-right aos-init" data-aos="fade-left" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-offset="0">
                      <img className="services-vector" src={BASE_URL + '/img/HomePage/services/services-vector.png'} alt="services-vector" />
                      <img className="services-line" src={BASE_URL + '/img/HomePage/services/services-line.png'} alt="services-line" />
                      <img className="services-rectangle-2" src={BASE_URL + '/img/HomePage/services/services-rectangle-2.png'} alt="services-rectangle-2" />
                      <img className="services-rectangle-3" src={BASE_URL + '/img/HomePage/services/services-rectangle-3.png'} alt="services-rectangle-3" />
                      <img className="corporality-global-icon" src={BASE_URL + '/img/HomePage/services/corporality-global-icon-yellow.png'} alt="corporality-global-icon-yellow" />

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
                      <img className="services-dots" src={BASE_URL + '/img/HomePage/services/services-dots.png'} alt="services-dots" />
                      <img className="service-img" src={`${API_IMG_URL}pages/${pageDetail.service_2_image}`} alt={`${pageDetail.service_2_tab_title}`} />
                      <img className="services-rectangle-1" src={BASE_URL + '/img/HomePage/services/services-rectangle-1.png'} alt="services-rectangle-1" />
                    </div>

                    <div className="service-right">
                      <img className="services-vector" src={BASE_URL + '/img/HomePage/services/services-vector.png'} alt="services-vector" />
                      <img className="services-line" src={BASE_URL + '/img/HomePage/services/services-line.png'} alt="services-line" />
                      <img className="services-rectangle-2" src={BASE_URL + '/img/HomePage/services/services-rectangle-2.png'} alt="services-rectangle-2" />
                      <img className="services-rectangle-3" src={BASE_URL + '/img/HomePage/services/services-rectangle-3.png'} alt="services-rectangle-3" />
                      <img className="corporality-global-icon" src={BASE_URL + '/img/HomePage/services/corporality-global-icon-yellow.png'} alt="corporality-global-icon-yellow" />

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
                      <img className="services-dots" src={BASE_URL + '/img/HomePage/services/services-dots.png'} alt="services-dots" />
                      <img className="service-img" src={`${API_IMG_URL}pages/${pageDetail.service_3_image}`} alt={`${pageDetail.service_3_tab_title}`} />
                      <img className="services-rectangle-1" src={BASE_URL + '/img/HomePage/services/services-rectangle-1.png'} alt="services-rectangle-1" />
                    </div>

                    <div className="service-right">
                      <img className="services-vector" src={BASE_URL + '/img/HomePage/services/services-vector.png'} alt="services-vector" />
                      <img className="services-line" src={BASE_URL + '/img/HomePage/services/services-line.png'} alt="services-line" />
                      <img className="services-rectangle-2" src={BASE_URL + '/img/HomePage/services/services-rectangle-2.png'} alt="services-rectangle-2" />
                      <img className="services-rectangle-3" src={BASE_URL + '/img/HomePage/services/services-rectangle-3.png'} alt="services-rectangle-3" />
                      <img className="corporality-global-icon" src={BASE_URL + '/img/HomePage/services/corporality-global-icon-yellow.png'} alt="corporality-global-icon-yellow" />

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
                      <img className="services-dots" src={BASE_URL + '/img/HomePage/services/services-dots.png'} alt="services-dots" />
                      <img className="service-img" src={`${API_IMG_URL}pages/${pageDetail.service_4_image}`} alt={`${pageDetail.service_4_tab_title}`} />
                      <img className="services-rectangle-1" src={BASE_URL + '/img/HomePage/services/services-rectangle-1.png'} alt="services-rectangle-1" />
                    </div>

                    <div className="service-right">
                      <img className="services-vector" src={BASE_URL + '/img/HomePage/services/services-vector.png'} alt="services-vector" />
                      <img className="services-line" src={BASE_URL + '/img/HomePage/services/services-line.png'} alt="services-line" />
                      <img className="services-rectangle-2" src={BASE_URL + '/img/HomePage/services/services-rectangle-2.png'} alt="services-rectangle-2" />
                      <img className="services-rectangle-3" src={BASE_URL + '/img/HomePage/services/services-rectangle-3.png'} alt="services-rectangle-3" />
                      <img className="corporality-global-icon" src={BASE_URL + '/img/HomePage/services/corporality-global-icon-yellow.png'} alt="corporality-global-icon-yellow" />

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
                      <img className="services-dots" src={BASE_URL + '/img/HomePage/services/services-dots.png'} alt="services-dots" />
                      <img className="service-img" src={`${API_IMG_URL}pages/${pageDetail.service_5_image}`} alt={`${pageDetail.service_5_tab_title}`} />
                      <img className="services-rectangle-1" src={BASE_URL + '/img/HomePage/services/services-rectangle-1.png'} alt="services-rectangle-1" />
                    </div>

                    <div className="service-right">
                      <img className="services-vector" src={BASE_URL + '/img/HomePage/services/services-vector.png'} alt="services-vector" />
                      <img className="services-line" src={BASE_URL + '/img/HomePage/services/services-line.png'} alt="services-line" />
                      <img className="services-rectangle-2" src={BASE_URL + '/img/HomePage/services/services-rectangle-2.png'} alt="services-rectangle-2" />
                      <img className="services-rectangle-3" src={BASE_URL + '/img/HomePage/services/services-rectangle-3.png'} alt="services-rectangle-3" />
                      <img className="corporality-global-icon" src={BASE_URL + '/img/HomePage/services/corporality-global-icon-yellow.png'} alt="corporality-global-icon-yellow" />

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
                      <img className="services-dots" src={BASE_URL + '/img/HomePage/services/services-dots.png'} alt="services-dots" />
                      <img className="service-img" src={`${API_IMG_URL}pages/${pageDetail.service_6_image}`} alt={`${pageDetail.service_6_tab_title}`} />
                      <img className="services-rectangle-1" src={BASE_URL + '/img/HomePage/services/services-rectangle-1.png'} alt="services-rectangle-1" />
                    </div>

                    <div className="service-right">
                      <img className="services-vector" src={BASE_URL + '/img/HomePage/services/services-vector.png'} alt="services-vector" />
                      <img className="services-line" src={BASE_URL + '/img/HomePage/services/services-line.png'} alt="services-line" />
                      <img className="services-rectangle-2" src={BASE_URL + '/img/HomePage/services/services-rectangle-2.png'} alt="services-rectangle-2" />
                      <img className="services-rectangle-3" src={BASE_URL + '/img/HomePage/services/services-rectangle-3.png'} alt="services-rectangle-3" />
                      <img className="corporality-global-icon" src={BASE_URL + '/img/HomePage/services/corporality-global-icon-yellow.png'} alt="corporality-global-icon-yellow" />

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
                      <img className="services-dots" src={BASE_URL + '/img/HomePage/services/services-dots.png'} alt="services-dots" />
                      <img className="service-img" src={`${API_IMG_URL}pages/${pageDetail.service_7_image}`} alt={`${pageDetail.service_7_tab_title}`} />
                      <img className="services-rectangle-1" src={BASE_URL + '/img/HomePage/services/services-rectangle-1.png'} alt="services-rectangle-1" />
                    </div>

                    <div className="service-right">
                      <img className="services-vector" src={BASE_URL + '/img/HomePage/services/services-vector.png'} alt="services-vector" />
                      <img className="services-line" src={BASE_URL + '/img/HomePage/services/services-line.png'} alt="services-line" />
                      <img className="services-rectangle-2" src={BASE_URL + '/img/HomePage/services/services-rectangle-2.png'} alt="services-rectangle-2" />
                      <img className="services-rectangle-3" src={BASE_URL + '/img/HomePage/services/services-rectangle-3.png'} alt="services-rectangle-3" />
                      <img className="corporality-global-icon" src={BASE_URL + '/img/HomePage/services/corporality-global-icon-yellow.png'} alt="corporality-global-icon-yellow" />

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

              </div>
            </div>
          </div>
          : null
      }
    </div>
  );
}

export default Services;
