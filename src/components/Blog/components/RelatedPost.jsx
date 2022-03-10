import React, { useEffect, useRef, useState, useContext } from "react"
import axios from "axios"
import Aos from 'aos';
import { useNavigate, useParams } from "react-router-dom"
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../../config';
import Carousel from 'react-grid-carousel'
import BlogItem from './BlogItem';

function RelatedPost() {

    const [relatedPosts, setRelatedPosts] = useState([]);
    const navigate = useNavigate();
    const params = useParams();

    useEffect( () => {
        Aos.init();
        // console.log('Related -> ', params);
        getRelatedPosts(params.post_slug);
    }, []);

    async function getRelatedPosts(slug)
    {
        // console.log('Slug - ', slug)
        let result = await fetch(API_BASE_URL + "/related-posts/" + slug);
        result = await result.json();
        setRelatedPosts(result.data);
        // console.log(result.data);
    }

    return (
        <>
        {
            relatedPosts ?
                <div className="related-post-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="related-post-carousel" data-aos="fade-up">
                                    <Carousel cols={3} rows={1} gap={30} arrowLeft={<div className="related-post-arrow related-post-arrow-prev"><i className="fa fa-angle-left"></i></div>} arrowRight={<div className="related-post-arrow related-post-arrow-next"><i className="fa fa-angle-right"></i></div>}>
                                        {
                                            relatedPosts.map( (postItem, index)=>
                                                <Carousel.Item key={postItem.id}>
                                                    <BlogItem 
                                                        thumbnail={API_IMG_URL + postItem.post_image}
                                                        title={postItem.post_title}
                                                        date={postItem.created_at}
                                                        slug={postItem.post_slug}
                                                        comments={'0'}
                                                    />
                                                </Carousel.Item>
                                            )
                                        }
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            : null
        }
        </>
    );
}

export default RelatedPost;