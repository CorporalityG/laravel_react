import React, { useEffect, useState } from 'react'
import { API_BASE_URL, BASE_URL } from '../../../config';
import "./Portfolio.css"
import Carousel from 'react-bootstrap/Carousel'
import { useNavigate } from "react-router";

const NewPortfolio = () => {

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
        <div className="portfolio-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Carousel activeIndex={index} onSelect={handleSelect} controls={false} interval={null} fade>
                            <Carousel.Item>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-4 portfolio-left">
                                            <div className="portfolio-img-heading">
                                                <img className="portfolio-img" src={BASE_URL + '/img/HomePage/media/build-q.png'} alt="Build Q" />
                                                <h2 className="portfolio-heading">Build Q</h2>
                                            </div>
                                        </div>
                                        <div className="col-md-8 portfolio-right">
                                            <h3 className="portfolio-title">Work that Excites us.</h3>
                                            <div className="portfolio-content">
                                                <p>Prospective plans to give back to society making a green environment a reality.</p>
                                            </div>
                                            <div className="portfolio-boxes">
                                                <div className="portfolio-box portfolio-box-studies" style={{backgroundImage: "url("+BASE_URL+"/img/HomePage/media/building-a-perfect-digital-framework.png)"}}>
                                                    <p className="studies-subtitle">Featured cause studies</p>
                                                    <p className="studies-title">Building a perfect digital framework</p>
                                                    <span className="portfolio-link" onClick={() => { navigate("/build-q"); topHandle(); }}>Explore <img src={BASE_URL + '/img/HomePage/media/right-arrow-blue.png'} alt="Arrow" /></span>
                                                </div>
                                                <div className="portfolio-box portfolio-box-steps">
                                                    <p className="steps-title">BuildQ - Digital Media Marketing</p>
                                                    <div className="steps-content">
                                                        <p>One of the leading construction companies in Sydney - BuildQ Group outsourced their Digital Media Marketing to us. We devised a comprehensive digital marketing strategy..</p>
                                                    </div>
                                                    <a href="#" className="portfolio-link">View Offering <img src={BASE_URL + '/img/HomePage/media/right-arrow-blue.png'} alt="Arrow" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>

                            <Carousel.Item>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-4 portfolio-left">
                                            <div className="portfolio-img-heading">
                                                <img className="portfolio-img" src={BASE_URL + '/img/HomePage/media/Fastgrow-Finance.png'} alt="Fastgrow Finance" />
                                                <h2 className="portfolio-heading">Fastgrow Finance</h2>
                                            </div>
                                        </div>
                                        <div className="col-md-8 portfolio-right">
                                            <h3 className="portfolio-title">Work that Excites us.</h3>
                                            <div className="portfolio-content">
                                                <p>Fastgrow was able to instantly stand out from the crowd with our brand positioning strategy.</p>
                                            </div>
                                            <div className="portfolio-boxes">
                                                <div className="portfolio-box portfolio-box-studies" style={{backgroundImage: "url("+BASE_URL+"/img/HomePage/media/out-of-the-ordinary.png)"}}>
                                                    <p className="studies-subtitle">Featured cause studies</p>
                                                    <p className="studies-title">Out of the ordinary</p>
                                                    <span className="portfolio-link" onClick={() => { navigate("/fastgrow-finance"); topHandle(); }}>Explore <img src={BASE_URL + '/img/HomePage/media/right-arrow-blue.png'} alt="Arrow" /></span>
                                                </div>
                                                <div className="portfolio-box portfolio-box-steps">
                                                    <p className="steps-title">Fastgrow - Digital Media Marketing</p>
                                                    <div className="steps-content">
                                                        <p>Fastgrow Finance provides Mortgage Solutions and Loans in Sydney and is a growing name in the industry. With our comprehensive digital media..</p>
                                                    </div>
                                                    <a href="#" className="portfolio-link">View Offering <img src={BASE_URL + '/img/HomePage/media/right-arrow-blue.png'} alt="Arrow" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>

                            <Carousel.Item>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-4 portfolio-left">
                                            <div className="portfolio-img-heading">
                                                <img className="portfolio-img" src={BASE_URL + '/img/HomePage/media/divine-intercession.png'} alt="Divine Intercession" />
                                                <h2 className="portfolio-heading">Divine Intercession</h2>
                                            </div>
                                        </div>
                                        <div className="col-md-8 portfolio-right">
                                            <h3 className="portfolio-title">Work that Excites us.</h3>
                                            <div className="portfolio-content">
                                                <p>Creating evangelist since 2014, helping our visionary customers to achieve their extraordinary goal</p>
                                            </div>
                                            <div className="portfolio-boxes">
                                                <div className="portfolio-box portfolio-box-studies" style={{backgroundImage: "url("+BASE_URL+"/img/HomePage/media/human-to-human-solutions.png)"}}>
                                                    <p className="studies-subtitle">Featured cause studies</p>
                                                    <p className="studies-title">Human to Human solutions</p>
                                                    <span className="portfolio-link" onClick={() => { navigate("/divine-intercession"); topHandle(); }}>Explore <img src={BASE_URL + '/img/HomePage/media/right-arrow-blue.png'} alt="Arrow" /></span>
                                                </div>
                                                <div className="portfolio-box portfolio-box-steps">
                                                    <p className="steps-title">Divine - Interactive Blueprint</p>
                                                    <div className="steps-content">
                                                        <p>Divine Intercession is a team of specialists dealing with spiritual affliction and guidance. Our Interactive Blueprint plan increased their social media presence ..</p>
                                                    </div>
                                                    <a href="#" className="portfolio-link">View Offering <img src={BASE_URL + '/img/HomePage/media/right-arrow-blue.png'} alt="Arrow" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>

                            <Carousel.Item>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-4 portfolio-left">
                                            <div className="portfolio-img-heading">
                                                <img className="portfolio-img" src={BASE_URL + '/img/HomePage/media/SK-Insurance.png'} alt="SK Insurance" />
                                                <h2 className="portfolio-heading">SK Insurance</h2>
                                            </div>
                                        </div>
                                        <div className="col-md-8 portfolio-right">
                                            <h3 className="portfolio-title">Work that Excites us.</h3>
                                            <div className="portfolio-content">
                                                {/*<p>Corporality helps SK Insurance delight customers with a renewed digital footprint</p>*/}
                                            </div>
                                            <div className="portfolio-boxes">
                                                <div className="portfolio-box portfolio-box-studies" style={{backgroundImage: "url("+BASE_URL+"/img/HomePage/media/visionary-growth-strategies.png)"}}>
                                                    <p className="studies-subtitle">Featured cause studies</p>
                                                    <p className="studies-title">Visionary growth strategies</p>
                                                    <span className="portfolio-link" onClick={() => { navigate("/sk-insurance"); topHandle(); }}>Explore <img src={BASE_URL + '/img/HomePage/media/right-arrow-blue.png'} alt="Arrow" /></span>
                                                </div>
                                                <div className="portfolio-box portfolio-box-steps">
                                                    <p className="steps-title">SK Insure - Digital Media Marketing</p>
                                                    <div className="steps-content">
                                                        <p>SK Insure is a leading insurance provider based out of Australia. Armed with our effective digital media marketing strategy, they are constantly expanding their digital presence..</p>
                                                    </div>
                                                    <a href="#" className="portfolio-link">View Offering <img src={BASE_URL + '/img/HomePage/media/right-arrow-blue.png'} alt="Arrow" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>

                            {/*<Carousel.Item>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-4 portfolio-left">
                                            <div className="portfolio-img-heading">
                                                <img className="portfolio-img" src={BASE_URL + '/img/HomePage/media/liqmet.png'} alt="Liqmet" />
                                                <h2 className="portfolio-heading">Liqmet</h2>
                                            </div>
                                        </div>
                                        <div className="col-md-8 portfolio-right">
                                            <h3 className="portfolio-title">Work that Excites us.</h3>
                                            <div className="portfolio-content">
                                                <p>Utilising agile in its true form to provide timely, transparent and reliable outcomes.</p>
                                            </div>
                                            <div className="portfolio-boxes">
                                                <div className="portfolio-box portfolio-box-studies" style={{backgroundImage: "url("+BASE_URL+"/img/HomePage/media/identifying-the-intended-maturity.png)"}}>
                                                    <p className="studies-subtitle">Featured cause studies</p>
                                                    <p className="studies-title">Identifying the intended maturity</p>
                                                    <span className="portfolio-link" onClick={() => { navigate("/liqmet"); topHandle(); }}>Explore <img src={BASE_URL + '/img/HomePage/media/right-arrow-blue.png'} alt="Arrow" /></span>
                                                </div>
                                                <div className="portfolio-box portfolio-box-steps">
                                                    <p className="steps-title">Our Fearless Steps</p>
                                                    <div className="steps-content">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor mattis faucibus ac nunc eu, sapien sollicitudin malesuada ut. Pellentesque dui, consectetur amet viverra a in urna vivamus.</p>
                                                    </div>
                                                    <a href="#" className="portfolio-link">View Offering <img src={BASE_URL + '/img/HomePage/media/right-arrow-blue.png'} alt="Arrow" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>*/}

                            {/*<Carousel.Item>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-4 portfolio-left">
                                            <div className="portfolio-img-heading">
                                                <img className="portfolio-img" src={BASE_URL + '/img/HomePage/media/divine-intercession.png'} alt="Klek Services" />
                                                <h2 className="portfolio-heading">Klek Services</h2>
                                            </div>
                                        </div>
                                        <div className="col-md-8 portfolio-right">
                                            <h3 className="portfolio-title">Work that Excites us.</h3>
                                            <div className="portfolio-content">
                                                <p>Customer centricity meant embracing digitalisation for Klek Services that was stuck in the past.</p>
                                            </div>
                                            <div className="portfolio-boxes">
                                                <div className="portfolio-box portfolio-box-studies" style={{backgroundImage: "url("+BASE_URL+"/img/HomePage/media/out-of-the-ordinary.png)"}}>
                                                    <p className="studies-subtitle">Featured cause studies</p>
                                                    <p className="studies-title">Out of the ordinary</p>
                                                    <span className="portfolio-link" onClick={() => { navigate("/klek-services"); topHandle(); }}>Explore <img src={BASE_URL + '/img/HomePage/media/right-arrow-blue.png'} alt="Arrow" /></span>
                                                </div>
                                                <div className="portfolio-box portfolio-box-steps">
                                                    <p className="steps-title">Our Fearless Steps</p>
                                                    <div className="steps-content">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor mattis faucibus ac nunc eu, sapien sollicitudin malesuada ut. Pellentesque dui, consectetur amet viverra a in urna vivamus.</p>
                                                    </div>
                                                    <a href="#" className="portfolio-link">View Offering <img src={BASE_URL + '/img/HomePage/media/right-arrow-blue.png'} alt="Arrow" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>*/}
                        </Carousel>

                        <div className="portfolio-count" data-aos="fade-up" data-aos-duration="2200">
                            <span className="big-count">0{index + 1}</span>/<span className="small-count">{totalSlide}</span>
                        </div>

                        <div className="portfolio-btn" data-aos="fade-up" data-aos-duration="2200"><span className="portfolio-view-all" onClick={() => { navigate("/"); topHandle(); }}>View All Clients</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewPortfolio
