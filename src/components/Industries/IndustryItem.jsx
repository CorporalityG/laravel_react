import { Link } from 'react-router-dom'

export const IndustryItem = (props) => {
    return (
        <div className='col-lg-6 industry-oi-col'>
            <div className='industry-oi-item'>
                <div className='container-fluid px-0'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <div className='industry-oi-item-img'>
                                {
                                    props.thumbnail ?
                                        <img src={props.thumbnail} alt={props.title} />
                                        : null
                                }
                            </div>
                        </div>

                        <div className='col-lg-8'>
                            <div className='industry-oi-item-content'>
                                <div className='industry-oi-item-desc'>
                                    <div className='industry-oi-item-category'>{props.category}</div>
                                    <div className='industry-oi-item-title'><Link  to={`/${props.slug}`}>{props.title}</Link></div>
                                    <div className="industry-oi-desc" dangerouslySetInnerHTML={{ __html: props.short_description }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}