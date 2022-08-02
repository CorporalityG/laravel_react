import React, { useEffect, useState } from 'react'
import './Blogs2.css'
import { Link } from 'react-router-dom'
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../config'
import { PopularVideoItem } from './PopularVideoItem'
import { CovidItem } from './CovidItem'
import { BlogItem } from './BlogItem'
import { Helmet } from "react-helmet";
import Moment from 'moment';
import Carousel from 'react-bootstrap/Carousel'
import { AnnouncementItem } from './AnnouncementItem';
import { GetInvolved } from '../ServiceInsights/GetInvolved'

function truncate(text, size) {
    return text?.length > size ? text.substr(0, size - 1) + '...' : text;
}

function Blogs2() {

    const [latestBlog, setLatestBlog] = useState([]);
    const [latestBlog2, setLatestBlog2] = useState([]);
    const [digitalMediaMarketingBlog, setDigitalMediaMarketingBlog] = useState([]);
    const [randomBlogs, setRandomBlogs] = useState([]);
    const [brandPositioningBlog, setBrandPositioningBlog] = useState([]);
    const [goToMarketingBlog, setGoToMarketingBlog] = useState([]);
    const [accountBasedMarketingBlog, setAccountBasedMarketingBlog] = useState([]);
    const [interactiveBlueprintBlog, setInteractiveBlueprintBlog] = useState([]);
    const [announcements, setAnnouncements] = useState([]);

    useEffect(() => {
        getLatestBlog();
        getLatestBlog2();
        getDigitalMediaMarketingBlog()
        getRandomBlogs();
        getBrandPositioningBlogs()
        getGoToMarketingBlog()
        getAccountBasedMarketingBlog()
        getInteractiveBlueprintBlog()
        getAnnouncements();
    }, []);

    async function getLatestBlog() {
        let result = await fetch(API_BASE_URL + "/latest-blog");
        result = await result.json();
        setLatestBlog(result);
    }

    async function getLatestBlog2() {
        let result = await fetch(API_BASE_URL + "/latest-blog-2");
        result = await result.json();
        setLatestBlog2(result);
    }

    async function getDigitalMediaMarketingBlog() {
        let result = await fetch(`${API_BASE_URL}/category-posts/digital-media-marketing`);
        result = await result.json();
        setDigitalMediaMarketingBlog(result);
    }

    async function getRandomBlogs() {
        let result = await fetch(API_BASE_URL + "/random-blogs");
        result = await result.json();
        setRandomBlogs(result);
    }

    async function getBrandPositioningBlogs() {
        let result = await fetch(`${API_BASE_URL}/category-posts/brand-positioning`);
        result = await result.json();
        setBrandPositioningBlog(result);
    }

    async function getGoToMarketingBlog() {
        let result = await fetch(`${API_BASE_URL}/category-posts/go-to-marketing`);
        result = await result.json();
        setGoToMarketingBlog(result);
    }

    async function getAccountBasedMarketingBlog() {
        let result = await fetch(`${API_BASE_URL}/category-posts/account-based-marketing`);
        result = await result.json();
        setAccountBasedMarketingBlog(result);
    }

    async function getInteractiveBlueprintBlog() {
        let result = await fetch(`${API_BASE_URL}/category-posts/interactive-blueprint`);
        result = await result.json();
        setInteractiveBlueprintBlog(result);
    }

    async function getAnnouncements() {
        let result = await fetch(`${API_BASE_URL}/csuits-announcement`);
        result = await result.json();
        setAnnouncements(result);
    }

    return (
        <>
            <Helmet>
                <title>{`What is Corporate Strategy? - Definition | Meaning | Example`}</title>
                <meta name="description" content={`Corporate strategy encompasses a firm’s corporate actions with the aim to achieve company objectives while achieving a competitive advantage.`} />
                <meta
                    name="keywords"
                    content="corporate marketing strategy"
                />
                <link rel="canonical" href={`${BASE_URL}/blog/`} />
            </Helmet>

            <div className="blog2">

                <div className="blog2-latest-section">
                    <div className="container-lg">
                        {
                            latestBlog ?
                                <div className="row latest-blog-row">
                                    <div className="col-lg-6 px-lg-0 latest-blog-col">
                                        <div className="blog-content-first">
                                            <div className='blog-content-first-mm'>Modeling & Methodology</div>
                                            <div className='blog-content-first-la'>Latest Article</div>
                                            {
                                                latestBlog.categories ?
                                                    <Link to={`/category/${latestBlog.categories[0].category_slug}`} className="category">
                                                        {latestBlog.categories[0].category_name}
                                                    </Link>
                                                    : null
                                            }
                                            <h1 className="title-first">
                                                <Link to={`/${latestBlog.post_slug}`}>{latestBlog.post_title}</Link>
                                            </h1>
                                            <p><span dangerouslySetInnerHTML={{ __html: truncate(latestBlog.post_short_description ?? latestBlog.post_description, 175) }}></span></p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 pl-lg-0">
                                        <div className="blog-banner-first">
                                            <Link to={`/${latestBlog.post_slug}`}>
                                                {latestBlog.post_image && <img src={API_IMG_URL + latestBlog.post_image} alt={latestBlog.post_title} className="latest-blog-img" />}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                : null
                        }

                        {
                            latestBlog2 ?
                                <div className="row latest-blog-boxes-row">
                                    {
                                        latestBlog2.map((item, index) =>
                                            <BlogItem
                                                key={`${item.id}`}
                                                uniqueKey={`${item.id + index}`}
                                                thumbnail={`${API_IMG_URL + item.post_image}`}
                                                title={`${item.post_title}`}
                                                slug={`${item.post_slug}`}
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

                <div className="blog2-corporate-strategy-section">
                    <div className="container-lg">
                        <div className="row blog2-cs-title-row">
                            <div className="col-lg-12">
                                <div className="blog2-heading">
                                    <div className='blog2-heading-main'>Signature Services</div>

                                    <Link to="/category/brand-positioning">Brand Positioning <svg viewBox="0 0 10 16" focusable="false"><path d="m1.83288 15c-.20616 0-.42731-.0737-.58971-.2361-.324226-.3242-.324226-.8402 0-1.1645l5.58722-5.60223-5.58722-5.58722c-.324226-.32422-.324226-.84022 0-1.16445.32422-.324795.84022-.324795 1.16444-.01497l6.17694 6.17694c.1624.1624.23612.36857.23612.58971s-.08869.4273-.23612.58971l-6.17694 6.17691c-.1624.1624-.36857.2361-.57473.2361z" fill="currentColor" stroke="currentColor" strokeWidth=".831256"></path></svg></Link>
                                </div>
                            </div>
                        </div>

                        {
                            brandPositioningBlog ?
                                <>
                                    {
                                        brandPositioningBlog.slice(0, 1).map((item) =>
                                            <div key={`${item.id}`} className="row blog2-cs-title-row">
                                                <div className="col-lg-6">
                                                    <div className="cs-banner-first">
                                                        <Link to={`/${item.post_slug}`}>
                                                            {item.post_image && <img src={API_IMG_URL + item.post_image} alt={item.post_title} className="latest-blog-img" />}
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 cs-content-first-col">
                                                    <div className="cs-content-first">
                                                        {
                                                            item.categories ?
                                                                <>
                                                                    {
                                                                        item.categories.slice(0, 1).map((category) =>
                                                                            <Link key={`${category.id}`} to={`/category/${category.category_slug}`} className="category">{category.category_name}</Link>
                                                                        )
                                                                    }
                                                                </>
                                                                : null
                                                        }
                                                        <h3 className="title-first">
                                                            <Link to={`/${item.post_slug}`}>{`${item.post_title}`}</Link>
                                                        </h3>
                                                        <p><span dangerouslySetInnerHTML={{ __html: truncate(item.post_short_description ?? item.post_description, 175) }}></span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                </>
                                : null
                        }

                        {
                            brandPositioningBlog ?
                                <>
                                    <div className="row cs-blog-boxes-row">
                                        {
                                            brandPositioningBlog.slice(1, 4).map((item, index) =>
                                                <BlogItem
                                                    key={`${item.id}`}
                                                    uniqueKey={`${index + item.id}`}
                                                    thumbnail={`${API_IMG_URL + item.post_image}`}
                                                    title={`${item.post_title}`}
                                                    slug={`${item.post_slug}`}
                                                    category={item.categories[0] !== undefined ? item.categories[0].category_name : null}
                                                    catSlug={item.categories[0] !== undefined ? item.categories[0].category_slug : null}
                                                />
                                            )
                                        }

                                        <div className="col-lg-3 col-sm-6 latest-blog-box-col cs-blog-col-box">
                                            {
                                                brandPositioningBlog.slice(4, 6).map((item) =>
                                                    <div className="row cs-blog-col-row" key={`${item.id}`}>
                                                        <div className="col-lg-4">
                                                            <Link to={`/${item.post_slug}`}>
                                                                {item.post_image && <img src={API_IMG_URL + item.post_image} alt={item.post_title} className="latest-blog-img" />}
                                                            </Link>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <div className="cs-blog-col-title">
                                                                <Link to={`/${item.post_slug}`}>{item.post_title}</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className='col-lg-12 blogs_btn-col'>
                                            <Link to="/category/brand-positioning" className='know_more_blogs blogs_btn'>Read More Blogs <svg viewBox="0 0 10 16" focusable="false"><path d="m1.83288 15c-.20616 0-.42731-.0737-.58971-.2361-.324226-.3242-.324226-.8402 0-1.1645l5.58722-5.60223-5.58722-5.58722c-.324226-.32422-.324226-.84022 0-1.16445.32422-.324795.84022-.324795 1.16444-.01497l6.17694 6.17694c.1624.1624.23612.36857.23612.58971s-.08869.4273-.23612.58971l-6.17694 6.17691c-.1624.1624-.36857.2361-.57473.2361z" fill="currentColor" stroke="currentColor" strokeWidth=".831256"></path></svg><svg viewBox="0 0 10 16" focusable="false"><path d="m1.83288 15c-.20616 0-.42731-.0737-.58971-.2361-.324226-.3242-.324226-.8402 0-1.1645l5.58722-5.60223-5.58722-5.58722c-.324226-.32422-.324226-.84022 0-1.16445.32422-.324795.84022-.324795 1.16444-.01497l6.17694 6.17694c.1624.1624.23612.36857.23612.58971s-.08869.4273-.23612.58971l-6.17694 6.17691c-.1624.1624-.36857.2361-.57473.2361z" fill="currentColor" stroke="currentColor" strokeWidth=".831256"></path></svg></Link>
                                        </div>
                                    </div>
                                </>
                                : null
                        }
                    </div>

                    <div className="container-lg">
                        <div className="row blog2-cs-title-row">
                            <div className="col-lg-12">
                                <div className="blog2-heading not-before">
                                    <Link to="/category/digital-media-marketing">Digital Media Marketing <svg viewBox="0 0 10 16" focusable="false"><path d="m1.83288 15c-.20616 0-.42731-.0737-.58971-.2361-.324226-.3242-.324226-.8402 0-1.1645l5.58722-5.60223-5.58722-5.58722c-.324226-.32422-.324226-.84022 0-1.16445.32422-.324795.84022-.324795 1.16444-.01497l6.17694 6.17694c.1624.1624.23612.36857.23612.58971s-.08869.4273-.23612.58971l-6.17694 6.17691c-.1624.1624-.36857.2361-.57473.2361z" fill="currentColor" stroke="currentColor" strokeWidth=".831256"></path></svg></Link>
                                </div>
                            </div>
                        </div>

                        {
                            digitalMediaMarketingBlog ?
                                <>
                                    {
                                        digitalMediaMarketingBlog.slice(0, 1).map((item) =>
                                            <div key={`${item.id}`} className="row blog2-cs-title-row">
                                                <div className="col-lg-6">
                                                    <div className="cs-banner-first">
                                                        <Link to={`/${item.post_slug}`}>
                                                            {item.post_image && <img src={API_IMG_URL + item.post_image} alt={item.post_title} className="latest-blog-img" />}
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 cs-content-first-col">
                                                    <div className="cs-content-first">
                                                        {
                                                            item.categories ?
                                                                <>
                                                                    {
                                                                        item.categories.slice(0, 1).map((category) =>
                                                                            <Link key={`${category.id}`} to={`/category/${category.category_slug}`} className="category">{category.category_name}</Link>
                                                                        )
                                                                    }
                                                                </>
                                                                : null
                                                        }
                                                        <h3 className="title-first">
                                                            <Link to={`/${item.post_slug}`}>{`${item.post_title}`}</Link>
                                                        </h3>
                                                        <p><span dangerouslySetInnerHTML={{ __html: truncate(item.post_short_description ?? item.post_description, 175) }}></span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                </>
                                : null
                        }

                        {
                            digitalMediaMarketingBlog ?
                                <>
                                    <div className="row cs-blog-boxes-row">
                                        {
                                            digitalMediaMarketingBlog.slice(1, 4).map((item, index) =>
                                                <BlogItem
                                                    key={`${item.id}`}
                                                    uniqueKey={`${index + item.id}`}
                                                    thumbnail={item.post_image && `${API_IMG_URL + item.post_image}`}
                                                    title={`${item.post_title}`}
                                                    slug={`${item.post_slug}`}
                                                    category={item.categories[0] !== undefined ? item.categories[0].category_name : null}
                                                    catSlug={item.categories[0] !== undefined ? item.categories[0].category_slug : null}
                                                />
                                            )
                                        }

                                        <div className="col-lg-3 col-sm-6 latest-blog-box-col cs-blog-col-box">
                                            {
                                                digitalMediaMarketingBlog.slice(4, 6).map((item, index) =>
                                                    <div className="row cs-blog-col-row" key={`${item.id + index}-${index}`}>
                                                        <div className="col-lg-4">
                                                            <Link to={`/${item.post_slug}`}>
                                                                {item.post_image && <img src={API_IMG_URL + item.post_image} alt={item.post_title} className="latest-blog-img" />}
                                                            </Link>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <div className="cs-blog-col-title">
                                                                <Link to={`/${item.post_slug}`}>{item.post_title}</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className='col-lg-12 blogs_btn-col'>
                                            <Link to="/category/digital-media-marketing" className='know_more_blogs blogs_btn'>Read More Blogs <svg viewBox="0 0 10 16" focusable="false"><path d="m1.83288 15c-.20616 0-.42731-.0737-.58971-.2361-.324226-.3242-.324226-.8402 0-1.1645l5.58722-5.60223-5.58722-5.58722c-.324226-.32422-.324226-.84022 0-1.16445.32422-.324795.84022-.324795 1.16444-.01497l6.17694 6.17694c.1624.1624.23612.36857.23612.58971s-.08869.4273-.23612.58971l-6.17694 6.17691c-.1624.1624-.36857.2361-.57473.2361z" fill="currentColor" stroke="currentColor" strokeWidth=".831256"></path></svg><svg viewBox="0 0 10 16" focusable="false"><path d="m1.83288 15c-.20616 0-.42731-.0737-.58971-.2361-.324226-.3242-.324226-.8402 0-1.1645l5.58722-5.60223-5.58722-5.58722c-.324226-.32422-.324226-.84022 0-1.16445.32422-.324795.84022-.324795 1.16444-.01497l6.17694 6.17694c.1624.1624.23612.36857.23612.58971s-.08869.4273-.23612.58971l-6.17694 6.17691c-.1624.1624-.36857.2361-.57473.2361z" fill="currentColor" stroke="currentColor" strokeWidth=".831256"></path></svg></Link>
                                        </div>
                                    </div>
                                </>
                                : null
                        }
                    </div>
                </div>

                <div className='b-announcement-slider-section'>
                    {
                        announcements ?
                            <Carousel indicators={false} interval={5000}>
                                {
                                    announcements.map((item) =>
                                        <Carousel.Item key={`${item.id}`}>
                                            <AnnouncementItem
                                                thumbnail={`${item.image ? API_IMG_URL + item.image : ''}`}
                                                title={`${item.title}`}
                                                slug={`csuit/${item.slug}`}
                                                category={item.subcategories[0] !== undefined ? item.subcategories[0].category_name : null}
                                            />
                                        </Carousel.Item>
                                    )
                                }
                            </Carousel>
                            : null
                    }
                </div>

                <div className="blog2-podcasts-section">
                    <div className="container-lg">
                        <div className="row blog2-podcasts-title-row">
                            <div className="col-lg-8">
                                <div className="blog2-heading">
                                    <Link to="/">Podcasts <svg viewBox="0 0 10 16" focusable="false"><path d="m1.83288 15c-.20616 0-.42731-.0737-.58971-.2361-.324226-.3242-.324226-.8402 0-1.1645l5.58722-5.60223-5.58722-5.58722c-.324226-.32422-.324226-.84022 0-1.16445.32422-.324795.84022-.324795 1.16444-.01497l6.17694 6.17694c.1624.1624.23612.36857.23612.58971s-.08869.4273-.23612.58971l-6.17694 6.17691c-.1624.1624-.36857.2361-.57473.2361z" fill="currentColor" stroke="currentColor" strokeWidth=".831256"></path></svg></Link>
                                </div>
                                <div className="blog2-p-music">
                                    <iframe src="https://open.spotify.com/embed/show/1MaGRx67hlU9lyqPjiSQsK?utm_source=generator" width="100%" height="232" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                                </div>
                            </div>

                            <div className="col-lg-4 blog2-p-col">
                                <div className="blog2-p-about">
                                    <img src={`${BASE_URL}/img/Blogs2/logo.png`} alt="logo" />
                                    <div className='blog2-p-about-title'>About</div>
                                    <p>To Deliver The Best In Digital Marketing And Sales Solutions Using Innovation And Intuition To Craft Business Brilliance</p>
                                    <Link to="/about-corporality">Learn more</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="blog2-video-section">
                    {/* <div className='blog2-video-section-bg'></div> */}
                    <div className="container-lg">
                        <div className="row blog2-v-title-row">
                            <div className="col-lg-12">
                                <div className="blog2-v-title">
                                    <Link to="/">Popular Video <svg viewBox="0 0 10 16" focusable="false"><path d="m1.83288 15c-.20616 0-.42731-.0737-.58971-.2361-.324226-.3242-.324226-.8402 0-1.1645l5.58722-5.60223-5.58722-5.58722c-.324226-.32422-.324226-.84022 0-1.16445.32422-.324795.84022-.324795 1.16444-.01497l6.17694 6.17694c.1624.1624.23612.36857.23612.58971s-.08869.4273-.23612.58971l-6.17694 6.17691c-.1624.1624-.36857.2361-.57473.2361z" fill="currentColor" stroke="currentColor" strokeWidth=".831256"></path></svg></Link>
                                </div>
                            </div>
                        </div>

                        <div className="row blog2-v-first-row">
                            <div className="col-lg-6">
                                <div className="v-banner-first">
                                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/CsiHaS6Qtgs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                            </div>
                            <div className="col-lg-6 cs-content-first-col">
                                <div className="v-content-first">
                                    <h3 className="v-title-first">
                                        <Link to="/about-corporality">About</Link>
                                    </h3>
                                    <p>To Deliver The Best In Digital Marketing And Sales Solutions Using Innovation And Intuition To Craft Business Brilliance</p>
                                </div>
                            </div>
                        </div>

                        <div className="row video-boxes-row">
                            <PopularVideoItem
                                videoUrl={`https://www.youtube.com/embed/9oj2SG6Uloc`}
                            />

                            <PopularVideoItem
                                videoUrl={`https://www.youtube.com/embed/pfjTduMlodA`}
                            />

                            <PopularVideoItem
                                videoUrl={`https://www.youtube.com/embed/CwU_67Q6IEM`}
                            />

                            <PopularVideoItem
                                videoUrl={`https://www.youtube.com/embed/EG9L--THsNA`}
                            />
                        </div>
                    </div>
                </div>

                <div className="blog2-covid-explore-section">
                    <div className="container-lg">
                        <div className="row blog2-ce-row">
                            <div className='col-lg-6'>
                                <div className="blog2-heading">
                                    <div className='blog2-heading-main'>Premium Services</div>
                                </div>

                                {
                                    goToMarketingBlog ?
                                        <>
                                            {
                                                goToMarketingBlog.slice(0, 1).map((item, index) =>
                                                    <CovidItem
                                                        key={`${item.id}`}
                                                        uniqueKey={`${item.id + index}-c`}
                                                        thumbnail={item.post_image && `${API_IMG_URL + item.post_image}`}
                                                        title={`${item.post_title}`}
                                                        slug={`${item.post_slug}`}
                                                        category={item.categories[0] !== undefined ? item.categories[0].category_name : null}
                                                        catSlug={item.categories[0] !== undefined ? item.categories[0].category_slug : null}
                                                    />
                                                )
                                            }
                                        </>
                                        : null
                                }

                                {
                                    accountBasedMarketingBlog ?
                                        <>
                                            {
                                                accountBasedMarketingBlog.slice(0, 1).map((item, index) =>
                                                    <CovidItem
                                                        key={`${item.id}`}
                                                        uniqueKey={`${item.id + index}-c`}
                                                        thumbnail={item.post_image && `${API_IMG_URL + item.post_image}`}
                                                        title={`${item.post_title}`}
                                                        slug={`${item.post_slug}`}
                                                        category={item.categories[0] !== undefined ? item.categories[0].category_name : null}
                                                        catSlug={item.categories[0] !== undefined ? item.categories[0].category_slug : null}
                                                    />
                                                )
                                            }
                                        </>
                                        : null
                                }

                                {
                                    interactiveBlueprintBlog ?
                                        <>
                                            {
                                                interactiveBlueprintBlog.slice(0, 1).map((item, index) =>
                                                    <CovidItem
                                                        key={`${item.id}`}
                                                        uniqueKey={`${item.id + index}-c`}
                                                        thumbnail={item.post_image && `${API_IMG_URL + item.post_image}`}
                                                        title={`${item.post_title}`}
                                                        slug={`${item.post_slug}`}
                                                        category={item.categories[0] !== undefined ? item.categories[0].category_name : null}
                                                        catSlug={item.categories[0] !== undefined ? item.categories[0].category_slug : null}
                                                    />
                                                )
                                            }
                                        </>
                                        : null
                                }

                                <div className="row">
                                    <div className='col-lg-12 blogs_btn-col'>
                                        <Link to="/category/go-to-marketing" className='know_more_blogs blogs_btn'>Read More Blogs <svg viewBox="0 0 10 16" focusable="false"><path d="m1.83288 15c-.20616 0-.42731-.0737-.58971-.2361-.324226-.3242-.324226-.8402 0-1.1645l5.58722-5.60223-5.58722-5.58722c-.324226-.32422-.324226-.84022 0-1.16445.32422-.324795.84022-.324795 1.16444-.01497l6.17694 6.17694c.1624.1624.23612.36857.23612.58971s-.08869.4273-.23612.58971l-6.17694 6.17691c-.1624.1624-.36857.2361-.57473.2361z" fill="currentColor" stroke="currentColor" strokeWidth=".831256"></path></svg><svg viewBox="0 0 10 16" focusable="false"><path d="m1.83288 15c-.20616 0-.42731-.0737-.58971-.2361-.324226-.3242-.324226-.8402 0-1.1645l5.58722-5.60223-5.58722-5.58722c-.324226-.32422-.324226-.84022 0-1.16445.32422-.324795.84022-.324795 1.16444-.01497l6.17694 6.17694c.1624.1624.23612.36857.23612.58971s-.08869.4273-.23612.58971l-6.17694 6.17691c-.1624.1624-.36857.2361-.57473.2361z" fill="currentColor" stroke="currentColor" strokeWidth=".831256"></path></svg></Link>
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-3 col-sm-6'>
                                <div className="blog2-heading">
                                    <a>Editor's Pick</a>
                                </div>

                                {
                                    randomBlogs ?
                                        <div className='explore-list'>
                                            {
                                                randomBlogs.map((item) =>
                                                    <Link key={`${item.id}`} to={`/${item.post_slug}`}>{item.post_title}</Link>
                                                )
                                            }
                                        </div>
                                        : null
                                }
                            </div>

                            <div className="col-lg-3 col-sm-6">
                                <div className="blog2-ce-subscribe">
                                    <img src={`${BASE_URL}/img/Blogs2/logo.png`} alt="logo" />
                                    <div className='blog2-subscribe-title'>Subscribe for updates</div>
                                    <p>A weekly update of what’s on the Corporality Global</p>
                                    <div className='blog2-ces-form'>
                                        <input type="email" name="emailid" placeholder="Email address" className="emailid" />
                                        <button type="submit" className="blog2-ces-btn">
                                            <svg viewBox="0 0 21 18" focusable="false" aria-hidden="true"><path d="M0.266478 8.99987C0.266478 9.33987 0.40148 9.66486 0.641486 9.90486C0.881493 10.1449 1.20648 10.2799 1.54648 10.2799L15.5852 10.2799L10.3814 15.1311C10.1189 15.3586 9.96136 15.6836 9.94261 16.0311C9.92511 16.3773 10.0489 16.7173 10.2864 16.9711C10.5239 17.2248 10.8538 17.3711 11.2014 17.3773C11.5488 17.3823 11.8839 17.2461 12.1288 16.9998L19.71 9.93741C19.9687 9.69491 20.1162 9.35616 20.1162 9.00115C20.1162 8.64614 19.9687 8.30739 19.71 8.0649L12.1289 0.999936C11.6113 0.51744 10.8014 0.544929 10.3189 1.06244C9.83637 1.57869 9.86511 2.38992 10.3814 2.87242L15.5852 7.71978L1.54648 7.71978C1.20648 7.71978 0.881492 7.85478 0.641492 8.09478C0.401492 8.33479 0.266482 8.65978 0.266482 8.99978L0.266478 8.99987Z" fill="currentColor"></path></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <GetInvolved />
            </div>
        </>
    )
}

export default Blogs2