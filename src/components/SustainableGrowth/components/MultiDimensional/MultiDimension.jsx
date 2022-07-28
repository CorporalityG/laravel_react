import React, { useEffect } from "react";
import '../MultiDimensional/MultiDimension.css'
import aos from 'aos'
import smaller3MultiDimensional from '../MultiDimensional/smallerrectMultiDimensional.png'
import small3MultiDimensional from '../MultiDimensional/smallrectMultiDimensional.png'
import wall3MultiDimensional from '../MultiDimensional/wallMultiDimensional.png'
import back3MultiDimensional from '../MultiDimensional/BackMultiDimensional.png'
import main3MultiDimensional from '../MultiDimensional/MainMultiDimensional.png'
import favicon0MultiDimensional from '../MultiDimensional/favicon-0MultiDimensional.png'
import favicon1MultiDimensional from '../MultiDimensional/favicon-1MultiDimensional.png'
import favicon2MultiDimensional from '../MultiDimensional/favicon-3MultiDimensional.png'
import favicon3MultiDimensional from '../MultiDimensional/favicon-4MultiDimensional.png'
import explorerectMultiDimensional from '../MultiDimensional/arrowMultiDimensional.png'
import explorearrowMultiDimensional from '../MultiDimensional/arrow2MultiDimensional.png'
import { API_IMG_URL } from '../../../../config';

