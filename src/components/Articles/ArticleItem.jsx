import React from 'react'
import { Link } from 'react-router-dom'

export const ArticleItem = (props) => {
    return (
        <div className="col-lg-3 col-sm-6 article-item-col">
            <div className="article-item">
                {
                    props.thumbnail ?
                        <Link to={`/article/${props.slug}`}>
                            <img src={props.thumbnail} alt={props.title} />
                        </Link>
                        : null
                }

                {
                    props.category ?
                        <Link to={`/category/${props.catSlug}`} className="article-item-category">{props.category}</Link>
                        : null
                }

                <Link to={`/article/${props.slug}`} className="article-item-title">{props.title}</Link>
            </div>
        </div>
    )
}