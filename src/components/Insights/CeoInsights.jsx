import React, { useEffect, useState } from 'react'
import './InsightsNew.css'
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../config'
import { CSuitLatestItem } from './CSuitLatestItem'
import Carousel from 'react-bootstrap/Carousel'
import { AnnouncementItem } from './AnnouncementItem'
import CarouselGrid from 'react-grid-carousel'
import { CSuitAllItem } from './CSuitAllItem'
import { GetInvolved } from '../ServiceInsights/GetInvolved'
import { ServicesAskQuote } from '../ServicesAskQuote/ServicesAskQuote';
import AOS from "aos";
import { useParams, Link } from 'react-router-dom'
import { EditPickItem } from './EditPickItem'
import ServicesClients from '../ServicesClients/ServicesClients'

function CeoInsights() {

    const params = useParams();
    const subCategory = 'ceo';

    const [latestCSuits, setLatestCSuits] = useState([]);
    const [announcements, setAnnouncements] = useState([]);
    const [editPicks, setEditPicks] = useState([]);

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });

        getLatestCSuits();
        getAnnouncements();
        getEditPickCSuits()
    }, [params]);

    async function getLatestCSuits() {
        let result = await fetch(`${API_BASE_URL}/csuits/${subCategory}`);
        result = await result.json();
        setLatestCSuits(result);
    }

    async function getAnnouncements() {
        let result = await fetch(`${API_BASE_URL}/csuits-announcement`);
        result = await result.json();
        setAnnouncements(result);
    }

    async function getEditPickCSuits() {
        let result = await fetch(`${API_BASE_URL}/csuits/${subCategory}?sort_by=random`);
        result = await result.json();
        setEditPicks(result);
    }

    return (
        <div className="csuit-insights">

            <div className='csuit-insights-banner'>
                <div className='container-lg'>
                    <div className='row csuit-insights-banner-row'>
                        <div className='col-lg-6'>
                            <div className='csuit-insights-banner-title'>
                                <h1>CEO Insights</h1>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='csuit-insights-banner-content'>
                                <h2 className='csuit-insights-banner-latest-title'>Latest Article</h2>
                                {
                                    latestCSuits ?
                                        <div className='row'>
                                            {
                                                latestCSuits.slice(0, 1).map((item) =>
                                                    <CSuitLatestItem
                                                        key={`${item.id}`}
                                                        thumbnail={`${item.image ? API_IMG_URL + item.image : ''}`}
                                                        title={`${item.title}`}
                                                        slug={`csuit/${item.slug}`}
                                                        category={item.categories[0] !== undefined ? item.categories[0].category_name : null}
                                                        categorySlug={item.categories[0] !== undefined ? item.categories[0].category_slug : null}
                                                    />
                                                )
                                            }
                                        </div>
                                        : null
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="csuit-insights-latest">
                <div className='container-lg'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='csuit-insights-latest-title'>
                                <h2 className='csuit-insights-title'>Editer's Pick</h2>
                            </div>
                        </div>

                        {
                            editPicks ?
                                <>
                                    {
                                        editPicks.slice(0, 2).map((item) =>
                                            <EditPickItem
                                                key={`${item.id}`}
                                                thumbnail={`${item.image ? API_IMG_URL + item.image : ''}`}
                                                title={`${item.title}`}
                                                slug={`csuit/${item.slug}`}
                                                category={item.categories[0] !== undefined ? item.categories[0].category_name : null}
                                                categorySlug={item.categories[0] !== undefined ? item.categories[0].category_slug : null}
                                            />
                                        )
                                    }

                                    <div className='csuit-insights-more-link'>
                                        <Link to={`/search/articles`}>All Articles</Link>
                                    </div>
                                </>
                                : null
                        }
                    </div>
                </div>
            </div>

            <div className="csuit-insights-video">
                <img src={`${BASE_URL}/img/CSuit/video-heading-bg.png`} alt={`video-heading-bg`} className="video-heading-bg" />

                <div className='container-lg'>
                    <div className='row csuit-insights-video-row'>
                        <div className='col-lg-6'>
                            <div className="csuit-insights-video-img">
                                <iframe width="100%" height="315" src="https://www.youtube.com/embed/M3DekVZlxsM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className="csuit-insights-video-content">
                                <h2>For Youtube Channel</h2>
                                <p>The future has arrived sooner than we thought. At Corporality.Global, we provide insights and information on marketing and brand strategies. We strive to grow our customers regardless of the stage they are in, from any industry, anywhere. For us at Corporality, we partner with you for true value that lasts. Check out our online Conversations with Priya and A Minute With Priya on our Youtube Channel.</p>
                                <a href='https://www.youtube.com/c/Corporality' target="_blank" className='play-video-btn'>Watch Our Channel <svg viewBox="0 0 10 16" focusable="false"><path d="m1.83288 15c-.20616 0-.42731-.0737-.58971-.2361-.324226-.3242-.324226-.8402 0-1.1645l5.58722-5.60223-5.58722-5.58722c-.324226-.32422-.324226-.84022 0-1.16445.32422-.324795.84022-.324795 1.16444-.01497l6.17694 6.17694c.1624.1624.23612.36857.23612.58971s-.08869.4273-.23612.58971l-6.17694 6.17691c-.1624.1624-.36857.2361-.57473.2361z" fill="currentColor" stroke="currentColor" strokeWidth=".831256"></path></svg></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='csuit-insights-announcement-slider'>
                {
                    announcements ?
                        <Carousel indicators={false} controls={false} interval={5000}>
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
                        : null
                }
            </div>

            <div className="csuit-insights-all">
                <div className='container-lg'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='csuit-insights-all-title'>
                                <h2 className='csuit-insights-title'>Blog</h2>
                                <p>Read industry news and blogs that are crucial to your business. Explore the world of management consulting, marketing and sales and how they can add value to help achieve your company's goals.</p>
                            </div>
                        </div>

                        <div className='col-lg-12'>
                            <div className="csuit-insights-all-slider">
                                {
                                    latestCSuits ?
                                        <CarouselGrid cols={3} rows={1} gap={0} responsiveLayout={[{ breakpoint: 1024, cols: 2 }, { breakpoint: 767, cols: 1, gap: 0, loop: true, autoplay: 4000 }]}>
                                            {
                                                latestCSuits.slice(1, 11).map((item) =>
                                                    <CarouselGrid.Item key={`${item.id}`}>
                                                        <CSuitAllItem
                                                            thumbnail={`${item.image ? API_IMG_URL + item.image : ''}`}
                                                            title={`${item.title}`}
                                                            slug={`csuit/${item.slug}`}
                                                            category={item.subcategories[0] !== undefined ? item.subcategories[0].category_name : null}
                                                            categorySlug={item.subcategories[0] !== undefined ? item.subcategories[0].category_slug : null}
                                                        />
                                                    </CarouselGrid.Item>
                                                )
                                            }
                                        </CarouselGrid>
                                        : null
                                }
                            </div>

                            <div className='csuit-insights-more-link'>
                                <Link to={`/blog`}>View All Blogs</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="csuit-insights-service">
                <div className='container-lg'>
                    <div className='row csuit-insights-service-row'>
                        <div className='col-lg-7 csuit-insights-service-content'>
                            <h2>Service Insights</h2>
                            <p>Marketing Communications is often overlooked by business leaders yet it is also a crucial component of any business strategy. How do you communicate with media outlets and other businesses that can partner with you or give you mutual benefits? Gaining good Marcom strength is a key to establishing one’s position in their category.</p>
                            <Link to={`/service-insights`} className="csuit-insights-service-btn">Check More Insights</Link>
                        </div>

                        <div className='col-lg-5 csuit-insights-service-img'>
                            <a href='https://corporality.global/club/corporality-global-event/#Ticket' target="_blank">
                                <img src={`${BASE_URL}/img/CSuit/Service-Insights.png`} alt={`Service Insights`} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <ServicesClients />

            <GetInvolved />

            <ServicesAskQuote />

        </div>
    )
}

export default CeoInsights