import React, { useState, useEffect } from "react";
import Aos from "aos";
import './CxoStrategy.css'
import { BASE_URL } from '../../config'
import { ServicesAskQuote } from '../ServicesAskQuote/ServicesAskQuote';
import ServicesClients from "../ServicesClients/ServicesClients";
import ServicesInsights from "../ServicesInsights/ServicesInsights";
import { LeverageModelItem } from "./Components/LeverageModelItem";
import Accordion from 'react-bootstrap/Accordion'
import { Helmet } from "react-helmet";

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
      <Helmet>
        <title>{`Marketing strategies for the CXO | Marketing Agency`}</title>
        <meta name="description" content={`Develop and execute marketing strategies to create and maintain competitive advantage, particularly in highly uncertain environments.`} />
        <meta
          name="keywords"
          content="cxo relationship strategy"
        />
        <link rel="canonical" href={`${BASE_URL}/brand-positioning/`} />
      </Helmet>

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

        <div className="container-fluid px-lg-0">
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
                  <h2>The fifth role of the CXO - Guide</h2>
                </div>
                <div data-aos="fade-up" data-aos-delay="300">
                  <p>All of the roles we spoke about integrate into a singular role, that is one of a guide and a mentor. A CXO captains the company ship on the experiential front and helps envision products/services and optimizers that can engage customers and make more sales. Our outsourced CXO doesn’t only engage customers but takes the company in a direction where becoming a customer brings a priceless experience along with it. These experiential revolutions brought about by this highly experienced official incorporates experience staging into various aspects of the business and enhances the value proposition greatly.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="cxo-lc-boxes">
                <img src={`${BASE_URL}/img/CxoStrategy/lifecycle-favicon.png`} alt="lifecycle-favicon" className="lifecycle-favicon" data-aos="zoom-in-down" />

                <div className="row">
                  <div className="col-sm-6 cxo-lc-box-col">
                    <div className="cxo-lc-box cxo-lc-box-1">
                      <img src={`${BASE_URL}/img/CxoStrategy/lifecycle-bg.png`} alt="lifecycle-bg" data-aos="zoom-in-up" className="lifecycle-bg" />
                      <div className="lc-box-content">
                        <div className="lc-box-title" data-aos="fade-up">The Common Denominator</div>
                        <div className="lc-box-icon" data-aos="fade-up">
                          <img src={`${BASE_URL}/img/CxoStrategy/The-Common-Denominator.png`} alt="The Common Denominator" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 cxo-lc-box-col">
                    <div className="cxo-lc-box cxo-lc-box-2">
                      <img src={`${BASE_URL}/img/CxoStrategy/lifecycle-bg.png`} alt="lifecycle-bg" data-aos="zoom-in-up" className="lifecycle-bg" />
                      <div className="lc-box-content">
                        <div className="lc-box-title" data-aos="fade-up">The guardian</div>
                        <div className="lc-box-icon" data-aos="fade-up">
                          <img src={`${BASE_URL}/img/CxoStrategy/The-guardian.png`} alt="The guardian" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 cxo-lc-box-col">
                    <div className="cxo-lc-box cxo-lc-box-3">
                      <img src={`${BASE_URL}/img/CxoStrategy/lifecycle-bg.png`} alt="lifecycle-bg" data-aos="zoom-in-up" className="lifecycle-bg" />
                      <div className="lc-box-content">
                        <div className="lc-box-title" data-aos="fade-up">Growth Facilitator</div>
                        <div className="lc-box-icon" data-aos="fade-up">
                          <img src={`${BASE_URL}/img/CxoStrategy/Growth-Facilitator.png`} alt="Growth Facilitator" />
                          <img src={`${BASE_URL}/img/CxoStrategy/Growth-Facilitator-chart.png`} alt="Growth Facilitator Chart" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 cxo-lc-box-col">
                    <div className="cxo-lc-box cxo-lc-box-4">
                      <img src={`${BASE_URL}/img/CxoStrategy/lifecycle-bg.png`} alt="lifecycle-bg" data-aos="zoom-in-up" className="lifecycle-bg" />
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
              <div className="cxo-expect-btn" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000">Explore More</div>
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
                  <h2>Leverage the on-Demand model</h2>
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
                    <Accordion.Header>Why should my company outsource a CXO?</Accordion.Header>
                    <Accordion.Body>
                      <p>The chief experience officer's responsibility is to prevent customer neglect and ensure each step of the buyer's journey and the customer lifecycle is fully optimized and user friendly. The goal is for customer satisfaction to remain high throughout the relationship.</p>
                      <p>Because customer experience drives over two-thirds of customer loyalty, a good customer experience makes a person five times more likely to recommend a company and more likely to purchase in the future. </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1">
                    <Accordion.Header>What are a Chief Experience Officer's duties?</Accordion.Header>
                    <Accordion.Body>
                      <p>Chief experience officers must constantly test and evalute business practices, methods, and strategies to improve customer engagement while sustaining employee interaction. A CXO does this by ensuring employees are passionate about the company's products and services so that this culture and training comes across when working with customers.</p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Are CXOs high in demand?</Accordion.Header>
                    <Accordion.Body>
                      <p>Companies that include customer experience in their value proposition or are customer-centric by design have a C-level position in charge of CX. Every Chief Experience Officer will vary in experience and background, more companies are valuing the diverse insights that they can offer. In 2020, almost 90% oforganizations reported that they have a CXO.</p>
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

      <ServicesAskQuote
        action={`https://forms.zohopublic.com.au/corporality/form/AskQuoteCXOStrategyCorporality/formperma/3CfaHcU0yZY-Gmm5Luu4jEr5qsoAZtDkJ2JrldG-KoU/htmlRecords/submit`}
      />
    </>
  );
}

export default CxoStrategy;
