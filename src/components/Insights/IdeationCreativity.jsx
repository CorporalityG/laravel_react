import { BASE_URL, API_IMG_URL } from '../../config'

export const IdeationCreativity = (pageDetail) => {
    return (
        <div className="csuit-insights-video">
            {
                pageDetail ?
                    <>
                        <img src={`${BASE_URL}/img/CSuit/video-heading-bg.png`} alt={`video-heading-bg`} className="video-heading-bg" />

                        <div className='container-lg'>
                            <div className='row csuit-insights-video-row'>
                                <div className='col-lg-6'>
                                    <div className="csuit-insights-video-img" dangerouslySetInnerHTML={{ __html: pageDetail.ideation_creativity_video_iframe }}></div>
                                </div>

                                <div className='col-lg-6'>
                                    <div className="csuit-insights-video-content">
                                        <h2>{`${pageDetail.ideation_creativity_title ?? ''}`}</h2>
                                        <div dangerouslySetInnerHTML={{ __html: pageDetail.ideation_creativity_description }}></div>

                                        <div className='csuit-insights-subscribe-title'>{`${pageDetail.ideation_creativity_subscribe_title ?? ''}`}</div>
                                        <div className='csuit-insights-subscribe-list'>
                                            {
                                                pageDetail.apple_podcasts_link ?
                                                    <a href={`${pageDetail.apple_podcasts_link ?? ''}`} target="_blank">
                                                        <img src={`${API_IMG_URL}pages/${pageDetail.apple_podcasts_image}`} alt={`podcasts-apple`} />
                                                    </a>
                                                    : null
                                            }

                                            {
                                                pageDetail.spotify_link ?
                                                    <a href={`${pageDetail.spotify_link ?? ''}`} target="_blank">
                                                        <img src={`${API_IMG_URL}pages/${pageDetail.spotify_image}`} alt={`spotify`} />
                                                    </a>
                                                    : null
                                            }

                                            {
                                                pageDetail.google_podcasts_link ?
                                                    <a href={`${pageDetail.google_podcasts_link ?? ''}`} target="_blank">
                                                        <img src={`${API_IMG_URL}pages/${pageDetail.google_podcasts_image}`} alt={`google-podcasts`} />
                                                    </a>
                                                    : null
                                            }

                                            {
                                                pageDetail.youtube_link ?
                                                    <a href={`${pageDetail.youtube_link ?? ''}`} target="_blank">
                                                        <img src={`${API_IMG_URL}pages/${pageDetail.youtube_image}`} alt={`youtube`} />
                                                    </a>
                                                    : null
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    : null
            }
        </div>
    )
}
