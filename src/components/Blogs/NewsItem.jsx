import React from 'react'
import { Link } from 'react-router-dom'

export const NewsItem = (props) => {
    return (
        <div className="col-lg-6 news-item-col">
            <div className='news-item'>
                <Link to={`/${props.slug}`}>{props.title}</Link>
                <div className='website-date'><span className='website'>{props.website}</span> <span className='date'>{props.date}</span></div>
            </div>
        </div>
    )
}