import React from 'react'
import './Careers.css'
import { BASE_URL } from '../../config'
import Carousel from 'react-bootstrap/Carousel'
import { TestimonialItem } from './TestimonialItem'

function Careers() {
  return (
    <>
      <div className="career-banner-section">
        <img src={BASE_URL + '/img/Careers/rec-1.png'} alt="Rec 1" className="rec-1" />
        <img src={BASE_URL + '/img/Careers/rec-2.png'} alt="Rec 2" className="rec-2" />
        <img src={BASE_URL + '/img/Careers/rec-3.png'} alt="Rec 3" className="rec-3" />
        <img src={BASE_URL + '/img/Careers/rec-4.png'} alt="Rec 4" className="rec-4" />

        <div className="container">
          <div className="row career-banner-content-row">
            <div className="col-md-12">
              <div className="career-banner-content">
                <h1>Let’s create magic through inspiring communication</h1>
                <p>We are passionate about evolving knowledge and technology, and always hungry to get better.What’s your passion? We look forward to working with you.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="career-banner-social-main">
          <div className="career-banner-social-icon-main">
            <div className="career-banner-social-icon" onClick={() => window.open("https://www.facebook.com/CorporalityG/")}>
              <i className="fa fa-facebook-f"></i>
            </div>
            <div className="career-banner-social-icon" onClick={() => window.open("https://twitter.com/corporalityg/")}>
              <i className="fa fa-twitter"></i>
            </div>
            <div className="career-banner-social-icon" onClick={() => window.open("https://www.instagram.com/corporalityg/")}>
              <i className="fa fa-instagram"></i>
            </div>
            <div className="career-banner-social-icon" onClick={() => window.open("https://www.linkedin.com/company/corporalityg/")}>
              <i className="fa fa-linkedin"></i>
            </div>
            <div className="career-banner-social-icon" onClick={() => window.open("https://in.pinterest.com/CorporalityG/_created/")}>
              <i className="fa fa-pinterest"></i>
            </div>
            <div className="career-banner-social-icon" onClick={() => window.open("https://www.youtube.com/channel/UC4EISt8kHI4zzpmbIBMIBbg")}>
              <i className="fa fa-youtube-play"></i>
            </div>
          </div>
        </div>

        <div className="career-banner-phone">
          <img src={BASE_URL + '/img/Careers/phone-icon.png'} alt="Phone" className="phone-icon" onClick={() => window.open("tel:61283794089", "_self")} />
        </div>
      </div>

      <div className="career-testimonial-section">
        <div className="container">
          <div className="row career-testimonial-row">
            <div className="col-md-12">
              <Carousel>
                <Carousel.Item>
                  <TestimonialItem
                    thumbnail={BASE_URL + '/img/Careers/Sanja-Mladenovic.png'}
                    name={'Sanja Mladenovic'}
                    designation={'SEO Analyst'}
                    content={'<p>My Internship at Corporality was my first SEO job. I was very anxious and enthusiastic at the same time when I first started, but now I feel glad that I chose this career path and became a part of the Corporality Global marketing team. It was good exposure for me and provided the best learning curve, thanks to my leaders and fellow team members for being accommodating and helping me to achieve my dream job.</p>'}
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <TestimonialItem
                    thumbnail={BASE_URL + '/img/Careers/Zlatko-Filipovic.png'}
                    name={'Zlatko Filipovic'}
                    designation={'SEO Manager'}
                    content={'<p>I joined the Corporality team in 2014 as a Graphics Designer. Slowly I learned web technology and SEO as well. My Journey with this team was really amazing and now I am receiving leadership responsibilities. Supervising the team helped me to see the different perspectives of detailing and understanding what a good work culture is. I can not thank Corporality enough for the opportunity I have been given.</p>'}
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Careers