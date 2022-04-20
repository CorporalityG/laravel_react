import React, { useState, useEffect } from "react";
import Aos from "aos";
import './CorporateStrategy.css'
import { BASE_URL } from '../../config'
import { ServicesAskQuote } from "../ServicesAskQuote/ServicesAskQuote";
import ServicesClients from "../ServicesClients/ServicesClients";
import ServicesInsights from "../ServicesInsights/ServicesInsights";
import Accordion from 'react-bootstrap/Accordion'
import { WhyHireItem } from "./WhyHireItem";

function CorporateStrategy() {

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
      <div className="coo-banner-section">
        <div className='coo-banner-top'></div>
        <div className='coo-banner-middle' data-aos="zoom-in-up" data-aos-duration="1500"></div>
        <div className='coo-banner-bottom' data-aos="zoom-in-up" data-aos-duration="2000"></div>

        <img src={`${BASE_URL}/img/OutsourcedCOO/banner-path.png`} alt="Vector" className="banner-path" data-aos="zoom-in-up" />
        <div className="banner-setting-big">
          <img src={`${BASE_URL}/img/OutsourcedCOO/banner-setting-big.png`} alt="Setting Big" data-aos="zoom-in-up" />
        </div>
        <div className="banner-setting-small">
          <img src={`${BASE_URL}/img/OutsourcedCOO/banner-setting-small.png`} alt="Setting Small" data-aos="zoom-in-up" />
        </div>

        <div className="container-fluid px-lg-0">
          <div className="row coo-banner-row">
            <div className="col-lg-5 offset-lg-1">
              <div className="coo-banner-content">
                <div data-aos="fade-up">
                  <h1>Taking care of bottom line</h1>
                </div>
                <div className="coo-banner-subtitle" data-aos="fade-up" data-aos-delay="300">Choose to increase your operational efficiency to achieve the most</div>
                <div className="coo-banner-desc" data-aos="fade-up" data-aos-delay="500">
                  <p>It is crucial in assessing and improving your company's value even for your exit plans. Our team of experienced COOs will help you regularly analyze and increase your operations to achieve your sustainable business growth model.</p>
                </div>
                <div className="coo-banner-btn" data-aos="fade-up" data-aos-delay="500">
                  <a href="https://zohoadmin-corporality.zohobookings.com.au/#/customer/discoverycall" target="_blank">Book a Call</a>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="coo-banner-video">
                <video data-aos="fade-left" data-aos-duration="1600" autoPlay={true} muted loop>
                  <source src={`${BASE_URL}/img/OutsourcedCOO/banner-video.mp4`} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>

        <div className="coo-social-section">
          <div className="coo-social-row" data-aos="fade-right" data-aos-delay="400">
            <a href='https://www.facebook.com/CorporalityG' target="_blank"><i className="fa fa-facebook-f"></i></a>
            <a href='https://twitter.com/corporalityg' target="_blank"><i className="fa fa-twitter"></i></a>
            <a href='https://www.instagram.com/corporalityg/' target="_blank"><i className="fa fa-instagram"></i></a>
            <a href='https://www.linkedin.com/company/corporality/' target="_blank"><i className="fa fa-linkedin"></i></a>
            <a href='https://in.pinterest.com/CorporalityG/' target="_blank"><i className="fa fa-pinterest"></i></a>
            <a href='https://www.youtube.com/channel/UC4EISt8kHI4zzpmbIBMIBbg' target="_blank"><i className="fa fa-youtube-play"></i></a>
          </div>
        </div>
      </div>

      <div className="coo-level-strategy-section">
        <div className="container-lg">
          <div className="row coo-ls-row">
            <div className="col-lg-6 coo-ls-col">
              <div className="coo-ls-banner">
                <img src={`${BASE_URL}/img/OutsourcedCOO/strategic-issues.png`} alt="Strategic Issues" data-aos="zoom-in-up" />
              </div>
            </div>

            <div className="col-lg-6 coo-ls-col">
              <div className="coo-ls-content coo-ls-difficulty">
                <div data-aos="fade-up" data-aos-delay="100">
                  <h2>Understanding corporate difficulty</h2>
                </div>
                <div data-aos="fade-up" data-aos-delay="300">
                  <p>There are lots of corporate level strategy problems - but how many have you been able to identify? If your company is showing any one of these symptoms, then you must adopt a packaged customer success strategy solution to mitigate them.</p>
                </div>
              </div>

              <div className="coo-ls-content coo-ls-finding">
                <div data-aos="fade-up" data-aos-delay="100">
                  <h2>Finding your path</h2>
                </div>
                <div data-aos="fade-up" data-aos-delay="300">
                  <p>Challenge your current perceptions and break out of your frame of reference. As a market leader, compare yourself to other players to stay enlightened about their marketing strategies. Break it down into smaller versions and get an objective of your new perspective, which is closest to your vision of the corporate level strategy. Define the descriptors and precisely identify your business goals based on your new approach.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="coo-methodology-process-section">
        <div className="container-lg">
          <div className="row coo-mp-row">
            <div className="col-lg-12">
              <div className="coo-mp-content">
                <div data-aos="fade-up">
                  <h2>Our Methodology and Process</h2>
                </div>
                <div data-aos="fade-up" data-aos-delay="300">
                  <p>When you engage with our COO's, you will benefit from our team of experienced Marketing analysts and business consultants, who will assist you in operational decision related to capability building, automation, budgeting, price strategy, marcom strategy and making sue you are market ready with best customer experience offerings,</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="coo-mp-banner">
                <img src={`${BASE_URL}/img/OutsourcedCOO/Our-Methodology-and-Process.png`} alt="Our Methodology and Process" data-aos="zoom-in-up" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="coo-expect-section">
        <div className="container-lg">
          <div className="row coo-expect-title-row">
            <div className="col-lg-12">
              <div className="coo-expect-title">
                <div data-aos="fade-up">
                  <h2>What to expect?</h2>
                </div>
                <div data-aos="fade-up" data-aos-delay="300">
                  <p>Pushing forward businesses to nail the experience stages for their clients</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row coo-expect-content-row">
            <div className="col-lg-6 coo-ec-col">
              <div className="coo-es-items">
                <div className="coo-es-item coo-es-item-top" data-aos="zoom-in">
                  <div className="es-item-icon">
                    <img src={`${BASE_URL}/img/OutsourcedCOO/Product-and-sales-icon.png`} alt="Product and sales Equilibrium" />
                  </div>
                  <div className="es-item-title">Product and sales Equilibrium</div>
                </div>

                <div className="coo-es-item-middle">
                  <div className="coo-es-item coo-es-item-right" data-aos="zoom-in">
                    <div className="es-item-icon">
                      <img src={`${BASE_URL}/img/OutsourcedCOO/lead-icon.png`} alt="Lead Genration and trading" />
                    </div>
                    <div className="es-item-title">Lead Genration and trading</div>
                  </div>

                  <div className="coo-es-item-3" data-aos="zoom-in">
                    <div className="es-item-heading">
                      <div className="es-item-h-border">
                        <div className="es-item-h-title" data-aos="zoom-in">Corporality strategy solutions</div>
                      </div>
                    </div>
                  </div>

                  <div className="coo-es-item coo-es-item-left" data-aos="zoom-in">
                    <div className="es-item-icon">
                      <img src={`${BASE_URL}/img/OutsourcedCOO/Capability-icon.png`} alt="Capability Testing" />
                    </div>
                    <div className="es-item-title">Capability Testing</div>
                  </div>
                </div>

                <div className="coo-es-item coo-es-item-bottom" data-aos="zoom-in">
                  <div className="es-item-icon">
                    <img src={`${BASE_URL}/img/OutsourcedCOO/Budgeting-icon.png`} alt="Budgeting" />
                  </div>
                  <div className="es-item-title">Budgeting</div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 coo-ec-col">
              <div className="coo-expect-content" data-aos="fade-up" data-aos-delay="300">
                <p>The beauty lies in balancing sales with the demand for the product or service, which takes into account finance, capacity, and market trends. Companies are often trapped in selling excessively and experience a slump when it comes to deliveries. They are not Market Ready or want to trade exit the business but not able to Value it . The best way to achieve a balance is to mesh sales and delivery together on a flexible interactive platform that can adapt to clients’ requirements. Being an expert in corporate level strategies, Corporality Global creates a predicated and symbiotic internal relationship that reflects externally to create brilliant customer experiences.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="coo-why-hire-section">
        <div className="container-lg">
          <div className="row coo-wh-title-row">
            <div className="col-lg-12">
              <div className="coo-wh-title-content">
                <div data-aos="fade-up">
                  <h2>Why hire Corporality's Outsourced COO?</h2>
                </div>
                <div className="coo-wh-title-desc" data-aos="fade-up" data-aos-delay="300">
                  <p>The role of our outsourced CoO is tangible and adapts to changing spheres of marketing and technology. Get access to exclusive resources from a highly experienced professional such as - expertise, market knowledge, proven marketing strategies, and make your organisation much more productive in daily operations.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row coo-wh-boxes-row">
            <WhyHireItem
              icon={`${BASE_URL}/img/OutsourcedCOO/Projects.png`}
              title={`Projects`}
            />

            <WhyHireItem
              icon={`${BASE_URL}/img/OutsourcedCOO/Increases-Company-Productivity.png`}
              title={`Increases Company Productivity`}
            />

            <WhyHireItem
              icon={`${BASE_URL}/img/OutsourcedCOO/Helps-Scale-Company-Revenue-Faster.png`}
              title={`Helps Scale Company Revenue Faster`}
            />

            <WhyHireItem
              icon={`${BASE_URL}/img/OutsourcedCOO/Access-to-Expert-Marketing-Knowledge.png`}
              title={`Access to Expert Marketing Knowledge`}
            />
          </div>
        </div>
      </div>

      <div className="coo-success-strategy-section">
        <div className="container-lg">
          <div className="row coo-ss-row">
            <div className="col-lg-6">
              <div className="coo-ss-content">
                <div data-aos="fade-up">
                  <h2>Corporate success Strategy</h2>
                </div>
                <div className="coo-ss-desc" data-aos="fade-up" data-aos-delay="300">
                  <p>Having a strong understanding of what the customer wants is crucial for a successful corporate level strategy. Corporality formulates guidelines typically designed for the senior management level to be filtered down to all the employees across the organization. There are crucial elements of corporate sustainability branding that help customers quickly identify and remember your company. With the right marketing mix, our experts cut through the noise to create directives to drop a product into the market.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="coo-ss-banner">
                <img src={`${BASE_URL}/img/OutsourcedCOO/Corporate-success-Strategy.png`} alt="Corporate success Strategy" data-aos="zoom-in-up" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="coo-faqs-section">
        <div className="container-lg">
          <div className="row coo-faqs-title-row" data-aos="zoom-in">
            <div className="col-lg-12">
              <div className="coo-ft-content">
                <div className="coo-ft-subtitle" data-aos="zoom-in-up" data-aos-delay="100">Have a Questions</div>
                <h2 data-aos="zoom-in-down" data-aos-delay="200">Check our Frequently asked Questions</h2>
                <div className="coo-ft-btn" onClick={handelToggleFaq} data-aos="zoom-in-right" data-aos-delay="300">Show <i className={`fa ${showFaq ? "fa-angle-up" : "fa-angle-down"}`}></i></div>
              </div>
            </div>
          </div>

          <div className={`row coo-faqs-list-row ${showFaq ? "" : "hide"}`}>
            <div className="col-lg-12">
              <div className="coo-faqs-list">
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Why do you need a customer segmentation and sales strategy?</Accordion.Header>
                    <Accordion.Body>
                      <p>Sales strategy defines how you will hit the growth objective by aligning resources to the top market opportunities and building a predictive system to consistently achieve your goals. A successful sales strategy provides an operating plan for a company’s sales teams, to ensure execution of the revenue growth strategy. Leverage the plan to allocate resources in the most effective and/or efficient manner, so that teams can grow revenue from new and existing customers. The sales strategy optimizes the sales function to achieve revenue growth objectives consistently.</p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1">
                    <Accordion.Header>What is Market Segmentation and why do you need it?</Accordion.Header>
                    <Accordion.Body>
                      <p>Marketing is virtual and digital in 2022 and beyond. That means it’s even harder to get in front of your prospects because the digital channels are more crowded than ever with competing messages. Revenue Marketing can shoulder more work in building the pipeline, but it also needs greater investment to contribute to profitable growth.</p>
                      <p>Learn from the market leaders where to identify cross-functional savings, new efficiencies, and fresh innovations to fuel your marketing results and take share.</p>
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

export default CorporateStrategy;
