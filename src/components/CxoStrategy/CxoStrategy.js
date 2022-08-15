import React, { useState, useEffect } from "react";
import Aos from "aos";
import './CxoStrategy.css'
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../config'
import { ServicesAskQuote } from '../ServicesAskQuote/ServicesAskQuote';
import ServicesClients from "../ServicesClients/ServicesClients";
import ServicesInsights from "../ServicesInsights/ServicesInsights";
import { LeverageModelItem } from "./LeverageModelItem";
import Accordion from 'react-bootstrap/Accordion'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function CxoStrategy() {

  const page_slug = 'cxo-strategy';

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
          <link rel="canonical" href={`${BASE_URL}/cxo-strategy/`} />
        </Helmet>

        {
          pageDetail.detail ?
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

                <div className="container-fluid px-lg-0">
                  <div className="row cxo-banner-row">
                    <div className="col-lg-5 offset-lg-1">
                      <div className="cxo-banner-content">
                        <div data-aos="fade-up">
                          <h1>{`${pageDetail.detail.banner_title}`}</h1>
                        </div>
                        <div className="cxo-banner-desc" data-aos="fade-up" data-aos-delay="300">
                          <p>{`${pageDetail.detail.banner_description}`}</p>
                        </div>
                        <div className="cxo-banner-btn" data-aos="fade-up" data-aos-delay="500">
                          <a href={`${pageDetail.detail.banner_btn_link}`} target="_blank" rel="noreferrer">{`${pageDetail.detail.banner_btn_text}`}</a>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="cxo-banner-video">
                        {
                          pageDetail.detail.banner_video ?
                            <video data-aos="fade-left" data-aos-duration="1600" autoPlay={true} muted loop>
                              <source src={`${API_IMG_URL}pages/${pageDetail.detail.banner_video}`} type="video/mp4" />
                            </video>
                            : null
                        }
                      </div>
                    </div>
                  </div>
                </div>

                <div className="cxo-social-section">
                  <div className="cxo-social-row" data-aos="fade-right" data-aos-delay="400">
                    <a href='https://www.facebook.com/CorporalityG' target="_blank" rel="noreferrer"><i className="fa fa-facebook-f"></i></a>
                    <a href='https://twitter.com/corporalityg' target="_blank" rel="noreferrer"><i className="fa fa-twitter"></i></a>
                    <a href='https://www.instagram.com/corporalityg/' target="_blank" rel="noreferrer"><i className="fa fa-instagram"></i></a>
                    <a href='https://www.linkedin.com/company/corporality/' target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a>
                    <a href='https://in.pinterest.com/CorporalityG/' target="_blank" rel="noreferrer"><i className="fa fa-pinterest"></i></a>
                    <a href='https://www.youtube.com/channel/UC4EISt8kHI4zzpmbIBMIBbg' target="_blank" rel="noreferrer"><i className="fa fa-youtube-play"></i></a>
                  </div>
                </div>
              </div>

              <div className="cxo-lifecycle-section">
                <div className="container-lg">
                  <div className="row cxo-lifecycle-row">
                    <div className="col-lg-6">
                      <div className="cxo-lc-content">
                        <div data-aos="fade-up">
                          <h2>{`${pageDetail.detail.guide_title}`}</h2>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="300">
                          <p>{`${pageDetail.detail.guide_description}`}</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="cxo-lc-boxes">
                        {pageDetail.detail.guide_image && <img src={`${API_IMG_URL}pages/${pageDetail.detail.guide_image}`} alt={`${pageDetail.detail.guide_title}`} className="lifecycle-favicon" data-aos="zoom-in-down" />}

                        <div className="row">
                          <div className="col-sm-6 cxo-lc-box-col">
                            <div className="cxo-lc-box cxo-lc-box-1">
                              <img src={`${BASE_URL}/img/CxoStrategy/lifecycle-bg.png`} alt="lifecycle-bg" data-aos="zoom-in-up" className="lifecycle-bg" />
                              <div className="lc-box-content">
                                <div className="lc-box-title" data-aos="fade-up">{`${pageDetail.detail.guide_item_1_title}`}</div>
                                <div className="lc-box-icon" data-aos="fade-up">
                                  {pageDetail.detail.guide_item_1_image && <img src={`${API_IMG_URL}pages/${pageDetail.detail.guide_item_1_image}`} alt={`${pageDetail.detail.guide_item_1_title}`} />}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-sm-6 cxo-lc-box-col">
                            <div className="cxo-lc-box cxo-lc-box-2">
                              <img src={`${BASE_URL}/img/CxoStrategy/lifecycle-bg.png`} alt="lifecycle-bg" data-aos="zoom-in-up" className="lifecycle-bg" />
                              <div className="lc-box-content">
                                <div className="lc-box-title" data-aos="fade-up">{`${pageDetail.detail.guide_item_2_title}`}</div>
                                <div className="lc-box-icon" data-aos="fade-up">
                                  {pageDetail.detail.guide_item_2_image && <img src={`${API_IMG_URL}pages/${pageDetail.detail.guide_item_2_image}`} alt={`${pageDetail.detail.guide_item_2_title}`} />}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-sm-6 cxo-lc-box-col">
                            <div className="cxo-lc-box cxo-lc-box-3">
                              <img src={`${BASE_URL}/img/CxoStrategy/lifecycle-bg.png`} alt="lifecycle-bg" data-aos="zoom-in-up" className="lifecycle-bg" />
                              <div className="lc-box-content">
                                <div className="lc-box-title" data-aos="fade-up">{`${pageDetail.detail.guide_item_3_title}`}</div>
                                <div className="lc-box-icon" data-aos="fade-up">
                                  {pageDetail.detail.guide_item_3_image && <img src={`${API_IMG_URL}pages/${pageDetail.detail.guide_item_3_image}`} alt={`${pageDetail.detail.guide_item_3_title}`} />}
                                  {/* <img src={`${BASE_URL}/img/CxoStrategy/Growth-Facilitator-chart.png`} alt="Growth Facilitator Chart" /> */}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-sm-6 cxo-lc-box-col">
                            <div className="cxo-lc-box cxo-lc-box-4">
                              <img src={`${BASE_URL}/img/CxoStrategy/lifecycle-bg.png`} alt="lifecycle-bg" data-aos="zoom-in-up" className="lifecycle-bg" />
                              <div className="lc-box-content">
                                <div className="lc-box-title" data-aos="fade-up">{`${pageDetail.detail.guide_item_4_title}`}</div>
                                <div className="lc-box-icon" data-aos="fade-up">
                                  {pageDetail.detail.guide_item_4_image && <img src={`${API_IMG_URL}pages/${pageDetail.detail.guide_item_4_image}`} alt={`${pageDetail.detail.guide_item_4_title}`} />}
                                  {/* <img src={`${BASE_URL}/img/CxoStrategy/Inventor-blub.png`} alt="Inventor Blub" /> */}
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
                          <h2>{`${pageDetail.detail.what_expect_title}`}</h2>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="300">
                          <p>{`${pageDetail.detail.what_expect_subtitle}`}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row cxo-expect-content-row">
                    <div className="col-lg-6 cxo-ec-col">
                      <div className="cxo-expect-banner">
                        <div className='cxo-expect-bg' data-aos="zoom-in-up" data-aos-duration="1500"></div>
                        {pageDetail.detail.what_expect_image && <img src={`${API_IMG_URL}pages/${pageDetail.detail.what_expect_image}`} alt={`${pageDetail.detail.what_expect_title}`} data-aos="zoom-in-up" />}
                        <div className="cxo-eb-title" data-aos="fade-up">{`${pageDetail.detail.what_expect_image_caption}`}</div>
                      </div>
                    </div>

                    <div className="col-lg-6 cxo-ec-col">
                      <div className="cxo-expect-content" data-aos="fade-up" data-aos-delay="300">
                        <div dangerouslySetInnerHTML={{ __html: pageDetail.detail.what_expect_description }}></div>
                      </div>
                      <Link className="cxo-expect-btn" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000" to={`/${pageDetail.detail.what_expect_btn_link ?? ''}`}>{`${pageDetail.detail.what_expect_btn_text}`}</Link>
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
                          <h2>{`${pageDetail.detail.leverage_model_title}`}</h2>
                        </div>
                        <div className="cxo-lm-title-desc" data-aos="fade-up" data-aos-delay="300">
                          <p>{`${pageDetail.detail.leverage_model_description}`}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row cxo-lm-boxes-row">
                    <LeverageModelItem
                      icon={pageDetail.detail.leverage_model_item_1_image && `${API_IMG_URL}pages/${pageDetail.detail.leverage_model_item_1_image}`}
                      title={`${pageDetail.detail.leverage_model_item_1_title}`}
                    />

                    <LeverageModelItem
                      icon={pageDetail.detail.leverage_model_item_2_image && `${API_IMG_URL}pages/${pageDetail.detail.leverage_model_item_2_image}`}
                      title={`${pageDetail.detail.leverage_model_item_2_title}`}
                    />

                    <LeverageModelItem
                      icon={pageDetail.detail.leverage_model_item_3_image && `${API_IMG_URL}pages/${pageDetail.detail.leverage_model_item_3_image}`}
                      title={`${pageDetail.detail.leverage_model_item_3_title}`}
                    />

                    <LeverageModelItem
                      icon={pageDetail.detail.leverage_model_item_4_image && `${API_IMG_URL}pages/${pageDetail.detail.leverage_model_item_4_image}`}
                      title={`${pageDetail.detail.leverage_model_item_4_title}`}
                    />
                  </div>
                </div>
              </div>

              <div className="cxo-faqs-section">
                <div className="container-lg">
                  <div className="row cxo-faqs-title-row" data-aos="zoom-in">
                    <div className="col-lg-12">
                      <div className="cxo-ft-content">
                        <div className="cxo-ft-subtitle" data-aos="zoom-in-up" data-aos-delay="100">{`${pageDetail.detail.faq_title}`}</div>
                        <h2 data-aos="zoom-in-down" data-aos-delay="200">{`${pageDetail.detail.faq_subtitle}`}</h2>
                        <div className="cxo-ft-btn" onClick={handelToggleFaq} data-aos="zoom-in-right" data-aos-delay="300">Show <i className={`fa ${showFaq ? "fa-angle-up" : "fa-angle-down"}`}></i></div>
                      </div>
                    </div>
                  </div>

                  <div className={`row cxo-faqs-list-row ${showFaq ? "" : "hide"}`}>
                    <div className="col-lg-12">
                      <div className="cxo-faqs-list">
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
            </>
            : null
        }

        <ServicesClients />

        <ServicesInsights />

        <ServicesAskQuote
          action={`https://forms.zohopublic.com.au/corporality/form/AskQuoteCXOStrategyCorporality/formperma/3CfaHcU0yZY-Gmm5Luu4jEr5qsoAZtDkJ2JrldG-KoU/htmlRecords/submit`}
        />
      </HelmetProvider>
    </>
  );
}

export default CxoStrategy;
