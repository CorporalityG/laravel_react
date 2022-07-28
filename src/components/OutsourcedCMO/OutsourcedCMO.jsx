import React, { useState, useEffect } from 'react'
import './OutsourcedCMO.css'
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../config'
import Aos from "aos";
import { WhyHireItem } from "./WhyHireItem";
import Accordion from 'react-bootstrap/Accordion'
import ServicesClients from '../ServicesClients/ServicesClients';
import ServicesInsights from '../ServicesInsights/ServicesInsights';
import { ServicesAskQuote } from '../ServicesAskQuote/ServicesAskQuote';
import { LifeCycleStepItem } from './LifeCycleStepItem';
import { Helmet } from "react-helmet";

function OutsourcedCMO() {

    const page_slug = 'outsourced-cmo';

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
                <link rel="canonical" href={`${BASE_URL}/outsourced-cmo/`} />
            </Helmet>

            {
                pageDetail.detail ?
                    <>
                        <div className="cmo-banner-section">
                            <div className='cmo-banner-top'></div>
                            <div className='cmo-banner-middle' data-aos="zoom-in-up" data-aos-duration="1500"></div>
                            <div className='cmo-banner-bottom' data-aos="zoom-in-up" data-aos-duration="2000"></div>

                            <img src={`${BASE_URL}/img/OutsourcedCMO/banner-path.png`} alt="Vector" className="banner-path" data-aos="zoom-in-up" />
                            <div className="banner-setting-big">
                                <img src={`${BASE_URL}/img/OutsourcedCMO/banner-setting-big.png`} alt="Setting Big" data-aos="zoom-in-up" />
                            </div>
                            <div className="banner-setting-small">
                                <img src={`${BASE_URL}/img/OutsourcedCMO/banner-setting-small.png`} alt="Setting Small" data-aos="zoom-in-up" />
                            </div>

                            <div className="container-fluid px-lg-0">
                                <div className="row cmo-banner-row">
                                    <div className="col-lg-5 offset-lg-1">
                                        <div className="cmo-banner-content">
                                            <div data-aos="fade-up">
                                                <h1>{`${pageDetail.detail.banner_title}`}</h1>
                                            </div>
                                            <div className="cmo-banner-subtitle" data-aos="fade-up" data-aos-delay="300">{`${pageDetail.detail.banner_subtitle}`}</div>
                                            <div className="cmo-banner-desc" data-aos="fade-up" data-aos-delay="500">
                                                <p>{`${pageDetail.detail.banner_description}`}</p>
                                            </div>
                                            <div className="cmo-banner-btn" data-aos="fade-up" data-aos-delay="500">
                                                <a href={`${pageDetail.detail.banner_btn_link}`} target="_blank">{`${pageDetail.detail.banner_btn_text}`}</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="cmo-banner-video">
                                            <video data-aos="fade-left" data-aos-duration="1600" autoPlay={true} muted loop>
                                                <source src={`${API_IMG_URL}pages/${pageDetail.detail.banner_video}`} type="video/mp4" />
                                            </video>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="cmo-social-section">
                                <div className="cmo-social-row" data-aos="fade-right" data-aos-delay="400">
                                    <a href='https://www.facebook.com/CorporalityG' target="_blank"><i className="fa fa-facebook-f"></i></a>
                                    <a href='https://twitter.com/corporalityg' target="_blank"><i className="fa fa-twitter"></i></a>
                                    <a href='https://www.instagram.com/corporalityg/' target="_blank"><i className="fa fa-instagram"></i></a>
                                    <a href='https://www.linkedin.com/company/corporality/' target="_blank"><i className="fa fa-linkedin"></i></a>
                                    <a href='https://in.pinterest.com/CorporalityG/' target="_blank"><i className="fa fa-pinterest"></i></a>
                                    <a href='https://www.youtube.com/channel/UC4EISt8kHI4zzpmbIBMIBbg' target="_blank"><i className="fa fa-youtube-play"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="cmo-lifecycle-section">
                            <div className="container-lg">
                                <div className="row cmo-lc-title-row">
                                    <div className="col-lg-12">
                                        <div className="cmo-lc-title-content">
                                            <div data-aos="fade-up">
                                                <h2>{`${pageDetail.detail.lifecycle_title}`}</h2>
                                            </div>
                                            <div className="cmo-lc-title-desc" data-aos="fade-up" data-aos-delay="300">
                                                <p>{`${pageDetail.detail.lifecycle_description}`}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row cmo-lc-steps-row">
                                    <div className="col-lg-12">
                                        <div className="cmo-lc-steps-content">
                                            <img src={`${API_IMG_URL}pages/${pageDetail.detail.lifecycle_image}`} alt={`${pageDetail.detail.lifecycle_title}`} data-aos="zoom-in-up" className="cmo-lc-steps-banner" />

                                            <LifeCycleStepItem
                                                step={`1`}
                                                title={`${pageDetail.detail.lifecycle_step_1_title}`}
                                                content={`<p>${pageDetail.detail.lifecycle_step_1_description}</p>`}
                                            />

                                            <LifeCycleStepItem
                                                step={`2`}
                                                title={`${pageDetail.detail.lifecycle_step_2_title}`}
                                                content={`<p>${pageDetail.detail.lifecycle_step_2_description}</p>`}
                                            />

                                            <LifeCycleStepItem
                                                step={`3`}
                                                title={`${pageDetail.detail.lifecycle_step_3_title}`}
                                                content={`<p>${pageDetail.detail.lifecycle_step_3_description}</p>`}
                                            />

                                            <LifeCycleStepItem
                                                step={`4`}
                                                title={`${pageDetail.detail.lifecycle_step_4_title}`}
                                                content={`<p>${pageDetail.detail.lifecycle_step_4_description}</p>`}
                                            />

                                            <LifeCycleStepItem
                                                step={`5`}
                                                title={`${pageDetail.detail.lifecycle_step_5_title}`}
                                                content={`<p>${pageDetail.detail.lifecycle_step_5_description}</p>`}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="cmo-expect-section">
                            <div className="container-lg">
                                <div className="row cmo-expect-title-row">
                                    <div className="col-lg-12">
                                        <div className="cmo-expect-title">
                                            <div data-aos="fade-up">
                                                <h2>{`${pageDetail.detail.what_expect_title}`}</h2>
                                            </div>
                                            <div data-aos="fade-up" data-aos-delay="300">
                                                <p>{`${pageDetail.detail.what_expect_subtitle}`}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row cmo-expect-content-row">
                                    <div className="col-lg-6 cmo-ec-col">
                                        <div className="cmo-expect-banner">
                                            <div className='cmo-expect-bg' data-aos="zoom-in-up" data-aos-duration="1500"></div>
                                            <img src={`${API_IMG_URL}pages/${pageDetail.detail.what_expect_image}`} alt={`${pageDetail.detail.what_expect_title}`} data-aos="zoom-in-up" />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 cmo-ec-col">
                                        <div className="cmo-expect-content" data-aos="fade-up" data-aos-delay="300">
                                            <div dangerouslySetInnerHTML={{ __html: pageDetail.detail.what_expect_description }}></div>
                                        </div>

                                        <div className="cmo-expect-btn" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                                            <a href={`${pageDetail.detail.what_expect_btn_link ?? ''}`} target="_blank">{`${pageDetail.detail.what_expect_btn_text}`}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="cmo-why-hire-section">
                            <div className="container-lg">
                                <div className="row cmo-wh-title-row">
                                    <div className="col-lg-12">
                                        <div className="cmo-wh-title-content">
                                            <div data-aos="fade-up">
                                                <h2>{`${pageDetail.detail.why_hire_title}`} </h2>
                                            </div>
                                            <div className="cmo-wh-title-desc" data-aos="fade-up" data-aos-delay="300">
                                                <p>{`${pageDetail.detail.why_hire_description}`}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row cmo-wh-boxes-row">
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

                        <div className="cmo-faqs-section">
                            <div className="container-lg">
                                <div className="row cmo-faqs-title-row" data-aos="zoom-in">
                                    <div className="col-lg-12">
                                        <div className="cmo-ft-content">
                                            <div className="cmo-ft-subtitle" data-aos="zoom-in-up" data-aos-delay="100">{`${pageDetail.detail.faq_title}`}</div>
                                            <h2 data-aos="zoom-in-down" data-aos-delay="200">{`${pageDetail.detail.faq_subtitle}`}</h2>
                                            <div className="cmo-ft-btn" onClick={handelToggleFaq} data-aos="zoom-in-right" data-aos-delay="300">Show <i className={`fa ${showFaq ? "fa-angle-up" : "fa-angle-down"}`}></i></div>
                                        </div>
                                    </div>
                                </div>

                                <div className={`row cmo-faqs-list-row ${showFaq ? "" : "hide"}`}>
                                    <div className="col-lg-12">
                                        <div className="cmo-faqs-list">
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

            <ServicesAskQuote />
        </>
    )
}

export default OutsourcedCMO