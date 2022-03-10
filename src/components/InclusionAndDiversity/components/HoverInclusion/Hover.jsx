import React , {useEffect} from 'react'
import '../HoverInclusion/Hover.css'
import bg from '../HoverInclusion/background.jpg'


const Hover = () => {

    return (
        <div>
            <div className="In_Div_anm_container">
                <div className="In_Div_anm_container_img">
                    <img src={bg} alt="" />
                </div>
                <div className="In_Div_anm_container_text">
                    <div className="In_Div_anm_upper_box">

                    </div>
                    <div className="In_Div_anm_middle_box" >
                        <h1 className="In_Div_anm_container_text-h1">Inclusivity and diversity forms a part of our motto ‘Ideation
                            w<span className="In_Div_anm_zoom-in">i</span>th fearless creativity’</h1>
                    </div>
                    <div className="In_Div_anm_lower_box">
                        <h3 className="anm-h3">Priya Mishra</h3>
                        <p>CEO, Corporality Global</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hover