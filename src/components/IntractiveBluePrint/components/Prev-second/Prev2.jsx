import React, { useEffect } from 'react'
import aos from 'aos'
import 'aos/dist/aos.css'
import main2Interactive from '../Prev-second/mainimageInteractive.png'
import wall2Interactive from '../Prev-second/wallInteractive.png'
import small2Interactive from '../Prev-second/smallrectangleInteractive.png'
import side2Interactive from '../Prev-second/sideimageInteractive.png'
import '../Prev-second/prev2.css'

const Prev2 = () => {

    useEffect(() => {
        aos.init({ duration: 3000 });

    }, [])

    return (
        <div className='prev2'>
            <img className='side2-container' src={side2Interactive} alt='side2Interactive' />
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 imaging-2 d-flex justify-content-center align-items-center flex-column">
                        <div className="images-2">
                            <img className='wall2-container' src={wall2Interactive} alt='wall2Interactive' />
                            
                            <img className='small2-container' src={small2Interactive} alt='small2Interactive' />
                            <div className="img-container">
                                <div className="hoverinit Inc_Div_our-faith-main-img">
                                    <div alt="main2Interactive" data-aos="fade-up-right" data-aos-duration="2000" data-aos-delay="10">
                                        <img className='main2 ' src={main2Interactive} alt='main2Interactive' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 texting-2">
                        <p data-aos="fade-left" className='prev-2-text-1'>Strategic Master Plan with the Blue Ocean Strategy</p>
                        <p data-aos="fade-left" className='prev-2-text-2'>Corporality Global specialises in creating end to end user journeys 
                        through solid planning and inspiration. We empower our clients with effective strategies that really work.
                         Our custom websites and applications deliver engaging brand messages and outstanding results in every pixel.
                          We use the flawless Blue Ocean Strategy in the pursuit of high quality and low costs to create new market space 
                          and achieve demand. It is based on the concept that market limits and industry structure are not set in stone and 
                          may be recreated by industry participants' in accordance with their actions and beliefs. </p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Prev2
