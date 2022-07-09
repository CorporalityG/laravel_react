import { useEffect, useState } from 'react'
import { API_BASE_URL, API_IMG_URL } from '../../config'

export const GlobalConference = () => {

    const section_slug = 'industries-global-conference-section';
    const [pageSectionDetail, setPageSectionDetail] = useState([]);

    useEffect(() => {
        getPageSectionDetail()
    }, []);

    async function getPageSectionDetail() {
        let result = await fetch(`${API_BASE_URL}/page-detail/${section_slug}`);
        result = await result.json();
        setPageSectionDetail(result);
    }

    return (
        <div className='industry-global-conference-section'>
            {
                pageSectionDetail.detail ?
                    <>
                        <img src={`${API_IMG_URL}pages/${pageSectionDetail.detail.global_conference_bg_image}`} alt={`Global Conference`} className="industry-global-conference-banner-bg" />

                        <div className='industry-global-conference-content-main'>
                            <div className='container-lg'>
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <div className='industry-global-conference-content'>
                                            <p dangerouslySetInnerHTML={{ __html: pageSectionDetail.detail.global_conference_title }}></p>

                                            <p>{`${pageSectionDetail.detail.global_conference_subtitle}`}</p>

                                            <a href={`${pageSectionDetail.detail.global_conference_btn_link}`} target="_blank">{`${pageSectionDetail.detail.global_conference_btn_text}`}</a>
                                        </div>
                                    </div>

                                    <div className='col-lg-6'>
                                        <div className='industry-global-conference-img'>
                                            <a href={`${pageSectionDetail.detail.global_conference_btn_link}`} target="_blank">
                                                <img src={`${API_IMG_URL}pages/${pageSectionDetail.detail.global_conference_image}`} alt={`Global Conference 2022`} />
                                            </a>
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