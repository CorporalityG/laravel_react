import React, { useEffect } from 'react'
import aos from 'aos'
import '../LastComponentINC/NewsLetter.css'
import rect1 from '../LastComponentINC/rect1.png'
import wall from '../LastComponentINC/wall.png'
import rect2 from '../LastComponentINC/rect2.png'
import rect3 from '../LastComponentINC/rect3.png'
import rect4 from '../LastComponentINC/rect4.png'
import Main from '../LastComponentINC/main.png'
import Back from '../LastComponentINC/back.png'
import { API_IMG_URL } from '../../../../config';

const Newsletter = (pageDetail) => {

    useEffect(() => {
        aos.init({});
    }, [])

    return (
        <div className="second-Ns">
            <img className='wall-2-2-Ns' src={wall} alt='wall' />
            <img className='rect-2-4-Ns' src={rect4} alt='rect4' />
            <div className='container second-container-Ns' >
                <div className="row interactive_blueprint-row-Ns">
                    <div className="col-lg-6 textndlists-Ns d-flex flex-column  justify-content-center">
                        <p data-aos="fade-right" data-aos-duration="2000" data-aos-delay="500" className='container-2-text-1-Ns'>{`${pageDetail.newsletter_title}`}
                        </p>

                        <form action='https://forms.zohopublic.com.au/corporality/form/SubscribeNewslettersCorporality/formperma/h58Lc8-XG8Ll4jwIvKkFCFA_uwUgipzSLFZVfC_3lZs/htmlRecords/submit' name='form' method='POST' onSubmit='javascript:document.charset="UTF-8"; return zf_ValidateAndSubmit();' acceptCharset='UTF-8' encType='multipart/form-data' id='form'>
                            <input type="hidden" name="zf_referrer_name" />
                            <input type="hidden" name="zf_redirect_url" />
                            <input type="hidden" name="zc_gad" />

                            <div data-aos="fade-right" data-aos-duration="2000" data-aos-delay="1000" className="emailAndNs">
                                <input fieldtype='9' type="text" className="emailinput" maxLength="255" name="Email" checktype="c5" placeholder="Enter your Email" onFocus={(e) => e.target.placeholder = ""} onBlur={(e) => e.target.placeholder = "Enter your Email"} />

                                <span><button className="subscribe-Ns">Subscribe</button></span>
                            </div>
                        </form>

                    </div>
                    <div className="col-lg-6 d-flex justify-content-center ">
                        <div className="imagessecond-Ns">
                            <img className='rect-2-1-Ns' src={rect1} alt='rect1' />
                            <img className='rect-2-2-Ns' src={rect2} alt='rect2' />
                            <img className='rect-2-3-Ns' src={rect3} alt='rect3' />


                            <div className="mainndback-4-Ns">
                                <img className='backimagesecond-fourth-Ns' src={Back} alt='Back' />
                                <div className="bp_our-newsletter-polygon9-Ns">
                                    <div data-aos="fade-down-left" data-aos-duration="2000" data-aos-delay="1000">
                                        {pageDetail.newsletter_image && <img className='main-2-2-Ns' src={`${API_IMG_URL}pages/${pageDetail.newsletter_image}`} alt={`${pageDetail.newsletter_title}`} />}
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Newsletter
