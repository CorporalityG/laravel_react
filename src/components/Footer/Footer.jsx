import React from "react";
import "./Footer.css";
import logo from "./img/logo.png";
import { Link } from 'react-router-dom';

export default function Footer() {

  const topHandle = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <>
      <div className=" footerContainer">
        <div className="container">
          <div className="row footerRow">
            {/* col-1 */}
            <div className="column1">
              <img className="company-logo-footer" src={logo} alt="logo" />
              {/* share animation start */}
              <div className="foot-c">
                <nav className="menu">
                  <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open" />
                  <label className="menu-open-button" style={{ backgroundColor: "#f2f2f2", color: "#31647c" }} htmlFor="menu-open">
                    <i className="fa fa-share-alt" style={{ marginTop: "-9.2px", marginLeft: "-13.5px", fontSize: "large", top: "50%", }} />
                  </label>
                  <a href="https://www.instagram.com/corporalityg/" className="menu-item instagram">
                    {" "}
                    <i className="fa fa-instagram" style={{ marginTop: "-12px", marginLeft: "-12.5px" }} />
                  </a>
                  <a href="https://www.facebook.com/CorporalityG/" className="menu-item facebook">
                    {" "}
                    <i className="fa fa-facebook-f" style={{ marginTop: "-12px", marginLeft: "-13px" }} />
                  </a>
                  <a href="https://in.pinterest.com/CorporalityG/" className="menu-item pinterest">
                    {" "}
                    <i className="fa fa-pinterest" style={{ marginTop: "-12px", marginLeft: "-12.5px" }} />
                  </a>
                  <a href="https://twitter.com/corporalityg/" className="menu-item twitter">
                    {" "}
                    <i className="fa fa-twitter" style={{ marginTop: "-12px", marginLeft: "-12.5px" }} />
                  </a>
                  <a href="https://www.linkedin.com/company/corporality/" className="menu-item linkedin">
                    <i className="fa fa-linkedin" style={{ marginTop: "-12px", marginLeft: "-12.5px" }} />
                  </a>
                  <a href="https://www.youtube.com/channel/UC4EISt8kHI4zzpmbIBMIBbg/" className="menu-item youtube">
                    {" "}
                    <i className="fa fa-youtube-play" style={{ marginTop: "-12px", marginLeft: "-14.5px" }} />
                    {" "}
                  </a>
                </nav>
              </div>
              {/* share animation div - end */}
              <div className="emailDivWrapper">
                <form action='https://forms.zohopublic.com.au/corporality/form/SubscribeNewslettersCorporality/formperma/h58Lc8-XG8Ll4jwIvKkFCFA_uwUgipzSLFZVfC_3lZs/htmlRecords/submit' name='form' method='POST' acceptCharset='UTF-8' encType='multipart/form-data' id='form'>
                  <input type="hidden" name="zf_referrer_name" />
                  <input type="hidden" name="zf_redirect_url" />
                  <input type="hidden" name="zc_gad" />
                  <input fieldtype='9' type="text" className="email-space" maxLength="255"
                    name="Email" checktype="c5" placeholder="Email Id" />
                  <p id="Email_error" className="zf-errorMessage" style={{ display: "none" }}>Invalid value</p>

                  <div className="checkBox">
                    <input className="form-check-input" type="checkbox" id="flexCheckIndeterminate" />
                    <p className="text-above-button">
                      I agree to have my personal data stored, processed and
                      analysed by Corporality as outlined in this Privacy Policy.*
                    </p>
                  </div>
                  <div className="footer-button-wrapper">
                    <button className="zf-submitColor footerButton">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>

            {/* col-2 */}
            <div className="column2">
              <h1 className="footer-heading">Who we are</h1>
              <hr className="line-below-footer-heading" />
              <Link to="/about-corporality" onClick={() => { topHandle() }} className="text-links">About Corporality</Link>
              <Link to="/work-with-clients" onClick={() => { topHandle() }} className="text-links">How We Work with Clients</Link>
              <Link to="/inclusion-and-diversity" onClick={() => { topHandle() }} className="text-links">Inclusion and Diversity</Link>
              <Link to="/partnership-programmes" onClick={() => { topHandle() }} className="text-links">Partnership Programmes</Link>
              <Link to="/sustainable-growth" onClick={() => { topHandle() }} className="text-links">Sustainable Growth</Link>
            </div>

            {/* col-3 */}
            <div className="column3">
              <h1 className="footer-heading">Our Service</h1>
              <hr size="5" className="line-below-footer-heading" />
              <Link to="/goto-market-strategy" onClick={() => { topHandle() }} className="text-links">Go-to-Marketing</Link>
              <Link to="/digital-media-marketing" onClick={() => { topHandle() }} className="text-links">Digital Media Marketing</Link>
              <Link to="/strategic-consultancy" onClick={() => { topHandle() }} className="text-links">Strategic Consulting</Link>
              <Link to="/corporate-strategy" onClick={() => { topHandle() }} className="text-links">Corporate Level Strategy</Link>
              <Link to="/sustainable-growth" onClick={() => { topHandle() }} className="text-links">Product Strategy</Link>
              <Link to="/brand-positioning" onClick={() => { topHandle() }} className="text-links">Brand Positioning</Link>
              <Link to="/cxo-strategy" onClick={() => { topHandle() }} className="text-links">Outsourced CXO</Link>
            </div>

            {/* col-4 */}
            <div className="column4">
              <h1 className="footer-heading">Insights</h1>
              <hr size="5" className="line-below-footer-heading" />
              <Link to="/about-corporality" onClick={() => { topHandle() }} className="text-links">Corporality Citizenship</Link>
              <Link to="/our-team" onClick={() => { topHandle() }} className="text-links">Our Team</Link>
              <Link to="/careers" onClick={() => { topHandle() }} className="text-links">Careers</Link>
              <Link to="/blog" onClick={() => { topHandle() }} className="text-links">Insights</Link>
            </div>

            {/* col-5 */}
            <div className="arrow-icon-container">
              <div onClick={topHandle} className="arrow-icon-wrapper"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="footerContainer">
        <div className="row1">
          <Link to="/privacy-policy" onClick={() => { topHandle() }} className="footer-text">Privacy Policy</Link>
          <Link to="/terms-and-conditions" onClick={() => { topHandle() }} className="footer-text">Terms and Conditions</Link>
          <Link to="/sitemap" onClick={() => { topHandle() }} className="footer-text">Sitemap</Link>
        </div>
        <div className="row2"><p>Copyright © 2014-2022, The Corporaltiy Global</p></div>
      </div>
    </>
  );
}
