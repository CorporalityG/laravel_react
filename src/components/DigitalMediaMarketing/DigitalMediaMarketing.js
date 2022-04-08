import React, { useState, useEffect } from "react";
import './DigitalMediaMarketing.css'
import { BASE_URL } from '../../config'
import { MarketingStrategyItem } from "./Components/MarketingStrategyItem";
import { MarketingGoalsItem } from "./Components/MarketingGoalsItem";
import Accordion from 'react-bootstrap/Accordion'
import { WhattoExpectItem } from "./Components/WhattoExpectItem";
import Carousel from 'react-bootstrap/Carousel'
import { useNavigate } from "react-router"
import { ClientWorkItem } from "./Components/ClientWorkItem";
import AOS from "aos";
import { ServicesAskQuote } from "../ServicesAskQuote/ServicesAskQuote";

function DigitalMediaMarketing() {

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const [showFaq, setShowFaq] = useState(false);

  const handelToggleFaq = () => {
    setShowFaq(!showFaq)
  }

  const totalSlide = '04';
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const navigate = useNavigate();
  const topHandle = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <>
      <div className="dmm-banner-section">
        <div className="container-lg">
          <div className="row dmm-banner-row">
            <div className="col-lg-6">
              <div className="dmm-banner-main">
                <img src={`${BASE_URL}/img/DigitalMediaMarketing/banner.png`} alt="Digital Media Marketing" className="dmm-banner" data-aos="fade-right" />

                <img src={`${BASE_URL}/img/DigitalMediaMarketing/rec-1.png`} alt="Rec 1" className="rec-1" />
                <img src={`${BASE_URL}/img/DigitalMediaMarketing/rec-2.png`} alt="Rec 2" className="rec-2" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="dmm-banner-content-main">
                <div data-aos="fade-up">
                  <h1>BUILDING A DIGITAL FOOTPRINT FOR YOUR BUSINESS</h1>
                </div>
                <div className="dmm-banner-content" data-aos="fade-up" data-aos-delay="300">
                  <p><b>We got you covered for Digital Media Marketing through our Packaged solutions.</b></p>
                  <p>Corporality is a globally trusted Digital Media Marketing firm. We have partnered with clients all over the world to solve the complex challenges of consistency in creating your digital presence.</p>
                </div>
                <a href="https://zohoadmin-corporality.zohobookings.com.au/#/customer/discoverycall" target="_blank" className="dmm-banner-btn" data-aos="fade-up" data-aos-delay="500">Schedule a time</a>
              </div>
            </div>
          </div>
        </div>

        <div className="social-section">
          <div className="social-row" data-aos="fade-right" data-aos-delay="400">
            <a href='https://www.facebook.com/CorporalityG' target="_blank"><i className="fa fa-facebook-f"></i></a>
            <a href='https://twitter.com/corporalityg' target="_blank"><i className="fa fa-twitter"></i></a>
            <a href='https://www.instagram.com/corporalityg/' target="_blank"><i className="fa fa-instagram"></i></a>
            <a href='https://www.linkedin.com/company/corporality/' target="_blank"><i className="fa fa-linkedin"></i></a>
            <a href='https://in.pinterest.com/CorporalityG/' target="_blank"><i className="fa fa-pinterest"></i></a>
            <a href='https://www.youtube.com/channel/UC4EISt8kHI4zzpmbIBMIBbg' target="_blank"><i className="fa fa-youtube-play"></i></a>
          </div>
        </div>
      </div>

      <div className="dmm-strategy-section">
        <div className="container-lg">
          <div className="row dmm-s-title-row">
            <div className="col-lg-12">
              <div className="dmm-s-title-content">
                <div data-aos="fade-up">
                  <h2>Digital Media Marketing Strategy</h2>
                </div>
                <div data-aos="fade-up" data-aos-delay="300">
                  <p>Working on Multi-touch Attribution (MTA) & Conversion optimisation</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row dmm-s-boxes-row">
            <MarketingStrategyItem
              number={`01`}
              thumbnail={`${BASE_URL}/img/DigitalMediaMarketing/strategizing.png`}
              title={`Strategizing`}
            />

            <MarketingStrategyItem
              number={`02`}
              thumbnail={`${BASE_URL}/img/DigitalMediaMarketing/attracting.png`}
              title={`Attracting`}
            />

            <MarketingStrategyItem
              number={`03`}
              thumbnail={`${BASE_URL}/img/DigitalMediaMarketing/capturing.png`}
              title={`Capturing`}
            />

            <MarketingStrategyItem
              number={`04`}
              thumbnail={`${BASE_URL}/img/DigitalMediaMarketing/converting.png`}
              title={`Converting`}
            />
          </div>
        </div>
      </div>

      <div className="dmm-key-objectives-section">
        <div className="container-lg">
          <div className="row dmm-key-objectives-row">
            <div className="col-lg-6">
              <div className="dmm-ko-img" data-aos="fade-up-right">
                <img src={`${BASE_URL}/img/DigitalMediaMarketing/key-objectives.png`} alt="Key objectives" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="dmm-ko-content">
                <div className="dmm-ko-subtitle" data-aos="fade-up-left">Key objectives</div>
                <h2 data-aos="fade-up">Be on the Top of people mind & Attract More Traffic to Your Website</h2>
                <p data-aos="fade-up" data-aos-delay="300">Corporality keeps you ahead of the curve with digital marketing trends. Our strategy has us leading the pack amongst our competitors with our ability to analyse, change and innovate.Augmenting company visibility Increasing the size of the audience with corporate level strategy to transform your digital Presence.</p>
                <ul data-aos="fade-up" data-aos-delay="500">
                  <li><img src={`${BASE_URL}/img/DigitalMediaMarketing/list-icon.png`} alt="-" />Augmenting company visibility</li>
                  <li><img src={`${BASE_URL}/img/DigitalMediaMarketing/list-icon.png`} alt="-" />Increasing the size of the audience with corporate or business level strategy</li>
                  <li><img src={`${BASE_URL}/img/DigitalMediaMarketing/list-icon.png`} alt="-" />Differentiating you from competition</li>
                  <li><img src={`${BASE_URL}/img/DigitalMediaMarketing/list-icon.png`} alt="-" />Market share increase and maintenance</li>
                  <li><img src={`${BASE_URL}/img/DigitalMediaMarketing/list-icon.png`} alt="-" />Generating qualified leads with effective lead generation strategy</li>
                  <li><img src={`${BASE_URL}/img/DigitalMediaMarketing/list-icon.png`} alt="-" />Customer engagement and usage</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dmm-goals-section">
        <div className="container-lg">
          <div className="row dmm-goals-row">
            <div className="col-lg-6">
              <div className="dmm-goals-content">
                <p data-aos="fade-up">A detailed marketing audit under your belt helps you provide marching orders that are strategically aligned towards your marketing goals.</p>
                <div className="row dmm-gc-boxes-row">
                  <MarketingGoalsItem
                    title={`70%`}
                    subtitle={`Increment in traffic`}
                  />

                  <MarketingGoalsItem
                    title={`2-4%`}
                    subtitle={`Revenue growth`}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="dmm-goals-img" data-aos="fade-up-left">
                <img src={`${BASE_URL}/img/DigitalMediaMarketing/marketing-goals.png`} alt="marketing-goals" />
              </div>
            </div>
          </div>
        </div>

        <img src={`${BASE_URL}/img/DigitalMediaMarketing/marketing-goals-vector.png`} alt="marketing-goals-vector" className="marketing-goals-vector" />
        <img src={`${BASE_URL}/img/DigitalMediaMarketing/marketing-goals-arrow.png`} alt="marketing-goals-arrow" className="marketing-goals-arrow" />
      </div>

      <div className="dmm-faqs-section">
        <div className="container-lg">
          <div className="row dmm-faqs-title-row" data-aos="zoom-in">
            <div className="col-lg-12">
              <div className="dmm-ft-content">
                <div className="dmm-ft-subtitle" data-aos="zoom-in-up" data-aos-delay="100">Have a Questions</div>
                <h2 data-aos="zoom-in-down" data-aos-delay="200">Check our Frequently asked Questions</h2>
                <div className="dmm-ft-btn" onClick={handelToggleFaq} data-aos="zoom-in-right"  data-aos-delay="300">Show <i className={`fa ${showFaq ? "fa-angle-up" : "fa-angle-down"}`}></i></div>
              </div>
            </div>
          </div>

          <div className={`row dmm-faqs-list-row ${showFaq ? "" : "hide"}`}>
            <div className="col-lg-12">
              <div className="dmm-faqs-list">
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Why Digital Media Marketing Strategy?</Accordion.Header>
                    <Accordion.Body>
                      <p>In 2021, businesses and consumers will continue to embrace the physical distancing concept. The technology was always there for over a decade but it is explored to it’s true potential by many companies only now.</p>
                      <p>The digital Marketing strategy provides a clear assessment of a company’s digital maturity and optimization of digital process implementation across the corporate—with a focus on the intended maturation model. When our strategy will be deployed fully and correctly, it will accelerate the perception about your company brand position.</p>
                      <p>It will not just be increasing effectiveness but also will bring eventual revenue growth for you.</p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1">
                    <Accordion.Header>What is Digital Process Optimization</Accordion.Header>
                    <Accordion.Body>
                      <p>Market leaders digitize all platforms that run through their business. These include and are not limited to their sales processes, marketing strategies, internal processes and employee dynamics, customer relations, as a driver of revenue etc. This however, is executed as cost efficiently as possible which means that optimisation comes prior or in parallel to the entire digital migration/construction.</p>
                      <p><b>What It Is</b> – Digital Optimisation in an Internal process.</p>
                      <p><b>Why It’s Important</b> – This aids influencing parties that contribute to the overall revenue growth across sales, marketing, and customer success.</p>
                      <p><b>How to Use It</b> – Digitize processes that already fit your standard, instead of raising sub par ones to an acceptable level. Keeping that in mind is guaranteed to more noticeably maximise ROI.</p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Why Digital Customer Journey Enhancement?</Accordion.Header>
                    <Accordion.Body>
                      <p>Market leaders continue to seek improvement in their customer journey. To do so, it’s all about looking for the key moments that lessen friction and delight customers. The digital media marketing strategy focuses on the defining moments that create the ideal experience for your clients by bringing about a significant impact to the entire customer journey. recognizes the fact that successful market leaders do not get hung up on automated digital marketing efforts that wholly create what seem to be custom/personal digital experiences for their intended audiences.</p>
                      <p>Instead, true market leaders meticulously analyze the ROI of digital customer journey enhancement and strategically invest where there are logical and fair returns. Another key thing to keep in mind when calculating ROI and investment choices is clear customer segmentation that takes demographics, psychographics, behavioral tendencies and geographic positioning into account.</p>
                      <p><b>What it is</b> – Establishment of basic and bespoke digital customer journey that is later enhanced even further.</p>
                      <p><b>Why it’s important</b> – The reason for further enhancement is that the basic set-up of what is known to be tailored digital marketing is no longer innovation, but is now expectation.</p>
                      <p><b>How to use it</b> – Optimise digital customer journeys through placing said key moments together with a profound perception of ROI at the core of all efforts.</p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dmm-expect-section">
        <div className="container-fluid">
          <div className="row dmm-expect-row">
            <div className="col-lg-5 offset-lg-1">
              <div className="dmm-expect-content">
                <div className="dmm-ec-subtitle" data-aos="zoom-in-down">What to Expect</div>
                <h2 data-aos="zoom-in-up">Digital Media Marketing for digital presence</h2>
                <p data-aos="fade-up">This is high demand product where you will be receiving a packaged solution to implement your Inbound Marketing strategy</p>

                <div className="dmm-expect-items">
                  <WhattoExpectItem
                    icon={`${BASE_URL}/img/DigitalMediaMarketing/SEO-Content-Strategy.png`}
                    title={`SEO Content Strategy`}
                    content={`<p>Create engaging content that is optimized for Google and appeals to the readers. Develop a comprehensive SEO content strategy.</p>`}
                  />

                  <WhattoExpectItem
                    icon={`${BASE_URL}/img/DigitalMediaMarketing/Social-Media-Marketing-Strategy.png`}
                    title={`Social Media Marketing Strategy`}
                    content={`<p>Develop a strong, impressive, and lasting social media presence that aligns with the goals for your business and brand.</p>`}
                  />

                  <WhattoExpectItem
                    icon={`${BASE_URL}/img/DigitalMediaMarketing/B2B-SEO-Strategy.png`}
                    title={`B2B SEO Strategy`}
                    content={`<p>Build a strong B2B sales funnel by emphasizing value proposition and quality of product or service. Learn with advanced KPIs and optimize your B2B SEO campaigns to have high conversion rates.</p>`}
                  />

                  <WhattoExpectItem
                    icon={`${BASE_URL}/img/DigitalMediaMarketing/Email-Campaign.png`}
                    title={`Email Campaign`}
                    content={`<p>Reach out to a variety of customers from different industries and make a powerful impact with an email marketing campaign.</p>`}
                  />

                  <WhattoExpectItem
                    icon={`${BASE_URL}/img/DigitalMediaMarketing/Conversion-Optimization.png`}
                    title={`Conversion Optimization`}
                    content={`<p>Optimize your product/service website’s customer conversion rates using an 8 week plan that improves your website visitor’s user experience.</p>`}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-6 pr-0">
              <div className="dmm-expect-img" data-aos="fade-up-left">
                <img src={`${BASE_URL}/img/DigitalMediaMarketing/What-to-Expect-banner.png`} alt="What to Expect" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dmm-perfect-scenario-section">
        <div className="container-lg">
          <div className="row dmm-ps-title-row">
            <div className="col-lg-12">
              <div className="dmm-ps-title-content">
                <h2 data-aos="flip-left">From pitch to picture perfect scenario</h2>
                <p data-aos="flip-right" data-aos-delay="200">The process of starting a digital media marketing with Corporality Global -An innovative internet marketing company in Sydney, and approaching the right strategy can be highly intended to your true audience. We’ve  created this service Edition to accompany founders in this journey, from getting their vision and approaching potential buyers' persona naturally.</p>
              </div>
            </div>
          </div>

          <div className="row dmm-ps-img-row">
            <div className="col-lg-12">
              <div className="dmm-ps-img" data-aos="zoom-in-down" data-aos-delay="300">
                <img src={`${BASE_URL}/img/DigitalMediaMarketing/perfect-scenario-banner.png`} alt="perfect scenario" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dmm-work-section">
        <div className="container-lg">
          <div className="row dmm-work-row">
            <div className="col-lg-12">
              <Carousel activeIndex={index} onSelect={handleSelect} controls={false} interval={null} fade>
                <Carousel.Item>
                  <ClientWorkItem
                    thumbnail={`${BASE_URL}/img/DigitalMediaMarketing/build-q.png`}
                    title={`Build Q`}
                    slug={`build-q`}
                    content={`<p>Prospective plans to give back to society making a green environment a reality.</p>`}
                    featuredImg={`${BASE_URL}/img/DigitalMediaMarketing/building-a-perfect-digital-framework.png`}
                    featuredTitle={`Building a perfect digital framework`}
                    offeringTitle={`BuildQ - Digital Media Marketing`}
                    offerinContent={`<p>One of the leading construction companies in Sydney - BuildQ Group outsourced their Digital Media Marketing to us. We devised a comprehensive digital marketing strategy.</p>`}
                  />
                </Carousel.Item>

                <Carousel.Item data-aos="zoom-in">
                  <ClientWorkItem
                    thumbnail={`${BASE_URL}/img/DigitalMediaMarketing/Fastgrow-Finance.png`}
                    title={`Fastgrow Finance`}
                    slug={`fastgrow-finance`}
                    content={`<p>Fastgrow was able to instantly stand out from the crowd with our brand positioning strategy.</p>`}
                    featuredImg={`${BASE_URL}/img/DigitalMediaMarketing/out-of-the-ordinary.png`}
                    featuredTitle={`Human to Human solutions`}
                    offeringTitle={`Divine - Interactive Blueprint`}
                    offerinContent={`<p>Divine Intercession is a team of specialists dealing with spiritual affliction and guidance. Our Interactive Blueprint plan increased their social media presence ..</p>`}
                  />
                </Carousel.Item>

                <Carousel.Item data-aos="zoom-in">
                  <ClientWorkItem
                    thumbnail={`${BASE_URL}/img/DigitalMediaMarketing/divine-intercession.png`}
                    title={`Divine Intercession`}
                    slug={`divine-intercession`}
                    content={`<p>Creating evangelist since 2014, helping our visionary customers to achieve their extraordinary goal</p>`}
                    featuredImg={`${BASE_URL}/img/DigitalMediaMarketing/human-to-human-solutions.png`}
                    featuredTitle={`Out of the ordinary`}
                    offeringTitle={`Fastgrow - Digital Media Marketing`}
                    offerinContent={`<p>Fastgrow Finance provides Mortgage Solutions and Loans in Sydney and is a growing name in the industry. With our comprehensive digital media..</p>`}
                  />
                </Carousel.Item>

                <Carousel.Item data-aos="zoom-in">
                  <ClientWorkItem
                    thumbnail={`${BASE_URL}/img/DigitalMediaMarketing/SK-Insurance.png`}
                    title={`SK Insurance`}
                    slug={`sk-insurance`}
                    content={``}
                    featuredImg={`${BASE_URL}/img/DigitalMediaMarketing/visionary-growth-strategies.png`}
                    featuredTitle={`Visionary growth strategies`}
                    offeringTitle={`SK Insure - Digital Media Marketing`}
                    offerinContent={`<p>SK Insure is a leading insurance provider based out of Australia. Armed with our effective digital media marketing strategy, they are constantly expanding their digital presence.</p>`}
                  />
                </Carousel.Item>

              </Carousel>

              <div className="dmm-work-count" data-aos="fade-up" data-aos-delay="400">
                <span className="big-count">0{index + 1}</span>/<span className="small-count">{totalSlide}</span>
              </div>

              <div className="dmm-work-btn" data-aos="fade-up" data-aos-delay="500"><span className="dmm-work-view-all" onClick={() => { navigate("/clients"); topHandle(); }}>View All Clients</span></div>
            </div>
          </div>
        </div>
      </div>

      <div className="dmm-insights-section">
        <div className="container-lg">
          <div className="row">
            <div className="col-md-12">
              <div className="dmm-insights-heading" data-aos="zoom-out-up">Our Initiatives</div>
            </div>
          </div>

          <div className="row dmm-insights-grid-row">
            <div className="col-lg-6 col-md-12 col-sm-12 mb-xs-20 p-0 dmm-insights-grid">
              <a onClick={() => { navigate("/blog"); topHandle(); }} title="Latest Blog">
                <figure className="dmm-insights-grid-img-effect" data-aos="fade-right">
                  <img src={`${BASE_URL}/img/DigitalMediaMarketing/Latest-Blog.png`} alt="Latest Blog" className="dmm-insights-grid-img" />
                  <div className="bottom-gradient-do_more"></div>
                  <figcaption>
                    <h2 className="dmm-insights-grid-title">Latest Blog</h2>
                    <div className="dmm-insights-grid-desc"></div>
                  </figcaption>
                </figure>
              </a>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12 mb-xs-20 dmm-insights-grid">
              <div className="row">
                <div className="col-sm-6 p-0">
                  <a title="Corporality Magazine">
                    <figure className="dmm-insights-grid-img-effect" data-aos="fade-down-right">
                      <img src={`${BASE_URL}/img/DigitalMediaMarketing/Corporality-Magazine.png`} alt="Corporality Magazine" className="dmm-insights-grid-img" />
                      <div className="bottom-gradient-do_more"></div>
                      <figcaption>
                        <h2 className="dmm-insights-grid-title">Corporality Magazine</h2>
                        <div className="dmm-insights-grid-desc"></div>
                      </figcaption>
                    </figure>
                  </a>
                </div>

                <div className="col-sm-6 p-0">
                  <a href="http://corporality.global/talk/" target={`_blank`} title="Corporality Talk">
                    <figure className="dmm-insights-grid-img-effect" data-aos="fade-down-left">
                      <img src={`${BASE_URL}/img/DigitalMediaMarketing/Corporality-Talk.png`} alt="Corporality Talk" className="dmm-insights-grid-img" />
                      <div className="bottom-gradient-do_more"></div>
                      <figcaption>
                        <h2 className="dmm-insights-grid-title">Corporality Talk</h2>
                        <div className="dmm-insights-grid-desc"></div>
                      </figcaption>
                    </figure>
                  </a>
                </div>

                <div className="col-sm-6 p-0">
                  <a href="https://corporality.global/club" target={`_blank`} title="Corporality Club">
                    <figure className="dmm-insights-grid-img-effect" data-aos="fade-up-right">
                      <img src={`${BASE_URL}/img/DigitalMediaMarketing/Corporality-Club.png`} alt="Corporality Club" className="dmm-insights-grid-img" />
                      <div className="bottom-gradient-do_more"></div>
                      <figcaption>
                        <h2 className="dmm-insights-grid-title">Corporality Club</h2>
                        <div className="dmm-insights-grid-desc"></div>
                      </figcaption>
                    </figure>
                  </a>
                </div>

                <div className="col-sm-6 p-0">
                  <a href="https://techconsultants.global/" target={`_blank`} title="TechConsultants">
                    <figure className="dmm-insights-grid-img-effect" data-aos="fade-up-left">
                      <img src={`${BASE_URL}/img/DigitalMediaMarketing/Tech-Consultant.png`} alt="TechConsultants" className="dmm-insights-grid-img" />
                      <div className="bottom-gradient-do_more"></div>
                      <figcaption>
                        <h2 className="dmm-insights-grid-title">TechConsultants</h2>
                        <div className="dmm-insights-grid-desc"></div>
                      </figcaption>
                    </figure>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ServicesAskQuote />
    </>
  );
}

export default DigitalMediaMarketing;
