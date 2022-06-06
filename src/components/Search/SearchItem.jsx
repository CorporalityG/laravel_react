import { Link } from 'react-router-dom'

function truncate(text, size) {
    return text?.length > size ? text.substr(0, size - 1) + '...' : text;
}

export const SearchItem = (props) => {
    return (
        <div className='row search-item-row mx-lg-0'>
            <div className="col-lg-3 pl-lg-0">
                <div className="search-item-img">
                    {
                        props.thumbnail ?
                            <Link to={`/${props.slug}`}>
                                <img src={props.thumbnail} alt={props.title} />
                            </Link>
                            : null
                    }
                </div>
            </div>
            <div className="col-lg-9">
                <div className="search-item-content">
                    <h2 className="search-item-title">
                        <Link to={`/${props.slug}`}>{props.title}</Link>
                    </h2>

                    <div className="search-item-desc" dangerouslySetInnerHTML={{ __html: truncate(props.shortDescription, 150) }}></div>

                    { props.category ? props.category : null }
                </div>
            </div>
        </div>
    )
}