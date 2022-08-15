import { Link } from 'react-router-dom'

export const CSuitAllItem = (props) => {
  return (
    <div className="insight-item-col">
            <div className="insight-item">
                {
                    props.thumbnail ?
                        <Link to={`/${props.slug}`}>
                            <img src={props.thumbnail} alt={props.title} />
                        </Link>
                        : null
                }

                {
                    props.category ?
                        <Link to={`/category/${props.categorySlug}`} className="insight-item-category">{props.category}</Link>
                        : null
                }

                <Link to={`/${props.slug}`} className="insight-item-title">{props.title}</Link>
            </div>
        </div>
  )
}