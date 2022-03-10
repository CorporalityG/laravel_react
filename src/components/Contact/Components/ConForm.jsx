
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
                <div className=" ">

                    <div className="d-lg-flex align-items-center  ">
                        <div className="conform-info-box m-5">
                            <h2 className="conform-info-heading">LET’S TALK</h2>
                            <p className="conform-info-para">Our customer experience experts are always ready to provide you with all the answers. <br /> Call us now!</p>
                            <div data-aos="fade-right">

                                <div className="conformc-add position-relative">
                                    <div className="conformww-img">
                                        <img className="img-fluid" src="./img/Contact/Group783.png" alt="" />
                                    </div>

                                <div className="jhvwwchv">

                                    <div className="conform-diamond">
                                        <a href="tel:+61 2 83794089">
                                        <div className="callconform">
                                            <img className="img-fluid" src="./img/Contact/Group709.png" alt="" />
                                        </div>
                                        </a>
                                        <p>+61 2 83794089</p>
                                        <div className="conformhollowDia"></div>
                                    </div>

                                </div>
                                </div>

                            </div>
                        </div>
                         <div data-aos="fade-left">
                            <div className="fluid mx-md-5 px-md-4">
                                <div className="conform-contactForm  p-5 m-4">
                                    <p className="conform-contactHeading text-uppercase fw-bold my-5 fs-4">Contact us</p>
                                    <form action='https://forms.zohopublic.com.au/corporality/form/contactform/formperma/uF0jXizlPje54xxLVDzQT9s7L__sj8zG2ZGhGewIb8c/htmlRecords/submit' name='form' method='POST' onSubmit='javascript:document.charset="UTF-8"; return zf_ValidateAndSubmit();' accept-charset='UTF-8' encType='multipart/form-data' id='form'>
                                        <input type="hidden" name="zf_referrer_name" value="" />
                                        <input type="hidden" name="zf_redirect_url" value="" />
                                        <input type="hidden" name="zc_gad" value="" />

                                        <div className="row">
                                            <div className="col mx-md-3" >
                                                {/* <input type="text" name="fname" placeholder="First Name" className="philosophy-input" id="input" /> */}
                                                <input type="text" maxLength="255" name="Name_First" fieldType='7' placeholder="First Name" className="philosophy-input" id="Name_First" />
                                                <label htmlFor="Name_First" className="philosophy-input-label">First Name</label>
                                            </div>
                                        
                                            <div className="col mx-md-3">
                                                {/* <input type="text" name="fname" placeholder="Last Name" className="philosophy-input" id="input" /> */}
                                                <input type="text" maxLength="255" name="Name_Last" fieldType='7' placeholder="Last Name" className="philosophy-input" id="Name_Last" />
                                                <label htmlFor="Name_Last" className="philosophy-input-label">Last Name</label>
                                            </div>
                                        </div>
                                        
                                        <div className="row my-3">
                                            <div className="col mx-md-3">
                                                {/* <input type="text" name="fname" placeholder="Email" className="philosophy-input" id="input" /> */}
                                                <input fieldType='9' type="text" maxLength="255" name="Email" checktype="c5" placeholder="Email" className="philosophy-input" id="Email" />
                                                <label htmlFor="Email" className="philosophy-input-label">Email</label>
                                            </div>
                                            <div className="col mx-md-3">
                                                {/* <input type="text" name="fname" placeholder="Mobile" className="philosophy-input" id="input" /> */}
                                                <input type="text" compname="PhoneNumber" name="PhoneNumber_countrycode" maxLength="20" checktype="c7" phoneFormat="1" isCountryCodeEnabled='false' fieldType="11" id="international_PhoneNumber_countrycode" valType="number" phoneFormatType="1" placeholder="Mobile"  className="philosophy-input" />
                                                <label htmlFor="international_PhoneNumber_countrycode" className="philosophy-input-label">Mobile</label>
                                            </div>
                                        </div>
                                        
                                        <div className="col my-3 ">
                                            {/* <input type="text" name="fname" placeholder="Website URL" className="philosophy-input" id="input" /> */}
                                            <input type="text" maxLength="2083" name="Website" checktype="c6" placeholder="Website URL" className="philosophy-input" id="Website" />
                                            <label htmlFor="Website" className="philosophy-input-label">Website URL</label>
                                        </div>
                                        
                                        <div className="col my-3">
                                            {/* <textarea className="form-control philosophy-input" placeholder="Your Message"  id="input" rows="5"></textarea> */}
                                            <textarea name="MultiLine" checktype="c1" maxLength="65535" placeholder="Your Message" className="form-control philosophy-input" rows="5" id="MultiLine"></textarea>
                                            <label htmlFor="MultiLine" className="philosophy-input-label">Your Message</label>
                                        </div>
                                        
                                        <button type="submit" className="btn footer-button">
                                            <div className="footer-button-text">
                                                Send Request      
                                            </div>
                                        </button>
                                        {/* <button type="button" className="btn footer-button">
                                        <a href="mailto:someone@example.com">
                                            <div className="footer-button-text">
                                                Send Request      
                                            </div>
                                        </a>
                                        </button> */}
                                        <button type="button" className="btn conformreset-btn">Reset</button>
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