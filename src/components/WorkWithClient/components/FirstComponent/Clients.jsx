import React , {useEffect} from 'react'
import aos from 'aos'
import '../FirstComponent/Clients.css'
import BackClients from '../FirstComponent/BaCKINClients.png'
import wallClients from '../FirstComponent/wallClients.png'
import smallrectClients from '../FirstComponent/rectClients.png'
import rectClients from '../FirstComponent/smallrecClients.png'
import smallerrectClients from '../FirstComponent/smallerrectClients.png'
import yellowbackground from './yellowbackground.png'
import { API_IMG_URL } from '../../../../config';

const Clients = (pageDetail) => {

    useEffect(() => {
        aos.init({ duration: 3000 });

    }, [])

    return (
        <div className="Clients">
            <div className="navbar-Clients"></div>
            <div className="container container-1-Clients">
            <div className="yellowbackground_Clients">
                <img src={yellowbackground} alt='yellowbackground' />
            </div>
                <div className="row first-image-Clients">
                    <div className="col-lg-6">
                        <div data-aos="fade-right"  className="text-box-1-Clients">

                            <p className='container-1_text-Clients'>{`${pageDetail.banner_title}`}</p>
                            <h1 className='container-2_text-Clients'>{`${pageDetail.banner_subtitle}`} </h1>
                            <p className='container-3_text-Clients'>{`${pageDetail.banner_description}`}</p>
                            <div className="small-rect-prev-1-Clients"><img src={ smallerrectClients} alt='smallerrectClients' className='smaller-rect-prev-1' /></div>
                        </div>
                    </div>
                    <div className="col-lg-6  d-flex justify-content-center text-center flex-column ">
                        <div data-aos="fade-left"  className="image-first-Clients">
                            <img alt='rectClients' className='rect-Clients' src={rectClients} />
                            <img alt='wallClients' className='wall-Clients' src={wallClients} />
                            <img alt='smallrectClients' className='smallrect-Clients' src={smallrectClients} />
                            <img alt='BackClients' className='backimg-Clients' src={BackClients} />
                            <div className="banner_right_inner-Clients" >
                                <img className='main-prev1-Clients' src={`${API_IMG_URL}pages/${pageDetail.banner_image}`} alt={`${pageDetail.banner_title}`} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clients
