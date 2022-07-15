import './Page1.css'
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { BASE_URL, API_IMG_URL } from '../../../config';


const Page1 = (pageDetail) => {

    useEffect(() => {
        Aos.init();
    })

    return (
        <>
            {
                pageDetail ?
                    <div className="consult-page1" >
                        <div className="container">
                            <img src={BASE_URL + "/img/StrategyConsultancy/hollowDia.png"} alt="hollowDia" className="consult-hollowDia " />
                            <div className="d-md-flex align-items-center justify-content-between consult-pageContent">
                                <div className="consult-page1-content">
                                    <div data-aos="fade-right" data-aos-duration="1000">
                                        <div className="consult-pg1-con">


                                            <h1>{`${pageDetail.banner_title}`}</h1>
                                            <p>{`${pageDetail.banner_subtitle}`}</p>
                                        </div>
                                    </div>
                                    <div data-aos="fade-left">


                                        <img src={BASE_URL + "/img/StrategyConsultancy/hollow2.png"} alt="hollow2" className="consult-hollow2 " />
                                    </div>
                                    <div className="consult-page1-img d-sm-flex p-4">
                                        <img src={`${API_IMG_URL}pages/${pageDetail.subscribe_channel_image}`} alt={`${pageDetail.subscribe_channel_title}`} className=" consultimg2" />

                                        <div className="consultyoutubebox text-center">
                                            <p className="">{`${pageDetail.subscribe_channel_title}`}</p>
                                            <button type="button" className="btn footer-button">
                                                <div className="footer-button-text">
                                                    <a href={`${pageDetail.subscribe_channel_btn_link}`} target="_blank">{`${pageDetail.subscribe_channel_btn_text}`}</a>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>


                                <div className="consultimg3">
                                    <div data-aos="fade-left">

                                        <img className="iluilukyah" src={`${API_IMG_URL}pages/${pageDetail.banner_image}`} alt={`${pageDetail.banner_title}`} />
                                    </div>
                                </div>
                            </div>

                            <div className="consultgrad-1">
                                <img src={BASE_URL + "/img/StrategyConsultancy/rectcolor.png"} alt="rectcolor" className="" />
                            </div>
                            <div className="d-flex align-items-end flex-column consultancysocialmedia">
                                <img src={BASE_URL + "/img/StrategyConsultancy/facebook.png"} className=" py-1" alt="facebook" />
                                <img src={BASE_URL + "/img/StrategyConsultancy/twitter.png"} className=" py-1" alt="twitter" />
                                <img src={BASE_URL + "/img/StrategyConsultancy/insta.png"} className=" py-1" alt="insta" />
                                <img src={BASE_URL + "/img/StrategyConsultancy/linkedIN.png"} className=" py-1" alt="linkedIN" />
                                <img src={BASE_URL + "/img/StrategyConsultancy/pinterset.png"} className=" py-1" alt="pinterset" />
                                <img src={BASE_URL + "/img/StrategyConsultancy/youtube.png"} className=" py-1" alt="youtube" />
                            </div>
                        </div>
                    </div>
                    : null
            }
        </>
    )
}

export default Page1
