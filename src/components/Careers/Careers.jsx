import React, { useEffect, useState } from 'react'
import './Careers.css'
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../config'
import Carousel from 'react-bootstrap/Carousel'
import { TestimonialItem } from './TestimonialItem'
import { Link } from 'react-router-dom'
import Accordion from 'react-bootstrap/Accordion'
import { ApplyNowPopUp } from './ApplyNowPopUp'
import { Helmet } from "react-helmet";

function Careers() {

  const page_slug = 'careers';

  const [pageDetail, setPageDetail] = useState([]);
  const [jobsData, setJobsData] = useState([]);
  const [testimonialsData, setTestimonialsData] = useState([]);

  useEffect(() => {
    getPageDetail()
    getJobsData()
    getTestimonialsData()
  }, []);

  async function getPageDetail() {
    let result = await fetch(`${API_BASE_URL}/page-detail/${page_slug}`);
    result = await result.json();
    setPageDetail(result);
  }

  async function getJobsData() {
    let result = await fetch(`${API_BASE_URL}/jobs`);
    result = await result.json();
    setJobsData(result);
  }

  async function getTestimonialsData() {
    let result = await fetch(`${API_BASE_URL}/testimonials`);
    result = await result.json();
    setTestimonialsData(result);
  }

  const [show, setShow] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = (modalId) => {
    setShow(modalId);
  }

  return (
    <>
      <Helmet>
        {pageDetail.meta_title && <title>{`${pageDetail.meta_title}`}</title>}
        {pageDetail.meta_description && <meta name="description" content={`${pageDetail.meta_description}`} />}
        {pageDetail.meta_keywords && <meta name="keywords" content={pageDetail.meta_keywords} />}
        <link rel="canonical" href={`${BASE_URL}/careers/`} />
      </Helmet>

      {
        pageDetail.detail ?
          <div className="career-banner-section">
            <img src={`${BASE_URL}/img/Careers/rec-1.png`} alt="Rec 1" className="rec-1" />
            <img src={`${BASE_URL}/img/Careers/rec-2.png`} alt="Rec 2" className="rec-2" />
            <img src={`${BASE_URL}/img/Careers/rec-3.png`} alt="Rec 3" className="rec-3" />
            <img src={`${BASE_URL}/img/Careers/rec-4.png`} alt="Rec 4" className="rec-4" />

            <div className="container-lg">
              <div className="row career-banner-content-row">
                <div className="col-lg-12">
                  <div className="career-banner-content">
                    <h1>{`${pageDetail.detail.banner_title}`}</h1>
                    <p>{`${pageDetail.detail.banner_description}`}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="career-banner-social-main">
              <div className="career-banner-social-icon-main">
                <div className="career-banner-social-icon" onClick={() => window.open("https://www.facebook.com/CorporalityG/")}>
                  <i className="fa fa-facebook-f"></i>
                </div>
                <div className="career-banner-social-icon" onClick={() => window.open("https://twitter.com/corporalityg/")}>
                  <i className="fa fa-twitter"></i>
                </div>
                <div className="career-banner-social-icon" onClick={() => window.open("https://www.instagram.com/corporalityg/")}>
                  <i className="fa fa-instagram"></i>
                </div>
                <div className="career-banner-social-icon" onClick={() => window.open("https://www.linkedin.com/company/corporalityg/")}>
                  <i className="fa fa-linkedin"></i>
                </div>
                <div className="career-banner-social-icon" onClick={() => window.open("https://in.pinterest.com/CorporalityG/_created/")}>
                  <i className="fa fa-pinterest"></i>
                </div>
                <div className="career-banner-social-icon" onClick={() => window.open("https://www.youtube.com/channel/UC4EISt8kHI4zzpmbIBMIBbg")}>
                  <i className="fa fa-youtube-play"></i>
                </div>
              </div>
            </div>

            <div className="career-banner-phone">
              <img src={`${BASE_URL}/img/Careers/phone.png`} alt="Phone" className="phone-icon" onClick={() => window.open("tel:61283794089", "_self")} />
              <img src={`${BASE_URL}/img/Careers/phone-rect.png`} alt="Phone Rect" className="phone-rect" />
            </div>

            <div className="career-banner-hiring">
              {pageDetail.detail.banner_image && <img src={`${API_IMG_URL}pages/${pageDetail.detail.banner_image}`} alt={`${pageDetail.detail.banner_title}`} className="hiring-img" />}
            </div>
          </div>
          : null
      }

      <div className="career-current-jobs-section">
        {
          jobsData && jobsData.length > 0 ?
            <div className="container-lg">
              <div className="row">
                <div className="col-lg-12">
                  <Accordion className="cc-jobs-accordion-main">
                    {
                      jobsData.map((item, index) =>
                        <Accordion.Item eventKey={`${index}`}>
                          <Accordion.Header>
                            <div className="cc-jobs-heading">
                              {item.icon && <img src={`${API_IMG_URL}/${item.icon}`} alt={`${item.title}`} className="cc-j-h-icon" />}
                              <span>{`${item.title}`}</span>
                              <div className="cc-jobs-apply" onClick={() => handleShow('apply')}>Apply now</div>
                            </div>
                          </Accordion.Header>
                          <Accordion.Body>
                            <div className="sb-content" dangerouslySetInnerHTML={{ __html: item.description }}></div>

                            <div className="cc-jobs-apply" onClick={() => handleShow('apply')}>Apply now</div>
                          </Accordion.Body>
                        </Accordion.Item>
                      )
                    }
                  </Accordion>

                  <ApplyNowPopUp show={show} handleClose={handleClose} />
                </div>
              </div>
            </div>
            : null
        }
      </div>

      {
        pageDetail.detail ?
          <div className="career-opportunities-section">
            <div className="container-lg">
              <div className="row career-opportunities-row">
                <div className="col-lg-6">
                  <div className="co-content">
                    <h2>{`${pageDetail.detail.opportunities_title}`}</h2>
                    <p>{`${pageDetail.detail.opportunities_description}`}</p>
                    <Link to={`/${pageDetail.detail.opportunities_btn_link}`} className="co-btn">{`${pageDetail.detail.opportunities_btn_text}`}</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          : null
      }

      <div className="career-testimonial-section">
        <img src={`${BASE_URL}/img/Careers/testimonial-rec.png`} alt="testimonial rec" className="testimonial-rec" />

        <div className="container-lg">
          <div className="row career-testimonial-title-row">
            <div className="col-lg-12">
              <div className="career-testimonial-title">
                <h2>Employee Testimonial</h2>
              </div>
            </div>
          </div>

          {
            testimonialsData && testimonialsData.length > 0 ?
              <div className="row career-testimonial-row">
                <div className="col-lg-12">
                  <Carousel indicators={false} interval={null} prevIcon={<div className="career-t-arrow career-t-arrow-prev"><img src={`${BASE_URL}/img/Careers/prev-arrow.png`} alt="<" /></div>} nextIcon={<div className="career-t-arrow career-t-arrow-next"><img src={`${BASE_URL}/img/Careers/next-arrow.png`} alt=">" /></div>}>
                    {
                      testimonialsData.map((item, index) =>
                        <Carousel.Item>
                          <TestimonialItem
                            type={(index + 1) % 2 === 0 ? 'even' : 'odd'}
                            thumbnail={item.avtar && `${API_IMG_URL}/${item.avtar}`}
                            name={`${item.full_name}`}
                            designation={`${item.designation}`}
                            content={`<p>${item.description}</p>`}
                          />
                        </Carousel.Item>
                      )
                    }
                  </Carousel>
                </div>
              </div>
              : null
          }
        </div>
      </div>
    </>
  )
}

export default Careers