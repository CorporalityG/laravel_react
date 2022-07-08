import React, { useState, useEffect } from 'react'
import './MarketingModelApproch.css'
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../config'
import Aos from "aos";
import ServicesClients from '../ServicesClients/ServicesClients';
import ServicesInsights from '../ServicesInsights/ServicesInsights';
import { ServicesAskQuote } from '../ServicesAskQuote/ServicesAskQuote';
import { MarketingApproachStep } from './MarketingApproachStep';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';

function MarketingModelApproch() {

    const page_slug = 'marketing-model-approch';

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

    return (
        <>
            <Helmet>
                {pageDetail.meta_title && <title>{`${pageDetail.meta_title}`}</title>}
                {pageDetail.meta_description && <meta name="description" content={`${pageDetail.meta_description}`} />}
                {pageDetail.meta_keywords && <meta name="keywords" content={pageDetail.meta_keywords} />}
                <link rel="canonical" href={`${BASE_URL}/marketing-model-approch/`} />
            </Helmet>

            {
                pageDetail.detail ?
                    <>
                        <div className="mma-banner-section">
                            <img src={`${BASE_URL}/img/MarketingModelApproch/banner-bg.png`} alt="banner-bg" className="mma-banner-bg" data-aos="zoom-in-up" />

                            <img src={`${BASE_URL}/img/MarketingModelApproch/banner-close.png`} alt="banner-close" className="mma-b-close-1" data-aos="zoom-in-up" />
                            <img src={`${BASE_URL}/img/MarketingModelApproch/banner-close.png`} alt="banner-close" className="mma-b-close-2" data-aos="zoom-in-up" />
                            <img src={`${BASE_URL}/img/MarketingModelApproch/banner-close.png`} alt="banner-close" className="mma-b-close-3" data-aos="zoom-in-up" />

                            <img src={`${BASE_URL}/img/MarketingModelApproch/banner-circle-small.png`} alt="banner-circle-small" className="mma-b-circle-s" data-aos="zoom-in-up" />
                            <img src={`${BASE_URL}/img/MarketingModelApproch/banner-circle-big.png`} alt="banner-circle-big" className="mma-b-circle-b" data-aos="zoom-in-up" />

                            <img src={`${BASE_URL}/img/MarketingModelApproch/banner-dot.png`} alt="banner-dot" className="mma-b-dot" data-aos="zoom-in-up" />
                            <img src={`${BASE_URL}/img/MarketingModelApproch/banner-circle.png`} alt="banner-circle" className="mma-b-circle" data-aos="zoom-in-up" />
                            <img src={`${BASE_URL}/img/MarketingModelApproch/banner-rec.png`} alt="banner-rec" className="mma-b-rec" data-aos="zoom-in-up" />

                            <div className="container-fluid">
                                <div className="row mma-banner-row">
                                    <div className="col-lg-5 offset-lg-1">
                                        <div className="mma-b-content">
                                            <div className="mma-b-title" data-aos="fade-up">{`${pageDetail.detail.banner_heading}`}</div>
                                            <div data-aos="fade-up" data-aos-delay="100">
                                                <h1>{`${pageDetail.detail.banner_title}`}</h1>
                                            </div>
                                            <div className="mma-b-subtitle" data-aos="fade-up" data-aos-delay="300">{`${pageDetail.detail.banner_subtitle}`}</div>
                                            <div className="mma-b-desc" data-aos="fade-up" data-aos-delay="500">
                                                <p>{`${pageDetail.detail.banner_description}`}</p>
                                            </div>

                                            <div className="cmo-b-form" data-aos="fade-up" data-aos-delay="500">
                                                <a href={`${pageDetail.detail.banner_btn_link}`} target="_blank" className="cmo-b-btn">{`${pageDetail.detail.banner_btn_text}`}</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 pr-0">
                                        <div className="mma-b-img-main">
                                            <img src={`${API_IMG_URL}pages/${pageDetail.detail.banner_image}`} alt={`${pageDetail.detail.banner_title}`} className="mma-b-img" data-aos="zoom-in-up" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mma-social-section">
                                <div className="mma-social-row" data-aos="fade-right" data-aos-delay="400">
                                    <a href='https://www.facebook.com/CorporalityG' target="_blank"><i className="fa fa-facebook-f"></i></a>
                                    <a href='https://twitter.com/corporalityg' target="_blank"><i className="fa fa-twitter"></i></a>
                                    <a href='https://www.instagram.com/corporalityg/' target="_blank"><i className="fa fa-instagram"></i></a>
                                    <a href='https://www.linkedin.com/company/corporality/' target="_blank"><i className="fa fa-linkedin"></i></a>
                                    <a href='https://in.pinterest.com/CorporalityG/' target="_blank"><i className="fa fa-pinterest"></i></a>
                                    <a href='https://www.youtube.com/channel/UC4EISt8kHI4zzpmbIBMIBbg' target="_blank"><i className="fa fa-youtube-play"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="mma-models-section">
                            <div className="container-lg">
                                <div className="row mma-models-title-row">
                                    <div className="col-lg-12">
                                        <div className="mma-models-title">
                                            <div data-aos="fade-up">
                                                <h2>{`${pageDetail.detail.marketing_models_title}`}</h2>
                                            </div>
                                            <div data-aos="fade-up" data-aos-delay="300">
                                                <p>{`${pageDetail.detail.marketing_models_subtitle}`}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row mma-models-content-row">
                                    <div className="col-lg-6 mma-ec-col">
                                        <div className="mma-models-banner">
                                            <div className='mma-models-bg' data-aos="zoom-in-up" data-aos-duration="1500"></div>
                                            <img src={`${API_IMG_URL}pages/${pageDetail.detail.marketing_models_image}`} alt={`${pageDetail.detail.marketing_models_title}`} data-aos="zoom-in-up" />
                                            <div className="mma-eb-title" data-aos="fade-up">{`${pageDetail.detail.marketing_models_image_caption}`}</div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 mma-ec-col">
                                        <div className="mma-models-content" data-aos="fade-up" data-aos-delay="300" dangerouslySetInnerHTML={{ __html: pageDetail.detail.marketing_models_description }}></div>

                                        <Link className="mma-models-btn" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000" to={`/${pageDetail.detail.marketing_models_btn_link ?? ''}`}>{`${pageDetail.detail.marketing_models_btn_text}`}</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mma-marketing-approach-section">
                            <div className="container-lg">
                                <div className="row mma-ma-title-row">
                                    <div className="col-lg-12">
                                        <div className="mma-ma-title">
                                            <div data-aos="fade-up">
                                                <h2>{`${pageDetail.detail.marketing_approach_title}`}</h2>
                                            </div>
                                            <div data-aos="fade-up" data-aos-delay="300">
                                                <p>{`${pageDetail.detail.marketing_approach_description}`}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row mma-ma-steps-row">
                                    <div className="mma-ma-border"></div>
                                    <div className="col-lg-10 mma-ma-steps-col mma-ma-steps-col-1">
                                        <MarketingApproachStep
                                            bgIcon={`${BASE_URL}/img/MarketingModelApproch/step-polygon-1.png`}
                                            number={`01`}
                                            title={`${pageDetail.detail.marketing_approach_step_1_title}`}
                                        />

                                        <MarketingApproachStep
                                            bgIcon={`${BASE_URL}/img/MarketingModelApproch/step-polygon-2.png`}
                                            number={`02`}
                                            title={`${pageDetail.detail.marketing_approach_step_2_title}`}
                                        />

                                        <MarketingApproachStep
                                            bgIcon={`${BASE_URL}/img/MarketingModelApproch/step-polygon-3.png`}
                                            number={`03`}
                                            title={`${pageDetail.detail.marketing_approach_step_3_title}`}
                                        />
                                    </div>

                                    <div className="col-lg-12 mma-ma-steps-col mma-ma-steps-col-2">
                                        <MarketingApproachStep
                                            bgIcon={`${BASE_URL}/img/MarketingModelApproch/step-polygon-4.png`}
                                            number={`04`}
                                            title={`${pageDetail.detail.marketing_approach_step_4_title}`}
                                        />

                                        <MarketingApproachStep
                                            bgIcon={`${BASE_URL}/img/MarketingModelApproch/step-polygon-3.png`}
                                            number={`05`}
                                            title={`${pageDetail.detail.marketing_approach_step_5_title}`}
                                        />

                                        <MarketingApproachStep
                                            bgIcon={`${BASE_URL}/img/MarketingModelApproch/step-polygon-1.png`}
                                            number={`06`}
                                            title={`${pageDetail.detail.marketing_approach_step_6_title}`}
                                        />

                                        <MarketingApproachStep
                                            bgIcon={`${BASE_URL}/img/MarketingModelApproch/step-polygon-2.png`}
                                            number={`07`}
                                            title={`${pageDetail.detail.marketing_approach_step_7_title}`}
                                        />
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

export default MarketingModelApproch