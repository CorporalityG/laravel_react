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
                                    <Accordion.Header>Why do you need a Product Strategy for brand positioning?</Accordion.Header>
                                    <Accordion.Body>
                                        <p>Corporality Focus is to define the market segments that are most attractive to pursue for your specific Product. Our Process is to implement the Product in desired markets. We need to start with market research, the market problems of these segments can be identified and scored. Product portfolio inventories your current market position if it is not a brand new product, and coverage across problems you have addressed through your value proposition evaluation is key to define the product success. The launch of the product will be pursued by following the market intent and demand.
</p>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>What are the Fundamentals of PRODUCT DEVELOPMENT</Accordion.Header>
                                    <Accordion.Body>
                                        <p>We help Product based strategy and explore different scenarios to work on a go no go scenario.</p>
                                        <p>Our process starts with the definition of hypothesis, product problem solving ability, and how customers can leverage our brand positioning strategy to solve their market problems. Run the survey to find market fit and demand situation and at the last to prepare brand narrative and packaging of product to make it market-ready.
</p>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>How do we map Product Launch, Go To Market and brand positioning?
</Accordion.Header>
                                    <Accordion.Body>
                                        <p>At this stage we work on product strategy to reach a potential market. Rollout and product management process and eventually it’s the start of selling. Establish a compelling message, brand story, launch plans. We will not just ensure all stakeholders are ready to engage in the successful launch of the product but also evaluate the distribution model to service the demand.
</p>
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