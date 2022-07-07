import { Link } from 'react-router-dom'

export const CorporalityStrikerItem = (props) => {
    return (
        <div className='row corporality-striker-item-row'>
            <div className="col-lg-6">
                <div className='corporality-striker-item-image'>
                    {
                        props.thumbnail ? <img src={`${props.thumbnail}`} alt={`${props.title}`} /> : null
                    }
                </div>
            </div>
            <div className='col-lg-5'>
                <div className='corporality-striker-item-content'>
                    <h2>{props.title}</h2>
                    {
                        props.description ?
                            <div className="corporality-striker-item-description" dangerouslySetInnerHTML={{ __html: props.description }}></div>
                            : null
                    }
                    <Link to={`/${props.btnLink}`} className="corporality-striker-item-link">{props.btnText}</Link>
                </div>
            </div>
            <div className='col-lg-1'></div>
        </div>
    )
}