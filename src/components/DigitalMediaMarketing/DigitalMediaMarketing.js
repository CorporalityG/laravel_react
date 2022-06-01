import React, { useState, useEffect } from "react";
import './DigitalMediaMarketing.css'
import { BASE_URL } from '../../config'
import { MarketingStrategyItem } from "./Components/MarketingStrategyItem";
import { MarketingGoalsItem } from "./Components/MarketingGoalsItem";
import Accordion from 'react-bootstrap/Accordion'
import { WhattoExpectItem } from "./Components/WhattoExpectItem";
import AOS from "aos";
import { ServicesAskQuote } from "../ServicesAskQuote/ServicesAskQuote";
import ServicesClients from "../ServicesClients/ServicesClients";
import ServicesInsights from "../ServicesInsights/ServicesInsights";
import { Helmet } from "react-helmet";

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

  return (
    <>
      <Helmet>
        <title>{`Digital Marketing Agency Sydney | Best Marketing Service | Corporality`}</title>
        <meta name="description" content={`Digital Media Marketing is a powerful brand strategy for many business owners and entrepreneurs. Learn how it works in this resource crafted by marketing and brand consultants.`} />
        <link rel="canonical" href={`${BASE_URL}/digital-media-marketing/`} />
      </Helmet>

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
                  <h1>Building A Digital Footprint For Your Business</h1>
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
                <div className="dmm-ft-btn" onClick={handelToggleFaq} data-aos="zoom-in-right" data-aos-delay="300">Show <i className={`fa ${showFaq ? "fa-angle-up" : "fa-angle-down"}`}></i></div>
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

      <ServicesClients />

      <ServicesInsights />

      <ServicesAskQuote
        action={`https://forms.zohopublic.com.au/corporality/form/AskQuoteDigitalMediaMarketingCorporality/formperma/RJ0OkudWCLZ2oPlxOgTofvvwaCnpzCfpDRNnNJsV2u0/htmlRecords/submit`}
      />
    </>
  );
}

export default DigitalMediaMarketing;
