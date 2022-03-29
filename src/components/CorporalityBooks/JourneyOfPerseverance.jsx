import React from 'react'
import './CorporalityBookSingle.css'
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../config';
import Carousel from 'react-bootstrap/Carousel'

function JourneyOfPerseverance() {
    return (
        <>
            <div className="c-book-single-banner-container">
                <img src={BASE_URL + '/img/CorporalityBook/single-rec.png'} alt="Single Rec" className="c-book-single-banner-rec" />

                <div className="container">
                    <div className="row c-book-single-banner-row">
                        <div className="col-lg-7">
                            <div className="c-book-single-banner-content">
                                <h1>journey of perseverance</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, nunc sed donec sapien condimentum porta. Eget in nullam pharetra velit. Interdum integer turpis hac condimentum nam. In libero pulvinar nisi ullamcorper commodo sagittis massa sem. Tincidunt rhoncus sed lectus sed.</p>
                                <div className="buy-now-btn">Buy Now</div>
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="c-book-single-banner-main">
                                <img src={BASE_URL + '/img/CorporalityBook/journey-of-perseverance-banner.png'} alt="journey of perseverance" className="c-book-single-banner-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="c-book-single-main-content-container">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="c-book-single-main-content">
                                <h2>Main content in this book</h2>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, nunc sed donec sapien condimentum porta. </li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, nunc sed donec sapien condimentum porta. </li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, nunc sed donec sapien condimentum porta. </li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, nunc sed donec sapien condimentum porta. </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="c-book-single-carousel-container">
                                <Carousel controls={false} indicators={true} interval={null} fade>
                                    <Carousel.Item>
                                        <div className="carousel-main">
                                            <img src={BASE_URL + '/img/CorporalityBook/journey-of-perseverance-contents.png'} alt="Single Rec" className="Contents" />
                                        </div>
                                    </Carousel.Item>

                                    <Carousel.Item>
                                        <div className="carousel-main">
                                            <img src={BASE_URL + '/img/CorporalityBook/journey-of-perseverance-introduction.png'} alt="Single Rec" className="Introduction" />
                                        </div>
                                    </Carousel.Item>

                                    <Carousel.Item>
                                        <div className="carousel-main">
                                            <img src={BASE_URL + '/img/CorporalityBook/journey-of-perseverance-testimonials.png'} alt="Single Rec" className="Testimonials" />
                                        </div>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="c-book-single-more-content-container">
                <div className="container">
                    <div className="row c-book-single-more-content-row">
                        <div className="col-lg-6">
                            <div className="c-book-single-more-title">
                                <h2>More About this Book</h2>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="c-book-single-more-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, nunc sed donec sapien condimentum porta. Eget in nullam pharetra velit. Interdum integer turpis hac condimentum nam. In libero pulvinar nisi ullamcorper commodo sagittis massa sem. Tincidunt rhoncus sed lectus sed.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, nunc sed donec sapien condimentum porta. Eget in nullam pharetra velit. Interdum integer turpis hac condimentum nam. In libero pulvinar nisi ullamcorper commodo sagittis massa sem. Tincidunt rhoncus sed lectus sed.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, nunc sed donec sapien condimentum porta. Eget in nullam pharetra velit. Interdum integer turpis hac condimentum nam. In libero pulvinar nisi ullamcorper commodo sagittis massa sem. Tincidunt rhoncus sed lectus sed.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row c-book-single-more-content-buy-row">
                        <div className="col-lg-6">
                            <div className="c-book-single-more-content-heading">Buy this journey of perseverance Book now</div>
                        </div>

                        <div className="col-lg-6">
                            <div className="c-book-single-more-content-btn-main">
                                <div className="c-book-single-more-content-btn">Buy Now</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JourneyOfPerseverance