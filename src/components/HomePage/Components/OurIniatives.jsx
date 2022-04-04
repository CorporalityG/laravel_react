import React, { useEffect, useState } from 'react'
import { API_BASE_URL, BASE_URL } from '../../../config';
import Carousel from 'react-grid-carousel'
import "./OurIniatives.css"

const OurIniatives = () => {
  return (
    <div className="our-iniatives-container">
      <div className="container-lg">
        <div className="row">
          <div className="col-md-12">
            <div className="iniatives-heading" data-aos="fade-down">Our Initiatives</div>
          </div>
        </div>

        <div className="row our-iniatives-grid-row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 mb-xs-20 p-0 our-iniatives-grid">
            <a title="Social Impact">
              <figure className="our-iniatives-grid-img-effect">
                <img src={BASE_URL + '/img/HomePage/Social-Impact1.png'} alt="Social Impact" className="our-iniatives-grid-img" />
                <div className="bottom-gradient-do_more"></div>
                <figcaption>
                  <h2 className="our-iniatives-grid-title">Corporality is embedding social impact into the core of its business</h2>
                  <div className="our-iniatives-grid-desc">
                    <p>By partnering with social enterprises, we accelerate and contribute for a better world. Our actions include a positive humanitarian and ecological sustainability impact..</p>
         
                  </div>
                </figcaption>
              </figure>
            </a>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 mb-xs-20 our-iniatives-grid">
            <div className="row">
              <div className="col-sm-6 p-0">
                <a title="Corporality Magazine">
                  <figure className="our-iniatives-grid-img-effect">
                    <img src={BASE_URL + '/img/HomePage/Corporality-Magazine1.png'} alt="Corporality Magazine" className="our-iniatives-grid-img" />
                    <div className="bottom-gradient-do_more"></div>
                    <figcaption>
                      <h2 className="our-iniatives-grid-title">Corporality Magazine</h2>
                      <div className="our-iniatives-grid-desc">
                        <p>Corporality Magazine keeps you up to date with the latest and greatest events taking place in the business world. Subscribe to never miss any updates!</p>
                      </div>
                    </figcaption>
                  </figure>
                </a>
              </div>

              <div className="col-sm-6 p-0">
                <a href="http://corporality.global/talk/" target={`_blank`} title="Corporality Talk">
                  <figure className="our-iniatives-grid-img-effect">
                  <img src={BASE_URL + '/img/HomePage/Corporality-Talk1.png'} alt="Corporality Talk" className="our-iniatives-grid-img" />
                    <div className="bottom-gradient-do_more"></div>
                    <figcaption>
                      <h2 className="our-iniatives-grid-title">Corporality Talk</h2>
                      <div className="our-iniatives-grid-desc">
                        <p>Corporality Talk provides a global platform for innovative ideas and revolutionary conversations. Become a member of Corporality Talk.</p>
                      </div>
                    </figcaption>
                  </figure>
                </a>
              </div>

              <div className="col-sm-6 p-0">
                <a href="https://corporality.global/club" target={`_blank`} title="Corporality Club">
                  <figure className="our-iniatives-grid-img-effect">
                  <img src={BASE_URL + '/img/HomePage/Corporality-Club1.png'} alt="Corporality Club" className="our-iniatives-grid-img" />
                    <div className="bottom-gradient-do_more"></div>
                    <figcaption>
                      <h2 className="our-iniatives-grid-title">Corporality Club</h2>
                      <div className="our-iniatives-grid-desc">
                        <p>Corporality Club brings a one-of-a-kind networking experience for chief executives. Become a member of Corporality Club today!</p>
                      </div>
                    </figcaption>
                  </figure>
                </a>
              </div>

              <div className="col-sm-6 p-0">
                <a href="https://techconsultants.global/" target={`_blank`} title="TechConsultants">
                  <figure className="our-iniatives-grid-img-effect">
                  <img src={BASE_URL + '/img/HomePage/Tech-Consultant1.png'} alt="TechConsultants" className="our-iniatives-grid-img" />
                    <div className="bottom-gradient-do_more"></div>
                    <figcaption>
                      <h2 className="our-iniatives-grid-title">TechConsultants</h2>
                      <div className="our-iniatives-grid-desc">
                        <p>TechConsultants facilitate valuable resources across the globe - our project staffing team sources exemplary candidates for suitable jobs. Contact us today.</p>
                      </div>
                    </figcaption>
                  </figure>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default OurIniatives
