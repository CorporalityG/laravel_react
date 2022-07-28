import React, { useEffect } from "react";
import aos from 'aos'
import "../NewsLetter/NewsLetter.css";
import back from "../NewsLetter/back.png";
import growmore from "../NewsLetter/growmore.png";
import learnmore from "../NewsLetter/learnmore.png";
import logo from "../NewsLetter/logo.png";
import rightrect from "../NewsLetter/rightrect.png";
import wall from "../NewsLetter/wall.png";
import { Link } from "react-router-dom";
import { API_IMG_URL } from '../../../../config';

const NewsLetter = (pageDetail) => {

  useEffect(() => {
    aos.init({ duration: 3000 });

  }, [])

  return (
    <div className="NewsLetter_Main_work">
      <img src={wall} alt="wall" className="Wall_newsletter" />
      <img src={rightrect} alt="rightrect" className="rect_newsletter" />

      <div className="container">
        <div className="row NewsLetter_full ">
          <div className="col-lg-6 ">
            <div className="text_NewsLetter  flex-column justify-content-center ">
              <p data-aos="fade-right" data-aos-delay="500" className="NewsLetter-Text-Heading">{`${pageDetail.work_us_title}`}</p>
              <p data-aos="fade-right" data-aos-delay="500" className="NewsLetter-Text-1">
                {`${pageDetail.work_us_description}`}
              </p>
              <div data-aos="fade-right" data-aos-delay="500" className="aos-in-button">
                <button className="button-seventh">
                  <Link to={`/${pageDetail.work_us_btn_link}`}>{`${pageDetail.work_us_btn_text}`}</Link>
                </button>
              </div>
              <br />
              <br />

              <p data-aos="fade-right" data-aos-delay="500" className="News_letter-main">
                {`${pageDetail.newsletter_title}`}
              </p>
              <form action='https://forms.zohopublic.com.au/corporality/form/SubscribeNewslettersCorporality/formperma/h58Lc8-XG8Ll4jwIvKkFCFA_uwUgipzSLFZVfC_3lZs/htmlRecords/submit' name='form' method='POST' onSubmit='javascript:document.charset="UTF-8"; return zf_ValidateAndSubmit();' acceptCharset='UTF-8' encType='multipart/form-data' id='form'>
                <input type="hidden" name="zf_referrer_name" />
                <input type="hidden" name="zf_redirect_url" />
                <input type="hidden" name="zc_gad" />
                <div data-aos="fade-right" data-aos-delay="2000" className="Text_newsletter_email d-flex  align-items-center">
                  <input fieldtype='9' type="text" className="emailinput" maxLength="255"
                    name="Email" checktype="c5" placeholder="Enter your Email" onFocus={(e) => e.target.placeholder = ""} onBlur={(e) => e.target.placeholder = "Enter your Email"} />
                  <span>
                    <button className="subscribe">Subscribe</button>
                  </span>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6 newsLetter_image_section">
            <img src={growmore} alt="growmore" className="growmore_newsletter" />
            <img src={learnmore} alt="learnmore" className="learnmore_newsletter" />
            <img src={logo} alt="logo" className="logo_newsletter" />

            <div className="Main_back_NewsLetter">
              <div className="Work-newsletter-polygon9">
                <div data-aos="fade-left" data-aos-delay="500">
                  {pageDetail.work_us_image && <img src={`${API_IMG_URL}pages/${pageDetail.work_us_image}`} alt={`${pageDetail.work_us_title}`} />}
                </div>
              </div>
              <img src={back} className="back_newsLetter" alt="back" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
