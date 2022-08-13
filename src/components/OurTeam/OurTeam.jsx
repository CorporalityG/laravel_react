import React, { useEffect, useState } from 'react'
import './OurTeam.css'
import { Link } from 'react-router-dom';
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../config';
import AOS from "aos";
import { LeadershipMember } from './LeadershipMember';
import CarouselGrid from 'react-grid-carousel'
import { TeamMember } from './TeamMember';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function OurTeam() {

    const page_slug = 'our-team';

    const [pageDetail, setPageDetail] = useState([]);
    const [teamsData, setTeamsData] = useState([]);

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });

        getPageDetail()
        getTeamsData()
    }, []);

    async function getPageDetail() {
        let result = await fetch(`${API_BASE_URL}/page-detail/${page_slug}`);
        result = await result.json();
        setPageDetail(result);
    }

    async function getTeamsData() {
        let result = await fetch(`${API_BASE_URL}/team-members`);
        result = await result.json();
        setTeamsData(result);
    }

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    {pageDetail.meta_title && <title>{`${pageDetail.meta_title}`}</title>}
                    {pageDetail.meta_description && <meta name="description" content={`${pageDetail.meta_description}`} />}
                    {pageDetail.meta_keywords && <meta name="keywords" content={pageDetail.meta_keywords} />}
                    <link rel="canonical" href={`${BASE_URL}/our-team/`} />
                </Helmet>

                {
                    pageDetail.detail ?
                        <>
                            <div className="ot-banner-section">
                                <img src={`${BASE_URL}/img/OurTeam/banner-dot.png`} alt="A company made of true professionals" className="ot-banner-img" data-aos="fade-left" />
                                <img src={`${BASE_URL}/img/OurTeam/banner-vector.png`} alt="Vector" className="ot-banner-vector" data-aos="fade-left" />

                                <img src={`${BASE_URL}/img/OurTeam/banner-rec-1.png`} alt="banner-rec-1" className="ot-banner-rec-1" />
                                <img src={`${BASE_URL}/img/OurTeam/banner-rec-2.png`} alt="banner-rec-2" className="ot-banner-rec-2" />
                                <img src={`${BASE_URL}/img/OurTeam/banner-rec-3.png`} alt="banner-rec-3" className="ot-banner-rec-3" />
                                <img src={`${BASE_URL}/img/OurTeam/banner-rec-4.png`} alt="banner-rec-4" className="ot-banner-rec-4" />

                                <div className="container-lg">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="ot-banner-content">
                                                <div data-aos="fade-up">
                                                    <h1>{`${pageDetail.detail.banner_title}`}</h1>
                                                </div>
                                                <div data-aos="fade-up" data-aos-delay="300">
                                                    <p>{`${pageDetail.detail.banner_description}`}</p>
                                                </div>
                                                <Link to={`${pageDetail.detail.banner_btn_link ?? ''}`} className="ot-banner-btn" data-aos="fade-up" data-aos-delay="500">{`${pageDetail.detail.banner_btn_text}`}</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="social-section">
                                    <div className="social-main" data-aos="fade-right" data-aos-delay="400">
                                        <div className="social-img">
                                            <img src={`${BASE_URL}/img/OurTeam/social.png`} alt="Social" />
                                        </div>
                                        <div className="social-row">
                                            <a href='https://www.facebook.com/CorporalityG' target="_blank"><i className="fa fa-facebook-f"></i></a>
                                            <a href='https://twitter.com/corporalityg' target="_blank"><i className="fa fa-twitter"></i></a>
                                            <a href='https://www.instagram.com/corporalityg/' target="_blank"><i className="fa fa-instagram"></i></a>
                                            <a href='https://www.linkedin.com/company/corporality/' target="_blank"><i className="fa fa-linkedin"></i></a>
                                            <a href='https://in.pinterest.com/CorporalityG/' target="_blank"><i className="fa fa-pinterest"></i></a>
                                            <a href='https://www.youtube.com/channel/UC4EISt8kHI4zzpmbIBMIBbg' target="_blank"><i className="fa fa-youtube-play"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="ot-leadership-section">
                                <div className="container-lg">
                                    <div className="row ot-l-row">
                                        <div className="col-lg-12">
                                            <div className="ot-l-title-content">
                                                <div data-aos="fade-up">
                                                    <h2>{`${pageDetail.detail.team_title}`}</h2>
                                                </div>
                                                <div data-aos="fade-up" data-aos-delay="300">
                                                    <p>{`${pageDetail.detail.team_description}`}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="ot-l-members">
                                                <div className="container-fluid px-0">
                                                    <div className="row ot-l-members-row">
                                                        <LeadershipMember
                                                            thumbnail={pageDetail.detail.team_member_1_image && `${API_IMG_URL}pages/${pageDetail.detail.team_member_1_image}`}
                                                            name={`${pageDetail.detail.team_member_1_name}`}
                                                            designation={`${pageDetail.detail.team_member_1_designation}`}
                                                            biography={`<p>${pageDetail.detail.team_member_1_bio}</p>`}
                                                            facebook={`${pageDetail.detail.team_member_1_facebook_url ?? ''}`}
                                                            linkedin={`${pageDetail.detail.team_member_1_linkedin_url ?? ''}`}
                                                            website={`${pageDetail.detail.team_member_1_website_url ?? ''}`}
                                                        />

                                                        <LeadershipMember
                                                            thumbnail={pageDetail.detail.team_member_2_image && `${API_IMG_URL}pages/${pageDetail.detail.team_member_2_image}`}
                                                            name={`${pageDetail.detail.team_member_2_name}`}
                                                            designation={`${pageDetail.detail.team_member_2_designation}`}
                                                            biography={`<p>${pageDetail.detail.team_member_2_bio}</p>`}
                                                            facebook={`${pageDetail.detail.team_member_2_facebook_url ?? ''}`}
                                                            linkedin={`${pageDetail.detail.team_member_1_linkedin_url ?? ''}`}
                                                            website={`${pageDetail.detail.team_member_1_website_url ?? ''}`}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                        : null
                }

                <div className="ot-team-members-section">
                    <div className="container-lg">
                        {
                            pageDetail.detail ?
                                <div className="row ot-tm-title-row">
                                    <div className="col-lg-12">
                                        <div className="ot-tm-content">
                                            {pageDetail.detail.priya_image && <img src={`${API_IMG_URL}pages/${pageDetail.detail.priya_image}`} alt="Priya Mishra" className="pm-avtar" />}
                                            {pageDetail.detail.priya_title_image && <img src={`${API_IMG_URL}pages/${pageDetail.detail.priya_title_image}`} alt="Priya Mishra Name" className="pm-name" />}
                                        </div>
                                    </div>
                                </div>
                                : null
                        }

                        <div className="row ot-tm-row">
                            <div className="col-lg-12">
                                <div className="ot-tm-title">Team Members</div>
                                {
                                    teamsData && teamsData.length > 0 ?
                                        <div className="ot-tm-list">
                                            <CarouselGrid cols={5} rows={1} gap={25} autoplay={4000} loop hideArrow={true} responsiveLayout={[{ breakpoint: 1199, cols: 4 }, { breakpoint: 887, cols: 3 }]}>
                                                {
                                                    teamsData.map((item) =>
                                                        <CarouselGrid.Item key={`${item.id}`}>
                                                            <TeamMember
                                                                avtar={item.image && `${API_IMG_URL}/${item.image}`}
                                                                name={`${item.full_name}`}
                                                                designation={`${item.designation}`}
                                                            />
                                                        </CarouselGrid.Item>
                                                    )
                                                }
                                            </CarouselGrid>
                                        </div>
                                        : null
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </HelmetProvider>
        </>
    )
}

export default OurTeam