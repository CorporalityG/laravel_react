import React, { useState, useEffect } from 'react'
import './ServiceInsights.css'
import { BASE_URL } from '../../config'
import { Link } from 'react-router-dom';
import { SectorsWeServeItem } from './SectorsWeServeItem';
import { CapabilitiesItem } from './CapabilitiesItem';
import { CaseStudiesItem } from './CaseStudiesItem';
import { WhatWeThinkItemLeft } from './WhatWeThinkItemLeft';
import { WhatWeThinkItemRight } from './WhatWeThinkItemRight';
import { NewsItem } from './NewsItem';

function ServiceInsights() {

    const [stickyClass, setStickyClass] = useState('no-sticky');

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);

        return () => {
            window.removeEventListener('scroll', stickNavbar);
        };
    }, []);

    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 500 ? setStickyClass('jumplink-sticky') : setStickyClass('no-sticky');
        }
    };

    return (
        <div className="service-insights-page">
            <div className='si-banner-section'>
                <div className='si-b-video'>
                    <video autoPlay={true} muted loop>
                        <source src={`${BASE_URL}/img/ServiceInsights/banner-video.mp4`} type="video/mp4" />
                    </video>
                </div>

                <div className='container-lg'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='si-b-content'>
                                <h1>Service Insights</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`si-jumplink-section ${stickyClass}`}>
                <div className='container-lg'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <Link to="/service-insights#sectors-we-serve" className="si-jl-item">Sectors We Serve</Link>
                        </div>

                        <div className='col-md-3'>
                            <Link to="/service-insights#capabilities" className="si-jl-item">Capabilities</Link>
                        </div>

                        <div className='col-md-3'>
                            <Link to="/service-insights#case-studies" className="si-jl-item">Case Studies</Link>
                        </div>

                        <div className='col-md-3'>
                            <Link to="/service-insights#what-we-think" className="si-jl-item">What We Think</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='si-announcement-section'>
                <div className='container-lg'>
                    <div className='row si-a-row'>
                        <div className='col-lg-3 col-sm-4 si-a-banner'>
                            <img src={`${BASE_URL}/img/ServiceInsights/priya_mam.png`} alt="" />
                        </div>
                        <div className='col-lg-9 col-sm-8 si-a-content'>
                            <div className='si-a-c-subtitle'>Accenture at Lorem</div>
                            <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h2>
                            <span>
                                <Link to="/" className="si-link">Watch Now <img src={`${BASE_URL}/img/ServiceInsights/left-arrow.png`} alt="" /></Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='si-high-tech-industry-section'>
                <div className='container-lg'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='si-hti-title'>
                                <h2>Transforming the high tech industry</h2>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='si-hti-content'>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                                <Link to="/" className="si-link">DOWNLOAD THE REPORT <img src={`${BASE_URL}/img/ServiceInsights/left-arrow.png`} alt="" /></Link>
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

            <div className='si-blockchain-section'>
                <div className='container-lg'>
                    <div className='row si-blockchain-row'>
                        <div className='col-lg-1'>
                            <img src={`${BASE_URL}/img/ServiceInsights/blockchain-icon.svg`} alt="blockchain" className='si-b-icon' />
                        </div>
                        <div className='col-lg-4'>
                            <div className='si-b-title'>Connecting partners—blockchain for supply chain</div>
                        </div>
                        <div className='col-lg-5'>
                            <p>Accenture & Microsoft create a scalable solution</p>
                        </div>
                        <div className='col-lg-2 si-link-col'>
                            <Link to="/" className="si-link">Read More <img src={`${BASE_URL}/img/ServiceInsights/left-arrow.png`} alt="" /></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='si-high-tech-blog-section'>
                <div className='container-lg'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='si-htb-title'>
                                <h2>High Tech Perspectives blog series</h2>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='si-htb-content'>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <p>Read the latest blogs:</p>
                                <ul>
                                    <li><Link to="/">Lorem Ipsum is simply dummy text of the printing and typesetting industry</Link></li>
                                    <li><Link to="/">Lorem Ipsum has been the industry's standard dummy text</Link></li>
                                    <li><Link to="/">Ipsum has been the industry's</Link></li>
                                </ul>

                                <Link to="/" className="si-front-back-link">
                                    <div className='si-link-front'>
                                        <span>Learn more</span>
                                    </div>
                                    <div className='si-link-behind'>Learn more</div>
                                </Link>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='si-htb-banner'>
                                <img src={`${BASE_URL}/img/ServiceInsights/3d-in-medical-care-corporality-global.jpg`} alt="High Tech Perspectives blog series" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id='sectors-we-serve' className='si-sectors-we-serve-section'>
                <div className='container-lg'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='si-sws-title'>
                                <h2>Sectors we serve</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                            </div>
                        </div>
                    </div>

                    <div className='row si-sws-item-row'>
                        <SectorsWeServeItem
                            title={`Semiconductor`}
                            slug={``}
                            content={`<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>`}
                        />

                        <SectorsWeServeItem
                            title={`Enterprise Technology`}
                            slug={``}
                            content={`<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>`}
                        />

                        <SectorsWeServeItem
                            title={`Consumer Technology`}
                            slug={``}
                            content={`<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>`}
                        />

                        <SectorsWeServeItem
                            title={`Communications Technology`}
                            slug={``}
                            content={`<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>`}
                        />

                        <SectorsWeServeItem
                            title={`Medical Equipment`}
                            slug={``}
                            content={`<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>`}
                        />
                    </div>
                </div>
            </div>

            <div id='capabilities' className='si-capabilities-section'>
                <div className='container-lg'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='si-c-title'>
                                <h2>Capabilities</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            </div>
                        </div>
                    </div>

                    <div className='row si-c-item-row'>
                        <CapabilitiesItem
                            title={`Cloud for High Tech`}
                            slug={``}
                            content={`<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>`}
                        />

                        <CapabilitiesItem
                            title={`As-a-Service Business`}
                            slug={``}
                            content={`<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>`}
                        />

                        <CapabilitiesItem
                            title={`Intelligent revenue growth`}
                            slug={``}
                            content={`<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>`}
                        />

                        <CapabilitiesItem
                            title={`Intelligent supply chain`}
                            slug={``}
                            content={`<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>`}
                        />

                        <CapabilitiesItem
                            title={`Connected product innovation`}
                            slug={``}
                            content={`<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>`}
                        />

                        <CapabilitiesItem
                            title={`Modern platform engineering`}
                            slug={``}
                            content={`<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>`}
                        />

                        <CapabilitiesItem
                            title={`Recharge growth with M&A`}
                            slug={``}
                            content={`<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>`}
                        />
                    </div>
                </div>
            </div>

            <div id='case-studies' className='si-case-studies-section'>
                <div className='container-lg'>
                    <div className='row si-cs-row'>
                        <div className='col-lg-8'>
                            <div className='si-cs-title'>
                                <h2>Case studies</h2>
                            </div>
                        </div>

                        <div className='col-lg-4 si-cs-title-btn-col'>
                            <div className='si-cs-title-btn'>
                                <Link to={`/`} className="si-link">VIEW MORE CASE STUDIES <img src={`${BASE_URL}/img/ServiceInsights/left-arrow.png`} alt="" /></Link>
                            </div>
                        </div>
                    </div>

                    <div className='row si-cs-item-row'>
                        <CaseStudiesItem
                            thumbnail={`${BASE_URL}/img/ServiceInsights/3d-in-medical-care-corporality-global.jpg`}
                            title={`What is Lorem Ipsum`}
                            slug={``}
                            content={`<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>`}
                            category={`High Tech`}
                            catSlug={``}
                        />

                        <CaseStudiesItem
                            thumbnail={`${BASE_URL}/img/ServiceInsights/3d-in-medical-care-corporality-global.jpg`}
                            title={`What is Lorem Ipsum`}
                            slug={``}
                            content={`<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>`}
                            category={`High Tech`}
                            catSlug={``}
                        />

                        <CaseStudiesItem
                            thumbnail={`${BASE_URL}/img/ServiceInsights/3d-in-medical-care-corporality-global.jpg`}
                            title={`What is Lorem Ipsum`}
                            slug={``}
                            content={`<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>`}
                            category={`High Tech`}
                            catSlug={``}
                        />
                    </div>
                </div>
            </div>

            <div className='si-high-tech-multimedia-section'>
                <div className='container-lg'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='si-htm-title'>
                                <h2>High Tech multimedia center</h2>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='si-htm-content'>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                                <Link to="/" className="si-front-back-link">
                                    <div className='si-link-front'>
                                        <span>Learn more</span>
                                    </div>
                                    <div className='si-link-behind'>Learn more</div>
                                </Link>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='si-htm-banner'>
                                <img src={`${BASE_URL}/img/ServiceInsights/3d-in-medical-care-corporality-global.jpg`} alt="High Tech multimedia center" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id='what-we-think' className='si-what-we-think-section'>
                <div className='container-lg'>
                    <div className='row si-wwt-row'>
                        <div className='col-lg-8'>
                            <div className='si-wwt-title'>
                                <h2>What we think</h2>
                            </div>
                        </div>

                        <div className='col-lg-4 si-wwt-title-btn-col'>
                            <div className='si-wwt-title-btn'>
                                <Link to={`/`} className="si-link">VIEW MORE ARTICLES <img src={`${BASE_URL}/img/ServiceInsights/left-arrow.png`} alt="" /></Link>
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
            </div>

            <div className='si-news-section'>
                <div className='container-lg'>
                    <div className='row si-n-row'>
                        <div className='col-lg-8'>
                            <div className='si-n-title'>
                                <h2>News</h2>
                            </div>
                        </div>

                        <div className='col-lg-4 si-n-title-btn-col'>
                            <div className='si-n-title-btn'>
                                <Link to={`/`} className="si-link">VIEW MORE NEWS RELEASES <img src={`${BASE_URL}/img/ServiceInsights/left-arrow.png`} alt="" /></Link>
                            </div>
                        </div>
                    </div>

                    <div className='row si-news-item-row'>
                        <NewsItem
                            title={`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`}
                            slug={``}
                            content={`<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>`}
                        />

                        <NewsItem
                            title={`Lorem Ipsum is simply dummy`}
                            slug={``}
                            content={`<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>`}
                        />

                        <NewsItem
                            title={`Lorem Ipsum is simply dummy text of the printing`}
                            slug={``}
                            content={`<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>`}
                        />
                    </div>
                </div>
            </div>

            <div className='si-our-leaders-section'>
                <div className='container-lg'>
                    <div className='row si-ol-row'>
                        <div className='col-lg-12'>
                            <div className='si-ol-title'>
                                <h2>Our leaders</h2>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-lg-12 text-center'>
                            <Link to="/contact" className="si-front-back-link">
                                <div className='si-link-front'>
                                    <span>Contact Us</span>
                                </div>
                                <div className='si-link-behind'>Contact Us</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceInsights