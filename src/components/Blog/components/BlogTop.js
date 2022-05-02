import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.min.js'
import "./BlogTop.css"
import DropDown from "./DropDown";
import { useEffect, useRef, useState } from "react"
// import axios from "axios"
import { useNavigate } from "react-router-dom"
// import { Context } from "../../../context/Context";
import { API_BASE_URL } from '../../../config';

import blogTopLeft from "../img/blog-top-left.png"
import searchIcon from "../img/search-icon.png"
import image5 from "../img/image5.png"
import image4 from "../img/image4.png"
import image3 from "../img/image3.png"


function BlogTop() {

    const [recentPosts, setRecentPosts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const searchRef = useRef();
    // const { user, dispatch } = useContext(Context);
    // console.log(user);
    // console.log(dispatch);

    useEffect( () => {
        getRecentPosts();
        getCategories();
    }, []);

    async function getRecentPosts()
    {
        let result = await fetch(API_BASE_URL + "/posts");
        result = await result.json();
        setRecentPosts(result.data);
        // console.log(result.data);
        setLoading(false);
    }

    async function getCategories()
    {
        let result = await fetch(API_BASE_URL + "/categories");
        result = await result.json();
        setCategories(result);
        // console.log(result);
        setLoading(false);
    }
    
    const search = () => {
        if(searchRef.current.value.length > 0) {
            navigate(`/search/${searchRef.current.value}`);
        }else if(searchRef.current.value.length === 0) {
            navigate("/blog");
        }
    }

    return (
        <div className="blogTopContainer">
            <img src={image5} alt="image5" className="blog-top-image5" />
            <img src={image4} alt="image4" className="blog-top-image4" />
            <img src={image3} alt="image3" className="blog-top-image3" />

            <div className="container-lg">
                <div className="blogSubscription">
                    <h3>Subscribe to Business Insight?</h3>
                    <input type="email" placeholder="Email Address" />
                    <select name="Select Country" id="contrySelect">
                        <option value="0">Select Country</option>
                        <option value="1">Australia</option>
                        <option value="2">India</option>
                        <option value="3">USA</option>
                        <option value="4">UK</option>
                    </select>
                    <div className="subscribeButton">Subscribe</div>
                </div>
            </div>

            <div className="blogMarketWrapper">
                <div className="container-lg">
                    <div className="blogMarket">
                        <img src={blogTopLeft} alt="" />
                        <div>
                            <h3>Do you want me to do your marketing for you?</h3>
                            <div>Yes, I want</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-lg">
                <div id="blogCustomizer" className="blogCustomizer">
                    <DropDown className="blogDropDown" initial="Recent Post" loading={loading} list={[...recentPosts]} />

                    <div className="blogSearchInput">
                        <input ref={searchRef} type="text" placeholder="Search" onKeyUp={(e) => {
                            console.log(e)
                            if(e.code === "Enter" && searchRef.current.value !== ""){
                                search()
                            }else if(e.code === "Enter" && searchRef.current.value === ""){
                                navigate("/blog")
                            }

                        }} />
                        <img src={searchIcon} alt="search-icon" onClick={search} />
                    </div>

                    <DropDown className="blogDropDown selectCategoryDropdown" initial="Select Category" loading={loading} list={[...categories]} />

                    {/*<DropDown className="blogDropDown selectCategoryDropdown" initial="Select Category" list={['Corporate Strategy','Digital Media Marketing', 'Lead Gen and Sales Strategy', 'Marketing Strategy for 2021', 'Product Strategy', 'Professional Practices Strategy', 'Website Blueprint']} />*/}
                </div>
            </div>
        </div>
    );
}

export default BlogTop;