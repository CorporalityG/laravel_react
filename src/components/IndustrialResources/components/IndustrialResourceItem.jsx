import { BASE_URL } from '../../../config';
import React from 'react';
import "./IndustrialResourceItem.css";
import { Link } from 'react-router-dom';

function truncate(text, size)
{
    return text?.length > size ? text.substr(0, size - 1) + '...' : text;
}

const IndustrialResourceItem = (props) => {
    return (
        <div className="blog-item" data-aos="fade-up" data-aos-duration="2000">
            <Link to={`/article/${props.slug}`}>
                <div data-aos="fade-up" data-aos-duration="2000">
                    { props.thumbnail && <img src={BASE_URL + props.thumbnail} className="blog-img" alt={props.title} /> }
                </div>
                <div className="blog-content" data-aos="fade-up" data-aos-duration="2000">
                    <div className="blog-title" data-aos="fade-up" data-aos-duration="2100">{props.title}</div>
                    <div data-aos="fade-up" data-aos-duration="2200">
                        <p><span dangerouslySetInnerHTML={{__html: truncate(props.description, 300)}}></span></p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default IndustrialResourceItem;