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
                                    <Accordion.Header>Why Digital Media Marketing Strategy?</Accordion.Header>
                                    <Accordion.Body>
                                        <p>In 2021, businesses and consumers will continue to embrace the physical distancing concept. The technology was always there for over a decade but it is explored to it’s true potential by many companies only now.</p>
                                        <p>The digital Marketing strategy provides a clear assessment of a company’s digital maturity and optimization of digital process implementation across the corporate—with a focus on the intended maturation model. When our strategy will be deployed fully and correctly, it will accelerate the perception about your company brand position.</p>
                                        <p>It will not just be increasing effectiveness but also will bring eventual revenue growth for you.</p>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>What is Digital Process Optimization</Accordion.Header>
                                    <Accordion.Body>
                                        <p>Market leaders digitize all platforms that run through their business. These include and are not limited to their sales processes, marketing strategies, internal processes and employee dynamics, customer relations, as a driver of revenue etc. This however, is executed as cost efficiently as possible which means that optimisation comes prior or in parallel to the entire digital migration/construction.</p>
                                        <p><b>What It Is</b> – Digital Optimisation in an Internal process.</p>
                                        <p><b>Why It’s Important</b> – This aids influencing parties that contribute to the overall revenue growth across sales, marketing, and customer success.</p>
                                        <p><b>How to Use It</b> – Digitize processes that already fit your standard, instead of raising sub par ones to an acceptable level. Keeping that in mind is guaranteed to more noticeably maximise ROI.</p>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Why Digital Customer Journey Enhancement?</Accordion.Header>
                                    <Accordion.Body>
                                        <p>Market leaders continue to seek improvement in their customer journey. To do so, it’s all about looking for the key moments that lessen friction and delight customers. The digital media marketing strategy focuses on the defining moments that create the ideal experience for your clients by bringing about a significant impact to the entire customer journey. recognizes the fact that successful market leaders do not get hung up on automated digital marketing efforts that wholly create what seem to be custom/personal digital experiences for their intended audiences.</p>
                                        <p>Instead, true market leaders meticulously analyze the ROI of digital customer journey enhancement and strategically invest where there are logical and fair returns. Another key thing to keep in mind when calculating ROI and investment choices is clear customer segmentation that takes demographics, psychographics, behavioral tendencies and geographic positioning into account.</p>
                                        <p><b>What it is</b> – Establishment of basic and bespoke digital customer journey that is later enhanced even further.</p>
                                        <p><b>Why it’s important</b> – The reason for further enhancement is that the basic set-up of what is known to be tailored digital marketing is no longer innovation, but is now expectation.</p>
                                        <p><b>How to use it</b> – Optimise digital customer journeys through placing said key moments together with a profound perception of ROI at the core of all efforts.</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="faq-book-btn-main">
                            <a href="https://calendly.com/priya-mishra-sydney/discovery-call" className="faq-book-btn" target={'_blank'}>Book your Discovery session</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faqs