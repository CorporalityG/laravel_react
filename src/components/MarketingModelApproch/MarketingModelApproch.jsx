import React, { useEffect } from 'react'
import './MarketingModelApproch.css'
import { BASE_URL } from '../../config'
import Aos from "aos";
import ServicesClients from '../ServicesClients/ServicesClients';
import ServicesInsights from '../ServicesInsights/ServicesInsights';
import { ServicesAskQuote } from '../ServicesAskQuote/ServicesAskQuote';
import { MarketingApproachStep } from './MarketingApproachStep';

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

            <div className="mma-models-section">
                <div className="container-lg">
                    <div className="row mma-models-title-row">
                        <div className="col-lg-12">
                            <div className="mma-models-title">
                                <div data-aos="fade-up">
                                    <h2>Why Marketing Models?</h2>
                                </div>
                                <div data-aos="fade-up" data-aos-delay="300">
                                    <p>Intended Maturation Model to optimize your full business.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mma-models-content-row">
                        <div className="col-lg-6 mma-ec-col">
                            <div className="mma-models-banner">
                                <div className='mma-models-bg' data-aos="zoom-in-up" data-aos-duration="1500"></div>
                                <img src={`${BASE_URL}/img/MarketingModelApproch/Why-Marketing-Models-banner.png`} alt="Why Marketing Models?" data-aos="zoom-in-up" />
                                <div className="mma-eb-title" data-aos="fade-up">Source:Gartner (February 2020)</div>
                            </div>
                        </div>

                        <div className="col-lg-6 mma-ec-col">
                            <div className="mma-models-content" data-aos="fade-up" data-aos-delay="300">
                                <p>Our prosperity business model holds the key understanding of what drives business success in the most complex and challenging business environment. Most measurement solutions stop at a certain level due to limitation of it's ability at granularity dissection and actionable nodes. Corporality prefer to go deeper and now provides maturation model to complete the required solution: Intended Maturation Mix Models.</p>
                                <p>By connecting strategic and tactical, customer and business lenses, with actionable items to reach the true potential. </p>
                            </div>
                            <div class="mma-models-btn" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000">Explore More</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mma-marketing-approach-section">
                <div className="container-lg">
                    <div className="row mma-ma-title-row">
                        <div className="col-lg-10">
                            <div className="mma-ma-title">
                                <div data-aos="fade-up">
                                    <h2>We work with 100+ customers to help their marketing approach.</h2>
                                </div>
                                <div data-aos="fade-up" data-aos-delay="300">
                                    <p>Corporality Global initiates a continued discovery process that helps you succeed in today's marketplace. Gain a grasp of the fundamental principles through an innovation marketing strategy programme that offers fresh means to future-proofing your business.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mma-ma-steps-row">
                        <div className="mma-ma-border"></div>
                        <div className="col-lg-10 mma-ma-steps-col mma-ma-steps-col-1">
                            <MarketingApproachStep
                                bgIcon={`${BASE_URL}/img/MarketingModelApproch/step-polygon-1.png`}
                                number={`01`}
                                title={`Intended Maturation Model`}
                            />

                            <MarketingApproachStep
                                bgIcon={`${BASE_URL}/img/MarketingModelApproch/step-polygon-2.png`}
                                number={`02`}
                                title={`Matrix and Tools`}
                            />

                            <MarketingApproachStep
                                bgIcon={`${BASE_URL}/img/MarketingModelApproch/step-polygon-3.png`}
                                number={`03`}
                                title={`Capability and serviceability analysis`}
                            />
                        </div>

                        <div className="col-lg-12 mma-ma-steps-col mma-ma-steps-col-2">
                            <MarketingApproachStep
                                bgIcon={`${BASE_URL}/img/MarketingModelApproch/step-polygon-4.png`}
                                number={`04`}
                                title={`Market Penetration`}
                            />

                            <MarketingApproachStep
                                bgIcon={`${BASE_URL}/img/MarketingModelApproch/step-polygon-3.png`}
                                number={`05`}
                                title={`Product Line Expansion`}
                            />

                            <MarketingApproachStep
                                bgIcon={`${BASE_URL}/img/MarketingModelApproch/step-polygon-1.png`}
                                number={`06`}
                                title={`Acquisition`}
                            />

                            <MarketingApproachStep
                                bgIcon={`${BASE_URL}/img/MarketingModelApproch/step-polygon-2.png`}
                                number={`07`}
                                title={`Partnering`}
                            />
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

export default MarketingModelApproch