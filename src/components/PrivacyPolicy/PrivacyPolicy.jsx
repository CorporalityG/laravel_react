import React from 'react'
import './PrivacyPolicy.css'
import { BASE_URL } from '../../config'
import MetaTags from 'react-meta-tags';

function PrivacyPolicy() {
  return (
    <>
      <MetaTags>
        <title>{`Privacy Policy | Corporality`}</title>
        <meta name="description" content={`If you require any more information or have any questions about our privacy policy, please feel free to contact us by email at info@corporality.global.`} />
      </MetaTags>

      <div className="privacy-policy-section">
        <img src={`${BASE_URL}/img/PrivacyPolicy/rec-1.png`} alt="Rec 1" className="rec-1" />
        <img src={`${BASE_URL}/img/PrivacyPolicy/rec-2.png`} alt="Rec 2" className="rec-2" />
        <img src={`${BASE_URL}/img/PrivacyPolicy/rec-3.png`} alt="Rec 3" className="rec-3" />
        <img src={`${BASE_URL}/img/PrivacyPolicy/rec-4.png`} alt="Rec 4" className="rec-4" />

        <img src={`${BASE_URL}/img/PrivacyPolicy/vector.png`} alt="vector" className="vector" />
        <img src={`${BASE_URL}/img/PrivacyPolicy/bottom-vector.png`} alt="bottom-vector" className="bottom-vector" />

        <div className="container">
          <div className="row privacy-policy-row">
            <div className="col-lg-12 px-0">
              <div className="row pp-heading-row">
                <div className="col-lg-8">
                  <div className="pp-heading-content">
                    <h1>Privacy Policy</h1>
                    <p>If you require any more information or have any questions about our privacy policy, please feel free to contact us by email at info@corporality.global.</p>
                    <p>At Corporality Global we consider the privacy of our visitors to be xtremely important. This privacy policy document describes in detail the types of personal information that are collected and recorded by https://corporality.global/offline/ and how it is used.</p>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="pp-heading-img">
                    <img src={`${BASE_URL}/img/PrivacyPolicy/Privacy-Policy-banner.png`} alt="Privacy Policy" />
                  </div>
                </div>
              </div>

              <div className="pp-line"></div>

              <div className="row pp-content-row">
                <div className="col-md-12">
                  <div className="pp-content">
                    <h2>Log Files</h2>
                    <p>Like many other Web sites, https://corporality.global/offline/ makes use of log files. These files merely log visitors to the site – usually a standard procedure for hosting companies and a part of hosting services’ analytics. The information inside the log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date/time stamp, referring/exit pages, and possibly the number of clicks. This information is used to analyse trends, administer the site, track user’s movement around the site, and gather demographic information. IP addresses, and other such information are not linked to any information that is personally identifiable.</p>

                    <h2>Cookies and Web Beacons</h2>
                    <p>https://corporality.global/offline/ uses cookies to store information about visitors’ preferences, to record user-specific information on which pages the site visitor accesses or visits, and to personalize or customize our web page content based upon visitors’ browser type or other information that the visitor sends via their browser.</p>

                    <h2>DoubleClick DART Cookie</h2>
                    <ul>
                      <li>1) Google, as a third party vendor, uses cookies to serve ads on https://corporality.global/offline/</li>
                      <li>2) Google’s use of the DART cookie enables it to serve ads to our site’s visitors based upon their visit to https://corporality.global/offline/ and other sites on the Internet.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PrivacyPolicy