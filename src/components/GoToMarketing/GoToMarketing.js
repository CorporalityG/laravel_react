import React, { useState, useEffect } from 'react'
import './GoToMarketing.css'
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../config'
import Aos from "aos";
import { ServicesAskQuote } from "../ServicesAskQuote/ServicesAskQuote";
import ServicesClients from '../ServicesClients/ServicesClients';
import ServicesInsights from '../ServicesInsights/ServicesInsights';
import { ApproachItem } from './ApproachItem';
import Accordion from 'react-bootstrap/Accordion'
import { useNavigate } from 'react-router-dom'
import WriteToUsModal from "./WriteToUsModal";
import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function GoToMarketing() {

    const page_slug = 'goto-market-strategy';

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

    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(0);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = (modalId) => {
        setShowModal(modalId);
    }

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    {pageDetail.meta_title && <title>{`${pageDetail.meta_title}`}</title>}
                    {pageDetail.meta_description && <meta name="description" content={`${pageDetail.meta_description}`} />}
                    {pageDetail.meta_keywords && <meta name="keywords" content={pageDetail.meta_keywords} />}
                    <link rel="canonical" href={`${BASE_URL}/goto-market-strategy/`} />
                </Helmet>

                {
                    pageDetail.detail ?
                        <>
                            <div className="gtm-banner-section">
                                <img src={`${BASE_URL}/img/GoToMarketing/banner-rec.png`} alt="Rect" className="gtm-banner-rec" data-aos="zoom-in" />

                                <div className="container-lg">
                                    <div className="row gtm-banner-row">
                                        <div className="col-lg-6 offset-lg-6">
                                            <div className="gtm-banner-content">
                                                <div className="gtm-b-heading" data-aos="fade-up">{`${pageDetail.detail.banner_heading}`}</div>
                                                <div data-aos="fade-up" data-aos-delay="150">
                                                    <h1>{`${pageDetail.detail.banner_title}`}</h1>
                                                </div>
                                                <div className="gtm-b-subtitle" data-aos="fade-up" data-aos-delay="300">{`${pageDetail.detail.banner_subtitle}`}</div>
                                                <div className="gtm-banner-desc" data-aos="fade-up" data-aos-delay="500">
                                                    <p>{`${pageDetail.detail.banner_description}`}</p>
                                                </div>
                                                <div className="gtm-banner-btn" data-aos="fade-up" data-aos-delay="600">
                                                    <a href={`${pageDetail.detail.banner_btn_link}`} target="_blank">{`${pageDetail.detail.banner_btn_text}`}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {pageDetail.detail.banner_image && <img src={`${API_IMG_URL}pages/${pageDetail.detail.banner_image}`} alt={`${pageDetail.detail.banner_title}`} className="gtm-banner" data-aos="zoom-in" data-aos-anchor="#gtm-anchor" />}
                            </div>

                            <div className="gtm-approach-section">
                                <div className="container-lg">
                                    <div className="row gtm-approach-row">
                                        <ApproachItem
                                            number={`01`}
                                            title={`${pageDetail.detail.our_approach_step_1_title}`}
                                            content={`${pageDetail.detail.our_approach_step_1_description}`}
                                        />

                                        <ApproachItem
                                            number={`02`}
                                            title={`${pageDetail.detail.our_approach_step_2_title}`}
                                            content={`${pageDetail.detail.our_approach_step_2_description}`}
                                        />

                                        <div className="col-lg-4 gtm-a-col gtm-a-col-middle">
                                            <div className="gtm-a-item-middle">
                                                {pageDetail.detail.our_approach_image && <img src={`${API_IMG_URL}pages/${pageDetail.detail.our_approach_image}`} alt={`${pageDetail.detail.our_approach_title}`} className="gtm-banner" data-aos="zoom-in" />}
                                                <div className="a-item-title-middle" data-aos="zoom-out-up">{`${pageDetail.detail.our_approach_title}`}</div>
                                            </div>
                                        </div>

                                        <ApproachItem
                                            number={`03`}
                                            title={`${pageDetail.detail.our_approach_step_3_title}`}
                                            content={`${pageDetail.detail.our_approach_step_3_description}`}
                                        />

                                        <ApproachItem
                                            number={`04`}
                                            title={`${pageDetail.detail.our_approach_step_4_title}`}
                                            content={`${pageDetail.detail.our_approach_step_4_description}`}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="gtm-finding-ways-section">
                                <div className="container-lg">
                                    <div className="row gtm-finding-ways-row">
                                        <div className="col-lg-12">
                                            <div className="gtm-fw-content">
                                                <div data-aos="fade-up">
                                                    <h2>{`${pageDetail.detail.products_services_title}`}</h2>
                                                </div>
                                                <div className="gtm-fw-desc" data-aos="fade-up" data-aos-delay="500">
                                                    <p>{`${pageDetail.detail.products_services_description}`}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="gtm-faqs-section">
                                <div className="container-lg">
                                    <div className="row gtm-faqs-title-row" data-aos="zoom-in">
                                        <div className="col-lg-12">
                                            <div className="gtm-ft-content">
                                                <div className="gtm-ft-subtitle" data-aos="zoom-in-up" data-aos-delay="100">{`${pageDetail.detail.faq_title}`}</div>
                                                <h2 data-aos="zoom-in-down" data-aos-delay="200">{`${pageDetail.detail.faq_subtitle}`}</h2>
                                                <div className="gtm-ft-btn" onClick={handelToggleFaq} data-aos="zoom-in-right" data-aos-delay="300">Show <i className={`fa ${showFaq ? "fa-angle-up" : "fa-angle-down"}`}></i></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`row gtm-faqs-list-row ${showFaq ? "" : "hide"}`}>
                                        <div className="col-lg-12">
                                            <div className="gtm-faqs-list">
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

                                                            <div className="faq-btn" onClick={() => navigate(`/${pageDetail.detail.faq_item_3_btn_link}`)}>{`${pageDetail.detail.faq_item_3_btn_text}`}</div>
                                                        </Accordion.Body>
                                                    </Accordion.Item>

                                                    <Accordion.Item eventKey="3">
                                                        <Accordion.Header>{`${pageDetail.detail.faq_item_4_title}`}</Accordion.Header>
                                                        <Accordion.Body>
                                                            <div dangerouslySetInnerHTML={{ __html: pageDetail.detail.faq_item_4_description }}></div>

                                                            <div className="row faq-box-row">
                                                                <div className="col-lg-5 col-md-6">
                                                                    <div className="faq-box-main">
                                                                        <div className="faq-box-img">
                                                                            {pageDetail.detail.faq_item_4_box_1_item_image && <img src={`${API_IMG_URL}pages/${pageDetail.detail.faq_item_4_box_1_item_image}`} alt={`${pageDetail.detail.faq_item_4_box_1_title}`} />}
                                                                        </div>
                                                                        <div className="faq-box-content">
                                                                            <div className="faq-box-line">
                                                                                <img src={`${BASE_URL}/img/GoToMarketing/faq-box-line.png`} alt="-" />
                                                                            </div>
                                                                            <div className="faq-box-title">{`${pageDetail.detail.faq_item_4_box_1_title}`}</div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-5 col-md-6">
                                                                    <div className="faq-box-main">
                                                                        <div className="faq-box-img">
                                                                            {pageDetail.detail.faq_item_4_box_2_item_image && <img src={`${API_IMG_URL}pages/${pageDetail.detail.faq_item_4_box_2_item_image}`} alt={`${pageDetail.detail.faq_item_4_box_2_title}`} />}
                                                                        </div>
                                                                        <div className="faq-box-content">
                                                                            <div className="faq-box-line">
                                                                                <img src={`${BASE_URL}/img/GoToMarketing/faq-box-line.png`} alt="-" />
                                                                            </div>
                                                                            <div className="faq-box-title">{`${pageDetail.detail.faq_item_4_box_2_title}`}</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <p>{`${pageDetail.detail.faq_item_4_box_subtitle}`}</p>

                                                            <div className="faq-btn" onClick={() => navigate(`/${pageDetail.detail.faq_item_4_btn_link}`)}>{`${pageDetail.detail.faq_item_4_btn_text}`}</div>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                </Accordion>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="gtm-expand-section">
                                <div className="container-lg">
                                    <div className="row gtm-expand-content-row">
                                        <div className="col-lg-6 gtm-expand-content-col">
                                            <div className="gtm-ec-banner">
                                                {pageDetail.detail.market_expand_image && <img src={`${API_IMG_URL}pages/${pageDetail.detail.market_expand_image}`} alt={`${pageDetail.detail.market_expand_title}`} className="ec-b-img" data-aos="fade-right" />}
                                                <img src={`${BASE_URL}/img/GoToMarketing/expand-rec.png`} alt="expand-rec" className="ec-b-rec" data-aos="fade-right" data-aos-delay="300" />

                                                <img src={`${BASE_URL}/img/GoToMarketing/expand-vector.png`} alt="expand-vector" className="ec-b-vec" data-aos="fade-right" data-aos-delay="500" />
                                                <img src={`${BASE_URL}/img/GoToMarketing/expand-rec-1.png`} alt="expand-rec-1" className="ec-b-rec-2" data-aos="zoom-in" />

                                                <img src={`${BASE_URL}/img/GoToMarketing/expand-ellipse.png`} alt="expand-ellipse" className="ec-b-ellipse" data-aos="fade-up" data-aos-delay="300" />
                                                <img src={`${BASE_URL}/img/GoToMarketing/expand-vec.png`} alt="expand-vec" className="ec-b-vec-1" data-aos="fade-up" data-aos-delay="400" />
                                                <img src={`${BASE_URL}/img/GoToMarketing/expand-rect.png`} alt="expand-rect" className="ec-b-rec-1" data-aos="fade-up" data-aos-delay="500" />

                                                <div className="ec-b-write-box" data-aos="zoom-in-left" data-aos-delay="500">
                                                    <div className="bw-box-title">{`${pageDetail.detail.market_expand_box_title_1}`}</div>
                                                    <div className="bw-box-title">{`${pageDetail.detail.market_expand_box_title_2}`}</div>
                                                    <div className="bw-box-btn" onClick={() => handleShowModal('write')}>{`${pageDetail.detail.market_expand_box_btn_text}`}</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 gtm-expand-content-col">
                                            <div className="gtm-ec-desc">
                                                <div data-aos="fade-up">
                                                    <h2>{`${pageDetail.detail.market_expand_title}`} </h2>
                                                </div>
                                                <div data-aos="fade-up" data-aos-delay="300">
                                                    <p>{`${pageDetail.detail.market_expand_subtitle}`} </p>
                                                </div>
                                                <div data-aos="fade-up" data-aos-delay="500" dangerouslySetInnerHTML={{ __html: pageDetail.detail.market_expand_description }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <WriteToUsModal show={showModal} handleCloseModal={handleCloseModal} />
                            </div>

                            <div className="gtm-product-strategy-section">
                                <div className="container-lg">
                                    <div className="row gtm-ps-row">
                                        <div className="col-lg-12">
                                            <div className="gtm-ps-content">
                                                <div data-aos="fade-up">
                                                    <h2>{`${pageDetail.detail.product_strategy_title}`}</h2>
                                                </div>
                                                <div data-aos="fade-up" data-aos-delay="300">
                                                    <p>{`${pageDetail.detail.product_strategy_description}`}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="gtm-ps-banner">
                                                {pageDetail.detail.product_strategy_image && <img src={`${API_IMG_URL}pages/${pageDetail.detail.product_strategy_image}`} alt={`${pageDetail.detail.product_strategy_title}`} data-aos="zoom-in-up" />}
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
                    action={`https://forms.zohopublic.com.au/corporality/form/AskQuoteGoToMarketCorporality/formperma/w4QerTkMcfNk8G8uydQP08pbGDNGJ3ot2f3svS3U8_8/htmlRecords/submit`}
                />
            </HelmetProvider>
        </>
    )
}
