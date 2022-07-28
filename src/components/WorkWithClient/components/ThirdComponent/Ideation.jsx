import React, { useEffect } from 'react'
import '../ThirdComponent/Ideation.css'
import aos from 'aos'
import smaller3Ideation from '../ThirdComponent/smallerrectIdeation.png'
import wall3Ideation from '../ThirdComponent/wallIdeation.png'
import back3Ideation from '../ThirdComponent/backIdeation.png'
import small3Ideation from '../ThirdComponent/smallrectIdeation.png'
import explorerectIdeation from '../ThirdComponent/arrowIdeation.png'
import explorearrowIdeation from '../ThirdComponent/arrow2Ideation.png'
import { API_IMG_URL } from '../../../../config';

const Ideation = (pageDetail) => {

    useEffect(() => {
        aos.init({ duration: 3000 });

    }, [])
    return (
        <div className='third-Ideation'>
            <div className="container contoiner-3-Ideation">
                <div className="row">
                    <div className="col-lg-6 d-flex third-image-Ideation justify-content-center flex-column  align-items-center">
                        <div data-aos="fade-right" data-aos-delay="500" className='images-prev-3-Ideation'>
                            <img alt='smaller3Ideation' className='smaller3-Ideation' src={smaller3Ideation} />
                            <img alt='small3Ideation' className='small3-Ideation' src={small3Ideation} />
                            <img alt='wall3Ideation' className='wall3-Ideation' src={wall3Ideation} />
                            <img alt='back3Ideation' className='back3-Ideation' src={back3Ideation} />
                            <div className="images-hover-4-Ideation">
                                <div className="bp_iwfc_img-Ideation">
                                    {pageDetail.fearless_image && <img className='main3-Ideation' src={`${API_IMG_URL}pages/${pageDetail.fearless_image}`} alt={`${pageDetail.fearless_title}`} />}
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-6 texting-third-Ideation">
                        <p data-aos="zoom-in" data-aos-delay="500" className='heading-text-1-main'>{`${pageDetail.fearless_title}`}</p>

                        <div data-aos="fade-up" data-aos-delay="500" className="textndicon-Ideation">
                            <div /* className="icon-Ideation" */>
                                {pageDetail.fearless_item_1_icon && <img src={`${API_IMG_URL}pages/${pageDetail.fearless_item_1_icon}`} alt={`${pageDetail.fearless_item_1_title}`} className='icon1-Ideation' />}
                            </div>
                            <div className="text-box-3-Ideation">
                                <p className='container-3_text-1_heading-Ideation'>{`${pageDetail.fearless_item_1_title}`}</p>
                                <p className='container-3_text-1-Ideation'>{`${pageDetail.fearless_item_1_description}`}</p>
                                <a className='exploreinit-Ideation' href={`${pageDetail.fearless_item_1_btn_link}`}>
                                    <div className="explore-4-Ideation">
                                        <div className="explore-link-Ideation">
                                            <img src={explorerectIdeation} alt='explorerectIdeation' className='explore-rect-Ideation' />
                                            <img src={explorearrowIdeation} alt='Explore' className='explore-arrow-Ideation' />
                                            <span className='explore-text-Ideation'>{`${pageDetail.fearless_item_1_btn_text}`}</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="1000" className="textndicon-Ideation">
                            <div /* className="icon-Ideation" */>
                                {pageDetail.fearless_item_2_icon && <img src={`${API_IMG_URL}pages/${pageDetail.fearless_item_2_icon}`} alt={`${pageDetail.fearless_item_2_title}`} className='icon1-Ideation' />}
                            </div>
                            <div className="text-box-3-Ideation">
                                <p className='container-3_text-2_heading-Ideation'>{`${pageDetail.fearless_item_2_title}`}</p>
                                <p className='container-3_text-2-Ideation'>{`${pageDetail.fearless_item_2_description}`}</p>
                                <a className='exploreinit-Ideation' href={`${pageDetail.fearless_item_2_btn_link}`}>
                                    <div className="explore-4-Ideation">
                                        <div className="explore-link-Ideation">
                                            <img src={explorerectIdeation} alt='explorerectIdeation' className='explore-rect-Ideation' />
                                            <img src={explorearrowIdeation} alt='explorearrowIdeation' className='explore-arrow-Ideation' />
                                            <span className='explore-text-Ideation'>{`${pageDetail.fearless_item_2_btn_text}`}</span>
                                        </div>
                                    </div>
                                </a>
                            </div>

                        </div>
                        <div data-aos="fade-up" data-aos-delay="1500" className="textndicon-Ideation">
                            <div>
                                {pageDetail.fearless_item_3_icon && <img src={`${API_IMG_URL}pages/${pageDetail.fearless_item_3_icon}`} alt={`${pageDetail.fearless_item_3_title}`} className='icon1-Ideation' />}
                            </div>
                            <div className="text-box-3-Ideation">
                                <p className='container-3_text-3_heading-Ideation'>{`${pageDetail.fearless_item_3_title}`}</p>
                                <p className='container-3_text-3-Ideation'>{`${pageDetail.fearless_item_3_description}`}</p>
                                <a className='exploreinit-Ideation' href={`${pageDetail.fearless_item_3_btn_link}`}>
                                    <div className="explore-4-Ideation">
                                        <div className="explore-link-Ideation">
                                            <img src={explorerectIdeation} alt='explorerectIdeation' className='explore-rect-Ideation' />
                                            <img src={explorearrowIdeation} alt='explorearrowIdeation' className='explore-arrow-Ideation' />
                                            <span className='explore-text-Ideation'>{`${pageDetail.fearless_item_3_btn_text}`}</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ideation
