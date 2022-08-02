import React from 'react'
import { API_IMG_URL } from '../../../config';
import "./OurIniatives.css"

const OurIniatives = (pageDetail) => {
  return (
    <div className="our-iniatives-container">
      {
        pageDetail ?
          <div className="container-lg">
            <div className="row">
              <div className="col-md-12">
                <div className="iniatives-heading" data-aos="fade-down">{`${pageDetail.initiatives_heading}`}</div>
              </div>
            </div>

            <div className="row our-iniatives-grid-row">
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 mb-xs-20 p-0 our-iniatives-grid">
                <a href={`${pageDetail.initiatives_1_link}`} target={`_blank`} title={`${pageDetail.initiatives_1_title}`}>
                  <figure className="our-iniatives-grid-img-effect">
                    {pageDetail.initiatives_1_image && <img src={`${API_IMG_URL}pages/${pageDetail.initiatives_1_image}`} alt={`${pageDetail.initiatives_1_title}`} className="our-iniatives-grid-img" />}
                    <div className="bottom-gradient-do_more"></div>
                    <figcaption>
                      <h2 className="our-iniatives-grid-title">{`${pageDetail.initiatives_1_title}`}</h2>
                      <div className="our-iniatives-grid-desc">
                        <p>{`${pageDetail.initiatives_1_description}`}</p>
                      </div>
                    </figcaption>
                  </figure>
                </a>
              </div>

              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 mb-xs-20 our-iniatives-grid">
                <div className="row">
                  <div className="col-sm-6 p-0">
                    <a href={`${pageDetail.initiatives_2_link}`} target={`_blank`} title={`${pageDetail.initiatives_2_title}`}>
                      <figure className="our-iniatives-grid-img-effect">
                        {pageDetail.initiatives_2_image && <img src={`${API_IMG_URL}pages/${pageDetail.initiatives_2_image}`} alt={`${pageDetail.initiatives_2_title}`} className="our-iniatives-grid-img" />}
                        <div className="bottom-gradient-do_more"></div>
                        <figcaption>
                          <h2 className="our-iniatives-grid-title">{`${pageDetail.initiatives_2_title}`}</h2>
                          <div className="our-iniatives-grid-desc">
                            <p>{`${pageDetail.initiatives_2_description}`}</p>
                          </div>
                        </figcaption>
                      </figure>
                    </a>
                  </div>

                  <div className="col-sm-6 p-0">
                    <a href={`${pageDetail.initiatives_3_link}`} target={`_blank`} title={`${pageDetail.initiatives_3_title}`}>
                      <figure className="our-iniatives-grid-img-effect">
                        {pageDetail.initiatives_3_image && <img src={`${API_IMG_URL}pages/${pageDetail.initiatives_3_image}`} alt={`${pageDetail.initiatives_3_title}`} className="our-iniatives-grid-img" />}
                        <div className="bottom-gradient-do_more"></div>
                        <figcaption>
                          <h2 className="our-iniatives-grid-title">{`${pageDetail.initiatives_3_title}`}</h2>
                          <div className="our-iniatives-grid-desc">
                            <p>{`${pageDetail.initiatives_3_description}`}</p>
                          </div>
                        </figcaption>
                      </figure>
                    </a>
                  </div>

                  <div className="col-sm-6 p-0">
                    <a href={`${pageDetail.initiatives_4_link}`} target={`_blank`} title={`${pageDetail.initiatives_4_title}`}>
                      <figure className="our-iniatives-grid-img-effect">
                        {pageDetail.initiatives_4_image && <img src={`${API_IMG_URL}pages/${pageDetail.initiatives_4_image}`} alt={`${pageDetail.initiatives_4_title}`} className="our-iniatives-grid-img" />}
                        <div className="bottom-gradient-do_more"></div>
                        <figcaption>
                          <h2 className="our-iniatives-grid-title">{`${pageDetail.initiatives_4_title}`}</h2>
                          <div className="our-iniatives-grid-desc">
                            <p>{`${pageDetail.initiatives_4_description}`}</p>
                          </div>
                        </figcaption>
                      </figure>
                    </a>
                  </div>

                  <div className="col-sm-6 p-0">
                    <a href={`${pageDetail.initiatives_5_link}`} target={`_blank`} title={`${pageDetail.initiatives_5_title}`}>
                      <figure className="our-iniatives-grid-img-effect">
                        {pageDetail.initiatives_5_image && <img src={`${API_IMG_URL}pages/${pageDetail.initiatives_5_image}`} alt={`${pageDetail.initiatives_5_title}`} className="our-iniatives-grid-img" />}
                        <div className="bottom-gradient-do_more"></div>
                        <figcaption>
                          <h2 className="our-iniatives-grid-title">{`${pageDetail.initiatives_5_title}`}</h2>
                          <div className="our-iniatives-grid-desc">
                            <p>{`${pageDetail.initiatives_5_description}`}</p>
                          </div>
                        </figcaption>
                      </figure>
                    </a>
                  </div>
                </div>
              </div>

            </div>

          </div>
          : null
      }
    </div>
  )
}

export default OurIniatives
