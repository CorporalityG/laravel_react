import React, { useState, useEffect } from "react";
import './DigitalMediaMarketing.css'
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../config'
import { MarketingStrategyItem } from "./Components/MarketingStrategyItem";
import { MarketingGoalsItem } from "./Components/MarketingGoalsItem";
import Accordion from 'react-bootstrap/Accordion'
import { WhattoExpectItem } from "./Components/WhattoExpectItem";
import Aos from "aos";
import { ServicesAskQuote } from "../ServicesAskQuote/ServicesAskQuote";
import ServicesClients from "../ServicesClients/ServicesClients";
import ServicesInsights from "../ServicesInsights/ServicesInsights";
import { Helmet, HelmetProvider } from 'react-helmet-async';

function DigitalMediaMarketing() {

  const page_slug = 'digital-media-marketing';

  const [pageDetail, setPageDetail] = useState([]);

  useEffect(() => {
    Aos.init({
      duration: 2000,
    });

    getPageDetail()
  }, []);

  async function getPageDetail() {
    let result = await fetch(`${API_BASE_URL}/page-detail/${page_slug}`);
    result = await result.json();
    setPageDetail(result);
  }

  const [showFaq, setShowFaq] = useState(false);

  const handelToggleFaq = () => {
    setShowFaq(!showFaq)
  }

  return (
    <>
      <HelmetProvider>
        <Helmet>
          {pageDetail.meta_title && <title>{`${pageDetail.meta_title}`}</title>}
          {pageDetail.meta_description && <meta name="description" content={`${pageDetail.meta_description}`} />}
          {pageDetail.meta_keywords && <meta name="keywords" content={pageDetail.meta_keywords} />}
          <link rel="canonical" href={`${BASE_URL}/digital-media-marketing/`} />
        </Helmet>

        {
          pageDetail.detail ?
            <>
              <div className="dmm-banner-section">
                <div className="container-lg">
                  <div className="row dmm-banner-row">
                    <div className="col-lg-6">
                      <div className="dmm-banner-main">
                        {pageDetail.detail.banner_image && <img src={`${API_IMG_URL}pages/${pageDetail.detail.banner_image}`} alt={`${pageDetail.detail.banner_title}`} className="dmm-banner" data-aos="fade-right" />}

                        <img src={`${BASE_URL}/img/DigitalMediaMarketing/rec-1.png`} alt="Rec 1" className="rec-1" />
                        <img src={`${BASE_URL}/img/DigitalMediaMarketing/rec-2.png`} alt="Rec 2" className="rec-2" />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="dmm-banner-content-main">
                        <div data-aos="fade-up">
                          <h1>{`${pageDetail.detail.banner_title}`}</h1>
                        </div>
                        <div className="dmm-banner-content" data-aos="fade-up" data-aos-delay="300">
                          <p><b>{`${pageDetail.detail.banner_subtitle}`}</b></p>
                          <p>{`${pageDetail.detail.banner_description}`}</p>
                        </div>
                        <a href={`${pageDetail.detail.banner_btn_link}`} target="_blank" className="dmm-banner-btn" data-aos="fade-up" data-aos-delay="500">{`${pageDetail.detail.banner_btn_text}`}</a>
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
                          <h2>{`${pageDetail.detail.marketing_strategy_title}`}</h2>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="300">
                          <p>{`${pageDetail.detail.marketing_strategy_subtitle}`}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row dmm-s-boxes-row">
                    <MarketingStrategyItem
                      number={`01`}
                      thumbnail={pageDetail.detail.marketing_strategy_step_1_image && `${API_IMG_URL}pages/${pageDetail.detail.marketing_strategy_step_1_image}`}
                      title={`${pageDetail.detail.marketing_strategy_step_1_title}`}
                    />

                    <MarketingStrategyItem
                      number={`02`}
                      thumbnail={pageDetail.detail.marketing_strategy_step_2_image && `${API_IMG_URL}pages/${pageDetail.detail.marketing_strategy_step_2_image}`}
                      title={`${pageDetail.detail.marketing_strategy_step_2_title}`}
                    />

                    <MarketingStrategyItem
                      number={`03`}
                      thumbnail={pageDetail.detail.marketing_strategy_step_3_image && `${API_IMG_URL}pages/${pageDetail.detail.marketing_strategy_step_3_image}`}
                      title={`${pageDetail.detail.marketing_strategy_step_3_title}`}
                    />

                    <MarketingStrategyItem
                      number={`04`}
                      thumbnail={pageDetail.detail.marketing_strategy_step_4_image && `${API_IMG_URL}pages/${pageDetail.detail.marketing_strategy_step_4_image}`}
                      title={`${pageDetail.detail.marketing_strategy_step_4_title}`}
                    />
                  </div>
                </div>
              </div>

              <div className="dmm-key-objectives-section">
                <div className="container-lg">
                  <div className="row dmm-key-objectives-row">
                    <div className="col-lg-6">
                      <div className="dmm-ko-img" data-aos="fade-up-right">
                        {pageDetail.detail.key_objectives_image && <img src={`${API_IMG_URL}pages/${pageDetail.detail.key_objectives_image}`} alt={`${pageDetail.detail.key_objectives_title}`} />}
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="dmm-ko-content">
                        <div className="dmm-ko-subtitle" data-aos="fade-up-left">{`${pageDetail.detail.key_objectives_title}`}</div>
                        <h2 data-aos="fade-up">{`${pageDetail.detail.key_objectives_subtitle}`}</h2>
                        <p data-aos="fade-up" data-aos-delay="300">{`${pageDetail.detail.key_objectives_description}`}</p>
                        <ul data-aos="fade-up" data-aos-delay="500">
                          <li><img src={`${BASE_URL}/img/DigitalMediaMarketing/list-icon.png`} alt="-" />{`${pageDetail.detail.key_objectives_item_1_title}`}</li>
                          <li><img src={`${BASE_URL}/img/DigitalMediaMarketing/list-icon.png`} alt="-" />{`${pageDetail.detail.key_objectives_item_2_title}`}</li>
                          <li><img src={`${BASE_URL}/img/DigitalMediaMarketing/list-icon.png`} alt="-" />{`${pageDetail.detail.key_objectives_item_3_title}`}</li>
                          <li><img src={`${BASE_URL}/img/DigitalMediaMarketing/list-icon.png`} alt="-" />{`${pageDetail.detail.key_objectives_item_4_title}`}</li>
                          <li><img src={`${BASE_URL}/img/DigitalMediaMarketing/list-icon.png`} alt="-" />{`${pageDetail.detail.key_objectives_item_5_title}`}</li>
                          <li><img src={`${BASE_URL}/img/DigitalMediaMarketing/list-icon.png`} alt="-" />{`${pageDetail.detail.key_objectives_item_6_title}`}</li>
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
                        <p data-aos="fade-up">{`${pageDetail.detail.marketing_goals_title}`}</p>
                        <div className="row dmm-gc-boxes-row">
                          <MarketingGoalsItem
                            title={`${pageDetail.detail.marketing_goals_item_1_title}`}
                            subtitle={`${pageDetail.detail.marketing_goals_item_1_subtitle}`}
                          />

                          <MarketingGoalsItem
                            title={`${pageDetail.detail.marketing_goals_item_2_title}`}
                            subtitle={`${pageDetail.detail.marketing_goals_item_2_subtitle}`}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="dmm-goals-img" data-aos="fade-up-left">
                        {pageDetail.detail.marketing_goals_item_image && <img src={`${API_IMG_URL}pages/${pageDetail.detail.marketing_goals_item_image}`} alt="marketing-goals" />}
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
                        <div className="dmm-ft-subtitle" data-aos="zoom-in-up" data-aos-delay="100">{`${pageDetail.detail.faq_title}`}</div>
                        <h2 data-aos="zoom-in-down" data-aos-delay="200">{`${pageDetail.detail.faq_subtitle}`}</h2>
                        <div className="dmm-ft-btn" onClick={handelToggleFaq} data-aos="zoom-in-right" data-aos-delay="300">Show <i className={`fa ${showFaq ? "fa-angle-up" : "fa-angle-down"}`}></i></div>
                      </div>
                    </div>
                  </div>

                  <div className={`row dmm-faqs-list-row ${showFaq ? "" : "hide"}`}>
                    <div className="col-lg-12">
                      <div className="dmm-faqs-list">
                        <Accordion>
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>{`${pageDetail.detail.faq_item_1_title}`}</Accordion.Header>
                            <Accordion.Body>
                              <div dangerouslySetInnerHTML={{ __html: pageDetail.detail.faq_item_1_description }}></div>
                            </Accordion.Body>
                          </Accordion.Item>

                          <Accordion.Item eventKey="1">
                            <Accordion.Header>{`${pageDetail.detail.faq_item_2_title}`}</Accordion.Header>
                            <Accordion.Body>
                              <div dangerouslySetInnerHTML={{ __html: pageDetail.detail.faq_item_2_description }}></div>
                            </Accordion.Body>
                          </Accordion.Item>

                          <Accordion.Item eventKey="2">
                            <Accordion.Header>{`${pageDetail.detail.faq_item_3_title}`}</Accordion.Header>
                            <Accordion.Body>
                              <div dangerouslySetInnerHTML={{ __html: pageDetail.detail.faq_item_3_description }}></div>
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
                        <div className="dmm-ec-subtitle" data-aos="zoom-in-down">{`${pageDetail.detail.what_expect_title}`}</div>
                        <h2 data-aos="zoom-in-up">{`${pageDetail.detail.what_expect_subtitle}`}</h2>
                        <p data-aos="fade-up">{`${pageDetail.detail.what_expect_description}`}</p>

                        <div className="dmm-expect-items">
                          <WhattoExpectItem
                            icon={pageDetail.detail.what_expect_item_1_icon && `${API_IMG_URL}pages/${pageDetail.detail.what_expect_item_1_icon}`}
                            title={`${pageDetail.detail.what_expect_item_1_title}`}
                            content={`<p>${pageDetail.detail.what_expect_item_1_description}</p>`}
                          />

                          <WhattoExpectItem
                            icon={pageDetail.detail.what_expect_item_2_icon && `${API_IMG_URL}pages/${pageDetail.detail.what_expect_item_2_icon}`}
                            title={`${pageDetail.detail.what_expect_item_2_title}`}
                            content={`<p>${pageDetail.detail.what_expect_item_2_description}</p>`}
                          />

                          <WhattoExpectItem
                            icon={pageDetail.detail.what_expect_item_3_icon && `${API_IMG_URL}pages/${pageDetail.detail.what_expect_item_3_icon}`}
                            title={`${pageDetail.detail.what_expect_item_3_title}`}
                            content={`<p>${pageDetail.detail.what_expect_item_3_description}</p>`}
                          />

                          <WhattoExpectItem
                            icon={pageDetail.detail.what_expect_item_4_icon && `${API_IMG_URL}pages/${pageDetail.detail.what_expect_item_4_icon}`}
                            title={`${pageDetail.detail.what_expect_item_4_title}`}
                            content={`<p>${pageDetail.detail.what_expect_item_4_description}</p>`}
                          />

                          <WhattoExpectItem
                            icon={pageDetail.detail.what_expect_item_5_icon && `${API_IMG_URL}pages/${pageDetail.detail.what_expect_item_5_icon}`}
                            title={`${pageDetail.detail.what_expect_item_5_title}`}
                            content={`<p>${pageDetail.detail.what_expect_item_5_description}</p>`}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 pr-0">
                      <div className="dmm-expect-img" data-aos="fade-up-left">
                        <img src={pageDetail.detail.what_expect_image && `${API_IMG_URL}pages/${pageDetail.detail.what_expect_image}`} alt={`${pageDetail.detail.what_expect_title}`} />
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
                        <h2 data-aos="flip-left">{`${pageDetail.detail.pitch_title}`}</h2>
                        <p data-aos="flip-right" data-aos-delay="200">{`${pageDetail.detail.pitch_description}`}</p>
                      </div>
                    </div>
                  </div>

                  <div className="row dmm-ps-img-row">
                    <div className="col-lg-12">
                      <div className="dmm-ps-img" data-aos="zoom-in-down" data-aos-delay="300">
                        {pageDetail.detail.pitch_image && <img src={`${API_IMG_URL}pages/${pageDetail.detail.pitch_image}`} alt={`${pageDetail.detail.pitch_title}`} />}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
            : null
        }

        <ServicesClients />

        <ServicesInsights />

        <ServicesAskQuote
          action={`https://forms.zohopublic.com.au/corporality/form/AskQuoteDigitalMediaMarketingCorporality/formperma/RJ0OkudWCLZ2oPlxOgTofvvwaCnpzCfpDRNnNJsV2u0/htmlRecords/submit`}
        />
      </HelmetProvider>
    </>
  );
}

export default DigitalMediaMarketing;
