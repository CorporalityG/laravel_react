import React, { useEffect, useState } from 'react'
import './WhatIsCorporalityEffect.css'
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../config';
import { Link } from 'react-router-dom';
import { FactorDrivingConclusionItem } from './FactorDrivingConclusionItem';
import { KeyElementItem } from './KeyElementItem';
import { Helmet } from "react-helmet";

function WhatIsCorporalityEffect() {

    const page_slug = 'what-is-corporality-effect';

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
            <Helmet>
                {pageDetail.meta_title && <title>{`${pageDetail.meta_title}`}</title>}
                {pageDetail.meta_description && <meta name="description" content={`${pageDetail.meta_description}`} />}
                {pageDetail.meta_keywords && <meta name="keywords" content={pageDetail.meta_keywords} />}
                <link rel="canonical" href={`${BASE_URL}/what-is-corporality-effect/`} />
            </Helmet>

            {
                pageDetail.detail ?
                    <>
                        <div className="wice-banner-main">
                            <img src={BASE_URL + '/img/WhatIsCorporalityEffect/banner-dots.png'} alt="What is Corporality Effect?" className="wice-banner-img" />

                            <img src={BASE_URL + '/img/WhatIsCorporalityEffect/rec-1.png'} alt="Rec 1" className="rec-1" />
                            <img src={BASE_URL + '/img/WhatIsCorporalityEffect/rec-2.png'} alt="Rec 2" className="rec-2" />

                            <div className="wice-banner-social-main">
                                <div className="wice-banner-social-img">
                                    <img src={BASE_URL + '/img/WhatIsCorporalityEffect/social.png'} alt="Social" />
                                </div>
                                <div className="wice-banner-social-icon-main">
                                    <div className="wice-banner-social-icon" onClick={() => window.open("https://www.facebook.com/CorporalityG/")}>
                                        <i className="fa fa-facebook-f"></i>
                                    </div>
                                    <div className="wice-banner-social-icon" onClick={() => window.open("https://twitter.com/corporalityg/")}>
                                        <i className="fa fa-twitter"></i>
                                    </div>
                                    <div className="wice-banner-social-icon" onClick={() => window.open("https://www.instagram.com/corporalityg/")}>
                                        <i className="fa fa-instagram"></i>
                                    </div>
                                    <div className="wice-banner-social-icon" onClick={() => window.open("https://www.linkedin.com/company/corporalityg/")}>
                                        <i className="fa fa-linkedin"></i>
                                    </div>
                                    <div className="wice-banner-social-icon" onClick={() => window.open("https://in.pinterest.com/CorporalityG/_created/")}>
                                        <i className="fa fa-pinterest"></i>
                                    </div>
                                    <div className="wice-banner-social-icon" onClick={() => window.open("https://www.youtube.com/channel/UC4EISt8kHI4zzpmbIBMIBbg")}>
                                        <i className="fa fa-youtube-play"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="container-lg">
                                <div className="row wice-banner-content-row">
                                    <div className="col-lg-12">
                                        <div className="wice-banner-content">
                                            <h1>{`${pageDetail.detail.banner_title}`}</h1>
                                            <div className="sb-content" dangerouslySetInnerHTML={{ __html: pageDetail.detail.banner_description }}></div>

                                            <div className="wice-banner-btn-main">
                                                <Link className="wice-banner-btn" to={`/${pageDetail.detail.banner_btn_1_link ?? ''}`} onClick={() => { topHandle() }} >{`${pageDetail.detail.banner_btn_1_text}`}</Link>
                                                <Link className="wice-banner-btn" to={`/${pageDetail.detail.banner_btn_2_link ?? ''}`} onClick={() => { topHandle() }} >{`${pageDetail.detail.banner_btn_2_text}`}</Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="wice-banner-phone">
                                        <img src={BASE_URL + '/img/WhatIsCorporalityEffect/phone-icon.png'} alt="Phone" className="phone-icon" onClick={() => window.open("tel:61283794089", "_self")} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="wice-factor-section">
                            <div className="container-lg">
                                <div className="row wice-factor-content-row">
                                    <div className="col-lg-6">
                                        <div className="wice-factor-content">
                                            <h2>{`${pageDetail.detail.factor_driving_title}`}</h2>
                                            <p>{`${pageDetail.detail.factor_driving_subtitle}`}</p>
                                            <Link className="wice-factor-btn" to={`/${pageDetail.detail.factor_driving_btn_link ?? ''}`}>{`${pageDetail.detail.factor_driving_btn_text}`}</Link>

                                            <div dangerouslySetInnerHTML={{ __html: pageDetail.detail.factor_driving_description }}></div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="wice-factor-img">
                                            <img src={`${API_IMG_URL}pages/${pageDetail.detail.factor_driving_image}`} alt={`${pageDetail.detail.factor_driving_title}`} />
                                        </div>
                                    </div>
                                </div>

                                <div className="row wice-factor-boxes-row">
                                    <FactorDrivingConclusionItem
                                        title={`${pageDetail.detail.factor_driving_item_1_title}`}
                                        content={`<p>${pageDetail.detail.factor_driving_item_1_description}</p>`}
                                    />

                                    <FactorDrivingConclusionItem
                                        title={`${pageDetail.detail.factor_driving_item_2_title}`}
                                        content={`<p>${pageDetail.detail.factor_driving_item_2_description}</p>`}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="wice-origin-section">
                            <div className="container-lg">
                                <div className="row wice-origin-row">
                                    <div className="col-lg-6 offset-lg-6">
                                        <div className="wice-origin-content">
                                            <h2>{`${pageDetail.detail.origin_framework_title}`}</h2>
                                            <div dangerouslySetInnerHTML={{ __html: pageDetail.detail.origin_framework_description }}></div>

                                            <div className="wice-que-title">{`${pageDetail.detail.origin_framework_understand_title ?? ''}`}</div>
                                            <div dangerouslySetInnerHTML={{ __html: pageDetail.detail.origin_framework_understand_description }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="wice-effective-section">
                            <div className="container-lg">
                                <div className="row wice-effective-row">
                                    <img src={BASE_URL + '/img/WhatIsCorporalityEffect/effective-bg.png'} alt="Why is this effective?" className="wice-effective-img" />

                                    <div className="col-lg-12 wice-effective-col">
                                        <div className="wice-effective-content">
                                            <h2>{`${pageDetail.detail.why_effective_title ?? ''}`}</h2>
                                            <div dangerouslySetInnerHTML={{ __html: pageDetail.detail.why_effective_description }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="wice-marketing-section">
                            <img src={BASE_URL + '/img/WhatIsCorporalityEffect/marketing-vector.png'} alt="marketing-vector" className="marketing-vector" />
                            <img src={BASE_URL + '/img/WhatIsCorporalityEffect/marketing-rec-1.png'} alt="marketing-rec-1" className="marketing-rec-1" />
                            <img src={BASE_URL + '/img/WhatIsCorporalityEffect/marketing-rec-2.png'} alt="marketing-rec-2" className="marketing-rec-2" />
                            <img src={BASE_URL + '/img/WhatIsCorporalityEffect/marketing-rec-3.png'} alt="marketing-rec-3" className="marketing-rec-3" />
                            <img src={BASE_URL + '/img/WhatIsCorporalityEffect/marketing-rec-4.png'} alt="marketing-rec-4" className="marketing-rec-4" />

                            <div className="container-lg">
                                <div className="row wice-marketing-row">
                                    <div className="col-lg-12">
                                        <div className="wice-marketing-content">
                                            <div className="wice-marketing-heading">
                                                <h2>{`${pageDetail.detail.profitability_title_1 ?? ''}`}</h2>
                                                <h2>{`${pageDetail.detail.profitability_title_2 ?? ''}`}</h2>
                                            </div>
                                            <div className="wice-marketing-subtitle">{`${pageDetail.detail.profitability_subtitle ?? ''}`}</div>

                                            <div dangerouslySetInnerHTML={{ __html: pageDetail.detail.profitability_description }}></div>

                                            <Link className="wice-marketing-btn" to={`/${pageDetail.detail.profitability_btn_link ?? ''}`}>{`${pageDetail.detail.profitability_btn_text ?? ''}`}</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="wice-key-elements-section">
                            <div className="container-lg">
                                <div className="row wice-ke-title-row">
                                    <div className="col-lg-12">
                                        <h2>{`${pageDetail.detail.key_elements_title ?? ''}`}</h2>
                                    </div>
                                </div>

                                <div className="row wice-ke-boxes-row">
                                    <KeyElementItem
                                        thumbnail={`${API_IMG_URL}pages/${pageDetail.detail.key_elements_item_1_icon}`}
                                        title={`${pageDetail.detail.key_elements_item_1_title ?? ''}`}
                                    />

                                    <KeyElementItem
                                        thumbnail={`${API_IMG_URL}pages/${pageDetail.detail.key_elements_item_2_icon}`}
                                        title={`${pageDetail.detail.key_elements_item_2_title ?? ''}`}
                                    />

                                    <KeyElementItem
                                        thumbnail={`${API_IMG_URL}pages/${pageDetail.detail.key_elements_item_3_icon}`}
                                        title={`${pageDetail.detail.key_elements_item_3_title ?? ''}`}
                                    />

                                    <KeyElementItem
                                        thumbnail={`${API_IMG_URL}pages/${pageDetail.detail.key_elements_item_4_icon}`}
                                        title={`${pageDetail.detail.key_elements_item_4_title ?? ''}`}
                                    />

                                    <KeyElementItem
                                        thumbnail={`${API_IMG_URL}pages/${pageDetail.detail.key_elements_item_5_icon}`}
                                        title={`${pageDetail.detail.key_elements_item_5_title ?? ''}`}
                                    />
                                </div>
                            </div>
                        </div>
                    </>
                    : null
            }
        </>
    )
}

export default WhatIsCorporalityEffect