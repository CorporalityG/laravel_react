import React, { useEffect, useState } from 'react'
import './WhyCorporalityEffect.css'
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../config';
import { Link } from 'react-router-dom';
import { RightForYouItem } from './RightForYouItem';
import { CommitmentItem } from './CommitmentItem';
import Accordion from 'react-bootstrap/Accordion'
import { KeyElementItem } from './KeyElementItem';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function WhyCorporalityEffect() {

    const page_slug = 'why-corporality-effect';

    const [pageDetail, setPageDetail] = useState([]);

    useEffect(() => {
        getPageDetail()
    }, []);

    async function getPageDetail() {
        let result = await fetch(`${API_BASE_URL}/page-detail/${page_slug}`);
        result = await result.json();
        setPageDetail(result);
    }

    const topHandle = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    {pageDetail.meta_title && <title>{`${pageDetail.meta_title}`}</title>}
                    {pageDetail.meta_description && <meta name="description" content={`${pageDetail.meta_description}`} />}
                    {pageDetail.meta_keywords && <meta name="keywords" content={pageDetail.meta_keywords} />}
                    <link rel="canonical" href={`${BASE_URL}/why-corporality-effect/`} />
                </Helmet>

                {
                    pageDetail.detail ?
                        <>
                            <div className="wce-banner-main">
                                <img src={BASE_URL + '/img/WhyCorporalityEffect/banner.png'} alt="Why Corporality Effect?" className="wce-banner-img" />
                                <img src={BASE_URL + '/img/WhyCorporalityEffect/banner-vector.png'} alt="Vector" className="wce-banner-vector" />

                                <img src={BASE_URL + '/img/WhyCorporalityEffect/rec-1.png'} alt="Rec 1" className="rec-1" />
                                <img src={BASE_URL + '/img/WhyCorporalityEffect/rec-2.png'} alt="Rec 2" className="rec-2" />

                                <div className="wce-banner-social-main">
                                    <div className="wce-banner-social-img">
                                        <img src={BASE_URL + '/img/WhyCorporalityEffect/social.png'} alt="Title" />
                                    </div>
                                    <div className="wce-banner-social-icon-main">
                                        <div className="wce-banner-social-icon" onClick={() => window.open("https://www.facebook.com/CorporalityG/")}>
                                            <i className="fa fa-facebook-f"></i>
                                        </div>
                                        <div className="wce-banner-social-icon" onClick={() => window.open("https://twitter.com/corporalityg/")}>
                                            <i className="fa fa-twitter"></i>
                                        </div>
                                        <div className="wce-banner-social-icon" onClick={() => window.open("https://www.instagram.com/corporalityg/")}>
                                            <i className="fa fa-instagram"></i>
                                        </div>
                                        <div className="wce-banner-social-icon" onClick={() => window.open("https://www.linkedin.com/company/corporalityg/")}>
                                            <i className="fa fa-linkedin"></i>
                                        </div>
                                        <div className="wce-banner-social-icon" onClick={() => window.open("https://in.pinterest.com/CorporalityG/_created/")}>
                                            <i className="fa fa-pinterest"></i>
                                        </div>
                                        <div className="wce-banner-social-icon" onClick={() => window.open("https://www.youtube.com/channel/UC4EISt8kHI4zzpmbIBMIBbg")}>
                                            <i className="fa fa-youtube-play"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="container-lg">
                                    <div className="row wce-banner-content-row">
                                        <div className="col-lg-12">
                                            <h1>{`${pageDetail.detail.banner_title}`}</h1>
                                            <div dangerouslySetInnerHTML={{ __html: pageDetail.detail.banner_description }}></div>
                                            <Link className="wce-banner-btn" to={`/${pageDetail.detail.banner_btn_link}`} onClick={() => { topHandle() }} >{`${pageDetail.detail.banner_btn_text}`}</Link>
                                        </div>

                                        <div className="wce-banner-phone">
                                            <img src={BASE_URL + '/img/WhyCorporalityEffect/phone-icon.png'} alt="Phone" className="phone-icon" onClick={() => window.open("tel:61283794089", "_self")} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="wce-commitment-section">
                                <div className="container-lg">
                                    <div className="row wce-commitment-title-row">
                                        <div className="col-lg-12">
                                            <div className="wce-commitment-title">
                                                <img src={`${API_IMG_URL}pages/${pageDetail.detail.commitment_title_image}`} alt="Commitment" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row wce-commitment-boxes-row">
                                        <CommitmentItem
                                            title={`${pageDetail.detail.commitment_item_1_title}`}
                                            subtitle={`<p>${pageDetail.detail.commitment_item_1_description}</p>`}
                                        />

                                        <CommitmentItem
                                            title={`${pageDetail.detail.commitment_item_2_title}`}
                                            subtitle={`<p>${pageDetail.detail.commitment_item_2_description}</p>`}
                                        />

                                        <CommitmentItem
                                            title={`${pageDetail.detail.commitment_item_3_title}`}
                                            subtitle={`<p>${pageDetail.detail.commitment_item_3_description}</p>`}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="wce-business-section">
                                <img src={BASE_URL + '/img/WhyCorporalityEffect/business-vector.png'} alt="Vector" className="business-vector" />
                                <img src={BASE_URL + '/img/WhyCorporalityEffect/business-rec-1.png'} alt="Rec 1" className="business-rec-1" />
                                <img src={BASE_URL + '/img/WhyCorporalityEffect/business-rec-2.png'} alt="Rec 2" className="business-rec-2" />
                                <img src={BASE_URL + '/img/WhyCorporalityEffect/business-rec-3.png'} alt="Rec 3" className="business-rec-3" />
                                <img src={BASE_URL + '/img/WhyCorporalityEffect/business-rec-4.png'} alt="Rec 4" className="business-rec-4" />

                                <div className="container-lg">
                                    <div className="row wce-business-row">
                                        <div className="col-lg-12">
                                            <h2>{`${pageDetail.detail.business_need_title}`}</h2>
                                            <div className="wce-business-content" dangerouslySetInnerHTML={{ __html: pageDetail.detail.business_need_description }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="wce-right-section">
                                <div className="container-lg">
                                    <div className="row wce-right-title-row">
                                        <div className="col-lg-12">
                                            <h2>{`${pageDetail.detail.right_for_you_title}`}</h2>
                                            <h3>{`${pageDetail.detail.right_for_you_subtitle}`}</h3>
                                        </div>
                                    </div>

                                    <div className="row wce-right-boxes-row">
                                        <RightForYouItem
                                            thumbnail={`${API_IMG_URL}pages/${pageDetail.detail.right_for_you_item_1_icon}`}
                                            title={`${pageDetail.detail.right_for_you_item_1_title}`}
                                            subtitle={`${pageDetail.detail.right_for_you_item_1_description}`}
                                        />

                                        <RightForYouItem
                                            thumbnail={`${API_IMG_URL}pages/${pageDetail.detail.right_for_you_item_2_icon}`}
                                            title={`${pageDetail.detail.right_for_you_item_2_title}`}
                                            subtitle={`${pageDetail.detail.right_for_you_item_2_description}`}
                                        />

                                        <RightForYouItem
                                            thumbnail={`${API_IMG_URL}pages/${pageDetail.detail.right_for_you_item_3_icon}`}
                                            title={`${pageDetail.detail.right_for_you_item_3_title}`}
                                            subtitle={`${pageDetail.detail.right_for_you_item_3_description}`}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="wce-work-section">
                                <div className="container-lg">
                                    <div className="row wce-work-title-row">
                                        <div className="col-lg-12">
                                            <h2>{`${pageDetail.detail.work_title}`}</h2>
                                            <p>{`${pageDetail.detail.work_description}`}</p>
                                            <Link className="wce-work-btn" to={`/${pageDetail.detail.work_btn_link}`} onClick={() => { topHandle() }} >{`${pageDetail.detail.work_btn_text}`}</Link>
                                        </div>
                                    </div>

                                    <div className="row wce-work-accordion-row">
                                        <div className="col-lg-12">
                                            <Accordion className="wce-work-accordion-main">
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header>
                                                        <div className="wce-work-heading">
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
                                                        <div className="wce-work-heading">
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
                                                        <div className="wce-work-heading">
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
                                                        <div className="wce-work-heading">
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
                                                        <div className="wce-work-heading">
                                                            <img src={`${API_IMG_URL}pages/${pageDetail.detail.work_item_5_icon}`} alt={`${pageDetail.detail.work_item_5_title}`} />
                                                            <span>{`${pageDetail.detail.work_item_5_title}`}</span>
                                                        </div>
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        <p>{`${pageDetail.detail.work_item_5_description}`}</p>
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                                <Accordion.Item eventKey="5">
                                                    <Accordion.Header>
                                                        <div className="wce-work-heading">
                                                            <img src={`${API_IMG_URL}pages/${pageDetail.detail.work_item_6_icon}`} alt={`${pageDetail.detail.work_item_6_title}`} />
                                                            <span>{`${pageDetail.detail.work_item_6_title}`}</span>
                                                        </div>
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        <p>{`${pageDetail.detail.work_item_6_description}`}</p>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="wce-key-elements-section">
                                <div className="container-lg">
                                    <div className="row wce-key-elements-title-row">
                                        <div className="col-lg-12">
                                            <h2>{`${pageDetail.detail.key_elements_title}`}</h2>
                                            <p>{`${pageDetail.detail.key_elements_subtitle}`}</p>
                                        </div>
                                    </div>

                                    <div className="row wce-key-elements-boxes-row">
                                        <KeyElementItem
                                            title={`${pageDetail.detail.key_elements_item_1_title}`}
                                            content={`<p>${pageDetail.detail.key_elements_item_1_description}</p>`}
                                        />

                                        <KeyElementItem
                                            title={`${pageDetail.detail.key_elements_item_2_title}`}
                                            content={`<p>${pageDetail.detail.key_elements_item_2_description}</p>`}
                                        />

                                        <KeyElementItem
                                            title={`${pageDetail.detail.key_elements_item_3_title}`}
                                            content={`<p>${pageDetail.detail.key_elements_item_3_description}</p>`}
                                        />

                                        <KeyElementItem
                                            title={`${pageDetail.detail.key_elements_item_4_title}`}
                                            content={`<p>${pageDetail.detail.key_elements_item_4_description}</p>`}
                                        />

                                        <KeyElementItem
                                            title={`${pageDetail.detail.key_elements_item_5_title}`}
                                            content={`<p>${pageDetail.detail.key_elements_item_5_description}</p>`}
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

export default WhyCorporalityEffect