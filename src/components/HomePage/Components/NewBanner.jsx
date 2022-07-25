import React, { useEffect, useState } from 'react';
import { BASE_URL, API_IMG_URL } from '../../../config';
import "./NewBanner.css"
import Modal from 'react-bootstrap/Modal'
import { Link } from "react-router-dom";

const NewBanner = (pageDetail) => {

    const [indicatorId, setIndicatorId] = useState(1);
    const [bannerCount, setBannerCount] = useState(1);

    const [show, setShow] = useState(0);

    const handleClose = () => setShow(false);
    const handleShow = (slideId) => {
        setShow(slideId);
    }

    const bannerCountFunc = (value) => {
        setBannerCount(value);
    }

    useEffect(() => {
        setInterval(() => {
            setIndicatorId(i => {
                //console.log(i);
                if (i < 3) {
                    return i + 1;
                }
                else {
                    return 1;
                }
            });
        }, 8000);

        setInterval(() => {
            setBannerCount(c => {
                // console.log(c);
                if (c < 3) {
                    return c + 1;
                }
                else {
                    return 1;
                }
            });
        }, 8000);
    }, [])

    return (
        <>
            {
                pageDetail ?
                    <div className="bannerContainer">
                        <div className='bannerContainerWrapper'>

                            <div className="mainBanner">

                                <div className={`mainPartBanner ${indicatorId === 1 ? "" : "bannerTextHide"}`}>
                                    <img src={`${API_IMG_URL}pages/${pageDetail.banner_1_bg_image}`} alt={`${pageDetail.banner_1_title}`} className="banner-bg-image" />

                                    <div className="leftPartBanner" data-aos="fade-left" data-aos-duration="2500">
                                        <div data-aos="fade-right" className="bannerText">
                                            <h1 className="bannerHead" data-aos="fade-left" data-aos-duration="2700">{`${pageDetail.banner_1_title}`}</h1>
                                            {
                                                pageDetail.banner_1_subtitle ?
                                                    <div className="banner_subtitle" data-aos="fade-left" data-aos-duration="2850">{`${pageDetail.banner_1_subtitle}`}</div>
                                                    : null
                                            }
                                            <p className="bannerSubtitle" data-aos="fade-left" data-aos-duration="3000">{`${pageDetail.banner_1_description}`}</p>
                                            <div className="bannerBtn">
                                                <a href={`${pageDetail.banner_1_btn_link}`} target="_blank">{`${pageDetail.banner_1_btn_text}`}</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bgPartBanner">
                                        <div className="mainBannerImg">
                                            <img src={`${API_IMG_URL}pages/${pageDetail.banner_1_image}`} alt={`${pageDetail.banner_1_title}`} className="banner-image" data-aos="fade-down" data-aos-duration="2500" />
                                            <div onClick={() => { handleShow(11); }}>
                                                <img src={BASE_URL + '/img/HomePage/media/video-icon.png'} alt="video-icon" className="video-icon" data-aos="fade-up" data-aos-duration="2700" />
                                            </div>

                                            <Modal show={show == 11 ? show : ''} onHide={handleClose} size="lg" centered>
                                                <Modal.Header closeButton></Modal.Header>
                                                <Modal.Body closeButton>
                                                    <div className="home_banner_modal" dangerouslySetInnerHTML={{ __html: pageDetail.banner_1_youtube_iframe_1 }}></div>
                                                </Modal.Body>
                                            </Modal>
                                        </div>

                                        <div className="bannerImgs">
                                            <img src={BASE_URL + '/img/HomePage/media/rectangle-1.png'} alt="rectangle" className="rectangle-1" data-aos="fade-right" data-aos-duration="3000" />
                                            <img src={BASE_URL + '/img/HomePage/media/rectangle-2.png'} alt="rectangle" className="rectangle-2" data-aos="fade-down" data-aos-duration="3000" />
                                            <img src={BASE_URL + '/img/HomePage/media/rectangle-3.png'} alt="rectangle" className="rectangle-3" data-aos="fade-left" data-aos-duration="3000" />
                                            <img src={BASE_URL + '/img/HomePage/media/rectangle-4.png'} alt="rectangle" className="rectangle-4" data-aos="fade-up" data-aos-duration="3000" />
                                        </div>
                                    </div>

                                    <div className="rightPartBanner" onClick={() => { handleShow(1); }} data-aos="fade-up" data-aos-duration="2500">
                                        <img src={`${API_IMG_URL}pages/${pageDetail.banner_1_video_thumbnail}`} alt="Video Thumbnail" />
                                    </div>

                                    <Modal show={show == 1 ? show : ''} onHide={handleClose} size="lg" centered>
                                        <Modal.Header closeButton></Modal.Header>
                                        <Modal.Body closeButton>
                                            <div className="home_banner_modal" dangerouslySetInnerHTML={{ __html: pageDetail.banner_1_youtube_iframe_2 }}></div>
                                        </Modal.Body>
                                    </Modal>

                                </div>

                                <div className={`mainPartBanner ${indicatorId === 2 ? "" : "bannerTextHide"}`}>
                                    <img src={`${API_IMG_URL}pages/${pageDetail.banner_2_bg_image}`} alt={`${pageDetail.banner_2_title}`} className="banner-bg-image" />

                                    <div className="leftPartBanner">
                                        <div className="bannerText">
                                            <h1 className="bannerHead">{`${pageDetail.banner_2_title}`}</h1>
                                            {
                                                pageDetail.banner_2_subtitle ?
                                                    <div className="banner_subtitle">{`${pageDetail.banner_2_subtitle}`}</div>
                                                    : null
                                            }
                                            <p className="bannerSubtitle">{`${pageDetail.banner_2_description}`}</p>
                                            <div className="bannerBtn">
                                                <a href={`${pageDetail.banner_2_btn_link}`} target="_blank" className="learn-more">{`${pageDetail.banner_2_btn_text}`}</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bgPartBanner">
                                        <div className="mainBannerImg">
                                            <img src={`${API_IMG_URL}pages/${pageDetail.banner_2_image}`} alt={`${pageDetail.banner_2_title}`} className="banner-image" />
                                            <div onClick={() => { handleShow(21); }}>
                                                <img src={BASE_URL + '/img/HomePage/media/video-icon.png'} alt="video-icon" className="video-icon" />
                                            </div>

                                            <Modal show={show == 21 ? show : ''} onHide={handleClose} size="lg" centered>
                                                <Modal.Header closeButton></Modal.Header>
                                                <Modal.Body closeButton>
                                                    <div className="home_banner_modal" dangerouslySetInnerHTML={{ __html: pageDetail.banner_2_youtube_iframe_1 }}></div>
                                                </Modal.Body>
                                            </Modal>
                                        </div>

                                        <div className="bannerImgs">
                                            <img src={BASE_URL + '/img/HomePage/media/rectangle-1.png'} alt="rectangle" className="rectangle-1" />
                                            <img src={BASE_URL + '/img/HomePage/media/rectangle-2.png'} alt="rectangle" className="rectangle-2" />
                                            <img src={BASE_URL + '/img/HomePage/media/rectangle-3.png'} alt="rectangle" className="rectangle-3" />
                                            <img src={BASE_URL + '/img/HomePage/media/rectangle-4.png'} alt="rectangle" className="rectangle-4" />
                                        </div>
                                    </div>

                                    <div className="rightPartBanner" onClick={() => { handleShow(2); }}>
                                        <img src={`${API_IMG_URL}pages/${pageDetail.banner_2_video_thumbnail}`} alt="Video Thumbnail" />
                                    </div>

                                    <Modal show={show == 2 ? show : ''} onHide={handleClose} size="lg" centered>
                                        <Modal.Header closeButton></Modal.Header>
                                        <Modal.Body closeButton>
                                            <div className="home_banner_modal" dangerouslySetInnerHTML={{ __html: pageDetail.banner_2_youtube_iframe_2 }}></div>
                                        </Modal.Body>
                                    </Modal>
                                </div>

                                <div className={`mainPartBanner ${indicatorId === 3 ? "" : "bannerTextHide"}`}>
                                    <img src={`${API_IMG_URL}pages/${pageDetail.banner_3_bg_image}`} alt={`${pageDetail.banner_3_title}`} className="banner-bg-image" />

                                    <div className="leftPartBanner">
                                        <div className="bannerText">
                                            <h1 className="bannerHead">{`${pageDetail.banner_3_title}`}</h1>
                                            {
                                                pageDetail.banner_3_subtitle ?
                                                    <div className="banner_subtitle">{`${pageDetail.banner_3_subtitle}`}</div>
                                                    : null
                                            }
                                            <p className="bannerSubtitle">{`${pageDetail.banner_3_description}`}</p>
                                            <div className="bannerBtn">
                                                <a href={`${pageDetail.banner_3_btn_link}`} target="_blank" className="learn-more">{`${pageDetail.banner_3_btn_text}`}</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bgPartBanner">
                                        <div className="mainBannerImg">
                                            <img src={`${API_IMG_URL}pages/${pageDetail.banner_3_image}`} alt={`${pageDetail.banner_3_title}`} className="banner-image" />
                                            <div onClick={() => { handleShow(31); }}>
                                                <img src={BASE_URL + '/img/HomePage/media/video-icon.png'} alt="video-icon" className="video-icon" />
                                            </div>

                                            <Modal show={show == 31 ? show : ''} onHide={handleClose} size="lg" centered>
                                                <Modal.Header closeButton></Modal.Header>
                                                <Modal.Body closeButton>
                                                    <div className="home_banner_modal" dangerouslySetInnerHTML={{ __html: pageDetail.banner_2_youtube_iframe_1 }}></div>
                                                </Modal.Body>
                                            </Modal>
                                        </div>

                                        <div className="bannerImgs">
                                            <img src={BASE_URL + '/img/HomePage/media/rectangle-1.png'} alt="rectangle" className="rectangle-1" />
                                            <img src={BASE_URL + '/img/HomePage/media/rectangle-2.png'} alt="rectangle" className="rectangle-2" />
                                            <img src={BASE_URL + '/img/HomePage/media/rectangle-3.png'} alt="rectangle" className="rectangle-3" />
                                            <img src={BASE_URL + '/img/HomePage/media/rectangle-4.png'} alt="rectangle" className="rectangle-4" />
                                        </div>
                                    </div>

                                    <div className="rightPartBanner" onClick={() => { handleShow(3); }}>
                                        <img src={`${API_IMG_URL}pages/${pageDetail.banner_3_video_thumbnail}`} alt="Video Thumbnail" />
                                    </div>

                                    <Modal show={show == 3 ? show : ''} onHide={handleClose} size="lg" centered>
                                        <Modal.Header closeButton></Modal.Header>
                                        <Modal.Body closeButton>
                                            <div className="home_banner_modal" dangerouslySetInnerHTML={{ __html: pageDetail.banner_3_youtube_iframe_2 }}></div>
                                        </Modal.Body>
                                    </Modal>
                                </div>

                                <div className="leftIndicators">
                                    <div className={`indicatorCircle ${indicatorId === 1 ? "activeIndicatorCircle" : ""}`} onClick={() => { bannerCountFunc(1); setIndicatorId(1); }} ></div>
                                    <div className={`indicatorCircle ${indicatorId === 2 ? "activeIndicatorCircle" : ""}`} onClick={() => { bannerCountFunc(2); setIndicatorId(2); }}></div>
                                    <div className={`indicatorCircle ${indicatorId === 3 ? "activeIndicatorCircle" : ""}`} onClick={() => { bannerCountFunc(3); setIndicatorId(3); }}></div>
                                </div>
                            </div>
                        </div>

                        <div className="bannerSocialLinksContainer" data-aos="fade-right" data-aos-duration="2500">
                            <div className="bannerSocialImg"><img src={BASE_URL + '/img/HomePage/media/social.png'} alt="social" /></div>
                            <div className="socialIconsContainer">
                                <div className="socialIcon" onClick={() => window.open("https://www.facebook.com/CorporalityG/")}>
                                    <i className="fa fa-facebook-f"></i>
                                </div>
                                <div className="socialIcon" onClick={() => window.open("https://twitter.com/corporalityg/")}>
                                    <i className="fa fa-twitter"></i>
                                </div>
                                <div className="socialIcon" onClick={() => window.open("https://www.instagram.com/corporalityg/")}>
                                    <i className="fa fa-instagram"></i>
                                </div>
                                <div className="socialIcon" onClick={() => window.open("https://www.linkedin.com/company/corporalityg/")}>
                                    <i className="fa fa-linkedin"></i>
                                </div>
                                <div className="socialIcon" onClick={() => window.open("https://in.pinterest.com/CorporalityG/_created/")}>
                                    <i className="fa fa-pinterest"></i>
                                </div>
                                <div className="socialIcon" onClick={() => window.open("https://www.youtube.com/channel/UC4EISt8kHI4zzpmbIBMIBbg")}>
                                    <i className="fa fa-youtube-play"></i>
                                </div>
                            </div>
                        </div>

                        <div className="twoDiamonds">
                            <div data-aos="fade-right" className="phone-icon" data-aos-duration="2800">
                                <img src={BASE_URL + '/img/HomePage/media/phone-icon.png'} alt="phone" onClick={() => window.open("tel:61283794089", "_self")} />
                            </div>
                            <div data-aos="fade-left" className="banner-count" data-aos-duration="2800">
                                <span className="bigBannerCount">0{bannerCount}</span>/<span className="smallBannerCount">03</span>
                            </div>
                        </div>

                    </div>
                    : null
            }
        </>
    )
}

export default NewBanner
