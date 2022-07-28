import React, { useEffect, useState } from 'react'
import './AccountBasedMarketing.css'
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../config'
import { LogoItem } from './LogoItem'
import { DefineSolveBannerItem } from './DefineSolveBannerItem';
import { ServicesAskQuote } from '../ServicesAskQuote/ServicesAskQuote';
import AOS from "aos";
import CarouselGrid from 'react-grid-carousel'
import ServicesClients from '../ServicesClients/ServicesClients';
import ServicesInsights from '../ServicesInsights/ServicesInsights'
import { Helmet } from "react-helmet";

function AccountBasedMarketing() {

    const page_slug = 'account-based-marketing';

    const [pageDetail, setPageDetail] = useState([]);

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });

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
                <link rel="canonical" href={`${BASE_URL}/account-based-marketing/`} />
            </Helmet>

            {
                pageDetail.detail ?
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
                                                <h1>{`${pageDetail.detail.banner_title}`}</h1>
                                            </div>
                                            <div className="abm-banner-subtitle" data-aos="fade-up" data-aos-delay="300">{`${pageDetail.detail.banner_subtitle}`}</div>
                                            <div data-aos="fade-up" data-aos-delay="300">
                                                <p>{`${pageDetail.detail.banner_description}`}</p>
                                            </div>
                                            <div className="abm-banner-btn" data-aos="fade-up" data-aos-delay="500">
                                                <a href={`${pageDetail.detail.banner_btn_link}`} target="_blank">{`${pageDetail.detail.banner_btn_text}`}</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="abm-banner" data-aos="fade-left">
                                            {pageDetail.detail.banner_image && <img src={`${API_IMG_URL}pages/${pageDetail.detail.banner_image}`} alt={`${pageDetail.detail.banner_title}`} className="abm-banner-img" />}
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
                                            <h2>{`${pageDetail.detail.you_know_heading}`}</h2>
                                        </div>
                                    </div>
                                </div>

                                <div className="row abm-know-content-row">
                                    <div className="col-lg-6">
                                        <div className="row abm-k-boxes-row">
                                            <div className="col-lg-5 col-md-3 col-sm-4 abm-k-box-col">
                                                <div className="abm-k-box" data-aos="fade-up" data-aos-delay="300">
                                                    <div className="k-box-img">
                                                        {pageDetail.detail.you_know_item_1_image && <img src={`${API_IMG_URL}pages/${pageDetail.detail.you_know_item_1_image}`} alt={`${pageDetail.detail.you_know_item_1_title}`} className="k-box-img" />}
                                                    </div>
                                                    <div className="k-box-title">{`${pageDetail.detail.you_know_item_1_title}`}</div>
                                                </div>
                                            </div>

                                            <div className="col-lg-5 col-md-3 col-sm-4 abm-k-box-col">
                                                <div className="abm-k-box" data-aos="fade-up" data-aos-delay="400">
                                                    <div className="k-box-img">
                                                        {pageDetail.detail.you_know_item_2_image && <img src={`${API_IMG_URL}pages/${pageDetail.detail.you_know_item_2_image}`} alt={`${pageDetail.detail.you_know_item_2_title}`} className="k-box-img" />}
                                                    </div>
                                                    <div className="k-box-title">{`${pageDetail.detail.you_know_item_2_title}`}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="abm-know-title" data-aos="fade-up" data-aos-delay="500">{`${pageDetail.detail.you_know_title}`}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="abm-logo-section">
                            <div className="container-lg">
                                <div className="row abm-logo-row">
                                    <div className="col-lg-12 abm-logo-col">
                                        <div className="abm-logo-carousel" data-aos="flip-up">
                                            <CarouselGrid cols={4} rows={1} gap={30} responsiveLayout={[{ breakpoint: 767, cols: 1, gap: 0, loop: true, autoplay: 2000 }]}>
                                                <CarouselGrid.Item>
                                                    <LogoItem
                                                        logo={pageDetail.detail.client_logo_1_image && `${API_IMG_URL}pages/${pageDetail.detail.client_logo_1_image}`}
                                                        title={`Logo 1`}
                                                    />
                                                </CarouselGrid.Item>

                                                <CarouselGrid.Item>
                                                    <LogoItem
                                                        logo={pageDetail.detail.client_logo_2_image && `${API_IMG_URL}pages/${pageDetail.detail.client_logo_2_image}`}
                                                        title={`Logo 2`}
                                                    />
                                                </CarouselGrid.Item>

                                                <CarouselGrid.Item>
                                                    <LogoItem
                                                        logo={pageDetail.detail.client_logo_3_image && `${API_IMG_URL}pages/${pageDetail.detail.client_logo_3_image}`}
                                                        title={`Logo 3`}
                                                    />
                                                </CarouselGrid.Item>

                                                <CarouselGrid.Item>
                                                    <LogoItem
                                                        logo={pageDetail.detail.client_logo_4_image && `${API_IMG_URL}pages/${pageDetail.detail.client_logo_4_image}`}
                                                        title={`Logo 4`}
                                                    />
                                                </CarouselGrid.Item>

                                                <CarouselGrid.Item>
                                                    <LogoItem
                                                        logo={pageDetail.detail.client_logo_5_image && `${API_IMG_URL}pages/${pageDetail.detail.client_logo_5_image}`}
                                                        title={`Logo 5`}
                                                    />
                                                </CarouselGrid.Item>

                                                <CarouselGrid.Item>
                                                    <LogoItem
                                                        logo={pageDetail.detail.client_logo_6_image && `${API_IMG_URL}pages/${pageDetail.detail.client_logo_6_image}`}
                                                        title={`Logo 6`}
                                                    />
                                                </CarouselGrid.Item>

                                                <CarouselGrid.Item>
                                                    <LogoItem
                                                        logo={pageDetail.detail.client_logo_7_image && `${API_IMG_URL}pages/${pageDetail.detail.client_logo_7_image}`}
                                                        title={`Logo 7`}
                                                    />
                                                </CarouselGrid.Item>

                                                <CarouselGrid.Item>
                                                    <LogoItem
                                                        logo={pageDetail.detail.client_logo_8_image && `${API_IMG_URL}pages/${pageDetail.detail.client_logo_8_image}`}
                                                        title={`Logo 8`}
                                                    />
                                                </CarouselGrid.Item>

                                                <CarouselGrid.Item>
                                                    <LogoItem
                                                        logo={pageDetail.detail.client_logo_9_image && `${API_IMG_URL}pages/${pageDetail.detail.client_logo_9_image}`}
                                                        title={`Logo 9`}
                                                    />
                                                </CarouselGrid.Item>

                                                <CarouselGrid.Item>
                                                    <LogoItem
                                                        logo={pageDetail.detail.client_logo_10_image && `${API_IMG_URL}pages/${pageDetail.detail.client_logo_10_image}`}
                                                        title={`Logo 10`}
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
                                                {pageDetail.detail.author_image && <img src={`${API_IMG_URL}pages/${pageDetail.detail.author_image}`} alt={`${pageDetail.detail.author_name}`} />}
                                            </div>
                                            <div className="abm-blueprints_text">
                                                <div className="abm-blueprints_upper_box">
                                                </div>
                                                <div className="abm-blueprints_middle_box" >
                                                    <h1 className="abm-blueprints_title" dangerouslySetInnerHTML={{ __html: pageDetail.detail.author_title }}></h1>
                                                </div>
                                                <div className="abm-blueprints_lower_box">
                                                    <h3 className="anm-blueprints-name">{`${pageDetail.detail.author_name}`}</h3>
                                                    <p>{`${pageDetail.detail.author_designation}`}</p>
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
                                                <h2>{`${pageDetail.detail.high_value_title}`}</h2>
                                            </div>
                                            <div data-aos="fade-up" data-aos-delay="300">
                                                <p>{`${pageDetail.detail.high_value_description}`}</p>
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
                                            <img src={`${API_IMG_URL}pages/${pageDetail.detail.define_solve_image}`} alt={`${pageDetail.detail.define_solve_title}`} data-aos="fade-down-right" />

                                            <div className="abm-dsb-content" data-aos="fade-up" data-aos-delay="300">
                                                <DefineSolveBannerItem
                                                    title={`${pageDetail.detail.define_solve_item_1_title}`}
                                                    subtitle={`${pageDetail.detail.define_solve_item_1_subtitle}`}
                                                />

                                                <DefineSolveBannerItem
                                                    title={`${pageDetail.detail.define_solve_item_2_title}`}
                                                    subtitle={`${pageDetail.detail.define_solve_item_2_subtitle}`}
                                                />

                                                <DefineSolveBannerItem
                                                    title={`${pageDetail.detail.define_solve_item_3_title}`}
                                                    subtitle={`${pageDetail.detail.define_solve_item_3_subtitle}`}
                                                />

                                                <DefineSolveBannerItem
                                                    title={`${pageDetail.detail.define_solve_item_4_title}`}
                                                    subtitle={`${pageDetail.detail.define_solve_item_4_subtitle}`}
                                                />

                                                <DefineSolveBannerItem
                                                    title={`${pageDetail.detail.define_solve_item_5_title}`}
                                                    subtitle={`${pageDetail.detail.define_solve_item_5_subtitle}`}
                                                />

                                                <DefineSolveBannerItem
                                                    title={`${pageDetail.detail.define_solve_item_6_title}`}
                                                    subtitle={`${pageDetail.detail.define_solve_item_6_subtitle}`}
                                                />

                                                <DefineSolveBannerItem
                                                    title={`${pageDetail.detail.define_solve_item_7_title}`}
                                                    subtitle={`${pageDetail.detail.define_solve_item_7_subtitle}`}
                                                />

                                                <DefineSolveBannerItem
                                                    title={`${pageDetail.detail.define_solve_item_8_title}`}
                                                    subtitle={`${pageDetail.detail.define_solve_item_8_subtitle}`}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-5">
                                        <div className="abm-ds-content">
                                            <div data-aos="fade-up">
                                                <h2>{`${pageDetail.detail.define_solve_title}`}</h2>
                                            </div>
                                            <div data-aos="fade-up" data-aos-delay="300">
                                                <p>{`${pageDetail.detail.define_solve_subtitle}`}</p>
                                            </div>
                                            <div data-aos="fade-up" data-aos-delay="500" dangerouslySetInnerHTML={{ __html: pageDetail.detail.faq_item_2_description }}></div>
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
                                                <h2>{`${pageDetail.detail.connect_convert_title}`}</h2>
                                            </div>
                                            <div data-aos="zoom-in-up" data-aos-delay="500">
                                                <p>{`${pageDetail.detail.connect_convert_description}`}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="abm-cc-banner">
                                            {pageDetail.detail.connect_convert_image && <img src={`${API_IMG_URL}pages/${pageDetail.detail.connect_convert_image}`} alt={`${pageDetail.detail.connect_convert_title}`} className="cc-banner" data-aos="zoom-out" />}
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
                                                <h2>{`${pageDetail.detail.design_define_title}`}</h2>
                                            </div>
                                            <div data-aos="fade-up" data-aos-delay="300">
                                                <p>{`${pageDetail.detail.design_define_subtitle}`}</p>
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
                action={`https://forms.zohopublic.com.au/corporality/form/AskQuoteAccountBasedMarketingCorporality/formperma/VDwksEViq9N4Diu-tzQmJNSbF6ihqez3ctZvxEAKbLE/htmlRecords/submit`}
            />
        </>
    )
}

export default AccountBasedMarketing