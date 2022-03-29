import React from "react";
import "./Footer.css";
import upArrow from "./img/upArrow.png";
import polygon from "./img/polygon.png";
import logo from "./img/logo.png";
import { useNavigate } from "react-router";

export default function Footer() {
  const navigate = useNavigate();
  const topHandle = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <>
      {/* footer */}

      <div className=" footerContainer">
        <div className="container">
          <div className="row footerRow">
            {/* col-1 */}
            <div className="column1">
              <img className="company-logo-footer" src={logo} />
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
                <input type="email" className="email-space " id="floatingInput" placeholder="Email Id" />
                {/* <label for="floatingInput">Email ID</label> */}

                <div className="checkBox">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                  <p className="text-above-button">
                    I agree to have my personal data stored, processed and
                    analysed by Corporality as outlined in this Privacy Policy.*
                  </p>
                </div>
                <a href="mailto:connect@corporality.global">
                  <div className="footer-button-wrapper">
                    <button type="button" className="footerButton">
                      Subscribe
                    </button>
                  </div>
                </a>
              </div>
            </div>

            {/* col-2 */}
            <div className="column2">
              <h1 className="footer-heading">Who we are</h1>
              <hr className="line-below-footer-heading" />
              <p className="text-links" onClick={() => { navigate("/about-corporality"); topHandle(); }}>
                <img className="poligon-image" src={polygon} />
                About Corporality
              </p>
              <p className="text-links" onClick={() => { navigate("/work-with-clients"); topHandle(); }}>
                <img className="poligon-image" src={polygon} />
                How We Work with Clients
              </p>
              <p className="text-links" onClick={() => { navigate("/inclusion-and-diversity"); topHandle(); }}>
                <img className="poligon-image" src={polygon} />
                Inclusion and Diversity
              </p>
              <p className="text-links" onClick={() => { navigate("/partnership-programmes"); topHandle(); }}>
                <img className="poligon-image" src={polygon} />
                Partnership Programmes
              </p>
              <p className="text-links" onClick={() => { navigate("/sustainable-growth"); topHandle(); }}>
                <img className="poligon-image" src={polygon} />
                Sustainable Growth
              </p>
            </div>

            {/* col-3 */}
            <div className="column3">
              <h1 className="footer-heading">Our Service</h1>
              <hr size="5" className="line-below-footer-heading" />
              <p className="text-links" onClick={() => { navigate("/go-to-marketing"); topHandle(); }}>
                <img className="poligon-image" src={polygon} />
                Go-to-Marketing
              </p>
              <p className="text-links" onClick={() => { navigate("/digital-media-marketing"); topHandle(); }}>
                <img className="poligon-image" src={polygon} />
                Digital Media Marketing
              </p>
              <p className="text-links" onClick={() => { navigate("/strategic-consultancy"); topHandle(); }}>
                <img className="poligon-image" src={polygon} />
                Strategic Consulting
              </p>
              <p className="text-links" onClick={() => { navigate("/corporate-strategy"); topHandle(); }}>
                <img className="poligon-image" src={polygon} />
                Corporate Level Strategy
              </p>
              <p className="text-links" onClick={() => { navigate("/sustainable-growth"); topHandle(); }}>
                <img className="poligon-image" src={polygon} />
                Product Strategy
              </p>
              <p className="text-links" onClick={() => { navigate("/brand-positioning"); topHandle(); }}>
                <img className="poligon-image" src={polygon} />
                Brand Positioning
              </p>
              <p className="text-links" onClick={() => { navigate("/cxo-strategy"); topHandle(); }}>
                <img className="poligon-image" src={polygon} />
                Outsourced CXO
              </p>
            </div>

            {/* col-4 */}
            <div className="column4">
              <h1 className="footer-heading">About Us</h1>
              <hr size="5" className="line-below-footer-heading" />
              <p className="text-links" onClick={() => { navigate("/about-corporality"); topHandle(); }}>
                <img className="poligon-image" src={polygon} />
                Corporality Citizenship
              </p>
              <p className="text-links">
                <img className="poligon-image" src={polygon} />
                Our Team
              </p>
              <p className="text-links">
                <img className="poligon-image" src={polygon} />
                Careers
              </p>
              <p className="text-links" onClick={() => { navigate("/blog"); topHandle(); }}>
                <img className="poligon-image" src={polygon} />
                Insights
              </p>
            </div>

            {/* col-5 */}
            <div className="arrow-icon-container">
              <div onClick={topHandle} className="arrow-icon-wrapper d-flex justify-content-center align-items-center">
                <img src={upArrow} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <hr ></hr> */}

      {/* 2nd last lower section with 3 links */}
      <div className="footerContainer">
        <div className="row1">
          <div className="footer-text">Privacy Policy</div>
          <div className="footer-text">Terms and Conditions</div>
          <div className="footer-text">Sitemap</div>
        </div>
        <div className="row2">Copyright © 2022 Corporality</div>
      </div>
    </>
  );
}
