import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./GTMComp4.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min.js';
import aa from "./images/aa.png"
import ab from "./images/ab.png"
import ac from "./images/ac.png"
import ad from "./images/ad.png"
import ae from "./images/ae.png"
import "./animate4.css";

function GTMComp4() {
    useEffect(() => {
        Aos.init();
    });
    return (
        <div className="parentContainer">
            <div className="text-center container container1 GTMComp4 mt-5">
                <div className="row justify-content-center mt-5">
                    <div className="col-12">
                        <div data-aos="fade-down" data-aos-duration="2000" data-aos-easing="ease-in-out" className="aos-init aos-animate">
                            <h1 className="animate two">
                                <span>PROVEN</span>&nbsp;<span>PROCESSES</span>
                            </h1>
                        </div>
                    </div>
                    <div data-aos="fade-down" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-delay="1000" className="col-lg-7 col-md-8 col-10 aos-init aos-animate text">
                        <p className="GTMComp4text">
                            Making split-second decisions are standard in every business. Establishing a dynamic GTM strategy will help you align your team with the same goals. A GTM strategy will also assist you with:
                        </p>
                    </div>
                </div>
            </div>
            <div className="container mx-auto container2 GTMComp4">
                <div className="row justify-content-center">
                    <div className="shadow col-lg-4 mt-lg-5 mt-3 col-md-4 col-md-6">
                        <div className="content-inner fl-wrap">
                            <div className="content-front">
                                <div className="cf-inner">
                                    <div className="overlay"></div>
                                    <div className="inner inner1">
                                        <img className="mb-3" src={aa} alt="Forming a clearly" />
                                        <h2 className="yellowSquare">Forming a clearly defined product marketing plan</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="content-back">
                                <div className="cf-inner">
                                    <div className="overlay"></div>
                                    <div className="inner inner1">
                                        <img className="mb-3" src={aa} alt="Forming a clearly" />
                                        <h2 className="yellowSquare">Forming a clearly defined product marketing plan</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shadow col-lg-4 mt-lg-5 mt-3 col-md-4 col-md-6">
                        <div className="content-inner fl-wrap">
                            <div className="content-front">
                                <div className="cf-inner">
                                    <div className="overlay"></div>
                                    <div className="inner inner1">
                                        <img className="mb-3" src={ab} alt="Proper allocation" />
                                        <h2 className="yellowSquare">Proper allocation of time and money</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="content-back">
                                <div className="cf-inner">
                                    <div className="overlay"></div>
                                    <div className="inner inner1">
                                        <img className="mb-3" src={ab} alt="Proper allocation" />
                                        <h2 className="yellowSquare">Proper allocation of time and money</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shadow col-lg-4 mt-lg-5 mt-3 col-md-4 col-md-6">
                        <div className="content-inner fl-wrap">
                            <div className="content-front">
                                <div className="cf-inner">
                                    <div className="overlay"></div>
                                    <div className="inner inner1">
                                        <img className="mb-3" src={ac} alt="Succeessful product" />
                                        <h2 className="yellowSquare">Succeessful product or service launch</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="content-back">
                                <div className="cf-inner">
                                    <div className="overlay"></div>
                                    <div className="inner inner1">
                                        <img className="mb-3" src={ac} alt="Succeessful product" />
                                        <h2 className="yellowSquare">Succeessful product or service launch</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shadow col-lg-4 mt-lg-5 mt-3 col-md-6">
                        <div className="content-inner fl-wrap">
                            <div className="content-front">
                                <div className="cf-inner">
                                    <div className="overlay"></div>
                                    <div className="inner inner1">
                                        <img className="mb-3" src={ad} alt="Creating a solid path" />
                                        <h2 className="yellowSquare">Creating a solid path for growth</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="content-back">
                                <div className="cf-inner">
                                    <div className="overlay"></div>
                                    <div className="inner inner1">
                                        <img className="mb-3" src={ad} alt="Creating a solid path" />
                                        <h2 className="yellowSquare">Creating a solid path for growth</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shadow col-lg-4 mt-lg-5 mt-3 col-md-6">
                        <div className="content-inner fl-wrap">
                            <div className="content-front">
                                <div className="cf-inner">
                                    <div className="overlay"></div>
                                    <div className="inner inner1">
                                        <img className="mb-3" src={ae} alt="Establishing an effective" />
                                        <h2 className="yellowSquare">Establishing an effective customer service</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="content-back">
                                <div className="cf-inner">
                                    <div className="overlay"></div>
                                    <div className="inner inner1">
                                        <img className="mb-3" src={ae} alt="Establishing an effective" />
                                        <h2 className="yellowSquare">Establishing an effective customer service</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5 mx-auto GTMComp4 d-flex align-items-center justify-content-center">
                <button type="submit" className="mx-auto philosophySubmitButton d-flex align-items-center justify-content-center">
                    Learn More
                </button>
            </div>
        </div>
    );
}

export default GTMComp4;