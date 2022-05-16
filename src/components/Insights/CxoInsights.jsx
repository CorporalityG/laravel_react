import React, { useEffect, useState } from 'react'
import './Insights.css'
import { Link } from 'react-router-dom'
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../config'
import { FinTechItem } from './FinTechItem'
import { MeditechItem } from './MeditechItem'
import { ArticleItem } from './ArticleItem'

function truncate(text, size) {
    return text?.length > size ? text.substr(0, size - 1) + '...' : text;
}

function CxoInsights() {

    const [latestArticles, setLatestArticles] = useState([]);
    const [latestArticles2, setLatestArticles2] = useState([]);
    const [constructionsArticles, setConstructionsArticles] = useState([]);
    const [finTechArticles, setFinTechArticles] = useState([]);
    const [mediTechArticles, setMediTechArticles] = useState([]);

    useEffect(() => {
        getLatestArticles();
        getLatestArticles2();
        getConstructionsArticles()
        getFinTechArticles()
        getMediTechArticles()
    }, []);

    async function getLatestArticles() {
        let result = await fetch(`${API_BASE_URL}/latest-articles`);
        result = await result.json();
        setLatestArticles(result);
    }

    async function getLatestArticles2() {
        let result = await fetch(`${API_BASE_URL}/latest-articles-2`);
        result = await result.json();
        setLatestArticles2(result);
    }

    async function getConstructionsArticles() {
        let result = await fetch(`${API_BASE_URL}/category-articles/constructions`);
        result = await result.json();
        setConstructionsArticles(result);
    }

    async function getFinTechArticles() {
        let result = await fetch(`${API_BASE_URL}/category-articles/fintech`);
        result = await result.json();
        setFinTechArticles(result);
    }

    async function getMediTechArticles() {
        let result = await fetch(`${API_BASE_URL}/category-articles/meditech`);
        result = await result.json();
        setMediTechArticles(result);
    }

    return (
        <div className="insights">

            <div className="insights-latest-section">
                <div className='container-fluid px-0'>
                {
                        latestArticles ?
                            <>
                                {
                                    latestArticles.slice(0, 1).map((item) =>
                                        <div key={`${item.id}`} className="row latest-insight-row">
                                            <div className="col-lg-6 px-lg-0 latest-insight-col">
                                                <div className="insight-content-first">
                                                    {
                                                        item.categories ?
                                                            <Link to={`/category/${item.categories[0].category_slug}`} className="category">
                                                                {item.categories[0].category_name}
                                                            </Link>
                                                            : null
                                                    }
                                                    <h3 className="title-first">
                                                        <Link to={`/article/${item.article_slug}`}>{item.article_title}</Link>
                                                    </h3>
                                                    <p><span dangerouslySetInnerHTML={{ __html: truncate(item.article_short_description ?? item.article_description, 175) }}></span></p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 pl-lg-0">
                                                <div className="insight-banner-first">
                                                    <Link to={`/article/${item.article_slug}`}>
                                                        {item.article_image && <img src={`${API_IMG_URL + item.article_image}`} alt={item.article_title} className="latest-insight-img" />}
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </>
                            : null
                    }
                </div>

                <div className="container-lg">
                    {
                        latestArticles ?
                            <div className="row latest-insight-boxes-row">
                                {
                                    latestArticles.slice(1, 5).map((item) =>
                                        <ArticleItem
                                            key={`${item.id}`}
                                            thumbnail={`${API_IMG_URL + item.article_image}`}
                                            title={`${item.article_title}`}
                                            slug={`${item.article_slug}`}
                                            category={item.categories !== undefined ? item.categories[0].category_name : null}
                                            catSlug={item.categories !== undefined ? item.categories[0].category_slug : null}
                                        />
                                    )
                                }
                            </div>
                            : null
                    }
                </div>
            </div>

            <div className="insights-constructions-section">
                <div className="container-lg">
                    <div className="row insights-c-title-row">
                        <div className="col-lg-12">
                            <div className="insights-heading">
                                <Link to="/category/constructions">Constructions <svg viewBox="0 0 10 16" focusable="false"><path d="m1.83288 15c-.20616 0-.42731-.0737-.58971-.2361-.324226-.3242-.324226-.8402 0-1.1645l5.58722-5.60223-5.58722-5.58722c-.324226-.32422-.324226-.84022 0-1.16445.32422-.324795.84022-.324795 1.16444-.01497l6.17694 6.17694c.1624.1624.23612.36857.23612.58971s-.08869.4273-.23612.58971l-6.17694 6.17691c-.1624.1624-.36857.2361-.57473.2361z" fill="currentColor" stroke="currentColor" strokeWidth=".831256"></path></svg></Link>
                            </div>
                        </div>
                    </div>

                    {
                        constructionsArticles ?
                            <>
                                {
                                    constructionsArticles.slice(0, 1).map((item) =>
                                        <div key={`${item.id}`} className="row insights-c-title-row">
                                            <div className="col-lg-6">
                                                <div className="c-banner-first">
                                                    <Link to={`/article/${item.article_slug}`}>
                                                        {item.article_image && <img src={`${API_IMG_URL + item.article_image}`} alt={item.article_title} className="latest-insight-img" />}
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 c-content-first-col">
                                                <div className="c-content-first">
                                                    <Link to="/category/constructions" className="category">Constructions</Link>
                                                    <h3 className="title-first">
                                                        <Link to={`/article/${item.article_slug}`}>{`${item.article_title}`}</Link>
                                                    </h3>
                                                    <p><span dangerouslySetInnerHTML={{ __html: truncate(item.article_short_description ?? item.article_description, 175) }}></span></p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </>
                            : null
                    }

                    {
                        constructionsArticles ?
                            <div className="row c-insight-boxes-row">
                                {
                                    constructionsArticles.slice(1, 4).map((item) =>
                                        <ArticleItem
                                            key={`${item.id}`}
                                            thumbnail={`${API_IMG_URL + item.article_image}`}
                                            title={`${item.article_title}`}
                                            slug={`${item.article_slug}`}
                                            category={`Constructions`}
                                            catSlug={`constructions`}
                                        />
                                    )
                                }

                                <div className="col-lg-3 col-sm-6 latest-insight-box-col c-insight-col-box">
                                    {
                                        constructionsArticles.slice(4, 6).map((item) =>
                                            <div key={`${item.id}`} className="row c-insight-col-row">
                                                <div className="col-lg-4">
                                                    <Link to={`/article/${item.article_slug}`}>
                                                        {item.article_image && <img src={`${API_IMG_URL + item.article_image}`} alt={item.article_title} className="latest-insight-img" />}
                                                    </Link>
                                                </div>
                                                <div className="col-lg-8">
                                                    <div className="c-insight-col-title">
                                                        <Link to={`/article/${item.article_slug}`}>{item.article_title}</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                            : null
                    }
                </div>
            </div>

            <div className="insights-podcasts-section">
                <div className="container-lg">
                    <div className="row insights-podcasts-title-row">
                        <div className="col-lg-8">
                            <div className="insights-heading">
                                <Link to="/">Podcasts <svg viewBox="0 0 10 16" focusable="false"><path d="m1.83288 15c-.20616 0-.42731-.0737-.58971-.2361-.324226-.3242-.324226-.8402 0-1.1645l5.58722-5.60223-5.58722-5.58722c-.324226-.32422-.324226-.84022 0-1.16445.32422-.324795.84022-.324795 1.16444-.01497l6.17694 6.17694c.1624.1624.23612.36857.23612.58971s-.08869.4273-.23612.58971l-6.17694 6.17691c-.1624.1624-.36857.2361-.57473.2361z" fill="currentColor" stroke="currentColor" strokeWidth=".831256"></path></svg></Link>
                            </div>
                            <div className="insights-p-music">
                                <iframe src="https://open.spotify.com/embed/show/1MaGRx67hlU9lyqPjiSQsK?utm_source=generator" width="100%" height="232" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                            </div>
                        </div>

                        <div className="col-lg-4 insights-p-col">
                            <div className="insights-p-about">
                                <img src={`${BASE_URL}/img/logo.png`} alt="logo" />
                                <div className='insights-p-about-title'>About</div>
                                <p>To Deliver The Best In Digital Marketing And Sales Solutions Using Innovation And Intuition To Craft Business Brilliance</p>
                                <Link to="/about-corporality">Learn more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="insights-video-section">
                <div className='insights-video-section-bg'></div>
                <div className="container-lg">
                    <div className="row insights-v-title-row">
                        <div className="col-lg-12">
                            <div className="insights-v-title">
                                <Link to="/">Popular Video <svg viewBox="0 0 10 16" focusable="false"><path d="m1.83288 15c-.20616 0-.42731-.0737-.58971-.2361-.324226-.3242-.324226-.8402 0-1.1645l5.58722-5.60223-5.58722-5.58722c-.324226-.32422-.324226-.84022 0-1.16445.32422-.324795.84022-.324795 1.16444-.01497l6.17694 6.17694c.1624.1624.23612.36857.23612.58971s-.08869.4273-.23612.58971l-6.17694 6.17691c-.1624.1624-.36857.2361-.57473.2361z" fill="currentColor" stroke="currentColor" strokeWidth=".831256"></path></svg></Link>
                            </div>
                        </div>
                    </div>

                    <div className="row insights-v-first-row">
                        <div className="col-lg-6">
                            <div className="v-banner-first">
                                <iframe width="100%" height="315" src="https://www.youtube.com/embed/HXLmQ7iUvhU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </div>
                        <div className="col-lg-6 c-content-first-col">
                            <div className="v-content-first">
                                <h3 className="v-title-first">
                                    <Link to="/about-corporality">About</Link>
                                </h3>
                                <p>To Deliver The Best In Digital Marketing And Sales Solutions Using Innovation And Intuition To Craft Business Brilliance</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="insights-fintech-section">
                <div className="container-lg">
                    <div className="row insights-fintech-row">
                        <div className='col-lg-9 col-md-8'>
                            <div className="insights-heading">
                                <Link to="/category/fintech">FinTech <svg viewBox="0 0 10 16" focusable="false"><path d="m1.83288 15c-.20616 0-.42731-.0737-.58971-.2361-.324226-.3242-.324226-.8402 0-1.1645l5.58722-5.60223-5.58722-5.58722c-.324226-.32422-.324226-.84022 0-1.16445.32422-.324795.84022-.324795 1.16444-.01497l6.17694 6.17694c.1624.1624.23612.36857.23612.58971s-.08869.4273-.23612.58971l-6.17694 6.17691c-.1624.1624-.36857.2361-.57473.2361z" fill="currentColor" stroke="currentColor" strokeWidth=".831256"></path></svg></Link>
                            </div>

                            {
                                finTechArticles ?
                                    <div className='row insights-news-row'>
                                        {
                                            finTechArticles.map((item) =>
                                                <FinTechItem
                                                    key={`${item.id}`}
                                                    title={`${item.article_title}`}
                                                    slug={`${item.article_slug}`}
                                                    category={`FinTech`}
                                                    date={`${item.created_at}`}
                                                />
                                            )
                                        }
                                    </div>
                                    : null
                            }
                        </div>

                        <div className='col-lg-3 col-md-4'>
                            <div className="insights-heading">
                                <Link to="/article">Latest Article <svg viewBox="0 0 10 16" focusable="false"><path d="m1.83288 15c-.20616 0-.42731-.0737-.58971-.2361-.324226-.3242-.324226-.8402 0-1.1645l5.58722-5.60223-5.58722-5.58722c-.324226-.32422-.324226-.84022 0-1.16445.32422-.324795.84022-.324795 1.16444-.01497l6.17694 6.17694c.1624.1624.23612.36857.23612.58971s-.08869.4273-.23612.58971l-6.17694 6.17691c-.1624.1624-.36857.2361-.57473.2361z" fill="currentColor" stroke="currentColor" strokeWidth=".831256"></path></svg></Link>
                            </div>

                            {
                                latestArticles2 ?
                                    <div className='latest-insight-item'>
                                        <Link to={`/${latestArticles2.article_slug}`}>{latestArticles2.article_title}</Link>
                                        <div className='posted-date'>Posted <span className='date'>{latestArticles2.timeAgo}</span></div>
                                    </div>
                                    : null
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="insights-meditech-explore-section">
                <div className="container-lg">
                    <div className="row insights-me-row">
                        <div className='col-lg-6'>
                            <div className="insights-heading">
                                <Link to="/category/meditech">Meditech <svg viewBox="0 0 10 16" focusable="false"><path d="m1.83288 15c-.20616 0-.42731-.0737-.58971-.2361-.324226-.3242-.324226-.8402 0-1.1645l5.58722-5.60223-5.58722-5.58722c-.324226-.32422-.324226-.84022 0-1.16445.32422-.324795.84022-.324795 1.16444-.01497l6.17694 6.17694c.1624.1624.23612.36857.23612.58971s-.08869.4273-.23612.58971l-6.17694 6.17691c-.1624.1624-.36857.2361-.57473.2361z" fill="currentColor" stroke="currentColor" strokeWidth=".831256"></path></svg></Link>
                            </div>
                            {
                                mediTechArticles ?
                                    <>
                                        {
                                            mediTechArticles.slice(0,3).map((item) =>
                                                <MeditechItem
                                                    key={`${item.id}`}
                                                    thumbnail={`${API_IMG_URL + item.article_image}`}
                                                    title={`${item.article_title}`}
                                                    slug={`${item.article_slug}`}
                                                    category={`Meditech`}
                                                    catSlug={`meditech`}
                                                />
                                            )
                                        }
                                    </>
                                    : null
                            }
                        </div>

                        <div className='col-lg-3 col-sm-6'>
                            <div className="insights-heading">
                                <Link to="/">Explore</Link>
                            </div>

                            <div className='explore-list'>
                                <Link to="/">How we create Impact</Link>
                                <Link to="/">Our Mini Events</Link>
                                <Link to="/">Become a Forum Partner</Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="insights-me-subscribe">
                                <img src={`${BASE_URL}/img/logo.png`} alt="logo" />
                                <div className='insights-subscribe-title'>Subscribe for updates</div>
                                <p>A weekly update of what’s on the Corporality Global</p>
                                <div className='insights-mes-form'>
                                    <input type="email" name="emailid" placeholder="Email address" className="emailid" />
                                    <button type="submit" className="insights-mes-btn">
                                        <svg viewBox="0 0 21 18" focusable="false" aria-hidden="true"><path d="M0.266478 8.99987C0.266478 9.33987 0.40148 9.66486 0.641486 9.90486C0.881493 10.1449 1.20648 10.2799 1.54648 10.2799L15.5852 10.2799L10.3814 15.1311C10.1189 15.3586 9.96136 15.6836 9.94261 16.0311C9.92511 16.3773 10.0489 16.7173 10.2864 16.9711C10.5239 17.2248 10.8538 17.3711 11.2014 17.3773C11.5488 17.3823 11.8839 17.2461 12.1288 16.9998L19.71 9.93741C19.9687 9.69491 20.1162 9.35616 20.1162 9.00115C20.1162 8.64614 19.9687 8.30739 19.71 8.0649L12.1289 0.999936C11.6113 0.51744 10.8014 0.544929 10.3189 1.06244C9.83637 1.57869 9.86511 2.38992 10.3814 2.87242L15.5852 7.71978L1.54648 7.71978C1.20648 7.71978 0.881492 7.85478 0.641492 8.09478C0.401492 8.33479 0.266482 8.65978 0.266482 8.99978L0.266478 8.99987Z" fill="currentColor"></path></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CxoInsights