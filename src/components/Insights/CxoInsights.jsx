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

function CxoInsights() {

    const params = useParams();
    const subCategory = 'cxo';

    const [latestCSuits, setLatestCSuits] = useState([]);
    const [announcements, setAnnouncements] = useState([]);

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });

        getLatestCSuits();
        getAnnouncements()
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

    return (
        <div className="csuit-insights">

            <div className='csuit-insights-banner'>
                <div className='container-lg'>
                    <div className='row csuit-insights-banner-row'>
                        <div className='col-lg-6'>
                            <div className='csuit-insights-banner-title'>
                                <h1>CXO Insights</h1>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='csuit-insights-banner-content'>
                                <p>For marketing strategies to properly match with bigger business objectives, a thorough understanding of context, audience targeting, and the buyer's journey is required. To add to the complication, some marketers must optimize forever-changing business goals, which vary based on the age of the organization and the product or service being offered.some marketers must optimize forever-changing business goals, which vary based</p>
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
                                <h2 className='csuit-insights-title'>Latest Articles</h2>
                            </div>
                        </div>

                        {
                            latestCSuits ?
                                <>
                                    {
                                        latestCSuits.slice(0, 2).map((item) =>
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
                                </>
                                : null
                        }
                    </div>
                </div>
            </div>

            <div className="csuit-insights-video">
                <img src={`${BASE_URL}/img/CSuit/video-heading-bg.png`} alt={`video-heading-bg`} className="video-heading-bg" />

                <div className='container-fluid pl-0'>
                    <div className='row csuit-insights-video-row'>
                        <div className='col-lg-6'>
                            <div className="csuit-insights-video-img">
                                <img src={`${BASE_URL}/img/CSuit/video-heading.png`} alt={`video-heading`} />
                            </div>
                        </div>

                        <div className='col-lg-5 pr-lg-0'>
                            <div className="csuit-insights-video-content">
                                <h2>Video Heading</h2>
                                <p>Marketing Communications is often overlooked by business leaders yet it is also a crucial component of any business strategy. How do you communicate with media outlets and other businesses that can partner with you or give you mutual benefits? Gaining good Marcom strength is a key to establishing one’s position in their category.</p>
                                <a className='play-video-btn'>Play Video</a>
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
                                <h2 className='csuit-insights-title'>All Articles</h2>
                                <p>Marketing Communications is often overlooked by business leaders yet it is also a crucial component of any business strategy. How do you communicate with media outlets and other businesses .</p>
                            </div>
                        </div>

                        <div className='col-lg-12'>
                            <div className="csuit-insights-all-slider">
                                {
                                    latestCSuits ?
                                        <CarouselGrid cols={3} rows={1} gap={0} responsiveLayout={[{ breakpoint: 1024, cols: 2 }, { breakpoint: 767, cols: 1, gap: 0, loop: true, autoplay: 4000 }]}>
                                            {
                                                latestCSuits.slice(2, 11).map((item) =>
                                                    <CarouselGrid.Item key={`${item.id}`}>
                                                        <CSuitAllItem
                                                            thumbnail={`${item.image ? API_IMG_URL + item.image : ''}`}
                                                            title={`${item.title}`}
                                                            slug={`csuit/${item.slug}`}
                                                            category={item.categories[0] !== undefined ? item.categories[0].category_name : null}
                                                            categorySlug={item.categories[0] !== undefined ? item.categories[0].category_slug : null}
                                                        />
                                                    </CarouselGrid.Item>
                                                )
                                            }
                                        </CarouselGrid>
                                        : null
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="csuit-insights-service">
                <div className='container-lg'>
                    <div className='row csuit-insights-service-row'>
                        <div className='col-lg-6 csuit-insights-service-content'>
                            <h2>Service Insights</h2>
                            <p>Marketing Communications is often overlooked by business leaders yet it is also a crucial component of any business strategy. How do you communicate with media outlets and other businesses that can partner with you or give you mutual benefits? Gaining good Marcom strength is a key to establishing one’s position in their category.</p>
                            <Link to={`/service-insights`} className="csuit-insights-service-btn">Read More</Link>
                        </div>

                        <div className='col-lg-6 csuit-insights-service-img'>
                            <img src={`${BASE_URL}/img/CSuit/Service-Insights.png`} alt={`Service Insights`} />
                        </div>
                    </div>
                </div>
            </div>

            <GetInvolved />

            <ServicesAskQuote />

        </div>
    )
}

export default CxoInsights