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
                                          

                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header>
                                                    <span>How can you work with a transformation consultant?
</span>
                                                    <img src={BASE_URL + '/img/faq-plus-icon.png'} alt="+" />
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <p>Corporality’s Strategic Strength consulting begins with a 2-day Workshop, which your leadership, sales,  marketing, and related teams will participate in. Over the course of 52 weeks, you can work with our mentoring and development teams to work on the following:</p>
                                                    <h3>Ideation and Creativity</h3>
                                                    <p>Most high-level true professionals with entrepreneurial skill have endless ideas. A true strategist will maximise all the resources at your disposal, collaborating with you to carry out ideas with your untapped creativity.</p>

                                                    <h3> Works with a Business Model</h3>
                                                    <p>At this stage of ideation it is important to create a structure and a model to disrupt the industry to help you become a true leader in your industry. Knowing your business model will help you become invincible and a canvas is required to accurately picture your idea.
</p>

                                                    <h3>Build strong value propositions</h3>
                                                    <p>Vision and a good mind for business are non-negotiable qualities to have, but you also need a team of thinkers with a strong bias for action. We at Corporality can ensure not only success by helping you follow through your decisions but also practicality as we have strategists, planners, risk evaluators, and other teams dedicated to their roles.</p>

                                                    <h3>Creating product road map</h3>
                                                    <p>A road map provides a clear strategic vision and direction for shareholders. Creating a solid product roadmap will guide you and your staff by sharing information on your current situation, plan, strategies, and implementation.</p>

                                                    <h3>Strategy First</h3>
                                                    <p>Our philosophy is “ideation with fearless creativity” – and, working in line with your work philosophy and practices, will influence why and how you work. Your marketing transformation is incomplete and will not reach your desired results unless your team is firstly immersed and attuned to your strategy.
</p>

                                                    
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="2">
                                                <Accordion.Header>
                                                    <span>How Does Strategic Consulting work? </span>
                                                    <img src={BASE_URL + '/img/faq-plus-icon.png'} alt="+" />
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                   
                                                    <p>TYour Success is defined by the choices you make. Sometimes we are tested on our strength…
Our Strategic Consultants serve as your personal sales and marketing coach, working with you to identify areas that can dramatically improve your performance.
Think of it like pro athletes have personal coaches and trainers – they help them keep peak form and identify blind spots in their game.
Your Strategic Consultant will work with you to intimately understand your organisation and help you direct your sales and marketing initiatives.
The Consultant’s focus is to aid in bringing clarity to your complex problems, assist you with decision-making, and provide best-in-practice advice in implementing your strategy, ensuring you do it successfully.
We’ll work with you to get your company from where you are now to where you want to be, tackling roadblocks as they come up.
With Corporality, you will make the right decisions with the right mindset at the most opportune moment.
</p>

                                                   
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="3">
                                                <Accordion.Header>
                                                    <span>What More Can You Expect?</span>
                                                    <img src={BASE_URL + '/img/faq-plus-icon.png'} alt="+" />
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <h3>Upon special request:</h3>
                                                    <p>Two 60-minute meetings per month
This will be facilitated by your consultant with representatives from your leadership, sales, and marketing teams (by open invitation, predetermined by the consultant and organisational challenges or objectives).
Expertly facilitated quarterly review and planning sessions to keep you on track with your strategy and plans.
Get direct access to your personal consultant, no need to go through layers of contacts.
</p>

                                                    
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="3">
                                                <Accordion.Header>
                                                    <span>How do I know ifI’m a good fit for this programme?
</span>
                                                    <img src={BASE_URL + '/img/faq-plus-icon.png'} alt="+" />
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    
                                                    <p>This program is best suited for companies that are seeking to make dramatic improvements to their digital sales and marketing results.
We also highly recommend to book and continue your sessions with us to make sure the execution team is also part of the session or if outsourced, to be included in the plans.
If you are currently happy with the results you're seeing from your current strategy, and don't feel that you need help in that area, our strategic consulting program probably isn't the best fit for you.

</p>

                                                    
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