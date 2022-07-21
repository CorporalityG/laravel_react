import React, { useState, useEffect } from 'react'
import './TermsConditions.css'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import { API_BASE_URL, BASE_URL } from '../../config'
import { Helmet } from "react-helmet";

function TermsConditions() {

  const page_slug = 'terms-and-conditions';

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
        <link rel="canonical" href={`${BASE_URL}/terms-and-conditions/`} />
      </Helmet>

      {
        pageDetail.detail ?
          <div className="terms-conditions-section">
            <img src={`${BASE_URL}/img/TermsConditions/rec-1.png`} alt="Rec 1" className="rec-1" />
            <img src={`${BASE_URL}/img/TermsConditions/rec-2.png`} alt="Rec 2" className="rec-2" />
            <img src={`${BASE_URL}/img/TermsConditions/rec-3.png`} alt="Rec 3" className="rec-3" />
            <img src={`${BASE_URL}/img/TermsConditions/rec-4.png`} alt="Rec 4" className="rec-4" />

            <img src={`${BASE_URL}/img/TermsConditions/vector.png`} alt="vector" className="vector" />
            <img src={`${BASE_URL}/img/TermsConditions/bottom-vector.png`} alt="bottom-vector" className="bottom-vector" />

            <div className="container-lg">
              <div className="row terms-conditions-row">
                <div className="col-lg-12 px-0 terms-conditions-col">
                  <div className="terms-conditions-heading">
                    <h1>{`${pageDetail.detail.terms_conditions_title}`}</h1>
                    <div className="terms-conditions-modified">
                      <span className="modified-label">Last modified</span>
                      <span className="modified-date">{`${pageDetail.detail.terms_conditions_modified_date}`}</span>
                    </div>
                  </div>

                  <div className="terms-conditions-tab-main">
                    <Tab.Container id="terms-conditions-tabs" defaultActiveKey="terms-conditions">
                      <div className="row">
                        <div className="col-lg-3 col-md-4 terms-conditions-tab-nav">
                          <Nav variant="tabs" className="tc-tab-nav">
                            <Nav.Link eventKey="terms-conditions">{`${pageDetail.detail.terms_use_title}`}</Nav.Link>
                            <Nav.Link eventKey="confidentiality">{`${pageDetail.detail.site_access_title}`}</Nav.Link>
                            <Nav.Link eventKey="disclaimer">{`${pageDetail.detail.hyperlink_title}`}</Nav.Link>
                            <Nav.Link eventKey="payment">{`${pageDetail.detail.copyrights_title}`}</Nav.Link>
                            <Nav.Link eventKey="agreements">{`${pageDetail.detail.trademarks_title}`}</Nav.Link>
                            <Nav.Link eventKey="force-majeure">{`${pageDetail.detail.no_services_title}`}</Nav.Link>
                            <Nav.Link eventKey="general">{`${pageDetail.detail.limitation_title}`}</Nav.Link>
                            <Nav.Link eventKey="indemnification">{`${pageDetail.detail.indemnification_title}`}</Nav.Link>
                            <Nav.Link eventKey="enforcement">{`${pageDetail.detail.enforcement_title}`}</Nav.Link>
                            <Nav.Link eventKey="entire">{`${pageDetail.detail.entire_agreement_title}`}</Nav.Link>
                          </Nav>
                        </div>

                        <div className="col-lg-9 col-md-8 terms-conditions-tab-content">
                          <Tab.Content>
                            <Tab.Pane eventKey="terms-conditions" className="tc-tab-content">
                              <div dangerouslySetInnerHTML={{ __html: pageDetail.detail.terms_use_description }}></div>
                            </Tab.Pane>

                            <Tab.Pane eventKey="confidentiality" className="tc-tab-content">
                              <h5>{`${pageDetail.detail.site_access_title}`}</h5>

                              <div dangerouslySetInnerHTML={{ __html: pageDetail.detail.site_access_description }}></div>
                            </Tab.Pane>

                            <Tab.Pane eventKey="disclaimer" className="tc-tab-content">
                              <h5>{`${pageDetail.detail.hyperlink_title}`}</h5>

                              <div dangerouslySetInnerHTML={{ __html: pageDetail.detail.hyperlink_description }}></div>
                            </Tab.Pane>

                            <Tab.Pane eventKey="payment" className="tc-tab-content">
                              <h5>{`${pageDetail.detail.copyrights_title}`}</h5>

                              <div dangerouslySetInnerHTML={{ __html: pageDetail.detail.copyrights_description }}></div>
                            </Tab.Pane>

                            <Tab.Pane eventKey="agreements" className="tc-tab-content">
                              <h5>{`${pageDetail.detail.trademarks_title}`}</h5>

                              <div dangerouslySetInnerHTML={{ __html: pageDetail.detail.trademarks_description }}></div>
                            </Tab.Pane>

                            <Tab.Pane eventKey="force-majeure" className="tc-tab-content">
                              <h5>{`${pageDetail.detail.no_services_title}`}</h5>

                              <div dangerouslySetInnerHTML={{ __html: pageDetail.detail.no_services_description }}></div>
                            </Tab.Pane>

                            <Tab.Pane eventKey="general" className="tc-tab-content">
                              <h5>{`${pageDetail.detail.limitation_title}`}</h5>

                              <div dangerouslySetInnerHTML={{ __html: pageDetail.detail.limitation_description }}></div>
                            </Tab.Pane>

                            <Tab.Pane eventKey="indemnification" className="tc-tab-content">
                              <h5>{`${pageDetail.detail.indemnification_title}`}</h5>

                              <div dangerouslySetInnerHTML={{ __html: pageDetail.detail.indemnification_description }}></div>
                            </Tab.Pane>

                            <Tab.Pane eventKey="enforcement" className="tc-tab-content">
                              <h5>{`${pageDetail.detail.enforcement_title}`}</h5>

                              <div dangerouslySetInnerHTML={{ __html: pageDetail.detail.enforcement_description }}></div>
                            </Tab.Pane>

                            <Tab.Pane eventKey="entire" className="tc-tab-content">
                              <h5>{`${pageDetail.detail.entire_agreement_title}`}</h5>

                              <div dangerouslySetInnerHTML={{ __html: pageDetail.detail.entire_agreement_description }}></div>
                            </Tab.Pane>
                          </Tab.Content>
                        </div>
                      </div>
                    </Tab.Container>
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

export default TermsConditions