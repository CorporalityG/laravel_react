import React from 'react'
import './Faqs.css'
import { Link, useNavigate } from 'react-router-dom'
import Accordion from 'react-bootstrap/Accordion'

function Faqs() {

    const navigate = useNavigate();

    return (
        <div className="faqs-digital-media-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="faq-digital-media-heading">FAQs</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="faqs-digital-media-list">
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Why do you need a customer segmentation and sales strategy?</Accordion.Header>
                                    <Accordion.Body>
                                        <p>Sales strategy defines how you will hit the growth objective by aligning resources to the top
market opportunities and building a predictive system to consistently achieve your goals. A
successful sales strategy provides an operating plan for a company’s sales teams, to
ensure execution of the revenue growth strategy. Leverage the plan to allocate resources in
the most effective and/or efficient manner, so that teams can grow revenue from new and
existing customers. The sales strategy optimizes the sales function to achieve revenue
growth objectives consistently.
</p>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>What is Market Segmentation and why do you need it?</Accordion.Header>
                                    <Accordion.Body>
                                        <p>Marketing is virtual and digital in 2022 and beyond. That means it’s even harder to get in
front of your prospects because the digital channels are more crowded than ever with
competing messages. Revenue Marketing can shoulder more work in building the pipeline,
but it also needs greater investment to contribute to profitable growth.</p>

                                        <p>Learn from the market leaders where to identify cross-functional savings, new efficiencies,
and fresh innovations to fuel your marketing results and take share.</p>
                                    </Accordion.Body>
                                </Accordion.Item>

                                
                            </Accordion>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="faq-book-btn-main">
                            <a href="https://corporality.global/contact" className="faq-book-btn" target={'_blank'}>See what we have to offer</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faqs