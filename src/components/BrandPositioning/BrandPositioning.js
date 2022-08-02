import React, { useState, useEffect } from "react";
import Aos from "aos";
import "./BrandPositioningNew.css";
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../config'
import { ServicesAskQuote } from "../ServicesAskQuote/ServicesAskQuote";
import { ProcessItem } from "./ProcessItem";
import ServicesClients from "../ServicesClients/ServicesClients";
import ServicesInsights from "../ServicesInsights/ServicesInsights";
import AllCardsNew from "./AllCardsNew/AllCardsNew";
import Accordion from 'react-bootstrap/Accordion'
import { Helmet } from "react-helmet";

export default function BrandPositioning() {

  const page_slug = 'brand-positioning';

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
      <Helmet>
        {pageDetail.meta_title && <title>{`${pageDetail.meta_title}`}</title>}
        {pageDetail.meta_description && <meta name="description" content={`${pageDetail.meta_description}`} />}
        {pageDetail.meta_keywords && <meta name="keywords" content={pageDetail.meta_keywords} />}
        <link rel="canonical" href={`${BASE_URL}/brand-positioning/`} />
      </Helmet>

      {
        pageDetail.detail ?
          <>
            <div className="bp-banner-section">
              <img src={`${BASE_URL}/img/BrandPositioning/banner-rec-1.png`} alt="Rec 1" className="bp-b-rec-1" />
              <img src={`${BASE_URL}/img/BrandPositioning/banner-rec-2.png`} alt="Rec 2" className="bp-b-rec-2" />
              <img src={`${BASE_URL}/img/BrandPositioning/banner-rec-3.png`} alt="Rec 3" className="bp-b-rec-3" />
              <img src={`${BASE_URL}/img/BrandPositioning/banner-rec-4.png`} alt="Rec 4" className="bp-b-rec-4" />

              <div className="container-lg">
                <div className="row bp-banner-row">
                  <div className="col-lg-6">
                    <div className="bp-banner-content">
                      <div data-aos="fade-up">
                        <h1>{`${pageDetail.detail.banner_title}`}</h1>
                      </div>
                      <div className="bp-banner-subtitle" data-aos="fade-up" data-aos-delay="300">{`${pageDetail.detail.banner_subtitle}`}</div>
                      <div data-aos="fade-up" data-aos-delay="300">
                        <p>{`${pageDetail.detail.banner_description}`}</p>
                      </div>
                      <div className="bp-banner-btn" data-aos="fade-up" data-aos-delay="500">
                        <a href={`${pageDetail.detail.banner_btn_link}`} target="_blank">{`${pageDetail.detail.banner_btn_text}`}</a>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 bp-banner-right-col">
                    <div className="bp-banner" data-aos="fade-left">
                      <img src={`${BASE_URL}/img/BrandPositioning/banner-vector.png`} alt="GROWING UP IS AN ADVENTURE" className="bp-banner-img" />
                    </div>

                    <div className="bp-banner-ici" data-aos="fade-left" data-aos-offset="500" data-aos-duration="3000" data-aos-anchor="#brand-anchor">
                      {pageDetail.detail.improved_company_image && <img src={`${API_IMG_URL}pages/${pageDetail.detail.improved_company_image}`} alt="improved-company-image" />}
                    </div>

                    <div className="bp-banner-cl" data-aos="fade-left" data-aos-offset="500" data-aos-duration="1500" data-aos-anchor="#brand-anchor">
                      {pageDetail.detail.customer_loyalty_image && <img src={`${API_IMG_URL}pages/${pageDetail.detail.customer_loyalty_image}`} alt="customer-loyalty" />}
                    </div>

                    <div className="bp-banner-ri" data-aos="fade-left" data-aos-offset="500" data-aos-duration="2000" data-aos-anchor="#brand-anchor">
                      {pageDetail.detail.relatable_identity_image && <img src={`${API_IMG_URL}pages/${pageDetail.detail.relatable_identity_image}`} alt="relatable-identity" />}
                    </div>

                    <div className="bp-banner-oeve" data-aos="fade-left" data-aos-offset="500" data-aos-duration="1000" data-aos-anchor="#brand-anchor">
                      {pageDetail.detail.omni_effect_image && <img src={`${API_IMG_URL}pages/${pageDetail.detail.omni_effect_image}`} alt="omni-effect-vs-experiance" />}
                    </div>

                    <div className="bp-banner-sbs" data-aos="fade-up" data-aos-offset="500" data-aos-duration="2000" data-aos-anchor="#brand-anchor">
                      {pageDetail.detail.successfull_branding_strategy_image && <img src={`${API_IMG_URL}pages/${pageDetail.detail.successfull_branding_strategy_image}`} alt="successfull-branding-strategy" />}
                    </div>

                  </div>
                </div>
              </div>

              <div className="bp-social-section">
                <div className="bp-social-row" data-aos="fade-right" data-aos-delay="400">
                  <a href='https://www.facebook.com/CorporalityG' target="_blank"><i className="fa fa-facebook-f"></i></a>
                  <a href='https://twitter.com/corporalityg' target="_blank"><i className="fa fa-twitter"></i></a>
                  <a href='https://www.instagram.com/corporalityg/' target="_blank"><i className="fa fa-instagram"></i></a>
                  <a href='https://www.linkedin.com/company/corporality/' target="_blank"><i className="fa fa-linkedin"></i></a>
                  <a href='https://in.pinterest.com/CorporalityG/' target="_blank"><i className="fa fa-pinterest"></i></a>
                  <a href='https://www.youtube.com/channel/UC4EISt8kHI4zzpmbIBMIBbg' target="_blank"><i className="fa fa-youtube-play"></i></a>
                </div>
              </div>
            </div>

            <div className="bp-process-section">
              <div className="container-lg">
                <div className="row bp-p-title-row">
                  <div className="col-lg-12">
                    <div className="bp-p-title-content">
                      <div data-aos="fade-up">
                        <h2>{`${pageDetail.detail.process_title ?? ''}`}</h2>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row bp-p-boxes-row">
                  <ProcessItem
                    number={`01`}
                    title={`${pageDetail.detail.process_step_1_title}`}
                    subtitle={`${pageDetail.detail.process_step_1_subtitle}`}
                  />

                  <ProcessItem
                    number={`02`}
                    title={`${pageDetail.detail.process_step_2_title}`}
                    subtitle={`${pageDetail.detail.process_step_2_subtitle}`}
                  />

                  <ProcessItem
                    number={`03`}
                    title={`${pageDetail.detail.process_step_3_title}`}
                    subtitle={`${pageDetail.detail.process_step_3_subtitle}`}
                  />

                  <ProcessItem
                    number={`04`}
                    title={`${pageDetail.detail.process_step_4_title}`}
                    subtitle={`${pageDetail.detail.process_step_4_subtitle}`}
                  />

                  <ProcessItem
                    number={`05`}
                    title={`${pageDetail.detail.process_step_5_title}`}
                    subtitle={`${pageDetail.detail.process_step_5_subtitle}`}
                  />

                  <ProcessItem
                    number={`06`}
                    title={`${pageDetail.detail.process_step_6_title}`}
                    subtitle={`${pageDetail.detail.process_step_6_subtitle}`}
                  />
                </div>
              </div>
            </div>

            <div className="bp-know-section">
              <div className="container-lg">
                <div className="row bp-know-row">
                  <div className="col-lg-6 bp-know-col">
                    <div className="bp-know-content">
                      <div data-aos="fade-up">
                        <h2>{`${pageDetail.detail.framework_methodology_title ?? ''}`}</h2>
                      </div>
                      <div className="bp-kc-subtitle" data-aos="fade-up" data-aos-delay="300">{`${pageDetail.detail.framework_methodology_subtitle ?? ''}`}</div>
                      <div className="row bp-k-boxes-row">
                        <div className="col-lg-4 col-sm-4 pl-lg-0 bp-k-box-col">
                          <div className="bp-k-box" data-aos="fade-up" data-aos-delay="500">
                            {pageDetail.detail.framework_methodology_item_1_image && <img src={`${API_IMG_URL}pages/${pageDetail.detail.framework_methodology_item_1_image}`} alt={`${pageDetail.detail.framework_methodology_item_1_title ?? ''}`} />}
                            <div className="bp-k-box-title">{`${pageDetail.detail.framework_methodology_item_1_title ?? ''}`}</div>
                          </div>
                        </div>

                        <div className="col-lg-4 col-sm-4 bp-k-box-col" data-aos="fade-up" data-aos-delay="550">
                          <div className="bp-k-box">
                            {pageDetail.detail.framework_methodology_item_2_image && <img src={`${API_IMG_URL}pages/${pageDetail.detail.framework_methodology_item_2_image}`} alt={`${pageDetail.detail.framework_methodology_item_2_title ?? ''}`} />}
                            <div className="bp-k-box-title">{`${pageDetail.detail.framework_methodology_item_2_title ?? ''}`}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 bp-know-col">
                    <div className="bp-know-banner">
                      <div className="bp-kb-img" data-aos="zoom-in">
                        {pageDetail.detail.framework_methodology_image && <img src={`${API_IMG_URL}pages/${pageDetail.detail.framework_methodology_image}`} alt={`${pageDetail.detail.framework_methodology_title}`} />}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bp-faqs-section">
              <div className="container-lg">
                <div className="row bp-faqs-title-row" data-aos="zoom-in">
                  <div className="col-lg-12">
                    <div className="bp-ft-content">
                      <div className="bp-ft-subtitle" data-aos="zoom-in-up" data-aos-delay="100">{`${pageDetail.detail.faq_title ?? ''}`}</div>
                      <h2 data-aos="zoom-in-down" data-aos-delay="200">{`${pageDetail.detail.faq_subtitle ?? ''}`}</h2>
                      <div className="bp-ft-btn" onClick={handelToggleFaq} data-aos="zoom-in-right" data-aos-delay="300">Show <i className={`fa ${showFaq ? "fa-angle-up" : "fa-angle-down"}`}></i></div>
                    </div>
                  </div>
                </div>

                <div className={`row bp-faqs-list-row ${showFaq ? "" : "hide"}`}>
                  <div className="col-lg-12">
                    <div className="bp-faqs-list">
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

            <div className="bp-indomitable-section">
              <div className="bp-i-rec-1" data-aos="fade-right">
                <img src={`${BASE_URL}/img/BrandPositioning/indomitable-rec-1.png`} alt="Rec 1" />
              </div>
              <div className="bp-i-rec-2" data-aos="fade-right">
                <img src={`${BASE_URL}/img/BrandPositioning/indomitable-rec-2.png`} alt="Rec 2" />
              </div>
              <div className="bp-i-vector" data-aos="fade-left">
                <img src={`${BASE_URL}/img/BrandPositioning/indomitable-vector.png`} alt="Vector" />
              </div>

              <div className="container-lg">
                <div className="row bp-indomitable-title-row">
                  <div className="col-lg-12">
                    <div className="bp-i-title-content" data-aos="zoom-in-down">
                      <h2>{`${pageDetail.detail.indomitable_title ?? ''}`}</h2>
                    </div>
                  </div>
                </div>

                <div className="row bp-indomitable-content-row">
                  <div className="col-lg-10 offset-lg-1">
                    <Accordion className="bp-indomitable-accordion-main" data-aos="fade-up">
                      <Accordion.Item eventKey="0" data-aos="fade-up">
                        <Accordion.Header>
                          <div className="bp-ia-heading">
                            {pageDetail.detail.indomitable_item_1_icon && <img src={`${API_IMG_URL}pages/${pageDetail.detail.indomitable_item_1_icon}`} alt={`${pageDetail.detail.indomitable_item_1_title}`} />}
                            <span>{`${pageDetail.detail.indomitable_item_1_title}`}</span>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
                          <div className="bp-ia-content">
                            <div className="row">
                              <div className="col-md-2 col-sm-3">
                                {pageDetail.detail.indomitable_item_1_image && <img src={`${API_IMG_URL}pages/${pageDetail.detail.indomitable_item_1_image}`} alt={`${pageDetail.detail.indomitable_item_1_title}`} className="bp-ia-banner" />}
                              </div>
                              <div className="col-md-10 col-sm-9">
                                <div className="bp-ia-content">
                                  <p>{`${pageDetail.detail.indomitable_item_1_description}`}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="1" data-aos="fade-up">
                        <Accordion.Header>
                          <div className="bp-ia-heading">
                            {pageDetail.detail.indomitable_item_2_icon && <img src={`${API_IMG_URL}pages/${pageDetail.detail.indomitable_item_2_icon}`} alt={`${pageDetail.detail.indomitable_item_2_title}`} />}
                            <span>{`${pageDetail.detail.indomitable_item_2_title}`}</span>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
                          <div className="bp-ia-content">
                            <div className="row">
                              <div className="col-md-2 col-sm-3">
                                {pageDetail.detail.indomitable_item_2_image && <img src={`${API_IMG_URL}pages/${pageDetail.detail.indomitable_item_2_image}`} alt={`${pageDetail.detail.indomitable_item_2_title}`} className="bp-ia-banner" />}
                              </div>
                              <div className="col-md-10 col-sm-9">
                                <div className="bp-ia-content">
                                  <p>{`${pageDetail.detail.indomitable_item_2_description}`}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="2" data-aos="fade-up">
                        <Accordion.Header>
                          <div className="bp-ia-heading">
                            {pageDetail.detail.indomitable_item_3_icon && <img src={`${API_IMG_URL}pages/${pageDetail.detail.indomitable_item_3_icon}`} alt={`${pageDetail.detail.indomitable_item_3_title}`} />}
                            <span>{`${pageDetail.detail.indomitable_item_3_title}`}</span>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
                          <div className="bp-ia-content">
                            <div className="row">
                              <div className="col-md-2 col-sm-3">
                                {pageDetail.detail.indomitable_item_3_image && <img src={`${API_IMG_URL}pages/${pageDetail.detail.indomitable_item_3_image}`} alt={`${pageDetail.detail.indomitable_item_3_title}`} className="bp-ia-banner" />}
                              </div>
                              <div className="col-md-10 col-sm-9">
                                <div className="bp-ia-content">
                                  <p>{`${pageDetail.detail.indomitable_item_3_description}`}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="3" data-aos="fade-up">
                        <Accordion.Header>
                          <div className="bp-ia-heading">
                            {pageDetail.detail.indomitable_item_4_icon && <img src={`${API_IMG_URL}pages/${pageDetail.detail.indomitable_item_4_icon}`} alt={`${pageDetail.detail.indomitable_item_4_title}`} />}
                            <span>{`${pageDetail.detail.indomitable_item_4_title}`}</span>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
                          <div className="bp-ia-content">
                            <div className="row">
                              <div className="col-md-2 col-sm-3">
                                {pageDetail.detail.indomitable_item_4_image && <img src={`${API_IMG_URL}pages/${pageDetail.detail.indomitable_item_4_image}`} alt={`${pageDetail.detail.indomitable_item_4_title}`} className="bp-ia-banner" />}
                              </div>
                              <div className="col-md-10 col-sm-9">
                                <div className="bp-ia-content">
                                  <p>{`${pageDetail.detail.indomitable_item_4_description}`}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="4" data-aos="fade-up">
                        <Accordion.Header>
                          <div className="bp-ia-heading">
                            {pageDetail.detail.indomitable_item_5_icon && <img src={`${API_IMG_URL}pages/${pageDetail.detail.indomitable_item_5_icon}`} alt={`${pageDetail.detail.indomitable_item_5_title}`} />}
                            <span>{`${pageDetail.detail.indomitable_item_5_title}`}</span>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
                          <div className="bp-ia-content">
                            <div className="row">
                              <div className="col-md-2 col-sm-3">
                                {pageDetail.detail.indomitable_item_5_image && <img src={`${API_IMG_URL}pages/${pageDetail.detail.indomitable_item_5_image}`} alt={`${pageDetail.detail.indomitable_item_5_title}`} className="bp-ia-banner" />}
                              </div>
                              <div className="col-md-10 col-sm-9">
                                <div className="bp-ia-content">
                                  <p>{`${pageDetail.detail.indomitable_item_5_description}`}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>

            <div className="bp-articulating-yourself-section  text-center mx-auto d-flex flex-column align-items-center justify-content-center">
              <div className="container-lg">
                <div data-aos="fade-down" data-aos-duration="2000" data-aos-easing="ease-in-out" className="aos-init aos-animate">
                  <h1 className="animate two">{`${pageDetail.detail.articulating_title ?? ''}`}</h1>
                </div>
                <div data-aos="fade-down" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-delay="1000" className="mb-5 mt-2 text aos-init aos-animate">{`${pageDetail.detail.articulating_description ?? ''}`}</div>
              </div>
              <AllCardsNew {...pageDetail.detail} />
            </div>
          </>
          : null
      }

      <ServicesClients />

      <ServicesInsights />

      <ServicesAskQuote
        action={`https://forms.zohopublic.com.au/corporality/form/AskQuoteBrandPositioningCorporality/formperma/k6FGqWxtWvyiI7HrOTTYXdCv7bYCyc-V405tSnoRKXk/htmlRecords/submit`}
      />
    </>
  );
}
