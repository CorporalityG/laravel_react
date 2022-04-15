import React, { useEffect } from 'react'
import './MarketingModelApproch.css'
import { BASE_URL } from '../../config'
import Aos from "aos";
import ServicesClients from '../ServicesClients/ServicesClients';
import ServicesInsights from '../ServicesInsights/ServicesInsights';
import { ServicesAskQuote } from '../ServicesAskQuote/ServicesAskQuote';

function MarketingModelApproch() {

    useEffect(() => {
        Aos.init({
            duration: 2000,
        });
    });

    return (
        <>
            <div className="mma-banner-section">
                <img src={`${BASE_URL}/img/MarketingModelApproch/banner-bg.png`} alt="banner-bg" className="mma-banner-bg" data-aos="zoom-in-up" />

                <img src={`${BASE_URL}/img/MarketingModelApproch/banner-close.png`} alt="banner-close" className="mma-b-close-1" data-aos="zoom-in-up" />
                <img src={`${BASE_URL}/img/MarketingModelApproch/banner-close.png`} alt="banner-close" className="mma-b-close-2" data-aos="zoom-in-up" />
                <img src={`${BASE_URL}/img/MarketingModelApproch/banner-close.png`} alt="banner-close" className="mma-b-close-3" data-aos="zoom-in-up" />

                <img src={`${BASE_URL}/img/MarketingModelApproch/banner-circle-small.png`} alt="banner-circle-small" className="mma-b-circle-s" data-aos="zoom-in-up" />
                <img src={`${BASE_URL}/img/MarketingModelApproch/banner-circle-big.png`} alt="banner-circle-big" className="mma-b-circle-b" data-aos="zoom-in-up" />

                <img src={`${BASE_URL}/img/MarketingModelApproch/banner-dot.png`} alt="banner-dot" className="mma-b-dot" data-aos="zoom-in-up" />
                <img src={`${BASE_URL}/img/MarketingModelApproch/banner-circle.png`} alt="banner-circle" className="mma-b-circle" data-aos="zoom-in-up" />
                <img src={`${BASE_URL}/img/MarketingModelApproch/banner-rec.png`} alt="banner-rec" className="mma-b-rec" data-aos="zoom-in-up" />

                <div className="container-fluid">
                    <div className="row mma-banner-row">
                        <div className="col-lg-5 offset-lg-1">
                            <div className="mma-b-content">
                                <div className="mma-b-title" data-aos="fade-up">Marketing Models & Approach</div>
                                <div data-aos="fade-up" data-aos-delay="100">
                                    <h1>Let's transform your business.</h1>
                                </div>
                                <div className="mma-b-subtitle" data-aos="fade-up" data-aos-delay="300">Corporality can help your company adapt right Model.</div>
                                <div className="mma-b-desc" data-aos="fade-up" data-aos-delay="500">
                                    <p>We work with businesses similar to yours to understand the best suitable marketing models, to achieve desired performance, ROI, Growth. With our deep analysis and intensive measured approach results will speak it self.</p>
                                </div>

                                <div className="cmo-b-form" data-aos="fade-up" data-aos-delay="500">
                                    <input type="email" id="emailid" name="emailid" placeholder="Enter email" className="cmo-b-form-control" />
                                    <button type="submit" id="btnSubmit" name="btnSubmit" className="cmo-b-btn">Schedule a time</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 pr-0">
                            <div className="mma-b-img-main">
                                <img src={`${BASE_URL}/img/MarketingModelApproch/banner.png`} alt="Marketing Models & Approach" className="mma-b-img" data-aos="zoom-in-up" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mma-social-section">
                    <div className="mma-social-row" data-aos="fade-right" data-aos-delay="400">
                        <a href='https://www.facebook.com/CorporalityG' target="_blank"><i className="fa fa-facebook-f"></i></a>
                        <a href='https://twitter.com/corporalityg' target="_blank"><i className="fa fa-twitter"></i></a>
                        <a href='https://www.instagram.com/corporalityg/' target="_blank"><i className="fa fa-instagram"></i></a>
                        <a href='https://www.linkedin.com/company/corporality/' target="_blank"><i className="fa fa-linkedin"></i></a>
                        <a href='https://in.pinterest.com/CorporalityG/' target="_blank"><i className="fa fa-pinterest"></i></a>
                        <a href='https://www.youtube.com/channel/UC4EISt8kHI4zzpmbIBMIBbg' target="_blank"><i className="fa fa-youtube-play"></i></a>
                    </div>
                </div>
            </div>

            <ServicesClients />

            <ServicesInsights />

            <ServicesAskQuote />
        </>
    )
}

export default MarketingModelApproch