import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./BrandFirst.css";
import { useNavigate } from "react-router";
import brandposition_background_lines from "./images/brandposition_background_lines.png";
import brandposition_bottom_rect from "./images/brandposition_bottom_rect.png";
import brandposition_call from "./images/brandposition_call.png";
import brandposition_center_diamond from "./images/brandposition_center_diamond.png";
import brandposition_companyimage from "./images/brandposition_companyimage.png";
import brandposition_customer_loyalty from "./images/brandposition_customer_loyalty.png";
import brandposition_fb from "./images/brandposition_fb.png";
import brandposition_ig from "./images/brandposition_ig.png";
import brandposition_linkdin from "./images/brandposition_linkdin.png";
import brandposition_omni from "./images/brandposition_omni.png";
import brandposition_pinterest from "./images/brandposition_pinterest.png";
import brandposition_relatable from "./images/brandposition_relatable.png";
import brandposition_right_bg from "./images/brandposition_right_bg.png";
import brandposition_right_twice_rect from "./images/brandposition_right_twice_rect.png";
import brandposition_top_rect from "./images/brandposition_top_rect.png";
import brandposition_twitter from "./images/brandposition_twitter.png";
import brandposition_yt from "./images/brandposition_yt.png";

function BrandFirst() {
  const navigate = useNavigate();
  useEffect(() => {
   
    Aos.init();
    Aos.init({ disable: "mobile" });
  });
  return (
    <div className="brandposition_background_parent">
      <div className="brandposition_first_socialicons">
        <div className="brandposition_banner_facebook">
          <a href="https://www.facebook.com/CorporalityG" target="_blank">
            <img src={brandposition_fb} alt="facebook" />
          </a>
        </div>
        <div className="brandposition_banner_twitter">
          <a href="https://twitter.com/corporalityg" target="_blank">
            <img src={brandposition_twitter} alt="twitter" />
          </a>
        </div>
        <div className="brandposition_banner_instagram">
          <a href="https://www.instagram.com/corporalityg" target="_blank">
            <img src={brandposition_ig} alt="instagram" />
          </a>
        </div>
        <div className="brandposition_banner_linkedin">
          <a
            href="https://www.linkedin.com/company/corporality"
            target="_blank"
          >
            <img src={brandposition_linkdin} alt="linkedin" />
          </a>
        </div>
        <div className="brandposition_banner_pinterest">
          <a href="https://in.pinterest.com/CorporalityG" target="_blank">
            <img src={brandposition_pinterest} alt="pinterest" />
          </a>
        </div>
        <div className="brandposition_banner_youtube">
          <a
            href="https://www.youtube.com/channel/UC4EISt8kHI4zzpmbIBMIBbg"
            target="_blank"
          >
            <img src={brandposition_yt} alt="youtube" />
          </a>
        </div>
      </div>
      <div className="brandposition_banner_call" onClick={() => window.open("tel: +61 2 83794089", "_self")}>
        <img src={brandposition_call} alt="call" className="img-fluid" />
      </div>
      <div className="container">
        <div className="brandposition_main_container">
          <div className="brandposition_first_textside">
            <div className="brandposition_top_rectangle">
              <img src={brandposition_top_rect} alt="top_rect" />
            </div>
            <div className="brandposition_first_textside_heading" data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000">
              GROWING UP IS AN ADVENTURE
              </div>
            <div className="brandposition_first_textside_description" data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500">

             <h3 className="heading-h3">We bring the power of Corporality Signature Product to help you grow</h3>
                We deliver comprehensive branding and marketing solutions for small to medium-sized businesses.
Every day, we bring our experience, knowledge, and expertise to help you achieve your vision. We dig, we hunt, we conquer. We work unceasingly to nurture brand positioning for our clients.

            </div>

            <div className="schedule-btn" onClick={() => window.open("https://zohoadmin-corporality.zohobookings.com.au/#/customer/discoverycall", "_blank")}>Schedule a time</div>
          </div>
          <div className="brandposition_first_imageside">
            <div className="brandposition_first_backgroundline">
              <img
                src={brandposition_background_lines}
                alt="lines"
                className="background_line_img"
              />
              <div className="brandposition_companyimage" data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="3000">
                <img src={brandposition_companyimage} alt="companyimage" />
              </div>
              <div className="brandposition_customerloyalty" data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="1500">
                <img src={brandposition_customer_loyalty} alt="customer_loyalty" />
              </div>
              <div className="brandposition_relatable" data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="2000">
                <img src={brandposition_relatable} alt="relatable" />
              </div>
              <div className="brandposition_omni" data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="1000">
                <img src={brandposition_omni} alt="omni" />
              </div>
              <div className="brandposition_center_diamond" data-aos="fade-up"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="2000">
                <img src={brandposition_center_diamond} alt="diamond" />
              </div>
              <div className="brandposition_bottom_rect">
                <img src={brandposition_bottom_rect} alt="bottom_rect" />
              </div>
              <div className="brandposition_imagetop_rect">
                <img src={brandposition_right_twice_rect} alt="twice_rect" />
              </div>
              <div className="brandposition_imagebottom_rect">
                <img src={brandposition_right_twice_rect} alt="twice_rect" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrandFirst;
