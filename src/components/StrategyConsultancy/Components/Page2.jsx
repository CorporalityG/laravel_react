import './Page2.css'
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { BASE_URL, API_IMG_URL } from '../../../config';

const Page2 = (pageDetail) => {

    useEffect(() => {
        Aos.init();
    })

    return (
        <>
            {
                pageDetail ?
                    <div className="constrat-2">
                        <div className="container-xl">
                            <div className="d-md-flex justify-content-center consultancypage-2">
                                <div data-aos="fade-right" data-aos-duration="1200">


                                    <div>

                                        <img className="mx-5 iluilukyah" src={`${API_IMG_URL}pages/${pageDetail.advice_image}`} alt="page-2" />
                                    </div>
                                </div>

                                <div data-aos="fade-left" data-aos-duration="1200">


                                    <div>
                                        <img className=" consultdvice " src={`${API_IMG_URL}pages/${pageDetail.advice_title_image}`} alt="advice" />

                                    </div>
                                </div>


                            </div>
                        </div>

                        <div data-aos="fade-right" data-aos-duration="1200">
                            <div className="consultancygradbox">
                                <img src={BASE_URL + "/img/StrategyConsultancy/page2-1.png"} alt="consultancybox-1" className="consultancybox-1" />
                                <img src={BASE_URL + "/img/StrategyConsultancy/page-2-1.png"} alt="consultancybox-2" className="consultancybox-2" />
                            </div>
                        </div>
                        <div data-aos="fade-down" data-aos-duration="1200">

                            <div className="text-center text-wrap pag-cont">
                                <h2>
                                    {`${pageDetail.business_experience_strategy_title}`}
                                </h2>
                                <p>{`${pageDetail.business_experience_strategy_description}`}</p>
                            </div>
                        </div>

                        <div className="d-flex justify-content-center align-items-center ">
                            <div className="consultbusinessbox">

                                <div data-aos="fade-up" data-aos-duration="1200">


                                    <div className="d-flex justify-content-around flex-wrap m-5">
                                        <div className=''><img src={`${API_IMG_URL}pages/${pageDetail.business_experience_strategy_step_1_image}`} alt="box1" /></div>
                                        <div><img src={`${API_IMG_URL}pages/${pageDetail.business_experience_strategy_step_2_image}`} alt="b0x2" /></div>
                                        <div><img src={`${API_IMG_URL}pages/${pageDetail.business_experience_strategy_step_3_image}`} alt="box3" /></div>
                                        <div><img src={`${API_IMG_URL}pages/${pageDetail.business_experience_strategy_step_4_image}`} alt="box4" /></div>
                                        <div><img src={`${API_IMG_URL}pages/${pageDetail.business_experience_strategy_step_5_image}`} alt="box5" /></div>
                                        <div><img src={`${API_IMG_URL}pages/${pageDetail.business_experience_strategy_step_6_image}`} alt="box6" /></div>
                                        <div><img src={`${API_IMG_URL}pages/${pageDetail.business_experience_strategy_step_7_image}`} alt="box2" /></div>
                                    </div>
                                </div>

                            </div>
                        </div>




                    </div>
                    : null
            }
        </>

    )
}

export default Page2
