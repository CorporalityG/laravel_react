import React from 'react'
import { Link } from 'react-router-dom'

function dateFormat(date) {
    var dateObj = new Date(date).toDateString();
    var date1 = dateObj.split(" ");
    
    return date1[1] + ' ' + date1[2] + ', ' + date1[3];
}

export const NewsItem = (props) => {
    return (
        <div className="col-lg-6 news-item-col">
            <div className='news-item' key={`/${props.uniqueKey}`}>
                <Link to={`/${props.slug}`}>{props.title}</Link>
                <div className='website-date'><span className='website'>{props.website}</span> <span className='date'>{dateFormat(props.date)}</span></div>
            </div>
        </div>
    )
}