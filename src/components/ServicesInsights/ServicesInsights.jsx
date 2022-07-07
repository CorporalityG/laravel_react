import React, { useEffect, useState } from 'react'
import './ServicesInsights.css'
import { API_BASE_URL, API_IMG_URL } from '../../config'
import { Link } from 'react-router-dom';

function ServicesInsights() {

    const section_slug = 'our-insights-section';

    const [pageSectionDetail, setPageSectionDetail] = useState([]);

    const topHandle = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    useEffect(() => {
        getPageSectionDetail()
    }, []);

    async function getPageSectionDetail() {
        let result = await fetch(`${API_BASE_URL}/page-detail/${section_slug}`);
        result = await result.json();
        setPageSectionDetail(result);
    }

    return (
        <>
            <div className="services-insights-section">
                {
                    pageSectionDetail.detail ?
                        <div className="container-lg">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="services-insights-heading" data-aos="zoom-out-up">Our Insights</div>
                                </div>
                            </div>

                            <div className="row services-insights-grid-row">
                                <div className="col-lg-6 col-md-12 col-sm-12 mb-xs-20 p-0 services-insights-grid">
                                    <Link to={`/${pageSectionDetail.detail.insight_1_link}`} onClick={() => { topHandle() }} title={`${pageSectionDetail.detail.insight_1_title}`} >
                                        <figure className="services-insights-grid-img-effect" data-aos="fade-right">
                                            <img src={`${API_IMG_URL}pages/${pageSectionDetail.detail.insight_1_image}`} alt={`${pageSectionDetail.detail.insight_1_title}`} className="services-insights-grid-img" />
                                            <div className="bottom-gradient-do_more"></div>
                                            <figcaption>
                                                <h2 className="services-insights-grid-title">{`${pageSectionDetail.detail.insight_1_title}`}</h2>
                                                <div className="services-insights-grid-desc"></div>
                                            </figcaption>
                                        </figure>
                                    </Link>
                                </div>

                                <div className="col-lg-6 col-md-12 col-sm-12 mb-xs-20 services-insights-grid">
                                    <div className="row">
                                        <div className="col-sm-6 p-0">
                                            <a href={`${pageSectionDetail.detail.insight_2_link}`} target={`_blank`} title={`${pageSectionDetail.detail.insight_2_title}`}>
                                                <figure className="services-insights-grid-img-effect" data-aos="fade-down-right">
                                                    <img src={`${API_IMG_URL}pages/${pageSectionDetail.detail.insight_2_image}`} alt={`${pageSectionDetail.detail.insight_2_title}`} className="services-insights-grid-img" />
                                                    <div className="bottom-gradient-do_more"></div>
                                                    <figcaption>
                                                        <h2 className="services-insights-grid-title">{`${pageSectionDetail.detail.insight_2_title}`}</h2>
                                                        <div className="services-insights-grid-desc"></div>
                                                    </figcaption>
                                                </figure>
                                            </a>
                                        </div>

                                        <div className="col-sm-6 p-0">
                                            <a href={`${pageSectionDetail.detail.insight_3_link}`} target={`_blank`} title={`${pageSectionDetail.detail.insight_3_title}`}>
                                                <figure className="services-insights-grid-img-effect" data-aos="fade-down-left">
                                                    <img src={`${API_IMG_URL}pages/${pageSectionDetail.detail.insight_3_image}`} alt={`${pageSectionDetail.detail.insight_3_title}`} className="services-insights-grid-img" />
                                                    <div className="bottom-gradient-do_more"></div>
                                                    <figcaption>
                                                        <h2 className="services-insights-grid-title">{`${pageSectionDetail.detail.insight_3_title}`}</h2>
                                                        <div className="services-insights-grid-desc"></div>
                                                    </figcaption>
                                                </figure>
                                            </a>
                                        </div>

                                        <div className="col-sm-6 p-0">
                                            <a href={`${pageSectionDetail.detail.insight_4_link}`} target={`_blank`} title={`${pageSectionDetail.detail.insight_4_title}`}>
                                                <figure className="services-insights-grid-img-effect" data-aos="fade-up-right">
                                                    <img src={`${API_IMG_URL}pages/${pageSectionDetail.detail.insight_4_image}`} alt={`${pageSectionDetail.detail.insight_4_title}`} className="services-insights-grid-img" />
                                                    <div className="bottom-gradient-do_more"></div>
                                                    <figcaption>
                                                        <h2 className="services-insights-grid-title">{`${pageSectionDetail.detail.insight_4_title}`}</h2>
                                                        <div className="services-insights-grid-desc"></div>
                                                    </figcaption>
                                                </figure>
                                            </a>
                                        </div>

                                        <div className="col-sm-6 p-0">
                                            <a href={`${pageSectionDetail.detail.insight_5_link}`} target={`_blank`} title={`${pageSectionDetail.detail.insight_5_title}`}>
                                                <figure className="services-insights-grid-img-effect" data-aos="fade-up-left">
                                                    <img src={`${API_IMG_URL}pages/${pageSectionDetail.detail.insight_5_image}`} alt={`${pageSectionDetail.detail.insight_5_title}`} className="services-insights-grid-img" />
                                                    <div className="bottom-gradient-do_more"></div>
                                                    <figcaption>
                                                        <h2 className="services-insights-grid-title">{`${pageSectionDetail.detail.insight_5_title}`}</h2>
                                                        <div className="services-insights-grid-desc"></div>
                                                    </figcaption>
                                                </figure>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : null
                }
            </div>
        </>
    )
}

export default ServicesInsights