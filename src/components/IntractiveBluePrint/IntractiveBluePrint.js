import React, { useState, useEffect } from "react";
import './IntractiveBluePrint.css'
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../config'
import { ServicesAskQuote } from "../ServicesAskQuote/ServicesAskQuote";
import AOS from "aos";
import WriteToUsModal from "./components/WriteToUsModal";
import ServicesClients from "../ServicesClients/ServicesClients";
import ServicesInsights from "../ServicesInsights/ServicesInsights";
import { Helmet } from "react-helmet";

function IntractiveBluePrint() {

  const page_slug = 'interactive-blueprint';

  const [pageDetail, setPageDetail] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });

    getPageDetail()
  }, []);

  const [show, setShow] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = (modalId) => {
    setShow(modalId);
  }

  async function getPageDetail() {
    let result = await fetch(`${API_BASE_URL}/page-detail/${page_slug}`);
    result = await result.json();
    setPageDetail(result);
  }

  return (
    <>
      <Helmet>
        {pageDetail.meta_title && <title>{`${pageDetail.meta_title}`}</title>}
        {pageDetail.meta_description && <meta name="description" content={`${pageDetail.meta_description}`} />}
        {pageDetail.meta_keywords && <meta name="keywords" content={pageDetail.meta_keywords} />}
        <link rel="canonical" href={`${BASE_URL}/interactive-blueprint/`} />
      </Helmet>

      {
        pageDetail.detail ?
          <>
            <div className="ibp-banner-section">
              <img src={`${BASE_URL}/img/IntractiveBluePrint/banner-rec-1.png`} alt="Rec 1" className="ibp-b-rec-1" />
              <img src={`${BASE_URL}/img/IntractiveBluePrint/banner-rec-2.png`} alt="Rec 2" className="ibp-b-rec-2" />

              <div className="container-lg">
                <div className="row ibp-banner-row">
                  <div className="col-lg-7">
                    <div className="ibp-banner-content">
                      <div className="ibp-banner-title" data-aos="fade-up">{`${pageDetail.detail.banner_heading}`}</div>
                      <div data-aos="fade-up">
                        <h1>{`${pageDetail.detail.banner_title}`}</h1>
                      </div>
                      <div className="ibp-banner-subtitle" data-aos="fade-up" data-aos-delay="300">{`${pageDetail.detail.banner_subtitle}`}</div>
                      <div className="ibp-banner-desc" data-aos="fade-up" data-aos-delay="300">
                        <p>{`${pageDetail.detail.banner_description}`}</p>
                      </div>
                      <div className="ibp-banner-btn" data-aos="fade-up" data-aos-delay="500">
                        <a href={`${pageDetail.detail.banner_btn_link}`} target="_blank">{`${pageDetail.detail.banner_btn_text}`}</a>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-5">
                    <div className="ibp-banner" data-aos="fade-left">
                      <img src={`${API_IMG_URL}pages/${pageDetail.detail.banner_image}`} alt={`${pageDetail.detail.banner_heading}`} className="ibp-banner-img" />

                      <img src={`${BASE_URL}/img/IntractiveBluePrint/banner-rec-dots.png`} alt="Rec Dot" className="ibp-b-rec-dots" data-aos="fade-left" data-aos-delay="300" />
                      <img src={`${BASE_URL}/img/IntractiveBluePrint/banner-vec-1.png`} alt="Vector" className="ibp-b-vector" data-aos="fade-left" data-aos-delay="400" />
                      <img src={`${BASE_URL}/img/IntractiveBluePrint/banner-vec-2.png`} alt="Vector 1" className="ibp-b-vector-1" data-aos="fade-left" data-aos-delay="500" />
                      <img src={`${BASE_URL}/img/IntractiveBluePrint/banner-rec-3.png`} alt="Rec 3" className="ibp-b-rec-3" data-aos="fade-left" data-aos-delay="500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="ibp-know-section">
              <img src={`${BASE_URL}/img/IntractiveBluePrint/know-rec-1.png`} alt="Rec 1" className="ibp-k-rec-1" />
              <img src={`${BASE_URL}/img/IntractiveBluePrint/know-rec-2.png`} alt="Rec 2" className="ibp-k-rec-2" />
              <img src={`${BASE_URL}/img/IntractiveBluePrint/know-rec-3.png`} alt="Rec 3" className="ibp-k-rec-3" />

              <div className="container-lg">
                <div className="row ibp-know-title-row">
                  <div className="col-lg-12">
                    <div className="ibp-kt-content" data-aos="zoom-in">
                      <h2>{`${pageDetail.detail.know_heading}`}</h2>
                    </div>
                  </div>
                </div>

                <div className="row ibp-know-content-row">
                  <div className="col-lg-6">
                    <div className="row ibp-k-boxes-row">
                      <div className="col-lg-5 col-md-3 col-sm-4 ibp-k-box-col">
                        <div className="ibp-k-box" data-aos="fade-up" data-aos-delay="300">
                          <div className="k-box-img">
                            <img src={`${API_IMG_URL}pages/${pageDetail.detail.know_item_1_image}`} alt={`${pageDetail.detail.know_item_1_title}`} className="k-box-img" />
                          </div>
                          <div className="k-box-title">{`${pageDetail.detail.know_item_1_title}`}</div>
                        </div>
                      </div>

                      <div className="col-lg-5 col-md-3 col-sm-4 ibp-k-box-col">
                        <div className="ibp-k-box" data-aos="fade-up" data-aos-delay="400">
                          <div className="k-box-img">
                            <img src={`${API_IMG_URL}pages/${pageDetail.detail.know_item_2_image}`} alt={`${pageDetail.detail.know_item_2_title}`} className="k-box-img" />
                          </div>
                          <div className="k-box-title">{`${pageDetail.detail.know_item_2_title}`}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="ibp-know-title" data-aos="fade-up" data-aos-delay="500">{`${pageDetail.detail.know_title}`}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="ibp-working-section">
              <div className="container-lg">
                <div className="row ibp-working-title-row">
                  <div className="col-lg-12 ibp-working-title-col">
                    <div className="ibp-wt-content">
                      <div data-aos="fade-up">
                        <h2>{`${pageDetail.detail.innovators_heading}`}</h2>
                      </div>
                      <div className="ibp-wt-desc" data-aos="fade-up" data-aos-delay="300">
                        <p>{`${pageDetail.detail.innovators_subheading}`}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row ibp-working-content-row">
                  <div className="col-lg-6 ibp-working-content-col">
                    <div className="ibp-wc-banner">
                      <img src={`${API_IMG_URL}pages/${pageDetail.detail.innovators_image}`} alt={`${pageDetail.detail.innovators_title}`} className="wc-b-img" data-aos="fade-right" />
                      <img src={`${BASE_URL}/img/IntractiveBluePrint/working-rec.png`} alt="working-rec" className="wc-b-rec" data-aos="fade-right" data-aos-delay="300" />

                      <img src={`${BASE_URL}/img/IntractiveBluePrint/working-vector.png`} alt="working-vector" className="wc-b-vec" data-aos="fade-right" data-aos-delay="500" />
                      <img src={`${BASE_URL}/img/IntractiveBluePrint/working-rec-2.png`} alt="working-rec-2" className="wc-b-rec-2" data-aos="zoom-in" />

                      <img src={`${BASE_URL}/img/IntractiveBluePrint/working-ellipse.png`} alt="working-ellipse" className="wc-b-ellipse" data-aos="fade-up" data-aos-delay="300" />
                      <img src={`${BASE_URL}/img/IntractiveBluePrint/working-vector-1.png`} alt="working-vector-1" className="wc-b-vec-1" data-aos="fade-up" data-aos-delay="400" />
                      <img src={`${BASE_URL}/img/IntractiveBluePrint/working-rec-1.png`} alt="working-rec-1" className="wc-b-rec-1" data-aos="fade-up" data-aos-delay="500" />

                      <div className="wc-b-write-box" data-aos="zoom-in-left" data-aos-delay="500">
                        <div className="bw-box-title">{`${pageDetail.detail.innovators_box_title_1}`}</div>
                        <div className="bw-box-title">{`${pageDetail.detail.innovators_box_title_2}`}</div>
                        <div className="bw-box-btn" onClick={() => handleShow('write')}>{`${pageDetail.detail.innovators_box_btn_text}`}</div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 ibp-working-content-col">
                    <div className="ibp-wc-desc">
                      <div data-aos="fade-up">
                        <h2>{`${pageDetail.detail.innovators_title}`}</h2>
                      </div>
                      <div data-aos="fade-up" data-aos-delay="300">
                        <p>{`${pageDetail.detail.innovators_subtitle}`}</p>
                      </div>
                      <ul data-aos="fade-up" data-aos-delay="500">
                        <li><img src={`${BASE_URL}/img/IntractiveBluePrint/list-icon.png`} alt="-" /> {`${pageDetail.detail.innovators_item_1_title}`}</li>
                        <li><img src={`${BASE_URL}/img/IntractiveBluePrint/list-icon.png`} alt="-" /> {`${pageDetail.detail.innovators_item_2_title}`}</li>
                        <li><img src={`${BASE_URL}/img/IntractiveBluePrint/list-icon.png`} alt="-" /> {`${pageDetail.detail.innovators_item_3_title}`}</li>
                        <li><img src={`${BASE_URL}/img/IntractiveBluePrint/list-icon.png`} alt="-" /> {`${pageDetail.detail.innovators_item_4_title}`}</li>
                        <li><img src={`${BASE_URL}/img/IntractiveBluePrint/list-icon.png`} alt="-" /> {`${pageDetail.detail.innovators_item_5_title}`}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <WriteToUsModal show={show} handleClose={handleClose} />
            </div>

            <div className="ibp-innovate-educate-section">
              <div className="container-lg">
                <div className="row ibp-innovate-educate-row">
                  <div className="col-lg-6">
                    <div className="ibp-ie-content">
                      <div data-aos="zoom-in">
                        <h2>{`${pageDetail.detail.innovate_educate_title}`}</h2>
                      </div>
                      <div data-aos="zoom-in-up" data-aos-delay="500">
                        <p>{`${pageDetail.detail.innovate_educate_description}`}</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="ibp-ie-banner">
                      <img src={`${API_IMG_URL}pages/${pageDetail.detail.innovate_educate_image}`} alt={`${pageDetail.detail.innovate_educate_title}`} className="ie-banner" data-aos="zoom-out" />
                      <img src={`${BASE_URL}/img/IntractiveBluePrint/ie-rec.png`} alt="ie-rec" className="ie-rec" data-aos="zoom-in-left" data-aos-delay="300" />
                      <img src={`${BASE_URL}/img/IntractiveBluePrint/ie-vector.png`} alt="ie-vector" className="ie-vector" data-aos="zoom-in-up" data-aos-delay="500" />
                      <img src={`${BASE_URL}/img/IntractiveBluePrint/ie-rec-1.png`} alt="ie-rec-1" className="ie-rec-1" data-aos="zoom-in" data-aos-delay="500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="ibp-strategy-solutions-section">
              <img src={`${BASE_URL}/img/IntractiveBluePrint/ss-ellipse.png`} alt="ss-ellipse" className="ss-ellipse" data-aos="fade-right" data-aos-delay="500" />
              <img src={`${BASE_URL}/img/IntractiveBluePrint/ss-vector.png`} alt="ss-vector" className="ss-vector" data-aos="fade-right" data-aos-delay="300" />
              <img src={`${BASE_URL}/img/IntractiveBluePrint/ss-rec.png`} alt="ss-rec" className="ss-rec" data-aos="fade-right" data-aos-delay="400" />

              <div className="container-lg">
                <div className="row ibp-strategy-solutions-row">
                  <div className="col-lg-12">
                    <div className="ibp-ss-content">
                      <div data-aos="fade-up">
                        <h2>{`${pageDetail.detail.strategy_solutions_title}`}</h2>
                      </div>
                      <div data-aos="fade-up" data-aos-delay="300">
                        <p>{`${pageDetail.detail.strategy_solutions_subtitle}`} </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
          : null
      }

      <ServicesClients />

      <ServicesInsights />

      <ServicesAskQuote
        action={`https://forms.zohopublic.com.au/corporality/form/AskQuoteInteractiveBluepritCorporality/formperma/rgqpcij8vhOVXCu2mCXDJaMS7Og47qjWKOsVioK_t4c/htmlRecords/submit`}
      />
    </>
  );
}

export default IntractiveBluePrint;
