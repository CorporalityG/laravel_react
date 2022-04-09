import React, { useState } from 'react'
import './ServicesClients.css'
import Carousel from 'react-bootstrap/Carousel'
import { ClientWorkItem } from "./ClientWorkItem";
import { useNavigate } from "react-router"
import { BASE_URL } from '../../config'

function ServicesClients() {

    const totalSlide = '04';
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const navigate = useNavigate();
    const topHandle = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    return (
        <>
            <div className="clients-work-section">
                <div className="container-lg">
                    <div className="row clients-work-row">
                        <div className="col-lg-12">
                            <Carousel activeIndex={index} onSelect={handleSelect} controls={false} interval={null} fade>
                                <Carousel.Item>
                                    <ClientWorkItem
                                        thumbnail={`${BASE_URL}/img/ServicesClients/build-q.png`}
                                        title={`Build Q`}
                                        slug={`build-q`}
                                        content={`<p>Prospective plans to give back to society making a green environment a reality.</p>`}
                                        featuredImg={`${BASE_URL}/img/ServicesClients/building-a-perfect-digital-framework.png`}
                                        featuredTitle={`Building a perfect digital framework`}
                                        offeringTitle={`BuildQ - Digital Media Marketing`}
                                        offerinContent={`<p>One of the leading construction companies in Sydney - BuildQ Group outsourced their Digital Media Marketing to us. We devised a comprehensive digital marketing strategy.</p>`}
                                    />
                                </Carousel.Item>

                                <Carousel.Item data-aos="zoom-in">
                                    <ClientWorkItem
                                        thumbnail={`${BASE_URL}/img/ServicesClients/Fastgrow-Finance.png`}
                                        title={`Fastgrow Finance`}
                                        slug={`fastgrow-finance`}
                                        content={`<p>Fastgrow was able to instantly stand out from the crowd with our brand positioning strategy.</p>`}
                                        featuredImg={`${BASE_URL}/img/ServicesClients/out-of-the-ordinary.png`}
                                        featuredTitle={`Human to Human solutions`}
                                        offeringTitle={`Divine - Interactive Blueprint`}
                                        offerinContent={`<p>Divine Intercession is a team of specialists dealing with spiritual affliction and guidance. Our Interactive Blueprint plan increased their social media presence ..</p>`}
                                    />
                                </Carousel.Item>

                                <Carousel.Item data-aos="zoom-in">
                                    <ClientWorkItem
                                        thumbnail={`${BASE_URL}/img/ServicesClients/divine-intercession.png`}
                                        title={`Divine Intercession`}
                                        slug={`divine-intercession`}
                                        content={`<p>Creating evangelist since 2014, helping our visionary customers to achieve their extraordinary goal</p>`}
                                        featuredImg={`${BASE_URL}/img/ServicesClients/human-to-human-solutions.png`}
                                        featuredTitle={`Out of the ordinary`}
                                        offeringTitle={`Fastgrow - Digital Media Marketing`}
                                        offerinContent={`<p>Fastgrow Finance provides Mortgage Solutions and Loans in Sydney and is a growing name in the industry. With our comprehensive digital media..</p>`}
                                    />
                                </Carousel.Item>

                                <Carousel.Item data-aos="zoom-in">
                                    <ClientWorkItem
                                        thumbnail={`${BASE_URL}/img/ServicesClients/SK-Insurance.png`}
                                        title={`SK Insurance`}
                                        slug={`sk-insurance`}
                                        content={``}
                                        featuredImg={`${BASE_URL}/img/ServicesClients/visionary-growth-strategies.png`}
                                        featuredTitle={`Visionary growth strategies`}
                                        offeringTitle={`SK Insure - Digital Media Marketing`}
                                        offerinContent={`<p>SK Insure is a leading insurance provider based out of Australia. Armed with our effective digital media marketing strategy, they are constantly expanding their digital presence.</p>`}
                                    />
                                </Carousel.Item>

                            </Carousel>

                            <div className="clients-work-count" data-aos="fade-up" data-aos-delay="400">
                                <span className="big-count">0{index + 1}</span>/<span className="small-count">{totalSlide}</span>
                            </div>

                            <div className="clients-work-btn" data-aos="fade-up" data-aos-delay="500"><span className="clients-work-view-all" onClick={() => { navigate("/clients"); topHandle(); }}>View All Clients</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServicesClients