import { GetInvolvedItem } from './GetInvolvedItem';
import { BASE_URL } from '../../config'

export const GetInvolved = () => {
    return (
        <div className='si-get-involved-section'>
            <div className='container-lg'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='si-gi-title-content'>
                            <h2>Get Involved</h2>
                            <p>We believe that progress happens by bringing together people from all walks of life who have the drive and the influence to make a positive change.</p>
                        </div>
                    </div>
                </div>

                <div className='row si-gi-item-row'>
                    <GetInvolvedItem
                        thumbnail={`${BASE_URL}/img/ServiceInsights/Become-a-Partner.png`}
                        title={`Become a partner`}
                        content={`<p>We partner with like-minded people to take on tough business challenges and our commitment to delivering expected results.</p>`}
                        btnText={`Get involved`}
                        btnLink={`/partnership-programmes`}
                    />

                    <GetInvolvedItem
                        thumbnail={`${BASE_URL}/img/ServiceInsights/Join-Our-Community.png`}
                        title={`Join Our Community`}
                        content={`<p>Join our club to stay ahead of the curve, and be part of the thought leaders' community to cross through the tough challenges together.</p>`}
                        btnText={`Join us`}
                        btnLink={`https://corporality.global/club/membership/`}
                    />
                </div>
            </div>
        </div>
    )
}