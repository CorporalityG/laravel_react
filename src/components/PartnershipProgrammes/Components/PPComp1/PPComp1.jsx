import "../PPComp1/PPComp1.css";
import React, { useEffect } from "react";
import Back from './Back.png'
import smallrect from './Smallrect.png'
import wall from './Wall.png'
import rect from './rect.png'
import smallerrect from './text-rect.png'
import aos from 'aos'
import yellowbackground from './yellowbackground.png'
import { API_IMG_URL } from '../../../../config';

export default function PPComp1(pageDetail) {

    useEffect(() => {
        aos.init({ duration: 3000 });
    }, [])

    return (
        <div className="OrganisingPrinciple">
            {
                pageDetail ?
                    <>
                        <div className="navbar-Op"></div>
                        <div className="container container-1-Op">
                            <div className="yellowbackground_Op">
                                <img src={yellowbackground} alt='' />
                            </div>
                            <div className="row first-image-Op mx-3">

                                <div className="col-lg-6">
                                    <div data-aos="fade-right" className="text-box-1-Op">

                                        <h1 className='container-1_text-Op'>{`${pageDetail.banner_title}`}</h1>
                                        <p className='container-2_text-Op'>{`${pageDetail.banner_description}`} </p>
                                        <div className="small-rect-prev-1-Op"><img src={smallerrect} alt='smallerrect' className='smaller-rect-prev-1' /></div>
                                        <a
                                            data-aos="fade-right"
                                            data-aos-delay="600"
                                            data-aos-duration="500"
                                            className="ppc1Button"
                                            href={`/${pageDetail.banner_btn_link}`}
                                        >
                                            {`${pageDetail.banner_btn_text}`}
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-6  d-flex justify-content-center text-center flex-column ">
                                    <div data-aos="fade-left" className="image-first-Op">
                                        <img alt='rect' className='rect-Op' src={rect} />
                                        <img alt='wall' className='wall-Op' src={wall} />
                                        <img alt='smallrect' className='smallrect-Op' src={smallrect} />
                                        <img alt='Back' className='backimg-Op' src={Back} />
                                        <div className="banner_right_inner-Op" >
                                            <img className='main-prev1-Op' src={`${API_IMG_URL}pages/${pageDetail.banner_image}`} alt={`${pageDetail.banner_title}`} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    : null
            }
        </div>
    );
}
