import { Link } from 'react-router-dom';
import { BASE_URL } from '../../config'

export const SectorsWeServeItem = (props) => {
    return (
        <div className='col-lg-4 si-sws-item-col'>
            <div className='si-sws-item'>
                <div className='si-sws-item-content'>
                    <Link to={`/${props.slug}`} className="si-sws-item-title">{props.title}</Link>
                    <div className="si-sws-item-desc" dangerouslySetInnerHTML={{ __html: props.content }}></div>
                </div>
                <div className='si-sws-item-btn'>
                    <Link to={`/${props.slug}`} className="si-link">Read More <img src={`${BASE_URL}/img/ServiceInsights/left-arrow.png`} alt="arrow" /></Link>
                </div>
            </div>
        </div>
    )
}