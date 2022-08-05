import React from "react";
import "./Footer.css";
import upArrow from "./img/upArrow.png";
import polygon from "./img/polygon.png";
import logo from "./img/logo.png";
import { useNavigate } from "react-router";
import { Link } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();
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
              <p className="text-links" onClick={() => { navigate("/about-corporality"); topHandle(); }}>
                <img className="poligon-image" src={polygon} alt="*" />
                About Corporality
              </p>
              <p className="text-links" onClick={() => { navigate("/work-with-clients"); topHandle(); }}>
                <img className="poligon-image" src={polygon} alt="*" />
                How We Work with Clients
              </p>
              <p className="text-links" onClick={() => { navigate("/inclusion-and-diversity"); topHandle(); }}>
                <img className="poligon-image" src={polygon} alt="*" />
                Inclusion and Diversity
              </p>
              <p className="text-links" onClick={() => { navigate("/partnership-programmes"); topHandle(); }}>
                <img className="poligon-image" src={polygon} alt="*" />
                Partnership Programmes
              </p>
              <p className="text-links" onClick={() => { navigate("/sustainable-growth"); topHandle(); }}>
                <img className="poligon-image" src={polygon} alt="*" />
                Sustainable Growth
              </p>
            </div>

            {/* col-3 */}
            <div className="column3">
              <h1 className="footer-heading">Our Service</h1>
              <hr size="5" className="line-below-footer-heading" />
              <p className="text-links" onClick={() => { navigate("/goto-market-strategy"); topHandle(); }}>
                <img className="poligon-image" src={polygon} alt="*" />
                Go-to-Marketing
              </p>
              <p className="text-links" onClick={() => { navigate("/digital-media-marketing"); topHandle(); }}>
                <img className="poligon-image" src={polygon} alt="*" />
                Digital Media Marketing
              </p>
              <p className="text-links" onClick={() => { navigate("/strategic-consultancy"); topHandle(); }}>
                <img className="poligon-image" src={polygon} alt="*" />
                Strategic Consulting
              </p>
              <p className="text-links" onClick={() => { navigate("/corporate-strategy"); topHandle(); }}>
                <img className="poligon-image" src={polygon} alt="*" />
                Corporate Level Strategy
              </p>
              <p className="text-links" onClick={() => { navigate("/sustainable-growth"); topHandle(); }}>
                <img className="poligon-image" src={polygon} alt="*" />
                Product Strategy
              </p>
              <p className="text-links" onClick={() => { navigate("/brand-positioning"); topHandle(); }}>
                <img className="poligon-image" src={polygon} alt="*" />
                Brand Positioning
              </p>
              <p className="text-links" onClick={() => { navigate("/cxo-strategy"); topHandle(); }}>
                <img className="poligon-image" src={polygon} alt="*" />
                Outsourced CXO
              </p>
            </div>

            {/* col-4 */}
            <div className="column4">
              <h1 className="footer-heading">Insights</h1>
              <hr size="5" className="line-below-footer-heading" />
              <Link to="/about-corporality" onClick={() => { topHandle() }} className="text-links">
                <img className="poligon-image" src={polygon} alt="*" />
                Corporality Citizenship
              </Link>
              <Link to="/our-team" onClick={() => { topHandle() }} className="text-links">
                <img className="poligon-image" src={polygon} alt="*" />
                Our Team
              </Link>
              <Link to="/careers" onClick={() => { topHandle() }} className="text-links">
                <img className="poligon-image" src={polygon} alt="*" />
                Careers
              </Link>
              <Link to="/blog" onClick={() => { topHandle() }} className="text-links">
                <img className="poligon-image" src={polygon} alt="*" />
                Insights
              </Link>
            </div>

            {/* col-5 */}
            <div className="arrow-icon-container">
              <div onClick={topHandle} className="arrow-icon-wrapper d-flex1 justify-content-center1 align-items-center1" style={{ backgroundImage: "url(" + upArrow + ")" }}></div>
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
        <div className="row2">Copyright © 2014-2022, The Corporaltiy Global</div>
      </div>
    </>
  );
}
