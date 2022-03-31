import React, { useEffect, useState } from "react";
import "./LatestInsights.css";
import { right } from "@popperjs/core";
import { useNavigate, Link } from "react-router-dom";
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../../config';

function truncate(text, size)
{
  return text?.length > size ? text.substr(0, size - 1) + '...' : text;
}

function dateFormat(date)
{
  var dateObj = new Date(date);
  const month = dateObj.toLocaleString('default', { month: 'long' });
  // console.log('-> ', month.toUpperCase());

  return month + ' ' + dateObj.getDate() + ', ' + dateObj.getFullYear();
}

function LatestInsights()
{
  const navigate = useNavigate();
  const [latestBlogs, setLatestBlogs] = useState([]);

  useEffect( ()=> {
    getLatestBlogs();
  }, []);

  async function getLatestBlogs()
  {
    let result = await fetch(API_BASE_URL+"/posts");
    result = await result.json();
    setLatestBlogs(result.data);
    // console.log(result.data)
  }
  
  return (
    <div className="blogs-container">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="blog-heading" data-aos="fade-down">Our Latest Insights</div>
          </div>
        </div>

        <div className="row">
          {
            latestBlogs ? 
              latestBlogs.slice(0, 1).map( (blogItem, index)=>
                <div key={blogItem.id} className="col-md-6 blog-item">
                  <div data-aos="fade-down">
                    <img src={API_IMG_URL + blogItem.post_image} alt={blogItem.post_title} className="blog-img" />
                  </div>
                  <div className="blog-content" data-aos="fade-up">
                    <div className="blog-title" data-aos="fade-up" data-aos-duration="2100">{blogItem.post_title}</div>
                    <div data-aos="fade-up" data-aos-duration="2200">
                      <p><span dangerouslySetInnerHTML={{__html: truncate(blogItem.post_short_description ?? blogItem.post_description.replace(/<(.|\n)*?>/g, ''), 200)}}></span> <Link to={`/${blogItem.post_slug}`} className="blog-read-more">Read more</Link></p>
                    </div>
                    <div className="blog-date-comment-main" data-aos="fade-up" data-aos-duration="2300">
                      <div className="blog-date-comment">
                        <img src={BASE_URL + '/img/HomePage/blog/date-icon.png'} alt="Date" />
                        <span>{dateFormat(blogItem.created_at)}</span>
                      </div>
                      {/* <div className="blog-date-comment">
                        <img src={BASE_URL + '/img/HomePage/blog/comment-icon.png'} alt="Comment" />
                        <span>(0) Comments</span>
                      </div> */}
                    </div>

                    <div className="blog-btn" onClick={() => navigate("/blog")} data-aos="fade-up">More Blogs</div>
                  </div>
                </div>
              )
            : null
          }

          <div className="col-md-6 blog-item-left">
            <div className="blog-item-box-main">
              <img src={BASE_URL + '/img/HomePage/MEDTECH-INDUSTRY.png'} alt="MEDTECH-INDUSTRY" className="blog-item-box-img" />
              <div className="blog-item-box-content">
                <div className="blog-item-box-subtitle">Latest Research Paper</div>
                <div className="blog-item-box-title">MEDTECH INDUSTRY</div>
              </div>
            </div>

            <div className="blog-item-box-main">
              <img src={BASE_URL + '/img/HomePage/MEDTECH-INDUSTRY.png'} alt="MEDTECH-INDUSTRY" className="blog-item-box-img" />
              <div className="blog-item-box-content">
                <div className="blog-item-box-subtitle">Latest POD Cast</div>
                <div className="blog-item-box-title">MEDTECH INDUSTRY</div>
              </div>
            </div>

            <div className="blog-item-box-main">
              <img src={BASE_URL + '/img/HomePage/MEDTECH-INDUSTRY.png'} alt="MEDTECH-INDUSTRY" className="blog-item-box-img" />
              <div className="blog-item-box-content">
                <div className="blog-item-box-subtitle">Latest Video</div>
                <div className="blog-item-box-title">MEDTECH INDUSTRY</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default LatestInsights;
