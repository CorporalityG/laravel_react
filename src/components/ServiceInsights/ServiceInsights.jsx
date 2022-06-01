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

function ServiceInsights() {

    const [latestArticles, setLatestArticles] = useState([]);

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });

        getLatestArticles();
    }, []);

    async function getLatestArticles() {
        let result = await fetch(`${API_BASE_URL}/latest-articles`);
        result = await result.json();
        setLatestArticles(result);
    }

    return (
        <div className="service-insights-page">

            <div className='si-announcement-section'>
                <div className='container-lg'>
                    <div className='row si-a-row'>
                        <div className='col-lg-3 col-sm-4 si-a-banner'>
                            <img src={`${BASE_URL}/img/ServiceInsights/Global-B2B-Conference-2022.png`} alt="Priya" />
                        </div>
                        <div className='col-lg-9 col-sm-8 si-a-content'>
                            <div className='si-a-desc'>
                                <div className='si-a-date'>[ September 1-2 , Sydney ]</div>
                                <h1>Global B2B Conference 2022</h1>
                                <h2 className='si-a-organised'>Organised by Corporality</h2>
                            </div>
                            <div className='si-a-btn'>
                                <Link to={`/`} className="si-a-link">Register Now</Link>
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
                                <h2>Go To Marketing Strategy Guide</h2>

                                <p>Learning how to develop an effective marketing strategy for the business can capitalize on development potential.</p>
                                <p>For marketing strategies to properly match with bigger business objectives, a thorough understanding of context, audience targeting, and the buyer's journey is required. To add to the complication, some marketers must optimize orever-changing business goals, which vary based on the age of the organization and the product or service being offered.</p>
                                <p>To save you both time and money, we've created a framework that can help you to your business.</p>
                                <p>We have a lot to explore.</p>
                                <p>Let's get started now!</p>

                                <Link to={`/`} className="si-link">Read More <svg viewBox="0 0 21 18" focusable="false" aria-hidden="true"><path d="M0.266478 8.99987C0.266478 9.33987 0.40148 9.66486 0.641486 9.90486C0.881493 10.1449 1.20648 10.2799 1.54648 10.2799L15.5852 10.2799L10.3814 15.1311C10.1189 15.3586 9.96136 15.6836 9.94261 16.0311C9.92511 16.3773 10.0489 16.7173 10.2864 16.9711C10.5239 17.2248 10.8538 17.3711 11.2014 17.3773C11.5488 17.3823 11.8839 17.2461 12.1288 16.9998L19.71 9.93741C19.9687 9.69491 20.1162 9.35616 20.1162 9.00115C20.1162 8.64614 19.9687 8.30739 19.71 8.0649L12.1289 0.999936C11.6113 0.51744 10.8014 0.544929 10.3189 1.06244C9.83637 1.57869 9.86511 2.38992 10.3814 2.87242L15.5852 7.71978L1.54648 7.71978C1.20648 7.71978 0.881492 7.85478 0.641492 8.09478C0.401492 8.33479 0.266482 8.65978 0.266482 8.99978L0.266478 8.99987Z"></path></svg></Link>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='si-hti-video'>
                                <iframe src="https://www.youtube.com/embed/YpymypBc9Hc?autoplay=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                <div className='si-hti-v-content'>
                                    <div className='si-hti-video-title'>Transforming an industry that transformed the world</div>
                                    <Link to="/" className="si-link">View Transcript</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className='si-high-tech-industry-section'>
                <div className='container-lg'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='si-hti-video'>
                                <iframe src="https://www.youtube.com/embed/YpymypBc9Hc?autoplay=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                <div className='si-hti-v-content'>
                                    <div className='si-hti-video-title'>Transforming an industry that transformed the world</div>
                                    <Link to="/" className="si-link">View Transcript</Link>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='si-hti-content'>
                                <h2>Go To Marketing Strategy Guide</h2>

                                <p>Learning how to develop an effective marketing strategy for the business can capitalize on development potential.</p>
                                <p>For marketing strategies to properly match with bigger business objectives, a thorough understanding of context, audience targeting, and the buyer's journey is required. To add to the complication, some marketers must optimize orever-changing business goals, which vary based on the age of the organization and the product or service being offered.</p>
                                <p>To save you both time and money, we've created a framework that can help you to your business.</p>
                                <p>We have a lot to explore.</p>
                                <p>Let's get started now!</p>

                                <Link to={`/`} className="si-link">Read More <svg viewBox="0 0 21 18" focusable="false" aria-hidden="true"><path d="M0.266478 8.99987C0.266478 9.33987 0.40148 9.66486 0.641486 9.90486C0.881493 10.1449 1.20648 10.2799 1.54648 10.2799L15.5852 10.2799L10.3814 15.1311C10.1189 15.3586 9.96136 15.6836 9.94261 16.0311C9.92511 16.3773 10.0489 16.7173 10.2864 16.9711C10.5239 17.2248 10.8538 17.3711 11.2014 17.3773C11.5488 17.3823 11.8839 17.2461 12.1288 16.9998L19.71 9.93741C19.9687 9.69491 20.1162 9.35616 20.1162 9.00115C20.1162 8.64614 19.9687 8.30739 19.71 8.0649L12.1289 0.999936C11.6113 0.51744 10.8014 0.544929 10.3189 1.06244C9.83637 1.57869 9.86511 2.38992 10.3814 2.87242L15.5852 7.71978L1.54648 7.71978C1.20648 7.71978 0.881492 7.85478 0.641492 8.09478C0.401492 8.33479 0.266482 8.65978 0.266482 8.99978L0.266478 8.99987Z"></path></svg></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* {
                latestArticles ?
                    <div className='si-high-tech-industry-section'>
                        {
                            latestArticles.slice(0, 1).map((item) =>
                                <div key={`${item.id}`} className='container-lg'>
                                    <div className='row'>
                                        <div className='col-lg-12'>
                                            <div className='si-hti-title'>
                                                <h2>{item.article_title}</h2>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col-lg-6'>
                                            <div className='si-hti-content'>
                                                <span dangerouslySetInnerHTML={{ __html: (item.article_short_description) }}></span>

                                                <Link to={`/article/${item.article_slug}`} className="si-link">Read More <svg viewBox="0 0 21 18" focusable="false" aria-hidden="true"><path d="M0.266478 8.99987C0.266478 9.33987 0.40148 9.66486 0.641486 9.90486C0.881493 10.1449 1.20648 10.2799 1.54648 10.2799L15.5852 10.2799L10.3814 15.1311C10.1189 15.3586 9.96136 15.6836 9.94261 16.0311C9.92511 16.3773 10.0489 16.7173 10.2864 16.9711C10.5239 17.2248 10.8538 17.3711 11.2014 17.3773C11.5488 17.3823 11.8839 17.2461 12.1288 16.9998L19.71 9.93741C19.9687 9.69491 20.1162 9.35616 20.1162 9.00115C20.1162 8.64614 19.9687 8.30739 19.71 8.0649L12.1289 0.999936C11.6113 0.51744 10.8014 0.544929 10.3189 1.06244C9.83637 1.57869 9.86511 2.38992 10.3814 2.87242L15.5852 7.71978L1.54648 7.71978C1.20648 7.71978 0.881492 7.85478 0.641492 8.09478C0.401492 8.33479 0.266482 8.65978 0.266482 8.99978L0.266478 8.99987Z"></path></svg></Link>
                                            </div>
                                        </div>

                                        <div className='col-lg-6'>
                                            <div className='si-hti-video'>
                                                <iframe src="https://www.youtube.com/embed/YpymypBc9Hc?autoplay=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                                <div className='si-hti-v-content'>
                                                    <div className='si-hti-video-title'>Transforming an industry that transformed the world</div>
                                                    <Link to="/" className="si-link">View Transcript</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    : null
            } */}

            <div className='si-client-conversion-section'>
                <div className='container-lg'>
                    <div className='row si-cc-row'>
                        <div className='col-md-6'>
                            <div className='si-cc-image'>
                                <img src={`${BASE_URL}/img/ServiceInsights/client-conversion.png`} alt="Client conversion" />
                            </div>
                        </div>

                        <div className='col-md-6'>
                            <div className='si-cc-content'>
                                <h2>Client conversion shouldn't be this difficult - reach out to us!</h2>

                                <Link to={`/contact`} className="si-learn-link">Reach Out Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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
                                <Link to={`/article`} className="si-link">All Articles <svg viewBox="0 0 21 18" focusable="false" aria-hidden="true"><path d="M0.266478 8.99987C0.266478 9.33987 0.40148 9.66486 0.641486 9.90486C0.881493 10.1449 1.20648 10.2799 1.54648 10.2799L15.5852 10.2799L10.3814 15.1311C10.1189 15.3586 9.96136 15.6836 9.94261 16.0311C9.92511 16.3773 10.0489 16.7173 10.2864 16.9711C10.5239 17.2248 10.8538 17.3711 11.2014 17.3773C11.5488 17.3823 11.8839 17.2461 12.1288 16.9998L19.71 9.93741C19.9687 9.69491 20.1162 9.35616 20.1162 9.00115C20.1162 8.64614 19.9687 8.30739 19.71 8.0649L12.1289 0.999936C11.6113 0.51744 10.8014 0.544929 10.3189 1.06244C9.83637 1.57869 9.86511 2.38992 10.3814 2.87242L15.5852 7.71978L1.54648 7.71978C1.20648 7.71978 0.881492 7.85478 0.641492 8.09478C0.401492 8.33479 0.266482 8.65978 0.266482 8.99978L0.266478 8.99987Z"></path></svg></Link>
                            </div>
                        </div>
                    </div>

                    {
                        latestArticles ?
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
                            : null
                    }
                </div>
            </div>

            <div className='si-announcement-slider-section'>
                <Carousel indicators={false} interval={5000}>
                    <Carousel.Item>
                        <AnnouncementItem
                            thumbnail={`${BASE_URL}/img/ServiceInsights/priya_mam.png`}
                            category={`CEO`}
                            title={`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`}
                            slug={``}

                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <AnnouncementItem
                            thumbnail={`${BASE_URL}/img/ServiceInsights/priya_mam.png`}
                            category={`CMO`}
                            title={`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`}
                            slug={``}

                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <AnnouncementItem
                            thumbnail={`${BASE_URL}/img/ServiceInsights/priya_mam.png`}
                            category={`CXO`}
                            title={`Lorem Ipsum is standard dummy text of the printing industry.`}
                            slug={``}

                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <AnnouncementItem
                            thumbnail={`${BASE_URL}/img/ServiceInsights/priya_mam.png`}
                            category={`COO`}
                            title={`What is Lorem Ipsum is simply dummy text of the printing and typesetting industry.`}
                            slug={``}

                        />
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className='si-organize-section'>
                <img src={`${BASE_URL}/img/ServiceInsights/How-Can-We-Organize.jpg`} alt="How Can We Organize" className='si-o-bg-main' />

                <div className='si-o-title-section'>
                    <div className='si-o-title-content'>
                        <div className='container-lg'>
                            <div className='row'>
                                <div className='col-lg-7 offset-lg-5'>
                                    <div className='si-o-title-description'>
                                        <h2>How Can We Organize</h2>
                                        <p>At the core of our business lies strategically planned opportunity. We believe we all need a structured framework to win strategically, supported by insight and powered by AI to scale up and growth of the business.</p>
                                        <Link to={`/article`} className="si-link">View All Articles <svg viewBox="0 0 21 18" focusable="false" aria-hidden="true"><path d="M0.266478 8.99987C0.266478 9.33987 0.40148 9.66486 0.641486 9.90486C0.881493 10.1449 1.20648 10.2799 1.54648 10.2799L15.5852 10.2799L10.3814 15.1311C10.1189 15.3586 9.96136 15.6836 9.94261 16.0311C9.92511 16.3773 10.0489 16.7173 10.2864 16.9711C10.5239 17.2248 10.8538 17.3711 11.2014 17.3773C11.5488 17.3823 11.8839 17.2461 12.1288 16.9998L19.71 9.93741C19.9687 9.69491 20.1162 9.35616 20.1162 9.00115C20.1162 8.64614 19.9687 8.30739 19.71 8.0649L12.1289 0.999936C11.6113 0.51744 10.8014 0.544929 10.3189 1.06244C9.83637 1.57869 9.86511 2.38992 10.3814 2.87242L15.5852 7.71978L1.54648 7.71978C1.20648 7.71978 0.881492 7.85478 0.641492 8.09478C0.401492 8.33479 0.266482 8.65978 0.266482 8.99978L0.266478 8.99987Z"></path></svg></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='si-o-content-section'>
                    <div className='container-lg'>
                        <div className='row'>
                            <div className='col-lg-4'>
                                <div className='si-o-c-items'>
                                    <div className='si-o-c-item'>
                                        <Link to={`/interactive-blueprint`} className="si-o-c-item-title">Interactive Blueprint</Link>
                                        <p>Creating a blueprint of your business to make sure that you stand out from the competition.</p>
                                    </div>
                                    <div className='si-o-c-line'></div>
                                    <div className='si-o-c-item'>
                                        <Link to={`/strategy-and-consulting`} className="si-o-c-item-title">Strategy And Consulting</Link>
                                        <p>We truly believe in putting customers first.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ServicesClients />

            {/* <div id='what-we-think' className='si-what-we-think-section'>
                <div className='container-lg'>
                    <div className='row si-wwt-row'>
                        <div className='col-lg-8'>
                            <div className='si-wwt-title'>
                                <h2>What we think</h2>
                            </div>
                        </div>

                        <div className='col-lg-4 si-wwt-title-btn-col'>
                            <div className='si-wwt-title-btn'>
                                <Link to={`/`} className="si-link">VIEW MORE ARTICLES <svg viewBox="0 0 21 18" focusable="false" aria-hidden="true"><path d="M0.266478 8.99987C0.266478 9.33987 0.40148 9.66486 0.641486 9.90486C0.881493 10.1449 1.20648 10.2799 1.54648 10.2799L15.5852 10.2799L10.3814 15.1311C10.1189 15.3586 9.96136 15.6836 9.94261 16.0311C9.92511 16.3773 10.0489 16.7173 10.2864 16.9711C10.5239 17.2248 10.8538 17.3711 11.2014 17.3773C11.5488 17.3823 11.8839 17.2461 12.1288 16.9998L19.71 9.93741C19.9687 9.69491 20.1162 9.35616 20.1162 9.00115C20.1162 8.64614 19.9687 8.30739 19.71 8.0649L12.1289 0.999936C11.6113 0.51744 10.8014 0.544929 10.3189 1.06244C9.83637 1.57869 9.86511 2.38992 10.3814 2.87242L15.5852 7.71978L1.54648 7.71978C1.20648 7.71978 0.881492 7.85478 0.641492 8.09478C0.401492 8.33479 0.266482 8.65978 0.266482 8.99978L0.266478 8.99987Z"></path></svg></Link>
                            </div>
                        </div>
                    </div>

                    <div className='row si-wwt-items-row'>
                        <div className='col-lg-8'>
                            <div className='container-fluid px-0'>
                                <WhatWeThinkItemLeft
                                    thumbnail={`${BASE_URL}/img/ServiceInsights/3d-in-medical-care-corporality-global.jpg`}
                                    title={`What is Lorem Ipsum`}
                                    slug={``}
                                    content={`<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>`}
                                    category={`Supply Chain & Operations`}
                                    catSlug={``}
                                />

                                <WhatWeThinkItemLeft
                                    thumbnail={`${BASE_URL}/img/ServiceInsights/3d-in-medical-care-corporality-global.jpg`}
                                    title={`Lorem Ipsum is simply dummy text`}
                                    slug={``}
                                    content={`<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>`}
                                    category={`Semiconductor`}
                                    catSlug={``}
                                />

                                <WhatWeThinkItemLeft
                                    thumbnail={`${BASE_URL}/img/ServiceInsights/3d-in-medical-care-corporality-global.jpg`}
                                    title={`Lorem Ipsum has been the industry's standard dummy text`}
                                    slug={``}
                                    content={`<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>`}
                                    category={`Sustainability`}
                                    catSlug={``}
                                />
                            </div>
                        </div>

                        <div className='col-lg-4'>
                            <WhatWeThinkItemRight
                                title={`Lorem Ipsum has been the industry's standard dummy text`}
                                slug={``}
                                category={`High Tech`}
                                catSlug={``}
                            />

                            <WhatWeThinkItemRight
                                title={`Lorem Ipsum is simply dummy text`}
                                slug={``}
                                category={`Semiconductor`}
                                catSlug={``}
                            />

                            <WhatWeThinkItemRight
                                title={`Lorem Ipsum has been the industry's standard dummy text`}
                                slug={``}
                                category={`High Tech`}
                                catSlug={``}
                            />

                            <WhatWeThinkItemRight
                                title={`Lorem Ipsum has been the industry`}
                                slug={``}
                                category={`As-a-Service`}
                                catSlug={``}
                            />

                            <WhatWeThinkItemRight
                                title={`Lorem Ipsum has been the industry's standard dummy text`}
                                slug={``}
                                category={`High Tech`}
                                catSlug={``}
                            />
                        </div>
                    </div>
                </div>
            </div> */}

            <GetInvolved />
        </div>
    )
}

export default ServiceInsights