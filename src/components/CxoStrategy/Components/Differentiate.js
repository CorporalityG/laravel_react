import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./CxoStrategy.css"
import { BASE_URL } from '../../../config';

export default function Differentiate() {
  useEffect(() => {
    Aos.init({ disable: "mobile" });
  });
  return (
    <>
      <div className="container">
        <div className="differentiate">
          <div className="row position-relative">
            <div data-aos="fade-right" data-aos-duration="3000" className="col cxo-landing-page">
              <h3>OUTSOURCED CXO</h3>
              <h1>Delivering a better success</h1>
              <p>

              United by a common purpose to deliver your vision with your team .Hire our strategist and consultants in bundle to handle your entire Marketing Department and customer service to accelerate the success you have been dreaming of
.

                Build customer loyalty through differentiated brand
                strategies that activate a positive relationship
                between the business and its customers.
                Leadership is highly essential in creating
                seamless and connected customer journeys that
                are highly important.


              </p>
            </div>

            <div className="col  cxo-landing-image-1">
              <div className="cxo-landing-image-2"></div>
              <div className="cxo-landing-image-3">
                <div className="cxo-landing-image-4">
                  <div className="cxo-landing-image-5 image-fluid">
                    <img src="./img/CxoStrategy/img/differentiate/textBox.png" />
                  </div>
                  <div className="cxo-landing-image-6 image-fluid">
                    <img src="./img/CxoStrategy/img/differentiate/textBox2.png" />
                  </div>
                  <div className="socialIcons position-absolute bottom-0 end-0">
                    <a href='https://www.facebook.com/CorporalityG'>
                      <img src='./img/CxoStrategy/img/differentiate/facebook.png' />
                    </a>
                    <a href='https://twitter.com/corporalityg'>
                      <img src='./img/CxoStrategy/img/differentiate/twitter.png' />
                    </a>
                    <a href='https://www.instagram.com/corporalityg/'>
                      <img src='./img/CxoStrategy/img/differentiate/instagram.png' />
                    </a>
                    <a href='https://www.linkedin.com/company/corporality/'>
                      <img src='./img/CxoStrategy/img/differentiate/linkedin.png' />
                    </a>
                    <a href='https://in.pinterest.com/CorporalityG/'>
                      <img src='./img/CxoStrategy/img/differentiate/pinterest.png' />
                    </a>
                    <a href='https://www.youtube.com/channel/UC4EISt8kHI4zzpmbIBMIBbg'>
                      <img src='./img/CxoStrategy/img/differentiate/youtube.png' />
                    </a>
                  </div>
                </div>

                <div className="cxo-banner-custom-img">
                  <img src={BASE_URL + '/img/CxoStrategy/check-icon.png'} alt="Check" className="check-icon" />
                  <img src={BASE_URL + '/img/CxoStrategy/rec-1.png'} alt="rec-1" className="rec-1" />
                  <img src={BASE_URL + '/img/CxoStrategy/phone-icon.png'} alt="Phone" className="phone-icon" onClick={() => window.open("tel:61283794089", "_self")} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
