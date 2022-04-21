import React from 'react'
import { Link } from 'react-router-dom'

export const BlogItem = (props) => {
    return (
        <div className="col-lg-3 blog-item-col">
            <div className="blog-item">
                {
                    props.thumbnail ?
                        <Link to={`/${props.slug}`}>
                            <img src={props.thumbnail} alt={props.title} />
                        </Link>
                        : null
                }

                {
                    props.category ?
                        <Link to={`/category/${props.catSlug}`} className="blog-item-category">{props.category}</Link>
                        : null
                }

                <Link to={`/${props.slug}`} className="blog-item-title">{props.title}</Link>
            </div>
        </div>
    )
}