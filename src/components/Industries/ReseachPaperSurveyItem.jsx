import { Link } from 'react-router-dom'

export const ReseachPaperSurveyItem = (props) => {
    return (
        <div className='col-md-6'>
            <div className='industry-banner-paper-survey-item'>
                <div className='paper-survey-item-title'>{props.title}</div>
                <Link to={`/${props.slug}`} className='paper-survey-item-link'>Start Reading</Link>
            </div>
        </div>
    )
}