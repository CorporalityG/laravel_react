import React, { useState, useEffect } from "react";
import './IntractiveBluePrint.css'
import { BASE_URL } from '../../config'
import { ServicesAskQuote } from "../ServicesAskQuote/ServicesAskQuote";
import AOS from "aos";
import WriteToUsModal from "./components/WriteToUsModal";
import ServicesClients from "../ServicesClients/ServicesClients";
import ServicesInsights from "../ServicesInsights/ServicesInsights";

function IntractiveBluePrint() {

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const [show, setShow] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = (modalId) => {
    setShow(modalId);
  }

  return (
    <>
      <div className="ibp-banner-section">
        <img src={`${BASE_URL}/img/IntractiveBluePrint/banner-rec-1.png`} alt="Rec 1" className="ibp-b-rec-1" />
        <img src={`${BASE_URL}/img/IntractiveBluePrint/banner-rec-2.png`} alt="Rec 2" className="ibp-b-rec-2" />

        <div className="container-lg">
          <div className="row ibp-banner-row">
            <div className="col-lg-7">
              <div className="ibp-banner-content">
                <div className="ibp-banner-title" data-aos="fade-up">INTERACTIVE BLUEPRINT</div>
                <div data-aos="fade-up">
                  <h1>Embracing Your Innovative Ideas</h1>
                </div>
                <div className="ibp-banner-subtitle" data-aos="fade-up" data-aos-delay="300">Creating a blueprint of your business to make sure that you stand out from the competition.</div>
                <div className="ibp-banner-desc" data-aos="fade-up" data-aos-delay="300">
                  <p>Service is designed for Innovative Product or Services trying to break through. Combining the two extremely effective methods of mixed market modeling and blue ocean strategy, we make sure you build a position of a “thought leader”. Standing out is a norm, and we must abide!</p>
                </div>
                <div className="ibp-banner-btn" data-aos="fade-up" data-aos-delay="500">
                  <a href="https://zohoadmin-corporality.zohobookings.com.au/#/customer/discoverycall" target="_blank">Schedule a time</a>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="ibp-banner" data-aos="fade-left">
                <img src={`${BASE_URL}/img/IntractiveBluePrint/banner.png`} alt="Account Based Marketing" className="ibp-banner-img" />

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
                <h2>Did you know?</h2>
              </div>
            </div>
          </div>

          <div className="row ibp-know-content-row">
            <div className="col-lg-6">
              <div className="row ibp-k-boxes-row">
                <div className="col-md-4 ibp-k-box-col">
                  <div className="ibp-k-box" data-aos="fade-up" data-aos-delay="300">
                    <div className="k-box-img">
                      <img src={`${BASE_URL}/img/IntractiveBluePrint/know-90-perct.png`} alt="Innovation fails" className="k-box-img" />
                    </div>
                    <div className="k-box-title">Innovation fails</div>
                  </div>
                </div>

                <div className="col-md-4 ibp-k-box-col">
                  <div className="ibp-k-box" data-aos="fade-up" data-aos-delay="400">
                    <div className="k-box-img">
                      <img src={`${BASE_URL}/img/IntractiveBluePrint/know-10-perct.png`} alt="Only sees light of the day" className="k-box-img" />
                    </div>
                    <div className="k-box-title">Only sees light of the day</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="ibp-know-title" data-aos="fade-up" data-aos-delay="500">95%fails in first 5 years due to lack of market research and marketing strategy</div>
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
                  <h2>Working with Innovators on their strategic master plan with the Blue Ocean Strategy with Corporality effect</h2>
                </div>
                <div className="ibp-wt-desc" data-aos="fade-up" data-aos-delay="300">
                  <p>Let's un-peal your innovative ideas that can be deal breakers in the industry you are trying to break away from. We would love to help in your new visionary path to influence and build profitable growth you are aiming for.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row ibp-working-content-row">
            <div className="col-lg-6 ibp-working-content-col">
              <div className="ibp-wc-banner">
                <img src={`${BASE_URL}/img/IntractiveBluePrint/working-banner.png`} alt="Working with Innovators only" className="wc-b-img" data-aos="fade-right" />
                <img src={`${BASE_URL}/img/IntractiveBluePrint/working-rec.png`} alt="working-rec" className="wc-b-rec" data-aos="fade-right" data-aos-delay="300" />

                <img src={`${BASE_URL}/img/IntractiveBluePrint/working-vector.png`} alt="working-vector" className="wc-b-vec" data-aos="fade-right" data-aos-delay="500" />
                <img src={`${BASE_URL}/img/IntractiveBluePrint/working-rec-2.png`} alt="working-rec-2" className="wc-b-rec-2" data-aos="zoom-in" />

                <img src={`${BASE_URL}/img/IntractiveBluePrint/working-ellipse.png`} alt="working-ellipse" className="wc-b-ellipse" data-aos="fade-up" data-aos-delay="300" />
                <img src={`${BASE_URL}/img/IntractiveBluePrint/working-vector-1.png`} alt="working-vector-1" className="wc-b-vec-1" data-aos="fade-up" data-aos-delay="400" />
                <img src={`${BASE_URL}/img/IntractiveBluePrint/working-rec-1.png`} alt="working-rec-1" className="wc-b-rec-1" data-aos="fade-up" data-aos-delay="500" />

                <div className="wc-b-write-box" data-aos="zoom-in-left" data-aos-delay="500">
                  <div className="bw-box-title">To share your pain point</div>
                  <div className="bw-box-title">To know how we can help</div>
                  <div className="bw-box-btn" onClick={() => handleShow('write')}>Write to us</div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 ibp-working-content-col">
              <div className="ibp-wc-desc">
                <div data-aos="fade-up">
                  <h2>Working with Innovators only</h2>
                </div>
                <div data-aos="fade-up" data-aos-delay="300">
                  <p>Eliminating Risks giving you an edge to educate your target audience</p>
                </div>
                <ul data-aos="fade-up" data-aos-delay="500">
                  <li><img src={`${BASE_URL}/img/IntractiveBluePrint/list-icon.png`} alt="-" /> Collaborating with your innovative team and defining the marketing narrative</li>
                  <li><img src={`${BASE_URL}/img/IntractiveBluePrint/list-icon.png`} alt="-" /> Working along side Stakeholder and bridging the gap between R&D team and investors</li>
                  <li><img src={`${BASE_URL}/img/IntractiveBluePrint/list-icon.png`} alt="-" /> Project breakage to manageable pieces allowing you manage workload and budgets efficiently</li>
                  <li><img src={`${BASE_URL}/img/IntractiveBluePrint/list-icon.png`} alt="-" /> Written strategy along with your experts to define the story and narrative to end user</li>
                  <li><img src={`${BASE_URL}/img/IntractiveBluePrint/list-icon.png`} alt="-" /> Helping to educate the end consumer about your unique product which is never been in market</li>
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
                  <h2>Innovate & Educate</h2>
                </div>
                <div data-aos="zoom-in-up" data-aos-delay="500">
                  <p>Clients connects to your story when you can explain them in your lay man language.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="ibp-ie-banner">
                <img src={`${BASE_URL}/img/IntractiveBluePrint/ie-banner.png`} alt="Innovate & Educate" className="ie-banner" data-aos="zoom-out" />
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
                  <h2>Creating the strategy solutions that makes your customer to imagine the possibility & need of your product or service</h2>
                </div>
                <div data-aos="fade-up" data-aos-delay="300">
                  <p>Subscribe to our insights to know what is happening in R&D market </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ServicesClients />

      <ServicesInsights />

      <ServicesAskQuote />
    </>
  );
}

export default IntractiveBluePrint;
