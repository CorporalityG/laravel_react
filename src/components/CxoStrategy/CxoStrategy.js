import React, { useState, useEffect } from "react";
import Aos from "aos";
import './CxoStrategy.css'
import { BASE_URL } from '../../config'
import { ServicesAskQuote } from '../ServicesAskQuote/ServicesAskQuote';
import ServicesClients from "../ServicesClients/ServicesClients";
import ServicesInsights from "../ServicesInsights/ServicesInsights";
import { LeverageModelItem } from "./Components/LeverageModelItem";
import Accordion from 'react-bootstrap/Accordion'

function CxoStrategy() {

  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  });

  const [showFaq, setShowFaq] = useState(false);

  const handelToggleFaq = () => {
    setShowFaq(!showFaq)
  }

  return (
    <>
      <div className="cxo-banner-section">
        <div className='cxo-banner-top'></div>
        <div className='cxo-banner-middle' data-aos="zoom-in-up" data-aos-duration="1500"></div>
        <div className='cxo-banner-bottom' data-aos="zoom-in-up" data-aos-duration="2000"></div>

        <img src={`${BASE_URL}/img/CxoStrategy/banner-path.png`} alt="Vector" className="banner-path" data-aos="zoom-in-up" />
        <div className="banner-setting-big">
          <img src={`${BASE_URL}/img/CxoStrategy/banner-setting-big.png`} alt="Setting Big" data-aos="zoom-in-up" />
        </div>
        <div className="banner-setting-small">
          <img src={`${BASE_URL}/img/CxoStrategy/banner-setting-small.png`} alt="Setting Small" data-aos="zoom-in-up" />
        </div>

        <div className="container-fluid px-0">
          <div className="row cxo-banner-row">
            <div className="col-lg-5 offset-lg-1">
              <div className="cxo-banner-content">
                <div data-aos="fade-up">
                  <h1>Delivering a Better success</h1>
                </div>
                <div className="cxo-banner-desc" data-aos="fade-up" data-aos-delay="300">
                  <p>United by a common purpose to deliver your vision with your team .Hire our strategist and consultants in bundle to handle your entire Marketing Department and customer service to accelerate the success you have been dreaming of . Build customer loyalty through differentiated brand strategies that activate a positive relationship between the business and its customers. Leadership is highly essential in creating seamless and connected customer journeys that are highly important.</p>
                </div>
                <div className="cxo-banner-btn" data-aos="fade-up" data-aos-delay="500">
                  <a href="https://zohoadmin-corporality.zohobookings.com.au/#/customer/discoverycall" target="_blank">Schedule a time</a>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="cxo-banner-video">
                <video data-aos="fade-left" data-aos-duration="1600" autoPlay={true} muted loop>
                  <source src={`${BASE_URL}/img/CxoStrategy/banner-video.mp4`} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>

        <div className="cxo-social-section">
          <div className="cxo-social-row" data-aos="fade-right" data-aos-delay="400">
            <a href='https://www.facebook.com/CorporalityG' target="_blank"><i className="fa fa-facebook-f"></i></a>
            <a href='https://twitter.com/corporalityg' target="_blank"><i className="fa fa-twitter"></i></a>
            <a href='https://www.instagram.com/corporalityg/' target="_blank"><i className="fa fa-instagram"></i></a>
            <a href='https://www.linkedin.com/company/corporality/' target="_blank"><i className="fa fa-linkedin"></i></a>
            <a href='https://in.pinterest.com/CorporalityG/' target="_blank"><i className="fa fa-pinterest"></i></a>
            <a href='https://www.youtube.com/channel/UC4EISt8kHI4zzpmbIBMIBbg' target="_blank"><i className="fa fa-youtube-play"></i></a>
          </div>
        </div>
      </div>

      <div className="cxo-lifecycle-section">
        <div className="container-lg">
          <div className="row cxo-lifecycle-row">
            <div className="col-lg-6">
              <div className="cxo-lc-content">
                <div data-aos="fade-up">
                  <h2>Helping your Customer lifecycle, ensuring positive CX</h2>
                </div>
                <div data-aos="fade-up" data-aos-delay="300">
                  <p>Our chief experience officer (CXO) ensures your brands and companies practicing a customer-centric strategy.  Hire us to increase customer and employee grasp, designing and delivering positive CX, prioritizing your client's viewpoint in delivery processes and tracking key performance indicators.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="cxo-lc-boxes">
                <img src={`${BASE_URL}/img/CxoStrategy/lifecycle-favicon.png`} alt="lifecycle-favicon" className="lifecycle-favicon" data-aos="zoom-in-down" />

                <div className="row">
                  <div className="col-md-6 cxo-lc-box-col">
                    <div className="cxo-lc-box">
                      <img src={`${BASE_URL}/img/CxoStrategy/lifecycle-bg.png`} alt="lifecycle-bg" data-aos="zoom-in-up" />
                      <div className="lc-box-content">
                        <div className="lc-box-title" data-aos="fade-up">The Common Denominator</div>
                        <div className="lc-box-icon" data-aos="fade-up">
                          <img src={`${BASE_URL}/img/CxoStrategy/The-Common-Denominator.png`} alt="The Common Denominator" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 cxo-lc-box-col">
                    <div className="cxo-lc-box">
                      <img src={`${BASE_URL}/img/CxoStrategy/lifecycle-bg.png`} alt="lifecycle-bg" data-aos="zoom-in-up" />
                      <div className="lc-box-content">
                        <div className="lc-box-title" data-aos="fade-up">The guardian</div>
                        <div className="lc-box-icon" data-aos="fade-up">
                          <img src={`${BASE_URL}/img/CxoStrategy/The-guardian.png`} alt="The guardian" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 cxo-lc-box-col">
                    <div className="cxo-lc-box">
                      <img src={`${BASE_URL}/img/CxoStrategy/lifecycle-bg.png`} alt="lifecycle-bg" data-aos="zoom-in-up" />
                      <div className="lc-box-content">
                        <div className="lc-box-title" data-aos="fade-up">Growth Facilitator</div>
                        <div className="lc-box-icon" data-aos="fade-up">
                          <img src={`${BASE_URL}/img/CxoStrategy/Growth-Facilitator.png`} alt="Growth Facilitator" />
                          <img src={`${BASE_URL}/img/CxoStrategy/Growth-Facilitator-chart.png`} alt="Growth Facilitator Chart" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 cxo-lc-box-col">
                    <div className="cxo-lc-box">
                      <img src={`${BASE_URL}/img/CxoStrategy/lifecycle-bg.png`} alt="lifecycle-bg" data-aos="zoom-in-up" />
                      <div className="lc-box-content">
                        <div className="lc-box-title" data-aos="fade-up">Inventor</div>
                        <div className="lc-box-icon" data-aos="fade-up">
                          <img src={`${BASE_URL}/img/CxoStrategy/Inventor.png`} alt="Inventor" />
                          <img src={`${BASE_URL}/img/CxoStrategy/Inventor-blub.png`} alt="Inventor Blub" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cxo-expect-section">
        <div className="container-lg">
          <div className="row cxo-expect-title-row">
            <div className="col-lg-12">
              <div className="cxo-expect-title">
                <div data-aos="fade-up">
                  <h2>What to expect?</h2>
                </div>
                <div data-aos="fade-up" data-aos-delay="300">
                  <p>Pushing forward businesses to nail the experience stages for their clients</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row cxo-expect-content-row">
            <div className="col-lg-6 cxo-ec-col">
              <div className="cxo-expect-banner">
                <div className='cxo-expect-bg' data-aos="zoom-in-up" data-aos-duration="1500"></div>
                <img src={`${BASE_URL}/img/CxoStrategy/expect-banner.png`} alt="What to expect?" data-aos="zoom-in-up" />
                <div className="cxo-eb-title" data-aos="fade-up">Source:Gartner (February 2020)</div>
              </div>
            </div>

            <div className="col-lg-6 cxo-ec-col">
              <div className="cxo-expect-content" data-aos="fade-up" data-aos-delay="300">
                <p>Guiding business to  hit organisational relationship goals is our job. A long-term sustainable customer plan is better than a short-term non-sustainable strategy that is expensive. Choose the best diffence against the churn as you hire a CXO that can navigate your business across complex scenarios by inculcating discipline into your customer service plan. </p>
                <p>Our on-demand leadership moves swiftly from concept to execution without hitting the learning curve, utilising strategic and operational expertise.</p>
              </div>
              <div class="cxo-expect-btn" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000">Explore More</div>
            </div>
          </div>
        </div>
      </div>

      <div className="cxo-leverage-model-section">
        <div className="container-lg">
          <div className="row cxo-lm-title-row">
            <div className="col-lg-12">
              <div className="cxo-lm-title-content">
                <div data-aos="fade-up">
                  <h2>Leverage the on-demand model</h2>
                </div>
                <div className="cxo-lm-title-desc" data-aos="fade-up" data-aos-delay="300">
                  <p>Experience significant risk mitigation, organisational transformation and turnaround management with our executive CXO leadership that drives company growth through customer experience in a market that runs at warp-speed.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row cxo-lm-boxes-row">
            <LeverageModelItem
              icon={`${BASE_URL}/img/CxoStrategy/Dedicated-Leadership.png`}
              title={`Dedicated Leadership`}
            />

            <LeverageModelItem
              icon={`${BASE_URL}/img/CxoStrategy/Situational-Guidance.png`}
              title={`Situational Guidance`}
            />

            <LeverageModelItem
              icon={`${BASE_URL}/img/CxoStrategy/Fill-temporary-gaps.png`}
              title={`Fill temporary gaps`}
            />

            <LeverageModelItem
              icon={`${BASE_URL}/img/CxoStrategy/Provide-decisive-direction.png`}
              title={`Provide decisive direction`}
            />
          </div>
        </div>
      </div>

      <div className="cxo-faqs-section">
        <div className="container-lg">
          <div className="row cxo-faqs-title-row" data-aos="zoom-in">
            <div className="col-lg-12">
              <div className="cxo-ft-content">
                <div className="cxo-ft-subtitle" data-aos="zoom-in-up" data-aos-delay="100">Have a Questions</div>
                <h2 data-aos="zoom-in-down" data-aos-delay="200">Check our Frequently asked Questions</h2>
                <div className="cxo-ft-btn" onClick={handelToggleFaq} data-aos="zoom-in-right" data-aos-delay="300">Show <i className={`fa ${showFaq ? "fa-angle-up" : "fa-angle-down"}`}></i></div>
              </div>
            </div>
          </div>

          <div className={`row cxo-faqs-list-row ${showFaq ? "" : "hide"}`}>
            <div className="col-lg-12">
              <div className="cxo-faqs-list">
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>What is Lorem Ipsum?</Accordion.Header>
                    <Accordion.Body>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Why do we use it?</Accordion.Header>
                    <Accordion.Body>
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Where does it come from?</Accordion.Header>
                    <Accordion.Body>
                      <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ServicesClients />

      <ServicesInsights />

      <ServicesAskQuote />
    </>
  );
}

export default CxoStrategy;
