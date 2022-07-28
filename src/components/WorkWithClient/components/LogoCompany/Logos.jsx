import React, { useEffect } from 'react'
import '../LogoCompany/Logos.css'
import aos from 'aos'
import { API_IMG_URL } from '../../../../config';

const Logos = (pageDetail) => {

    useEffect(() => {
        aos.init({ duration: 3000, disable: 'mobile' });
    }, [])

    return (
        <div className=" Logos_Partner_all">
            <div className="container">

                <div className="row All_Icons ">
                    <div className="col-lg-4 d-flex justify-content-center align-items-center">
                        {pageDetail.partner_logo_1 && <img data-aos="flip-left" data-aos-delay="500" src={`${API_IMG_URL}pages/${pageDetail.partner_logo_1}`} alt='logo1' className='Logo-1-Partner logo1ofpartner' />}
                        {pageDetail.partner_logo_2 && <img data-aos="flip-left" data-aos-delay="1000" src={`${API_IMG_URL}pages/${pageDetail.partner_logo_2}`} alt='logo2' className='Logo-1-Partner logo2ofpartner' />}

                    </div>
                    <div className="col-lg-4 d-flex justify-content-center align-items-center">
                        {pageDetail.partner_logo_3 && <img data-aos="flip-left" data-aos-delay="1500" src={`${API_IMG_URL}pages/${pageDetail.partner_logo_3}`} alt='logo3' className='Logo-1-Partner logo3ofpartner' />}
                        {pageDetail.partner_logo_4 && <img data-aos="flip-left" data-aos-delay="2000" src={`${API_IMG_URL}pages/${pageDetail.partner_logo_4}`} alt='logo4' className='Logo-1-Partner logo-partner-4' />}


                    </div>
                    <div className="col-lg-3 d-flex justify-content-center align-items-center">
                        {pageDetail.partner_logo_5 && <img data-aos="flip-left" data-aos-delay="2500" src={`${API_IMG_URL}pages/${pageDetail.partner_logo_5}`} alt='logo5' className='Logo-1-Partner logo5ofpartner' />}
                        {pageDetail.partner_logo_6 && <img data-aos="flip-left" data-aos-delay="3000" src={`${API_IMG_URL}pages/${pageDetail.partner_logo_6}`} alt='logo6' className='Logo-1-Partner logo-partner-6' />}

                    </div>
                    <div className="col-lg-1 last-logo d-flex justify-content-center align-items-center">
                        {pageDetail.partner_logo_7 && <img data-aos="flip-left" data-aos-delay="3000" src={`${API_IMG_URL}pages/${pageDetail.partner_logo_7}`} alt='logo7' className='Logo-1-Partner logo7ofpartner  ' />}</div>
                </div>
            </div>
        </div>
    )
}

export default Logos
