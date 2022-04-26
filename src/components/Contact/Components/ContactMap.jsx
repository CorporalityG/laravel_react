import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './ContactMap.css'

const ContactMap = () => {

    useEffect(() => {
        Aos.init();
    })

    return (
        <>
            <div className="book-our-calendar">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div data-aos="fade-up">
                                <div className="conmap-bookOurCalendar">
                                    <div className="d-flex conmap-bookOurCalendar-inner">
                                        <div className="conmap-detail-head p-2">
                                            <h2 className="my-3">Book Our Calendar</h2>
                                            <p className="my-3">Chat with us now <br /> We are active Morning 9:AM – 6:00PM <br /> Monday to Friday Sydney time</p>
                                            <button type="button" className="btn know_button ">Speaker Booking</button>
                                        </div>

                                        <img className="img-fluid mx-5 bookcal-Image" src="./img/Contact/connnn.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-6">
                            <div data-aos="fade-up">
                                <div className="conmap-partners mx-2">
                                    <div className="conmap-detail-head">
                                        <h2 className="m-3">Partner With Us</h2>
                                        <p className="m-3">Corporality Global is always on the look out for enterprising partners who can build the business and grow along with us. Our parternship journeys are designed to enable, strengthen and grow your business using high-level performance plans and strategies.</p>
                                        <button type="button" className="btn know_button">Know More</button>
                                        <button type="button" className="btn footer-button">
                                            <div className="footer-button-text p-1">

                                                Call Us
                                            </div>
                                        </button>
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
                            <div data-aos="fade-right">
                                <iframe title="Sydney, NSW, Australia" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.995019646924!2d151.20904221506777!3d-33.86401922624178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae6a1fa4f413%3A0xc20e25be8bd53228!2sCouriers%20To%20India%20-%20Sydney!5e0!3m2!1sen!2sin!4v1637267826696!5m2!1sen!2sin" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabindex="0"></iframe>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div data-aos="fade-left">
                                <iframe title="CA, USA" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.246863245163!2d-117.86188038493646!3d34.01187378061693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c32bbc64a92157%3A0x6de2cd2642a475b8!2s340%20S%20Lemon%20Ave%2C%20Walnut%2C%20CA%2091789%2C%20USA!5e0!3m2!1sen!2sin!4v1646999769721!5m2!1sen!2sin" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactMap