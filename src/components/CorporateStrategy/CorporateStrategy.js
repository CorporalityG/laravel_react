import React, { useState, useEffect } from "react";
import Aos from "aos";
import './CorporateStrategy.css'
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../config'
import { ServicesAskQuote } from "../ServicesAskQuote/ServicesAskQuote";
import ServicesClients from "../ServicesClients/ServicesClients";
import ServicesInsights from "../ServicesInsights/ServicesInsights";
import Accordion from 'react-bootstrap/Accordion'
import { WhyHireItem } from "./WhyHireItem";
import { MethodologyProcessItem } from "./MethodologyProcessItem";
import { Helmet } from "react-helmet";

function CorporateStrategy() {

  const page_slug = 'corporate-strategy';

  const [pageDetail, setPageDetail] = useState([]);

  useEffect(() => {
    Aos.init({
      duration: 2000,
    });

    getPageDetail()
  });

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
      <Helmet>
        {pageDetail.meta_title && <title>{`${pageDetail.meta_title}`}</title>}
        {pageDetail.meta_description && <meta name="description" content={`${pageDetail.meta_description}`} />}
        {pageDetail.meta_keywords && <meta name="keywords" content={pageDetail.meta_keywords} />}
        <link rel="canonical" href={`${BASE_URL}/corporate-strategy/`} />
      </Helmet>

      {
        pageDetail.detail ?
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
                        <h1>{`${pageDetail.detail.banner_title}`}</h1>
                      </div>
                      <div className="coo-banner-subtitle" data-aos="fade-up" data-aos-delay="300">{`${pageDetail.detail.banner_subtitle}`}</div>
                      <div className="coo-banner-desc" data-aos="fade-up" data-aos-delay="500">
                        <p>{`${pageDetail.detail.banner_description}`}</p>
                      </div>
                      <div className="coo-banner-btn" data-aos="fade-up" data-aos-delay="500">
                        <a href={`${pageDetail.detail.banner_btn_link}`} target="_blank">{`${pageDetail.detail.banner_btn_text}`}</a>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="coo-banner-video">
                      <video data-aos="fade-left" data-aos-duration="1600" autoPlay={true} muted loop>
                        <source src={`${API_IMG_URL}pages/${pageDetail.detail.banner_video}`} type="video/mp4" />
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
                      <img src={`${API_IMG_URL}pages/${pageDetail.detail.strategic_issues_image}`} alt="Strategic Issues" data-aos="zoom-in-up" />
                    </div>
                  </div>

                  <div className="col-lg-6 coo-ls-col">
                    <div className="coo-ls-content coo-ls-difficulty">
                      <div data-aos="fade-up" data-aos-delay="100">
                        <h2>{`${pageDetail.detail.strategic_issues_item_1_title}`}</h2>
                      </div>
                      <div data-aos="fade-up" data-aos-delay="300">
                        <p>{`${pageDetail.detail.strategic_issues_item_1_description}`}</p>
                      </div>
                    </div>

                    <div className="coo-ls-content coo-ls-finding">
                      <div data-aos="fade-up" data-aos-delay="100">
                        <h2>{`${pageDetail.detail.strategic_issues_item_2_title}`}</h2>
                      </div>
                      <div data-aos="fade-up" data-aos-delay="300">
                        <p>{`${pageDetail.detail.strategic_issues_item_2_description}`}</p>
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
                        <h2>{`${pageDetail.detail.methodology_process_title}`}</h2>
                      </div>
                      <div data-aos="fade-up" data-aos-delay="300">
                        <p>{`${pageDetail.detail.methodology_process_description}`}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row coo-mp-items-row" data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="100">
                  <div className="col-lg-3 coo-mp-items-col">
                    <div className="coo-mp-item-heading" data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="100">{`${pageDetail.detail.methodology_process_audit_title}`}</div>
                  </div>
                  <div className="col-lg-1 coo-mp-items-col">
                    <div className="coo-mp-ih-dot" data-aos="zoom-in" data-aos-duration="2200" data-aos-delay="200"></div>
                  </div>
                  <div className="col-lg-8 coo-mp-items-col">
                    <div className="coo-mp-items">
                      <MethodologyProcessItem
                        icon={`${API_IMG_URL}pages/${pageDetail.detail.methodology_process_audit_item_1_image}`}
                        title={`${pageDetail.detail.methodology_process_audit_item_1_title}`}
                      />

                      <MethodologyProcessItem
                        icon={`${API_IMG_URL}pages/${pageDetail.detail.methodology_process_audit_item_2_image}`}
                        title={`${pageDetail.detail.methodology_process_audit_item_2_title}`}
                      />

                      <MethodologyProcessItem
                        icon={`${API_IMG_URL}pages/${pageDetail.detail.methodology_process_audit_item_3_image}`}
                        title={`${pageDetail.detail.methodology_process_audit_item_3_title}`}
                      />

                      <MethodologyProcessItem
                        icon={`${API_IMG_URL}pages/${pageDetail.detail.methodology_process_audit_item_4_image}`}
                        title={`${pageDetail.detail.methodology_process_audit_item_4_title}`}
                      />
                    </div>
                  </div>
                </div>

                <div className="row coo-mp-items-row" data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="100">
                  <div className="col-lg-3 coo-mp-items-col">
                    <div className="coo-mp-item-heading" data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="100">{`${pageDetail.detail.methodology_process_vision_title}`}</div>
                  </div>
                  <div className="col-lg-1 coo-mp-items-col">
                    <div className="coo-mp-ih-dot" data-aos="zoom-in" data-aos-duration="2200" data-aos-delay="200"></div>
                  </div>
                  <div className="col-lg-8 coo-mp-items-col">
                    <div className="coo-mp-items">
                      <MethodologyProcessItem
                        icon={`${API_IMG_URL}pages/${pageDetail.detail.methodology_process_vision_item_1_image}`}
                        title={`${pageDetail.detail.methodology_process_vision_item_1_title}`}
                      />

                      <MethodologyProcessItem
                        icon={`${API_IMG_URL}pages/${pageDetail.detail.methodology_process_vision_item_2_image}`}
                        title={`${pageDetail.detail.methodology_process_vision_item_2_title}`}
                      />

                      <MethodologyProcessItem
                        icon={`${API_IMG_URL}pages/${pageDetail.detail.methodology_process_vision_item_3_image}`}
                        title={`${pageDetail.detail.methodology_process_vision_item_3_title}`}
                      />
                    </div>
                  </div>
                </div>

                <div className="row coo-mp-items-row" data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="100">
                  <div className="col-lg-3 coo-mp-items-col">
                    <div className="coo-mp-item-heading" data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="100">{`${pageDetail.detail.methodology_process_strategizing_title}`}</div>
                  </div>
                  <div className="col-lg-1 coo-mp-items-col">
                    <div className="coo-mp-ih-dot" data-aos="zoom-in" data-aos-duration="2200" data-aos-delay="200"></div>
                  </div>
                  <div className="col-lg-8 coo-mp-items-col">
                    <div className="coo-mp-items">
                      <MethodologyProcessItem
                        icon={`${API_IMG_URL}pages/${pageDetail.detail.methodology_process_strategizing_item_1_image}`}
                        title={`${pageDetail.detail.methodology_process_strategizing_item_1_title}`}
                      />

                      <MethodologyProcessItem
                        icon={`${API_IMG_URL}pages/${pageDetail.detail.methodology_process_strategizing_item_2_image}`}
                        title={`${pageDetail.detail.methodology_process_strategizing_item_2_title}`}
                      />

                      <MethodologyProcessItem
                        icon={`${API_IMG_URL}pages/${pageDetail.detail.methodology_process_strategizing_item_3_image}`}
                        title={`${pageDetail.detail.methodology_process_strategizing_item_3_title}`}
                      />

                      <MethodologyProcessItem
                        icon={`${API_IMG_URL}pages/${pageDetail.detail.methodology_process_strategizing_item_4_image}`}
                        title={`${pageDetail.detail.methodology_process_strategizing_item_4_title}`}
                      />
                    </div>
                  </div>
                </div>

                <div className="row coo-mp-items-row" data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="100">
                  <div className="col-lg-3 coo-mp-items-col">
                    <div className="coo-mp-item-heading" data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="100">{`${pageDetail.detail.methodology_process_task_force_title}`}</div>
                  </div>
                  <div className="col-lg-1 coo-mp-items-col">
                    <div className="coo-mp-ih-dot" data-aos="zoom-in" data-aos-duration="2200" data-aos-delay="200"></div>
                  </div>
                  <div className="col-lg-8 coo-mp-items-col">
                    <div className="coo-mp-items">
                      <MethodologyProcessItem
                        icon={`${API_IMG_URL}pages/${pageDetail.detail.methodology_process_task_force_item_1_image}`}
                        title={`${pageDetail.detail.methodology_process_task_force_item_1_title}`}
                      />

                      <MethodologyProcessItem
                        icon={`${API_IMG_URL}pages/${pageDetail.detail.methodology_process_task_force_item_2_image}`}
                        title={`${pageDetail.detail.methodology_process_task_force_item_2_title}`}
                      />

                      <MethodologyProcessItem
                        icon={`${API_IMG_URL}pages/${pageDetail.detail.methodology_process_task_force_item_3_image}`}
                        title={`${pageDetail.detail.methodology_process_task_force_item_3_title}`}
                      />

                      <MethodologyProcessItem
                        icon={`${API_IMG_URL}pages/${pageDetail.detail.methodology_process_task_force_item_4_image}`}
                        title={`${pageDetail.detail.methodology_process_task_force_item_4_title}`}
                      />
                    </div>
                  </div>
                </div>

                <div className="row coo-mp-items-row" data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="100">
                  <div className="col-lg-3 coo-mp-items-col">
                    <div className="coo-mp-item-heading" data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="100">{`${pageDetail.detail.methodology_process_asset_building_title}`}</div>
                  </div>
                  <div className="col-lg-1 coo-mp-items-col">
                    <div className="coo-mp-ih-dot" data-aos="zoom-in" data-aos-duration="2200" data-aos-delay="200"></div>
                  </div>
                  <div className="col-lg-8 coo-mp-items-col">
                    <div className="coo-mp-items">
                      <MethodologyProcessItem
                        icon={`${API_IMG_URL}pages/${pageDetail.detail.methodology_process_asset_building_item_1_image}`}
                        title={`${pageDetail.detail.methodology_process_asset_building_item_1_title}`}
                      />

                      <MethodologyProcessItem
                        icon={`${API_IMG_URL}pages/${pageDetail.detail.methodology_process_asset_building_item_2_image}`}
                        title={`${pageDetail.detail.methodology_process_asset_building_item_2_title}`}
                      />
                    </div>
                  </div>
                </div>

                <div className="row coo-mp-items-row" data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="100">
                  <div className="col-lg-3 coo-mp-items-col">
                    <div className="coo-mp-item-heading" data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="100">{`${pageDetail.detail.methodology_process_plan_title}`}</div>
                  </div>
                  <div className="col-lg-1 coo-mp-items-col">
                    <div className="coo-mp-ih-dot" data-aos="zoom-in" data-aos-duration="2200" data-aos-delay="200"></div>
                  </div>
                  <div className="col-lg-8 coo-mp-items-col">
                    <div className="coo-mp-items">
                      <MethodologyProcessItem
                        icon={`${API_IMG_URL}pages/${pageDetail.detail.methodology_process_plan_item_1_image}`}
                        title={`${pageDetail.detail.methodology_process_plan_item_1_title}`}
                      />

                      <MethodologyProcessItem
                        icon={`${API_IMG_URL}pages/${pageDetail.detail.methodology_process_plan_item_2_image}`}
                        title={`${pageDetail.detail.methodology_process_plan_item_2_title}`}
                      />
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
                        <h2>{`${pageDetail.detail.what_expect_title}`}</h2>
                      </div>
                      <div data-aos="fade-up" data-aos-delay="300">
                        <p>{`${pageDetail.detail.what_expect_subtitle}`}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row coo-expect-content-row">
                  <div className="col-lg-6 coo-ec-col">
                    <div className="coo-es-items">
                      <div className="coo-es-item coo-es-item-top" data-aos="zoom-in">
                        <div className="es-item-icon">
                          <img src={`${API_IMG_URL}pages/${pageDetail.detail.what_expect_item_1_image}`} alt={`${pageDetail.detail.what_expect_item_1_title}`} />
                        </div>
                        <div className="es-item-title">{`${pageDetail.detail.what_expect_item_1_title}`}</div>
                      </div>

                      <div className="coo-es-item-middle">
                        <div className="coo-es-item coo-es-item-right" data-aos="zoom-in">
                          <div className="es-item-icon">
                            <img src={`${API_IMG_URL}pages/${pageDetail.detail.what_expect_item_2_image}`} alt={`${pageDetail.detail.what_expect_item_2_title}`} />
                          </div>
                          <div className="es-item-title">{`${pageDetail.detail.what_expect_item_2_title}`}</div>
                        </div>

                        <div className="coo-es-item-3" data-aos="zoom-in">
                          <div className="es-item-heading">
                            <div className="es-item-h-border">
                              <div className="es-item-h-title" data-aos="zoom-in">{`${pageDetail.detail.what_expect_strategy_title}`}</div>
                            </div>
                          </div>
                        </div>

                        <div className="coo-es-item coo-es-item-left" data-aos="zoom-in">
                          <div className="es-item-icon">
                            <img src={`${API_IMG_URL}pages/${pageDetail.detail.what_expect_item_4_image}`} alt={`${pageDetail.detail.what_expect_item_4_title}`} />
                          </div>
                          <div className="es-item-title">{`${pageDetail.detail.what_expect_item_4_title}`}</div>
                        </div>
                      </div>

                      <div className="coo-es-item coo-es-item-bottom" data-aos="zoom-in">
                        <div className="es-item-icon">
                          <img src={`${API_IMG_URL}pages/${pageDetail.detail.what_expect_item_3_image}`} alt={`${pageDetail.detail.what_expect_item_3_title}`} />
                        </div>
                        <div className="es-item-title">{`${pageDetail.detail.what_expect_item_3_title}`}</div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 coo-ec-col">
                    <div className="coo-expect-content" data-aos="fade-up" data-aos-delay="300">
                      <p>{`${pageDetail.detail.what_expect_description}`}</p>
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
                        <h2>{`${pageDetail.detail.why_hire_title}`}</h2>
                      </div>
                      <div className="coo-wh-title-desc" data-aos="fade-up" data-aos-delay="300">
                        <p>{`${pageDetail.detail.why_hire_description}`}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row coo-wh-boxes-row">
                  <WhyHireItem
                    icon={`${API_IMG_URL}pages/${pageDetail.detail.why_hire_item_1_image}`}
                    title={`${pageDetail.detail.why_hire_item_1_title}`}
                  />

                  <WhyHireItem
                    icon={`${API_IMG_URL}pages/${pageDetail.detail.why_hire_item_2_image}`}
                    title={`${pageDetail.detail.why_hire_item_2_title}`}
                  />

                  <WhyHireItem
                    icon={`${API_IMG_URL}pages/${pageDetail.detail.why_hire_item_3_image}`}
                    title={`${pageDetail.detail.why_hire_item_3_title}`}
                  />

                  <WhyHireItem
                    icon={`${API_IMG_URL}pages/${pageDetail.detail.why_hire_item_4_image}`}
                    title={`${pageDetail.detail.why_hire_item_4_title}`}
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
                        <h2>{`${pageDetail.detail.success_strategy_title}`}</h2>
                      </div>
                      <div className="coo-ss-desc" data-aos="fade-up" data-aos-delay="300">
                        <p>{`${pageDetail.detail.success_strategy_description}`}</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="coo-ss-banner">
                      <img src={`${API_IMG_URL}pages/${pageDetail.detail.success_strategy_image}`} alt={`${pageDetail.detail.success_strategy_title}`} data-aos="zoom-in-up" />
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
                      <div className="coo-ft-subtitle" data-aos="zoom-in-up" data-aos-delay="100">{`${pageDetail.detail.faq_title}`}</div>
                      <h2 data-aos="zoom-in-down" data-aos-delay="200">{`${pageDetail.detail.faq_subtitle}`}</h2>
                      <div className="coo-ft-btn" onClick={handelToggleFaq} data-aos="zoom-in-right" data-aos-delay="300">Show <i className={`fa ${showFaq ? "fa-angle-up" : "fa-angle-down"}`}></i></div>
                    </div>
                  </div>
                </div>

                <div className={`row coo-faqs-list-row ${showFaq ? "" : "hide"}`}>
                  <div className="col-lg-12">
                    <div className="coo-faqs-list">
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
        action={`https://forms.zohopublic.com.au/corporality/form/AskQuoteCorporateStrategyCorporality/formperma/WaJWy-U1801p17xHSqXy9JGHGYfX5LsdU0erb65w3gs/htmlRecords/submit`}
      />
    </>
  );
}

export default CorporateStrategy;
