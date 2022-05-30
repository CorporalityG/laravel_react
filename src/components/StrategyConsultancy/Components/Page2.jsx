import './Page2.css'
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { BASE_URL } from '../../../config';

const Page2 = () => {

    useEffect(() => {
        Aos.init();
    })

    return (
        <div className="constrat-2">
            <div className="container-xl">
                <div className="d-md-flex justify-content-center consultancypage-2">
                    <div data-aos="fade-right" data-aos-duration="1200">


                        <div>

                            <img className="mx-5 iluilukyah" src={BASE_URL + "/img/StrategyConsultancy/page-2.png"} alt="page-2" />
                        </div>
                    </div>

                    <div data-aos="fade-left" data-aos-duration="1200">


                        <div>
                            <img className=" consultdvice " src={BASE_URL + "/img/StrategyConsultancy/advice.png"} alt="advice" />

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
                        Business Experience Strategy
                    </h2>
                    <p>While using analytics and insights, we clearly understand both inorganic and organic lifters that play crucial roles in organisational elevation. With this combination, you are set to grow faster than most others in your industry.Corporality Global initiates a continued discovery process that helps you succeed in today's marketplace. Gain a grasp of the fundamental principles through an innovation marketing strategy programme that offers fresh means to future-proofing your business.</p>
                </div>
            </div>

                <div className="d-flex justify-content-center align-items-center ">
            <div className="consultbusinessbox">

                <div data-aos="fade-up" data-aos-duration="1200">


                    <div className="d-flex justify-content-around flex-wrap m-5">
                        <div className=''><img src={BASE_URL + "/img/StrategyConsultancy/box1.jpg"} alt="box1" /></div>
                        <div><img src={BASE_URL + "/img/StrategyConsultancy/b0x2.png"} alt="b0x2" /></div>
                        <div><img src={BASE_URL + "/img/StrategyConsultancy/box3.png"} alt="box3" /></div>
                        <div><img src={BASE_URL + "/img/StrategyConsultancy/box4.png"} alt="box4" /></div>
                        <div><img src={BASE_URL + "/img/StrategyConsultancy/box5.png"} alt="box5" /></div>
                        <div><img src={BASE_URL + "/img/StrategyConsultancy/box6.png"} alt="box6" /></div>
                        <div><img src={BASE_URL + "/img/StrategyConsultancy/box2.png"} alt="box2" /></div>
                    </div>
                    </div>

                </div>
            </div>




        </div>


    )
}

export default Page2
