import React from 'react'
import { Link } from 'react-router-dom';

function dateFormat(date) {
    var dateObj = new Date(date);
    const month = dateObj.toLocaleString('default', { month: 'short' });

    return dateObj.getDate() + ' ' + month + ' ' + dateObj.getFullYear();
}

function contentLimit(text, size) {
    return text?.length > size ? text.substr(0, size - 1) + '...' : text;
}

export const RelatedBlogItem = (props) => {
    return (
        <div className={`col-lg-${props.uniqueKey < 2 ? 6 : 3} col-md-4 col-sm-6`}>
            <div className={`sb-related-item ${props.uniqueKey < 2 ? 'sb-related-blog-2' : ''}`}>
                <Link to={`/${props.slug}`}>
                    <div className="sb-related-blog-img">
                        {props.thumbnail && <img src={props.thumbnail} alt={props.title} />}
                    </div>

                    <h3 className="sb-related-blog-title">{props.title}</h3>
                    {
                        props.uniqueKey < 2 ?
                            <div className="sb-related-blog-desc" dangerouslySetInnerHTML={{ __html: contentLimit(props.content, 150) }}></div>
                            : null
                    }
                    <div className="sb-related-blog-date">{dateFormat(props.date)}</div>
                </Link>
            </div>
        </div>
    )
}