const MultiDimensional = (pageDetail) => {
    useEffect(() => {
        aos.init({ duration: 3000, disable: "mobile" });

    }, [])
    return (
        <div className='third-Multi'>
            {
                pageDetail ?
                    <div className="container contoiner-3-Multi">
                        <div className="row">
                            <div className="col-lg-6 d-flex third-image-Multi justify-content-center flex-column  align-items-center">
                                <div data-aos="fade-right" className='images-prev-3-Multi'>
                                    <img alt='smaller3MultiDimensional' className='smaller3-Multi' src={smaller3MultiDimensional} />
                                    <img alt='small3MultiDimensional' className='small3-Multi' src={small3MultiDimensional} />
                                    <img alt='small3MultiDimensional' className='wall3-Multi' src={wall3MultiDimensional} />
                                    <img alt='back3MultiDimensional' className='back3-Multi' src={back3MultiDimensional} />
                                    <div className="images-hover-4-Multi">
                                        <div className="bp_iwfc_img-Multi">
                                            {pageDetail.approach_image && <img className='main3-Multi' src={`${API_IMG_URL}pages/${pageDetail.approach_image}`} alt="main3MultiDimensional" />}
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-6 texting-third-Multi">

                                <div data-aos="fade-up" data-aos-delay="500" className="textndicon-Multi">
                                    <div /* className="icon-Multi" */>
                                        {pageDetail.approach_item_1_icon && <img className='icon1-Multi' src={`${API_IMG_URL}pages/${pageDetail.approach_item_1_icon}`} alt={`${pageDetail.approach_item_1_title}`} />}
                                    </div>
                                    <div className="text-box-3-Multi">
                                        <p className='container-3_text-1_heading-Multi'>{`${pageDetail.approach_item_1_title}`}</p>
                                        <p className='container-3_text-1-Multi'>{`${pageDetail.approach_item_1_description}`}  </p>
                                        <a className='exploreinit-Multi' href={`/${pageDetail.approach_item_1_btn_link}`}>
                                            <div className="explore-4-Multi">
                                                <div className="explore-link-Multi">
                                                    <img src={explorerectMultiDimensional} alt='explorerectMultiDimensional' className='explore-rect-Multi' />
                                                    <img src={explorearrowMultiDimensional} alt='explorearrowMultiDimensional' className='explore-arrow-Multi' />
                                                    <span className='explore-text-Multi'>{`${pageDetail.approach_item_1_btn_text}`}</span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div data-aos="fade-up" data-aos-delay="1000" className="textndicon-Multi">
                                    <div /* className="icon-Multi" */>
                                        {pageDetail.approach_item_2_icon && <img className='icon1-Multi' src={`${API_IMG_URL}pages/${pageDetail.approach_item_2_icon}`} alt={`${pageDetail.approach_item_2_title}`} />}
                                    </div>
                                    <div className="text-box-3-Multi">
                                        <p className='container-3_text-2_heading-Multi'>{`${pageDetail.approach_item_2_title}`}</p>
                                        <p className='container-3_text-2-Multi'>{`${pageDetail.approach_item_2_description}`}</p>
                                        <a className='exploreinit-Multi' href={`/${pageDetail.approach_item_2_btn_link}`}>
                                            <div className="explore-4-Multi">
                                                <div className="explore-link-Multi">
                                                    <img src={explorerectMultiDimensional} alt='explorerectMultiDimensional' className='explore-rect-Multi' />
                                                    <img src={explorearrowMultiDimensional} alt='explorearrowMultiDimensional' className='explore-arrow-Multi' />
                                                    <span className='explore-text-Multi'>{`${pageDetail.approach_item_2_btn_text}`}</span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>

                                </div>
                                <div data-aos="fade-up" data-aos-delay="1500" className="textndicon-Multi">
                                    <div /* className="icon-Multi" */>
                                        {pageDetail.approach_item_3_icon && <img className='icon1-Multi' src={`${API_IMG_URL}pages/${pageDetail.approach_item_3_icon}`} alt={`${pageDetail.approach_item_3_title}`} />}
                                    </div>
                                    <div className="text-box-3-Multi">
                                        <p className='container-3_text-3_heading-Multi'>{`${pageDetail.approach_item_3_title}`}</p>
                                        <p className='container-3_text-3-Multi'>{`${pageDetail.approach_item_3_description}`}</p>
                                        <a className='exploreinit-Multi' href={`/${pageDetail.approach_item_3_btn_link}`}>
                                            <div className="explore-4-Multi">
                                                <div className="explore-link-Multi">
                                                    <img src={explorerectMultiDimensional} alt='explorerectMultiDimensional' className='explore-rect-Multi' />
                                                    <img src={explorearrowMultiDimensional} alt='explorearrowMultiDimensional' className='explore-arrow-Multi' />
                                                    <span className='explore-text-Multi'>{`${pageDetail.approach_item_3_btn_text}`}</span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div data-aos="fade-up" data-aos-delay="2000" className="textndicon-Multi">
                                    <div /* className="icon-Multi" */>
                                        {pageDetail.approach_item_4_icon && <img className='icon1-Multi' src={`${API_IMG_URL}pages/${pageDetail.approach_item_4_icon}`} alt={`${pageDetail.approach_item_4_title}`} />}
                                    </div>
                                    <div className="text-box-3-Multi">
                                        <p className='container-3_text-3_heading-Multi'>{`${pageDetail.approach_item_4_title}`}</p>
                                        <p className='container-3_text-3-Multi'>{`${pageDetail.approach_item_4_description}`}</p>
                                        <a className='exploreinit-Multi' href={`/${pageDetail.approach_item_4_btn_link}`}>
                                            <div className="explore-4-Multi">
                                                <div className="explore-link-Multi">
                                                    <img src={explorerectMultiDimensional} alt='explorerectMultiDimensional' className='explore-rect-Multi' />
                                                    <img src={explorearrowMultiDimensional} alt='explorearrowMultiDimensional' className='explore-arrow-Multi' />
                                                    <span className='explore-text-Multi'>{`${pageDetail.approach_item_4_btn_text}`}</span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                {/*        <div data-aos-delay="2500" data-aos="fade-right" className="button-4-Multi">
                            <a className='button-link-Multi' href="#">Learn More</a>
                        </div> */}
                            </div>
                        </div>
                    </div>
                    : null
            }
        </div>
    )
}

export default MultiDimensional