import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./DropDown.css"
import Aos from 'aos';
import purpc from "../img/purpc.png"
import bluec from "../img/bluec.png"
import yc from "../img/yc.png"
// import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../../config';

const DropDown = ({initial, list, className, loading}) => {
    if( !list )
    {
        list = []
    }

    // const params = useParams();
    // const navigate = useNavigate();
    const [select, setSelect] = useState(initial || '')
    // const [singleBlog, setsingleBlog] = useState([]);

    useEffect( () => {
        Aos.init();
    }, [])

    const topHandler = () => {
        const topScroll = document.getElementById('blogCustomizer'); 
        window.scrollTo({
            top: topScroll.offsetTop,
            behavior: "smooth"
        });
    }

    return (
        <div className={`dropdown customDropDown ${className || ''}`}>
            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                {select}
            </button>
            {
                initial !== "Recent Post" ?
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                        {
                            list.map((item, index) => (
                                <li key={index}>
                                    <Link to={`/category/${item.category_slug}`} onClick={() => topHandler() } className="dropdown-item">{item.category_name}</Link>
                                </li>
                            ))
                        }
                    </ul>
                :
                loading ?
                null
                :
                    <ul className={`dropdown-menu${initial==="Recent Post"? " recentPostContainer" : ""}`} aria-labelledby="dropdownMenuButton2">
                        {
                            list.map( (item, i) => (
                                <li key={i} >
                                    <img src={i%3===0? purpc : i%3===2? yc : bluec} alt={item.post_title} />
                                    <Link to={`/${item.post_slug}`} onClick={() => topHandler() } className="dropdown-item"><p>{item.post_title}</p></Link>
                                </li>
                            ))
                        }
                    </ul>
            }
    </div>
    )
}

export default DropDown
