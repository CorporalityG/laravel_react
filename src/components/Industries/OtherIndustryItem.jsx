import { Link } from 'react-router-dom'

export const OtherIndustryItem = (props) => {
    return (
        <div className='col-lg-3 col-md-4 col-sm-6 industry-oi-col'>
            <Link to={`/${props.slug}`}>
                <div className='industry-oi-cat-item'>
                    <div className='industry-oi-cat-item-img'>
                        {
                            props.icon ?
                                <img src={props.icon} alt={props.category} className="icon" />
                                : null
                        }
                        {
                            props.hoverIcon ?
                                <img src={props.hoverIcon} alt={props.category} className="icon-hover" />
                                : null
                        }
                    </div>
                    <div className='industry-oi-cat-item-title'> {props.category}</div>
                </div>
            </Link>
        </div>
    )
}