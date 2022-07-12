import React, { useEffect, useState } from 'react'
import Carousel from 'react-grid-carousel'
import CauseStudyItem from './CauseStudyItem';
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../config';
import { useParams } from 'react-router-dom'

function RelatedCaseStudyCarousel(props) {

    const params = useParams();
    const [relatedClient, setRelatedClient] = useState([]);

    useEffect(() => {
        getRelatedClient(params.client_slug);
    }, [params])

    async function getRelatedClient(slug) {
        let result = await fetch(`${API_BASE_URL}/related-clients/${slug}`);
        result = await result.json();
        setRelatedClient(result);
    }

    return (
        <div className="related-case-study-carousel">
            {
                relatedClient && relatedClient.length > 0 ?
                    <Carousel cols={3} rows={1} gap={15} arrowLeft={<div className="related-case-study-arrow related-case-study-arrow-prev"><img src={BASE_URL + '/img/case-study-arrow-prev.png'} alt="<-" /></div>} arrowRight={<div className="related-case-study-arrow related-case-study-arrow-next"><img src={BASE_URL + '/img/case-study-arrow-next.png'} alt="->" /></div>} responsiveLayout={[{ breakpoint: 825, cols: 2, rows: 1 }]}>

                        {
                            relatedClient.map((item) =>
                                <Carousel.Item key={`${item.id}`}>
                                    <CauseStudyItem
                                        thumbnail={`${API_IMG_URL}clients/${item.image}`}
                                        title={`${item.client_name}`}
                                        slug={`${item.slug}`}
                                    />
                                </Carousel.Item>
                            )
                        }
                    </Carousel>
                    : null
            }
        </div>
    )
}

export default RelatedCaseStudyCarousel