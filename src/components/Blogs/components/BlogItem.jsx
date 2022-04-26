import { BASE_URL } from '../../../config';
import React from 'react';
import "./BlogCard.css";
import { Link } from 'react-router-dom';

function truncate(text, size) {
    return text?.length > size ? text.substr(0, size - 1) + '...' : text;
}

function dateFormat(date) {
    var dateObj = new Date(date).toDateString();
    var date1 = dateObj.split(" ");
    // console.log(date);
    /*date.forEach((e, i) => {
        date[i] = date[i].toUpperCase();
    })*/
    return date1[1] + ' ' + date1[2] + ', ' + date1[3];
}

function BlogItem(props) {
    return (
        <div className="blog-item shadow" data-aos="fade-up" data-aos-duration="2000">
            <div data-aos="fade-up" data-aos-duration="2000">
                {props.thumbnail && <img src={props.thumbnail} className="blog-img" alt={props.title} />}
            </div>
            <div className="blog-content" data-aos="fade-up" data-aos-duration="2000">
                <div className="blog-title" data-aos="fade-up" data-aos-duration="2100">{props.title}</div>
                <div data-aos="fade-up" data-aos-duration="2200">
                    <p>
                        {
                            props.description != null ?
                            <span dangerouslySetInnerHTML={{ __html: truncate(props.description.replace(/<(.|\n)*?>/g, ''), 300) }}></span>
                            : null
                        }
                        <Link to={`/${props.slug}`} className="blog-read-more">Read more</Link>
                    </p>
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