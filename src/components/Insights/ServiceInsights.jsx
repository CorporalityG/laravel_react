import { BASE_URL, API_IMG_URL } from '../../config'
import { Link } from 'react-router-dom'

export const ServiceInsights = (pageDetail) => {
    return (
        <div className="csuit-insights-service">
            {
                pageDetail ?
                    <div className='container-lg'>
                        <div className='row csuit-insights-service-row'>
                            <div className='col-lg-7 csuit-insights-service-content'>
                                <h2>{`${pageDetail.service_insights_title ?? ''}`}</h2>
                                <p>{`${pageDetail.service_insights_description ?? ''}`}</p>
                                
                                { pageDetail.service_insights_description && <Link to={`/${pageDetail.service_insights_btn_link ?? ''}`} className="csuit-insights-service-btn">{`${pageDetail.service_insights_btn_text ?? ''}`}</Link> }
                            </div>

                            <div className='col-lg-5 csuit-insights-service-img'>
                                <a href={`${pageDetail.service_insights_event_link ?? ''}`} target="_blank">
                                { pageDetail.service_insights_event_image && <img src={`${API_IMG_URL}pages/${pageDetail.service_insights_event_image}`} alt={`${pageDetail.service_insights_title ?? 'Service Insights'}`} /> }
                                </a>
                            </div>
                        </div>
                    </div>
                    : null
            }
        </div>
    )
}