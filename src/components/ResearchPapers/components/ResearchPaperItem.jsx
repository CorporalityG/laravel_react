import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../../config';
import React from 'react';
import "./ResearchPaperItem.css";
import { Link } from 'react-router-dom';

function truncate(text, size)
{
    return text?.length > size ? text.substr(0, size - 1) + '...' : text;
}

const ResearchPaperItem = (props) => {
    return (
        <div className="research-paper-item" data-aos="fade-up" data-aos-duration="2000">
            <Link to={`/${props.slug}`}>
                <div data-aos="fade-up" data-aos-duration="2000">
                    { props.thumbnail && <img src={BASE_URL + props.thumbnail} className="research-paper-img" alt={props.title} /> }
                </div>
                <div className="research-paper-content" data-aos="fade-up" data-aos-duration="2000">
                    <div className="research-paper-title" data-aos="fade-up" data-aos-duration="2100">{props.title}</div>
                    <div data-aos="fade-up" data-aos-duration="2200">
                        <p><span dangerouslySetInnerHTML={{__html: truncate(props.description, 300)}}></span></p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default ResearchPaperItem;