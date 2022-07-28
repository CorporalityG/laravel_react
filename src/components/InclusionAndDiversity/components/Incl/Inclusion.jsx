import React, { useEffect } from 'react'
import aos from "aos"
import '../Incl/Inclusion.css'
import Back from '../Incl/backINinclusion.png'
import wall from '../Incl/wall.png'
import smallrect from '../Incl/smallrect.png'
import rect from '../Incl/rect.png'
import smallerrect from '../Incl/smallerrect.png'
import yellowbackground from './yellowbackground.png'
import { API_IMG_URL } from '../../../../config';

const Inclusion = (pageDetail) => {

    useEffect(() => {
        aos.init();
    }, [])

    return (
        <div className="Inclusion">
            <div className="navbar-Id"></div>
            <div className="container container-1-Id">
                <div className="yellowbackground_Inclusion">
                    <img src={yellowbackground} alt='yellowbackground' />
                </div>
                <div className="row first-image-Id">
                    <div className="col-lg-6">
                        <div data-aos="fade-right" data-aos-easing="ease" data-aos-duration="2500" className="text-box-1-Id">
                            <p className='container-1_text-Id'>{`${pageDetail.banner_title}`}</p>
                            <h1 className='container-2_text-Id'>{`${pageDetail.banner_subtitle}`} </h1>
                            <p className='container-3_text-Id'>{`${pageDetail.banner_description}`}</p>
                            <div className="small-rect-prev-1-Id"><img src={smallerrect} alt='smallerrect' className='smaller-rect-prev-1' /></div>
                        </div>
                    </div>
                    <div className="col-lg-6  d-flex justify-content-center text-center flex-column ">
                        <div data-aos="fade-left" data-aos-easing="ease" data-aos-duration="2500" className="image-first-Id">
                            <img alt='rect' className='rect-Id' src={rect} />
                            <img alt='wall' className='wall-Id' src={wall} />
                            <img alt='smallrect' className='smallrect-Id' src={smallrect} />
                            <img alt='Back' className='backimg-Id' src={Back} />
                            <div className="banner_right_inner-Id" >
                                {pageDetail.banner_image && <img className='main-prev1-Id' src={`${API_IMG_URL}pages/${pageDetail.banner_image}`} alt={`${pageDetail.banner_title}`} />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inclusion
