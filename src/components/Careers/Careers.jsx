import React from 'react'
import './Careers.css'
import { BASE_URL } from '../../config'
import Carousel from 'react-bootstrap/Carousel'
import { TestimonialItem } from './TestimonialItem'
import { CurrentOpeningItem } from './CurrentOpeningItem'

function Careers() {
  return (
    <>
      <div className="career-banner-section">
        <img src={`${BASE_URL}/img/Careers/rec-1.png`} alt="Rec 1" className="rec-1" />
        <img src={`${BASE_URL}/img/Careers/rec-2.png`} alt="Rec 2" className="rec-2" />
        <img src={`${BASE_URL}/img/Careers/rec-3.png`} alt="Rec 3" className="rec-3" />
        <img src={`${BASE_URL}/img/Careers/rec-4.png`} alt="Rec 4" className="rec-4" />

        <div className="container-lg">
          <div className="row career-banner-content-row">
            <div className="col-lg-12">
              <div className="career-banner-content">
                <h1>Let’s create magic through inspiring communication</h1>
                <p>We are passionate about evolving knowledge and technology, and always hungry to get better. What’s your passion? We look forward to working with you.</p>
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
          <img src={`${BASE_URL}/img/Careers/phone-icon.png`} alt="Phone" className="phone-icon" onClick={() => window.open("tel:61283794089", "_self")} />
        </div>
      </div>

      <div className="career-testimonial-section">
        <div className="container-lg">
          <div className="row career-testimonial-row">
            <div className="col-lg-12">
              <Carousel indicators={false} interval={null} prevIcon={<div className="career-t-arrow career-t-arrow-prev"><img src={`${BASE_URL}/img/Careers/prev-arrow.png`} alt="<" /></div>} nextIcon={<div className="career-t-arrow career-t-arrow-next"><img src={`${BASE_URL}/img/Careers/next-arrow.png`} alt=">" /></div>}>
                <Carousel.Item>
                  <TestimonialItem
                    type={'odd'}
                    thumbnail={`${BASE_URL}/img/Careers/Sanja-Mladenovic.png`}
                    name={'Sanja Mladenovic'}
                    designation={'SEO Analyst'}
                    content={'<p>My Internship at Corporality was my first SEO job. I was very anxious and enthusiastic at the same time when I first started, but now I feel glad that I chose this career path and became a part of the Corporality Global marketing team. It was good exposure for me and provided the best learning curve, thanks to my leaders and fellow team members for being accommodating and helping me to achieve my dream job.</p>'}
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <TestimonialItem
                    type={'even'}
                    thumbnail={`${BASE_URL}/img/Careers/Zlatko-Filipovic.png`}
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

      <div className="career-opportunities-section">
        <div className="container-lg">
          <div className="row career-opportunities-row">
            <div className="col-lg-6">
              <div className="co-content">
                <h2>Opportunities</h2>
                <p>Here at Corporality, we are building a culturally-conditioned team: a positive work environment together with a friction-free work culture. We can help guide you in your career path to your dream job with our progressive learning process.</p>
                <div className="co-btn">Know More</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="career-current-openings-section">
        <div className="container-lg">
          <div className="row career-co-title-row">
            <div className="col-lg-12">
              <div className="career-co-title-content">
                <h2>Current Openings</h2>
              </div>
            </div>
          </div>

          <div className="row career-current-openings-row">
            <CurrentOpeningItem
              title={'Marketing Associate'}
              content={'<p>Tracking and measuring results and seeking the impact of the website on the business while exploring current marketing scenarios</p>'}
            />

            <CurrentOpeningItem
              title={'Graphic Designer'}
              content={'<p>Tracking and measuring results and seeking the impact of the website on the business while exploring current marketing scenarios</p>'}
            />

            <CurrentOpeningItem
              title={'SEO Specialist'}
              content={'<p>Tracking and measuring results and seeking the impact of the website on the business while exploring current marketing scenarios</p>'}
            />

            <CurrentOpeningItem
              title={'Web Developer / Mobile App Developer'}
              content={'<p>Tracking and measuring results and seeking the impact of the website on the business while exploring current marketing scenarios</p>'}
            />
          </div>
        </div>
      </div>

      <div className="career-internship-requirements-section">
        <img src={`${BASE_URL}/img/Careers/ir-rec.png`} alt="Rec" className="ir-rec" />

        <div className="container-lg">
          <div className="row career-internship-requirements-row">
            <div className="col-lg-6">
              <div className="career-ir-content">
                <h2>What you will learn in your Internship</h2>
                <ul>
                  <li><img src={`${BASE_URL}/img/Careers/list-icon.png`} alt="Icon" />Get experience for your certification or degree you have completed</li>
                  <li><img src={`${BASE_URL}/img/Careers/list-icon.png`} alt="Icon" />Master your skills in a real business environment</li>
                  <li><img src={`${BASE_URL}/img/Careers/list-icon.png`} alt="Icon" />Working for actual customers</li>
                  <li><img src={`${BASE_URL}/img/Careers/list-icon.png`} alt="Icon" />Market Research (for Marketing)</li>
                  <li><img src={`${BASE_URL}/img/Careers/list-icon.png`} alt="Icon" />Competitor Analysis (for Marketing)</li>
                  <li><img src={`${BASE_URL}/img/Careers/list-icon.png`} alt="Icon" />Creating and maintaining links (for Marketing)</li>
                  <li><img src={`${BASE_URL}/img/Careers/list-icon.png`} alt="Icon" />Content creation and review</li>
                  <li><img src={`${BASE_URL}/img/Careers/list-icon.png`} alt="Icon" />Online content management (for Graphics Designer)</li>
                  <li><img src={`${BASE_URL}/img/Careers/list-icon.png`} alt="Icon" />Team participation</li>
                  <li><img src={`${BASE_URL}/img/Careers/list-icon.png`} alt="Icon" />Improve coding skills (for developers)</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="career-ir-content">
                <h2>Requirements</h2>
                <ul>
                  <li><img src={`${BASE_URL}/img/Careers/list-icon.png`} alt="Icon" />Relevant Certification or Diploma for the applied position</li>
                  <li><img src={`${BASE_URL}/img/Careers/list-icon.png`} alt="Icon" />Careful attention to detail is a must</li>
                  <li><img src={`${BASE_URL}/img/Careers/list-icon.png`} alt="Icon" />Fluent in speaking and writing English</li>
                  <li><img src={`${BASE_URL}/img/Careers/list-icon.png`} alt="Icon" />Friendly work attitude</li>
                  <li><img src={`${BASE_URL}/img/Careers/list-icon.png`} alt="Icon" />Exceptional problem-solving skills and eagerness to learn</li>
                  <li><img src={`${BASE_URL}/img/Careers/list-icon.png`} alt="Icon" />Ready to adopt to new technology and methods, as our industry is constantly changing</li>
                  <li><img src={`${BASE_URL}/img/Careers/list-icon.png`} alt="Icon" />Cooperative and a team player, and can follow instructions set by team leaders</li>
                  <li><img src={`${BASE_URL}/img/Careers/list-icon.png`} alt="Icon" />Minimum of 24 hours of work per week over an 8-10 week period</li>
                  <li><img src={`${BASE_URL}/img/Careers/list-icon.png`} alt="Icon" />Team participation</li>
                  <li><img src={`${BASE_URL}/img/Careers/list-icon.png`} alt="Icon" />Improve coding skills (for developers)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Careers