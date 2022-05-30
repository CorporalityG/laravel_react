import React, { useEffect } from 'react'
import './OurTeam.css'
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../config';
import AOS from "aos";
import { LeadershipMember } from './LeadershipMember';
import CarouselGrid from 'react-grid-carousel'
import { TeamMember } from './TeamMember';
import MetaTags from 'react-meta-tags';

function OurTeam() {

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);

    return (
        <>
            <MetaTags>
                <title>{`Our Team | A Company Made Of Top Marketing Professionals | Corporality`}</title>
                <meta name="description" content={`Our team is composed of customer-centric and top marketing professionals, consultants, strategists and creative talents delivering tailor-fit solutions for your business.`} />
                <link rel="canonical" href={`${BASE_URL}/our-team/`} />
            </MetaTags>

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
                                    <h1>A company made of true professionals</h1>
                                </div>
                                <div data-aos="fade-up" data-aos-delay="300">
                                    <p>Our team is composed of customer-centric consultants, strategists, and creative talents delivering tailor-fit solutions for your business.</p>
                                </div>
                                <Link to="/" className="ot-banner-btn" data-aos="fade-up" data-aos-delay="500">Work  With Us</Link>
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
                                    <h2>Leadership Team</h2>
                                </div>
                                <div data-aos="fade-up" data-aos-delay="300">
                                    <p>The Corporality team is all about commitment and accountability. Our directors have been in the industry for more than 17 years, and head the team in being passionate for the success of our clients. We value relationships, collaboration, intelligent work, and community.</p>
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
                                            thumbnail={`${BASE_URL}/img/OurTeam/leadership-priya.png`}
                                            name={`Priya Mishra`}
                                            designation={`CEO`}
                                            biography={`<p>“Corporality is a reflection of the core beliefs of its leaders, and the embodiment of the excellence of its teams. We at Corporality take pride in doing good work for our customers and honoured to play an es</p>`}
                                            facebook={``}
                                            linkedin={``}
                                            website={``}
                                        />

                                        <LeadershipMember
                                            thumbnail={`${BASE_URL}/img/OurTeam/leadership-jaish.png`}
                                            name={`JAISH`}
                                            designation={`COO`}
                                            biography={`<p>“The age of digital and booming progress of new intelligences in marketing is the fuel to our fire at Exante. We take every opportunity to learn and in turn educate and inspire others with practical</p>`}
                                            facebook={``}
                                            linkedin={``}
                                            website={``}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ot-team-members-section">
                <div className="container-lg">
                    <div className="row ot-tm-title-row">
                        <div className="col-lg-12">
                            <div className="ot-tm-content">
                                <img src={`${BASE_URL}/img/OurTeam/PriyaMishra.png`} alt="Priya Mishra" className="pm-avtar" />
                                <img src={`${BASE_URL}/img/OurTeam/PriyaMishra-Name.png`} alt="Priya Mishra Name" className="pm-name" />
                            </div>
                        </div>
                    </div>

                    <div className="row ot-tm-row">
                        <div className="col-lg-12">
                            <div className="ot-tm-title">Team Members</div>
                            <div className="ot-tm-list">
                                <CarouselGrid cols={5} rows={1} gap={25} autoplay={4000} loop hideArrow={true} responsiveLayout={[{ breakpoint: 1199, cols: 4 }, { breakpoint: 887, cols: 3 }]}>
                                    <CarouselGrid.Item>
                                        <TeamMember
                                            avtar={`${BASE_URL}/img/OurTeam/Saravanan.png`}
                                            name={`Saravanan`}
                                            designation={`Web Developer`}
                                        />
                                    </CarouselGrid.Item>

                                    <CarouselGrid.Item>
                                        <TeamMember
                                            avtar={`${BASE_URL}/img/OurTeam/Asha.png`}
                                            name={`Asha`}
                                            designation={`Web Developer`}
                                        />
                                    </CarouselGrid.Item>

                                    <CarouselGrid.Item>
                                        <TeamMember
                                            avtar={`${BASE_URL}/img/OurTeam/Kartik-Dholariya.png`}
                                            name={`Kartik Dholariya`}
                                            designation={`Senior Web Developer`}
                                        />
                                    </CarouselGrid.Item>

                                    <CarouselGrid.Item>
                                        <TeamMember
                                            avtar={`${BASE_URL}/img/OurTeam/Balaji.png`}
                                            name={`Balaji`}
                                            designation={`web developer`}
                                        />
                                    </CarouselGrid.Item>

                                    <CarouselGrid.Item>
                                        <TeamMember
                                            avtar={`${BASE_URL}/img/OurTeam/Poojitha-Kosuru.png`}
                                            name={`Poojitha Kosuru`}
                                            designation={`SEO Analyst`}
                                        />
                                    </CarouselGrid.Item>

                                    <CarouselGrid.Item>
                                        <TeamMember
                                            avtar={`${BASE_URL}/img/OurTeam/Neima-Chowdhury.png`}
                                            name={`Neima Chowdhury`}
                                            designation={`Content Writer`}
                                        />
                                    </CarouselGrid.Item>

                                    <CarouselGrid.Item>
                                        <TeamMember
                                            avtar={`${BASE_URL}/img/OurTeam/Pratik-Siddhanta.png`}
                                            name={`Pratik Siddhanta`}
                                            designation={`Content Writer`}
                                        />
                                    </CarouselGrid.Item>

                                    <CarouselGrid.Item>
                                        <TeamMember
                                            avtar={`${BASE_URL}/img/OurTeam/Maria-M-Dolosa.png`}
                                            name={`Maria M. Dolosa`}
                                            designation={`Content Writer`}
                                        />
                                    </CarouselGrid.Item>

                                    <CarouselGrid.Item>
                                        <TeamMember
                                            avtar={`${BASE_URL}/img/OurTeam/Niranjan-Manoj.png`}
                                            name={`Niranjan Manoj`}
                                            designation={`Video Creater`}
                                        />
                                    </CarouselGrid.Item>

                                    <CarouselGrid.Item>
                                        <TeamMember
                                            avtar={`${BASE_URL}/img/OurTeam/Senthil-Kumar.png`}
                                            name={`Senthil Kumar`}
                                            designation={`UI/UX Designer`}
                                        />
                                    </CarouselGrid.Item>

                                    <CarouselGrid.Item>
                                        <TeamMember
                                            avtar={`${BASE_URL}/img/OurTeam/Ian-Jade-Perez.png`}
                                            name={`Ian Jade Perez`}
                                            designation={`Graphic Designer`}
                                        />
                                    </CarouselGrid.Item>

                                    <CarouselGrid.Item>
                                        <TeamMember
                                            avtar={`${BASE_URL}/img/OurTeam/Balakrishnan.png`}
                                            name={`Balakrishnan`}
                                            designation={`UI/UX Designer`}
                                        />
                                    </CarouselGrid.Item>
                                </CarouselGrid>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurTeam