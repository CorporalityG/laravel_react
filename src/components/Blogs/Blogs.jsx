import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../config';
import React, { useEffect, useState } from 'react';
import Aos from 'aos';
// import 'aos/dist/aos.css';
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.min.js'
import "./Blogs.css"
import BlogItem from "./components/BlogItem";
// import axios from "axios";
import { useParams, Link } from "react-router-dom";

function truncate(text, size)
{
    return text?.length > size ? text.substr(0, size - 1) + '...' : text;
}

function Blogs() {

    const params = useParams();

    const [latestBlog, setLatestBlog] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [paginationLinks, setPaginationLinks] = useState([]);

    const [categories, setCategories] = useState([]);

    let linkLabel = '';

    useEffect( ()=> {
        Aos.init();
        // console.log('cat ', params);
        getLatestBlog();
        getCategories();
        getData();
    }, [params]);

    async function getLatestBlog()
    {
        let result = await fetch(API_BASE_URL+"/latest-blog");
        result = await result.json();
        setLatestBlog(result);
    }

    async function getData(pageLink='', search_keyword='')
    {
        const categorySlug = params.category_slug!=undefined ? "&category=" + params.category_slug : '';
        // console.log(categorySlug);
        const apiLink = ( pageLink=='' ? 
                            API_BASE_URL + "/posts?search_keyword=" + search_keyword + categorySlug : 
                            pageLink + "&search_keyword=" + search_keyword + categorySlug
                        );
        let result = await fetch(apiLink);
        // console.log(result);
        result = await result.json();
        setBlogs(result.data);
        setPaginationLinks(result.links);
        // console.log(result);
        // console.log(result.links);
    }

    const paginate = (pageNumber) => {
        if( pageNumber )
        {
            const keyword = document.getElementById('search_keyword');
            getData(pageNumber, keyword.value);
        }
        const topScroll = document.getElementById('blog-list-main'); 
        window.scrollTo({
            top: topScroll.offsetTop - 90,
            behavior: "smooth"
        });
    }

    const searchBlog = (keyword) => {
        getData('', keyword);
    }

    async function getCategories()
    {
        let result = await fetch(API_BASE_URL + "/categories");
        result = await result.json();
        setCategories(result);
        // console.log(result);
    }

    const topHandler = () => {
        const topScroll = document.getElementById('blog-list-container'); 
        window.scrollTo({
            top: topScroll.offsetTop - 90,
            behavior: "smooth"
        });
    }

    return (
        <div className="blogs-page">

            <div className="latest-blog">
                {
                    latestBlog ?
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-5 d-flex align-items-center">
                                <div className="latest-blog-item">
                                    <img src={BASE_URL + '/img/blogs/rectangle-1.png'} alt="rectangle-1" className="latest-blog-rectangle-1" />
                                    <img src={BASE_URL + '/img/blogs/rectangle-2.png'} alt="rectangle-2" className="latest-blog-rectangle-2" />

                                    <img src={BASE_URL + '/img/blogs/3D-in-Medical-Care-Music.png'} alt="3D-in-Medical-Care-Music" className="latest-blog-music" />

                                    <div className="latest-blog-heading">Latest Blog</div>
                                    <h1 className="latest-blog-title">{latestBlog.post_title}</h1>
                                    <p><span dangerouslySetInnerHTML={{__html: truncate(latestBlog.post_short_description ?? latestBlog.post_description, 300)}}></span></p>
                                    <Link to={`/${latestBlog.post_slug}`} className="latest-blog-btn">Read more</Link>
                                </div>
                            </div>
                            <div className="col-md-6">
                                { latestBlog.post_image && <img src={API_IMG_URL + latestBlog.post_image} alt={latestBlog.post_title} className="latest-blog-img" /> }
                            </div>
                        </div>
                    : null
                }
            </div>

            <div className="blog-subscribe-container">
                <div className="container">
                    <div className="blog-subscribe">
                        <h3 className="blog-subscribe-heading">Subscribe to Business Insight?</h3>
                        <input type="email" id="email_address" placeholder="Email Address" />
                        <select name="subscribe_country" id="subscribe_country">
                            <option value="0">Select Country</option>
                            <option value="1">Australia</option>
                            <option value="2">India</option>
                            <option value="3">USA</option>
                            <option value="4">UK</option>
                        </select>
                        <div className="subscribe-btn">Subscribe</div>
                    </div>
                </div>
            </div>

            <div id="blog-list-container" className="blog-list-container">
                <div className="container">
                    <div className="blog-filter">
                        <div className="blog-search">
                            <input type="text" placeholder="What you are looking for?" id="search_keyword" className="blog-search-input" onChange={(e) => searchBlog(e.target.value)} />
                            <img src={BASE_URL + '/img/blogs/search-icon.png'} alt="Search" className="blog-search-icon" />
                        </div>

                        {
                            categories ?
                                <div className="blog-categories">
                                    {
                                        categories.map( (item, index)=>
                                            <div key={item.id} className="blog-category">
                                                <Link to={`/category/${item.category_slug}`}  onClick={() => topHandler()}>{item.category_name}</Link>
                                            </div>
                                        )
                                    }
                                    {/*<div className="blog-category">Recent Posts</div>
                                    <div className="blog-category">Blog</div>
                                    <div className="blog-category">Corporate Strategy</div>
                                    <div className="blog-category">Digital Media Marketing</div>
                                    <div className="blog-category">Lead Gen and Sales Strategy</div>
                                    <div className="blog-category">Digital Media Marketing</div>*/}
                                </div>
                            : null
                        }
                    </div>

                    <div className="row" id="blog-list-main">
                        {
                            blogs ?
                                blogs.map( (blogItem, index)=>
                                    <div key={blogItem.id} className="col-md-6 blog-item-main">
                                        <BlogItem 
                                            thumbnail={API_IMG_URL + blogItem.post_image}
                                            title={blogItem.post_title}
                                            description={blogItem.post_short_description ?? blogItem.post_description}
                                            date={blogItem.created_at}
                                            slug={blogItem.post_slug}
                                            comments={'0'}
                                        />
                                    </div>
                                )
                            : 'Loading...'
                        }
                    </div>

                    {
                        paginationLinks.length>3 ?
                            <div className="blog-pagination-container">
                                {
                                    paginationLinks.map( (link, index, {length, lastIndex = length - 1}) => {
                                        linkLabel = `${link.label}`;
                                        if( index==0 )
                                        {
                                            linkLabel = <i className="fa fa-angle-left"></i>;
                                        }
                                        else if( index==lastIndex )
                                        {
                                            linkLabel = <i className="fa fa-angle-right"></i>;
                                        }
                                        return <div key={index} className={`pagination-number${(index==0) ? ' pagination-arrow pagination-prev' : ''} ${(index==lastIndex) ? ' pagination-arrow pagination-next' : ''} ${(link.active==true) ? 'pagination-active' : ''}`} onClick={()=>paginate(link.url)}>{linkLabel}</div>
                                    }
                                    )
                                }
                            </div>
                        : null
                    }
                </div>
            </div>

            <div className="container">
                <div className="blog-marketing">
                    <div className="blog-marketing-img">
                        <img src={BASE_URL + '/img/blogs/marketing-for-you.png'} alt="marketing-for-you" className="marketing-for-you" />
                        <img src={BASE_URL + '/img/blogs/marketing-rectangle.png'} alt="marketing-rectangle" className="marketing-rectangle" />
                    </div>

                    <div className="blog-marketing-content">
                        <div className="blog-marketing-title">Do you want me to do your marketing for you?</div>
                        <a href="#" className="blog-marketing-btn">Yes, I want</a>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="blog-poll-youtube">
                    <div className="row">
                        <div className="col-md-6 blog-poll-youtube-item">
                            <div className="title">Live poll</div>
                            <div className="live-poll">
                                <p className="live-poll-question">Readers, what insights would you like to gain next?</p>
                                <div className="live-poll-options">
                                    <span><input type="radio" id="live_poll_topic" name="live_poll" value="Whitepaper on trending topic" /> <label htmlFor="live_poll_topic">Whitepaper on trending topic</label></span>
                                    <span><input type="radio" id="live_poll_webinar" name="live_poll" value="Whitepaper on trending topic" /> <label htmlFor="live_poll_webinar">Webinar on issue I’m passionate about</label></span>
                                    <span><input type="radio" id="live_poll_career" name="live_poll" value="Whitepaper on trending topic" /> <label htmlFor="live_poll_career">Career advice from an experts</label></span>
                                </div>
                            </div>
                            <div className="blog-poll-youtube-btn">Vote</div>
                        </div>
                        <div className="col-md-6 blog-poll-youtube-item">
                            <div className="title">Subscribe Our YouTube Channel</div>
                            <div className="youtube-video">
                                <img src={BASE_URL + '/img/blogs/YouTube-Channel.png'} alt="YouTube-Channel" />
                            </div>
                            <div className="btn-subscribe">
                                <div className="blog-poll-youtube-btn">Subscribe</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blogs;