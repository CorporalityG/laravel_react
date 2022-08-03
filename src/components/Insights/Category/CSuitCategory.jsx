import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import "./CSuitCategory.css"
import CSuitItem from "./CSuitItem";
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../../config';
import { useParams, Link } from "react-router-dom";

function truncate(text, size)
{
    return text?.length > size ? text.substr(0, size - 1) + '...' : text;
}

function CSuitCategory() {

    const params = useParams();

    const [latestCsuit, setLatestCsuit] = useState([]);
    const [csuits, setCsuits] = useState([]);
    const [paginationLinks, setPaginationLinks] = useState([]);
    const [categories, setCategories] = useState([]);

    let linkLabel = '';

    useEffect( ()=> {
        Aos.init();

        getLatestCsuit();
        getCategories();
        getData();
    }, [params]);

    async function getLatestCsuit()
    {
        let result = await fetch(`${API_BASE_URL}/latest-csuits`);
        result = await result.json();
        setLatestCsuit(result);
    }

    async function getData(pageLink='', search_keyword='')
    {
        const categorySlug = params.category_slug!==undefined ? "&category=" + params.category_slug : '';
        
        const apiLink = ( pageLink==='' ? 
                            `${API_BASE_URL}/csuits-insights?search_keyword=${search_keyword + categorySlug}` : 
                            `${pageLink}&search_keyword=${search_keyword + categorySlug}`
                        );
        console.log(apiLink)
        let result = await fetch(apiLink);
        result = await result.json();

        setCsuits(result.data);
        setPaginationLinks(result.links);
    }

    const paginate = (pageNumber) => {
        if( pageNumber )
        {
            const keyword = document.getElementById('search_keyword');
            getData(pageNumber, keyword.value);
        }
        const topScroll = document.getElementById('cs-list-main'); 
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
        let result = await fetch(`${API_BASE_URL}/csuits-categories`);
        result = await result.json();

        setCategories(result);
    }

    const topHandler = () => {
        const topScroll = document.getElementById('cs-cat-list-container'); 
        window.scrollTo({
            top: topScroll.offsetTop - 90,
            behavior: "smooth"
        });
    }

    return (
        <div className="cs-cat-page">

            <div className="latest-cs">
                {
                    latestCsuit ?
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-5 d-flex align-items-center">
                                <div className="latest-cs-item">
                                    <img src={`${BASE_URL}/img/CSuit/rectangle-1.png`} alt="rectangle-1" className="latest-cs-rectangle-1" />
                                    <img src={`${BASE_URL}/img/CSuit/rectangle-2.png`} alt="rectangle-2" className="latest-cs-rectangle-2" />

                                    <img src={`${BASE_URL}/img/CSuit/3D-in-Medical-Care-Music.png`} alt="3D-cs-Medical-Care-Music" className="latest-cs-music" />

                                    <div className="latest-cs-heading">Latest Blog</div>
                                    <h1 className="latest-cs-title">{latestCsuit.title}</h1>
                                    <p><span dangerouslySetInnerHTML={{__html: truncate(latestCsuit.short_description ?? latestCsuit.description, 300)}}></span></p>
                                    <Link to={`/csuit/${latestCsuit.slug}`} className="latest-cs-btn">Read more</Link>
                                </div>
                            </div>
                            <div className="col-md-6">
                                { latestCsuit.image && <img src={API_IMG_URL + latestCsuit.image} alt={latestCsuit.title} className="latest-cs-img" /> }
                            </div>
                        </div>
                    : null
                }
            </div>

            <div className="cs-subscribe-container">
                <div className="container">
                    <div className="cs-subscribe">
                        <h3 className="cs-subscribe-heading">Subscribe to Business Insight?</h3>
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

            <div id="cs-cat-list-container" className="cs-cat-list-container">
                <div className="container">
                    <div className="cs-filter">
                        <div className="cs-search">
                            <input type="text" placeholder="What you are looking for?" id="search_keyword" className="cs-search-input" onChange={(e) => searchBlog(e.target.value)} />
                            <img src={`${BASE_URL}/img/CSuit/search-icon.png`} alt="Search" className="cs-search-icon" />
                        </div>

                        {
                            categories ?
                                <div className="cs-categories">
                                    {
                                        categories.map( (item)=>
                                            <div key={`${item.id}`} className="cs-category">
                                                <Link to={`/csuit/category/${item.category_slug}`}  onClick={() => topHandler()}>{item.category_name}</Link>
                                            </div>
                                        )
                                    }
                                </div>
                            : null
                        }
                    </div>

                    <div className="row" id="cs-list-main">
                        {
                            csuits ?
                                csuits.map( (item)=>
                                    <div key={`${item.id}`} className="col-md-6 cs-item-main">
                                        <CSuitItem 
                                            thumbnail={`${item.image ? API_IMG_URL + item.image : ''}`}
                                            title={`${item.title}`}
                                            slug={`csuit/${item.slug}`}
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
                            <div className="cs-pagination-container">
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
                <div className="cs-marketing">
                    <div className="cs-marketing-img">
                        <img src={`${BASE_URL}/img/CSuit/marketing-for-you.png`} alt="marketing-for-you" className="marketing-for-you" />
                        <img src={`${BASE_URL}/img/CSuit/marketing-rectangle.png`} alt="marketing-rectangle" className="marketing-rectangle" />
                    </div>

                    <div className="cs-marketing-content">
                        <div className="cs-marketing-title">Do you want me to do your marketing for you?</div>
                        <div className="cs-marketing-btn">Yes, I want</div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="cs-poll-youtube">
                    <div className="row">
                        <div className="col-md-6 cs-poll-youtube-item">
                            <div className="title">Live poll</div>
                            <div className="live-poll">
                                <p className="live-poll-question">Readers, what insights would you like to gain next?</p>
                                <div className="live-poll-options">
                                    <span><input type="radio" id="live_poll_topic" name="live_poll" value="Whitepaper on trending topic" /> <label htmlFor="live_poll_topic">Whitepaper on trending topic</label></span>
                                    <span><input type="radio" id="live_poll_webinar" name="live_poll" value="Whitepaper on trending topic" /> <label htmlFor="live_poll_webinar">Webinar on issue I’m passionate about</label></span>
                                    <span><input type="radio" id="live_poll_career" name="live_poll" value="Whitepaper on trending topic" /> <label htmlFor="live_poll_career">Career advice from an experts</label></span>
                                </div>
                            </div>
                            <div className="cs-poll-youtube-btn">Vote</div>
                        </div>
                        <div className="col-md-6 cs-poll-youtube-item">
                            <div className="title">Subscribe Our YouTube Channel</div>
                            <div className="youtube-video">
                                <img src={`${BASE_URL}/img/CSuit/YouTube-Channel.png`} alt="YouTube-Channel" />
                            </div>
                            <div className="btn-subscribe">
                                <div className="cs-poll-youtube-btn">Subscribe</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CSuitCategory;