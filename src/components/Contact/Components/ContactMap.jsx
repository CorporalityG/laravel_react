import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './ContactMap.css'
import { Link } from "react-router-dom";
import { API_IMG_URL } from '../../../config'

const ContactMap = (pageDetail) => {

    useEffect(() => {
        Aos.init();
    })

    return (
        <>
            {
                pageDetail ?
                    <>
                        <div className="book-our-calendar">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div data-aos="fade-up">
                                            <div className="conmap-bookOurCalendar">
                                                <div className="d-flex conmap-bookOurCalendar-inner">
                                                    <div className="conmap-detail-head p-2">
                                                        <h2 className="my-3">{`${pageDetail.book_calendar_title}`}</h2>
                                                        <p className="my-3">{`${pageDetail.book_calendar_description}`}</p>
                                                        <a href={`${pageDetail.book_calendar_btn_link}`} target="_blank" className="btn know_button ">{`${pageDetail.book_calendar_btn_text}`}</a>
                                                    </div>

                                                    <img className="img-fluid mx-5 bookcal-Image" src={`${API_IMG_URL}pages/${pageDetail.book_calendar_image}`} alt={`${pageDetail.book_calendar_title}`} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div data-aos="fade-up">
                                            <div className="conmap-partners mx-2">
                                                <div className="conmap-detail-head">
                                                    <h2 className="m-3">{`${pageDetail.partner_with_us_title}`}</h2>
                                                    <p className="m-3">{`${pageDetail.partner_with_us_description}`}</p>
                                                    <button className="btn know_button">
                                                        <Link to={`/${pageDetail.partner_with_us_btn_1_link}`}>{`${pageDetail.partner_with_us_btn_1_text}`}</Link>
                                                    </button>
                                                    <a href={`tel:${pageDetail.partner_with_us_btn_2_link}`} className="btn footer-button">
                                                        <div className="footer-button-text p-1">
                                                            {`${pageDetail.partner_with_us_btn_2_text}`}
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="contact-us-map-section">
                            <div className="container-fluid px-0">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div data-aos="fade-right" dangerouslySetInnerHTML={{ __html: pageDetail.office_1_map }}></div>
                                    </div>
                                    <div className="col-md-6">
                                        <div data-aos="fade-left" dangerouslySetInnerHTML={{ __html: pageDetail.office_2_map }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    : null
            }
        </>
    )
}

export default ContactMap