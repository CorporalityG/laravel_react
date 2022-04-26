import React from 'react'
import './Blogs2.css'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../config'
import { PopularVideoItem } from './PopularVideoItem'
import { NewsItem } from './NewsItem'
import { CovidItem } from './CovidItem'
import { BlogItem } from './BlogItem'

function Blogs2() {
    return (
        <div className="blog2">
            <div className="blog2-latest-section">
                <div className="container-lg">
                    <div className="row latest-blog-row">
                        <div className="col-lg-6 px-0 latest-blog-col">
                            <div className="blog-content-first">
                                <Link to="/category/blog" className="category">Event Category</Link>
                                <h3 className="title-first">
                                    <Link to="/3d-in-medical-care-corporality-global">3D in Medical Care | Corporality Global</Link>
                                </h3>
                                <p>Any entity with a length and breadth is a two-dimensional (2D) object. When you add depth to the measurement, it becomes three-dimensional - 3D - just like our world.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 pl-lg-0">
                            <div className="blog-banner-first">
                                <Link to="/3d-in-medical-care-corporality-global">
                                    <img src={`${BASE_URL}/img/Blogs2/3d-in-medical-care-corporality-global.jpg`} alt="3D in Medical Care" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="row latest-blog-boxes-row">
                        <BlogItem
                            thumbnail={`${BASE_URL}/img/Blogs2/smartphones-can-do-medical-check-ups-in-the-future-corporality-global.jpg`}
                            title={`Smartphones Can Do Medical Check-Ups in the Future | Corporality Global`}
                            slug={`smartphones-can-do-medical-check-ups-in-the-future-corporality-global`}
                            category={`Blogs`}
                            catSlug={`blog`}
                        />

                        <BlogItem
                            thumbnail={`${BASE_URL}/img/Blogs2/health-worker-robots-precision-drug-test-tracking.png`}
                            title={`Health Worker Robots | Precision Drug Test Tracking`}
                            slug={`health-worker-robots-precision-drug-test-tracking`}
                            category={`Blogs`}
                            catSlug={`blog`}
                        />

                        <BlogItem
                            thumbnail={`${BASE_URL}/img/Blogs2/top-6-applications-of-artificial-intelligence-in-medicine.png`}
                            title={`Top 6 Applications of Artificial Intelligence in Medicine`}
                            slug={`top-6-applications-of-artificial-intelligence-in-medicine`}
                            category={`Blogs`}
                            catSlug={`blog`}
                        />

                        <BlogItem
                            thumbnail={`${BASE_URL}/img/Blogs2/cop26-and-its-implications-corporality-global.jpg`}
                            title={`COP26 AND ITS IMPLICATIONS | Corporality Global`}
                            slug={`cop26-and-its-implications-corporality-global`}
                            category={`Blogs`}
                            catSlug={`blog`}
                        />
                    </div>
                </div>
            </div>

            <div className="blog2-corporate-strategy-section">
                <div className="container-lg">
                    <div className="row blog2-cs-title-row">
                        <div className="col-lg-12">
                            <div className="blog2-heading">
                                <Link to="/category/corporate-strategy">Corporate Strategy <svg viewBox="0 0 10 16" focusable="false"><path d="m1.83288 15c-.20616 0-.42731-.0737-.58971-.2361-.324226-.3242-.324226-.8402 0-1.1645l5.58722-5.60223-5.58722-5.58722c-.324226-.32422-.324226-.84022 0-1.16445.32422-.324795.84022-.324795 1.16444-.01497l6.17694 6.17694c.1624.1624.23612.36857.23612.58971s-.08869.4273-.23612.58971l-6.17694 6.17691c-.1624.1624-.36857.2361-.57473.2361z" fill="currentColor" stroke="currentColor" strokeWidth=".831256"></path></svg></Link>
                            </div>
                        </div>
                    </div>

                    <div className="row blog2-cs-title-row">
                        <div className="col-lg-6">
                            <div className="cs-banner-first">
                                <Link to="/what-leaders-must-know-about-branding-and-the-vampire-effect-corporality-global">
                                    <img src={`${BASE_URL}/img/Blogs2/what-leaders-must-know-about-branding-and-the-vampire-effect-corporality-global.jpg`} alt="What leaders must know about branding and the Vampire Effect" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 cs-content-first-col">
                            <div className="cs-content-first">
                                <Link to="/category/corporate-strategy" className="category">Corporate Strategy</Link>
                                <h3 className="title-first">
                                    <Link to="/what-leaders-must-know-about-branding-and-the-vampire-effect-corporality-global">What leaders must know about branding and the Vampire Effect | Corporality Global</Link>
                                </h3>
                                <p>Any entity with a length and breadth is a two-dimensional (2D) object. When you add depth to the measurement, it becomes three-dimensional - 3D - just like our world.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row cs-blog-boxes-row">
                        <BlogItem
                            thumbnail={`${BASE_URL}/img/Blogs2/impact-of-diversity-equity-and-inclusion-in-sales-strategies.jpg`}
                            title={`Impact of Diversity, Equity and Inclusion in Sales Strategies`}
                            slug={`impact-of-diversity-equity-and-inclusion-in-sales-strategiesl`}
                            category={`Corporate Strategy`}
                            catSlug={`corporate-strategy`}
                        />

                        <BlogItem
                            thumbnail={`${BASE_URL}/img/Blogs2/5-ways-you-can-boost-your-companys-entrepreneurial-vision-corporality-global.png`}
                            title={`5 Ways You Can Boost Your Company's Entrepreneurial Vision | Corporality Global`}
                            slug={`5-ways-you-can-boost-your-companys-entrepreneurial-vision-corporality-global`}
                            category={`Corporate Strategy`}
                            catSlug={`corporate-strategy`}
                        />

                        <BlogItem
                            thumbnail={`${BASE_URL}/img/Blogs2/two-sides-of-a-belt-and-road-global-economy.jpg`}
                            title={`Two Sides of a Belt-and-Road Global Economy`}
                            slug={`two-sides-of-a-belt-and-road-global-economy`}
                            category={`Corporate Strategy`}
                            catSlug={`corporate-strategy`}
                        />

                        <div className="col-lg-3 latest-blog-box-col cs-blog-col-box">
                            <div className="row cs-blog-col-row">
                                <div className="col-lg-4">
                                    <Link to="/theres-a-marketer-in-everyone-can-you-believe-it">
                                        <img src={`${BASE_URL}/img/Blogs2/theres-a-marketer-in-everyone-can-you-believe-it.jpg`} alt="There's a Marketer In Everyone. Can You Believe It?" />
                                    </Link>
                                </div>
                                <div className="col-lg-8">
                                    <div className="cs-blog-col-title">
                                        <Link to="/theres-a-marketer-in-everyone-can-you-believe-it">There's a Marketer In Everyone. Can You Believe It?</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-4">
                                    <Link to="/monitor-your-web-page-while-sitting-back-on-vacation-how-interestingly-reliable-seo-tools-can-be">
                                        <img src={`${BASE_URL}/img/Blogs2/monitor-your-web-page-while-sitting-back-on-vacation-how-interestingly-reliable-seo-tools-can-be.jpg`} alt="There's a Marketer In Everyone. Can You Believe It?" />
                                    </Link>
                                </div>
                                <div className="col-lg-8">
                                    <div className="cs-blog-col-title">
                                        <Link to="/monitor-your-web-page-while-sitting-back-on-vacation-how-interestingly-reliable-seo-tools-can-be">Monitor Your Web Page While Sitting Back on Vacation: How Interestingly Reliable SEO Tools Can Be?</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="blog2-podcasts-section">
                <div className="container-lg">
                    <div className="row blog2-podcasts-title-row">
                        <div className="col-lg-8">
                            <div className="blog2-heading">
                                <Link to="/">Podcasts <svg viewBox="0 0 10 16" focusable="false"><path d="m1.83288 15c-.20616 0-.42731-.0737-.58971-.2361-.324226-.3242-.324226-.8402 0-1.1645l5.58722-5.60223-5.58722-5.58722c-.324226-.32422-.324226-.84022 0-1.16445.32422-.324795.84022-.324795 1.16444-.01497l6.17694 6.17694c.1624.1624.23612.36857.23612.58971s-.08869.4273-.23612.58971l-6.17694 6.17691c-.1624.1624-.36857.2361-.57473.2361z" fill="currentColor" stroke="currentColor" strokeWidth=".831256"></path></svg></Link>
                            </div>
                            <div className="blog2-p-music">
                                <img src={`${BASE_URL}/img/Blogs2/3D-in-Medical-Care-Music.png`} alt="3D-in-Medical-Care-Music" />
                            </div>
                        </div>

                        <div className="col-lg-4 blog2-p-col">
                            <div className="blog2-p-about">
                                <img src={`${BASE_URL}/img/Blogs2/logo.png`} alt="logo" />
                                <div className='blog2-p-about-title'>About</div>
                                <p>To Deliver The Best In Digital Marketing And Sales Solutions Using Innovation And Intuition To Craft Business Brilliance</p>
                                <Link to="/about-corporality">Learn more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="blog2-video-section">
                <div className='blog2-video-section-bg'></div>
                <div className="container-lg">
                    <div className="row blog2-v-title-row">
                        <div className="col-lg-12">
                            <div className="blog2-v-title">
                                <Link to="/">Popular Video <svg viewBox="0 0 10 16" focusable="false"><path d="m1.83288 15c-.20616 0-.42731-.0737-.58971-.2361-.324226-.3242-.324226-.8402 0-1.1645l5.58722-5.60223-5.58722-5.58722c-.324226-.32422-.324226-.84022 0-1.16445.32422-.324795.84022-.324795 1.16444-.01497l6.17694 6.17694c.1624.1624.23612.36857.23612.58971s-.08869.4273-.23612.58971l-6.17694 6.17691c-.1624.1624-.36857.2361-.57473.2361z" fill="currentColor" stroke="currentColor" strokeWidth=".831256"></path></svg></Link>
                            </div>
                        </div>
                    </div>

                    <div className="row blog2-v-first-row">
                        <div className="col-lg-6">
                            <div className="v-banner-first">
                                <Link to="/">
                                    <img src={`${BASE_URL}/img/Blogs2/3d-in-medical-care-corporality-global.jpg`} alt="3d-in-medical-care-corporality-global" />
                                    <svg viewBox="0 0 80 80" focusable="false"><g fill="none" transform="translate(8 8)"><circle cx="32" cy="32" r="26" fill="#FFF"></circle><circle cx="32" cy="32" r="32" fill="#FFF" opacity=".197"></circle><polygon fill="#989BAB" points="34.806 23.89 43.288 39.553 26.325 39.553" transform="rotate(90 34.806 31.721)"></polygon></g></svg>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 cs-content-first-col">
                            <div className="v-content-first">
                                <h3 className="v-title-first">
                                    <Link to="/">What is Lorem Ipsum?</Link>
                                </h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row video-boxes-row">
                        <PopularVideoItem
                            thumbnail={`${BASE_URL}/img/Blogs2/3d-in-medical-care-corporality-global.jpg`}
                            title={`Why do we use it?`}
                            slug={``}
                        />

                        <PopularVideoItem
                            thumbnail={`${BASE_URL}/img/Blogs2/3d-in-medical-care-corporality-global.jpg`}
                            title={`Where does it come from?`}
                            slug={``}
                        />

                        <PopularVideoItem
                            thumbnail={`${BASE_URL}/img/Blogs2/3d-in-medical-care-corporality-global.jpg`}
                            title={`Where can I get some?`}
                            slug={``}
                        />

                        <PopularVideoItem
                            thumbnail={`${BASE_URL}/img/Blogs2/3d-in-medical-care-corporality-global.jpg`}
                            title={`What is Lorem Ipsum?`}
                            slug={``}
                        />
                    </div>
                </div>
            </div>

            <div className="blog2-news-press-section">
                <div className="container-lg">
                    <div className="row blog2-np-row">
                        <div className='col-lg-9'>
                            <div className="blog2-heading">
                                <Link to="/">The Forum in the news <svg viewBox="0 0 10 16" focusable="false"><path d="m1.83288 15c-.20616 0-.42731-.0737-.58971-.2361-.324226-.3242-.324226-.8402 0-1.1645l5.58722-5.60223-5.58722-5.58722c-.324226-.32422-.324226-.84022 0-1.16445.32422-.324795.84022-.324795 1.16444-.01497l6.17694 6.17694c.1624.1624.23612.36857.23612.58971s-.08869.4273-.23612.58971l-6.17694 6.17691c-.1624.1624-.36857.2361-.57473.2361z" fill="currentColor" stroke="currentColor" strokeWidth=".831256"></path></svg></Link>
                            </div>

                            <div className='row blog2-news-row'>
                                <NewsItem
                                    title={`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`}
                                    slug={``}
                                    website={`www.lorem.com`}
                                    date={`Apr 5, 2022`}
                                />

                                <NewsItem
                                    title={`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`}
                                    slug={``}
                                    website={`www.ipsum.com`}
                                    date={`Apr 5, 2022`}
                                />

                                <NewsItem
                                    title={`Lorem Ipsum when an unknown printer took a galley of type and scramble`}
                                    slug={``}
                                    website={`www.loremipsum.com`}
                                    date={`Apr 4, 2022`}
                                />

                                <NewsItem
                                    title={`Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature`}
                                    slug={``}
                                    website={`www.loremliterature.com`}
                                    date={`Apr 4, 2022`}
                                />
                            </div>
                        </div>

                        <div className='col-lg-3'>
                            <div className="blog2-heading">
                                <Link to="/">Press release <svg viewBox="0 0 10 16" focusable="false"><path d="m1.83288 15c-.20616 0-.42731-.0737-.58971-.2361-.324226-.3242-.324226-.8402 0-1.1645l5.58722-5.60223-5.58722-5.58722c-.324226-.32422-.324226-.84022 0-1.16445.32422-.324795.84022-.324795 1.16444-.01497l6.17694 6.17694c.1624.1624.23612.36857.23612.58971s-.08869.4273-.23612.58971l-6.17694 6.17691c-.1624.1624-.36857.2361-.57473.2361z" fill="currentColor" stroke="currentColor" strokeWidth=".831256"></path></svg></Link>
                            </div>

                            <div className='press-item'>
                                <Link to={`/`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Link>
                                <div className='posted-date'>Posted <span className='date'>8 hours ago</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="blog2-covid-explore-section">
                <div className="container-lg">
                    <div className="row blog2-ce-row">
                        <div className='col-lg-6'>
                            <div className="blog2-heading">
                                <Link to="/">Coronavirus (COVID-19) <svg viewBox="0 0 10 16" focusable="false"><path d="m1.83288 15c-.20616 0-.42731-.0737-.58971-.2361-.324226-.3242-.324226-.8402 0-1.1645l5.58722-5.60223-5.58722-5.58722c-.324226-.32422-.324226-.84022 0-1.16445.32422-.324795.84022-.324795 1.16444-.01497l6.17694 6.17694c.1624.1624.23612.36857.23612.58971s-.08869.4273-.23612.58971l-6.17694 6.17691c-.1624.1624-.36857.2361-.57473.2361z" fill="currentColor" stroke="currentColor" strokeWidth=".831256"></path></svg></Link>
                            </div>

                            <CovidItem
                                thumbnail={`${BASE_URL}/img/Blogs2/3d-in-medical-care-corporality-global.jpg`}
                                title={`Lorem Ipsum is simply dummy text of the`}
                                slug={``}
                                category={`COVID-19`}
                                catSlug={``}
                            />

                            <CovidItem
                                thumbnail={`${BASE_URL}/img/Blogs2/3d-in-medical-care-corporality-global.jpg`}
                                title={`Lorem Ipsum has been the industry's standard`}
                                slug={``}
                                category={`Global Health`}
                                catSlug={``}
                            />

                            <CovidItem
                                thumbnail={`${BASE_URL}/img/Blogs2/3d-in-medical-care-corporality-global.jpg`}
                                title={`Lorem Ipsum is simply dummy text of the printing and typesetting`}
                                slug={``}
                                category={`COVID-19`}
                                catSlug={``}
                            />
                        </div>

                        <div className='col-lg-3'>
                            <div className="blog2-heading">
                                <Link to="/">Explore</Link>
                            </div>

                            <div className='explore-list'>
                                <Link to="/">How we create Impact</Link>
                                <Link to="/">Our Mini Events</Link>
                                <Link to="/">Become a Forum Partner</Link>
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div className="blog2-ce-subscribe">
                                <img src={`${BASE_URL}/img/Blogs2/logo.png`} alt="logo" />
                                <div className='blog2-subscribe-title'>Subscribe for updates</div>
                                <p>A weekly update of what’s on the Corporality Global</p>
                                <div className='blog2-ces-form'>
                                    <input type="email" name="emailid" placeholder="Email address" className="emailid" />
                                    <button type="submit" className="blog2-ces-btn">
                                        <svg viewBox="0 0 21 18" focusable="false" aria-hidden="true"><path d="M0.266478 8.99987C0.266478 9.33987 0.40148 9.66486 0.641486 9.90486C0.881493 10.1449 1.20648 10.2799 1.54648 10.2799L15.5852 10.2799L10.3814 15.1311C10.1189 15.3586 9.96136 15.6836 9.94261 16.0311C9.92511 16.3773 10.0489 16.7173 10.2864 16.9711C10.5239 17.2248 10.8538 17.3711 11.2014 17.3773C11.5488 17.3823 11.8839 17.2461 12.1288 16.9998L19.71 9.93741C19.9687 9.69491 20.1162 9.35616 20.1162 9.00115C20.1162 8.64614 19.9687 8.30739 19.71 8.0649L12.1289 0.999936C11.6113 0.51744 10.8014 0.544929 10.3189 1.06244C9.83637 1.57869 9.86511 2.38992 10.3814 2.87242L15.5852 7.71978L1.54648 7.71978C1.20648 7.71978 0.881492 7.85478 0.641492 8.09478C0.401492 8.33479 0.266482 8.65978 0.266482 8.99978L0.266478 8.99987Z" fill="currentColor"></path></svg>
                                    </button>
                                </div>
                            </div>

                            <div className="blog2-ce-boxes">
                                <div className='ce-box-title'>Lorem Ipsum</div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                <Link to="/">Explore Lorem Ipsum</Link>
                            </div>

                            <div className="blog2-ce-boxes">
                                <div className='ce-box-title'>Ipsum</div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                                <Link to="/">Explore Ipsum</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="blog2-jobs-skills-section">
                <div className="container-lg">
                    <div className="row blog2-js-row">
                        <div className='col-lg-12'>
                            <div className="blog2-heading">
                                <Link to="/">Jobs & Skills <svg viewBox="0 0 10 16" focusable="false"><path d="m1.83288 15c-.20616 0-.42731-.0737-.58971-.2361-.324226-.3242-.324226-.8402 0-1.1645l5.58722-5.60223-5.58722-5.58722c-.324226-.32422-.324226-.84022 0-1.16445.32422-.324795.84022-.324795 1.16444-.01497l6.17694 6.17694c.1624.1624.23612.36857.23612.58971s-.08869.4273-.23612.58971l-6.17694 6.17691c-.1624.1624-.36857.2361-.57473.2361z" fill="currentColor" stroke="currentColor" strokeWidth=".831256"></path></svg></Link>
                            </div>
                        </div>
                    </div>

                    <div className="row blog2-js-item-row">
                        <BlogItem
                            thumbnail={`${BASE_URL}/img/Blogs2/3d-in-medical-care-corporality-global.jpg`}
                            title={`Lorem Ipsum is simply dummy text of the printing and typesetting industry`}
                            slug={`3d-in-medical-care-corporality-global`}
                            category={`Jobs`}
                            catSlug={``}
                        />

                        <BlogItem
                            thumbnail={`${BASE_URL}/img/Blogs2/3d-in-medical-care-corporality-global.jpg`}
                            title={`Lorem Ipsum has been the industry's standard dummy text ever since the`}
                            slug={``}
                            category={`Skills`}
                            catSlug={``}
                        />

                        <BlogItem
                            thumbnail={`${BASE_URL}/img/Blogs2/3d-in-medical-care-corporality-global.jpg`}
                            title={`Lorem Ipsum has been the industry's standard dummy text ever since the`}
                            slug={``}
                            category={`Workforce`}
                            catSlug={``}
                        />

                        <BlogItem
                            thumbnail={`${BASE_URL}/img/Blogs2/3d-in-medical-care-corporality-global.jpg`}
                            title={`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`}
                            slug={``}
                            category={`Workforce`}
                            catSlug={``}
                        />

                        <BlogItem
                            thumbnail={``}
                            title={`Lorem Ipsum is simply dummy text of the printing and typesetting industry`}
                            slug={`3d-in-medical-care-corporality-global`}
                            category={`Jobs`}
                            catSlug={``}
                        />

                        <BlogItem
                            thumbnail={``}
                            title={`Lorem Ipsum has been the industry's standard dummy text ever since the`}
                            slug={``}
                            category={`Skills`}
                            catSlug={``}
                        />

                        <BlogItem
                            thumbnail={``}
                            title={`Lorem Ipsum has been the industry's standard dummy text ever since the`}
                            slug={``}
                            category={`Workforce`}
                            catSlug={``}
                        />

                        <BlogItem
                            thumbnail={``}
                            title={`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`}
                            slug={``}
                            category={`Workforce`}
                            catSlug={``}
                        />
                    </div>
                </div>
            </div>

            <div className="blog2-our-impact-section">
                <div className="container-lg">
                    <div className="row blog2-oi-row">
                        <div className='col-lg-12'>
                            <div className="blog2-heading">
                                <Link to="/">Our impact <svg viewBox="0 0 10 16" focusable="false"><path d="m1.83288 15c-.20616 0-.42731-.0737-.58971-.2361-.324226-.3242-.324226-.8402 0-1.1645l5.58722-5.60223-5.58722-5.58722c-.324226-.32422-.324226-.84022 0-1.16445.32422-.324795.84022-.324795 1.16444-.01497l6.17694 6.17694c.1624.1624.23612.36857.23612.58971s-.08869.4273-.23612.58971l-6.17694 6.17691c-.1624.1624-.36857.2361-.57473.2361z" fill="currentColor" stroke="currentColor" strokeWidth=".831256"></path></svg></Link>
                            </div>
                        </div>
                    </div>

                    <div className="row blog2-oi-item-row">
                        <BlogItem
                            thumbnail={`${BASE_URL}/img/Blogs2/3d-in-medical-care-corporality-global.jpg`}
                            title={`Lorem Ipsum is simply dummy text of the printing and typesetting industry`}
                            slug={`3d-in-medical-care-corporality-global`}
                            category={`Lorem`}
                            catSlug={``}
                        />

                        <BlogItem
                            thumbnail={`${BASE_URL}/img/Blogs2/3d-in-medical-care-corporality-global.jpg`}
                            title={`Lorem Ipsum has been the industry's standard dummy text ever since the`}
                            slug={``}
                            category={`Ipsum`}
                            catSlug={``}
                        />

                        <BlogItem
                            thumbnail={`${BASE_URL}/img/Blogs2/3d-in-medical-care-corporality-global.jpg`}
                            title={`Lorem Ipsum has been the industry's standard dummy text ever since the`}
                            slug={``}
                            category={`Lorem Ipsum`}
                            catSlug={``}
                        />

                        <BlogItem
                            thumbnail={`${BASE_URL}/img/Blogs2/3d-in-medical-care-corporality-global.jpg`}
                            title={`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`}
                            slug={``}
                            category={`Standard`}
                            catSlug={``}
                        />

                        <BlogItem
                            thumbnail={``}
                            title={`Lorem Ipsum is simply dummy text of the printing and typesetting industry`}
                            slug={`3d-in-medical-care-corporality-global`}
                            category={`Jobs`}
                            catSlug={``}
                        />

                        <BlogItem
                            thumbnail={``}
                            title={`Lorem Ipsum has been the industry's standard dummy text ever since the`}
                            slug={``}
                            category={`Ipsum`}
                            catSlug={``}
                        />

                        <BlogItem
                            thumbnail={``}
                            title={`Lorem Ipsum has been the industry's standard dummy text ever since the`}
                            slug={``}
                            category={`Industry`}
                            catSlug={``}
                        />

                        <BlogItem
                            thumbnail={``}
                            title={`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`}
                            slug={``}
                            category={`Lorem`}
                            catSlug={``}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs2