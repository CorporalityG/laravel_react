import React from 'react'
import './Faqs.css'
import { Link, useNavigate } from 'react-router-dom'
import Accordion from 'react-bootstrap/Accordion'

function Faqs() {

    const navigate = useNavigate();

    return (
        <div className="faqs-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="faq-heading">FAQs</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="faqs-list">
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>What is our Go-to-market Strategy?</Accordion.Header>
                                    <Accordion.Body>
                                        <p>Our GTM Strategy includes 3-steps that will help you with market focus, identifying newer business requirements, creating a product road map, positioning your product, influencing buyer decisions, anticipating revenue and executing product launch.</p>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>What do the first steps in Go To Marketing entail? Market focus</Accordion.Header>
                                    <Accordion.Body>
                                        <p>Market focus involves understanding your ideal customers, knowing your competitors, and recognizing and capitalizing market opportunities.</p>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Identifying business needs</Accordion.Header>
                                    <Accordion.Body>
                                        <p>This includes analyzing your company’s objectives and capabilities so you can make viable changes and improve your organizational context.</p>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Creating product road map</Accordion.Header>
                                    <Accordion.Body>
                                        <p>A road map provides a clear strategic vision and direction for shareholders. Creating a solid product roadmap will guide you and your staff by sharing information on your current situation, plan, strategies, and implementation.</p>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>How are products positioned in the market with Corporality's GTM strategy? Product positioning</Accordion.Header>
                                    <Accordion.Body>
                                        <p>This involves identifying your unique selling proposition and crafting a strategic marketing message to affect acceptance and sales. When done correctly, product positioning will set your product apart from other hands.</p>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>Price competition</Accordion.Header>
                                    <Accordion.Body>
                                        <p>Pricing is an essential factor of the marketing mix that influences a buyer's decision. Our GTM strategy will help you determine a competitive price to ensure customer acceptance and profit from the product.</p>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="5">
                                    <Accordion.Header>Anticipated revenue</Accordion.Header>
                                    <Accordion.Body>
                                        <p>Sales are the ultimate goal of every business. A Go To Marketing strategy will help you achieve your expected revenue by understanding the market and factors that can influence sales.</p>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="6">
                                    <Accordion.Header>Product Launch execution</Accordion.Header>
                                    <Accordion.Body>
                                        <p>A successful product release needs extensive preparation. Our Go To Marketing strategy will ensure a positive product introduction supported by market research, beta testing and effective execution.</p>
                                        <div className="faq-btn" onClick={() => navigate("/about-corporality")}>Talk to us about GTM</div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faqs