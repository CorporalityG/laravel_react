import React, { useState, useEffect } from 'react'
import './GoToMarketing.css'
import { BASE_URL } from '../../config'
import Aos from "aos";
import { ServicesAskQuote } from "../ServicesAskQuote/ServicesAskQuote";
import ServicesClients from '../ServicesClients/ServicesClients';
import ServicesInsights from '../ServicesInsights/ServicesInsights';
import { ApproachItem } from './ApproachItem';
import Accordion from 'react-bootstrap/Accordion'
import { useNavigate } from 'react-router-dom'
import WriteToUsModal from "./WriteToUsModal";
import MetaTags from 'react-meta-tags';

export default function GoToMarketing() {

    useEffect(() => {
        Aos.init({
            duration: 2000,
        });
    });

    const [showFaq, setShowFaq] = useState(false);

    const handelToggleFaq = () => {
        setShowFaq(!showFaq)
    }

    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(0);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = (modalId) => {
        setShowModal(modalId);
    }

    return (
        <>
            <MetaTags>
                <title>{`Go to Market Strategy | Corporality Go-to-market (GTM) Strategy`}</title>
                <meta name="description" content={`Corporality Global - Go to Marketing Strategy helps to achieve the business goals. Click here to know about What is a Go to Marketing Strategy? and why go to marketing strategy?`} />
                <meta name="keywords" content={`Go to Marketing Strategy`} />
            </MetaTags>

            <div className="gtm-banner-section">
                <img src={`${BASE_URL}/img/GoToMarketing/banner-rec.png`} alt="Rect" className="gtm-banner-rec" data-aos="zoom-in" />

                <div className="container-lg">
                    <div className="row gtm-banner-row">
                        <div className="col-lg-6 offset-lg-6">
                            <div className="gtm-banner-content">
                                <div className="gtm-b-heading" data-aos="fade-up">Go-To Marketing</div>
                                <div data-aos="fade-up" data-aos-delay="150">
                                    <h1>Aim For Global Growth</h1>
                                </div>
                                <div className="gtm-b-subtitle" data-aos="fade-up" data-aos-delay="300">Planning for expansion and growth in new markets we got you covered.</div>
                                <div className="gtm-banner-desc" data-aos="fade-up" data-aos-delay="500">
                                    <p>Corporality’s early insights through market research and strategy planning enables your team to have the confidence to take a big bet on your initiatives and dominate the new market. </p>
                                </div>
                                <div className="gtm-banner-btn" data-aos="fade-up" data-aos-delay="600">
                                    <a href="https://zohoadmin-corporality.zohobookings.com.au/#/customer/discoverycall" target="_blank">Schedule a time</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <img src={`${BASE_URL}/img/GoToMarketing/banner.png`} alt="GO-TO Marketing" className="gtm-banner" data-aos="zoom-in" data-aos-anchor="#gtm-anchor" />
            </div>

            <div className="gtm-approach-section">
                <div className="container-lg">
                    <div className="row gtm-approach-row">
                        <ApproachItem
                            number={`01`}
                            title={`Market Research`}
                            content={`<p>Identification stage for market to be segmented</p>`}
                        />

                        <ApproachItem
                            number={`02`}
                            title={`Customer Personification`}
                            content={`
                                    <p>Finding who is your ideal customer Below 4 capsule </p>
                                    <ul>
                                        <li>Competitive Landscape</li>
                                        <li>Capability Analysis</li>
                                        <li>Profitability</li>
                                        <li>Chanel</li>
                                    </ul>
                                `}
                        />

                        <div className="col-lg-4 gtm-a-col gtm-a-col-middle">
                            <div className="gtm-a-item-middle">
                                <img src={`${BASE_URL}/img/GoToMarketing/Our-Approach-banner.png`} alt="GO-TO Marketing" className="gtm-banner" data-aos="zoom-in" />
                                <div className="a-item-title-middle" data-aos="zoom-out-up">Our Approach to Go-To-Market Positioning</div>
                            </div>
                        </div>

                        <ApproachItem
                            number={`03`}
                            title={`Product Launch`}
                            content={`<p>Creating the impact to last</p>`}
                        />

                        <ApproachItem
                            number={`04`}
                            title={`Bench Marking`}
                            content={`<p>Evaluation to asure the growth</p>`}
                        />
                    </div>
                </div>
            </div>

            <div className="gtm-finding-ways-section">
                <div className="container-lg">
                    <div className="row gtm-finding-ways-row">
                        <div className="col-lg-12">
                            <div className="gtm-fw-content">
                                <div data-aos="fade-up">
                                    <h2>Finding New Ways To Bringing Products And Services To The Market</h2>
                                </div>
                                <div className="gtm-fw-desc" data-aos="fade-up" data-aos-delay="500">
                                    <p>A solid Go To Marketing (GTM) strategy drives the success of products and services in a new or an existing market. Coordinated messaging, precise product positioning and a clearly defined customer persona are all instrumental in the market progress of a product or service. Our effective go to marketing strategy also lays the foundation for developing newer products and services while keeping all business units aligned with the plan.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="gtm-faqs-section">
                <div className="container-lg">
                    <div className="row gtm-faqs-title-row" data-aos="zoom-in">
                        <div className="col-lg-12">
                            <div className="gtm-ft-content">
                                <div className="gtm-ft-subtitle" data-aos="zoom-in-up" data-aos-delay="100">Have a Questions</div>
                                <h2 data-aos="zoom-in-down" data-aos-delay="200">Check our Frequently asked Questions</h2>
                                <div className="gtm-ft-btn" onClick={handelToggleFaq} data-aos="zoom-in-right" data-aos-delay="300">Show <i className={`fa ${showFaq ? "fa-angle-up" : "fa-angle-down"}`}></i></div>
                            </div>
                        </div>
                    </div>

                    <div className={`row gtm-faqs-list-row ${showFaq ? "" : "hide"}`}>
                        <div className="col-lg-12">
                            <div className="gtm-faqs-list">
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>What is our Go-to-market Strategy?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <p>Our GTM Strategy includes 3-steps that will help you with market focus, identifying newer business requirements, creating a product road map, positioning your product, influencing buyer decisions, anticipating revenue and executing product launch.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>What do the first steps in Go To Marketing entail?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <h3>Market focus</h3>
                                            <p>Market focus involves understanding your ideal customers, knowing your competitors, and recognizing and capitalizing market opportunities.</p>

                                            <h3>Identifying business needs</h3>
                                            <p>This includes analyzing your company’s objectives and capabilities so you can make viable changes and improve your organizational context.</p>

                                            <h3>Creating product road map</h3>
                                            <p>A road map provides a clear strategic vision and direction for shareholders. Creating a solid product roadmap will guide you and your staff by sharing information on your current situation, plan, strategies, and implementation.</p>

                                            <h3>Creating product road map</h3>
                                            <p>A road map provides a clear strategic vision and direction for shareholders. Creating a solid product roadmap will guide you and your staff by sharing information on your current situation, plan, strategies, and implementation.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>How are products positioned in the market with Corporality’s GTM strategy?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <h3>Product positioning</h3>
                                            <p>This involves identifying your unique selling proposition and crafting a strategic marketing message to affect acceptance and sales. When done correctly, product positioning will set your product apart from other hands.</p>

                                            <h3>Price competition</h3>
                                            <p>Pricing is an essential factor of the marketing mix that influences a buyer’s decision. Our GTM strategy will help you determine a competitive price to ensure customer acceptance and profit from the product.</p>

                                            <h3>Anticipated revenue</h3>
                                            <p>Sales are the ultimate goal of every business. A Go To Marketing strategy will help you achieve your expected revenue by understanding the market and factors that can influence sales.</p>

                                            <h3>Product Launch execution</h3>
                                            <p>A successful product release needs extensive preparation. Our Go To Marketing strategy will ensure a positive product introduction supported by market research, beta testing and effective execution.</p>

                                            <div className="faq-btn" onClick={() => navigate("/about-corporality")}>Talk to us about GTM</div>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>What are the three pivotal steps adopted by Corporality to execute Go To Marketing?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <h3>Step 1: <span>Market and Competitive Intelligence</span></h3>
                                            <p>Are launching a profitable product? Which market are you targeting? Reliable information about the current marketing trend and your target consumers can seriously affect your product launch. With our GTM strategy, we will help you determine market opportunities and position your products to your ideal customer.</p>
                                            <h4>GTM Target Persona</h4>
                                            <p>Understanding who and where the target buyer may come from is the initial step in crafting a Go To Marketing (GTM) strategy. Some factors to consider are buyer’s behavior, process and buying power, the industry and organization they belong to, and distribution channels.</p>

                                            <h3>Step 2: <span>Go-to-market Planning</span></h3>
                                            <p>The GTM planning stage centers on the 4Ps of the marketing mix. The 4Ps are product, price, promotion and placement. This is when we focus on conceptualizing a product and marketing roadmaps. Our Go To Marketing blueprint will make the planning stage less com</p>
                                            <h4>Product Roadmap</h4>
                                            <p>A product roadmap is an overall view of the product’s goal, pricing, distribution, messaging, positioning and other factors you need to prepare for a product launch. This highlights the evolution of the product, timeline and resource allocation crucial to its introduction into new markets.</p>
                                            <h4>Marketing Roadmap</h4>
                                            <p>A marketing roadmap features promotional projects and priorities across marketing channels and functions. This includes content, digital advertising and events. A marketing roadmap will provide you with comprehensive data on goals, timeline, and status, giving you a clear view of the present and future activities.</p>
                                            <h4>Sales Roadmap</h4>
                                            <p>The sales process covers the entire sales journey, from prospecting to after sales services. This involves identifying qualified leads, touchpoints, customer-centric approach, presentations, closing, and after-sales. Following these steps will result in customer success.</p>
                                            <h4>Distribution</h4>
                                            <p>Distribution channels are methods used by companies to deliver products to their end-user. There are many distribution channels available for you, but not all of them are right for your business. Our Go to marketing strategy will help you identify suitable channels where you can maximize revenue without overextending your resources.</p>

                                            <h3>Step 3: <span>Go-to-market Execution</span></h3>
                                            <p>All well-established plans are useless with poor execution. With our Go To Marketing strategy, we will help you optimize your sales channels, price and packages, and allocate resources to ensure seamless implementation of the plan.</p>

                                            <div className="row faq-box-row">
                                                <div className="col-lg-5 col-md-6">
                                                    <div className="faq-box-main">
                                                        <div className="faq-box-img">
                                                            <img src={`${BASE_URL}/img/GoToMarketing/product-launch-and-relaunch.png`} alt="launch and relaunch" />
                                                        </div>
                                                        <div className="faq-box-content">
                                                            <div className="faq-box-line">
                                                                <img src={`${BASE_URL}/img/GoToMarketing/faq-box-line.png`} alt="-" />
                                                            </div>
                                                            <div className="faq-box-title">Product and business launch and relaunch</div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-5 col-md-6">
                                                    <div className="faq-box-main">
                                                        <div className="faq-box-img">
                                                            <img src={`${BASE_URL}/img/GoToMarketing/Business-growth.png`} alt="Business Growth" />
                                                        </div>
                                                        <div className="faq-box-content">
                                                            <div className="faq-box-line">
                                                                <img src={`${BASE_URL}/img/GoToMarketing/faq-box-line.png`} alt="-" />
                                                            </div>
                                                            <div className="faq-box-title">Business looking for growth</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <p>If you’re one of the three or still unclear on how Go-to-marketing can help you, book a call with us. We’re more than happy to walk you through the process.</p>

                                            <div className="faq-btn" onClick={() => navigate("/contact")}>Book a Discovery Call</div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="gtm-expand-section">
                <div className="container-lg">
                    <div className="row gtm-expand-content-row">
                        <div className="col-lg-6 gtm-expand-content-col">
                            <div className="gtm-ec-banner">
                                <img src={`${BASE_URL}/img/GoToMarketing/expand-banner.png`} alt="Working with Innovators only" className="ec-b-img" data-aos="fade-right" />
                                <img src={`${BASE_URL}/img/GoToMarketing/expand-rec.png`} alt="expand-rec" className="ec-b-rec" data-aos="fade-right" data-aos-delay="300" />

                                <img src={`${BASE_URL}/img/GoToMarketing/expand-vector.png`} alt="expand-vector" className="ec-b-vec" data-aos="fade-right" data-aos-delay="500" />
                                <img src={`${BASE_URL}/img/GoToMarketing/expand-rec-1.png`} alt="expand-rec-1" className="ec-b-rec-2" data-aos="zoom-in" />

                                <img src={`${BASE_URL}/img/GoToMarketing/expand-ellipse.png`} alt="expand-ellipse" className="ec-b-ellipse" data-aos="fade-up" data-aos-delay="300" />
                                <img src={`${BASE_URL}/img/GoToMarketing/expand-vec.png`} alt="expand-vec" className="ec-b-vec-1" data-aos="fade-up" data-aos-delay="400" />
                                <img src={`${BASE_URL}/img/GoToMarketing/expand-rect.png`} alt="expand-rect" className="ec-b-rec-1" data-aos="fade-up" data-aos-delay="500" />

                                <div className="ec-b-write-box" data-aos="zoom-in-left" data-aos-delay="500">
                                    <div className="bw-box-title">To share your pain point</div>
                                    <div className="bw-box-title">To know how we can help</div>
                                    <div className="bw-box-btn" onClick={() => handleShowModal('write')}>Write to us</div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 gtm-expand-content-col">
                            <div className="gtm-ec-desc">
                                <div data-aos="fade-up">
                                    <h2>Going ‘A’ new market to expand? </h2>
                                </div>
                                <div data-aos="fade-up" data-aos-delay="300">
                                    <p>We help new products or services to establish new market </p>
                                </div>
                                <ul data-aos="fade-up" data-aos-delay="500">
                                    <li>We can help you to Market research and segmentation</li>
                                    <li>We can help you with voice of consumer and competitors market share identificaiton</li>
                                    <li>Work with your Product/service design team to localize the communication to reach end-users</li>
                                    <li>We can help you to  Product Launch</li>
                                    <li>Analyse the success and growth to imoprove ongoing market demand</li>
                                    <li>Working with your team to service the demand generation, distribution model</li>
                                    <li>Finally Customer experience and serviceability</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <WriteToUsModal show={showModal} handleCloseModal={handleCloseModal} />
            </div>

            <div className="gtm-product-strategy-section">
                <div className="container-lg">
                    <div className="row gtm-ps-row">
                        <div className="col-lg-12">
                            <div className="gtm-ps-content">
                                <div data-aos="fade-up">
                                    <h2>Product Strategy</h2>
                                </div>
                                <div data-aos="fade-up" data-aos-delay="300">
                                    <p>A product planning to launch, your strategy can make or break the product perception. Pitching your product perception to your Buyer’s Persona is critical to the success of your Idea and close to a sale in a persuasive way. More importantly scaling your client portfolio is all dependent upon perception - would you agree?</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="gtm-ps-banner">
                                <img src={`${BASE_URL}/img/GoToMarketing/Product-Strategy.png`} alt="Product Strategy" data-aos="zoom-in-up" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ServicesClients />

            <ServicesInsights />

            <ServicesAskQuote
                action={`https://forms.zohopublic.com.au/corporality/form/AskQuoteGoToMarketCorporality/formperma/w4QerTkMcfNk8G8uydQP08pbGDNGJ3ot2f3svS3U8_8/htmlRecords/submit`}
            />
        </>
    )
}
