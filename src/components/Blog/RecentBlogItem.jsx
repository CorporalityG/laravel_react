import React from 'react'
import { Link } from 'react-router-dom'

export const RecentBlogItem = (props) => {
    return (
        <div className="sb-recent-blog-item">
            {
               /* props.category ?
                    <Link to={`/category/${props.catSlug}`} className="sb-recent-blog-category">{props.category}</Link>
                    : null*/
            }

            {
                props.thumbnail ?
                    <Link to={`/${props.slug}`} className="sb-recent-blog-img">
                        <img src={props.thumbnail} alt={props.title} />
                    </Link>
                    : null
            }

            <Link to={`/${props.slug}`} className="sb-recent-blog-title">{props.title}</Link>
        </div>
    )
}