import React, { useEffect } from 'react'
import aos from 'aos'
import 'aos/dist/aos.css'
import '../prev-4/prev-4.css'
import hoverimg from '../prev-4/hoverimg.png'

const Prev4 = () => {
    useEffect(() => {
        aos.init({ duration: 3000 });

    }, [])
    return (
        <div>
            <div className="bp_anm_container">

                <div className="bp_anm_container_img">
                    <img src={hoverimg} alt="We create fortified" />
                </div>
                <div className="main_container">
                    <div className="bp_anm_container_text" >
                        <h1>“We create fortified,<span >i</span>nteractive blueprints that impact businesses”</h1>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Prev4
