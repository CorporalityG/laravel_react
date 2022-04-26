import React, { useEffect, useState } from 'react'
import BlogTop from './components/BlogTop'
import "./Blog.css"
import Aos from 'aos';
// import axios from 'axios';
import { useParams } from 'react-router-dom'
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../config';
import Carousel from 'react-grid-carousel'
import BlogItem from './components/BlogItem';
// import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
// import TabContainer from 'react-bootstrap/TabContainer'
// import TabContent from 'react-bootstrap/TabContent'
// import TabPane from 'react-bootstrap/TabPane'
import Nav from 'react-bootstrap/Nav'
// import MetaTags from 'react-meta-tags';
// import RelatedPost from './components/RelatedPost'

function dateFormat(date)
{
    var dateObj = new Date(date);
    const month = dateObj.toLocaleString('default', { month: 'long' });
    // console.log('-> ', month.toUpperCase());

    return month + ' ' + dateObj.getDate() + ', ' + dateObj.getFullYear();
}

const Blog = () => {

    const params = useParams();
    const [singleBlog, setSingleBlog] = useState([]);

    useEffect( () => {
        Aos.init();
        // console.log(params);
        getBlog(params.post_slug);
    }, [params])

    async function getBlog(slug)
    {
        let result = await fetch(API_BASE_URL + "/single-blog/" + slug);
        result = await result.json();
        // console.log(result);
        setSingleBlog(result);
        // document.title = result.post_title;
    }

    /*async function getRecentPosts()
    {
        let result = await fetch(API_BASE_URL + "/posts");
        result = await result.json();
        setRecentPosts(result.data);
        // console.log(result.data);
        // setLoading(false);
    }*/

    return (
        <div className="single-blog-page">
            {/*{
                singleBlog ?
                    <MetaTags>
                        <title>{singleBlog.meta_title ?? singleBlog.post_title}</title>
                        { singleBlog.meta_description && <meta name="description" content={singleBlog.meta_description} /> }
                        { singleBlog.meta_keywords && <meta name="keywords" content={singleBlog.meta_keywords} /> }
                    </MetaTags>
                : null
            }*/}
            
            <BlogTop />

            <div className="single-blog-content-main">
                <img src={BASE_URL + '/img/blogs/single-blog-left-1.png'} alt="single-blog-left-1" className="single-blog-left-1" />
                <img src={BASE_URL + '/img/blogs/single-blog-left-2.png'} alt="single-blog-left-2" className="single-blog-left-2" />
                <img src={BASE_URL + '/img/blogs/single-blog-right.png'} alt="single-blog-right" className="single-blog-right" />

                <div className="container">
                    <div className="row">
                        {
                            singleBlog ?
                                <div className="col-md-8">
                                    <div className="single-blog-img">
                                        { singleBlog.post_image && <img src={API_IMG_URL + singleBlog.post_image} alt={singleBlog.post_title} /> }
                                    </div>

                                    <div className="blog-date-comment-main">
                                        {
                                            singleBlog.created_at ?
                                                <div className="blog-date-comment">
                                                    <img src={BASE_URL + '/img/HomePage/blog/date-icon.png'} alt="Date" />
                                                    <span>{dateFormat(singleBlog.created_at)}</span>
                                                </div>
                                            : null
                                        }
                                        {/* <div className="blog-date-comment">
                                            <img src={BASE_URL + '/img/blogs/comment-icon.png'} alt="Comment" />
                                            <span>(0) Comments</span>
                                        </div> */}
                                    </div>

                                    <h1 className="single-blog-heading">{singleBlog.post_title}</h1>

                                    <div className="single-blog-description" dangerouslySetInnerHTML={{__html: singleBlog.post_description}}></div>
                                </div>
                            : null
                        }

                        <div className="col-md-4">
                            <div className="single-sidebar-box">
                                <img src={BASE_URL + '/img/blogs/3D-in-Medical-Care-Music-single.png'} alt="3D-in-Medical-Care-Music" />
                            </div>

                            <div className="single-sidebar-box">
                                <div className="sidebar-heading">Subscribe Our YouTube Channel</div>
                                <div className="youtube-video">
                                    <img src={BASE_URL + '/img/blogs/YouTube-Channel.png'} alt="YouTube-Channel" />
                                </div>
                                <div className="btn-subscribe">
                                    <div className="youtube-btn">Subscribe</div>
                                </div>
                            </div>

                            <div className="single-sidebar-box">
                                <div className="sidebar-heading">Live poll</div>
                                <div className="live-poll">
                                    <p className="live-poll-question">Readers, what insights would you like to gain next?</p>
                                    <div className="live-poll-options">
                                        <span><input type="radio" id="live_poll_topic" name="live_poll" value="Whitepaper on trending topic" /> <label htmlFor="live_poll_topic">Whitepaper on trending topic</label></span>
                                        <span><input type="radio" id="live_poll_webinar" name="live_poll" value="Whitepaper on trending topic" /> <label htmlFor="live_poll_webinar">Webinar on issue I’m passionate about</label></span>
                                        <span><input type="radio" id="live_poll_career" name="live_poll" value="Whitepaper on trending topic" /> <label htmlFor="live_poll_career">Career advice from an experts</label></span>
                                    </div>

                                    <div className="single-blog-poll-btn">Vote</div>
                                </div>
                            </div>

                            <div className="single-sidebar-box">
                                <div className="sidebar-heading">@corporality Global Social Media</div>
                                <div className="social-media-box">
                                    <Tab.Container id="social-media-tabs" defaultActiveKey="instagram">
                                        <Nav className="social-media-header flex-row">
                                            <Nav.Link eventKey="instagram" className="social-media-title">
                                                <i className="fa fa-instagram"></i>
                                                <span>Instagram</span>
                                            </Nav.Link>

                                            <Nav.Link eventKey="facebook" className="social-media-title">
                                                <i className="fa fa-facebook"></i>
                                                <span>Facebook</span>
                                            </Nav.Link>

                                            <Nav.Link eventKey="twitter" className="social-media-title">
                                                <i className="fa fa-twitter"></i>
                                                <span>Twitter</span>
                                            </Nav.Link>

                                            <Nav.Link eventKey="linkedin" className="social-media-title">
                                                <i className="fa fa-linkedin"></i>
                                                <span>Linked In</span>
                                            </Nav.Link>
                                        </Nav>
                                    
                                        <Tab.Content>
                                            <Tab.Pane eventKey="instagram">
                                                <div className="social-media-posts">Instagram</div>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="facebook">
                                                <div className="social-media-posts">Facebook</div>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="twitter">
                                                <div className="social-media-posts">Twitter</div>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="linkedin">
                                                <div className="social-media-posts">Linked In</div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>
                            </div>

                            {/* <div className="single-sidebar-box">
                                <div className="comment-list-main">
                                    <div className="sidebar-heading">Comments</div>
                                    <div className="comment-list">
                                        <div className="comment-list-item">
                                            <div className="comment-author-img">
                                                <img src={BASE_URL + '/img/blogs/comment-author-1.png'} alt="Jhasan Fried" />
                                            </div>
                                            <div className="comment-content">
                                                <div className="comment-heading">
                                                    <span className="comment-author-name">Jhasan Fried</span>
                                                    <span className="comment-date">Nov 10, 2020</span>
                                                </div>
                                                <div className="comment-description">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra ultrices pulvinar posuere sit turpis sit mauris sed tempor. Duis et sed in mi varius odio.</p>
                                                </div>
                                                <div className="comment-likes">
                                                    <div className="comment-like-item">
                                                        <i className="fa fa-thumbs-up"></i>
                                                        <span>10</span>
                                                    </div>
                                                    <div className="comment-like-item">
                                                        <i className="fa fa-thumbs-down"></i>
                                                        <span>5</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="comment-list-item">
                                            <div className="comment-author-img">
                                                <img src={BASE_URL + '/img/blogs/comment-author-2.png'} alt="Jhasan Fried" />
                                            </div>
                                            <div className="comment-content">
                                                <div className="comment-heading">
                                                    <span className="comment-author-name">Jhasan Fried</span>
                                                    <span className="comment-date">Nov 10, 2020</span>
                                                </div>
                                                <div className="comment-description">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra ultrices pulvinar posuere sit turpis sit mauris sed tempor. Duis et sed in mi varius odio.</p>
                                                </div>
                                                <div className="comment-likes">
                                                    <div className="comment-like-item comment-like-up">
                                                        <i className="fa fa-thumbs-up"></i>
                                                        <span>8</span>
                                                    </div>
                                                    <div className="comment-like-item">
                                                        <i className="fa fa-thumbs-down"></i>
                                                        <span>3</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="comment-list-item">
                                            <div className="comment-author-img">
                                                <img src={BASE_URL + '/img/blogs/comment-author-3.png'} alt="Jhasan Fried" />
                                            </div>
                                            <div className="comment-content">
                                                <div className="comment-heading">
                                                    <span className="comment-author-name">Jhasan Fried</span>
                                                    <span className="comment-date">Nov 10, 2020</span>
                                                </div>
                                                <div className="comment-description">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra ultrices pulvinar posuere sit turpis sit mauris sed tempor. Duis et sed in mi varius odio.</p>
                                                </div>
                                                <div className="comment-likes">
                                                    <div className="comment-like-item">
                                                        <i className="fa fa-thumbs-up"></i>
                                                        <span>20</span>
                                                    </div>
                                                    <div className="comment-like-item comment-like-down">
                                                        <i className="fa fa-thumbs-down"></i>
                                                        <span>2</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="comment-form-main">
                                    <div className="sidebar-heading">Write Your Comment</div>
                                    <div className="comment-form">
                                        <textarea className="comment-form-control"></textarea>
                                        <div className="form-btn">Submit</div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

            {/*<RelatedPost />*/}
            <div className="related-post-main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="related-post-carousel" data-aos="fade-up">
                                <Carousel cols={3} rows={1} gap={30} arrowLeft={<div className="related-post-arrow related-post-arrow-prev"><i className="fa fa-angle-left"></i></div>} arrowRight={<div className="related-post-arrow related-post-arrow-next"><i className="fa fa-angle-right"></i></div>}>

                                    <Carousel.Item>
                                        <BlogItem 
                                            thumbnail={BASE_URL + '/img/blogs/smartphones-can-do-medical-check-ups-in-the-future.jpg'}
                                            title={'Smartphones Can Do Medical Check-Ups in the Future | Corporality Global'}
                                            date={'December 27, 2021'}
                                            slug={'smartphones-can-do-medical-check-ups-in-the-future'}
                                            comments={'0'}
                                        />
                                    </Carousel.Item>

                                    <Carousel.Item>
                                        <BlogItem 
                                            thumbnail={BASE_URL + '/img/blogs/health-worker-robots.png'}
                                            title={'Health Worker Robots | Precision Drug Test Tracking'}
                                            date={'December 20, 2021'}
                                            slug={'health-worker-robots'}
                                            comments={'0'}
                                        />
                                    </Carousel.Item>

                                    <Carousel.Item>
                                        <BlogItem 
                                            thumbnail={BASE_URL + '/img/blogs/applications-of-artificial-intelligence-in-medicine.png'}
                                            title={'Top 6 Applications of Artificial Intelligence in Medicine'}
                                            date={'December 10, 2021'}
                                            slug={'applications-of-artificial-intelligence-in-medicine'}
                                            comments={'0'}
                                        />
                                    </Carousel.Item>

                                    <Carousel.Item>
                                        <BlogItem 
                                            thumbnail={BASE_URL + '/img/blogs/cop26-and-its-implications.jpg'}
                                            title={'COP26 AND ITS IMPLICATIONS | Corporality Global'}
                                            date={'November 12, 2021'}
                                            slug={'cop26-and-its-implications'}
                                            comments={'0'}
                                        />
                                    </Carousel.Item>
                                  
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog