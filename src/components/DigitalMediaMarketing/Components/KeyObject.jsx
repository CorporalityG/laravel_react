
import './KeyObject.css'
import React, { useEffect } from 'react';
import { useNavigate } from "react-router";
import Aos from 'aos';
import 'aos/dist/aos.css';

const KeyObject = () => {

    const navigate = useNavigate();

    useEffect(() => {
        Aos.init();
    })

    return (
        <div className="container">
            <div className="d-xl-flex justify-content-center key_objectives">
                <div className=" ddm-audit">

                    <div data-aos="fade-right">

                        <div className="ddm-audi">
                            <h1>Key objectives</h1>
                            <p>The key objective is to align all short-term and long-term business goals  in order of their priority and accomplish them over the next two to three years. Create the ideal buyer persona, identify competition and describe products and services, to map out a detailed inventory encompassing your marketing assets.</p>
                        </div>
                    </div>


                    <div className="ddm-audit-strategies">
                        <div data-aos="fade-up">


                            <div data-aos="fade-up" data-aos-delay="200">
                                <p>
                                    <img src="./img/DigitalMediaMarketing/ddmdiamo.png" alt="Augmenting company visibility" className=" mx-2" />
                                    Augmenting company visibility
                                </p>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="400">

                                <p>
                                    <img src="./img/DigitalMediaMarketing/ddmdiamo.png" alt="Increasing the size" className=" mx-2" />
                                    Increasing the size of the audience with corporate or business level strategy 
                                </p>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="600">

                                <p>
                                    <img src="./img/DigitalMediaMarketing/ddmdiamo.png" alt="Differentiating" className=" mx-2" />
                                    Differentiating you from competition
                                </p>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="800">

                                <p>
                                    <img src="./img/DigitalMediaMarketing/ddmdiamo.png" alt="Market share increase" className=" mx-2" />
                                    Market share increase and maintenance
                                </p>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="1000">

                                <p>
                                    <img src="./img/DigitalMediaMarketing/ddmdiamo.png" alt="Generating qualified" className=" mx-2" />
                                   Generating qualified leads with effective lead generation strategy 
                                </p>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="1200">

                                <p>
                                    <img src="./img/DigitalMediaMarketing/ddmdiamo.png" alt="Customer engagement" className=" mx-2" />
                                    Customer engagement and usage 
                                </p>
                            </div>
                        </div>

                        <div data-aos="fade-right" data-aos-delay="1300">


                            <p>
                                A detailed marketing audit under your belt helps you provide marching orders that are strategically aligned towards your marketing goals.
                            </p>
                        </div>
                    </div>

                </div>
                <div className="key_objective_img">
                    <img src="./img/DigitalMediaMarketing/objective.gif" className="img-fluid m-5" alt="objective" />
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="key_objectives_btn_main">
                        <div className="key_objectives_btn" onClick={() => navigate("/contact")}>Book a discovery session</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KeyObject
