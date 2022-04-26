import React, { useEffect, useState } from 'react';
import { API_BASE_URL, BASE_URL } from '../../../config';
import "./NewBanner.css"
import Modal from 'react-bootstrap/Modal'

const NewBanner = () => {
    const [indicatorId, setIndicatorId] = useState(1);
    /* const [showYoutube, setShowYoutube] = useState(false);
    const youtubeVid = useRef();

    const [showYoutube2, setShowYoutube2] = useState(false);
    const youtubeVid2 = useRef();

    const [showYoutube3, setShowYoutube3] = useState(false);
    const youtubeVid3 = useRef(); */

    const [bannerCount, setBannerCount] = useState(1);

    /* const rightBannerClickHandler = () => {
        setShowYoutube(true)
        setShowYoutube2(false)
        setShowYoutube3(false)
        youtubeVid.current.src += "?autoplay=1"
    }

    const rightBannerClickHandler2 = () => {
        setShowYoutube(false)
        setShowYoutube2(true)
        setShowYoutube3(false)
        youtubeVid2.current.src += "?autoplay=1"
    }

    const rightBannerClickHandler3 = () => {
        setShowYoutube(false)
        setShowYoutube2(false)
        setShowYoutube3(true)
        youtubeVid3.current.src += "?autoplay=1"
    } */

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
                if(i < 3)
                {
                    return i + 1;
                }
                else
                {
                    return 1;
                }
            });
          }, 8000);

        setInterval(() => {
            setBannerCount(c => {
                // console.log(c);
                if(c < 3)
                {
                    return c + 1;
                }
                else
                {
                    return 1;
                }
            });
          }, 8000);
    }, [])

    return (
        <div className="bannerContainer">
            <div className='bannerContainerWrapper'>

                <div className="mainBanner">

                    <div className={`mainPartBanner ${indicatorId===1? "" : "bannerTextHide"}`}>
                        <img src={BASE_URL + '/img/HomePage/media/banner-bg-image.png'} alt="banner-bg-image" className="banner-bg-image" />

                        <div className="leftPartBanner" data-aos="fade-left" data-aos-duration="2500">
                            <div data-aos="fade-right" className="bannerText">
                                <h1 className="bannerHead" data-aos="fade-left" data-aos-duration="2700">Global Management Consulting Company</h1>
                                <p className="bannerSubtitle" data-aos="fade-left" data-aos-duration="3000">We are a strategic management consulting firm specialized in Marketing and Sales</p>
                                <div className="bannerBtn">
                                    <a href="https://zohoadmin-corporality.zohobookings.com.au/#/customer/discoverycall" target="_blank">Book a Discovery Call</a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bgPartBanner">
                            <div className="mainBannerImg">
                                <img src={BASE_URL + '/img/HomePage/media/banner-image-main.png'} alt="" className="banner-image" data-aos="fade-down" data-aos-duration="2500" />
                                <img src={BASE_URL + '/img/HomePage/media/video-icon.png'} alt="" className="video-icon" data-aos="fade-up" data-aos-duration="2700" />
                            </div>

                            <div className="bannerImgs">
                                <img src={BASE_URL + '/img/HomePage/media/rectangle-1.png'} alt="" className="rectangle-1" data-aos="fade-right" data-aos-duration="3000" />
                                <img src={BASE_URL + '/img/HomePage/media/rectangle-2.png'} alt="" className="rectangle-2" data-aos="fade-down" data-aos-duration="3000" />
                                <img src={BASE_URL + '/img/HomePage/media/rectangle-3.png'} alt="" className="rectangle-3" data-aos="fade-left" data-aos-duration="3000" />
                                <img src={BASE_URL + '/img/HomePage/media/rectangle-4.png'} alt="" className="rectangle-4" data-aos="fade-up" data-aos-duration="3000" />
                            </div>
                        </div>

                        <div className="rightPartBanner" onClick={() => { handleShow(1); }} data-aos="fade-up" data-aos-duration="2500">
                            <img src={BASE_URL + '/img/HomePage/media/video-thumbnail.png'} alt="Video Thumbnail" />
                            {/* {!showYoutube && <img src={BASE_URL + '/img/HomePage/media/video-thumbnail.png'} alt="" />} */}
                        </div>
                        
                        <Modal show={show==1 ? show : ''} onHide={handleClose} size="lg" centered>
                            <Modal.Header closeButton>Global Management Consulting and Marketing Company</Modal.Header>
                            <Modal.Body closeButton>
                                <div className="home_banner_modal">
                                    <video src={BASE_URL + '/img/home-page-banner.mp4'} controls={true} autoPlay={true} />
                                    {/* <iframe src="https://www.youtube.com/embed/YpymypBc9Hc?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
                                </div>   
                            </Modal.Body>
                        </Modal>
                        
                    </div>

                    <div className={`mainPartBanner ${indicatorId===2? "" : "bannerTextHide"}`}>
                        <img src={BASE_URL + '/img/HomePage/media/banner-bg-image.png'} alt="" className="banner-bg-image" />

                        <div className="leftPartBanner">
                            <div className="bannerText">
                                <h1 className="bannerHead">Delivering Results You Can Visualize</h1>
                                <p className="bannerSubtitle">Corporality is a strategic consulting firm that provides over 8 years of market intelligence backed by data-driven strategies to deliver measurable results.</p>
                                <div className="bannerBtn">
                                    <a href="javascript:;">Request call back</a>
                                </div>
                            </div>
                        </div>

                        <div className="bgPartBanner">
                            <div className="mainBannerImg">
                                <img src={BASE_URL + '/img/HomePage/media/banner-image-main.png'} alt="" className="banner-image" />
                                <img src={BASE_URL + '/img/HomePage/media/video-icon.png'} alt="" className="video-icon" />
                            </div>

                            <div className="bannerImgs">
                                <img src={BASE_URL + '/img/HomePage/media/rectangle-1.png'} alt="" className="rectangle-1" />
                                <img src={BASE_URL + '/img/HomePage/media/rectangle-2.png'} alt="" className="rectangle-2" />
                                <img src={BASE_URL + '/img/HomePage/media/rectangle-3.png'} alt="" className="rectangle-3" />
                                <img src={BASE_URL + 'img/HomePage/media/rectangle-4.png'} alt="" className="rectangle-4" />
                            </div>
                        </div>

                        <div className="rightPartBanner" onClick={() => { handleShow(2); }}>
                            <img src={BASE_URL + '/img/HomePage/media/video-thumbnail.png'} alt="Video Thumbnail" />
                        </div>

                        <Modal show={show==2 ? show : ''} onHide={handleClose} size="lg" centered>
                            <Modal.Header closeButton>Delivering Results You Can Visualize</Modal.Header>
                            <Modal.Body closeButton>
                                <div className="home_banner_modal">
                                    <video src={BASE_URL + '/img/home-page-banner.mp4'} controls={true} autoPlay={true} />
                                </div>   
                            </Modal.Body>
                        </Modal>
                    </div>

                    <div className={`mainPartBanner ${indicatorId===3? "" : "bannerTextHide"}`}>
                        <img src={BASE_URL + '/img/HomePage/media/banner-bg-image.png'} alt="" className="banner-bg-image" />

                        <div className="leftPartBanner">
                            <div className="bannerText">
                                <h1 className="bannerHead">Our focus is on creating an impact that multiplies your business</h1>
                                <p className="bannerSubtitle">We believe in communicating through omni effect, actionable insights, and implementing solutions with guaranteed results.</p>
                                <div className="bannerBtn">
                                    <a href="javascript:;">Ask us</a>
                                </div>
                            </div>
                        </div>

                        <div className="bgPartBanner">
                            <div className="mainBannerImg">
                                <img src={BASE_URL + '/img/HomePage/media/banner-image-main.png'} alt="" className="banner-image" />
                                <img src={BASE_URL + '/img/HomePage/media/video-icon.png'} alt="" className="video-icon" />
                            </div>

                            <div className="bannerImgs">
                                <img src={BASE_URL + '/img/HomePage/media/rectangle-1.png'} alt="" className="rectangle-1" />
                                <img src={BASE_URL + '/img/HomePage/media/rectangle-2.png'} alt="" className="rectangle-2" />
                                <img src={BASE_URL + '/img/HomePage/media/rectangle-3.png'} alt="" className="rectangle-3" />
                                <img src={BASE_URL + '/img/HomePage/media/rectangle-4.png'} alt="" className="rectangle-4" />
                            </div>
                        </div>

                        <div className="rightPartBanner" onClick={() => { handleShow(3); }}>
                            <img src={BASE_URL + '/img/HomePage/media/video-thumbnail.png'} alt="Video Thumbnail" />
                        </div>

                        <Modal show={show==3 ? show : ''} onHide={handleClose} size="lg" centered>
                            <Modal.Header closeButton>Our focus is on creating an Impact that multiplies your business</Modal.Header>
                            <Modal.Body closeButton>
                                <div className="home_banner_modal">
                                    <video src={BASE_URL + '/img/home-page-banner.mp4'} controls={true} autoPlay={true} />
                                </div>   
                            </Modal.Body>
                        </Modal>
                    </div>

                    <div className="leftIndicators">
                        <div className={`indicatorCircle ${indicatorId === 1? "activeIndicatorCircle" : ""}`} onClick={() => { bannerCountFunc(1); setIndicatorId(1); }} ></div>
                        <div className={`indicatorCircle ${indicatorId === 2? "activeIndicatorCircle" : ""}`} onClick={() =>{ bannerCountFunc(2); setIndicatorId(2); }}></div>
                        <div className={`indicatorCircle ${indicatorId === 3? "activeIndicatorCircle" : ""}`} onClick={() =>{ bannerCountFunc(3); setIndicatorId(3); }}></div>
                    </div>
                </div>
            </div>

            <div className="bannerSocialLinksContainer" data-aos="fade-right" data-aos-duration="2500">
                <div className="bannerSocialImg"><img src={BASE_URL + '/img/HomePage/media/social.png'} alt="" /></div>
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
                    <img src={BASE_URL + '/img/HomePage/media/phone-icon.png'} alt="" onClick={() => window.open("tel:61283794089","_self")} />
                </div>
                <div data-aos="fade-left" className="banner-count" data-aos-duration="2800">
                    <span className="bigBannerCount">0{bannerCount}</span>/<span className="smallBannerCount">03</span>
                </div>
                {/*<div data-aos="fade-right" className="bigDiamond">
                    <img src={BASE_URL + '/img/HomePage/media/bigRectangle.png'} alt="" />
                    <div className="callButton" onClick={() => window.open("tel: +61 2 83794089","_self")}>
                        <img src={BASE_URL + '/img/HomePage/media/callButton.png'} alt="" />
                    </div>
                    <h3 className="mobileNumber">+61 2 83794089</h3>
                </div>
                <div data-aos="fade-right" className="smallDiamond">
                    <img src={BASE_URL + '/img/HomePage/media/smallRectangle.png'} alt="" />
                </div>*/}
            </div>
            
        </div>
    )
}

export default NewBanner
