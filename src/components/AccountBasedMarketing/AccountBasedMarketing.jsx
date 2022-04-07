import React, { useState } from 'react'
import './AccountBasedMarketing.css'
import { BASE_URL } from '../../config'
import { LogoItem } from './LogoItem'
import { ClientWorkItem } from "./ClientWorkItem";
import Carousel from 'react-bootstrap/Carousel'
import { useNavigate } from "react-router"

function AccountBasedMarketing() {

    const totalSlide = '04';
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const navigate = useNavigate();
    const topHandle = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    return (
        <>
            <div className="abm-banner-section">
                <img src={`${BASE_URL}/img/AccountBasedMarketing/banner-rec-1.png`} alt="Rec 1" className="abm-b-rec-1" />
                <img src={`${BASE_URL}/img/AccountBasedMarketing/banner-rec-2.png`} alt="Rec 2" className="abm-b-rec-2" />
                <img src={`${BASE_URL}/img/AccountBasedMarketing/banner-rec-3.png`} alt="Rec 3" className="abm-b-rec-3" />

                <img src={`${BASE_URL}/img/AccountBasedMarketing/banner-rec-dots.png`} alt="Rec Dot" className="abm-b-rec-dots" />
                <img src={`${BASE_URL}/img/AccountBasedMarketing/banner-vector.png`} alt="Vector" className="abm-b-vector" />
                <img src={`${BASE_URL}/img/AccountBasedMarketing/banner-vector-1.png`} alt="Vector 1" className="abm-b-vector-1" />

                <div className="container-lg">
                    <div className="row abm-banner-row">
                        <div className="col-lg-6">
                            <div className="abm-banner-content">
                                <h1>Account Based Marketing</h1>
                                <div className="abm-banner-subtitle">Focusing growth strategy for high value clients</div>
                                <p>Partnership focused in collaboration of both Marketing and sales team to create personalized buying experiences for a mutually-identified set of high-value accounts in conjunction with Inbound Marketing</p>
                                <div className="abm-banner-btn">
                                    <a href="https://zohoadmin-corporality.zohobookings.com.au/#/customer/discoverycall" target="_blank">Schedule a time</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="abm-banner">
                                <img src={`${BASE_URL}/img/AccountBasedMarketing/banner.png`} alt="Account Based Marketing" className="abm-banner-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="abm-know-section">
                <img src={`${BASE_URL}/img/AccountBasedMarketing/know-rec-1.png`} alt="Rec 1" className="abm-k-rec-1" />
                <img src={`${BASE_URL}/img/AccountBasedMarketing/know-rec-2.png`} alt="Rec 2" className="abm-k-rec-2" />
                <img src={`${BASE_URL}/img/AccountBasedMarketing/know-rec-3.png`} alt="Rec 3" className="abm-k-rec-3" />

                <div className="container-lg">
                    <div className="row abm-know-title-row">
                        <div className="col-lg-12">
                            <div className="abm-kt-content">
                                <h2>Did you know?</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row abm-know-content-row">
                        <div className="col-lg-6">
                            <div className="row abm-k-boxes-row">
                                <div className="col-md-6 abm-k-box-col">
                                    <div className="abm-k-box">
                                        <div className="k-box-img">
                                            <img src={`${BASE_URL}/img/AccountBasedMarketing/rating.png`} alt="Rating on Google" className="k-box-img" />
                                            <img src={`${BASE_URL}/img/AccountBasedMarketing/rating-star.png`} alt="Star" className="k-box-star" />
                                        </div>
                                        <div className="k-box-title">Rating on Google</div>
                                    </div>
                                </div>

                                <div className="col-md-6 abm-k-box-col">
                                    <div className="abm-k-box">
                                        <div className="k-box-img">
                                            <img src={`${BASE_URL}/img/AccountBasedMarketing/growth.png`} alt="Growth on LinkedIn" className="k-box-img" />
                                        </div>
                                        <div className="k-box-title">Growth on LinkedIn</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="abm-know-title">Trusted by 100+ Businessess Accross Industry Vertical, wordwide since 2014</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="abm-logo-section">
                <div className="container-lg">
                    <div className="row abm-logo-row">
                        <div className="col-lg-12 abm-logo-col">
                            <LogoItem
                                logo={`${BASE_URL}/img/AccountBasedMarketing/klek-services-logo.png`}
                                title={`Klek Services`}
                            />

                            <LogoItem
                                logo={`${BASE_URL}/img/AccountBasedMarketing/divine-logo.png`}
                                title={`Divine`}
                            />

                            <LogoItem
                                logo={`${BASE_URL}/img/AccountBasedMarketing/build-q-logo.png`}
                                title={`Build Q`}
                            />

                            <LogoItem
                                logo={`${BASE_URL}/img/AccountBasedMarketing/fastgrow-finance-logo.png`}
                                title={`Fastgrow Finance`}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="abm-blueprints-section">
                <div className="container-lg">
                    <div className="row abm-blueprints-row">
                        <div className="col-lg-12 abm-blueprints-col">
                            <img src={`${BASE_URL}/img/AccountBasedMarketing/blueprints-impact-businesses.png`} alt="blueprints businesses" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="abm-high-level-section">
                <img src={`${BASE_URL}/img/AccountBasedMarketing/high-level-vector.png`} alt="vector" className="abm-hl-vector" />
                <img src={`${BASE_URL}/img/AccountBasedMarketing/high-level-ellipse.png`} alt="ellipse" className="abm-hl-ellipse" />
                <img src={`${BASE_URL}/img/AccountBasedMarketing/high-level-rec.png`} alt="rec" className="abm-hl-rec" />

                <div className="container-lg">
                    <div className="row abm-high-level-row">
                        <div className="col-lg-12 abm-high-level-col">
                            <div className="abm-hl-content">
                                <h2>Working on your high-level vision and turning them into highly-targeted and efficient resources allocated for your high-value clients</h2>
                                <p>The breath and depth of your expertise allows us to create a tailor-made strategy for account-based marketing. Our approach is to create your ideal customer profile designed not only to increase the leads but also increase user retention, engagement and eventually loyalty.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="abm-define-solve-section">
                <div className="container-fluid">
                    <div className="row abm-define-solve-row">
                        <div className="col-lg-6">
                            <div className="abm-ds-banner">
                                <img src={`${BASE_URL}/img/AccountBasedMarketing/Define-to-solve-banner.png`} alt="Define to solve" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="abm-ds-content">
                                <h2>Define to solve</h2>
                                <p>Benefits to this solution</p>
                                <ul>
                                    <li><img src={`${BASE_URL}/img/AccountBasedMarketing/list-icon.png`} alt="-" /> Business’s relevancy Vs high-value accounts</li>
                                    <li><img src={`${BASE_URL}/img/AccountBasedMarketing/list-icon.png`} alt="-" /> Customer experiences consistency.</li>
                                    <li><img src={`${BASE_URL}/img/AccountBasedMarketing/list-icon.png`} alt="-" /> Marketing and Sales alignment.</li>
                                    <li><img src={`${BASE_URL}/img/AccountBasedMarketing/list-icon.png`} alt="-" /> Process oriented sales cycle.</li>
                                    <li><img src={`${BASE_URL}/img/AccountBasedMarketing/list-icon.png`} alt="-" /> Measurable Growth and ROI.</li>
                                    <li><img src={`${BASE_URL}/img/AccountBasedMarketing/list-icon.png`} alt="-" /> Business expansion through targeted account relationships.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="abm-connect-convert-section">
                <div className="container-lg">
                    <div className="row abm-connect-convert-row">
                        <div className="col-lg-6">
                            <div className="abm-cc-content">
                                <h2>Connect & Convert</h2>
                                <p>Clients connects to your story when you bring emotions, thrill and EQ which resonates with them.</p>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="abm-cc-banner">
                                <img src={`${BASE_URL}/img/AccountBasedMarketing/Connect-Convert-banner.png`} alt="Connect & Convert" className="cc-banner" />
                                <img src={`${BASE_URL}/img/AccountBasedMarketing/cc-rec.png`} alt="cc-rec" className="cc-rec" />
                                <img src={`${BASE_URL}/img/AccountBasedMarketing/cc-vector.png`} alt="cc-vector" className="cc-vector" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="abm-design-define-section">
                <img src={`${BASE_URL}/img/AccountBasedMarketing/dd-ellipse.png`} alt="dd-ellipse" className="dd-ellipse" />
                <img src={`${BASE_URL}/img/AccountBasedMarketing/dd-vector.png`} alt="dd-vector" className="dd-vector" />
                <img src={`${BASE_URL}/img/AccountBasedMarketing/dd-rec.png`} alt="dd-rec" className="dd-rec" />

                <div className="container-lg">
                    <div className="row abm-design-define-row">
                        <div className="col-lg-12">
                            <div className="abm-dd-content">
                                <h2>Design and define the solutions that makes your customer go from 'ignorance' to 'Want'</h2>
                                <p>Subscribe to our Quarterly reports or white papers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="abm-work-section">
                <div className="container-lg">
                    <div className="row abm-work-row">
                        <div className="col-lg-12">
                            <Carousel activeIndex={index} onSelect={handleSelect} controls={false} interval={null} fade>
                                <Carousel.Item>
                                    <ClientWorkItem
                                        thumbnail={`${BASE_URL}/img/AccountBasedMarketing/build-q.png`}
                                        title={`Build Q`}
                                        slug={`build-q`}
                                        content={`<p>Prospective plans to give back to society making a green environment a reality.</p>`}
                                        featuredImg={`${BASE_URL}/img/AccountBasedMarketing/building-a-perfect-digital-framework.png`}
                                        featuredTitle={`Building a perfect digital framework`}
                                        offeringTitle={`BuildQ - Digital Media Marketing`}
                                        offerinContent={`<p>One of the leading construction companies in Sydney - BuildQ Group outsourced their Digital Media Marketing to us. We devised a comprehensive digital marketing strategy.</p>`}
                                    />
                                </Carousel.Item>

                                <Carousel.Item>
                                    <ClientWorkItem
                                        thumbnail={`${BASE_URL}/img/AccountBasedMarketing/Fastgrow-Finance.png`}
                                        title={`Fastgrow Finance`}
                                        slug={`fastgrow-finance`}
                                        content={`<p>Fastgrow was able to instantly stand out from the crowd with our brand positioning strategy.</p>`}
                                        featuredImg={`${BASE_URL}/img/AccountBasedMarketing/out-of-the-ordinary.png`}
                                        featuredTitle={`Human to Human solutions`}
                                        offeringTitle={`Divine - Interactive Blueprint`}
                                        offerinContent={`<p>Divine Intercession is a team of specialists dealing with spiritual affliction and guidance. Our Interactive Blueprint plan increased their social media presence ..</p>`}
                                    />
                                </Carousel.Item>

                                <Carousel.Item>
                                    <ClientWorkItem
                                        thumbnail={`${BASE_URL}/img/AccountBasedMarketing/divine-intercession.png`}
                                        title={`Divine Intercession`}
                                        slug={`divine-intercession`}
                                        content={`<p>Creating evangelist since 2014, helping our visionary customers to achieve their extraordinary goal</p>`}
                                        featuredImg={`${BASE_URL}/img/AccountBasedMarketing/human-to-human-solutions.png`}
                                        featuredTitle={`Out of the ordinary`}
                                        offeringTitle={`Fastgrow - Digital Media Marketing`}
                                        offerinContent={`<p>Fastgrow Finance provides Mortgage Solutions and Loans in Sydney and is a growing name in the industry. With our comprehensive digital media..</p>`}
                                    />
                                </Carousel.Item>

                                <Carousel.Item>
                                    <ClientWorkItem
                                        thumbnail={`${BASE_URL}/img/AccountBasedMarketing/SK-Insurance.png`}
                                        title={`SK Insurance`}
                                        slug={`sk-insurance`}
                                        content={``}
                                        featuredImg={`${BASE_URL}/img/AccountBasedMarketing/visionary-growth-strategies.png`}
                                        featuredTitle={`Visionary growth strategies`}
                                        offeringTitle={`SK Insure - Digital Media Marketing`}
                                        offerinContent={`<p>SK Insure is a leading insurance provider based out of Australia. Armed with our effective digital media marketing strategy, they are constantly expanding their digital presence.</p>`}
                                    />
                                </Carousel.Item>

                            </Carousel>

                            <div className="abm-work-count">
                                <span className="big-count">0{index + 1}</span>/<span className="small-count">{totalSlide}</span>
                            </div>

                            <div className="abm-work-btn"><span className="abm-work-view-all" onClick={() => { navigate("/clients"); topHandle(); }}>View All Clients</span></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="abm-insights-section">
                <div className="container-lg">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="abm-insights-heading">Our Initiatives</div>
                        </div>
                    </div>

                    <div className="row abm-insights-grid-row">
                        <div className="col-lg-6 col-md-12 col-sm-12 mb-xs-20 p-0 abm-insights-grid">
                            <a onClick={() => { navigate("/blog"); topHandle(); }} title="Latest Blog">
                                <figure className="abm-insights-grid-img-effect">
                                    <img src={`${BASE_URL}/img/AccountBasedMarketing/Latest-Blog.png`} alt="Latest Blog" className="abm-insights-grid-img" />
                                    <div className="bottom-gradient-do_more"></div>
                                    <figcaption>
                                        <h2 className="abm-insights-grid-title">Latest Blog</h2>
                                        <div className="abm-insights-grid-desc"></div>
                                    </figcaption>
                                </figure>
                            </a>
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12 mb-xs-20 abm-insights-grid">
                            <div className="row">
                                <div className="col-sm-6 p-0">
                                    <a title="Corporality Magazine">
                                        <figure className="abm-insights-grid-img-effect">
                                            <img src={`${BASE_URL}/img/AccountBasedMarketing/Corporality-Magazine.png`} alt="Corporality Magazine" className="abm-insights-grid-img" />
                                            <div className="bottom-gradient-do_more"></div>
                                            <figcaption>
                                                <h2 className="abm-insights-grid-title">Corporality Magazine</h2>
                                                <div className="abm-insights-grid-desc"></div>
                                            </figcaption>
                                        </figure>
                                    </a>
                                </div>

                                <div className="col-sm-6 p-0">
                                    <a href="http://corporality.global/talk/" target={`_blank`} title="Corporality Talk">
                                        <figure className="abm-insights-grid-img-effect">
                                            <img src={`${BASE_URL}/img/AccountBasedMarketing/Corporality-Talk.png`} alt="Corporality Talk" className="abm-insights-grid-img" />
                                            <div className="bottom-gradient-do_more"></div>
                                            <figcaption>
                                                <h2 className="abm-insights-grid-title">Corporality Talk</h2>
                                                <div className="abm-insights-grid-desc"></div>
                                            </figcaption>
                                        </figure>
                                    </a>
                                </div>

                                <div className="col-sm-6 p-0">
                                    <a href="https://corporality.global/club" target={`_blank`} title="Corporality Club">
                                        <figure className="abm-insights-grid-img-effect">
                                            <img src={`${BASE_URL}/img/AccountBasedMarketing/Corporality-Club.png`} alt="Corporality Club" className="abm-insights-grid-img" />
                                            <div className="bottom-gradient-do_more"></div>
                                            <figcaption>
                                                <h2 className="abm-insights-grid-title">Corporality Club</h2>
                                                <div className="abm-insights-grid-desc"></div>
                                            </figcaption>
                                        </figure>
                                    </a>
                                </div>

                                <div className="col-sm-6 p-0">
                                    <a href="https://techconsultants.global/" target={`_blank`} title="TechConsultants">
                                        <figure className="abm-insights-grid-img-effect">
                                            <img src={`${BASE_URL}/img/AccountBasedMarketing/Tech-Consultant.png`} alt="TechConsultants" className="abm-insights-grid-img" />
                                            <div className="bottom-gradient-do_more"></div>
                                            <figcaption>
                                                <h2 className="abm-insights-grid-title">TechConsultants</h2>
                                                <div className="abm-insights-grid-desc"></div>
                                            </figcaption>
                                        </figure>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="abm-quote-section">
                <img src={`${BASE_URL}/img/AccountBasedMarketing/quote-vector.png`} alt="quote-vector" className="quote-vector" />
                <img src={`${BASE_URL}/img/AccountBasedMarketing/quote-rec-1.png`} alt="quote-rec-1" className="quote-rec-1" />
                <img src={`${BASE_URL}/img/AccountBasedMarketing/quote-rec-2.png`} alt="quote-rec-2" className="quote-rec-2" />

                <div className="container-lg">
                    <div className="row abm-quote-row">
                        <div className="col-lg-8">
                            <div className="abm-quote-title">Let's transform your Digital footprint for your business.</div>
                        </div>

                        <div className="col-lg-4">
                            <div className="abm-quote-btn-main">
                                <div className="abm-quote-btn" onClick={() => { navigate("/contact"); topHandle(); }}>Ask for Quote</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AccountBasedMarketing