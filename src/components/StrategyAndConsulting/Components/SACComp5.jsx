import React, { useEffect } from 'react'
import aos from 'aos'
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import back3Internal from './images/InternalBack.png'
import small3Internal from './images/internalRect.png'
import smaller3Internal from './images/internalSmallRect.png'
import wall3Internal from './images/internalWall.png'
import readmorearrow from './images/readmorearrowInternal.png'
import readmoreInternal from './images/readmoreInternal.png'
import "../Components/SACComp5.css"
import { API_IMG_URL } from '../../../config';

const SACComp5 = (pageDetail) => {
    useEffect(() => {
        aos.init({ duration: 3000, disable: "mobile" });

    }, [])
    return (
        <div className='SACComp5_third-Ideation'>
            {
                pageDetail ?
                    <div className="container SACComp5_contoiner-3-Ideation">
                        <div className="row">
                            <div className="col-lg-6 d-flex SACComp5_third-image-Ideation justify-content-center flex-column  align-items-center">
                                <div data-aos="fade-right" className='SACComp5_images-prev-3-Ideation'>
                                    <img alt='smaller3Internal' className='SACComp5_smaller3-Ideation' src={smaller3Internal} />
                                    <img alt='small3Internal' className='SACComp5_small3-Ideation' src={small3Internal} />
                                    <img alt='wall3Internal' className='SACComp5_wall3-Ideation' src={wall3Internal} />
                                    <div className="">
                                        <img alt='back3Internal' className='SACComp5_back3-Ideation' src={back3Internal} />
                                        <div className="SACComp5_images-hover-4-Ideation">
                                            <div className="SACComp5_bp_iwfc_img-Ideation">
                                                <img className='SACComp5_main3-Ideation' src={`${API_IMG_URL}pages/${pageDetail.implementation_image}`} alt={`${pageDetail.implementation_title}`} />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-6 SACComp5_texting-third-Ideation">
                                <p data-aos="fade-up" data-aos-delay="500" className='SACComp5_heading-text-1-main'>{`${pageDetail.implementation_title}`}</p>

                                <div data-aos="fade-up" data-aos-delay="500" className="SACComp5_textndicon-Ideation">
                                    <div /* className="icon-Ideation" */>
                                        <img className='SACComp5_icon1-Ideation' src={`${API_IMG_URL}pages/${pageDetail.implementation_item_1_icon}`} alt={`${pageDetail.implementation_item_1_title}`} />
                                    </div>
                                    <div className="SACComp5_text-box-3-Ideation">
                                        <p className='SACComp5_container-3_text-1_heading-Ideation'>{`${pageDetail.implementation_item_1_title}`}</p>
                                        <p className='SACComp5_container-3_text-1-Ideation'>{`${pageDetail.implementation_item_1_description}`}</p>
                                        <a className='SACComp5_exploreinit-Ideation' href={`/${pageDetail.implementation_item_1_btn_link}`}>
                                            <div className="SACComp5_explore-4-Ideation">
                                                <div className="SACComp5_explore-link-Ideation">
                                                    <img src={readmoreInternal} alt='readmoreInternal' className='SACComp5_explore-rect-Ideation' />
                                                    <img src={readmorearrow} alt='readmorearrow' className='SACComp5_explore-arrow-Ideation' />
                                                    <span className='SACComp5_explore-text-Ideation'>{`${pageDetail.implementation_item_1_btn_text}`}</span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div data-aos="fade-up" data-aos-delay="1000" className="SACComp5_textndicon-Ideation">
                                    <div /* className="icon-Ideation" */>
                                        <img className='SACComp5_icon1-Ideation' src={`${API_IMG_URL}pages/${pageDetail.implementation_item_2_icon}`} alt={`${pageDetail.implementation_item_2_title}`} />
                                    </div>
                                    <div className="SACComp5_text-box-3-Ideation">
                                        <p className='SACComp5_container-3_text-2_heading-Ideation'>{`${pageDetail.implementation_item_2_title}`}</p>
                                        <p className='SACComp5_container-3_text-2-Ideation'>{`${pageDetail.implementation_item_2_description}`}</p>
                                        <a className='SACComp5_exploreinit-Ideation' href={`/${pageDetail.implementation_item_1_btn_link}`}>
                                            <div className="SACComp5_explore-4-Ideation">
                                                <div className="SACComp5_explore-link-Ideation">
                                                    <img src={readmoreInternal} alt='readmoreInternal' className='SACComp5_explore-rect-Ideation' />
                                                    <img src={readmorearrow} alt='readmorearrow' className='SACComp5_explore-arrow-Ideation' />
                                                    <span className='SACComp5_explore-text-Ideation'>{`${pageDetail.implementation_item_1_btn_text}`}</span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                    : null
            }
        </div>
    )
}

export default SACComp5