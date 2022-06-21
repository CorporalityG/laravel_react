import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import "./IndustryCategory.css"
import IndustryItem from "./IndustryItem";
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../../config';
import { useParams, Link } from "react-router-dom";

function truncate(text, size)
{
    return text?.length > size ? text.substr(0, size - 1) + '...' : text;
}

function IndustryCategory() {

    const params = useParams();

    const [latestInArticle, setLatestInArticle] = useState([]);
    const [industrialArticles, setIndustrialArticles] = useState([]);
    const [paginationLinks, setPaginationLinks] = useState([]);
    const [categories, setCategories] = useState([]);

    let linkLabel = '';

    useEffect( ()=> {
        Aos.init();

        getLatestInArticle();
        getCategories();
        getData();
    }, [params]);

    async function getLatestInArticle()
    {
        let result = await fetch(`${API_BASE_URL}/latest-in-article`);
        result = await result.json();
        setLatestInArticle(result);
    }

    async function getData(pageLink='', search_keyword='')
    {
        const categorySlug = params.category_slug!==undefined ? "&category=" + params.category_slug : '';
        
        const apiLink = ( pageLink==='' ? 
                            `${API_BASE_URL}/industrial-articles?search_keyword=${search_keyword + categorySlug}` : 
                            `${pageLink}&search_keyword=${search_keyword + categorySlug}`
                        );
        let result = await fetch(apiLink);
        result = await result.json();

        setIndustrialArticles(result.data);
        setPaginationLinks(result.links);
    }

    const paginate = (pageNumber) => {
        if( pageNumber )
        {
            const keyword = document.getElementById('search_keyword');
            getData(pageNumber, keyword.value);
        }
        const topScroll = document.getElementById('in-list-main'); 
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
        let result = await fetch(`${API_BASE_URL}/industrial-article-categories`);
        result = await result.json();

        setCategories(result);
    }

    const topHandler = () => {
        const topScroll = document.getElementById('in-cat-list-container'); 
        window.scrollTo({
            top: topScroll.offsetTop - 90,
            behavior: "smooth"
        });
    }

    return (
        <div className="in-cat-page">

            <div className="latest-in">
                {
                    latestInArticle ?
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-5 d-flex align-items-center">
                                <div className="latest-in-item">
                                    <img src={`${BASE_URL}/img/industries/rectangle-1.png`} alt="rectangle-1" className="latest-in-rectangle-1" />
                                    <img src={`${BASE_URL}/img/industries/rectangle-2.png`} alt="rectangle-2" className="latest-in-rectangle-2" />

                                    <img src={`${BASE_URL}/img/industries/3D-in-Medical-Care-Music.png`} alt="3D-in-Medical-Care-Music" className="latest-in-music" />

                                    <div className="latest-in-heading">Latest Blog</div>
                                    <h1 className="latest-in-title">{latestInArticle.title}</h1>
                                    <p><span dangerouslySetInnerHTML={{__html: truncate(latestInArticle.short_description ?? latestInArticle.description, 300)}}></span></p>
                                    <Link to={`/industry/${latestInArticle.slug}`} className="latest-in-btn">Read more</Link>
                                </div>
                            </div>
                            <div className="col-md-6">
                                { latestInArticle.image && <img src={API_IMG_URL + latestInArticle.image} alt={latestInArticle.title} className="latest-in-img" /> }
                            </div>
                        </div>
                    : null
                }
            </div>

            <div className="in-subscribe-container">
                <div className="container">
                    <div className="in-subscribe">
                        <h3 className="in-subscribe-heading">Subscribe to Business Insight?</h3>
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

            <div id="in-cat-list-container" className="in-cat-list-container">
                <div className="container">
                    <div className="in-filter">
                        <div className="in-search">
                            <input type="text" placeholder="What you are looking for?" id="search_keyword" className="in-search-input" onChange={(e) => searchBlog(e.target.value)} />
                            <img src={`${BASE_URL}/img/industries/search-icon.png`} alt="Search" className="in-search-icon" />
                        </div>

                        {
                            categories ?
                                <div className="in-categories">
                                    {
                                        categories.map( (item)=>
                                            <div key={`${item.id}`} className="in-category">
                                                <Link to={`/industry/category/${item.category_slug}`}  onClick={() => topHandler()}>{item.category_name}</Link>
                                            </div>
                                        )
                                    }
                                </div>
                            : null
                        }
                    </div>

                    <div className="row" id="in-list-main">
                        {
                            industrialArticles ?
                                industrialArticles.map( (item)=>
                                    <div key={`${item.id}`} className="col-md-6 in-item-main">
                                        <IndustryItem 
                                            thumbnail={`${item.image ? API_IMG_URL + item.image : ''}`}
                                            title={`${item.title}`}
                                            slug={`industry/${item.slug}`}
                                            description={item.short_description ?? item.description}
                                            date={`${item.created_at}`}
                                            comments={`0`}
                                        />
                                    </div>
                                )
                            : 'Loading...'
                        }
                    </div>

                    {
                        paginationLinks.length>3 ?
                            <div className="in-pagination-container">
                                {
                                    paginationLinks.map( (link, index, {length, lastIndex = length - 1}) => {
                                        linkLabel = `${link.label}`;
                                        if( index===0 )
                                        {
                                            linkLabel = <i className="fa fa-angle-left"></i>;
                                        }
                                        else if( index===lastIndex )
                                        {
                                            linkLabel = <i className="fa fa-angle-right"></i>;
                                        }
                                        return <div key={index} className={`pagination-number${(index===0) ? ' pagination-arrow pagination-prev' : ''} ${(index===lastIndex) ? ' pagination-arrow pagination-next' : ''} ${(link.active===true) ? 'pagination-active' : ''}`} onClick={()=>paginate(link.url)}>{linkLabel}</div>
                                    }
                                    )
                                }
                            </div>
                        : null
                    }
                </div>
            </div>

            <div className="container">
                <div className="in-marketing">
                    <div className="in-marketing-img">
                        <img src={`${BASE_URL}/img/industries/marketing-for-you.png`} alt="marketing-for-you" className="marketing-for-you" />
                        <img src={`${BASE_URL}/img/industries/marketing-rectangle.png`} alt="marketing-rectangle" className="marketing-rectangle" />
                    </div>

                    <div className="in-marketing-content">
                        <div className="in-marketing-title">Do you want me to do your marketing for you?</div>
                        <a className="in-marketing-btn">Yes, I want</a>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="in-poll-youtube">
                    <div className="row">
                        <div className="col-md-6 in-poll-youtube-item">
                            <div className="title">Live poll</div>
                            <div className="live-poll">
                                <p className="live-poll-question">Readers, what insights would you like to gain next?</p>
                                <div className="live-poll-options">
                                    <span><input type="radio" id="live_poll_topic" name="live_poll" value="Whitepaper on trending topic" /> <label htmlFor="live_poll_topic">Whitepaper on trending topic</label></span>
                                    <span><input type="radio" id="live_poll_webinar" name="live_poll" value="Whitepaper on trending topic" /> <label htmlFor="live_poll_webinar">Webinar on issue I’m passionate about</label></span>
                                    <span><input type="radio" id="live_poll_career" name="live_poll" value="Whitepaper on trending topic" /> <label htmlFor="live_poll_career">Career advice from an experts</label></span>
                                </div>
                            </div>
                            <div className="in-poll-youtube-btn">Vote</div>
                        </div>
                        <div className="col-md-6 in-poll-youtube-item">
                            <div className="title">Subscribe Our YouTube Channel</div>
                            <div className="youtube-video">
                                <img src={`${BASE_URL}/img/industries/YouTube-Channel.png`} alt="YouTube-Channel" />
                            </div>
                            <div className="btn-subscribe">
                                <div className="in-poll-youtube-btn">Subscribe</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IndustryCategory;