import './Page4.css'
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { BASE_URL, API_IMG_URL } from '../../../config';

const Page4 = (pageDetail) => {

    useEffect(() => {
        Aos.init();
    })

    return (
        <>
            {
                pageDetail ?
                    <div className="d-flex justify-content-center Consultancypage-4">
                        <div className='circle-container2'>
                            <div className="center">
                                <img src={`${API_IMG_URL}pages/${pageDetail.marketing_strategy_experience_1_image}`} alt="centerCircle" className="" />
                            </div>
                            <div className="deg0"><img src={`${API_IMG_URL}pages/${pageDetail.marketing_strategy_experience_2_image}`} className=" Consultpolygon Consultancydia" alt="polygon3" /></div>
                            <div className="deg90"><img src={`${API_IMG_URL}pages/${pageDetail.marketing_strategy_experience_3_image}`} className=" Consultpolygon Consultancydia" alt="polygon2" /></div>
                            <div className="deg180"><img src={`${API_IMG_URL}pages/${pageDetail.marketing_strategy_experience_4_image}`} className=" Consultpolygon Consultancydia" alt="polygon1" /></div>
                            <div className="deg270"><img src={`${API_IMG_URL}pages/${pageDetail.marketing_strategy_experience_5_image}`} className=" Consultpolygon Consultancydia" alt="polygon2" /></div>

                        </div>

                        <div className="Consultancypage-4-cont">
                            <h2 className="head">{`${pageDetail.marketing_strategy_experience_1_title}`}</h2>
                            <p>{`${pageDetail.marketing_strategy_experience_1_description}`}</p>

                            <div className="main-div">
                                <img className="" src={BASE_URL + "/img/StrategyConsultancy/explore.png"} alt="explore" />
                                <img className=" front_arrow" src={BASE_URL + "/img/StrategyConsultancy/Vector.png"} alt="vector" />
                                <span className="explore-btn">{`${pageDetail.marketing_strategy_experience_1_btn_text}`}</span>
                            </div>
                            <h2 className="head head2">{`${pageDetail.marketing_strategy_experience_2_title}`}</h2>
                            <p>{`${pageDetail.marketing_strategy_experience_2_description}`}</p>

                            <div className="main-div">
                                <img className="" src={BASE_URL + "/img/StrategyConsultancy/explore.png"} alt="explore" />
                                <img className=" front_arrow" src={BASE_URL + "/img/StrategyConsultancy/Vector.png"} alt="vector" />
                                <span className="explore-btn">{`${pageDetail.marketing_strategy_experience_2_btn_text}`}</span>
                            </div>
                        </div>


                    </div>
                    : null
            }
        </>
    )
}

export default Page4
