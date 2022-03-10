import React, { createRef, useEffect, useRef, useState } from "react";
import { API_BASE_URL, BASE_URL } from '../../../config';
import Aos from "aos";
import "aos/dist/aos.css";
import "./Services.css";
import ellipse_1 from "./images/ellipse_1.png";
import vector_1 from "./images/vector_1.png";
import { useNavigate } from "react-router";

function Services() {
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
    switch(learn){
      case 1: navigate("/go-to-marketing"); break;
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
  },[]);

  return (
    <div className="services_container_parent">
      <div className="container-fluid px-0">
        <div className="main_services_container">
          <div className="services_heading" data-aos="fade-down">Services</div>
          <div className="button_container container" data-aos="fade-up" data-aos-duration="2100">
            <div className="button_list">
              <div
                className="button_main button_active"
                id="button_main_1"
                onClick={(e) => buttonHandler({ ele: e.target, index: 1 })}
              >
                Go-to-Marketing
              </div>
              <div
                className="button_main"
                id="button_main_2"
                onClick={(e) => buttonHandler({ ele: e.target, index: 2 })}
              >
                Digital Media Markeing
              </div>
              <div
                className="button_main"
                id="button_main_3"
                onClick={(e) => buttonHandler({ ele: e.target, index: 3 })}
              >
                Strategic Consulting
              </div>
              <div
                className="button_main"
                id="button_main_4"
                onClick={(e) => buttonHandler({ ele: e.target, index: 4 })}
              >
                Corporate Level Strategy
              </div>
              <div
                className="button_main"
                id="button_main_5"
                onClick={(e) => buttonHandler({ ele: e.target, index: 5 })}
              >
                Product Strategy
              </div>
              <div
                className="button_main"
                id="button_main_6"
                onClick={(e) => buttonHandler({ ele: e.target, index: 6 })}
              >
                Brand Positioning
              </div>
              <div
                className="button_main"
                id="button_main_7"
                onClick={(e) => buttonHandler({ ele: e.target, index: 7 })}
              >
                Outsourced CXO
              </div>
            </div>
          </div>

          <div className="services-main-content">
            
              <div className="service-main-content" id="service_1">
                <div className="service-main">
                  <div className="service-left aos-init" data-aos="fade-right" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-offset="0">
                    <img className="services-dots" src={BASE_URL + '/img/HomePage/services/services-dots.png'} alt="services-dots" />
                    <img className="service-img" src={BASE_URL + '/img/HomePage/services/go-to-marketing.png'} alt="go-to-marketing" />
                    <img className="services-rectangle-1" src={BASE_URL + '/img/HomePage/services/services-rectangle-1.png'} alt="services-rectangle-1" />
                  </div>

                  <div className="service-right aos-init" data-aos="fade-left" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-offset="0">
                    <img className="services-vector" src={BASE_URL + '/img/HomePage/services/services-vector.png'} alt="services-vector" />
                    <img className="services-line" src={BASE_URL + '/img/HomePage/services/services-line.png'} alt="services-line" />
                    <img className="services-rectangle-2" src={BASE_URL + '/img/HomePage/services/services-rectangle-2.png'} alt="services-rectangle-2" />
                    <img className="services-rectangle-3" src={BASE_URL + '/img/HomePage/services/services-rectangle-3.png'} alt="services-rectangle-3" />
                    <img className="corporality-global-icon" src={BASE_URL + '/img/HomePage/services/corporality-global-icon-yellow.png'} alt="corporality-global-icon-yellow" />

                    <div className="service-content-main">
                      <div className="service-heading">For game changing business growth with product ‘push’ strategies:</div>
                      <div className="service-content">
                        <ul>
                          <li>Clear plans and strategies</li>
                          <li>Minimising time to market for all products</li>
                          <li>Ability to react to alternating customer moods</li>
                          <li>Reduced costs with reduced failed service launches</li>
                        </ul>
                      </div>
                      <div className="service-btn">
                        <div className="service-view-more" onClick={learnMoreHandler}>View More</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="service-main-content" id="service_2">
                <div className="service-main">
                  <div className="service-left">
                    <img className="services-dots" src={BASE_URL + '/img/HomePage/services/services-dots.png'} alt="services-dots" />
                    <img className="service-img" src={BASE_URL + '/img/HomePage/services/digital-media-markeing.png'} alt="digital-media-markeing" />
                    <img className="services-rectangle-1" src={BASE_URL + '/img/HomePage/services/services-rectangle-1.png'} alt="services-rectangle-1" />
                  </div>

                  <div className="service-right">
                    <img className="services-vector" src={BASE_URL + '/img/HomePage/services/services-vector.png'} alt="services-vector" />
                    <img className="services-line" src={BASE_URL + '/img/HomePage/services/services-line.png'} alt="services-line" />
                    <img className="services-rectangle-2" src={BASE_URL + '/img/HomePage/services/services-rectangle-2.png'} alt="services-rectangle-2" />
                    <img className="services-rectangle-3" src={BASE_URL + '/img/HomePage/services/services-rectangle-3.png'} alt="services-rectangle-3" />
                    <img className="corporality-global-icon" src={BASE_URL + '/img/HomePage/services/corporality-global-icon-yellow.png'} alt="corporality-global-icon-yellow" />

                    <div className="service-content-main">
                      <div className="service-heading">Turning content into intelligent information</div>
                      <div className="service-content">
                        <ul>
                          <li>Targeted campaigns producing clickable results</li>
                          <li>Sentiment analysis with comprehensive social listening</li>
                          <li>Plans that align to your distinctive business requirements</li>
                          <li>Thrive on customer relationships and results</li>
                        </ul>
                      </div>
                      <div className="service-btn">
                        <div className="service-view-more" onClick={learnMoreHandler}>View More</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="service-main-content" id="service_3">
                <div className="service-main">
                  <div className="service-left">
                    <img className="services-dots" src={BASE_URL + '/img/HomePage/services/services-dots.png'} alt="services-dots" />
                    <img className="service-img" src={BASE_URL + '/img/HomePage/services/strategic-consulting.png'} alt="strategic-consulting" />
                    <img className="services-rectangle-1" src={BASE_URL + '/img/HomePage/services/services-rectangle-1.png'} alt="services-rectangle-1" />
                  </div>

                  <div className="service-right">
                    <img className="services-vector" src={BASE_URL + '/img/HomePage/services/services-vector.png'} alt="services-vector" />
                    <img className="services-line" src={BASE_URL + '/img/HomePage/services/services-line.png'} alt="services-line" />
                    <img className="services-rectangle-2" src={BASE_URL + '/img/HomePage/services/services-rectangle-2.png'} alt="services-rectangle-2" />
                    <img className="services-rectangle-3" src={BASE_URL + '/img/HomePage/services/services-rectangle-3.png'} alt="services-rectangle-3" />
                    <img className="corporality-global-icon" src={BASE_URL + '/img/HomePage/services/corporality-global-icon-yellow.png'} alt="corporality-global-icon-yellow" />

                    <div className="service-content-main">
                      <div className="service-heading">Unmatched results with a unique approach to business growth</div>
                      <div className="service-content">
                        <ul>
                          <li>Transformation consultants brimming with ideas</li>
                          <li>Helping businesses become invincible in their areas</li>
                          <li>A solid team of thinkers that can help you follow through with your decisions</li>
                          <li>Consultants who endeavour to achieve business transformation</li>
                        </ul>
                      </div>
                      <div className="service-btn">
                        <div className="service-view-more" onClick={learnMoreHandler}>View More</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="service-main-content" id="service_4">
                <div className="service-main">
                  <div className="service-left">
                    <img className="services-dots" src={BASE_URL + '/img/HomePage/services/services-dots.png'} alt="services-dots" />
                    <img className="service-img" src={BASE_URL + '/img/HomePage/services/corporate-level-strategy.png'} alt="corporate-level-strategy" />
                    <img className="services-rectangle-1" src={BASE_URL + '/img/HomePage/services/services-rectangle-1.png'} alt="services-rectangle-1" />
                  </div>

                  <div className="service-right">
                    <img className="services-vector" src={BASE_URL + '/img/HomePage/services/services-vector.png'} alt="services-vector" />
                    <img className="services-line" src={BASE_URL + '/img/HomePage/services/services-line.png'} alt="services-line" />
                    <img className="services-rectangle-2" src={BASE_URL + '/img/HomePage/services/services-rectangle-2.png'} alt="services-rectangle-2" />
                    <img className="services-rectangle-3" src={BASE_URL + '/img/HomePage/services/services-rectangle-3.png'} alt="services-rectangle-3" />
                    <img className="corporality-global-icon" src={BASE_URL + '/img/HomePage/services/corporality-global-icon-yellow.png'} alt="corporality-global-icon-yellow" />

                    <div className="service-content-main">
                      <div className="service-heading">The intended maturity model and methodology</div>
                      <div className="service-content">
                        <ul>
                          <li>Examines the readiness of the business to expedite revenue growth</li>
                          <li>Initiating a tracking process that audits and diagnoses readiness</li>
                          <li>Remapping visions to accomplish marketing goals and objectives</li>
                          <li>Planning, segmentation and asset building</li>
                        </ul>
                      </div>
                      <div className="service-btn">
                        <div className="service-view-more" onClick={learnMoreHandler}>View More</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="service-main-content" id="service_5">
                <div className="service-main">
                  <div className="service-left">
                    <img className="services-dots" src={BASE_URL + '/img/HomePage/services/services-dots.png'} alt="services-dots" />
                    <img className="service-img" src={BASE_URL + '/img/HomePage/services/product-strategy.png'} alt="product-strategy" />
                    <img className="services-rectangle-1" src={BASE_URL + '/img/HomePage/services/services-rectangle-1.png'} alt="services-rectangle-1" />
                  </div>

                  <div className="service-right">
                    <img className="services-vector" src={BASE_URL + '/img/HomePage/services/services-vector.png'} alt="services-vector" />
                    <img className="services-line" src={BASE_URL + '/img/HomePage/services/services-line.png'} alt="services-line" />
                    <img className="services-rectangle-2" src={BASE_URL + '/img/HomePage/services/services-rectangle-2.png'} alt="services-rectangle-2" />
                    <img className="services-rectangle-3" src={BASE_URL + '/img/HomePage/services/services-rectangle-3.png'} alt="services-rectangle-3" />
                    <img className="corporality-global-icon" src={BASE_URL + '/img/HomePage/services/corporality-global-icon-yellow.png'} alt="corporality-global-icon-yellow" />

                    <div className="service-content-main">
                      <div className="service-heading">Bringing product ideas to life for sustainable growth</div>
                      <div className="service-content">
                        <ul>
                          <li>Distinguishing between marketing objectives and company value propositions</li>
                          <li>Planning an appropriate and fool proof product release strategy</li>
                          <li>Designing unique launch processes</li>
                          <li>Monitoring service feedback alongside customer service and support</li>
                        </ul>
                      </div>
                      <div className="service-btn">
                        <div className="service-view-more" onClick={learnMoreHandler}>View More</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="service-main-content" id="service_6">
                <div className="service-main">
                  <div className="service-left">
                    <img className="services-dots" src={BASE_URL + '/img/HomePage/services/services-dots.png'} alt="services-dots" />
                    <img className="service-img" src={BASE_URL + '/img/HomePage/services/brand-positioning.png'} alt="brand-positioning" />
                    <img className="services-rectangle-1" src={BASE_URL + '/img/HomePage/services/services-rectangle-1.png'} alt="services-rectangle-1" />
                  </div>

                  <div className="service-right">
                    <img className="services-vector" src={BASE_URL + '/img/HomePage/services/services-vector.png'} alt="services-vector" />
                    <img className="services-line" src={BASE_URL + '/img/HomePage/services/services-line.png'} alt="services-line" />
                    <img className="services-rectangle-2" src={BASE_URL + '/img/HomePage/services/services-rectangle-2.png'} alt="services-rectangle-2" />
                    <img className="services-rectangle-3" src={BASE_URL + '/img/HomePage/services/services-rectangle-3.png'} alt="services-rectangle-3" />
                    <img className="corporality-global-icon" src={BASE_URL + '/img/HomePage/services/corporality-global-icon-yellow.png'} alt="corporality-global-icon-yellow" />

                    <div className="service-content-main">
                      <div className="service-heading">Visualising important dimensions of your brand</div>
                      <div className="service-content">
                        <ul>
                          <li>Redefining brand development and identity to strengthen your market standing</li>
                          <li>Identifying high-growth high-profit firms that can fit into your database</li>
                          <li>Positioning your brand in the professional services marketplace</li>
                          <li>Distinct core brand positioning with a unique messaging strategy</li>
                        </ul>
                      </div>
                      <div className="service-btn">
                        <div className="service-view-more" onClick={learnMoreHandler}>View More</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="service-main-content" id="service_7">
                <div className="service-main">
                  <div className="service-left">
                    <img className="services-dots" src={BASE_URL + '/img/HomePage/services/services-dots.png'} alt="services-dots" />
                    <img className="service-img" src={BASE_URL + '/img/HomePage/services/outsourced-cxo.png'} alt="outsourced-cxo" />
                    <img className="services-rectangle-1" src={BASE_URL + '/img/HomePage/services/services-rectangle-1.png'} alt="services-rectangle-1" />
                  </div>

                  <div className="service-right">
                    <img className="services-vector" src={BASE_URL + '/img/HomePage/services/services-vector.png'} alt="services-vector" />
                    <img className="services-line" src={BASE_URL + '/img/HomePage/services/services-line.png'} alt="services-line" />
                    <img className="services-rectangle-2" src={BASE_URL + '/img/HomePage/services/services-rectangle-2.png'} alt="services-rectangle-2" />
                    <img className="services-rectangle-3" src={BASE_URL + '/img/HomePage/services/services-rectangle-3.png'} alt="services-rectangle-3" />
                    <img className="corporality-global-icon" src={BASE_URL + '/img/HomePage/services/corporality-global-icon-yellow.png'} alt="corporality-global-icon-yellow" />

                    <div className="service-content-main">
                      <div className="service-heading">Differentiated brand experiences</div>
                      <div className="service-content">
                        <ul>
                          <li>Leading the change with impactful customer experiences</li>
                          <li>Identifying appropriate control mechanisms</li>
                          <li>Sustainable relationship goals by leveraging the on-demand model</li>
                          <li>Resolving all pain points to provide the best outcomes</li>
                        </ul>
                      </div>
                      <div className="service-btn">
                        <div className="service-view-more" onClick={learnMoreHandler}>View More</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
