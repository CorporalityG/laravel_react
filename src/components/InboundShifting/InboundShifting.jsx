import React, { useEffect, useState } from 'react'
import './InboundShifting.css'
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../config'
import { CuriousItem } from './CuriousItem'
import Accordion from 'react-bootstrap/Accordion'
import { Helmet } from "react-helmet";

function InboundShifting() {

    const page_slug = 'corporality-inbound-shiftings';

    const [pageDetail, setPageDetail] = useState([]);

    useEffect(() => {
        getPageDetail()
    }, []);

    async function getPageDetail() {
        let result = await fetch(`${API_BASE_URL}/page-detail/${page_slug}`);
        result = await result.json();
        setPageDetail(result);
    }

    return (
        <>
            <Helmet>
                {pageDetail.meta_title && <title>{`${pageDetail.meta_title}`}</title>}
                {pageDetail.meta_description && <meta name="description" content={`${pageDetail.meta_description}`} />}
                {pageDetail.meta_keywords && <meta name="keywords" content={pageDetail.meta_keywords} />}
                <link rel="canonical" href={`${BASE_URL}/corporality-inbound-shiftings/`} />
            </Helmet>

            {
                pageDetail.detail ?
                    <>
                        <div className="is-banner-section">
                            <img src={BASE_URL + '/img/InboundShifting/banner-dots.png'} alt="Why Corporality Effect?" className="is-banner-img" />
                            <img src={BASE_URL + '/img/InboundShifting/banner-vector.png'} alt="Vector" className="is-banner-vector" />

                            <img src={BASE_URL + '/img/InboundShifting/rec-1.png'} alt="Rec 1" className="rec-1" />
                            <img src={BASE_URL + '/img/InboundShifting/rec-2.png'} alt="Rec 2" className="rec-2" />

                            <div className="is-banner-social-main">
                                <div className="is-banner-social-img">
                                    <img src={BASE_URL + '/img/InboundShifting/social.png'} alt="Title" />
                                </div>
                                <div className="is-banner-social-icon-main">
                                    <div className="is-banner-social-icon" onClick={() => window.open("https://www.facebook.com/CorporalityG/")}>
                                        <i className="fa fa-facebook-f"></i>
                                    </div>
                                    <div className="is-banner-social-icon" onClick={() => window.open("https://twitter.com/corporalityg/")}>
                                        <i className="fa fa-twitter"></i>
                                    </div>
                                    <div className="is-banner-social-icon" onClick={() => window.open("https://www.instagram.com/corporalityg/")}>
                                        <i className="fa fa-instagram"></i>
                                    </div>
                                    <div className="is-banner-social-icon" onClick={() => window.open("https://www.linkedin.com/company/corporalityg/")}>
                                        <i className="fa fa-linkedin"></i>
                                    </div>
                                    <div className="is-banner-social-icon" onClick={() => window.open("https://in.pinterest.com/CorporalityG/_created/")}>
                                        <i className="fa fa-pinterest"></i>
                                    </div>
                                    <div className="is-banner-social-icon" onClick={() => window.open("https://www.youtube.com/channel/UC4EISt8kHI4zzpmbIBMIBbg")}>
                                        <i className="fa fa-youtube-play"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="container-lg">
                                <div className="row is-banner-content-row">
                                    <div className="col-lg-12">
                                        <div className="is-banner-content">
                                            <h1>{`${pageDetail.detail.banner_title}`}</h1>
                                            <div className="sb-content" dangerouslySetInnerHTML={{ __html: pageDetail.detail.banner_description }}></div>

                                            <div className="is-banner-btn" onClick={() => window.open(pageDetail.detail.banner_btn_link, "_blank")}>{`${pageDetail.detail.banner_btn_text}`}</div>
                                        </div>
                                    </div>

                                    <div className="is-banner-phone">
                                        <img src={BASE_URL + '/img/InboundShifting/phone-icon.png'} alt="Phone" className="phone-icon" onClick={() => window.open("tel:61283794089", "_self")} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="is-commitment-section">
                            <div className="container-lg">
                                <div className="row is-commitment-row">
                                    <div className="col-lg-12">
                                        <div className="is-commitment-content">
                                            <h2>{`${pageDetail.detail.commitment_title}`}</h2>
                                            <p>{`${pageDetail.detail.commitment_description}`}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="is-shifting-section">
                            <div className="container-lg">
                                <div className="row is-shifting-row">
                                    <div className="col-lg-6">
                                        <div className="is-shifting-content">
                                            <h2>{`${pageDetail.detail.shifting_title}`}</h2>
                                            <div dangerouslySetInnerHTML={{ __html: pageDetail.detail.shifting_description }}></div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="is-shifting-img">
                                            <img src={`${API_IMG_URL}pages/${pageDetail.detail.shifting_image}`} alt={`${pageDetail.detail.shifting_title}`} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="is-curious-section">
                            <div className="container-lg">
                                <div className="row is-curious-row">
                                    <div className="col-lg-12">
                                        <div className="is-curious-content">
                                            <h2>{`${pageDetail.detail.curious_title}`}</h2>
                                            <p>{`${pageDetail.detail.curious_description}`}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="row is-curious-boxes-row">
                                    <CuriousItem
                                        title={`${pageDetail.detail.curious_item_1_title}`}
                                        content={`<p>${pageDetail.detail.curious_item_1_description}</p>`}
                                    />

                                    <CuriousItem
                                        title={`${pageDetail.detail.curious_item_2_title}`}
                                        content={`<p>${pageDetail.detail.curious_item_2_description}</p>`}
                                    />

                                    <CuriousItem
                                        title={`${pageDetail.detail.curious_item_3_title}`}
                                        content={`<p>${pageDetail.detail.curious_item_3_description}</p>`}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="is-problems-section">
                            <div className="container-lg">
                                <div className="row is-problems-row">
                                    <div className="col-lg-6">
                                        <div className="is-problems-img">
                                            <img src={`${API_IMG_URL}pages/${pageDetail.detail.problems_tackle_image}`} alt={`${pageDetail.detail.problems_tackle_title}`} />
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="is-problems-content">
                                            <h2>{`${pageDetail.detail.problems_tackle_title}`}</h2>
                                            <h3>{`${pageDetail.detail.problems_tackle_subtitle}`}</h3>

                                            <div dangerouslySetInnerHTML={{ __html: pageDetail.detail.problems_tackle_description }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="is-work-section">
                            <div className="container-lg">
                                <div className="row is-work-title-row">
                                    <div className="col-lg-12">
                                        <h2>{`${pageDetail.detail.work_title}`}</h2>
                                        <p>{`${pageDetail.detail.work_subtitle}`}</p>
                                    </div>
                                </div>

                                <div className="row is-work-accordion-row">
                                    <div className="col-lg-12">
                                        <Accordion className="is-work-accordion-main">
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>
                                                    <div className="is-work-heading">
                                                        <img src={`${API_IMG_URL}pages/${pageDetail.detail.work_item_1_icon}`} alt={`${pageDetail.detail.work_item_1_title}`} />
                                                        <span>{`${pageDetail.detail.work_item_1_title}`}</span>
                                                    </div>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <p>{`${pageDetail.detail.work_item_1_description}`}</p>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header>
                                                    <div className="is-work-heading">
                                                        <img src={`${API_IMG_URL}pages/${pageDetail.detail.work_item_2_icon}`} alt={`${pageDetail.detail.work_item_2_title}`} />
                                                        <span>{`${pageDetail.detail.work_item_2_title}`}</span>
                                                    </div>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <p>{`${pageDetail.detail.work_item_2_description}`}</p>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="2">
                                                <Accordion.Header>
                                                    <div className="is-work-heading">
                                                        <img src={`${API_IMG_URL}pages/${pageDetail.detail.work_item_3_icon}`} alt={`${pageDetail.detail.work_item_3_title}`} />
                                                        <span>{`${pageDetail.detail.work_item_3_title}`}</span>
                                                    </div>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <p>{`${pageDetail.detail.work_item_3_description}`}</p>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="3">
                                                <Accordion.Header>
                                                    <div className="is-work-heading">
                                                        <img src={`${API_IMG_URL}pages/${pageDetail.detail.work_item_4_icon}`} alt={`${pageDetail.detail.work_item_4_title}`} />
                                                        <span>{`${pageDetail.detail.work_item_4_title}`}</span>
                                                    </div>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <p>{`${pageDetail.detail.work_item_4_description}`}</p>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="is-model-assessment-section">
                            <div className="container-lg">
                                <div className="row is-model-assessment-row">
                                    <div className="col-lg-12">
                                        <div className="is-ma-img">
                                            <img src={`${API_IMG_URL}pages/${pageDetail.detail.marketing_model_image}`} alt="Model Assessment" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    : null
            }
        </>
    )
}

export default InboundShifting