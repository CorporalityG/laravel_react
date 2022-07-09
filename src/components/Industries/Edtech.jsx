import React, { useEffect, useState } from 'react'
import './industry.css'
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../config'
import { Link } from 'react-router-dom'
import { OtherIndustryItem } from './OtherIndustryItem'
import { GetInvolved } from '../ServiceInsights/GetInvolved'
import { ServicesAskQuote } from '../ServicesAskQuote/ServicesAskQuote';
import AOS from "aos";
import { Helmet } from "react-helmet";
import { GlobalConference } from './GlobalConference'

function descLimit(text, size) {
    return text?.length > size ? text.substr(0, size - 1) + '...' : text + '...';
}

function Edtech() {

    const category = 'edtech';

    const [latestIndustrialArticle, setLatestIndustrialArticle] = useState([]);
    const [realtedIndustrialArticles, setRealtedIndustrialArticles] = useState([]);

    const page_slug = 'edutech';

    const [pageDetail, setPageDetail] = useState([]);

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });

        getLatestIndustrialArticleData()
        getRealtedIndustrialArticlesData();
        getPageDetail()
    }, []);

    async function getLatestIndustrialArticleData() {
        let result = await fetch(`${API_BASE_URL}/latest-industrial-article/${category}`);
        result = await result.json();
        setLatestIndustrialArticle(result);
    }

    async function getRealtedIndustrialArticlesData() {
        let result = await fetch(`${API_BASE_URL}/realted-industrial-articles/${category}`);
        result = await result.json();
        setRealtedIndustrialArticles(result);
    }

    async function getPageDetail() {
        let result = await fetch(`${API_BASE_URL}/page-detail/${page_slug}`);
        result = await result.json();
        setPageDetail(result);
    }

    return (
        <div className='industry-page edtech-page'>
            <Helmet>
                {pageDetail.meta_title && <title>{`${pageDetail.meta_title}`}</title>}
                {pageDetail.meta_description && <meta name="description" content={`${pageDetail.meta_description}`} />}
                {pageDetail.meta_keywords && <meta name="keywords" content={pageDetail.meta_keywords} />}
                <link rel="canonical" href={`${BASE_URL}/brand-positioning/`} />
            </Helmet>

            <div className='industry-banner-section'>
                {
                    pageDetail.detail ?
                        <>
                            <img src={`${API_IMG_URL}pages/${pageDetail.detail.banner_image}`} alt={`${pageDetail.detail.banner_title}`} className="industry-banner-img" />

                            <div className='industry-banner-content-main'>
                                <div className='container-lg'>
                                    <div className='row'>
                                        <div className='col-lg-4'>
                                            <div className='industry-banner-content'>
                                                <h1>{`${pageDetail.detail.banner_title}`}</h1>
                                                <div className='industry-banner-desc' dangerouslySetInnerHTML={{ __html: pageDetail.detail.banner_description }}></div>
                                            </div>
                                        </div>

                                        <div className='col-lg-8'>
                                            <div className='row'>
                                                <div className='col-lg-6 offset-lg-5'>
                                                    <div className='industry-banner-ebook'>
                                                        <div className='ib-ebook-ttile'>{`${pageDetail.detail.ebook_title}`}</div>

                                                        <img src={`${API_IMG_URL}pages/${pageDetail.detail.ebook_image}`} alt={`${pageDetail.detail.ebook_title}`} className="industry-cs" />
                                                        <img src={`${BASE_URL}/img/industries/cs-pattern.png`} alt={`cs-pattern`} className="industry-cs-pattern" />

                                                        <Link to={`/${pageDetail.detail.ebook_btn_link ?? ''}`} className='industry-cs-link'>{`${pageDetail.detail.ebook_btn_text}`}</Link>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='row industry-banner-paper-survey-row'>
                                                <div className='col-md-6'>
                                                    <div className='industry-banner-paper-survey-item industry-banner-paper' style={{ backgroundImage: `url(${API_IMG_URL}pages/${pageDetail.detail.research_paper_image})` }}>
                                                        <div className='paper-survey-item-title'>{`${pageDetail.detail.research_paper_title}`}</div>

                                                        <div className='paper-survey-item-subtitle'>{`${pageDetail.detail.research_paper_subtitle}`}</div>

                                                        <a href={pageDetail.detail.research_paper_pdf ? `${API_IMG_URL}pages/${pageDetail.detail.research_paper_pdf}` : '/'} target="_blank" className='paper-survey-item-link'>{`${pageDetail.detail.research_paper_btn_text}`}</a>
                                                    </div>
                                                </div>

                                                <div className='col-md-6'>
                                                    <div className='industry-banner-paper-survey-item industry-banner-survey'>
                                                        <div className='ib-s-title'>{`${pageDetail.detail.survey_title}`}</div>

                                                        <img src={`${API_IMG_URL}pages/${pageDetail.detail.survey_image}`} alt={`${pageDetail.detail.survey_title}`} className="industry-your-om" />

                                                        <Link to={`/${pageDetail.detail.survey_btn_link ?? ''}`}className='paper-survey-item-link'>{`${pageDetail.detail.survey_btn_text}`}</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                        : null
                }
            </div>

            <div className='industry-blog-name-section'>
                <div className='container-lg'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            {
                                latestIndustrialArticle ?
                                    <h2>{latestIndustrialArticle.title}</h2>
                                    : null
                            }
                        </div>

                        <div className='col-lg-6'>
                            <div className='industry-blog-name-desc'>
                                {
                                    latestIndustrialArticle.title ?
                                        <p>
                                            <span dangerouslySetInnerHTML={{ __html: descLimit(latestIndustrialArticle.short_description ?? latestIndustrialArticle.description, 250) }}></span>
                                            <Link to={`/industry/${latestIndustrialArticle.slug}`}>Read More</Link>
                                        </p>
                                        : null
                                }

                                {
                                    realtedIndustrialArticles && realtedIndustrialArticles.length > 0 ?
                                        <>
                                            <p className='industry-blog-name-related'>Read the related blog</p>
                                            <ul>
                                                {
                                                    realtedIndustrialArticles.map((item) =>
                                                        <li key={`${item.id}`}>
                                                            <Link to={`/industry/${item.slug}`}>{item.title}</Link>
                                                        </li>
                                                    )
                                                }
                                            </ul>
                                        </>
                                        : null
                                }
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            {
                                latestIndustrialArticle ?
                                    <>
                                        {
                                            latestIndustrialArticle.image ?
                                                <img src={`${API_IMG_URL + latestIndustrialArticle.image}`} alt={`${latestIndustrialArticle.title}`} className="blog-name-img" />
                                                : null
                                        }
                                    </>
                                    : null
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className='industry-other-industries-section'>
                <div className='container-lg'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <h2>Related Industries</h2>
                        </div>
                    </div>

                    <div className='row industry-other-industries-row'>
                        <OtherIndustryItem
                            icon={`${BASE_URL}/img/industries/nanotech.png`}
                            hoverIcon={`${BASE_URL}/img/industries/nanotech-hover.png`}
                            category={`Information Technology`}
                            slug={`information-technology`}
                        />

                        <OtherIndustryItem
                            icon={`${BASE_URL}/img/industries/metal-industry.png`}
                            hoverIcon={`${BASE_URL}/img/industries/metal-industry-hover.png`}
                            category={`Metal Industry`}
                            slug={`metal`}
                        />

                        <OtherIndustryItem
                            icon={`${BASE_URL}/img/industries/hightech.png`}
                            hoverIcon={`${BASE_URL}/img/industries/hightech-hover.png`}
                            category={`Utilities and Energy`}
                            slug={`utilities-and-energy`}
                        />

                        <OtherIndustryItem
                            icon={`${BASE_URL}/img/industries/finance.png`}
                            hoverIcon={`${BASE_URL}/img/industries/finance-hover.png`}
                            category={`Biotech`}
                            slug={`biotech`}
                        />

                        <OtherIndustryItem
                            icon={`${BASE_URL}/img/industries/construction.png`}
                            hoverIcon={`${BASE_URL}/img/industries/construction-hover.png`}
                            category={`Construction`}
                            slug={`construction`}
                        />

                        <OtherIndustryItem
                            icon={`${BASE_URL}/img/industries/agriculture.png`}
                            hoverIcon={`${BASE_URL}/img/industries/agriculture-hover.png`}
                            category={`Agriculture`}
                            slug={`agriculture`}
                        />

                        <OtherIndustryItem
                            icon={`${BASE_URL}/img/industries/geospatial.png`}
                            hoverIcon={`${BASE_URL}/img/industries/geospatial-hover.png`}
                            category={`Geospatial`}
                            slug={`geospatial`}
                        />

                        <OtherIndustryItem
                            icon={`${BASE_URL}/img/industries/manufacturing.png`}
                            hoverIcon={`${BASE_URL}/img/industries/manufacturing-hover.png`}
                            category={`Manufacturing`}
                            slug={`manufacturing`}
                        />
                    </div>
                </div>
            </div>

            <GlobalConference />

            <GetInvolved />

            <ServicesAskQuote />

        </div>
    )
}

export default Edtech