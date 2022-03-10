import React, { useEffect, useState } from 'react'
import { API_BASE_URL, BASE_URL } from '../../../config';
import Carousel from 'react-grid-carousel'
import "./OurIniatives.css"

const OurIniatives = () => {
    return (
        <div className="our-iniatives-container">
            <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="iniatives-heading" data-aos="fade-down">Our Initiatives</div>
                  </div>
                </div>

                <div className="iniatives-carousel" data-aos="fade-up">
                    <Carousel cols={3} rows={1} gap={30} autoplay={8000} loop arrowLeft={<div className="iniative-carousel iniative-carousel-prev"><img src={BASE_URL + '/img/HomePage/our-iniatives/slide-prev.png'} alt="<" /></div>} arrowRight={<div className="iniative-carousel iniative-carousel-next"><img src={BASE_URL + '/img/HomePage/our-iniatives/slide-next.png'} alt=">" /></div>}>
                      <Carousel.Item>
                        <div className="iniatives-item" data-aos="fade-up" data-aos-duration="2200">
                            <img src={BASE_URL + '/img/HomePage/our-iniatives/corporality-business-magazine.png'} alt="corporality-business-magazine" />
                        </div>
                      </Carousel.Item>
                      <Carousel.Item>
                        <div className="iniatives-item" data-aos="fade-up" data-aos-duration="2400">
                            <img src={BASE_URL + '/img/HomePage/our-iniatives/corporality-club.png'} alt="corporality-club" />
                        </div>
                      </Carousel.Item>
                      <Carousel.Item>
                        <div className="iniatives-item" data-aos="fade-up" data-aos-duration="2600">
                            <img src={BASE_URL + '/img/HomePage/our-iniatives/corporality-talk.png'} alt="corporality-talk" />
                        </div>
                      </Carousel.Item>
                      <Carousel.Item>
                        <div className="iniatives-item">
                            <img src={BASE_URL + '/img/HomePage/our-iniatives/tech-consultants.png'} alt="tech-consultants" />
                        </div>
                      </Carousel.Item>
                      <Carousel.Item>
                        <div className="iniatives-item">
                            <img src={BASE_URL + '/img/HomePage/our-iniatives/priya-mishra.png'} alt="priya-mishra" />
                        </div>
                      </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default OurIniatives
