import React, { useEffect } from "react";
import "../GlobalAIms/Global.css";
import aos from 'aos'
import circle from "../GlobalAIms/circle1.png";
import twitter from "../GlobalAIms/twitter.png";
import arrow from "../GlobalAIms/arrow.png";
import linkedin from "../GlobalAIms/linkedin.png";

const Global = (pageDetail) => {
  useEffect(() => {
    aos.init({ duration: 3000 });

  }, [])
  return (
    <div>
      {
        pageDetail ?
          <div className="container container-Global d-flex justify-content-center flex-column align-items-center">
            <div className="row image-under-text">
              <div data-aos="fade-down" data-aos-delay="500" className="Global-text-1">
                {`${pageDetail.author_title}`}
              </div>

            </div>
            <div className="row">
              <p data-aos="fade-down" data-aos-delay="1000" className="Global-text-2">{`${pageDetail.author_name}`}</p>
            </div>
            <div className="row">
              <p data-aos="fade-down" data-aos-delay="1000" className="Global-text-3">{`${pageDetail.author_designation}`}</p>
            </div>
            <div className="row d-flex justify-content-center  align-items-center">
              <div className="col">
                <a href={`${pageDetail.author_twitter_link}`} className="global_link">
                  <div data-aos="fade-right" data-aos-delay="1500" className="social_icons_Sustainable_growth d-flex justify-content-center align-items-center">
                    <div className="global_twitter_circle">
                      <img
                        src={circle}
                        alt="circle"
                        className="circle1_Sustaible_growth"
                      />
                      <div className="global_twitter_icon">
                        <img
                          src={twitter}
                          alt="twitter"
                          className="twitter_Sustaible_growth"
                        />
                      </div>
                    </div>
                    <div className="global_twitter_arrow">
                      <img
                        src={arrow}
                        alt="arrow"
                        className="arrow1_Sustaible_growth"
                      />
                    </div>
                    <div className="global_twitter_text">Twitter</div>
                  </div>
                </a>
              </div>
              <div className="col">
                <a className="global_link" href={`${pageDetail.author_linkedin_link}`}>
                  <div data-aos="fade-left" data-aos-delay="2000" className="social_icons2_Sustainable_growth d-flex justify-content-center align-items-center">
                    <div className="global_twitter_circle">
                      <img
                        src={circle}
                        alt="circle"
                        className="circle1_Sustaible_growth"
                      />
                      <div className="global_twitter_icon">
                        <img
                          src={linkedin}
                          alt="linkedin"
                          className="Linkedin_Sustaible_growth"
                        />
                      </div>
                    </div>
                    <div className="global_twitter_arrow">
                      <img
                        src={arrow}
                        alt="arrow"
                        className="arrow2_Sustaible_growth"
                      />
                    </div>
                    <div className="linkedin_text_SG">Linkedin</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          : null
      }
    </div>
  );
};

export default Global;
