import React, { useEffect, useState } from "react";
import "./LatestInsights.css";
import { useNavigate, Link } from "react-router-dom";
import { API_BASE_URL, API_IMG_URL } from '../../../config';
import axios from "axios";

function truncate(text, size) {
  return text?.length > size ? text.substr(0, size - 1) + '...' : text + '...';
}

function dateFormat(date) {
  var dateObj = new Date(date);
  const month = dateObj.toLocaleString('default', { month: 'long' });

  return month + ' ' + dateObj.getDate() + ', ' + dateObj.getFullYear();
}

function LatestInsights(pageDetail) {
  const navigate = useNavigate();
  const [latestBlogs, setLatestBlogs] = useState([]);

  useEffect(() => {
    getLatestBlogs();
  }, []);

  const getLatestBlogs = () => {
    axios.get(`${API_BASE_URL}/home-latest-insights`)
      .then(response => {
        setLatestBlogs(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div className="blogs-container">
      {
        pageDetail ?
          <div className="container-lg">
            <div className="row">
              <div className="col-md-12">
                <div className="blog-heading" data-aos="fade-down">{`${pageDetail.latest_insights_heading}`}</div>
              </div>
            </div>

            <div className="row">
              {
                latestBlogs ?
                  latestBlogs.slice(0, 1).map((blogItem) =>
                    <div key={blogItem.id} className="col-md-6 blog-item">
                      <div data-aos="fade-down">
                        {blogItem.post_image && <img src={API_IMG_URL + blogItem.post_image} alt={blogItem.post_title} className="blog-img" />}
                      </div>
                      <div className="blog-content" data-aos="fade-up">
                        <div className="blog-title" data-aos="fade-up" data-aos-duration="2100">{blogItem.post_title}</div>
                        <div data-aos="fade-up" data-aos-duration="2200">
                          <p><span dangerouslySetInnerHTML={{ __html: truncate(blogItem.post_short_description, 200) }}></span> <Link to={`/${blogItem.post_slug}`} className="blog-read-more">Read more</Link></p>
                        </div>
                        <div className="blog-date-comment-main" data-aos="fade-up" data-aos-duration="2300">
                          <div className="blog-date-comment">
                            <span className="date-icon"></span>
                            <span>{dateFormat(blogItem.created_at)}</span>
                          </div>
                        </div>

                        <div className="blog-btn" onClick={() => navigate("/blog")} data-aos="fade-up">More Blogs</div>
                      </div>
                    </div>
                  )
                  : null
              }

              <div className="col-md-6 blog-item-left">
                {
                  latestBlogs ?
                    latestBlogs.slice(1, 3).map((blogItem) =>
                      <div className="blog-item-box-main" key={blogItem.id} data-aos="fade-up">
                        {blogItem.post_image && <img src={API_IMG_URL + blogItem.post_image} alt={blogItem.post_title} className="blog-item-box-img" />}
                        <div className="blog-item-box-content">
                          <div className="blog-item-box-subtitle">{blogItem.categories ? blogItem.categories[0].category_name : null}</div>
                          <Link to={`/${blogItem.post_slug}`}>
                            <div className="blog-item-box-title">{blogItem.post_title}</div>
                          </Link>
                        </div>
                      </div>
                    )
                    : null
                }

                <div className="blog-item-box-main-spotify" data-aos="fade-up" data-aos-duration="2100" dangerouslySetInnerHTML={{ __html: pageDetail.latest_insights_spotify_iframe }}></div>
              </div>
            </div>

          </div>
          : null
      }
    </div>
  );
}

export default LatestInsights;
