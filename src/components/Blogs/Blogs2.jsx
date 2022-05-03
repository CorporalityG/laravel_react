import React, { useEffect, useState } from 'react'
import './Blogs2.css'
import { Link } from 'react-router-dom'
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../config'
// import { PopularVideoItem } from './PopularVideoItem'
import { NewsItem } from './NewsItem'
import { CovidItem } from './CovidItem'
import { BlogItem } from './BlogItem'

function truncate(text, size) {
    return text?.length > size ? text.substr(0, size - 1) + '...' : text;
}

function Blogs2() {

    const [latestBlog, setLatestBlog] = useState([]);
    const [latestBlog2, setLatestBlog2] = useState([]);
    const [corporateStrategyBlog, setCorporateStrategyBlog] = useState([]);
    const [digitalMediaMarketingBlog, setDigitalMediaMarketingBlog] = useState([]);
    const [leadGenAndSalesStrategyBlog, setLeadGenAndSalesStrategyBlog] = useState([]);

    useEffect(() => {
        // console.log('cat ', params);
        getLatestBlog();
        getLatestBlog2();
        getCorporateStrategyBlog()
        getDigitalMediaMarketingBlog()
        getLeadGenAndSalesStrategyBlog()
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

    async function getCorporateStrategyBlog() {
        let result = await fetch(API_BASE_URL + "/corporate-strategy-blog");
        result = await result.json();
        setCorporateStrategyBlog(result.data);
    }

    async function getDigitalMediaMarketingBlog() {
        let result = await fetch(API_BASE_URL + "/digital-media-marketing-blog");
        result = await result.json();
        setDigitalMediaMarketingBlog(result.data);
    }

    async function getLeadGenAndSalesStrategyBlog() {
        let result = await fetch(API_BASE_URL + "/lead-gen-and-sales-strategy-blog");
        result = await result.json();
        setLeadGenAndSalesStrategyBlog(result.data);
    }

    return (
        <div className="blog2">

            <div className="blog2-latest-section">
                <div className="container-lg">
                    {
                        latestBlog ?
                            <div className="row latest-blog-row">
                                <div className="col-lg-6 px-lg-0 latest-blog-col">
                                    <div className="blog-content-first">
                                        {
                                            latestBlog.categories ?
                                                <Link to={`/category/${latestBlog.categories[0].category_slug}`} className="category">
                                                    {latestBlog.categories[0].category_name}
                                                </Link>
                                                : null
                                        }
                                        <h3 className="title-first">
                                            <Link to={`/${latestBlog.post_slug}`}>{latestBlog.post_title}</Link>
                                        </h3>
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
                                <Link to="/category/corporate-strategy">Corporate Strategy <svg viewBox="0 0 10 16" focusable="false"><path d="m1.83288 15c-.20616 0-.42731-.0737-.58971-.2361-.324226-.3242-.324226-.8402 0-1.1645l5.58722-5.60223-5.58722-5.58722c-.324226-.32422-.324226-.84022 0-1.16445.32422-.324795.84022-.324795 1.16444-.01497l6.17694 6.17694c.1624.1624.23612.36857.23612.58971s-.08869.4273-.23612.58971l-6.17694 6.17691c-.1624.1624-.36857.2361-.57473.2361z" fill="currentColor" stroke="currentColor" strokeWidth=".831256"></path></svg></Link>
                            </div>
                        </div>
                    </div>

                    {
                        corporateStrategyBlog ?
                            <div className="row blog2-cs-title-row">
                                {
                                    corporateStrategyBlog.slice(0, 1).map((item, index) =>
                                        <>
                                            <div className="col-lg-6" key={`${item.id}-first`}>
                                                <div className="cs-banner-first">
                                                    <Link to={`/${item.post_slug}`}>
                                                        {item.post_image && <img src={API_IMG_URL + item.post_image} alt={item.post_title} className="latest-blog-img" />}
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 cs-content-first-col">
                                                <div className="cs-content-first">
                                                    <Link to="/category/corporate-strategy" className="category">Corporate Strategy</Link>
                                                    <h3 className="title-first">
                                                        <Link to={`/${item.post_slug}`}>{`${item.post_title}`}</Link>
                                                    </h3>
                                                    <p><span dangerouslySetInnerHTML={{ __html: truncate(item.post_short_description ?? item.post_description, 175) }}></span></p>
                                                </div>
                                            </div>
                                        </>
                                    )
                                }
                            </div>
                            : null
                    }

                    {
                        corporateStrategyBlog ?
                            <div className="row cs-blog-boxes-row">
                                {
                                    corporateStrategyBlog.slice(1, 4).map((item, index) =>
                                        <BlogItem
                                            uniqueKey={`${index + item.id}`}
                                            thumbnail={`${API_IMG_URL + item.post_image}`}
                                            title={`${item.post_title}`}
                                            slug={`${item.post_slug}`}
                                            category={`Corporate Strategy`}
                                            catSlug={`corporate-strategy`}
                                        />
                                    )
                                }

                                <div className="col-lg-3 col-sm-6 latest-blog-box-col cs-blog-col-box">
                                    {
                                        corporateStrategyBlog.slice(4, 6).map((item, index) =>
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
                            : null
                    }
                </div>
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
                <div className='blog2-video-section-bg'></div>
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
                                <iframe width="100%" height="315" src="https://www.youtube.com/embed/HXLmQ7iUvhU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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

                    {/* <div className="row video-boxes-row">
                        <PopularVideoItem
                            thumbnail={`${BASE_URL}/img/Blogs2/3d-in-medical-care-corporality-global.jpg`}
                            title={`Why do we use it?`}
                            slug={``}
                        />

                        <PopularVideoItem
                            thumbnail={`${BASE_URL}/img/Blogs2/3d-in-medical-care-corporality-global.jpg`}
                            title={`Where does it come from?`}
                            slug={``}
                        />

                        <PopularVideoItem
                            thumbnail={`${BASE_URL}/img/Blogs2/3d-in-medical-care-corporality-global.jpg`}
                            title={`Where can I get some?`}
                            slug={``}
                        />

                        <PopularVideoItem
                            thumbnail={`${BASE_URL}/img/Blogs2/3d-in-medical-care-corporality-global.jpg`}
                            title={`What is Lorem Ipsum?`}
                            slug={``}
                        />
                    </div> */}
                </div>
            </div>

            <div className="blog2-news-press-section">
                <div className="container-lg">
                    <div className="row blog2-np-row">
                        <div className='col-lg-9 col-md-8'>
                            <div className="blog2-heading">
                                <Link to="/category/digital-media-marketing">Digital Media Marketing <svg viewBox="0 0 10 16" focusable="false"><path d="m1.83288 15c-.20616 0-.42731-.0737-.58971-.2361-.324226-.3242-.324226-.8402 0-1.1645l5.58722-5.60223-5.58722-5.58722c-.324226-.32422-.324226-.84022 0-1.16445.32422-.324795.84022-.324795 1.16444-.01497l6.17694 6.17694c.1624.1624.23612.36857.23612.58971s-.08869.4273-.23612.58971l-6.17694 6.17691c-.1624.1624-.36857.2361-.57473.2361z" fill="currentColor" stroke="currentColor" strokeWidth=".831256"></path></svg></Link>
                            </div>

                            {
                                digitalMediaMarketingBlog ?
                                    <div className='row blog2-news-row'>
                                        {
                                            digitalMediaMarketingBlog.map((item, index) =>
                                                <NewsItem
                                                    uniqueKey={`${index + item.id + index}-${index}`}
                                                    title={`${item.post_title}`}
                                                    slug={`${item.post_slug}`}
                                                    website={`Digital Media Marketing`}
                                                    date={`${item.created_at}`}
                                                />
                                            )
                                        }
                                    </div>
                                    : null
                            }
                        </div>

                        <div className='col-lg-3 col-md-4'>
                            <div className="blog2-heading">
                                <Link to="/blog">Latest Blog <svg viewBox="0 0 10 16" focusable="false"><path d="m1.83288 15c-.20616 0-.42731-.0737-.58971-.2361-.324226-.3242-.324226-.8402 0-1.1645l5.58722-5.60223-5.58722-5.58722c-.324226-.32422-.324226-.84022 0-1.16445.32422-.324795.84022-.324795 1.16444-.01497l6.17694 6.17694c.1624.1624.23612.36857.23612.58971s-.08869.4273-.23612.58971l-6.17694 6.17691c-.1624.1624-.36857.2361-.57473.2361z" fill="currentColor" stroke="currentColor" strokeWidth=".831256"></path></svg></Link>
                            </div>

                            {
                                latestBlog ?
                                    <div className='press-item'>
                                        <Link to={`/${latestBlog.post_slug}`}>{latestBlog.post_title}</Link>
                                        <div className='posted-date'>Posted <span className='date'>{latestBlog.timeAgo}</span></div>
                                    </div>
                                    : null
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="blog2-covid-explore-section">
                <div className="container-lg">
                    <div className="row blog2-ce-row">
                        <div className='col-lg-6'>
                            <div className="blog2-heading">
                                <Link to="/category/lead-gen-and-sales-strategy">Lead Gen and Sales Strategy <svg viewBox="0 0 10 16" focusable="false"><path d="m1.83288 15c-.20616 0-.42731-.0737-.58971-.2361-.324226-.3242-.324226-.8402 0-1.1645l5.58722-5.60223-5.58722-5.58722c-.324226-.32422-.324226-.84022 0-1.16445.32422-.324795.84022-.324795 1.16444-.01497l6.17694 6.17694c.1624.1624.23612.36857.23612.58971s-.08869.4273-.23612.58971l-6.17694 6.17691c-.1624.1624-.36857.2361-.57473.2361z" fill="currentColor" stroke="currentColor" strokeWidth=".831256"></path></svg></Link>
                            </div>
                            {
                                leadGenAndSalesStrategyBlog ?
                                    <>
                                        {
                                            leadGenAndSalesStrategyBlog.map((item, index) =>
                                                <CovidItem
                                                    uniqueKey={`${item.id + index}-c`}
                                                    thumbnail={`${API_IMG_URL + item.post_image}`}
                                                    title={`${item.post_title}`}
                                                    slug={`${item.post_slug}`}
                                                    category={`Lead Gen and Sales Strategy`}
                                                    catSlug={`lead-gen-and-sales-strategy`}
                                                />
                                            )
                                        }
                                    </>
                                    : null
                            }
                        </div>

                        <div className='col-lg-3 col-sm-6'>
                            <div className="blog2-heading">
                                <Link to="/">Explore</Link>
                            </div>

                            <div className='explore-list'>
                                <Link to="/">How we create Impact</Link>
                                <Link to="/">Our Mini Events</Link>
                                <Link to="/">Become a Forum Partner</Link>
                            </div>
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

                            {/* <div className="blog2-ce-boxes">
                                <div className='ce-box-title'>Lorem Ipsum</div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                <Link to="/">Explore Lorem Ipsum</Link>
                            </div>

                            <div className="blog2-ce-boxes">
                                <div className='ce-box-title'>Ipsum</div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                                <Link to="/">Explore Ipsum</Link>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="blog2-jobs-skills-section">
                <div className="container-lg">
                    <div className="row blog2-js-row">
                        <div className='col-lg-12'>
                            <div className="blog2-heading">
                                <Link to="/">Jobs & Skills <svg viewBox="0 0 10 16" focusable="false"><path d="m1.83288 15c-.20616 0-.42731-.0737-.58971-.2361-.324226-.3242-.324226-.8402 0-1.1645l5.58722-5.60223-5.58722-5.58722c-.324226-.32422-.324226-.84022 0-1.16445.32422-.324795.84022-.324795 1.16444-.01497l6.17694 6.17694c.1624.1624.23612.36857.23612.58971s-.08869.4273-.23612.58971l-6.17694 6.17691c-.1624.1624-.36857.2361-.57473.2361z" fill="currentColor" stroke="currentColor" strokeWidth=".831256"></path></svg></Link>
                            </div>
                        </div>
                    </div>

                    <div className="row blog2-js-item-row">
                        <BlogItem
                            thumbnail={`${BASE_URL}/img/Blogs2/3d-in-medical-care-corporality-global.jpg`}
                            title={`Lorem Ipsum is simply dummy text of the printing and typesetting industry`}
                            slug={`3d-in-medical-care-corporality-global`}
                            category={`Jobs`}
                            catSlug={``}
                        />

                        <BlogItem
                            thumbnail={`${BASE_URL}/img/Blogs2/3d-in-medical-care-corporality-global.jpg`}
                            title={`Lorem Ipsum has been the industry's standard dummy text ever since the`}
                            slug={``}
                            category={`Skills`}
                            catSlug={``}
                        />

                        <BlogItem
                            thumbnail={`${BASE_URL}/img/Blogs2/3d-in-medical-care-corporality-global.jpg`}
                            title={`Lorem Ipsum has been the industry's standard dummy text ever since the`}
                            slug={``}
                            category={`Workforce`}
                            catSlug={``}
                        />

                        <BlogItem
                            thumbnail={`${BASE_URL}/img/Blogs2/3d-in-medical-care-corporality-global.jpg`}
                            title={`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`}
                            slug={``}
                            category={`Workforce`}
                            catSlug={``}
                        />

                        <BlogItem
                            thumbnail={``}
                            title={`Lorem Ipsum is simply dummy text of the printing and typesetting industry`}
                            slug={`3d-in-medical-care-corporality-global`}
                            category={`Jobs`}
                            catSlug={``}
                        />

                        <BlogItem
                            thumbnail={``}
                            title={`Lorem Ipsum has been the industry's standard dummy text ever since the`}
                            slug={``}
                            category={`Skills`}
                            catSlug={``}
                        />

                        <BlogItem
                            thumbnail={``}
                            title={`Lorem Ipsum has been the industry's standard dummy text ever since the`}
                            slug={``}
                            category={`Workforce`}
                            catSlug={``}
                        />

                        <BlogItem
                            thumbnail={``}
                            title={`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`}
                            slug={``}
                            category={`Workforce`}
                            catSlug={``}
                        />
                    </div>
                </div>
            </div> */}

            {/* <div className="blog2-our-impact-section">
                <div className="container-lg">
                    <div className="row blog2-oi-row">
                        <div className='col-lg-12'>
                            <div className="blog2-heading">
                                <Link to="/">Our impact <svg viewBox="0 0 10 16" focusable="false"><path d="m1.83288 15c-.20616 0-.42731-.0737-.58971-.2361-.324226-.3242-.324226-.8402 0-1.1645l5.58722-5.60223-5.58722-5.58722c-.324226-.32422-.324226-.84022 0-1.16445.32422-.324795.84022-.324795 1.16444-.01497l6.17694 6.17694c.1624.1624.23612.36857.23612.58971s-.08869.4273-.23612.58971l-6.17694 6.17691c-.1624.1624-.36857.2361-.57473.2361z" fill="currentColor" stroke="currentColor" strokeWidth=".831256"></path></svg></Link>
                            </div>
                        </div>
                    </div>

                    <div className="row blog2-oi-item-row">
                        <BlogItem
                            thumbnail={`${BASE_URL}/img/Blogs2/3d-in-medical-care-corporality-global.jpg`}
                            title={`Lorem Ipsum is simply dummy text of the printing and typesetting industry`}
                            slug={`3d-in-medical-care-corporality-global`}
                            category={`Lorem`}
                            catSlug={``}
                        />

                        <BlogItem
                            thumbnail={`${BASE_URL}/img/Blogs2/3d-in-medical-care-corporality-global.jpg`}
                            title={`Lorem Ipsum has been the industry's standard dummy text ever since the`}
                            slug={``}
                            category={`Ipsum`}
                            catSlug={``}
                        />

                        <BlogItem
                            thumbnail={`${BASE_URL}/img/Blogs2/3d-in-medical-care-corporality-global.jpg`}
                            title={`Lorem Ipsum has been the industry's standard dummy text ever since the`}
                            slug={``}
                            category={`Lorem Ipsum`}
                            catSlug={``}
                        />

                        <BlogItem
                            thumbnail={`${BASE_URL}/img/Blogs2/3d-in-medical-care-corporality-global.jpg`}
                            title={`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`}
                            slug={``}
                            category={`Standard`}
                            catSlug={``}
                        />

                        <BlogItem
                            thumbnail={``}
                            title={`Lorem Ipsum is simply dummy text of the printing and typesetting industry`}
                            slug={`3d-in-medical-care-corporality-global`}
                            category={`Jobs`}
                            catSlug={``}
                        />

                        <BlogItem
                            thumbnail={``}
                            title={`Lorem Ipsum has been the industry's standard dummy text ever since the`}
                            slug={``}
                            category={`Ipsum`}
                            catSlug={``}
                        />

                        <BlogItem
                            thumbnail={``}
                            title={`Lorem Ipsum has been the industry's standard dummy text ever since the`}
                            slug={``}
                            category={`Industry`}
                            catSlug={``}
                        />

                        <BlogItem
                            thumbnail={``}
                            title={`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`}
                            slug={``}
                            category={`Lorem`}
                            catSlug={``}
                        />
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Blogs2