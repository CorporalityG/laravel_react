import { Link } from 'react-router-dom'

export const RecentBlogItem = (props) => {
    return (
        <div className="col-lg-3 col-sm-6 insight-recent-blog-item-col">
            <div className="insight-recent-blog-item">
                <div className='insight-recent-blog-item-categories'>
                    {props.category}
                    {props.subcategories}
                </div>

                <Link to={`/${props.slug}`} className="insight-recent-blog-item-title">{props.title}</Link>
            </div>
        </div>
    )
}
