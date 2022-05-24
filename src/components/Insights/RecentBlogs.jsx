import React, { useEffect, useState } from 'react'
import { API_BASE_URL } from '../../config'
import { RecentBlogItem } from './RecentBlogItem';
import { Link } from 'react-router-dom'

function RecentBlogs() {

    const [recentBlogs, setRecentBlogs] = useState([]);

    useEffect(() => {
        getRecentBlogData();
    }, []);

    async function getRecentBlogData() {
        const apiLink = (API_BASE_URL + "/posts");
        let result = await fetch(apiLink);
        result = await result.json();
        setRecentBlogs(result.data);
    }

    return (
        <div className='insights-recent-blogs-section'>
            <div className="container-lg">
                <div className="row insights-recent-blogs-row">
                    <div className='col-lg-12'>
                        <h2>Recent Blog</h2>
                    </div>
                    {
                        recentBlogs ?
                            <>
                                {
                                    recentBlogs.slice(0, 4).map((item) =>
                                        <RecentBlogItem
                                            key={`${item.id}`}
                                            title={`${item.post_title}`}
                                            slug={`${item.post_slug}`}
                                            category={
                                                item.categories ?
                                                    <>
                                                        {
                                                            item.categories.map((item) =>
                                                                <Link key={`${item.id}`} to={`/category/${item.category_slug}`} className="insight-recent-blog-item-category">{item.category_name}, </Link>
                                                            )
                                                        }
                                                    </>
                                                    : null
                                            }
                                            subcategories={
                                                item.subcategories ?
                                                    <>
                                                        {
                                                            item.subcategories.map((item, index, subcategoriesCount) =>
                                                                <Link key={`${item.id}`} to={`/category/${item.category_slug}`} className="insight-recent-blog-item-category">{item.category_name}{ index !== subcategoriesCount.length - 1 ? ',' : ''} </Link>
                                                            )
                                                        }
                                                    </>
                                                    : null
                                            }
                                            date={`${item.created_at}`}
                                        />
                                    )
                                }
                            </>
                            : null
                    }
                </div>
            </div>
        </div>
    )
}

export default RecentBlogs