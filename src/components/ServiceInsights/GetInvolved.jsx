import { useEffect, useState } from 'react'
import { GetInvolvedItem } from './GetInvolvedItem';
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../config'

export const GetInvolved = () => {

    const section_slug = 'get-involved-section';
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
        <div className='si-get-involved-section'>
            {
                pageSectionDetail.detail ?
                    <div className='container-lg'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className='si-gi-title-content'>
                                    <h2>{`${pageSectionDetail.detail.involved_title}`}</h2>
                                    <p>{`${pageSectionDetail.detail.involved_description}`}</p>
                                </div>
                            </div>
                        </div>

                        <div className='row si-gi-item-row'>
                            <GetInvolvedItem
                                thumbnail={`${API_IMG_URL}pages/${pageSectionDetail.detail.involved_partner_image}`}
                                title={`${pageSectionDetail.detail.involved_partner_title}`}
                                content={`<p>${pageSectionDetail.detail.involved_partner_description ?? ''}</p>`}
                                btnText={`${pageSectionDetail.detail.involved_partner_btn_text}`}
                                btnLink={`/${pageSectionDetail.detail.involved_partner_btn_link}`}
                                btnLinkTarget={``}
                            />

                            <GetInvolvedItem
                                thumbnail={`${API_IMG_URL}pages/${pageSectionDetail.detail.involved_community_image}`}
                                title={`${pageSectionDetail.detail.involved_community_title}`}
                                content={`<p>${pageSectionDetail.detail.involved_community_description ?? ''}</p>`}
                                btnText={`${pageSectionDetail.detail.involved_community_btn_text}`}
                                btnLink={`${pageSectionDetail.detail.involved_community_btn_link}`}
                                btnLinkTarget={`_blank`}
                            />
                        </div>
                    </div>
                    : null
            }
        </div>
    )
}