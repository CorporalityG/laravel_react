import React, { useEffect } from 'react'
import './AccountBasedMarketing.css'
import { BASE_URL } from '../../config'
import { LogoItem } from './LogoItem'
import { DefineSolveBannerItem } from './DefineSolveBannerItem';
import { ServicesAskQuote } from '../ServicesAskQuote/ServicesAskQuote';
import AOS from "aos";
import CarouselGrid from 'react-grid-carousel'
import ServicesClients from '../ServicesClients/ServicesClients';
import ServicesInsights from '../ServicesInsights/ServicesInsights'

function AccountBasedMarketing() {

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);

    return (
        <>
            <div className="abm-banner-section">
                <img src={`${BASE_URL}/img/AccountBasedMarketing/banner-rec-1.png`} alt="Rec 1" className="abm-b-rec-1" />
                <img src={`${BASE_URL}/img/AccountBasedMarketing/banner-rec-2.png`} alt="Rec 2" className="abm-b-rec-2" />
                <img src={`${BASE_URL}/img/AccountBasedMarketing/banner-rec-3.png`} alt="Rec 3" className="abm-b-rec-3" />

                <img src={`${BASE_URL}/img/AccountBasedMarketing/banner-rec-dots.png`} alt="Rec Dot" className="abm-b-rec-dots" data-aos="fade-left" data-aos-delay="300" />
                <img src={`${BASE_URL}/img/AccountBasedMarketing/banner-vector.png`} alt="Vector" className="abm-b-vector" data-aos="fade-left" data-aos-delay="400" />
                <img src={`${BASE_URL}/img/AccountBasedMarketing/banner-vector-1.png`} alt="Vector 1" className="abm-b-vector-1" data-aos="fade-left" data-aos-delay="500" />

                <div className="container-lg">
                    <div className="row abm-banner-row">
                        <div className="col-lg-6">
                            <div className="abm-banner-content">
                                <div data-aos="fade-up">
                                    <h1>Account Based Marketing</h1>
                                </div>
                                <div className="abm-banner-subtitle" data-aos="fade-up" data-aos-delay="300">Focusing growth strategy for high value clients</div>
                                <div data-aos="fade-up" data-aos-delay="300">
                                    <p>Partnership focused in collaboration of both Marketing and sales team to create personalized buying experiences for a mutually-identified set of high-value accounts in conjunction with Inbound Marketing</p>
                                </div>
                                <div className="abm-banner-btn" data-aos="fade-up" data-aos-delay="500">
                                    <a href="https://zohoadmin-corporality.zohobookings.com.au/#/customer/discoverycall" target="_blank">Schedule a time</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="abm-banner" data-aos="fade-left">
                                <img src={`${BASE_URL}/img/AccountBasedMarketing/banner.png`} alt="Account Based Marketing" className="abm-banner-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="abm-know-section">
                <img src={`${BASE_URL}/img/AccountBasedMarketing/know-rec-1.png`} alt="Rec 1" className="abm-k-rec-1" />
                <img src={`${BASE_URL}/img/AccountBasedMarketing/know-rec-2.png`} alt="Rec 2" className="abm-k-rec-2" />
                <img src={`${BASE_URL}/img/AccountBasedMarketing/know-rec-3.png`} alt="Rec 3" className="abm-k-rec-3" />

                <div className="container-lg">
                    <div className="row abm-know-title-row">
                        <div className="col-lg-12">
                            <div className="abm-kt-content" data-aos="zoom-in">
                                <h2>Did you know?</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row abm-know-content-row">
                        <div className="col-lg-6">
                            <div className="row abm-k-boxes-row">
                                <div className="col-lg-5 col-md-3 col-sm-4 abm-k-box-col">
                                    <div className="abm-k-box" data-aos="fade-up" data-aos-delay="300">
                                        <div className="k-box-img">
                                            <img src={`${BASE_URL}/img/AccountBasedMarketing/rating.png`} alt="Rating on Google" className="k-box-img" />
                                            <img src={`${BASE_URL}/img/AccountBasedMarketing/rating-star.png`} alt="Star" className="k-box-star" />
                                        </div>
                                        <div className="k-box-title">Rating on Google</div>
                                    </div>
                                </div>

                                <div className="col-lg-5 col-md-3 col-sm-4 abm-k-box-col">
                                    <div className="abm-k-box" data-aos="fade-up" data-aos-delay="400">
                                        <div className="k-box-img">
                                            <img src={`${BASE_URL}/img/AccountBasedMarketing/growth.png`} alt="Growth on LinkedIn" className="k-box-img" />
                                        </div>
                                        <div className="k-box-title">Growth on LinkedIn</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="abm-know-title" data-aos="fade-up" data-aos-delay="500">Trusted by 100+ Businessess Accross Industry Vertical, wordwide since 2014</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="abm-logo-section">
                <div className="container-lg">
                    <div className="row abm-logo-row">
                        <div className="col-lg-12 abm-logo-col">
                            <div className="abm-logo-carousel" data-aos="flip-up">
                                <CarouselGrid cols={4} rows={1} gap={30} responsiveLayout={[{breakpoint: 767, cols: 1, gap: 0, loop: true, autoplay: 2000}]}>
                                    <CarouselGrid.Item>
                                        <LogoItem
                                            logo={`${BASE_URL}/img/AccountBasedMarketing/klek-services-logo.png`}
                                            title={`Klek Services`}
                                        />
                                    </CarouselGrid.Item>

                                    <CarouselGrid.Item>
                                        <LogoItem
                                            logo={`${BASE_URL}/img/AccountBasedMarketing/divine-intercession-logo.png`}
                                            title={`Divine Intercession`}
                                        />
                                    </CarouselGrid.Item>

                                    <CarouselGrid.Item>
                                        <LogoItem
                                            logo={`${BASE_URL}/img/AccountBasedMarketing/build-q-logo.png`}
                                            title={`Build Q`}
                                        />
                                    </CarouselGrid.Item>

                                    <CarouselGrid.Item>
                                        <LogoItem
                                            logo={`${BASE_URL}/img/AccountBasedMarketing/fastgrow-finance-logo.png`}
                                            title={`Fastgrow Finance`}
                                        />
                                    </CarouselGrid.Item>

                                    <CarouselGrid.Item>
                                        <LogoItem
                                            logo={`${BASE_URL}/img/AccountBasedMarketing/tech-consultants-logo.png`}
                                            title={`Tech Consultants`}
                                        />
                                    </CarouselGrid.Item>

                                    <CarouselGrid.Item>
                                        <LogoItem
                                            logo={`${BASE_URL}/img/AccountBasedMarketing/meyer-west-ip-logo.png`}
                                            title={`Meyer West IP`}
                                        />
                                    </CarouselGrid.Item>

                                    <CarouselGrid.Item>
                                        <LogoItem
                                            logo={`${BASE_URL}/img/AccountBasedMarketing/x-designs-logo.png`}
                                            title={`XDesigns`}
                                        />
                                    </CarouselGrid.Item>

                                    <CarouselGrid.Item>
                                        <LogoItem
                                            logo={`${BASE_URL}/img/AccountBasedMarketing/lumoral-logo.png`}
                                            title={`Lumoral`}
                                        />
                                    </CarouselGrid.Item>

                                    <CarouselGrid.Item>
                                        <LogoItem
                                            logo={`${BASE_URL}/img/AccountBasedMarketing/liqmet-logo.png`}
                                            title={`Liqmet`}
                                        />
                                    </CarouselGrid.Item>

                                    <CarouselGrid.Item>
                                        <LogoItem
                                            logo={`${BASE_URL}/img/AccountBasedMarketing/sk-insure-logo.png`}
                                            title={`SK Insure`}
                                        />
                                    </CarouselGrid.Item>
                                </CarouselGrid>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="abm-blueprints-section">
                <div className="container-fulid">
                    <div className="row abm-blueprints-row">
                        <div className="col-lg-12 abm-blueprints-col">
                            <div className="abm-blueprints-content">
                                <div className="abm-blueprints_img">
                                    <img src={`${BASE_URL}/img/AccountBasedMarketing/blueprints-impact-businesses-bg.jpg`} alt="blueprints businesses" />
                                </div>
                                <div className="abm-blueprints_text">
                                    <div className="abm-blueprints_upper_box">
                                    </div>
                                    <div className="abm-blueprints_middle_box" >
                                        <h1 className="abm-blueprints_title">“We create fortified, <span className="abm-blueprints_zoom-in">i</span>nteractive blueprints that impact businesses”</h1>
                                    </div>
                                    <div className="abm-blueprints_lower_box">
                                        <h3 className="anm-blueprints-name">Priya Mishra</h3>
                                        <p>CEO, Corporality Global</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="abm-high-level-section">
                <img src={`${BASE_URL}/img/AccountBasedMarketing/high-level-vector.png`} alt="vector" className="abm-hl-vector" data-aos="fade-up-left" />
                <img src={`${BASE_URL}/img/AccountBasedMarketing/high-level-ellipse.png`} alt="ellipse" className="abm-hl-ellipse" data-aos="fade-up-left" data-aos-delay="300" />
                <img src={`${BASE_URL}/img/AccountBasedMarketing/high-level-rec.png`} alt="rec" className="abm-hl-rec" data-aos="fade-up-left" data-aos-delay="500" />

                <div className="container-lg">
                    <div className="row abm-high-level-row">
                        <div className="col-lg-12 abm-high-level-col">
                            <div className="abm-hl-content">
                                <div data-aos="fade-up">
                                    <h2>Working on your high-Level vision and turning them into highly-Targeted and efficient resources allocated for your high-Value clients</h2>
                                </div>
                                <div data-aos="fade-up" data-aos-delay="300">
                                    <p>The breath and depth of your expertise allows us to create a tailor-made strategy for account-based marketing. Our approach is to create your ideal customer profile designed not only to increase the leads but also increase user retention, engagement and eventually loyalty.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="abm-define-solve-section">
                <div className="container-fluid">
                    <div className="row abm-define-solve-row">
                        <div className="col-lg-7">
                            <div className="abm-ds-banner">
                                <img src={`${BASE_URL}/img/AccountBasedMarketing/Define-to-solve-banner.png`} alt="Define to solve" className="abm-dsb-img" data-aos="fade-down-right" />

                                <div className="abm-dsb-content" data-aos="fade-up" data-aos-delay="300">
                                    <DefineSolveBannerItem
                                        title={`Target Prospects`}
                                        subtitle={`Named accounts, target prospects`}
                                    />

                                    <DefineSolveBannerItem
                                        title={`ISQLs/Nurture`}
                                        subtitle={`Identification of needs and pain points`}
                                    />

                                    <DefineSolveBannerItem
                                        title={`SALs`}
                                        subtitle={`Early Identification of project requirements and issues`}
                                    />

                                    <DefineSolveBannerItem
                                        title={`EAQs`}
                                        subtitle={`Opportunities to participate in the evaluation or build business case`}
                                    />

                                    <DefineSolveBannerItem
                                        title={`Champions`}
                                        subtitle={`Help you get a seat at the evaluation table`}
                                    />

                                    <DefineSolveBannerItem
                                        title={`Expand`}
                                        subtitle={`Activity and collateral to grow advocacy and expand the base of champions`}
                                    />

                                    <DefineSolveBannerItem
                                        title={`Advocate`}
                                        subtitle={`Enable champions to recommend your section`}
                                    />

                                    <DefineSolveBannerItem
                                        title={`Purchase`}
                                        subtitle={`Create a customer by creating business and identifying white spaces.`}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="abm-ds-content">
                                <div data-aos="fade-up">
                                    <h2>Define to solve</h2>
                                </div>
                                <div data-aos="fade-up" data-aos-delay="300">
                                    <p>Benefits to this solution</p>
                                </div>
                                <div data-aos="fade-up" data-aos-delay="500">
                                    <ul>
                                        <li><img src={`${BASE_URL}/img/AccountBasedMarketing/list-icon.png`} alt="-" /> Business’s relevancy Vs high-value accounts</li>
                                        <li><img src={`${BASE_URL}/img/AccountBasedMarketing/list-icon.png`} alt="-" /> Customer experiences consistency.</li>
                                        <li><img src={`${BASE_URL}/img/AccountBasedMarketing/list-icon.png`} alt="-" /> Marketing and Sales alignment.</li>
                                        <li><img src={`${BASE_URL}/img/AccountBasedMarketing/list-icon.png`} alt="-" /> Process oriented sales cycle.</li>
                                        <li><img src={`${BASE_URL}/img/AccountBasedMarketing/list-icon.png`} alt="-" /> Measurable Growth and ROI.</li>
                                        <li><img src={`${BASE_URL}/img/AccountBasedMarketing/list-icon.png`} alt="-" /> Business expansion through targeted account relationships.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="abm-connect-convert-section">
                <div className="container-lg">
                    <div className="row abm-connect-convert-row">
                        <div className="col-lg-6">
                            <div className="abm-cc-content">
                                <div data-aos="zoom-in">
                                    <h2>Connect & Convert</h2>
                                </div>
                                <div data-aos="zoom-in-up" data-aos-delay="500">
                                    <p>Clients connects to your story when you bring emotions, thrill and EQ which resonates with them.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="abm-cc-banner">
                                <img src={`${BASE_URL}/img/AccountBasedMarketing/Connect-Convert-banner.png`} alt="Connect & Convert" className="cc-banner" data-aos="zoom-out" />
                                <img src={`${BASE_URL}/img/AccountBasedMarketing/cc-rec.png`} alt="cc-rec" className="cc-rec" data-aos="zoom-in-left" data-aos-delay="300" />
                                <img src={`${BASE_URL}/img/AccountBasedMarketing/cc-vector.png`} alt="cc-vector" className="cc-vector" data-aos="zoom-in-up" data-aos-delay="500" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="abm-design-define-section">
                <img src={`${BASE_URL}/img/AccountBasedMarketing/dd-ellipse.png`} alt="dd-ellipse" className="dd-ellipse" data-aos="fade-right" data-aos-delay="500" />
                <img src={`${BASE_URL}/img/AccountBasedMarketing/dd-vector.png`} alt="dd-vector" className="dd-vector" data-aos="fade-right" data-aos-delay="300" />
                <img src={`${BASE_URL}/img/AccountBasedMarketing/dd-rec.png`} alt="dd-rec" className="dd-rec" data-aos="fade-right" data-aos-delay="400" />

                <div className="container-lg">
                    <div className="row abm-design-define-row">
                        <div className="col-lg-12">
                            <div className="abm-dd-content">
                                <div data-aos="fade-up">
                                    <h2>Design and define the solutions that makes your customer go from 'ignorance' to 'Want'</h2>
                                </div>
                                <div data-aos="fade-up" data-aos-delay="300">
                                    <p>Subscribe to our Quarterly reports or white papers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ServicesClients />

            <ServicesInsights />

            <ServicesAskQuote
                action={`https://forms.zohopublic.com.au/corporality/form/AskQuoteAccountBasedMarketingCorporality/formperma/VDwksEViq9N4Diu-tzQmJNSbF6ihqez3ctZvxEAKbLE/htmlRecords/submit`}
            />
        </>
    )
}

export default AccountBasedMarketing