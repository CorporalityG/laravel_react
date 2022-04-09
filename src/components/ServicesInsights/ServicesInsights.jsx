import React from 'react'
import './ServicesInsights.css'
import { BASE_URL } from '../../config'
import { useNavigate } from "react-router"

function ServicesInsights() {

    const navigate = useNavigate();
    const topHandle = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    return (
        <>
            <div className="services-insights-section">
                <div className="container-lg">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="services-insights-heading" data-aos="zoom-out-up">Our Insights</div>
                        </div>
                    </div>

                    <div className="row services-insights-grid-row">
                        <div className="col-lg-6 col-md-12 col-sm-12 mb-xs-20 p-0 services-insights-grid">
                            <a onClick={() => { navigate("/blog"); topHandle(); }} title="Latest Blog">
                                <figure className="services-insights-grid-img-effect" data-aos="fade-right">
                                    <img src={`${BASE_URL}/img/ServicesInsights/Latest-Blog.png`} alt="Latest Blog" className="services-insights-grid-img" />
                                    <div className="bottom-gradient-do_more"></div>
                                    <figcaption>
                                        <h2 className="services-insights-grid-title">Latest Blog</h2>
                                        <div className="services-insights-grid-desc"></div>
                                    </figcaption>
                                </figure>
                            </a>
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12 mb-xs-20 services-insights-grid">
                            <div className="row">
                                <div className="col-sm-6 p-0">
                                    <a title="Corporality Magazine">
                                        <figure className="services-insights-grid-img-effect" data-aos="fade-down-right">
                                            <img src={`${BASE_URL}/img/ServicesInsights/Corporality-Magazine.png`} alt="Corporality Magazine" className="services-insights-grid-img" />
                                            <div className="bottom-gradient-do_more"></div>
                                            <figcaption>
                                                <h2 className="services-insights-grid-title">Corporality Magazine</h2>
                                                <div className="services-insights-grid-desc"></div>
                                            </figcaption>
                                        </figure>
                                    </a>
                                </div>

                                <div className="col-sm-6 p-0">
                                    <a href="http://corporality.global/talk/" target={`_blank`} title="Corporality Talk">
                                        <figure className="services-insights-grid-img-effect" data-aos="fade-down-left">
                                            <img src={`${BASE_URL}/img/ServicesInsights/Corporality-Talk.png`} alt="Corporality Talk" className="services-insights-grid-img" />
                                            <div className="bottom-gradient-do_more"></div>
                                            <figcaption>
                                                <h2 className="services-insights-grid-title">Corporality Talk</h2>
                                                <div className="services-insights-grid-desc"></div>
                                            </figcaption>
                                        </figure>
                                    </a>
                                </div>

                                <div className="col-sm-6 p-0">
                                    <a href="https://corporality.global/club" target={`_blank`} title="Corporality Club">
                                        <figure className="services-insights-grid-img-effect" data-aos="fade-up-right">
                                            <img src={`${BASE_URL}/img/ServicesInsights/Corporality-Club.png`} alt="Corporality Club" className="services-insights-grid-img" />
                                            <div className="bottom-gradient-do_more"></div>
                                            <figcaption>
                                                <h2 className="services-insights-grid-title">Corporality Club</h2>
                                                <div className="services-insights-grid-desc"></div>
                                            </figcaption>
                                        </figure>
                                    </a>
                                </div>

                                <div className="col-sm-6 p-0">
                                    <a href="https://techconsultants.global/" target={`_blank`} title="TechConsultants">
                                        <figure className="services-insights-grid-img-effect" data-aos="fade-up-left">
                                            <img src={`${BASE_URL}/img/ServicesInsights/Tech-Consultant.png`} alt="TechConsultants" className="services-insights-grid-img" />
                                            <div className="bottom-gradient-do_more"></div>
                                            <figcaption>
                                                <h2 className="services-insights-grid-title">TechConsultants</h2>
                                                <div className="services-insights-grid-desc"></div>
                                            </figcaption>
                                        </figure>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServicesInsights