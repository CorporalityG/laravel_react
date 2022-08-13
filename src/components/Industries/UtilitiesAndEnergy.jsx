import React, { useEffect, useState } from 'react'
import './industry.css'
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../config'
import { Link } from 'react-router-dom'
import { OtherIndustryItem } from './OtherIndustryItem'
import { GetInvolved } from '../ServiceInsights/GetInvolved'
import { ServicesAskQuote } from '../ServicesAskQuote/ServicesAskQuote';
import AOS from "aos";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { GlobalConference } from './GlobalConference'
import { ResearchPaperModal } from './ResearchPaperModal'
import { EBookModal } from './EBookModal'
import { SurveyModal } from './SurveyModal'

function descLimit(text, size) {
    return text?.length > size ? text.substr(0, size - 1) + '...' : text + '...';
}

function UtilitiesAndEnergy() {

    const category = 'utilities-and-energy';

    const [latestIndustrialArticle, setLatestIndustrialArticle] = useState([]);
    const [realtedIndustrialArticles, setRealtedIndustrialArticles] = useState([]);

    const page_slug = 'utilities-and-energy';

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

    const [show, setShow] = useState(0);

    const handleClose = () => setShow(false);
    const handleShow = (modalId) => {
        setShow(modalId);
    }

    return (
        <div className='industry-page utilities-and-energy-page'>
            <HelmetProvider>
                <Helmet>
                    {pageDetail.meta_title && <title>{`${pageDetail.meta_title}`}</title>}
                    {pageDetail.meta_description && <meta name="description" content={`${pageDetail.meta_description}`} />}
                    {pageDetail.meta_keywords && <meta name="keywords" content={pageDetail.meta_keywords} />}
                    <link rel="canonical" href={`${BASE_URL}/${page_slug}/`} />
                </Helmet>

                <div className='industry-banner-section'>
                    {
                        pageDetail.detail ?
                            <>
                                {pageDetail.detail.banner_image && <img src={`${API_IMG_URL}pages/${pageDetail.detail.banner_image}`} alt={`${pageDetail.detail.banner_title}`} className="industry-banner-img" />}

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

                                                            {pageDetail.detail.ebook_image && <img src={`${API_IMG_URL}pages/${pageDetail.detail.ebook_image}`} alt={`${pageDetail.detail.ebook_title}`} className="industry-cs" />}
                                                            <img src={`${BASE_URL}/img/industries/cs-pattern.png`} alt={`cs-pattern`} className="industry-cs-pattern" />

                                                            <div className="industry-cs-link" onClick={() => handleShow('ebook')}>{`${pageDetail.detail.ebook_btn_text}`}</div>

                                                            <EBookModal show={show} handleClose={handleClose} src={`${pageDetail.detail.ebook_iframe ?? ''}`} />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='row industry-banner-paper-survey-row'>
                                                    <div className='col-md-6'>
                                                        <div className='industry-banner-paper-survey-item industry-banner-paper' style={{ backgroundImage: `url(${API_IMG_URL}pages/${pageDetail.detail.research_paper_image})` }}>
                                                            <div className='paper-survey-item-title'>{`${pageDetail.detail.research_paper_title}`}</div>

                                                            <div className='paper-survey-item-subtitle'>{`${pageDetail.detail.research_paper_subtitle}`}</div>

                                                            <div className="paper-survey-item-link" onClick={() => handleShow(1)}>{`${pageDetail.detail.research_paper_btn_text}`}</div>

                                                            <ResearchPaperModal show={show} handleClose={handleClose} src={`${pageDetail.detail.research_paper_iframe ?? ''}`} />
                                                        </div>
                                                    </div>

                                                    <div className='col-md-6'>
                                                        <div className='industry-banner-paper-survey-item industry-banner-survey'>
                                                            <div className='ib-s-title'>{`${pageDetail.detail.survey_title}`}</div>

                                                            {pageDetail.detail.survey_image && <img src={`${API_IMG_URL}pages/${pageDetail.detail.survey_image}`} alt={`${pageDetail.detail.survey_title}`} className="industry-your-om" />}

                                                            <div className="paper-survey-item-link" onClick={() => handleShow('survey')}>{`${pageDetail.detail.survey_btn_text}`}</div>

                                                            <SurveyModal show={show} handleClose={handleClose} src={`${pageDetail.detail.survey_iframe ?? ''}`} />
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
                            <div className='col-lg-6'>
                                {
                                    latestIndustrialArticle ?
                                        <h2>{latestIndustrialArticle.title}</h2>
                                        : null
                                }

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

                                                <Link to={`/search/${category}`} className="industry-blog-name-link">Learn More <svg viewBox="0 0 21 18" focusable="false" aria-hidden="true"><path d="M0.266478 8.99987C0.266478 9.33987 0.40148 9.66486 0.641486 9.90486C0.881493 10.1449 1.20648 10.2799 1.54648 10.2799L15.5852 10.2799L10.3814 15.1311C10.1189 15.3586 9.96136 15.6836 9.94261 16.0311C9.92511 16.3773 10.0489 16.7173 10.2864 16.9711C10.5239 17.2248 10.8538 17.3711 11.2014 17.3773C11.5488 17.3823 11.8839 17.2461 12.1288 16.9998L19.71 9.93741C19.9687 9.69491 20.1162 9.35616 20.1162 9.00115C20.1162 8.64614 19.9687 8.30739 19.71 8.0649L12.1289 0.999936C11.6113 0.51744 10.8014 0.544929 10.3189 1.06244C9.83637 1.57869 9.86511 2.38992 10.3814 2.87242L15.5852 7.71978L1.54648 7.71978C1.20648 7.71978 0.881492 7.85478 0.641492 8.09478C0.401492 8.33479 0.266482 8.65978 0.266482 8.99978L0.266478 8.99987Z"></path></svg></Link>
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
                                category={`Industrial Equipment`}
                                slug={`industrial-equipment`}
                            />

                            <OtherIndustryItem
                                icon={`${BASE_URL}/img/industries/metal-industry.png`}
                                hoverIcon={`${BASE_URL}/img/industries/metal-industry-hover.png`}
                                category={`Metal Industry`}
                                slug={`metal`}
                            />

                            <OtherIndustryItem
                                icon={`${BASE_URL}/img/industries/finance.png`}
                                hoverIcon={`${BASE_URL}/img/industries/finance-hover.png`}
                                category={`Fintech / Finance`}
                                slug={`fintech`}
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
                                category={`Biotech`}
                                slug={`biotech`}
                            />

                            <OtherIndustryItem
                                icon={`${BASE_URL}/img/industries/hightech.png`}
                                hoverIcon={`${BASE_URL}/img/industries/hightech-hover.png`}
                                category={`Hightech`}
                                slug={`high-tech`}
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
            </HelmetProvider>
        </div>
    )
}

export default UtilitiesAndEnergy