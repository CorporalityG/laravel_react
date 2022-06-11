import { BASE_URL } from '../../config'

export const IdeationCreativity = () => {
    return (
        <div className="csuit-insights-video">
            <img src={`${BASE_URL}/img/CSuit/video-heading-bg.png`} alt={`video-heading-bg`} className="video-heading-bg" />

            <div className='container-lg'>
                <div className='row csuit-insights-video-row'>
                    <div className='col-lg-6'>
                        <div className="csuit-insights-video-img">
                            <iframe width="100%" height="350" src="https://www.youtube.com/embed/M3DekVZlxsM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>

                    <div className='col-lg-6'>
                        <div className="csuit-insights-video-content">
                            <h2>Ideation + Creativity</h2>
                            <p>At corporality Ideation with fearless creativity is lived by every one in the team. Our podcast series, CEO Priya Mishra talks about Manifestation and success. We also have Global leaders Interview series about Growth, Business & ecological sustainability of business</p>

                            <div className='csuit-insights-subscribe-title'>Subscribe :</div>
                            <div className='csuit-insights-subscribe-list'>
                                <a href='https://podcasts.apple.com/us/podcast/corporality/id1444450693?ign-mpt=uo%3D4&mt=2' target="_blank">
                                    <img src={`${BASE_URL}/img/CSuit/podcasts-apple.png`} alt={`podcasts-apple`} />
                                </a>
                                <a href='https://open.spotify.com/show/1MaGRx67hlU9lyqPjiSQsK' target="_blank">
                                    <img src={`${BASE_URL}/img/CSuit/spotify.png`} alt={`spotify`} />
                                </a>
                                <a href='https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy83ZDMyMzg0L3BvZGNhc3QvcnNz' target="_blank">
                                    <img src={`${BASE_URL}/img/CSuit/google-podcasts.png`} alt={`google-podcasts`} />
                                </a>
                                <a href='https://www.youtube.com/channel/UC4EISt8kHI4zzpmbIBMIBbg' target="_blank">
                                    <img src={`${BASE_URL}/img/CSuit/youtube.png`} alt={`youtube`} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
