import React, { useEffect } from 'react'
import '../Organising/Organisingprinciple.css'
import BackOrganising from '../Organising/BackOrganising.png'
import smallrectOrganising from '../Organising/SmallrectOrganising.png'
import wallOrganising from '../Organising/WallOrganising.png'
import rectOrganising from '../Organising/rectOrganising.png'
import smallerrectOrganising from '../Organising/text-rectOrganising.png'
import aos from 'aos'
import yellowbackground from './yellowbackground.png'
import { API_IMG_URL } from '../../../../config';

const OrganisingPrinciple = (pageDetail) => {

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
                            <div className="row first-image-Op">
                                <div className="col-lg-6">
                                    <div data-aos="fade-right" className="text-box-1-Op">
                                        <h1 className='container-1_text-Op'>{`${pageDetail.banner_title}`}</h1>
                                        <p className='container-2_text-Op'>{`${pageDetail.banner_description}`}</p>
                                        <div className="small-rect-prev-1-Op"><img src={smallerrectOrganising} alt='smallerrectOrganising' className='smaller-rect-prev-1' /></div>
                                    </div>
                                </div>
                                <div className="col-lg-6  d-flex justify-content-center text-center flex-column ">
                                    <div data-aos="fade-left" className="image-first-Op">
                                        <img alt='rectOrganising' className='rect-Op' src={rectOrganising} />
                                        <img alt='wallOrganising' className='wall-Op' src={wallOrganising} />
                                        <img alt='smallrectOrganising' className='smallrect-Op' src={smallrectOrganising} />
                                        <img alt='BackOrganising' className='backimg-Op' src={BackOrganising} />
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
    )
}

export default OrganisingPrinciple


