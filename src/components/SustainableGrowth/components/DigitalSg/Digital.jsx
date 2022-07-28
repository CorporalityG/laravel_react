import React, { useEffect } from "react";
import '../DigitalSg/Digital.css'
import aos from 'aos'
import main2DigitalSg from '../DigitalSg/MainDigitalSg.png'
import wall2DigitalSg from '../DigitalSg/WallDigitalSg.png'
import small2DigitalSg from '../DigitalSg/smallrectDigitalSg.png'
import side2DigitalSg from '../DigitalSg/GroupDigitalSg.png'
import { API_IMG_URL } from '../../../../config';

const DigitalSg = (pageDetail) => {

    useEffect(() => {
        aos.init({ duration: 3000 });

    }, [])

    return (
        <div className='Digital-Sg'>
            {
                pageDetail ?
                    <>
                        <img className='side2-container-Digital' src={side2DigitalSg} alt='side2DigitalSg' />
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 imaging-2-Digital d-flex justify-content-center align-items-center flex-column">
                                    <div className="images-2-Digital">
                                        <img className='wall2-container-Digital' src={wall2DigitalSg} alt='wall2DigitalSg' />

                                        <img className='small2-container-Digital' src={small2DigitalSg} alt='small2DigitalSg' />
                                        <div className="img-container-Digital">
                                            <div className="hoverinit-Digital Inc_Div_our-faith-main-img-Digital">
                                                <div alt="main2DigitalSg" data-aos="fade-up-right" data-aos-duration="2000" data-aos-delay="10">
                                                    {pageDetail.sustainability_image && <img className='main2-Digital ' src={`${API_IMG_URL}pages/${pageDetail.sustainability_image}`} alt={`${pageDetail.sustainability_title}`} />}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 texting-2-Digital">
                                    <p data-aos="fade-left" className='prev-2-text-1-Digital'>{`${pageDetail.sustainability_title}`}</p>
                                    <p data-aos="fade-left" className='prev-2-text-2-Digital'>{`${pageDetail.sustainability_description}`}</p>
                                </div>
                            </div>
                        </div>
                    </>
                    : null
            }
        </div>
    )
}

export default DigitalSg
