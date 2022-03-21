import React from 'react'
import './Faqs.css'
import { Link, useNavigate } from 'react-router-dom'
import Accordion from 'react-bootstrap/Accordion'
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../../config';

function Faqs() {

    const navigate = useNavigate();

    return (
        <div className="faqs-container">
            <div className="faq-banner-container">
                <img src={BASE_URL + '/img/faq-banner.png'} alt="FAQ" />
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="faq-list-container">
                            <div className="row">
                                <div className="col-md-12">
                                    <h1 className="faq-heading">Frequently Asked Questions</h1>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="faqs-list">
                                        <Accordion>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>
                                                    <span>1.What is our Go-to-market Strategy?</span>
                                                    <img src={BASE_URL + '/img/faq-plus-icon.png'} alt="+" />
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <p>Our GTM Strategy includes 3-steps that will help you with market focus, identifying newer business requirements, creating a product road map, positioning your product, influencing buyer decisions, anticipating revenue and executing product launch.</p>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header>
                                                    <span>2.What do the first steps in Go To Marketing entail?</span>
                                                    <img src={BASE_URL + '/img/faq-plus-icon.png'} alt="+" />
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
                                                <Accordion.Header>
                                                    <span>3.How are products positioned in the market with Corporality’s GTM strategy? </span>
                                                    <img src={BASE_URL + '/img/faq-plus-icon.png'} alt="+" />
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
                                                <Accordion.Header>
                                                    <span>4.What are the three pivotal steps adopted by Corporality to execute Go To Marketing?</span>
                                                    <img src={BASE_URL + '/img/faq-plus-icon.png'} alt="+" />
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
                                                        <div className="col-md-5">
                                                            <div className="faq-box-main">
                                                                <div className="faq-box-img">
                                                                    <img src={BASE_URL + '/img/product-launch-and-relaunch.png'} alt="launch and relaunch" />
                                                                </div>
                                                                <div className="faq-box-content">
                                                                    <div className="faq-box-line">
                                                                        <img src={BASE_URL + '/img/faq-box-line.png'} alt="-" />
                                                                    </div>
                                                                    <div className="faq-box-title">Product and business launch and relaunch</div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-5">
                                                            <div className="faq-box-main">
                                                                <div className="faq-box-img">
                                                                    <img src={BASE_URL + '/img/Business-growth.png'} alt="Business Growth" />
                                                                </div>
                                                                <div className="faq-box-content">
                                                                    <div className="faq-box-line">
                                                                        <img src={BASE_URL + '/img/faq-box-line.png'} alt="-" />
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
                </div>
            </div>
        </div>
    )
}

export default Faqs