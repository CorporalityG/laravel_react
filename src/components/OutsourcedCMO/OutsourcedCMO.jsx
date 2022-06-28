import React, { useState, useEffect } from 'react'
import './OutsourcedCMO.css'
import { BASE_URL } from '../../config'
import Aos from "aos";
import { WhyHireItem } from "./WhyHireItem";
import Accordion from 'react-bootstrap/Accordion'
import ServicesClients from '../ServicesClients/ServicesClients';
import ServicesInsights from '../ServicesInsights/ServicesInsights';
import { ServicesAskQuote } from '../ServicesAskQuote/ServicesAskQuote';
import { LifeCycleStepItem } from './LifeCycleStepItem';
import { Helmet } from "react-helmet";

function OutsourcedCMO() {

    useEffect(() => {
        Aos.init({
            duration: 2000,
        });
    });

    const [showFaq, setShowFaq] = useState(false);

    const handelToggleFaq = () => {
        setShowFaq(!showFaq)
    }

    return (
        <>
            <Helmet>
                <title>{`Best Outsourced CMO Services | Experts in Strategy`}</title>
                <meta name="description" content={`An outsourced CMO gives your business an expert marketing strategy without the commitment to a full-time CMO. Let's talk about growth today.`} />
                <meta
                    name="keywords"
                    content="outsourced CMO services"
                />
                <link rel="canonical" href={`${BASE_URL}/brand-positioning/`} />
            </Helmet>

            <div className="cmo-banner-section">
                <div className='cmo-banner-top'></div>
                <div className='cmo-banner-middle' data-aos="zoom-in-up" data-aos-duration="1500"></div>
                <div className='cmo-banner-bottom' data-aos="zoom-in-up" data-aos-duration="2000"></div>

                <img src={`${BASE_URL}/img/OutsourcedCMO/banner-path.png`} alt="Vector" className="banner-path" data-aos="zoom-in-up" />
                <div className="banner-setting-big">
                    <img src={`${BASE_URL}/img/OutsourcedCMO/banner-setting-big.png`} alt="Setting Big" data-aos="zoom-in-up" />
                </div>
                <div className="banner-setting-small">
                    <img src={`${BASE_URL}/img/OutsourcedCMO/banner-setting-small.png`} alt="Setting Small" data-aos="zoom-in-up" />
                </div>

                <div className="container-fluid px-lg-0">
                    <div className="row cmo-banner-row">
                        <div className="col-lg-5 offset-lg-1">
                            <div className="cmo-banner-content">
                                <div data-aos="fade-up">
                                    <h1>Acting as your Outsourced CMO</h1>
                                </div>
                                <div className="cmo-banner-subtitle" data-aos="fade-up" data-aos-delay="300">Choose us to increase your marketing outcome</div>
                                <div className="cmo-banner-desc" data-aos="fade-up" data-aos-delay="500">
                                    <p>A C-level corporate executive taking the responsibility of your CMO activities in your organisatoin with creating, communicating and delivering offerings with the help of yours and ours team members that your customer and business partners will value.</p>
                                </div>
                                <div className="cmo-banner-btn" data-aos="fade-up" data-aos-delay="500">
                                    <a href="https://zohoadmin-corporality.zohobookings.com.au/#/customer/discoverycall" target="_blank">Book a Call</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="cmo-banner-video">
                                <video data-aos="fade-left" data-aos-duration="1600" autoPlay={true} muted loop>
                                    <source src={`${BASE_URL}/img/OutsourcedCMO/banner-video.mp4`} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cmo-social-section">
                    <div className="cmo-social-row" data-aos="fade-right" data-aos-delay="400">
                        <a href='https://www.facebook.com/CorporalityG' target="_blank"><i className="fa fa-facebook-f"></i></a>
                        <a href='https://twitter.com/corporalityg' target="_blank"><i className="fa fa-twitter"></i></a>
                        <a href='https://www.instagram.com/corporalityg/' target="_blank"><i className="fa fa-instagram"></i></a>
                        <a href='https://www.linkedin.com/company/corporality/' target="_blank"><i className="fa fa-linkedin"></i></a>
                        <a href='https://in.pinterest.com/CorporalityG/' target="_blank"><i className="fa fa-pinterest"></i></a>
                        <a href='https://www.youtube.com/channel/UC4EISt8kHI4zzpmbIBMIBbg' target="_blank"><i className="fa fa-youtube-play"></i></a>
                    </div>
                </div>
            </div>

            <div className="cmo-lifecycle-section">
                <div className="container-lg">
                    <div className="row cmo-lc-title-row">
                        <div className="col-lg-12">
                            <div className="cmo-lc-title-content">
                                <div data-aos="fade-up">
                                    <h2>Helping your Customer lifecycle, ensuring positive CX</h2>
                                </div>
                                <div className="cmo-lc-title-desc" data-aos="fade-up" data-aos-delay="300">
                                    <p>Our chief experience officer (CmO) ensures your brands and companies practicing a customer-centric strategy.  Hire us to increase customer and employee grasp, designing and delivering positive CX, prioritizing your client's viewpoint in delivery processes and tracking key performance indicators</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row cmo-lc-steps-row">
                        <div className="col-lg-12">
                            <div className="cmo-lc-steps-content">
                                <img src={`${BASE_URL}/img/OutsourcedCMO/All-About-You.png`} alt="All About You" data-aos="zoom-in-up" className="cmo-lc-steps-banner" />

                                <LifeCycleStepItem
                                    step={`1`}
                                    title={`Brand Builder`}
                                    content={`<p>A business truly grows when people become aware of the brand. An outsourced CMO is a catalyst for the awareness and growth of a company and its brand name.</p>`}
                                />

                                <LifeCycleStepItem
                                    step={`2`}
                                    title={`Innovator`}
                                    content={`<p>An outsourced CMO provides a presentable aspect to all the fronts of your business, making your brand truly unique and one of a kind, and bringing it to the public eye.</p>`}
                                />

                                <LifeCycleStepItem
                                    step={`3`}
                                    title={`Multitasker`}
                                    content={`<p>As expected from any highly experienced individual, an outsourced CMO will be able to transcend into multiple roles at the time of need and will be a communication boom for your organisation.</p>`}
                                />

                                <LifeCycleStepItem
                                    step={`4`}
                                    title={`The Brand Guardian`}
                                    content={`<p>The ultimate goal of the CMO is to create unmatched value for your product/service and to display it to the public eye, using various marketing techniques.</p>`}
                                />

                                <LifeCycleStepItem
                                    step={`5`}
                                    title={`Storyteller`}
                                    content={`<p>The outsourced CMO is your company’s voice to the world. The CMO makes sure the message you are trying to send is received by the people and understood. An outsourced CMO can hear your ideas and translate them to the world - which then transcends into business for your company.</p>`}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cmo-expect-section">
                <div className="container-lg">
                    <div className="row cmo-expect-title-row">
                        <div className="col-lg-12">
                            <div className="cmo-expect-title">
                                <div data-aos="fade-up">
                                    <h2>What to expect?</h2>
                                </div>
                                <div data-aos="fade-up" data-aos-delay="300">
                                    <p>Generic Job expectations we receive from clients</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row cmo-expect-content-row">
                        <div className="col-lg-6 cmo-ec-col">
                            <div className="cmo-expect-banner">
                                <div className='cmo-expect-bg' data-aos="zoom-in-up" data-aos-duration="1500"></div>
                                <img src={`${BASE_URL}/img/OutsourcedCMO/expect-banner.png`} alt="What to expect?" data-aos="zoom-in-up" />
                            </div>
                        </div>

                        <div className="col-lg-6 cmo-ec-col">
                            <div className="cmo-expect-content" data-aos="fade-up" data-aos-delay="300">
                                <ul>
                                    <li>Develop and execute marketing campaigns. A CMO’s primary responsibility is to create and implement regular marketing campaigns. Once the marketing campaign goes public, they oversee the data that comes in and tweak it accordingly.</li>
                                    <li>CMOs conduct market research and data analysis about their target market, the current brand experience, and market trends to figure out how to best reach their demographic and make sales.</li>
                                    <li>CMOs oversees all of the company’s public relations, including any public-facing marketing communications or messaging from the brand.</li>
                                    <li>The CMO usually works very closely with different C-level positions in the company, including the chief executive officer (CEO), the chief information officer (CIO), the chief product officer (CPO), the chief operating officer (COO), and the chief financial officer (CFO), to determine things like product pricing, new product development, and the brand’s direction.</li>
                                </ul>
                            </div>

                            <div className="cmo-expect-btn" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                                <a href="https://zohoadmin-corporality.zohobookings.com.au/#/customer/discoverycall" target="_blank">Schedule a Call</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cmo-why-hire-section">
                <div className="container-lg">
                    <div className="row cmo-wh-title-row">
                        <div className="col-lg-12">
                            <div className="cmo-wh-title-content">
                                <div data-aos="fade-up">
                                    <h2>Why hire Corporality's Outsourced CMO? </h2>
                                </div>
                                <div className="cmo-wh-title-desc" data-aos="fade-up" data-aos-delay="300">
                                    <p>The role of our outsourced CMO is tangible and adapts to changing spheres of marketing and technology. Get access to exclusive resources from a highly experienced professional such as - expertise, market knowledge, proven marketing strategies, and make your organisation much more productive in daily operations.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row cmo-wh-boxes-row">
                        <WhyHireItem
                            icon={`${BASE_URL}/img/OutsourcedCMO/projects.png`}
                            title={`Projects`}
                        />

                        <WhyHireItem
                            icon={`${BASE_URL}/img/OutsourcedCMO/Increases-Company-Productivity.png`}
                            title={`Increases Company Productivity`}
                        />

                        <WhyHireItem
                            icon={`${BASE_URL}/img/OutsourcedCMO/Helps-Scale-Company-Revenue-Faster.png`}
                            title={`Helps Scale Company Revenue Faster`}
                        />

                        <WhyHireItem
                            icon={`${BASE_URL}/img/OutsourcedCMO/Access-to-Expert-Marketing-Knowledge.png`}
                            title={`Access to Expert Marketing Knowledge`}
                        />
                    </div>
                </div>
            </div>

            <div className="cmo-faqs-section">
                <div className="container-lg">
                    <div className="row cmo-faqs-title-row" data-aos="zoom-in">
                        <div className="col-lg-12">
                            <div className="cmo-ft-content">
                                <div className="cmo-ft-subtitle" data-aos="zoom-in-up" data-aos-delay="100">Have a Questions</div>
                                <h2 data-aos="zoom-in-down" data-aos-delay="200">Check our Frequently asked Questions</h2>
                                <div className="cmo-ft-btn" onClick={handelToggleFaq} data-aos="zoom-in-right" data-aos-delay="300">Show <i className={`fa ${showFaq ? "fa-angle-up" : "fa-angle-down"}`}></i></div>
                            </div>
                        </div>
                    </div>

                    <div className={`row cmo-faqs-list-row ${showFaq ? "" : "hide"}`}>
                        <div className="col-lg-12">
                            <div className="cmo-faqs-list">
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>How will an Outsourced CMO impact my business?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>An Outsourced CMO is a skilled marketing leader who understands all of the moving parts and pieces inside of your organization, including past marketing campaigns assets that you have on hand, such as potential customers, email campaigns, social media ads, and the like.</p>
                                            <p>This also comprises of the human resource capacity that's available so that the chief marketing officer can then build a strategy that works best for your organization. The Outsourced chief marketing officer will be able to impact your business by bringing in the right talent and ensuring they achieve the outcomes needed.
                                            </p>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>How will an Outsourced Chief Marketing Officer work with my current marketing team?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>An Outsourced CMO will not replace your team members.</p>
                                            <p>Most organizations have smart capable marketing staff, but no real strategic leadership in the organization. With the strategic leadership of a CMO, the marketing team is able to get more work done.</p>
                                            <p>The perfect outcome for an Outsourced CMO is to support and encourage the growth of your current marketing team, and hiring additional marketing support as needed.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Why are CMOs high in demand?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>CMOs are leading their organizations in understanding how to apply technology for the benefit of their business. With an advanced level of understanding for today's tech, marketing teams today can be more valuable to the overall business and more efficient with larger scale digital initiatives.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ServicesClients />

            <ServicesInsights />

            <ServicesAskQuote />
        </>
    )
}

export default OutsourcedCMO