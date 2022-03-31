import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../../config';
import React from 'react';
import "./BlogItem.css";
import { Link } from 'react-router-dom';

function dateFormat(date)
{
    var dateObj = new Date(date).toDateString();
    var date = dateObj.split(" ");
    // console.log(date);
    /*date.forEach((e, i) => {
        date[i] = date[i].toUpperCase();
    })*/
    return date[1] + ' ' + date[2] + ', ' + date[3];
}

function BlogItem(props)
{
    const topHandler = () => {
        const topScroll = document.getElementById('blogCustomizer'); 
        window.scrollTo({
            top: topScroll.offsetTop,
            behavior: "smooth"
        });
    }
    
    return (
        <div className="blog-item" data-aos="fade-up" data-aos-duration="2000">
            <div data-aos="fade-up" data-aos-duration="2000">
                { props.thumbnail && <img src={props.thumbnail} className="blog-img" alt={props.title} /> }
            </div>
            <div className="blog-content" data-aos="fade-up" data-aos-duration="2000">
                <div className="blog-title" data-aos="fade-up" data-aos-duration="2100">
                    <Link to={`/${props.slug}`} onClick={() => topHandler() }>{props.title}</Link>
                </div>
                <div className="blog-date-comment-main" data-aos="fade-up" data-aos-duration="2300">
                    <div className="blog-date-comment">
                        <img src={BASE_URL + '/img/HomePage/blog/date-icon.png'} alt="Date" />
                      <span>{dateFormat(props.date)}</span>
                    </div>
                    {/* <div className="blog-date-comment">
                        <img src={BASE_URL + '/img/blogs/comment-icon.png'} alt="Comment" />
                        <span>({props.comments}) Comments</span>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default BlogItem;