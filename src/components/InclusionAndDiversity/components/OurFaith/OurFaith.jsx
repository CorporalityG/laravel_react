import React, { useEffect } from 'react'
import aos from "aos"
import './OurFaith.css'
import wall2 from '../OurFaith/wall.png'
import side2 from '../OurFaith/group.png'
import small2 from '../OurFaith/rect.png'
import { API_IMG_URL } from '../../../../config';

const OurFaith = (pageDetail) => {

    useEffect(() => {
        aos.init();
    }, [])

    return (
        <div className='OurFaith container-second-ourfaith'>
            <img className='side2-container-Faith' src={side2} alt='side2' />
            <div className="container ">
                <div className="">
                    <div className="row">
                        <div className="col-lg-6 imaging-2-Faith d-flex justify-content-center align-items-center flex-column">
                            <div className="images-2-Faith">
                                <img className='wall2-container-Faith' src={wall2} alt='wall2' />

                                <img className='small2-container-Faith' src={small2} alt='small2' />
                                <div className="img-container-Faith">
                                    <div className="hoverinit-Faith Inc_Div_our-faith-main-img-Faith">
                                        <div alt="main2" data-aos="fade-up-right" data-aos-duration="2000" data-aos-delay="1000">
                                            <img className='main2-Faith ' src={`${API_IMG_URL}pages/${pageDetail.our_faith_image}`} alt={`${pageDetail.our_faith_title}`} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 texting-2-Faith">
                            <p data-aos="fade-left" data-aos-duration="2000" className='prev-2-text-1-Faith'>{`${pageDetail.our_faith_title}`}</p>
                            <p data-aos="fade-left" data-aos-duration="2000" data-aos-delay="1000" className='prev-2-text-2-Faith'>{`${pageDetail.our_faith_description}`}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurFaith
