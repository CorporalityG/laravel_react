import React from 'react'
import './InboundShifting.css'
import { BASE_URL } from '../../config'
import { CuriousItem } from './CuriousItem'
import Accordion from 'react-bootstrap/Accordion'
import MetaTags from 'react-meta-tags';

function InboundShifting() {
    return (
        <>
            <MetaTags>
                <title>{`Corporality Inbound Shiftings | Corporality`}</title>
                <meta name="description" content={`Inbound shifting is a powerful brand strategy for many business owners and entrepreneurs. Learn how it works in this resource crafted by marketing`} />
            </MetaTags>

            <div className="is-banner-section">
                <img src={BASE_URL + '/img/InboundShifting/banner-dots.png'} alt="Why Corporality Effect?" className="is-banner-img" />
                <img src={BASE_URL + '/img/InboundShifting/banner-vector.png'} alt="Vector" className="is-banner-vector" />

                <img src={BASE_URL + '/img/InboundShifting/rec-1.png'} alt="Rec 1" className="rec-1" />
                <img src={BASE_URL + '/img/InboundShifting/rec-2.png'} alt="Rec 2" className="rec-2" />

                <div className="is-banner-social-main">
                    <div className="is-banner-social-img">
                        <img src={BASE_URL + '/img/InboundShifting/social.png'} alt="Title" />
                    </div>
                    <div className="is-banner-social-icon-main">
                        <div className="is-banner-social-icon" onClick={() => window.open("https://www.facebook.com/CorporalityG/")}>
                            <i className="fa fa-facebook-f"></i>
                        </div>
                        <div className="is-banner-social-icon" onClick={() => window.open("https://twitter.com/corporalityg/")}>
                            <i className="fa fa-twitter"></i>
                        </div>
                        <div className="is-banner-social-icon" onClick={() => window.open("https://www.instagram.com/corporalityg/")}>
                            <i className="fa fa-instagram"></i>
                        </div>
                        <div className="is-banner-social-icon" onClick={() => window.open("https://www.linkedin.com/company/corporalityg/")}>
                            <i className="fa fa-linkedin"></i>
                        </div>
                        <div className="is-banner-social-icon" onClick={() => window.open("https://in.pinterest.com/CorporalityG/_created/")}>
                            <i className="fa fa-pinterest"></i>
                        </div>
                        <div className="is-banner-social-icon" onClick={() => window.open("https://www.youtube.com/channel/UC4EISt8kHI4zzpmbIBMIBbg")}>
                            <i className="fa fa-youtube-play"></i>
                        </div>
                    </div>
                </div>

                <div className="container-lg">
                    <div className="row is-banner-content-row">
                        <div className="col-lg-12">
                            <div className="is-banner-content">
                                <h1>Ride on to success with your commitment.</h1>
                                <p>Did you notice that the market is more dynamic than ever? Competitors are becoming more effective and harder to track. Corporality is your inbound marketing partner that can help bring your business to a whole new level.</p>
                                <p>We adopt with the shifting market to help you achieve your most aggressive growth goals with the #InboundShift.</p>
                                <div className="is-banner-btn" onClick={() => window.open("https://zohoadmin-corporality.zohobookings.com.au/#/customer/discoverycall", "_blank")}>Book Your Discovery Session</div>
                            </div>
                        </div>

                        <div className="is-banner-phone">
                            <img src={BASE_URL + '/img/InboundShifting/phone-icon.png'} alt="Phone" className="phone-icon" onClick={() => window.open("tel:61283794089", "_self")} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="is-commitment-section">
                <div className="container-lg">
                    <div className="row is-commitment-row">
                        <div className="col-lg-12">
                            <div className="is-commitment-content">
                                <h2>Choose the Path to Corporality Effect with a 6-Month commitment</h2>
                                <p>Commitment. It’s a word we dedicate for you for signing up with Corporality Effect. See why it’s effective:</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="is-shifting-section">
                <div className="container-lg">
                    <div className="row is-shifting-row">
                        <div className="col-lg-6">
                            <div className="is-shifting-content">
                                <h2>What is Inbound Shifting?</h2>
                                <p>Any question that comes to an ordinary person’s mind is being searched online. To take advantage of the digital era, your website and social media accounts should be content-centred. Both shall serve as your virtual offices; a visually appealing site with well-written content with the right context shall pull visitors inward. It is called inbound marketing as such that it turns your website into such a conversion machine.</p>
                                <p>This methodology forges a strong connection to the market by making your organisation as the resource authority who understands the client’s difficulties and providing the right solutions for them. The high engagement generated by the content brings in leads.</p>
                                <p>This leads up to maximising your website to become a lead magnet, and you can add value to it with the use of CTAs, USPs, testimonials, and case studies. You can eventually nurture customer relationships efficiently if you employ contemporary techniques in your business such as Automation.</p>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="is-shifting-img">
                                <img src={BASE_URL + '/img/InboundShifting/What-is-Inbound-Shifting.png'} alt="What is Inbound Shifting?" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="is-curious-section">
                <div className="container-lg">
                    <div className="row is-curious-row">
                        <div className="col-lg-12">
                            <div className="is-curious-content">
                                <h2>Curious How We Do It?</h2>
                                <p>inbound shifting is a powerful tool for many business owners and entrepreneurs. Corporality delivers premium products that can surely improve your sales performance and more.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row is-curious-boxes-row">
                        <CuriousItem
                            title={'Content Strategy'}
                            content={'<p>Corporality can help you create one experience for all your customers across all platforms - an Omni effect - with a comprehensive approach in delivering content.</p>'}
                        />

                        <CuriousItem
                            title={'Marketing Objective'}
                            content={'<p>We deep dive and understand your business objective, find the value proposition and create insights competitive edge for your market position. Once marketing objectives are clear marketing strategy will be more aligned with your final goal.</p>'}
                        />

                        <CuriousItem
                            title={'Brand Strategy'}
                            content={'<p>We believe before we think about outside word we should fix inside issues and perspective. Checking and re-evaluating your brand strategy would be really great supportive act before we go ahead on digital media strategy.</p>'}
                        />
                    </div>
                </div>
            </div>

            <div className="is-problems-section">
                <div className="container-lg">
                    <div className="row is-problems-row">
                        <div className="col-lg-6">
                            <div className="is-problems-img">
                                <img src={BASE_URL + '/img/InboundShifting/What-Problems-Do-We-Tackle.png'} alt="What Problems Do We Tackle?" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="is-problems-content">
                                <h2>What Problems Do We Tackle?</h2>
                                <h3>We have the answers to your Inbound marketing problems.</h3>
                                <p>“<b>Our teams are fragmented about our strategy.</b> From leadership to marketing and sales, they’re simply not delivering a unified front.”</p>
                                <p>We can help fix your strategy with the Inbound Shifting workshop.</p>
                                <p>“We’re not sure why our <b>customers are</b> not fully satisfied. They’re <b>happy, yet something seems to be missing from their experience</b> with us.”</p>
                                <p>Let us help you make a better Content Strategy.</p>
                                <p>“The company knows what Inbound is, but we can’t pull enough traffic with our strategy.”</p>
                                <p>“We have great content, it’s comprehensive and captivating, but <b>we rank low in search engine results.</b>”</p>
                                <p>Climb up the search rankings with our Technical SEO services.</p>
                                <p>“<b>Managing customer satisfaction and keeping up with developing our team internally is a tedious task.</b>”</p>
                                <p>Streamline and improve your CRM with Corporality’ efficient Automation program.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="is-work-section">
                <div className="container-lg">
                    <div className="row is-work-title-row">
                        <div className="col-lg-12">
                            <h2>How Does It Work?</h2>
                            <p>Here is how the process looks like:</p>
                        </div>
                    </div>

                    <div className="row is-work-accordion-row">
                        <div className="col-lg-12">
                            <Accordion className="is-work-accordion-main">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        <div className="is-work-heading">
                                            <img src={BASE_URL + '/img/InboundShifting/favicon-tm-1.png'} alt="2-Day Workshop" />
                                            <span>2-Day Workshop</span>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p>Discovery discussion of goals and current strategies, alignment of marketing processes and positioning, and formulation of tailor-fit strategies and best methods of execution.</p>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                        <div className="is-work-heading">
                                            <img src={BASE_URL + '/img/InboundShifting/favicon-tm-1.png'} alt="Monthly Execution Plan" />
                                            <span>Monthly Execution Plan</span>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p>We’ll make sure you’re on track with your plans.</p>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>
                                        <div className="is-work-heading">
                                            <img src={BASE_URL + '/img/InboundShifting/favicon-tm-2.png'} alt="Continuous Adjustment" />
                                            <span>Continuous Adjustment</span>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p>We’ll help you monitor your ROI, maintain your market position, and reporting.</p>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>
                                        <div className="is-work-heading">
                                            <img src={BASE_URL + '/img/InboundShifting/favicon-tm-2.png'} alt="Transition for Stability and Growth" />
                                            <span>Transition for Stability and Growth</span>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p>We can help you upgrade to the next best steps as you grow.</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>

            <div className="is-model-assessment-section">
                <div className="container-lg">
                    <div className="row is-model-assessment-row">
                        <div className="col-lg-12">
                            <div className="is-ma-img">
                                <img src={BASE_URL + '/img/InboundShifting/model-assessment.png'} alt="Model Assessment" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InboundShifting