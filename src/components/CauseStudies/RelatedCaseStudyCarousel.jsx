import React from 'react'
import Carousel from 'react-grid-carousel'
import CauseStudyItem from './CauseStudyItem';
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../config';

function RelatedCaseStudyCarousel(props) {
    return (
        <div className="related-case-study-carousel">
            <Carousel cols={3} rows={1} gap={15} arrowLeft={<div className="related-case-study-arrow related-case-study-arrow-prev"><img src={BASE_URL + '/img/case-study-arrow-prev.png'} alt="<-" /></div>} arrowRight={<div className="related-case-study-arrow related-case-study-arrow-next"><img src={BASE_URL + '/img/case-study-arrow-next.png'} alt="->" /></div>} responsiveLayout={[{ breakpoint: 991, cols: 1, rows: 1, gap: 10, loop: true, }]}>

                {
                    props.slug != 'divine-intercession' ?
                    <Carousel.Item>
                        <CauseStudyItem
                            thumbnail={BASE_URL + '/img/Divine-Intercession-Client.png'}
                            title={'Divine Intercession'}
                            subtitle={'Human to Human solutions'}
                            slug={'divine-intercession'}
                        />
                    </Carousel.Item>
                    : null
                }

                {
                    props.slug != 'build-q' ?
                    <Carousel.Item>
                        <CauseStudyItem
                            thumbnail={BASE_URL + '/img/BuildQ-Client.png'}
                            title={'BuildQ Group'}
                            subtitle={'Building a perfect digital framework'}
                            slug={'build-q'}
                        />
                    </Carousel.Item>
                    : null
                }

                {
                    props.slug != 'fastgrow-finance' ?
                        <Carousel.Item>
                        <CauseStudyItem
                            thumbnail={BASE_URL + '/img/Fastgrow-Client.png'}
                            title={'Fastgrow'}
                            subtitle={'Identifying the intended maturity'}
                            slug={'fastgrow-finance'}
                        />
                    </Carousel.Item>
                    : null
                }

                {
                    props.slug != 'tech-consultants' ?
                    <Carousel.Item>
                        <CauseStudyItem
                            thumbnail={BASE_URL + '/img/TechConsultants-Client.png'}
                            title={'Tech Consultants'}
                            subtitle={'Out of the ordinary'}
                            slug={'tech-consultants'}
                        />
                    </Carousel.Item>
                    : null
                }

                {
                    props.slug != 'sk-insurance' ?
                    <Carousel.Item>
                        <CauseStudyItem
                            thumbnail={BASE_URL + '/img/SK-Insurance-Client.png'}
                            title={'SK Insurance'}
                            subtitle={'Visionary growth strategies'}
                            slug={'sk-insurance'}
                        />
                    </Carousel.Item>
                    : null
                }

                {
                    props.slug != 'klek-services' ?
                    <Carousel.Item>
                        <CauseStudyItem
                            thumbnail={BASE_URL + '/img/Klek-Services-Client.png'}
                            title={'Klek Services'}
                            subtitle={'Identifying the intended maturity'}
                            slug={'klek-services'}
                        />
                    </Carousel.Item>
                    : null
                }
            </Carousel>
        </div>
    )
}

export default RelatedCaseStudyCarousel