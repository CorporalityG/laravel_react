import React from 'react'
import { Link } from 'react-router-dom'

function dateFormat(date) {
    var dateObj = new Date(date).toDateString();
    var date1 = dateObj.split(" ");
    
    return date1[1] + ' ' + date1[2] + ', ' + date1[3];
}

export const FinTechItem = (props) => {
    return (
        <div className="col-lg-6 fintech-item-col">
            <div className='fintech-item'>
                <Link to={`/article/${props.slug}`}>{props.title}</Link>
                <div className='category-date'><span className='category'>{props.category}</span> <span className='date'>{dateFormat(props.date)}</span></div>
            </div>
        </div>
    )
}