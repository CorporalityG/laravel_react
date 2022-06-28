import React, { useEffect, useState } from 'react'
import './industry.css'
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../config'
import { Link } from 'react-router-dom'
import { OtherIndustryItem } from './OtherIndustryItem'
import { GetInvolved } from '../ServiceInsights/GetInvolved'
import { ServicesAskQuote } from '../ServicesAskQuote/ServicesAskQuote';
import AOS from "aos";

function descLimit(text, size) {
    return text?.length > size ? text.substr(0, size - 1) + '...' : text;
}

function Edtech() {

    const category = 'edtech';

    const [latestIndustrialArticle, setLatestIndustrialArticle] = useState([]);
    const [realtedIndustrialArticles, setRealtedIndustrialArticles] = useState([]);

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });

        getLatestIndustrialArticleData()
        getRealtedIndustrialArticlesData();
    }, []);

    async function getLatestIndustrialArticleData() {
        let result = await fetch(`${API_BASE_URL}/latest-industrial-article/${category}`);
        result = await result.json();
        setLatestIndustrialArticle(result);
    }

    async function getRealtedIndustrialArticlesData() {
        let result = await fetch(`${API_BASE_URL}/realted-industrial-articles/${category}`);
        result = await result.json();
        setRealtedIndustrialArticles(result);
    }

    return (
        <div className='industry-page edtech-page'>
            <div className='industry-banner-section'>
                <img src={`${BASE_URL}/img/industries/EduTech-banner.png`} alt={`EduTech Industry`} className="industry-banner-img" />

                <div className='industry-banner-content-main'>
                    <div className='container-lg'>
                        <div className='row'>
                            <div className='col-lg-4'>
                                <div className='industry-banner-content'>
                                    <h1>EduTech Industry</h1>
                                    <div className='industry-banner-desc'>
                                        <p>By 2028, experts are predicting that the edtech industry is going to surpass $377 to make schooling more accessible and convenient for children with varying needs. As education and training is the backbone of communities, technology is becoming useful to share information and skills at a faster rate.</p>
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-8'>
                                <div className='row'>
                                    <div className='col-lg-6 offset-lg-5'>
                                        <div className='industry-banner-ebook'>
                                            <div className='ib-ebook-ttile'>Ebook</div>
                                            <img src={`${BASE_URL}/img/industries/CORPORALITY-STRIKERS-bg.png`} alt={`CORPORALITY STRIKERS`} className="industry-cs" />
                                            <img src={`${BASE_URL}/img/industries/cs-pattern.png`} alt={`cs-pattern`} className="industry-cs-pattern" />
                                            <Link to={`/`} className='industry-cs-link'>Download</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className='row industry-banner-paper-survey-row'>
                                    <div className='col-md-6'>
                                        <div className='industry-banner-paper-survey-item industry-banner-paper'>
                                            <div className='paper-survey-item-title'>Research Paper</div>
                                            <div className='paper-survey-item-subtitle'>CAN THE MEDTECH INDUSTRY LOOK UP TO MARKETING FOR A SOLUTION?</div>
                                            <Link to={`/`} className='paper-survey-item-link'>Start Reading</Link>
                                        </div>
                                    </div>

                                    <div className='col-md-6'>
                                        <div className='industry-banner-paper-survey-item industry-banner-survey'>
                                            <div className='ib-s-title'>Survey</div>
                                            <img src={`${BASE_URL}/img/industries/your-om.png`} alt={`your-om`} className="industry-your-om" />
                                            <Link to={`/`} className='paper-survey-item-link'>Get Started</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='industry-blog-name-section'>
                <div className='container-lg'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            {
                                latestIndustrialArticle ?
                                    <h2>{latestIndustrialArticle.title}</h2>
                                    : null
                            }
                        </div>

                        <div className='col-lg-6'>
                            <div className='industry-blog-name-desc'>
                                {
                                    latestIndustrialArticle.title ?
                                        <p>
                                            <span dangerouslySetInnerHTML={{ __html: descLimit(latestIndustrialArticle.short_description ?? latestIndustrialArticle.description, 250) }}></span>
                                            <Link to={`/industry/${latestIndustrialArticle.slug}`}>Read More</Link>
                                        </p>
                                        : null
                                }

                                {
                                    realtedIndustrialArticles && realtedIndustrialArticles.length > 0 ?
                                        <>
                                            <p className='industry-blog-name-related'>Read the related blog</p>
                                            <ul>
                                                {
                                                    realtedIndustrialArticles.map((item) =>
                                                        <li key={`${item.id}`}>
                                                            <Link to={`/industry/${item.slug}`}>{item.title}</Link>
                                                        </li>
                                                    )
                                                }
                                            </ul>
                                        </>
                                        : null
                                }
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            {
                                latestIndustrialArticle ?
                                    <>
                                        {
                                            latestIndustrialArticle.image ?
                                                <img src={`${API_IMG_URL + latestIndustrialArticle.image}`} alt={`${latestIndustrialArticle.title}`} className="blog-name-img" />
                                                : null
                                        }
                                    </>
                                    : null
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className='industry-other-industries-section'>
                <div className='container-lg'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <h2>Related Industries</h2>
                        </div>
                    </div>

                    <div className='row industry-other-industries-row'>
                        <OtherIndustryItem
                            icon={`${BASE_URL}/img/industries/nanotech.png`}
                            hoverIcon={`${BASE_URL}/img/industries/nanotech-hover.png`}
                            category={`Information Technology`}
                            slug={`information-technology`}
                        />

                        <OtherIndustryItem
                            icon={`${BASE_URL}/img/industries/metal-industry.png`}
                            hoverIcon={`${BASE_URL}/img/industries/metal-industry-hover.png`}
                            category={`Metal Industry`}
                            slug={`metal`}
                        />

                        <OtherIndustryItem
                            icon={`${BASE_URL}/img/industries/hightech.png`}
                            hoverIcon={`${BASE_URL}/img/industries/hightech-hover.png`}
                            category={`Utilities and Energy`}
                            slug={`utilities-and-energy`}
                        />

                        <OtherIndustryItem
                            icon={`${BASE_URL}/img/industries/finance.png`}
                            hoverIcon={`${BASE_URL}/img/industries/finance-hover.png`}
                            category={`Biotech`}
                            slug={`biotech`}
                        />

                        <OtherIndustryItem
                            icon={`${BASE_URL}/img/industries/construction.png`}
                            hoverIcon={`${BASE_URL}/img/industries/construction-hover.png`}
                            category={`Construction`}
                            slug={`construction`}
                        />

                        <OtherIndustryItem
                            icon={`${BASE_URL}/img/industries/agriculture.png`}
                            hoverIcon={`${BASE_URL}/img/industries/agriculture-hover.png`}
                            category={`Agriculture`}
                            slug={`agriculture`}
                        />

                        <OtherIndustryItem
                            icon={`${BASE_URL}/img/industries/geospatial.png`}
                            hoverIcon={`${BASE_URL}/img/industries/geospatial-hover.png`}
                            category={`Geospatial`}
                            slug={`geospatial`}
                        />

                        <OtherIndustryItem
                            icon={`${BASE_URL}/img/industries/manufacturing.png`}
                            hoverIcon={`${BASE_URL}/img/industries/manufacturing-hover.png`}
                            category={`Manufacturing`}
                            slug={`manufacturing`}
                        />
                    </div>
                </div>
            </div>

            <div className='industry-global-conference-section'>
                <img src={`${BASE_URL}/img/industries/global-conference-bg.png`} alt={`Global Conference`} className="industry-global-conference-banner-bg" />

                <div className='industry-global-conference-content-main'>
                    <div className='container-lg'>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className='industry-global-conference-content'>
                                    <p><span>Corporality Global</span> is organising its yearly conference in Sydney,</p>

                                    <p>For pricing and registration also of the 2022 event, check on </p>

                                    <a href='https://corporality.global/club/corporality-global-event/#Ticket' target="_blank">Register Now</a>
                                </div>
                            </div>

                            <div className='col-lg-6'>
                                <div className='industry-global-conference-img'>
                                    <a href='https://corporality.global/club/corporality-global-event/#Ticket' target="_blank">
                                        <img src={`${BASE_URL}/img/industries/global-conference-banner.png`} alt={`Global Conference 2022`} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <GetInvolved />

            <ServicesAskQuote />

        </div>
    )
}

export default Edtech