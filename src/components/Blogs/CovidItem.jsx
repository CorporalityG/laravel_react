import React from 'react'
import { Link } from 'react-router-dom'

export const CovidItem = (props) => {
    return (
        <div className='row blog2-covid-item-row' key={`/${props.uniqueKey}`}>
            <div className="col-lg-6">
                <div className="covid-item-banner">
                    <Link to={`/${props.slug}`}>
                        {props.thumbnail && <img src={props.thumbnail} alt={props.title} />}
                    </Link>
                </div>
            </div>

            <div className="col-lg-6">
                <div className="covid-item-content">
                    <Link to={`/category/${props.catSlug}`} className="covid-item-category">{props.category}</Link>

                    <Link to={`/${props.slug}`} className="covid-item-title">{props.title}</Link>
                </div>
            </div>
        </div>
    )
}