import React, { useState, useEffect } from 'react'
import './PrivacyPolicy.css'
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../config'
import { Helmet } from "react-helmet";

function PrivacyPolicy() {

  const page_slug = 'privacy-policy';

  const [pageDetail, setPageDetail] = useState([]);

  useEffect(() => {
    getPageDetail()
  }, []);

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
        <link rel="canonical" href={`${BASE_URL}/privacy-policy/`} />
      </Helmet>

      {
        pageDetail.detail ?
          <div className="privacy-policy-section">
            <img src={`${BASE_URL}/img/PrivacyPolicy/rec-1.png`} alt="Rec 1" className="rec-1" />
            <img src={`${BASE_URL}/img/PrivacyPolicy/rec-2.png`} alt="Rec 2" className="rec-2" />
            <img src={`${BASE_URL}/img/PrivacyPolicy/rec-3.png`} alt="Rec 3" className="rec-3" />
            <img src={`${BASE_URL}/img/PrivacyPolicy/rec-4.png`} alt="Rec 4" className="rec-4" />

            <img src={`${BASE_URL}/img/PrivacyPolicy/vector.png`} alt="vector" className="vector" />
            <img src={`${BASE_URL}/img/PrivacyPolicy/bottom-vector.png`} alt="bottom-vector" className="bottom-vector" />

            <div className="container-lg">
              <div className="row privacy-policy-row">
                <div className="col-lg-12 px-lg-0 privacy-policy-col">
                  <div className="row pp-heading-row">
                    <div className="col-lg-8">
                      <div className="pp-heading-content">
                        <h1>{`${pageDetail.detail.privacy_policy_title}`}</h1>

                        <div dangerouslySetInnerHTML={{ __html: pageDetail.detail.privacy_policy_description }}></div>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="pp-heading-img">
                        {pageDetail.detail.privacy_policy_image && <img src={`${API_IMG_URL}pages/${pageDetail.detail.privacy_policy_image}`} alt={`${pageDetail.detail.privacy_policy_title}`} />}
                      </div>
                    </div>
                  </div>

                  <div className="pp-line"></div>

                  <div className="row pp-content-row">
                    <div className="col-md-12">
                      <div className="pp-content" dangerouslySetInnerHTML={{ __html: pageDetail.detail.privacy_policy_content }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          : null
      }
    </>
  )
}

export default PrivacyPolicy