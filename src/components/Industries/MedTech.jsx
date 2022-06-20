import React, { useEffect, useState } from 'react'
import './industry.css'
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../config'
import { ReseachPaperSurveyItem } from './ReseachPaperSurveyItem'
import { Link } from 'react-router-dom'
import { OtherIndustryItem } from './OtherIndustryItem'
import { GetInvolved } from '../ServiceInsights/GetInvolved'
import { ServicesAskQuote } from '../ServicesAskQuote/ServicesAskQuote';
import AOS from "aos";

function MedTech() {

    const category = 'medtech';

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
        <div className='industry-page medtech-page'>
            <div className='industry-banner-section'>
                <img src={`${BASE_URL}/img/industries/industry-banner.png`} alt={`Industry Banner`} className="industry-banner-img" />

                <div className='industry-banner-content-main'>
                    <div className='container-lg'>
                        <div className='row'>
                            <div className='col-lg-4'>
                                <div className='industry-banner-content'>
                                    <h1>Med Tech Industry</h1>
                                    <div className='industry-banner-desc'>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien facilisi augue posuere fringilla. Sit dictum hac viverra ac urna. Accumsan vitae faucibus purus, ultrices consectetur aliquam duis massa arcu. Tellus in morbi massa at a neque, augue sed dapibus. Vitae dolor, commodo sit morbi purus. Porta ullamcorper non tortor mattis praesent mattis rutrum massa facilisis.</p>
                                        <p>Vitae dolor, commodo sit morbi purus. Porta ullamcorper non tortor mattis praesent mattis rutrum massa facilisis.</p>
                                        <p>Vitae dolor, commodo sit morbi purus. Porta ullamcorper non tortor mattis praesent mattis rutrum massa facilisis.</p>
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-8'>
                                <div className='row'>
                                    <div className='col-lg-8 offset-lg-4'>
                                        <div className='industry-banner-ebook'>
                                            <div className='industry-banner-form'>Form</div>
                                            <div className='industry-banner-dwn'>
                                                <div className='industry-banner-dwn-title'>E book download</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='row industry-banner-paper-survey-row'>
                                    <ReseachPaperSurveyItem
                                        title={`Reseach Paper`}
                                        slug={``}
                                    />

                                    <ReseachPaperSurveyItem
                                        title={`Survey`}
                                        slug={``}
                                    />
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
                                    latestIndustrialArticle ?
                                        <p>{latestIndustrialArticle.short_description}</p>
                                        : null
                                }

                                {
                                    realtedIndustrialArticles && realtedIndustrialArticles.length > 0 ?
                                        <>
                                            <p>Read the related blog</p>
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
                            
                            {
                                realtedIndustrialArticles && realtedIndustrialArticles.length > 0 ?
                                    <div className="row">
                                        <div className='col-lg-12'>
                                            <Link to={`/industry/category/${category}`} className='read_more_cat_ia'>Read More Blogs <svg viewBox="0 0 10 16" focusable="false"><path d="m1.83288 15c-.20616 0-.42731-.0737-.58971-.2361-.324226-.3242-.324226-.8402 0-1.1645l5.58722-5.60223-5.58722-5.58722c-.324226-.32422-.324226-.84022 0-1.16445.32422-.324795.84022-.324795 1.16444-.01497l6.17694 6.17694c.1624.1624.23612.36857.23612.58971s-.08869.4273-.23612.58971l-6.17694 6.17691c-.1624.1624-.36857.2361-.57473.2361z" fill="currentColor" stroke="currentColor" strokeWidth=".831256"></path></svg><svg viewBox="0 0 10 16" focusable="false"><path d="m1.83288 15c-.20616 0-.42731-.0737-.58971-.2361-.324226-.3242-.324226-.8402 0-1.1645l5.58722-5.60223-5.58722-5.58722c-.324226-.32422-.324226-.84022 0-1.16445.32422-.324795.84022-.324795 1.16444-.01497l6.17694 6.17694c.1624.1624.23612.36857.23612.58971s-.08869.4273-.23612.58971l-6.17694 6.17691c-.1624.1624-.36857.2361-.57473.2361z" fill="currentColor" stroke="currentColor" strokeWidth=".831256"></path></svg></Link>
                                        </div>
                                    </div>
                                    : null
                            }
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
                            <h2>Other Industries</h2>
                        </div>
                    </div>

                    <div className='row industry-other-industries-row'>
                        <OtherIndustryItem
                            icon={`${BASE_URL}/img/industries/nanotech.png`}
                            hoverIcon={`${BASE_URL}/img/industries/nanotech-hover.png`}
                            category={`Nanotech`}
                            slug={`nanotech`}
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
                            category={`Hightech`}
                            slug={`high-tech`}
                        />

                        <OtherIndustryItem
                            icon={`${BASE_URL}/img/industries/finance.png`}
                            hoverIcon={`${BASE_URL}/img/industries/finance-hover.png`}
                            category={`Finance`}
                            slug={`finance`}
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

export default MedTech