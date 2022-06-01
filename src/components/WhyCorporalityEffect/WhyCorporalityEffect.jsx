import React from 'react'
import './WhyCorporalityEffect.css'
import { BASE_URL } from '../../config';
import { Link } from 'react-router-dom';
import { RightForYouItem } from './RightForYouItem';
import { CommitmentItem } from './CommitmentItem';
import Accordion from 'react-bootstrap/Accordion'
import { KeyElementItem } from './KeyElementItem';
import { Helmet } from "react-helmet";

function WhyCorporalityEffect() {

    const topHandle = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    return (
        <>
            <Helmet>
                <title>{`The Best digital marketing firm in Sydney | Corporality`}</title>
                <meta name="description" content={`Grow your business globally with the experts that offers marketing services to let you promote business using SEO, PPC and SMM.`} />
                <link rel="canonical" href={`${BASE_URL}/why-corporality-effect/`} />
            </Helmet>

            <div className="wce-banner-main">
                <img src={BASE_URL + '/img/WhyCorporalityEffect/banner.png'} alt="Why Corporality Effect?" className="wce-banner-img" />
                <img src={BASE_URL + '/img/WhyCorporalityEffect/banner-vector.png'} alt="Vector" className="wce-banner-vector" />

                <img src={BASE_URL + '/img/WhyCorporalityEffect/rec-1.png'} alt="Rec 1" className="rec-1" />
                <img src={BASE_URL + '/img/WhyCorporalityEffect/rec-2.png'} alt="Rec 2" className="rec-2" />

                <div className="wce-banner-social-main">
                    <div className="wce-banner-social-img">
                        <img src={BASE_URL + '/img/WhyCorporalityEffect/social.png'} alt="Title" />
                    </div>
                    <div className="wce-banner-social-icon-main">
                        <div className="wce-banner-social-icon" onClick={() => window.open("https://www.facebook.com/CorporalityG/")}>
                            <i className="fa fa-facebook-f"></i>
                        </div>
                        <div className="wce-banner-social-icon" onClick={() => window.open("https://twitter.com/corporalityg/")}>
                            <i className="fa fa-twitter"></i>
                        </div>
                        <div className="wce-banner-social-icon" onClick={() => window.open("https://www.instagram.com/corporalityg/")}>
                            <i className="fa fa-instagram"></i>
                        </div>
                        <div className="wce-banner-social-icon" onClick={() => window.open("https://www.linkedin.com/company/corporalityg/")}>
                            <i className="fa fa-linkedin"></i>
                        </div>
                        <div className="wce-banner-social-icon" onClick={() => window.open("https://in.pinterest.com/CorporalityG/_created/")}>
                            <i className="fa fa-pinterest"></i>
                        </div>
                        <div className="wce-banner-social-icon" onClick={() => window.open("https://www.youtube.com/channel/UC4EISt8kHI4zzpmbIBMIBbg")}>
                            <i className="fa fa-youtube-play"></i>
                        </div>
                    </div>
                </div>

                <div className="container-lg">
                    <div className="row wce-banner-content-row">
                        <div className="col-lg-12">
                            <h1>Why Corporality Effect?</h1>
                            <p>The world is going through uncertain economic times. Businesses are forced to make tough decisions when it comes to marketing spend. Leaving your sales team to figure out the market and other teams work independently without direction isn’t going to assist your growth vision.</p>
                            <p>This is not the time to slow your digital marketing effort, and it is definitely not the time to move without any strategic planning and discipline in place.</p>
                            <p>The Corporality Effect program is designed to assist you with a modern digital sales and marketing framework. It focuses on your brand position with the sustainable content strategy you desire. It is your absolute duty to help your customer make his buying decision easier by staying relevant.</p>
                            <Link className="wce-banner-btn" to="/contact" onClick={() => { topHandle() }} >Request For Quote</Link>
                        </div>

                        <div className="wce-banner-phone">
                            <img src={BASE_URL + '/img/WhyCorporalityEffect/phone-icon.png'} alt="Phone" className="phone-icon" onClick={() => window.open("tel:61283794089", "_self")} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="wce-commitment-section">
                <div className="container-lg">
                    <div className="row wce-commitment-title-row">
                        <div className="col-lg-12">
                            <div className="wce-commitment-title">
                                <img src={BASE_URL + '/img/WhyCorporalityEffect/commitment-title.png'} alt="Commitment" />
                            </div>
                        </div>
                    </div>

                    <div className="row wce-commitment-boxes-row">
                        <CommitmentItem
                            title={'Insights From a Personalised Audit'}
                            subtitle={'<p>The most important part of hitting your marketing objective is knowing where to start. Our strategist will pinpoint where your marketing focus is required. Our audit uncovers the most critical issues that can be handled through rapid action to improve your total KPI and ROI. At the end recommendations, goals and milestones will be handed over so your accountability team members can review the findings.</p>'}
                        />

                        <CommitmentItem
                            title={'Future-proof marketing plan before execution'}
                            subtitle={'<p>Our regular consultancy will help you design a long-term digital sales and marketing strategy built around the vision projected by your leadership team. We work proactively and plan way ahead to minimise the risk of inconsistency. You’ll realise working with Corporality means being on top of your marketing plan and being up-to-date with shifting market trends. We believe in staying ahead so we focus on predicting the future and keep our eye on the latest research data.</p>'}
                        />

                        <CommitmentItem
                            title={'Let’s build you up together'}
                            subtitle={'<p>Don’t get stuck or be preoccupied with constraints if you are setting up for growth and looking to position your brand much higher. If brand reputation is something that matters to you, we at Corporality will deliver. Let’s explore your vision and mission together and we promise you a more established marketing approach with a very structured framework. In the end your staff will be conditioned to follow consistency in digital PR.</p>'}
                        />
                    </div>
                </div>
            </div>

            <div className="wce-business-section">
                <img src={BASE_URL + '/img/WhyCorporalityEffect/business-vector.png'} alt="Vector" className="business-vector" />
                <img src={BASE_URL + '/img/WhyCorporalityEffect/business-rec-1.png'} alt="Rec 1" className="business-rec-1" />
                <img src={BASE_URL + '/img/WhyCorporalityEffect/business-rec-2.png'} alt="Rec 2" className="business-rec-2" />
                <img src={BASE_URL + '/img/WhyCorporalityEffect/business-rec-3.png'} alt="Rec 3" className="business-rec-3" />
                <img src={BASE_URL + '/img/WhyCorporalityEffect/business-rec-4.png'} alt="Rec 4" className="business-rec-4" />

                <div className="container-lg">
                    <div className="row wce-business-row">
                        <div className="col-lg-12">
                            <h2>Does my business need The Corporality Effect?</h2>
                            <div className="wce-business-content">
                                <p>Today, 70% of consumers are convinced of purchasing a product even before making a direct inquiry to the business serving it.</p>
                                <p>Is your business attracting these consumers?</p>
                                <p>With Corporality Effect, you could do just that – gravitate your target market towards you. Create loyalty. Satisfy their expectations. And most importantly, make yourself become the answer to their questions.</p>
                                <p>Customers are thirsty for new innovations, trends, and approaches that your business could very well be a refreshing oasis if you have the Corporality Effect.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="wce-right-section">
                <div className="container-lg">
                    <div className="row wce-right-title-row">
                        <div className="col-lg-12">
                            <h2>Is this right for you?</h2>
                            <h3>Maybe you’ve found yourself in these situations…</h3>
                        </div>
                    </div>

                    <div className="row wce-right-boxes-row">
                        <RightForYouItem
                            thumbnail={BASE_URL + '/img/WhyCorporalityEffect/Unpleasant-Past-Experiences.png'}
                            title={'Unpleasant Past Experiences'}
                            subtitle={'“I’ve tried Inbound Marketing before, but I didn’t get the results I expected.”'}
                        />

                        <RightForYouItem
                            thumbnail={BASE_URL + '/img/WhyCorporalityEffect/Agencies-Unconcerned-With-Your-Goals.png'}
                            title={'Agencies Unconcerned With Your Goals'}
                            subtitle={'“Agencies are tiring to work with, they don’t even study my business.”'}
                        />

                        <RightForYouItem
                            thumbnail={BASE_URL + '/img/WhyCorporalityEffect/In-Need-Of-Solutions-And-Systems.png'}
                            title={'In Need Of Solutions And Systems'}
                            subtitle={'“My priority now is to drive traffic to my website, capture leads, and increase conversions… fast.”'}
                        />
                    </div>
                </div>
            </div>

            <div className="wce-work-section">
                <div className="container-lg">
                    <div className="row wce-work-title-row">
                        <div className="col-lg-12">
                            <h2>How Does It Work?</h2>
                            <p>Corporality Effect begins with a 2-day Workshop, which your leadership, sales, marketing, and related teams will participate in. Over the course of 52 weeks, you can work with our mentoring and development teams to work on the following:</p>
                            <Link className="wce-work-btn" to="/" onClick={() => { topHandle() }} >Corporality Culture</Link>
                        </div>
                    </div>

                    <div className="row wce-work-accordion-row">
                        <div className="col-lg-12">
                            <Accordion className="wce-work-accordion-main">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        <div className="wce-work-heading">
                                            <img src={BASE_URL + '/img/WhyCorporalityEffect/work-favicon-1.png'} alt="Workshop" />
                                            <span>Workshop</span>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p>Discovery discussion of goals and current strategies, alignment of marketing processes and positioning, and formulation of tailor-fit strategies and best methods of execution.</p>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                        <div className="wce-work-heading">
                                            <img src={BASE_URL + '/img/WhyCorporalityEffect/work-favicon-1.png'} alt="Audience empathetic analysis" />
                                            <span>Audience empathetic analysis</span>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, nunc sed donec sapien condimentum porta. Eget in nullam pharetra velit.</p>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>
                                        <div className="wce-work-heading">
                                            <img src={BASE_URL + '/img/WhyCorporalityEffect/work-favicon-2.png'} alt="A strategic mind-set" />
                                            <span>A strategic mind-set</span>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, nunc sed donec sapien condimentum porta. Eget in nullam pharetra velit.</p>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>
                                        <div className="wce-work-heading">
                                            <img src={BASE_URL + '/img/WhyCorporalityEffect/work-favicon-2.png'} alt="Futuristic Approach" />
                                            <span>Futuristic Approach</span>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, nunc sed donec sapien condimentum porta. Eget in nullam pharetra velit.</p>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>
                                        <div className="wce-work-heading">
                                            <img src={BASE_URL + '/img/WhyCorporalityEffect/work-favicon-3.png'} alt="Speed and agility" />
                                            <span>Speed and agility</span>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, nunc sed donec sapien condimentum porta. Eget in nullam pharetra velit.</p>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="5">
                                    <Accordion.Header>
                                        <div className="wce-work-heading">
                                            <img src={BASE_URL + '/img/WhyCorporalityEffect/work-favicon-3.png'} alt="Futuristic Approach" />
                                            <span>Futuristic Approach</span>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, nunc sed donec sapien condimentum porta. Eget in nullam pharetra velit.</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>

            <div className="wce-key-elements-section">
                <div className="container-lg">
                    <div className="row wce-key-elements-title-row">
                        <div className="col-lg-12">
                            <h2>5 Key Elements of the Framework</h2>
                            <p>Here is how the process looks like</p>
                        </div>
                    </div>

                    <div className="row wce-key-elements-boxes-row">
                        <KeyElementItem
                            title={'Marketing vs. Trust'}
                            content={'<p>Studies have shown that 81% of consumers trust friends and family more than businesses when it comes to purchasing decisions. Corporality Effect can show you the profound difference between using marketing and trust in sales and which can get you sailing to success or sinking to the bottom.</p>'}
                        />

                        <KeyElementItem
                            title={'Business Planning and Vision'}
                            content={'<p>Businesses are like cars – they need the proper direction and planning to get from point A to B. It is no wonder that businesses who make plans and execute them successfully grow 30% faster than those who don’t and Corporality Effect can help you with that.</p>'}
                        />

                        <KeyElementItem
                            title={'Inbound Marketing Strategy'}
                            content={'<p>The post-digital era opened up the world to various new approaches to marketing, and Inbound is currently the biggest wave to ride. Corporality Effect makes full use of this contemporary approach.</p>'}
                        />

                        <KeyElementItem
                            title={'Customer Experience'}
                            content={'<p>One problem persists with customers in their buyer’s journey: the experience differs in various channels. With Corporality Effect, you can unify these elements to bring one “Omni” effect, everywhere.</p>'}
                        />

                        <KeyElementItem
                            title={'Digital Impact'}
                            content={'<p>Everything today rests on something digital: from the home to industries, all businesses have more or less taken digital platforms for selling. Social networks and websites have become the new home for entrepreneurs, and Corporality Effect can help you maximise your digital presence. ere.</p>'}
                        />

                        <KeyElementItem
                            title={'Inbound Marketing Strategy'}
                            content={'<p>The post-digital era opened up the world to various new approaches to marketing, and Inbound is currently the biggest wave to ride. Corporality Effect makes full use of this contemporary approach.</p>'}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyCorporalityEffect