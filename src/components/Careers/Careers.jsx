import React, { useState } from 'react'
import './Careers.css'
import { BASE_URL } from '../../config'
import Carousel from 'react-bootstrap/Carousel'
import { TestimonialItem } from './TestimonialItem'
import { Link } from 'react-router-dom'
import Accordion from 'react-bootstrap/Accordion'
import { ApplyNowPopUp } from './ApplyNowPopUp'

function Careers() {

  const [show, setShow] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = (modalId) => {
    setShow(modalId);
  }

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
          <img src={`${BASE_URL}/img/Careers/phone.png`} alt="Phone" className="phone-icon" onClick={() => window.open("tel:61283794089", "_self")} />
          <img src={`${BASE_URL}/img/Careers/phone-rect.png`} alt="Phone Rect" className="phone-rect" />
        </div>

        <div className="career-banner-hiring">
          <img src={`${BASE_URL}/img/Careers/hiring.png`} alt="Hiring" className="hiring-img" />
        </div>
      </div>

      <div className="career-current-jobs-section">
        <div className="container-lg">
          <div className="row">
            <div className="col-lg-12">
              <Accordion className="cc-jobs-accordion-main">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <div className="cc-jobs-heading">
                      <img src={`${BASE_URL}/img/Careers/react-js.png`} alt="Intern - REACT JS Developer" className="cc-j-h-icon" />
                      <span>Intern - REACT JS Developer</span>
                      <div className="cc-jobs-apply" onClick={() => handleShow('apply')}>Apply now</div>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <h3>Job Description</h3>
                    <p>Corporality seeks an intern with experience in React Js design and implementing attractive and functional websites including back-end and front-end development The intern will gain exciting real-world web development experience at a thriving company.</p>
                    <p>We frequently work in small teams to solve problems, explore new UI/UX / functional environments, and learn from one another. The ideal intern for this environment will be enthusiastic and collaborative.</p>

                    <h3>Responsibilities</h3>
                    <ul>
                      <li>Meeting with the development team to discuss user interface ideas and applications.</li>
                      <li>Reviewing application requirements and interface designs.</li>
                      <li>Identifying web-based user interactions.</li>
                      <li>Developing and implementing highly responsive user interface components using react concepts.</li>
                      <li>Writing application interface codes using JavaScript following react.js workflows.</li>
                      <li>Troubleshooting interface software and debugging application codes.</li>
                      <li>Developing and implementing front-end architecture to support user interface concepts.</li>
                      <li>Monitoring and improving front-end performance.</li>
                      <li>Documenting application changes and developing updates.</li>
                    </ul>

                    <h3>Requirements</h3>
                    <ul>
                      <li>Computer science or a similar field.</li>
                      <li>Knowledge of front-end technologies including CSS3, JavaScript, HTML5, and jQuery.</li>
                      <li>Knowledge of code versioning tools like Git.</li>
                      <li>Knowledge of debugging tools such as Chrome Inspector and Firebug.</li>
                      <li>Good understanding of website architecture and aesthetics.</li>
                      <li>Willing to manage projects.</li>
                      <li>Good communication skills.</li>
                    </ul>

                    <h3>Benefits</h3>
                    <ul>
                      <li>Practical experience with a wide variety of web development tasks</li>
                      <li>Collaborating hand-in-hand with skilled teams of web developers</li>
                      <li>Shadowing, mentoring, and training opportunities with seasoned professionals</li>
                      <li>Opportunity to participate in networking events and company meetings</li>
                      <li>Flexible schedule for students</li>
                    </ul>

                    <div className="cc-jobs-apply" onClick={() => handleShow('apply')}>Apply now</div>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <div className="cc-jobs-heading">
                      <img src={`${BASE_URL}/img/Careers/social-media.png`} alt="Intern - Social Media" className="cc-j-h-icon" />
                      <span>Intern - Social Media</span>
                      <div className="cc-jobs-apply" onClick={() => handleShow('apply')}>Apply now</div>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <h3>Job Description</h3>
                    <p>Corporality looking to hire an intern with strong knowledge and understanding of the digital media landscape, including various social media platforms. Corporality is currently developing numerous websites and launching social media campaigns.</p>
                    <p>The intern hired for this position will need strong critical thinking skills in order to integrate into our vibrant and passionate team, who are very excited to share this launch with an intern hoping to gain extensive online experience.</p>

                    <h3>Responsibilities</h3>
                    <ul>
                      <li>Contribute to website redesign project</li>
                      <li>Monitor and post on blogs, forums, and social networks</li>
                      <li>Assist with online outreach and promotion using Facebook, Instagram LinkedIn, Twitter, and more</li>
                      <li>Optimize website and social media</li>
                      <li>Perform keyword analysis</li>
                      <li>Perform cost/benefit analysis</li>
                    </ul>

                    <h3>Requirements</h3>
                    <ul>
                      <li>Marketing/Business or Language major</li>
                      <li>3 years of experience with Internet and social media platforms</li>
                      <li>Solid understanding of youth markets</li>
                      <li>Energetic and creative</li>
                      <li>Hard-working and team-oriented</li>
                    </ul>

                    <h3>Benefits</h3>
                    <ul>
                      <li>Practical experience with a website launch and social media campaigns</li>
                      <li>Shadowing, mentoring, and training opportunities with experienced, knowledgeable professionals</li>
                      <li>Opportunity to participate in networking events and company meetings</li>
                      <li>Flexible schedule for students</li>
                    </ul>

                    <div className="cc-jobs-apply" onClick={() => handleShow('apply')}>Apply now</div>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                  <div className="cc-jobs-heading">
                      <img src={`${BASE_URL}/img/Careers/hr.png`} alt="Intern - HR (Human Resources)" className="cc-j-h-icon" />
                      <span>Intern - HR (Human Resources)</span>
                      <div className="cc-jobs-apply" onClick={() => handleShow('apply')}>Apply now</div>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <h3>Job Description</h3>
                    <p>Corporality seeks a personable and highly motivated HR intern to support the HR manager in day-to-day administrative tasks and activities.</p>
                    <p>If you’re ready to kickstart your career in Human Resources and build real-world experience with recruiting, payroll, employee development, and the coordination of HR policies and procedures, this is the internship for you.</p>

                    <h3>HR Intern Duties and Responsibilities</h3>
                    <ul>
                      <li>Post new positions on websites and job boards</li>
                      <li>Assist with screening resumes and applications</li>
                      <li>Send offer and regret letters</li>
                      <li>Coordinate interviews</li>
                      <li>Collect and update our database with new hire information (e.g. employment forms and contact information)</li>
                      <li>Maintain payroll data including leaves, working hours, and bank accounts</li>
                      <li>Proofread HR documents</li>
                      <li>Help prepare Word, PowerPoint, and Excel documents</li>
                      <li>Track progress, priorities, and deadlines of various projects</li>
                    </ul>

                    <h3>Requirements</h3>
                    <ul>
                      <li>Human Resources Management or Business major</li>
                      <li>Some experience in an office / remote environment preferred</li>
                      <li>Experience with Microsoft Office Suite and resume databases</li>
                      <li>Excellent interpersonal and communication skills</li>
                      <li>Ability to work in a fast-paced, team-oriented environment</li>
                      <li>Solid organizational skills and attention to detail</li>
                    </ul>

                    <h3>Benefits</h3>
                    <ul>
                      <li>Develop experience working on a wide variety of HR projects</li>
                      <li>Gain exposure to a fast-paced, collaborative office / remote environment</li>
                      <li>Work side-by-side with a highly experienced HR executive</li>
                      <li>Organize and attend company meetings and networking events</li>
                    </ul>

                    <div className="cc-jobs-apply" onClick={() => handleShow('apply')}>Apply now</div>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                  <div className="cc-jobs-heading">
                      <img src={`${BASE_URL}/img/Careers/wordpress.png`} alt="Intern - WordPress Developer" className="cc-j-h-icon" />
                      <span>Intern - WordPress Developer</span>
                      <div className="cc-jobs-apply" onClick={() => handleShow('apply')}>Apply now</div>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <h3>Job Description</h3>
                    <p>Corporality seeks an intern with experience in WordPress design and implementing attractive and functional websites including back-end and front-end development The intern will gain exciting real-world web development experience at a thriving company.</p>
                    <p>We frequently work in small teams to solve problems, explore new UI/UX / functional environments, and learn from one another. The ideal intern for this environment will be enthusiastic and collaborative.</p>

                    <h3>Responsibilities</h3>
                    <ul>
                      <li>Meeting with clients to discuss website design and function.</li>
                      <li>Designing and building the website front-end.</li>
                      <li>Creating the website architecture.</li>
                      <li>Designing and managing the website back-end including database and server integration.</li>
                      <li>Generating WordPress themes and plugins.</li>
                      <li>Conducting website performance tests.</li>
                      <li>Troubleshooting content issues.</li>
                      <li>Conducting WordPress training with the client.</li>
                      <li>Monitoring the performance of the live website.</li>
                    </ul>

                    <h3>Requirements</h3>
                    <ul>
                      <li>Computer science or a similar field.</li>
                      <li>Knowledge of front-end technologies including CSS3, JavaScript, HTML5,and jQuery.</li>
                      <li>Knowledge of code versioning tools like Git.</li>
                      <li>Knowledge of debugging tools such as Chrome Inspector and Firebug.</li>
                      <li>Good understanding of website architecture and aesthetics.</li>
                      <li>Willing to manage projects.</li>
                      <li>Good communication skills.</li>
                    </ul>

                    <h3>Benefits</h3>
                    <ul>
                      <li>Practical experience with a wide variety of web development tasks</li>
                      <li>Collaborating hand-in-hand with skilled teams of web developers</li>
                      <li>Shadowing, mentoring, and training opportunities with seasoned professionals</li>
                      <li>Opportunity to participate in networking events and company meetings</li>
                      <li>Flexible schedule for students</li>
                    </ul>

                    <div className="cc-jobs-apply" onClick={() => handleShow('apply')}>Apply now</div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <ApplyNowPopUp show={show} handleClose={handleClose} />
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
                <Link to={`/contact`} className="co-btn">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="career-testimonial-section">
        <img src={`${BASE_URL}/img/Careers/testimonial-rec.png`} alt="testimonial rec" className="testimonial-rec" />

        <div className="container-lg">
          <div className="row career-testimonial-title-row">
            <div className="col-lg-12">
              <div className="career-testimonial-title">
                <h2>Employee Testimonial</h2>
              </div>
            </div>
          </div>

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
    </>
  )
}

export default Careers