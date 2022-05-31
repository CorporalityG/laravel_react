import { Link } from 'react-router-dom'

export const AnnouncementItem = (props) => {
    return (
        <div className='container-lg'>
            <div className='row csuit-insights-as-row'>
                <div className='col-lg-3 col-sm-4 csuit-insights-as-banner'>
                    {
                        props.thumbnail ?
                            <img src={props.thumbnail} alt={props.title} />
                            : null
                    }
                </div>
                <div className='col-lg-9 col-sm-8 csuit-insights-as-content'>
                    <div className='csuit-insights-as-category'>{props.category}</div>
                    <h2>{props.title}</h2>
                    <Link to={`/${props.slug}`} className="csuit-insights-as-link">Watch Now <svg viewBox="0 0 21 18" focusable="false" aria-hidden="true"><path d="M0.266478 8.99987C0.266478 9.33987 0.40148 9.66486 0.641486 9.90486C0.881493 10.1449 1.20648 10.2799 1.54648 10.2799L15.5852 10.2799L10.3814 15.1311C10.1189 15.3586 9.96136 15.6836 9.94261 16.0311C9.92511 16.3773 10.0489 16.7173 10.2864 16.9711C10.5239 17.2248 10.8538 17.3711 11.2014 17.3773C11.5488 17.3823 11.8839 17.2461 12.1288 16.9998L19.71 9.93741C19.9687 9.69491 20.1162 9.35616 20.1162 9.00115C20.1162 8.64614 19.9687 8.30739 19.71 8.0649L12.1289 0.999936C11.6113 0.51744 10.8014 0.544929 10.3189 1.06244C9.83637 1.57869 9.86511 2.38992 10.3814 2.87242L15.5852 7.71978L1.54648 7.71978C1.20648 7.71978 0.881492 7.85478 0.641492 8.09478C0.401492 8.33479 0.266482 8.65978 0.266482 8.99978L0.266478 8.99987Z"></path></svg></Link>
                </div>
            </div>
        </div>
    )
}