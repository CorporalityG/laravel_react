import React, { useEffect, useState } from 'react'
import './CulturallyConditioned.css'
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../config'
import { TopElementItem } from './TopElementItem'
import Accordion from 'react-bootstrap/Accordion'
import { ProcessItem } from './ProcessItem'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function CulturallyConditioned() {

    const page_slug = 'corporality-culturally-conditioned';

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
            <HelmetProvider>
                <Helmet>
                    {pageDetail.meta_title && <title>{`${pageDetail.meta_title}`}</title>}
                    {pageDetail.meta_description && <meta name="description" content={`${pageDetail.meta_description}`} />}
                    {pageDetail.meta_keywords && <meta name="keywords" content={pageDetail.meta_keywords} />}
                    <link rel="canonical" href={`${BASE_URL}/corporality-culturally-conditioned/`} />
                </Helmet>

                {
                    pageDetail.detail ?
                        <>
                            <div className="cc-banner-section">
                                <img src={BASE_URL + '/img/CulturallyConditioned/banner-dots.png'} alt="Culturally Conditioned" className="cc-banner-img" />
                                <img src={BASE_URL + '/img/CulturallyConditioned/banner-vector.png'} alt="Vector" className="cc-banner-vector" />

                                <img src={BASE_URL + '/img/CulturallyConditioned/rec-1.png'} alt="Rec 1" className="rec-1" />
                                <img src={BASE_URL + '/img/CulturallyConditioned/rec-2.png'} alt="Rec 2" className="rec-2" />

                                <div className="cc-banner-social-main">
                                    <div className="cc-banner-social-img">
                                        <img src={BASE_URL + '/img/CulturallyConditioned/social.png'} alt="Social" />
                                    </div>
                                    <div className="cc-banner-social-icon-main">
                                        <div className="cc-banner-social-icon" onClick={() => window.open("https://www.facebook.com/CorporalityG/")}>
                                            <i className="fa fa-facebook-f"></i>
                                        </div>
                                        <div className="cc-banner-social-icon" onClick={() => window.open("https://twitter.com/corporalityg/")}>
                                            <i className="fa fa-twitter"></i>
                                        </div>
                                        <div className="cc-banner-social-icon" onClick={() => window.open("https://www.instagram.com/corporalityg/")}>
                                            <i className="fa fa-instagram"></i>
                                        </div>
                                        <div className="cc-banner-social-icon" onClick={() => window.open("https://www.linkedin.com/company/corporalityg/")}>
                                            <i className="fa fa-linkedin"></i>
                                        </div>
                                        <div className="cc-banner-social-icon" onClick={() => window.open("https://in.pinterest.com/CorporalityG/_created/")}>
                                            <i className="fa fa-pinterest"></i>
                                        </div>
                                        <div className="cc-banner-social-icon" onClick={() => window.open("https://www.youtube.com/channel/UC4EISt8kHI4zzpmbIBMIBbg")}>
                                            <i className="fa fa-youtube-play"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="container-lg">
                                    <div className="row cc-banner-content-row">
                                        <div className="col-lg-12">
                                            <div className="cc-banner-content">
                                                <h1>{`${pageDetail.detail.banner_title}`}</h1>
                                                <p>{`${pageDetail.detail.banner_description}`}</p>

                                                <div className="cc-banner-btn" onClick={() => window.open(pageDetail.detail.banner_btn_link, "_blank")}>{`${pageDetail.detail.banner_btn_text}`}</div>
                                            </div>
                                        </div>

                                        <div className="cc-banner-phone">
                                            <img src={BASE_URL + '/img/CulturallyConditioned/phone-icon.png'} alt="Phone" className="phone-icon" onClick={() => window.open("tel:61283794089", "_self")} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="cc-work-mind-section">
                                <div className="container-lg">
                                    <div className="row cc-wm-row">
                                        <div className="col-lg-6">
                                            <div className="cc-wm-content">
                                                <h2>{`${pageDetail.detail.work_mind_title}`}</h2>
                                                <div dangerouslySetInnerHTML={{ __html: pageDetail.detail.work_mind_description }}></div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="cc-wm-img">
                                                <img src={`${API_IMG_URL}pages/${pageDetail.detail.work_mind_image}`} alt={`${pageDetail.detail.work_mind_title}`} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="cc-major-problem-section">
                                <div className="container-fluid px-lg-0">
                                    <div className="row cc-mp-row">
                                        <div className="col-lg-6">
                                            <div className="cc-mp-img">
                                                <img src={`${API_IMG_URL}pages/${pageDetail.detail.conditioned_framework_image}`} alt={`${pageDetail.detail.conditioned_framework_title}`} />
                                            </div>
                                        </div>

                                        <div className="col-lg-5">
                                            <div className="cc-mp-content">
                                                <h2>{`${pageDetail.detail.conditioned_framework_title}`}</h2>
                                                <div dangerouslySetInnerHTML={{ __html: pageDetail.detail.conditioned_framework_description }}></div>
                                            </div>
                                        </div>
                                        <div className="col-lg-1"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="cc-top-elements-section">
                                <div className="container-lg">
                                    <div className="row cc-te-content-row">
                                        <div className="col-lg-12">
                                            <div className="cc-te-content">
                                                <div className="cc-te-title">
                                                    <h2>{`${pageDetail.detail.elements_framework_title}`}</h2>
                                                    <h2>{`${pageDetail.detail.elements_framework_title_2}`}</h2>
                                                </div>

                                                <p>{`${pageDetail.detail.elements_framework_description}`}</p>

                                                <Link className="cc-te-btn" to={`/${pageDetail.detail.elements_framework_btn_link ?? ''}`} >{`${pageDetail.detail.elements_framework_btn_text}`}</Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row cc-te-boxes-row">
                                        <div className="col-lg-12 cc-te-boxes-col">
                                            <TopElementItem
                                                id={1}
                                                title={`${pageDetail.detail.elements_framework_item_1_title}`}
                                                content={`<p>${pageDetail.detail.elements_framework_item_1_description}</p>`}
                                            />

                                            <TopElementItem
                                                id={2}
                                                title={`${pageDetail.detail.elements_framework_item_2_title}`}
                                                content={`<p>${pageDetail.detail.elements_framework_item_2_description}</p>`}
                                            />

                                            <TopElementItem
                                                id={3}
                                                title={`${pageDetail.detail.elements_framework_item_3_title}`}
                                                content={`<p>${pageDetail.detail.elements_framework_item_3_description}</p>`}
                                            />

                                            <TopElementItem
                                                id={4}
                                                title={`${pageDetail.detail.elements_framework_item_4_title}`}
                                                content={`<p>${pageDetail.detail.elements_framework_item_4_description}</p>`}
                                            />

                                            <TopElementItem
                                                id={5}
                                                title={`${pageDetail.detail.elements_framework_item_5_title}`}
                                                content={`<p>${pageDetail.detail.elements_framework_item_5_description}</p>`}
                                            />
                                        </div>

                                        <div className="cc-te-boxes-img">
                                            <img src={BASE_URL + '/img/CulturallyConditioned/top-elements-img.png'} alt="top elements" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="cc-work-section">
                                <div className="container-lg">
                                    <div className="row cc-work-title-row">
                                        <div className="col-lg-12">
                                            <div className="cc-work-heading">
                                                <h2>{`${pageDetail.detail.work_title}`}</h2>
                                                <p>{`${pageDetail.detail.work_description}`}</p>

                                                <Link className="cc-work-btn" to={`/${pageDetail.detail.work_btn_link ?? ''}`} >{`${pageDetail.detail.work_btn_text}`}</Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row cc-work-content-row">
                                        <div className="col-lg-6">
                                            <Accordion className="cc-work-accordion-main">
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header>
                                                        <div className="cc-work-heading">
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
                                                        <div className="cc-work-heading">
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
                                                        <div className="cc-work-heading">
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
                                                        <div className="cc-work-heading">
                                                            <img src={`${API_IMG_URL}pages/${pageDetail.detail.work_item_4_icon}`} alt={`${pageDetail.detail.work_item_4_title}`} />
                                                            <span>{`${pageDetail.detail.work_item_4_title}`}</span>
                                                        </div>
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        <p>{`${pageDetail.detail.work_item_4_description}`}</p>
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                                <Accordion.Item eventKey="4">
                                                    <Accordion.Header>
                                                        <div className="cc-work-heading">
                                                            <img src={`${API_IMG_URL}pages/${pageDetail.detail.work_item_5_icon}`} alt={`${pageDetail.detail.work_item_5_title}`} />
                                                            <span>{`${pageDetail.detail.work_item_5_title}`}</span>
                                                        </div>
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        <p>{`${pageDetail.detail.work_item_5_description}`}</p>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="cc-work-content-main">
                                                <img src={`${API_IMG_URL}pages/${pageDetail.detail.work_image}`} alt="How-Does-It-Work" />

                                                <h3>{`${pageDetail.detail.work_content_item_1_title}`}</h3>
                                                <p>{`${pageDetail.detail.work_content_item_1_description}`}</p>

                                                <h3>{`${pageDetail.detail.work_content_item_2_title}`}</h3>
                                                <p>{`${pageDetail.detail.work_content_item_2_description}`}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="cc-process-section">
                                <div className="container-lg">
                                    <div className="row cc-process-title-row">
                                        <div className="col-md-12">
                                            <div className="cc-process-title-content">
                                                <h2>{`${pageDetail.detail.process_title}`}</h2>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row cc-process-boxes-row">
                                        <ProcessItem
                                            thumbnail={`${API_IMG_URL}pages/${pageDetail.detail.process_item_1_icon}`}
                                            title={`${pageDetail.detail.process_item_1_title}`}
                                            content={`<p>${pageDetail.detail.process_item_1_description}</p>`}
                                        />

                                        <ProcessItem
                                            thumbnail={`${API_IMG_URL}pages/${pageDetail.detail.process_item_2_icon}`}
                                            title={`${pageDetail.detail.process_item_2_title}`}
                                            content={`<p>${pageDetail.detail.process_item_2_description}</p>`}
                                        />

                                        <ProcessItem
                                            thumbnail={`${API_IMG_URL}pages/${pageDetail.detail.process_item_3_icon}`}
                                            title={`${pageDetail.detail.process_item_3_title}`}
                                            content={`<p>${pageDetail.detail.process_item_3_description}</p>`}
                                        />
                                    </div>
                                </div>
                            </div>
                        </>
                        : null
                }
            </HelmetProvider>
        </>
    )
}

export default CulturallyConditioned