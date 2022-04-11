import React, { useEffect } from "react";
import Aos from "aos";
import "./BrandPositioningNew.css";
import { BASE_URL } from '../../config'
import { ServicesAskQuote } from "../ServicesAskQuote/ServicesAskQuote";
import { ProcessItem } from "./ProcessItem";
import ServicesClients from "../ServicesClients/ServicesClients";
import ServicesInsights from "../ServicesInsights/ServicesInsights";

export default function BrandPositioning() {

  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  });

  return (
    <>
      <div className="bp-banner-section">
        <img src={`${BASE_URL}/img/BrandPositioning/banner-rec-1.png`} alt="Rec 1" className="bp-b-rec-1" />
        <img src={`${BASE_URL}/img/BrandPositioning/banner-rec-2.png`} alt="Rec 2" className="bp-b-rec-2" />
        <img src={`${BASE_URL}/img/BrandPositioning/banner-rec-3.png`} alt="Rec 3" className="bp-b-rec-3" />
        <img src={`${BASE_URL}/img/BrandPositioning/banner-rec-4.png`} alt="Rec 4" className="bp-b-rec-4" />

        <div className="container-lg">
          <div className="row bp-banner-row">
            <div className="col-lg-6">
              <div className="bp-banner-content">
                <div data-aos="fade-up">
                  <h1>GROWING UP IS AN ADVENTURE</h1>
                </div>
                <div className="bp-banner-subtitle" data-aos="fade-up" data-aos-delay="300">We bring the power of Corporality Signature Product to help you grow</div>
                <div data-aos="fade-up" data-aos-delay="300">
                  <p>We deliver comprehensive branding and marketing solutions for small to medium-sized businesses. Every day, we bring our experience, knowledge, and expertise to help you achieve your vision. We dig, we hunt, we conquer. We work unceasingly to nurture brand positioning for our clients.</p>
                </div>
                <div className="bp-banner-btn" data-aos="fade-up" data-aos-delay="500">
                  <a href="https://zohoadmin-corporality.zohobookings.com.au/#/customer/discoverycall" target="_blank">Schedule a time</a>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="bp-banner" data-aos="fade-left">
                <img src={`${BASE_URL}/img/BrandPositioning/banner-vector.png`} alt="GROWING UP IS AN ADVENTURE" className="bp-banner-img" />
              </div>

              <div className="bp-banner-ici" data-aos="fade-left" data-aos-offset="500" data-aos-duration="3000" data-aos-anchor="#brand-anchor">
                <img src={`${BASE_URL}/img/BrandPositioning/improved-company-image.png`} alt="improved-company-image" />
              </div>

              <div className="bp-banner-cl" data-aos="fade-left" data-aos-offset="500" data-aos-duration="1500" data-aos-anchor="#brand-anchor">
                <img src={`${BASE_URL}/img/BrandPositioning/customer-loyalty.png`} alt="customer-loyalty" />
              </div>

              <div className="bp-banner-ri" data-aos="fade-left" data-aos-offset="500" data-aos-duration="2000" data-aos-anchor="#brand-anchor">
                <img src={`${BASE_URL}/img/BrandPositioning/relatable-identity.png`} alt="relatable-identity" />
              </div>

              <div className="bp-banner-oeve" data-aos="fade-left" data-aos-offset="500" data-aos-duration="1000" data-aos-anchor="#brand-anchor">
                <img src={`${BASE_URL}/img/BrandPositioning/omni-effect-vs-experiance.png`} alt="omni-effect-vs-experiance" />
              </div>

              <div className="bp-banner-sbs" data-aos="fade-up" data-aos-offset="500" data-aos-duration="2000" data-aos-anchor="#brand-anchor">
                <img src={`${BASE_URL}/img/BrandPositioning/successfull-branding-strategy.png`} alt="successfull-branding-strategy" />
              </div>

            </div>
          </div>
        </div>

        <div className="bp-social-section">
          <div className="bp-social-row" data-aos="fade-right" data-aos-delay="400">
            <a href='https://www.facebook.com/CorporalityG' target="_blank"><i className="fa fa-facebook-f"></i></a>
            <a href='https://twitter.com/corporalityg' target="_blank"><i className="fa fa-twitter"></i></a>
            <a href='https://www.instagram.com/corporalityg/' target="_blank"><i className="fa fa-instagram"></i></a>
            <a href='https://www.linkedin.com/company/corporality/' target="_blank"><i className="fa fa-linkedin"></i></a>
            <a href='https://in.pinterest.com/CorporalityG/' target="_blank"><i className="fa fa-pinterest"></i></a>
            <a href='https://www.youtube.com/channel/UC4EISt8kHI4zzpmbIBMIBbg' target="_blank"><i className="fa fa-youtube-play"></i></a>
          </div>
        </div>
      </div>

      <div className="bp-process-section">
        <div className="container-lg">
          <div className="row bp-p-title-row">
            <div className="col-lg-12">
              <div className="bp-p-title-content">
                <div data-aos="fade-up">
                  <h2>THE PROCESS</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="row bp-p-boxes-row">
            <ProcessItem
              number={`01`}
              title={`Scope the initiative`}
              subtitle={`Assess current brand portfolio of offerings`}
            />

            <ProcessItem
              number={`02`}
              title={`Prepare a strategy canvas`}
              subtitle={`Where do you stand now against competition?`}
            />

            <ProcessItem
              number={`03`}
              title={`Discover customer pain points`}
              subtitle={`Check for problems to be resolve and create new demand`}
            />

            <ProcessItem
              number={`04`}
              title={`Identify new market place`}
              subtitle={`Unlock the demand to newer customers`}
            />

            <ProcessItem
              number={`05`}
              title={`Develop strategic options`}
              subtitle={`Practical,realistic strategies with alternative plans`}
            />

            <ProcessItem
              number={`06`}
              title={`Launch your brand`}
              subtitle={``}
            />
          </div>
        </div>
      </div>

      <div className="bp-brand-section">
        <div className="container-fluid">
          <div className="row bp-brand-row">
            <div className="col-lg-12">
              <img src={`${BASE_URL}/img/BrandPositioning/brand-positioning-banner.png`} alt="Brand Positioning" className="bp-brand-banner" data-aos="zoom-in-up" />
            </div>
          </div>
        </div>
      </div>

      <div className="bp-know-section">
        <div className="container-lg">
          <div className="row bp-know-row">
            <div className="col-lg-6 bp-know-col">
              <div className="bp-know-content">
                <div data-aos="fade-up">
                  <h2>Building your Brand positioning framework and methodology to implement</h2>
                </div>
                <div className="bp-kc-subtitle" data-aos="fade-up" data-aos-delay="300">Did you know?</div>
                <div className="row bp-k-boxes-row">
                  <div className="col-md-4 bp-k-box-col">
                    <div className="bp-k-box" data-aos="fade-up" data-aos-delay="500">
                      <img src={`${BASE_URL}/img/BrandPositioning/know-85-per.png`} alt="Organizations" />
                      <div className="bp-k-box-title">Organizations have brand guidelines</div>
                    </div>
                  </div>

                  <div className="col-md-4 bp-k-box-col" data-aos="fade-up" data-aos-delay="550">
                    <div className="bp-k-box">
                      <img src={`${BASE_URL}/img/BrandPositioning/know-30-per.png`} alt="consistently" />
                      <div className="bp-k-box-title">Only are consistently enforced</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 bp-know-col">
              <div className="bp-know-banner">
                <div className="bp-kb-img" data-aos="zoom-in">
                  <img src={`${BASE_URL}/img/BrandPositioning/Brand-Creation-Brand-Position-target.png`} alt="Brand Creation/ Brand Position target" />
                </div>

                <div className="bp-kb-title-box">
                  <div className="bp-kb-title" data-aos="fade-right">Defining Attributes</div>
                  <div className="bp-kb-title" data-aos="fade-left">Value proposition</div>
                  <div className="bp-kb-title" data-aos="fade-bottom">Perception strategy</div>
                  <div className="bp-kb-title" data-aos="zoom-in" data-aos-delay="300">
                    <div className="bp-kb-heading">Brand Creation/ Brand Position target</div>
                  </div>
                  <div className="bp-kb-title" data-aos="fade-up">Building uniqueness, methodology and framework</div>
                  <div className="bp-kb-title" data-aos="fade-right">How you want to be perceived?</div>
                  <div className="bp-kb-title" data-aos="fade-left">what success it brings to you</div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bp-articulating-yourself-section">
        <div className="container-fluid px-0">
          <div className="row bp-ay-row">
            <div className="col-lg-12">
              <img src={`${BASE_URL}/img/BrandPositioning/articulating-yourself-banner.png`} alt="Brand Positioning" className="bp-ay-banner" data-aos="zoom-out-down" />
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
