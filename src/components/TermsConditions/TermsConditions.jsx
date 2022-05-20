import React from 'react'
import './TermsConditions.css'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import { BASE_URL } from '../../config'
import MetaTags from 'react-meta-tags';

function TermsConditions() {
  return (
    <>
      <MetaTags>
        <title>{`Terms and Conditions | Corporality`}</title>
        <meta name="description" content={`In using this website you are deemed to have read and agreed to the following terms and conditions. Please read carefully.`} />
      </MetaTags>

      <div className="terms-conditions-section">
        <img src={`${BASE_URL}/img/TermsConditions/rec-1.png`} alt="Rec 1" className="rec-1" />
        <img src={`${BASE_URL}/img/TermsConditions/rec-2.png`} alt="Rec 2" className="rec-2" />
        <img src={`${BASE_URL}/img/TermsConditions/rec-3.png`} alt="Rec 3" className="rec-3" />
        <img src={`${BASE_URL}/img/TermsConditions/rec-4.png`} alt="Rec 4" className="rec-4" />

        <img src={`${BASE_URL}/img/TermsConditions/vector.png`} alt="vector" className="vector" />
        <img src={`${BASE_URL}/img/TermsConditions/bottom-vector.png`} alt="bottom-vector" className="bottom-vector" />

        <div className="container">
          <div className="row terms-conditions-row">
            <div className="col-md-12 px-0">
              <div className="terms-conditions-heading">
                <h1>Terms and Conditions</h1>
                <div className="terms-conditions-modified">
                  <span className="modified-label">Last modified</span>
                  <span className="modified-date">March 31, 2022</span>
                </div>
              </div>

              <div className="terms-conditions-tab-main">
                <Tab.Container id="terms-conditions-tabs" defaultActiveKey="terms-conditions">
                  <div className="row">
                    <div className="col-md-3">
                      <Nav variant="tabs" className="flex-column tc-tab-nav">
                        <Nav.Link eventKey="terms-conditions">Website Terms and Conditions</Nav.Link>
                        <Nav.Link eventKey="confidentiality">Confidentiality</Nav.Link>
                        <Nav.Link eventKey="disclaimer">Disclaimer</Nav.Link>
                        <Nav.Link eventKey="payment">Payment</Nav.Link>
                        <Nav.Link eventKey="agreements">Termination of Agreements</Nav.Link>
                        <Nav.Link eventKey="force-majeure">Force Majeure</Nav.Link>
                        <Nav.Link eventKey="general">General</Nav.Link>
                      </Nav>
                    </div>

                    <div className="col-md-9">
                      <Tab.Content>
                        <Tab.Pane eventKey="terms-conditions" className="tc-tab-content">
                          <h4>In using this website you are deemed to have read and agreed to the following terms and conditions:</h4>
                          <p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and any or all Agreements:</p>
                          <ul>
                            <li>“Client”, “You” and “Your” refers to you, the person accessing this website and accepting the Corporality Global website terms and conditions.</li>
                            <li>“The Company”, “Ourselves”, “We” and “Us”, refers to our Company, Corporality Global.</li>
                            <li>“Party”, “Parties”, or “Us”, refers to both the Client and ourselves, or either the Client or ourselves.</li>
                            <li>All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner, whether by formal meetings of a fixed duration, or any other means, for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services/products, in accordance with and subject to, prevailing Australian Law/s.</li>
                            <li>All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner, whether by formal meetings of a fixed duration, or any other means, for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services/products, in accordance with and subject to, prevailing Australian Law/s.</li>
                          </ul>

                          <h5>Confidentiality</h5>
                          <p>We are registered under the Privacy Act 1988 and as such, any information concerning the Client and their respective non-personal identification information may be passed to third parties. However, personal identification information is regardedl.</p>
                        </Tab.Pane>

                        <Tab.Pane eventKey="confidentiality" className="tc-tab-content">
                          <h5>Confidentiality</h5>
                          <p>We are registered under the Privacy Act 1988 and as such, any information concerning the Client and their respective non-personal identification information may be passed to third parties. However, personal identification information is regarded as confidential and therefore will not be divulged to any third party, other than our business partners working with us, if legally required to do so to the appropriate authorities. Clients have the right to request sight of, and copies of any and all Client Records we keep, on the proviso that we are given reasonable notice of such a request. Clients are requested to retain copies of any documents issued in relation to the provision of our services. Where appropriate, we shall issue Clients with appropriate written information, handouts or copies of records as part of an agreed contract, for the benefit of both parties. We will not sell, share, or rent your personal information to any third party or use your e-mail address for unsolicited mail. Any emails sent by this Company will only be in connection with the provision of agreed services and products.</p>
                        </Tab.Pane>

                        <Tab.Pane eventKey="disclaimer" className="tc-tab-content">
                          <h5>Disclaimer</h5>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, nunc sed donec sapien condimentum porta. Eget in nullam pharetra velit. Interdum integer turpis hac condimentum nam. In libero pulvinar nisi ullamcorper commodo sagittis massa sem. Tincidunt rhoncus sed lectus sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, nunc sed donec sapien condimentum porta. Eget in nullam pharetra velit. Interdum integer turpis hac condimentum nam. In libero pulvinar nisi ullamcorper commodo sagittis massa sem. Tincidunt rhoncus sed lectus sed.</p>
                        </Tab.Pane>

                        <Tab.Pane eventKey="payment" className="tc-tab-content">
                          <h5>Payment</h5>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, nunc sed donec sapien condimentum porta. Eget in nullam pharetra velit. Interdum integer turpis hac condimentum nam. In libero pulvinar nisi ullamcorper commodo sagittis massa sem. Tincidunt rhoncus sed lectus sed.</p>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, nunc sed donec sapien condimentum porta. Eget in nullam pharetra velit. Interdum integer turpis hac condimentum nam. In libero pulvinar nisi ullamcorper commodo sagittis massa sem. Tincidunt rhoncus sed lectus sed.</p>
                        </Tab.Pane>

                        <Tab.Pane eventKey="agreements" className="tc-tab-content">
                          <h5>Termination of Agreements</h5>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, nunc sed donec sapien condimentum porta. Eget in nullam pharetra velit. Interdum integer turpis hac condimentum nam. In libero pulvinar nisi ullamcorper commodo sagittis massa sem. Tincidunt rhoncus sed lectus sed.</p>
                          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                        </Tab.Pane>

                        <Tab.Pane eventKey="force-majeure" className="tc-tab-content">
                          <h5>Force Majeure</h5>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </Tab.Pane>

                        <Tab.Pane eventKey="general" className="tc-tab-content">
                          <h5>General</h5>
                          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
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
    </>
  )
}

export default TermsConditions