import React, { useState, useEffect } from 'react'
import './ServiceInsights.css'
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../config'
import { Link } from 'react-router-dom';
import { CapabilitiesItem } from './CapabilitiesItem';
import Carousel from 'react-bootstrap/Carousel'
import { AnnouncementItem } from './AnnouncementItem';
import ServicesClients from "../ServicesClients/ServicesClients";
import { GetInvolved } from './GetInvolved';
import AOS from "aos";
import { Helmet, HelmetProvider } from 'react-helmet-async';

function ServiceInsights() {

    const page_slug = 'service-insights';

    const [pageDetail, setPageDetail] = useState([]);
    const [latestArticles, setLatestArticles] = useState([]);
    const [announcements, setAnnouncements] = useState([]);

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });

        getLatestArticles();
        getAnnouncements();
        getPageDetail()
    }, []);

    async function getLatestArticles() {
        let result = await fetch(`${API_BASE_URL}/latest-articles`);
        result = await result.json();
        setLatestArticles(result);
    }

    async function getAnnouncements() {
        let result = await fetch(`${API_BASE_URL}/csuits-announcement`);
        result = await result.json();
        setAnnouncements(result);
    }

    async function getPageDetail() {
        let result = await fetch(`${API_BASE_URL}/page-detail/${page_slug}`);
        result = await result.json();
        setPageDetail(result);
    }

    return (
        <div className="service-insights-page">
            <HelmetProvider>
                <Helmet>
                    {pageDetail.meta_title && <title>{`${pageDetail.meta_title}`}</title>}
                    {pageDetail.meta_description && <meta name="description" content={`${pageDetail.meta_description}`} />}
                    {pageDetail.meta_keywords && <meta name="keywords" content={pageDetail.meta_keywords} />}
                    <link rel="canonical" href={`${BASE_URL}/service-insights/`} />
                </Helmet>

                {
                    pageDetail.detail ?
                        <>
                            <div className='si-announcement-section'>
                                <div className='container-lg'>
                                    <div className='row si-a-row'>
                                        <div className='col-lg-3 col-sm-4 si-a-banner'>
                                            {pageDetail.detail.event_image && <img src={`${API_IMG_URL}pages/${pageDetail.detail.event_image}`} alt={`${pageDetail.detail.event_title}`} />}
                                        </div>
                                        <div className='col-lg-9 col-sm-8 si-a-content'>
                                            <div className='si-a-desc'>
                                                <div className='si-a-date'>{`${pageDetail.detail.event_date_location}`}</div>
                                                <h1>{`${pageDetail.detail.event_title}`}</h1>
                                                <h2 className='si-a-organised'>{`${pageDetail.detail.event_organised_by}`}</h2>
                                            </div>
                                            <div className='si-a-btn'>
                                                <a href={`${pageDetail.detail.event_btn_link}`} target={`_blank`} className="si-a-link">{`${pageDetail.detail.event_btn_text}`}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='si-high-tech-industry-section'>
                                <div className='container-lg'>
                                    <div className='row'>
                                        <div className='col-lg-6'>
                                            <div className='si-hti-content'>
                                                <h2>{`${pageDetail.detail.strategy_guide_title}`}</h2>

                                                <div dangerouslySetInnerHTML={{ __html: pageDetail.detail.strategy_guide_description }}></div>

                                                <Link to={`/${pageDetail.detail.strategy_guide_btn_link}`} className="si-link-btn">{`${pageDetail.detail.strategy_guide_btn_text}`}</Link>
                                            </div>
                                        </div>

                                        <div className='col-lg-6'>
                                            <div className='si-hti-video'>
                                                <div dangerouslySetInnerHTML={{ __html: pageDetail.detail.strategy_guide_video_iframe }}></div>
                                                <div className='si-hti-v-content'>
                                                    <div className='si-hti-video-title'>{`${pageDetail.detail.strategy_guide_video_caption}`}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='si-client-conversion-section'>
                                <div className='container-lg'>
                                    <div className='row si-cc-row'>
                                        <div className='col-md-6'>
                                            <div className='si-cc-image'>
                                                {pageDetail.detail.reach_out_image && <img src={`${API_IMG_URL}pages/${pageDetail.detail.reach_out_image}`} alt={`${pageDetail.detail.reach_out_title}`} />}
                                            </div>
                                        </div>

                                        <div className='col-md-6'>
                                            <div className='si-cc-content'>
                                                <h2>{`${pageDetail.detail.reach_out_title}`}</h2>

                                                <Link to={`/${pageDetail.detail.reach_out_btn_link}`} className="si-learn-link">{`${pageDetail.detail.reach_out_btn_text}`}</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                        : null
                }

                {
                    latestArticles && latestArticles.length > 0 ?
                        <div id='capabilities' className='si-capabilities-section'>
                            <div className='container-lg'>
                                <div className='row si-c-row'>
                                    <div className='col-sm-8'>
                                        <div className='si-c-title'>
                                            <h2>Articles</h2>
                                        </div>
                                    </div>

                                    <div className='col-sm-4 si-c-title-btn-col'>
                                        <div className='si-c-title-btn'>
                                            <Link to={`/search/article`} className="si-link">All Articles <svg viewBox="0 0 21 18" focusable="false" aria-hidden="true"><path d="M0.266478 8.99987C0.266478 9.33987 0.40148 9.66486 0.641486 9.90486C0.881493 10.1449 1.20648 10.2799 1.54648 10.2799L15.5852 10.2799L10.3814 15.1311C10.1189 15.3586 9.96136 15.6836 9.94261 16.0311C9.92511 16.3773 10.0489 16.7173 10.2864 16.9711C10.5239 17.2248 10.8538 17.3711 11.2014 17.3773C11.5488 17.3823 11.8839 17.2461 12.1288 16.9998L19.71 9.93741C19.9687 9.69491 20.1162 9.35616 20.1162 9.00115C20.1162 8.64614 19.9687 8.30739 19.71 8.0649L12.1289 0.999936C11.6113 0.51744 10.8014 0.544929 10.3189 1.06244C9.83637 1.57869 9.86511 2.38992 10.3814 2.87242L15.5852 7.71978L1.54648 7.71978C1.20648 7.71978 0.881492 7.85478 0.641492 8.09478C0.401492 8.33479 0.266482 8.65978 0.266482 8.99978L0.266478 8.99987Z"></path></svg></Link>
                                        </div>
                                    </div>
                                </div>

                                <div className='row si-c-item-row'>
                                    {
                                        latestArticles.slice(0, 6).map((item) =>
                                            <CapabilitiesItem
                                                key={`${item.id}`}
                                                title={`${item.article_title}`}
                                                slug={`${item.article_slug}`}
                                                content={`${item.article_short_description ?? ''}`}
                                            />
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        : null
                }

                {
                    announcements && announcements.length > 0 ?
                        <div className='si-announcement-slider-section'>
                            <Carousel indicators={false} interval={5000}>
                                {
                                    announcements.map((item) =>
                                        <Carousel.Item key={`${item.id}`}>
                                            <AnnouncementItem
                                                thumbnail={`${item.image ? API_IMG_URL + item.image : ''}`}
                                                title={`${item.title}`}
                                                slug={`csuit/${item.slug}`}
                                                category={item.subcategories[0] !== undefined ? item.subcategories[0].category_name : null}
                                            />
                                        </Carousel.Item>
                                    )
                                }
                            </Carousel>
                        </div>
                        : null
                }

                <div className='si-organize-section'>
                    {
                        pageDetail.detail ?
                            <>
                                {pageDetail.detail.we_organize_image && <img src={`${API_IMG_URL}pages/${pageDetail.detail.we_organize_image}`} alt={`${pageDetail.detail.we_organize_title}`} className='si-o-bg-main' />}

                                <div className='si-o-title-section'>
                                    <div className='si-o-title-content'>
                                        <div className='container-lg'>
                                            <div className='row'>
                                                <div className='col-lg-7 offset-lg-5'>
                                                    <div className='si-o-title-description'>
                                                        <h2>{`${pageDetail.detail.we_organize_title}`}</h2>
                                                        <p>{`${pageDetail.detail.we_organize_description}`}</p>
                                                        <Link to={`/${pageDetail.detail.we_organize_btn_link}`} className="si-link">{`${pageDetail.detail.we_organize_btn_text}`} <svg viewBox="0 0 21 18" focusable="false" aria-hidden="true"><path d="M0.266478 8.99987C0.266478 9.33987 0.40148 9.66486 0.641486 9.90486C0.881493 10.1449 1.20648 10.2799 1.54648 10.2799L15.5852 10.2799L10.3814 15.1311C10.1189 15.3586 9.96136 15.6836 9.94261 16.0311C9.92511 16.3773 10.0489 16.7173 10.2864 16.9711C10.5239 17.2248 10.8538 17.3711 11.2014 17.3773C11.5488 17.3823 11.8839 17.2461 12.1288 16.9998L19.71 9.93741C19.9687 9.69491 20.1162 9.35616 20.1162 9.00115C20.1162 8.64614 19.9687 8.30739 19.71 8.0649L12.1289 0.999936C11.6113 0.51744 10.8014 0.544929 10.3189 1.06244C9.83637 1.57869 9.86511 2.38992 10.3814 2.87242L15.5852 7.71978L1.54648 7.71978C1.20648 7.71978 0.881492 7.85478 0.641492 8.09478C0.401492 8.33479 0.266482 8.65978 0.266482 8.99978L0.266478 8.99987Z"></path></svg></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='si-o-content-section'>
                                    <div className='container-lg'>
                                        <div className='row'>
                                            <div className='col-lg-4 si-o-content-right-col'>
                                                <div className='si-o-c-items'>
                                                    <div className='si-o-c-item'>
                                                        <Link to={`/${pageDetail.detail.item_1_link}`} className="si-o-c-item-title">{`${pageDetail.detail.item_1_title}`}</Link>
                                                        <p>{`${pageDetail.detail.item_1_description}`}</p>
                                                    </div>
                                                    <div className='si-o-c-line'></div>
                                                    <div className='si-o-c-item'>
                                                        <Link to={`/${pageDetail.detail.item_2_link}`} className="si-o-c-item-title">{`${pageDetail.detail.item_2_title}`}</Link>
                                                        <p>{`${pageDetail.detail.item_2_description}`}</p>
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

                <ServicesClients />

                <GetInvolved />
            </HelmetProvider>
        </div>
    )
}

export default ServiceInsights