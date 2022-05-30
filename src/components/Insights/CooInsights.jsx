import React, { useEffect, useState } from 'react'
import './Insights.css'
import { useParams, Link } from 'react-router-dom'
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../config'
import { FinTechItem } from './FinTechItem'
import { ArticleItem } from './ArticleItem'
import RecentBlogs from './RecentBlogs'

function CooInsights() {

    const params = useParams();
    const subCategory = 'coo';

    const [latestArticles, setLatestArticles] = useState([]);
    const [latestArticles2, setLatestArticles2] = useState([]);
    const [csuitBlogs, setCSuitBlogs] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [paginationLinks, setPaginationLinks] = useState([]);

    let linkLabel = '';

    useEffect(() => {
        getLatestArticles();
        getLatestArticles2();
        getCSuitBlogs()
        getBlogData();
    }, [params]);

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

    async function getBlogData(pageLink = '') {
        const categorySlug = "category=" + subCategory;
        const apiLink = (pageLink === '' ?
            API_BASE_URL + "/csuit-subcat-posts?" + categorySlug :
            pageLink + "&" + categorySlug
        );
        let result = await fetch(apiLink);
        result = await result.json();
        setBlogs(result.data);
        setPaginationLinks(result.links);
    }

    const paginate = (pageNumber) => {
        if (pageNumber) {
            getBlogData(pageNumber);
        }
        const topScroll = document.getElementById('insights-latest-section');
        window.scrollTo({
            top: topScroll.offsetTop - 100,
            behavior: "smooth"
        });
    }

    async function getCSuitBlogs() {
        const categorySlug = "category=csuit&subcategory=" + subCategory;
        const apiLink = (API_BASE_URL + "/csuit-cat-posts?" + categorySlug);

        let result = await fetch(apiLink);
        result = await result.json();
        setCSuitBlogs(result.data);
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
                                                            <>
                                                                {
                                                                    item.categories.map((category) =>
                                                                        <Link key={`${category.id}`} to={`/category/${category.category_slug}`} className="category">
                                                                            {category.category_name}
                                                                        </Link>
                                                                    )
                                                                }
                                                            </>
                                                            : null
                                                    }
                                                    <h1 className="title-first">
                                                        <Link to={`/article/${item.article_slug}`}>{item.article_title}</Link>
                                                    </h1>
                                                    <p>{item.article_subtitle}</p>
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

                <div id="insights-latest-section" className="container-lg">
                    {
                        blogs ?
                            <>
                                <div className="latest-insight-boxes-row">
                                    {
                                        blogs.map((item) =>
                                            <ArticleItem
                                                key={`${item.id}`}
                                                thumbnail={`${item.post_image ? API_IMG_URL + item.post_image : ''}`}
                                                title={`${item.post_title}`}
                                                slug={`${item.post_slug}`}
                                                shortDescription={`${item.post_short_description ? '<p>' + item.post_short_description + '</p>' : ''}`}
                                                category={item.categories[0] !== undefined ? item.categories[0].category_name : null}
                                                catSlug={item.categories[0] !== undefined ? item.categories[0].category_slug : null}
                                            />
                                        )
                                    }
                                </div>

                                {
                                    paginationLinks.length > 3 ?
                                        <div className="latest-insight-pagination-container">
                                            {
                                                paginationLinks.map((link, index, { length, lastIndex = length - 1 }) => {
                                                    linkLabel = `${link.label}`;
                                                    if (index === 0) {
                                                        linkLabel = <i className="fa fa-angle-left"></i>;
                                                    }
                                                    else if (index === lastIndex) {
                                                        linkLabel = <i className="fa fa-angle-right"></i>;
                                                    }
                                                    return <div key={index} className={`pagination-number${(index === 0) ? ' pagination-arrow pagination-prev' : ''} ${(index === lastIndex) ? ' pagination-arrow pagination-next' : ''} ${(link.active === true) ? 'pagination-active' : ''}`} onClick={() => paginate(link.url)}>{linkLabel}</div>
                                                }
                                                )
                                            }
                                        </div>
                                        : null
                                }
                            </>
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
                                <Link to="/category/csuit">CSuit <svg viewBox="0 0 10 16" focusable="false"><path d="m1.83288 15c-.20616 0-.42731-.0737-.58971-.2361-.324226-.3242-.324226-.8402 0-1.1645l5.58722-5.60223-5.58722-5.58722c-.324226-.32422-.324226-.84022 0-1.16445.32422-.324795.84022-.324795 1.16444-.01497l6.17694 6.17694c.1624.1624.23612.36857.23612.58971s-.08869.4273-.23612.58971l-6.17694 6.17691c-.1624.1624-.36857.2361-.57473.2361z" fill="currentColor" stroke="currentColor" strokeWidth=".831256"></path></svg></Link>
                            </div>

                            {
                                csuitBlogs ?
                                    <div className='row insights-news-row'>
                                        {
                                            csuitBlogs.slice(0, 6).map((item) =>
                                                <FinTechItem
                                                    key={`${item.id}`}
                                                    title={`${item.post_title}`}
                                                    slug={`${item.post_slug}`}
                                                    category={
                                                        item.categories ?
                                                            <>
                                                                {
                                                                    item.categories.map((item) =>
                                                                        <Link key={`${item.id}`} to={`/category/${item.category_slug}`}>{item.category_name}, </Link>
                                                                    )
                                                                }
                                                            </>
                                                            : null
                                                    }
                                                    subcategories={
                                                        item.subcategories ?
                                                            <>
                                                                {
                                                                    item.subcategories.map((item, index, subcategoriesCount) =>
                                                                        <Link key={`${item.id}`} to={`/category/${item.category_slug}`}>{item.category_name}{index !== subcategoriesCount.length - 1 ? ',' : ''} </Link>
                                                                    )
                                                                }
                                                            </>
                                                            : null
                                                    }
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
                                        <Link to={`/article/${latestArticles2.article_slug}`}>{latestArticles2.article_title}</Link>
                                        <div className='posted-date'>Posted <span className='date'>{latestArticles2.timeAgo}</span></div>
                                    </div>
                                    : null
                            }
                        </div>
                    </div>
                </div>
            </div>

            <RecentBlogs />
        </div>
    )
}

export default CooInsights