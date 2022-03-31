import React, { useEffect } from 'react'
import aos from 'aos'
import { useNavigate } from "react-router";
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '../prevCode-1/prev1.css'
import yellowbackgroundCustomised from './yellobackgroundCustomised.png'
import mainCustomised from '../prevCode-1/mainCustomised.png'
import backimgCustomised from '../prevCode-1/backCustomised.png'
import wallCustomised from '../prevCode-1/wallCustomised.png'
import smallrectCustomised from '../prevCode-1/smallCustomised.png'
import rectblueprintCustomised from '../prevCode-1/rectCustomised.png'
import smallerrectCustomised from '../prevCode-1/smaller-rectCustomised.png'


const Prev1 = () => {
    const navigate = useNavigate();
    useEffect(() => {
        aos.init({ duration: 3000 });

    }, [])
    return (

        <div className="prev-1-Ib">
            <div className="navbar"></div>
            <div className="container container-1">
            <div className="yellowbackground_Blueprint">
                <img src = {yellowbackgroundCustomised} alt='' />
            </div>
                <div className="row first-image">
                    <div className="col-lg-6">
                        <div data-aos="fade-right" className="text-box-1">

                            <p className='container-1_text'>EMBRACING INNOVATIVE IDEAS</p>

                            <h3 className="heading-h3">Creating a blueprint of your business to make sure that you stand out from the competition.</h3>
                            <p className='container-2_text'>                           
Combining the two extremely effective methods of mixed market modeling and blue ocean strategy, we make sure you build a position of a “thought leader”. Standing out is a norm, and we must abide!s
</p>
<div className="corporatefirst_text_button">
                <button onClick={() => { navigate("#"); }}>Schedule a time</button>
              </div>


                            <p className='container-2_text'><b>Creating a blueprint of your business to make sure that you stand out from the competition. </b><br/>
                            Combining the two extremely effective methods of mixed market modeling and blue ocean strategy, we make sure you build a position of a “thought leader”. Standing out is a norm, and we must abide!</p>

                            <div className="small-rect-prev-1"><img src={smallerrectCustomised} alt='' className='smaller-rect-prev-1' /></div>
                 
                        </div>
                       
                    </div>
                    <div className="col-lg-6  d-flex justify-content-center text-center flex-column ">
                        <div data-aos="fade-left" className="image-first">
                           <img alt='' className='rect' src={rectblueprintCustomised} />
                            <img alt='' className='wall' src={wallCustomised} />
                            <img alt='' className='smallrect' src={smallrectCustomised} />
                            <img alt='' className='backimg' src={backimgCustomised} />
                            <div className="banner_right_inner" >
                                <img className='main-prev1' src={mainCustomised} />
                            </div>

                        </div>

                    </div>
                </div>


            </div>

        </div>


    )
}

export default Prev1
