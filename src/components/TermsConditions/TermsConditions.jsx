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
        <link rel="canonical" href={`${BASE_URL}/terms-and-conditions/`} />
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
                        <Nav.Link eventKey="terms-conditions">Terms of Use</Nav.Link>
                        <Nav.Link eventKey="confidentiality">Site Access and Usage</Nav.Link>
                        <Nav.Link eventKey="disclaimer">Hyperlink</Nav.Link>
                        <Nav.Link eventKey="payment">Copyrights and Use of Site Content</Nav.Link>
                        <Nav.Link eventKey="agreements">Trademarks</Nav.Link>
                        <Nav.Link eventKey="force-majeure">No Services, Endorsement or Professional Consultation</Nav.Link>
                        <Nav.Link eventKey="general">Limitation of Liability</Nav.Link>
                        <Nav.Link eventKey="indemnification">Indemnification</Nav.Link>
                        <Nav.Link eventKey="enforcement">Enforcement of Terms and Conditions</Nav.Link>
                        <Nav.Link eventKey="entire">Entire Agreement</Nav.Link>
                      </Nav>
                    </div>

                    <div className="col-md-9">
                      <Tab.Content>
                        <Tab.Pane eventKey="terms-conditions" className="tc-tab-content">
                          <p>The following terms and conditions (“Terms and Conditions”) constitute a binding legal agreement between you and Corporality Global ("Corporality") regarding your usage of the website and its Content (as defined below) located at corporality.global (the “Site”).</p>
                          
                          <p>THE FOLLOWING TERMS AND CONDITIONS ARE TO GUIDE USERS WHO WILL BE ACCESSING, BROWSING, REVIEWING, OR USING THE SITE. WHEN YOU DO SO, YOU MAY AGREE TO BE BOUND BY THESE TERMS. IF YOU DO NOT, YOU MAY NOT ACCESS OR USE OUR SERVICES.</p>
                          
                          <p>Corporality's Site may contain additional proprietary notices and copyright information, therefore requiring users to respect and follow these terms. Information on the Site may contain technical inaccuracies or typographical errors. Corporality may revise, amend, modify, or delete portions of these Terms and Conditions. Your continued use of the Site requires your acceptance of any revisions, amendments, modifications or deletions to those Terms and Conditions.</p>
                        </Tab.Pane>

                        <Tab.Pane eventKey="confidentiality" className="tc-tab-content">
                          <h5>Site Access and Usage</h5>
                          <p>Subject to your complete and ongoing compliance with these Terms, Corporality grants you a personal, non-transferable, non-exclusive, revocable, limited license to access and use the Site solely for your personal, non-commercial and lawful purposes provided that you maintain all copyright, trademark and other intellectual property notices therein. Further, Corporality does not grant you permission to state or suggest that the Company promotes or endorses any third party's political views, ideas, causes, products or services. All other rights are hereby expressly reserved.</p>

                          <p>Your use of the Site, including all features and functionalities associated therewith, shall be in accordance with all applicable laws, rules and regulations, or other restrictions on the use of the service or Content. You shall comply with these Terms and Conditions and shall not: (i) archive, download, reproduce, distribute, modify, display, perform, publish, license, create derivative works of, offer for sale, or use, any Content or information contained in or obtained from or through the Site; (ii) delete the copyright or other proprietary rights notices from the Site or any Content; (iii) circumvent, remove, alter, deactivate, degrade or thwart any of the content or other protections enabled on the Site; (iv) use any robot, spider, scraper or other automated means to access the Site; (v) decompile, reverse engineer or disassemble any software or other products or processes accessible through the Site; (vi) insert any code or product or manipulate the Site in any way; (vii) use any data mining, data gathering or extraction method; (viii) upload, post, e-mail or otherwise send or transmit any material designed to interrupt, destroy or limit the functionality of any computer software or hardware or telecommunications equipment associated with the Site, including any software viruses or any other computer code, files or programs; (ix) remove, modify, disable, block, impair, or obscure any advertising in connection with the Site; or (x) use or encourage the use of the Site for any illegal purpose, or in violation of any local, state, national, or international law, including, without limitation, laws governing intellectual property and other proprietary rights, data protection and privacy.</p>

                          <p>Corporality is always improving their Services. This means we may add or remove any features, products, or functionalities; we will try to notify you beforehand, but that won't always be possible. We reserve the right to modify, suspend, or discontinue the Services (in whole or in part) at any time, with or without notice to you. You agree that we will not be liable to you or any third party for any modification, suspension, or discontinuation of the Services or any part thereof.</p>
                        </Tab.Pane>

                        <Tab.Pane eventKey="disclaimer" className="tc-tab-content">
                          <h5>Hyperlink</h5>
                          <p>Corporality makes no representations whatsoever about any other website which you may access through this one. When you access a non-Corporality website, please understand that it is independent of Corporality, and that Corporality has no control over the content on that website, even if Corporality provides information or services to the owner of that website. In addition, a link to a non-Corporatlity website does not mean that Corporality endorses or accepts any responsibility for the content or the use of such a website. We recommend users to take precautions to ensure that whatever you select for your use is free of such items as viruses, worms, or trojan horses.</p>
                        </Tab.Pane>

                        <Tab.Pane eventKey="payment" className="tc-tab-content">
                          <h5>Copyrights and Use of Site Content</h5>
                          <p>The copyright in all materials, features and functionality on the Site, including text, graphics, videos, audio recordings, software, algorithms, artwork, interfaces, photographs, logos, icons, and images and the selection and arrangement thereof along with any enhancements to or derivative works thereto (collectively, "Content"), is the exclusive property of Corporality or its licensors and is protected by Australia and international laws. Any unauthorized use of the Content may violate copyright laws, trademark laws, the laws of privacy and publicity and/or communications regulations and statutes. All rights not expressly granted are hereby reserved. You shall be solely responsible for ensuring that any information or Content obtained from the Site does not contain any virus or other computer software code or subroutine designed to disable, erase, impair or otherwise damage your systems, software, data or operations.</p>
                        </Tab.Pane>

                        <Tab.Pane eventKey="agreements" className="tc-tab-content">
                          <h5>Trademarks</h5>
                          <p>The trademarks, service marks, logos and trade names (the "Trademarks") used and displayed on the Site, including, but not limited to, Corporality®, are registered and unregistered Trademarks of Corporality. Other trademarks, service marks, logos and trade names may be owned by others. Nothing on the Site should be construed as granting, by implication, estoppel or otherwise, any license or right to use any Trademark or any other Corporality intellectual property displayed on the Site. Corporality also prohibits the use of Corporality® and any other Trademarks as part of a link to or from any site unless the establishment of such a link is approved in advance by Corporality in writing.</p>
                        </Tab.Pane>

                        <Tab.Pane eventKey="force-majeure" className="tc-tab-content">
                          <h5>No Services, Endorsement or Professional Consultation</h5>
                          <p>There may be delays, omissions or inaccuracies in information obtained through your use of the Site. The information on the Site is provided to you with the understanding that Corporality's provision of this information to you does not constitute the rendering of investment, consulting, legal, accounting, tax, career or other advice or services. Information on the Site should not be relied upon for making business, investment or other decisions or used as a substitute for consultation with professional advisors. Moreover, Corporality does not represent or endorse the accuracy or reliability of any advice, opinion, statement, or other information displayed, uploaded, downloaded or distributed through the Site by Corporality, any user, information provider or any other person or entity. You acknowledge and agree that any reliance upon such opinion, advice, statement, memorandum, or information shall be at your sole option, liability and risk. Moreover, Corporality does not grant any license or other authorization to you to use the Site in any manner if such use in whole or in part suggests that Corporality promotes or endorses a third party's causes, ideas, political campaigns, political views, websites, products or services.</p>
                        </Tab.Pane>

                        <Tab.Pane eventKey="general" className="tc-tab-content">
                          <h5>Limitation of Liability</h5>
                          <p>UNDER NO CIRCUMSTANCES SHALL CORPORALITY BE LIABLE FOR ANY DAMAGES, INCLUDING DIRECT, INCIDENTAL, PUNITIVE, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES THAT DIRECTLY OR INDIRECTLY RESULT FROM THE USE OF, OR THE INABILITY TO USE, THE SITE OR THE INFORMATION, CONTENT, SOFTWARE, PRODUCTS AND SERVICES ADVERTISED OR CONTAINED ON THE SITE OR OTHERWISE OBTAINED FROM OR ARISING OUT OF YOUR USE OF THE SITE, INCLUDING FOR VIRUSES ALLEGED TO HAVE BEEN OBTAINED FROM THE SITE, WHETHER BASED IN CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY OR OTHERWISE, EVEN IF CORPORALITY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THIS WAIVER APPLIES, WITHOUT LIMITATION, TO ANY DAMAGES OR INJURY ARISING FROM ANY FAILURE OF PERFORMANCE, ERROR, OMISSION, INTERRUPTION, DELETION, DEFECT, DELAY IN OPERATION OR TRANSMISSION, COMPUTER VIRUS, FILE CORRUPTION, COMMUNICATION-LINE FAILURE, NETWORK OR SYSTEM OUTAGE, OR THEFT, DESTRUCTION, UNAUTHORIZED ACCESS TO, ALTERATION OF, OR USE OF ANY RECORD.</p>

                          <p>IN NO EVENT SHALL CORPORALITY'S TOTAL LIABILITY TO YOU FOR ALL DAMAGES, LOSSES, AND CAUSES OF ACTION WHETHER IN CONTRACT, TORT (INCLUDING, BUT NOT LIMITED TO, NEGLIGENCE) OR OTHERWISE EXCEED $1. SOME JURISDICTIONS MAY NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES IN WHICH CASE SOME OF THE ABOVE EXCLUSIONS MAY NOT APPLY TO ALL USERS.</p>
                        </Tab.Pane>

                        <Tab.Pane eventKey="indemnification" className="tc-tab-content">
                          <h5>Indemnification</h5>
                          <p>You hereby indemnify, defend, and hold harmless Corporality from and against any and all liability and costs, including, without limitation, reasonable attorneys' fees, incurred by any or all the Indemnified Parties in connection with any claim arising out of or relating to: (i) your access to or use of the Site, or (ii) any breach by you of these Terms and Conditions or the representations, warranties, and covenants you have made by agreeing to these Terms and Conditions. You shall cooperate as fully as reasonably required in the defense of any such claim. Corporality reserves the right, at its own expense, to assume the exclusive defense and control of any matter subject to indemnification by you.</p>
                        </Tab.Pane>

                        <Tab.Pane eventKey="enforcement" className="tc-tab-content">
                          <h5>Enforcement of Terms and Conditions</h5>
                          <p>These Terms and Conditions are governed and interpreted according to the laws of the Commonwealth of Massachusetts, United States of America, notwithstanding any principles of conflicts of law. You expressly agree that exclusive jurisdiction resides in the courts of the Commonwealth of Massachusetts. You further agree and expressly consent to the exercise of personal jurisdiction in the Commonwealth of Massachusetts in connection with any dispute or claim involving Corporality. If any part of these Terms and Conditions is unlawful, void, or unenforceable, that part shall be deemed severable and shall not affect the validity and enforceability of the remaining provisions.</p>
                        </Tab.Pane>

                        <Tab.Pane eventKey="entire" className="tc-tab-content">
                          <h5>Entire Agreement</h5>
                          <p>These Terms and Conditions constitute the entire agreement between you and Corporality with respect to the subject matter of these Terms and Conditions and supersede and replace all prior or contemporaneous understandings or agreements, written or oral, regarding that subject matter. Any waiver of any provision of these Terms and Conditions shall be effective only if in writing and signed by Corporality. Any failure to enforce any provision of these Terms and Conditions shall not constitute a waiver of a future breach of that or any other provision of these Terms and Conditions.</p>
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