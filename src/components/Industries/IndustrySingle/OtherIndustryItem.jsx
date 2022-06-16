import { Link } from 'react-router-dom'

export const OtherIndustryItem = (props) => {
    return (
        <div className='col-lg-6 is-oi-col'>
            <Link to={`/${props.slug}`}>
                <div className='is-oi-cat-item'>
                    <div className='is-oi-cat-item-icon'>
                        {
                            props.icon ?
                                <img src={props.icon} alt={props.category} className="item-icon" />
                                : null
                        }
                    </div>
                    <div className='is-oi-cat-item-title'> {props.category}</div>
                </div>
            </Link>
        </div>
    )
}