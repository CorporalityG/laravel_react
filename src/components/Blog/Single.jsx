import React, { useEffect, useState } from 'react'
import "./Single.css"
import { useParams, Link, useNavigate } from 'react-router-dom'
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../config';
import { SocialShare } from './SocialShare';
import events from "../Blog/img/sidebarevent.jpg";
import { RelatedBlogItem } from './RelatedBlogItem';
import { RecentBlogItem } from './RecentBlogItem';
import { Helmet } from "react-helmet";

function dateFormat(date) {
    var dateObj = new Date(date);
    const month = dateObj.toLocaleString('default', { month: 'short' });

    return dateObj.getDate() + ' ' + month + ' ' + dateObj.getFullYear();
}

const Single = () => {

    const params = useParams();
    const navigate = useNavigate();

    const [singleBlog, setSingleBlog] = useState([]);
    const [relatedBlog, setRelatedBlog] = useState([]);
    const [recentBlog, setRecentBlog] = useState([]);

    useEffect(() => {
        // console.log(params);
        getBlog(params.post_slug);
        getRelatedBlog(params.post_slug)
        getRecentBlog()
    }, [params])

    async function getBlog(slug) {
        let result = await fetch(API_BASE_URL + "/single-blog/" + slug);
        result = await result.json();
        if (result == "") {
            navigate("/404", { replace: true });
        }
        else {
            setSingleBlog(result);
        }
    }

    async function getRelatedBlog(slug) {
        let result = await fetch(API_BASE_URL + "/related-posts-2/" + slug);
        result = await result.json();
        // console.log(result);
        setRelatedBlog(result);
    }

    async function getRecentBlog() {
        let result = await fetch(API_BASE_URL + "/posts");
        result = await result.json();
        setRecentBlog(result.data);
    }

    return (
        <div className="single-blog-page-2">
            {
                singleBlog ?
                    <>
                        <Helmet>
                            <title>{singleBlog.meta_title ?? singleBlog.post_title}</title>
                            {singleBlog.meta_description && <meta name="description" content={singleBlog.meta_description} />}
                            {singleBlog.meta_keywords && <meta name="keywords" content={singleBlog.meta_keywords} />}
                            <link rel="canonical" href={`${BASE_URL}/${singleBlog.post_slug}/`} />
                        </Helmet>

                        <div className="container-lg">
                            <div className="row">
                                <div className="col-lg-12">
                                    {
                                        singleBlog.categories ?
                                            <ul className='sb-categories'>
                                                {
                                                    singleBlog.categories.map((category, index) =>
                                                        <li key={category.id}>
                                                            <a href={`/category/${category.category_slug}`}>{category.category_name}</a>
                                                        </li>
                                                    )
                                                }
                                            </ul>
                                            : null
                                    }
                                    <div className='sb-heading'>
                                        <h1>{singleBlog.post_title}</h1>
                                    </div>
                                    <div className="sb-img">
                                        {singleBlog.post_image && <img src={API_IMG_URL + singleBlog.post_image} alt={singleBlog.post_title} />}
                                    </div>
                                </div>
                            </div>

                            <div className="row single-blog-content-row">
                                <div className="col-lg-4">
                                    <div className='sb-sidebar'>
                                        <div className='sb-published'>{dateFormat(singleBlog.created_at)}</div>
                                        <ul className='sb-authors'>
                                            <li>
                                                <a>Priya Mishra</a>
                                                <span>CEO, Corporality Global</span>
                                            </li>
                                        </ul>

                                        <SocialShare />
                                        <div className="blog-poll-youtube-item">
                                            <div className="title subsribetitle">Subscribe Our YouTube Channel</div>
                                            <div className="youtube-video">
                                                <img src={BASE_URL + '/img/blogs/YouTube-Channel.png'} alt="YouTube-Channel" />
                                            </div>
                                            <div className="btn-subscribe">
                                                <div className="blog-poll-youtube-btn"><a href="https://www.youtube.com/c/Corporality">Subscribe</a></div>
                                            </div>
                                        </div>
                                        <div className="recent-events">
                                            <a className="sb-recent-blog-category" id="recent-blogs"><b>Upcoming Events</b></a>
                                            <a href="https://corporality.global/club/corporality-global-event/" target="_blank"><img src={events} alt="events" className="recent-events-imgs" /></a>
                                        </div>


                                        {
                                            recentBlog ?
                                                <div className="sb-recent-blog-items">
                                                    <a className="sb-recent-blog-category" id="recent-blogs"><b>Recent Blogs</b></a>
                                                    {
                                                        recentBlog.slice(0, 1).map((item, index) =>
                                                            <RecentBlogItem
                                                                key={`${item.id}`}
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

                                        <div className="blog-poll-youtube-item pollsdata">
                                            <div className="title subsribetitle">Live poll</div>
                                            <div className="live-poll">
                                                <p className="live-poll-question">Readers, what insights would you like to gain next?</p>
                                                <div className="live-poll-options">
                                                    <span><input type="radio" id="live_poll_topic" name="live_poll" value="Whitepaper on yrending topic" /> <label htmlFor="live_poll_topic">Whitepaper on yrending topic</label></span>
                                                    <span><input type="radio" id="live_poll_webinar" name="live_poll" value="Whitepaper on yrending topic" /> <label htmlFor="live_poll_webinar">Webinar on issue I’m passionate about</label></span>
                                                    <span><input type="radio" id="live_poll_career" name="live_poll" value="Whitepaper on yrending topic" /> <label htmlFor="live_poll_career">Career advice from an experts</label></span>
                                                </div>
                                            </div>
                                            <div className="blog-poll-youtube-btn">Vote</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-8">
                                    <div className="sb-description">
                                        <div className="sb-content" dangerouslySetInnerHTML={{ __html: singleBlog.post_description }}></div>

                                        <div className='sb-desc-share'>
                                            <div className="sb-desc-share-title">Share</div>
                                            <SocialShare />
                                        </div>

                                        <div className="sb-license">
                                            <div className="sb-license-title">License and Republishing</div>
                                        </div>

                                        <div className="sb-written-by">
                                            <div className="sb-written-by-title">Written by</div>
                                            <ul>
                                                <li>
                                                    <a>Priya Mishra</a>
                                                    <span>, CEO, Corporality Global</span>
                                                </li>
                                            </ul>

                                            <p>The views expressed in this article are those of the author alone and not the Corporality Global Forum.</p>
                                        </div>

                                        <div className='sb-newsletter'>
                                            <div className='container-fluid px-0'>
                                                <div className='row'>
                                                    <div className='col-md-6'>
                                                        <div className='sb-newsletter-title'>Subscribe for updates</div>
                                                        <div className="sb-newsletter-desc">A weekly update of what’s on the Corporality Global</div>
                                                    </div>

                                                    <div className='col-md-6'>
                                                        <form className='sb-newsletter-form' method='POST'>
                                                            <div className="sb-newsletter-field">
                                                                <input type="email" name="emailid" placeholder="Email" autoComplete="email" className="sb-newsletter-email" />
                                                                <input type="submit" value="Subscribe" name="subscribe" className="sb-newsletter-submit" />
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='sb-related-blog'>
                            <div className="container-lg">
                                {
                                    singleBlog.categories ?
                                        <div className="row sb-related-title-row">
                                            <div className='col-lg-10 col-md-9 col-sm-8'>
                                                <div className='sb-related-title'>
                                                    <span>More On </span> {singleBlog.categories[0].category_name}
                                                </div>
                                            </div>
                                            <div className='col-lg-2 col-md-3 col-sm-4'>
                                                <Link to={`/category/${singleBlog.categories[0].category_slug}`} className="sb-related-view-all">View all
                                                    <svg viewBox="0 0 10 16" focusable="false"><path d="m1.83288 15c-.20616 0-.42731-.0737-.58971-.2361-.324226-.3242-.324226-.8402 0-1.1645l5.58722-5.60223-5.58722-5.58722c-.324226-.32422-.324226-.84022 0-1.16445.32422-.324795.84022-.324795 1.16444-.01497l6.17694 6.17694c.1624.1624.23612.36857.23612.58971s-.08869.4273-.23612.58971l-6.17694 6.17691c-.1624.1624-.36857.2361-.57473.2361z" fill="currentColor" stroke="currentColor" strokeWidth=".831256"></path></svg>
                                                </Link>
                                            </div>
                                        </div>
                                        : null
                                }

                                <div className='row'>
                                    {
                                        relatedBlog ?
                                            <>
                                                {
                                                    relatedBlog.map((item, index) =>
                                                        <RelatedBlogItem
                                                            key={`${item.id}`}
                                                            uniqueKey={`${index}`}
                                                            thumbnail={`${item.post_image ? API_IMG_URL + item.post_image : ''}`}
                                                            title={`${item.post_title}`}
                                                            slug={`${item.post_slug}`}
                                                            content={`${item.post_description}`}
                                                            date={`${item.created_at}`}
                                                        />
                                                    )
                                                }
                                            </>
                                            : null
                                    }
                                </div>
                            </div>
                        </div>
                    </>
                    : null
            }
        </div>
    )
}

export default Single