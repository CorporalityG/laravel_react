import { BASE_URL } from '../../../config';
import './ConForm.css'
// import './ContactForm.css'
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const ConForm = () => {

    // let placeholder = document.getElementById('input');

    // placeholder.addEventListener('focus', (el) => {
    //     this.removeAttribute('placeholder');
    // })

    useEffect(() => {
        Aos.init();
    })


    return (
        <>
            <div className=" p-lg-0 pt-lg-2">
                <div className="conform-contaioner">

                    <div className="d-lg-flex align-items-center  ">
                        <div className="conform-info-box m-5">
                            <h2 className="conform-info-heading">Let’s Talk</h2>
                            <p className="conform-info-para">Our customer experience experts are always ready to provide you with all the answers. <br /> Call us now!</p>
                            <div data-aos="fade-right">
                                <div className="location-box-main">
                                    <div className="loction-icon">
                                        <img src={BASE_URL + '/img/location.png'} alt="location" />
                                    </div>
                                    <div className="loaction-address">
                                        <div className="address-title">Sydney Head Office</div>
                                        <div className="address-main">
                                            <div className="address">
                                                <p>Phone: +61 2 83794089</p>
                                                <p>Level 36, Governor Phillip Tower, 1 Farrer Place, Sydney, NSW 2000, Australia.</p>
                                            </div>

                                            <a href="tel:61283794089">
                                                <div className="location-phone">
                                                    <div className="phone-bg">
                                                        <img src={BASE_URL + '/img/phone-bg.png'} alt="phone-bg" />
                                                    </div>
                                                    <div className="phone-icon">
                                                        <img className="img-fluid" src={BASE_URL + '/img/phone.png'} alt="phone" />
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="location-box-main">
                                    <div className="loction-icon">
                                        <img src={BASE_URL + '/img/location.png'} alt="location" />
                                    </div>
                                    <div className="loaction-address">
                                        <div className="address-title">USA Office</div>
                                        <div className="address-main">
                                            <div className="address">
                                                <p>Phone: +1 (415) 426-7999</p>
                                                <p>340 S Lemon Ave #3159 Walnut, CA 91789.</p>
                                            </div>

                                            <a href="tel:4154267999">
                                                <div className="location-phone">
                                                    <div className="phone-bg">
                                                        <img src={BASE_URL + '/img/phone-bg.png'} alt="phone-bg" />
                                                    </div>
                                                    <div className="phone-icon">
                                                        <img className="img-fluid" src={BASE_URL + '/img/phone.png'} alt="phone" />
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-left">
                            <div className="fluid mx-lg-5 px-md-4">
                                <div className="conform-contactForm  p-5 m-4">
                                    <p className="conform-contactHeading fw-bold my-3 fs-4">Contact Us</p>
                                    <form action='https://forms.zohopublic.com.au/corporality/form/ContactUsCorporality/formperma/p9xYt83oAKygfe4BlX5Z9RT6BwSWuWEMqz595Cv7cpM/htmlRecords/submit' name='form' method='POST' onSubmit='javascript:document.charset="UTF-8"; return zf_ValidateAndSubmit();' acceptCharset='UTF-8' encType='multipart/form-data' id='form'>
                                        <input type="hidden" name="zf_referrer_name" />
                                        <input type="hidden" name="zf_redirect_url" />
                                        <input type="hidden" name="zc_gad" />

                                        <div className="row">
                                            <div className="col" >
                                                <input type="text" maxLength="255" name="Name_First" fieldtype='7' placeholder="First Name" className="philosophy-input" id="Name_First" />
                                                <label htmlFor="Name_First" className="philosophy-input-label">First Name</label>
                                            </div>

                                            <div className="col">
                                                <input type="text" maxLength="255" name="Name_Last" fieldtype='7' placeholder="Last Name" className="philosophy-input" id="Name_Last" />
                                                <label htmlFor="Name_Last" className="philosophy-input-label">Last Name</label>
                                            </div>
                                        </div>

                                        <div className="row my-3">
                                            <div className="col">
                                                <input fieldtype='9' type="text" maxLength="255" name="Email" checktype="c5" placeholder="Email" className="philosophy-input" id="Email" />
                                                <label htmlFor="Email" className="philosophy-input-label">Email</label>
                                            </div>
                                            <div className="col">
                                                <input type="text" compname="PhoneNumber" name="PhoneNumber_countrycode" maxLength="20" checktype="c7" phoneformat="1" iscountrycodeenabled='false' fieldtype="11" id="international_PhoneNumber_countrycode" valtype="number" phoneformattype="1" placeholder="Mobile" className="philosophy-input" />
                                                <label htmlFor="international_PhoneNumber_countrycode" className="philosophy-input-label">Mobile</label>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col">
                                                <input type="text" maxLength="2083" name="Website" checktype="c6" placeholder="Website URL" className="philosophy-input" id="Website" />
                                                <label htmlFor="Website" className="philosophy-input-label">Website URL</label>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col my-3">
                                                <textarea name="MultiLine" checktype="c1" maxLength="65535" placeholder="Your Message" className="form-control philosophy-input" rows="5" id="MultiLine"></textarea>
                                                <label htmlFor="MultiLine" className="philosophy-input-label">Your Message</label>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col mb-3">
                                                <button type="submit" className="btn footer-button">
                                                    <div className="footer-button-text">
                                                        Send Request
                                                    </div>
                                                </button>

                                                <input type="reset" className="btn conformreset-btn" value="Reset" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ConForm