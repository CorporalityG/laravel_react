import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../../config';
import React from 'react';
import { useNavigate } from "react-router";

function PortfolioItemCarousel(props)
{
    return (
        <div className="row">
            <div className="col-md-6 portfolio-left">
                <div className="portfolio-img-heading" data-aos="fade-right">
                    {/*{ props.thumbnail && <img src={BASE_URL + props.thumbnail} className="blog-img" alt={props.title} /> }*/}
                    {/*{ props.thumbnail && <img src={API_IMG_URL + props.thumbnail} className="blog-img" alt={props.title} /> }*/}
                    <img className="portfolio-img" src={BASE_URL + '/img/HomePage/media/divine-intercession.png'} alt="Divine Intercession" />
                    <h2 className="portfolio-heading">Divine Intercession</h2>
                </div>
            </div>
            <div className="col-md-6 portfolio-right">
                <h3 className="portfolio-title" data-aos="fade-down">Work that exists  us.</h3>
                <div className="portfolio-content" data-aos="fade-down">
                    <p>Creating evangelist since 2014, helping our visionary customers to achieve their extraordinary goal</p>
                </div>
                <div className="portfolio-boxes">
                    <div className="portfolio-box portfolio-box-studies" style={{backgroundImage: "url("+BASE_URL+"/img/HomePage/media/human-to-human-solutions.png)"}} data-aos="fade-up">
                        <p className="studies-subtitle">Featured cause studies</p>
                        <p className="studies-title">Human to Human solutions</p>
                        <span className="portfolio-link" onClick={() => { navigate("/divine-intercession"); topHandle(); }}>Explore <img src={BASE_URL + '/img/HomePage/media/right-arrow-blue.png'} alt="Arrow" /></span>
                    </div>
                    <div className="portfolio-box portfolio-box-steps" data-aos="fade-up" data-aos-duration="2100">
                        <p className="steps-title">Our Fearless Steps</p>
                        <div className="steps-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor mattis faucibus ac nunc eu, sapien sollicitudin malesuada ut. Pellentesque dui, consectetur amet viverra a in urna vivamus.</p>
                        </div>
                        <a href="#" className="portfolio-link">View Offering <img src={BASE_URL + '/img/HomePage/media/right-arrow-blue.png'} alt="Arrow" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PortfolioItemCarousel;