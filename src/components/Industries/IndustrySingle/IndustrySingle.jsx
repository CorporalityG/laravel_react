import React, { useEffect } from 'react'
import './IndustrySingle.css'
import { BASE_URL } from '../../../config'
import { Link } from 'react-router-dom'
import { OtherIndustryItem } from './OtherIndustryItem'
import { GetInvolved } from '../../ServiceInsights/GetInvolved'
import { ServicesAskQuote } from '../../ServicesAskQuote/ServicesAskQuote'
import AOS from "aos"

function IndustrySingle() {

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);

    return (
        <div className='industry-single-page'>

            <div className='industry-single-banner'>
                <div className='container-lg'>
                    <div className='row industry-single-banner-row'>
                        <div className='col-lg-6'>
                            <div className='industry-single-banner-content'>
                                <div className='industry-single-banner-cat'>Med Tech Industry</div>
                                <h1>3D in Medical Care | Corporality Global</h1>
                                <div className='industry-single-banner-date'>DECEMBER 27, 2021</div>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='industry-single-banner-img'>
                                <img src={`${BASE_URL}/img/industries/industry-single-banner.png`} alt={`Industry Single Banner`} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='industry-single-content'>
                <div className='container-lg'>
                    <div className='row industry-single-content-row'>
                        <div className='col-lg-7'>
                            <div className='industry-single-desc'>
                                <p>Any entity with a length and breadth is a two-dimensional (2D) object. When you add depth to the measurement, it becomes three-dimensional – 3D – just like our world. Everything we can touch, feel or consume in reality is three-dimensional (3D) in nature. About two decades ago, the technology was merely a concept until 3D glasses came to movie theatres, making movies feel more like actual projections coming out of screens. However, 3D evolved beyond the theatre’s interiors into mainstream sciences. A decade later, it completely changed the face of production as we knew it.</p>
                                <p>There are countless applications to 3D – but none of them exceeds the revolutions brought about by 3D Printing. It took over entire production methods while enabling groundbreaking innovations in healthcare. Today, it is considered the most efficient, effective, and accurate production method in the modern world. 3D Printing fetched the 4th Industrial Revolution and dramatically transformed the medical care industry worldwide.</p>
                                <p>By far, 3D printing is better than traditional modelling methods due to its accuracy and speed of production. For instance, heavy machinery is used to cut parts and models in factories, a chore that you can easily accomplish with 3D printing. Besides, sharing the design is a breeze – send it to your associate user on the internet. You don’t have to arrange transport, which ultimately saves time, labour and costs. In the end, the technology is more efficient since it requires less material to print the parts and models needed.</p>

                                <h2>Changing the course of healthcare</h2>
                                <h3>3D Organ Modelling</h3>
                                <p>Medical trainees must get acquainted with human anatomy before they are deployed into actual practice. 3D printed models of human body parts and organs are used to teach them the intricacies of the heart, for instance, enabling better education. Students get to hone their surgical skills as well, with 3D models that mimic the desired organ, with absolute accuracy.</p>

                                <h3>3D Tissue Printing</h3>
                                <p>Aspect Biosystems, a Biotech company, based out of Vancouver, Canada, developed 3D designs to produce tissue structures for the human body. While printing nuts, bolts, plastics, and any solid and hard object is a cakewalk for modern 3D printers, soft and precise entities like human tissue tend to fall apart when they are solely based on design. While the 3D printer has no issue printing bio-materials, soft structures need support systems to keep them rigid. Aspect Biosystems developed a microfluidic solution that can bring human cells to life. A cellulite-like microfluidic solution is used to print the structure of the human tissue. So soon as the solution takes shape, it is incubated under ideal conditions. The solution thus begins to form tissues after a few weeks.</p>

                                <h3>Printing the Human Heart</h3>
                                <p>The complexity of the human heart makes it an imperative subject of discussion in 3D printing. Heart failure is the primary cause of death worldwide. As the centre of the circulatory system, a completely healthy human body will die in 2 seconds if the heart stops pumping blood.</p>
                                <p>A professor at Carnegie Mellon University, Pittsburgh, Pennsylvania – Adam Feinberg, conducted experiments that revealed what 3D printing holds for healthcare. He also received an award from the National Science Foundation for his work in 3D bioprinting in 2015 after human tissues. His ultimate goal, however, was to recreate the human heart. Heart tissues are intricate. The epicardium, endocardium and myocardium present in the organ are very fragile tissues.</p>
                                <p>3D prints of these complicated and thin tissues would collapse even before they were printed entirely. Finally, after several failed attempts, Feinberg came up with a solution using algae and called it alginate, which would then form the required tissues. Feinberg was also able to 3D print several arteries for the human heart. Finally, in 2020, after five years of ongoing trials, he recreated the fully functional human heart, a giant leap for humanity.</p>
                                <p>However, there is still a long way to go before using it for a transplant because the current technology does not match the number of cells present in the heart – yet. The research team at Carnegie is constantly experimenting to develop the perfect version of the full-sized 3D printed human heart that could reshape the future of healthcare and its limitations in the present.</p>

                                <h3>3D Prosthetics</h3>
                                <p>Considering custom fitting, production and time, prosthetics can be expensive. Add to it the throes of vascular trauma. 3D printing is an incredible alternative to the traditionally slow and costly creation. For instance, the notoriously vulnerable knee cartilage has been successfully recreated using 3D printing in surgical orthopaedics. First, a fibrinogen ink – gellan gum combine encourages the body’s cells to recolonise and build themselves. After that, the second ink – silk fibroin methacrylate, keeps the structure flexible and strong. Even prosthetic legs and bone structures are being 3D printed and used in healthcare facilities worldwide.</p>

                                <h3>3D Dental Solutions</h3>
                                <p>3D printing technologies work particularly in areas where customised solutions are imperative across unique anatomies. Additive manufacturing is one of the most tedious parts of the entire dental implant process, which adds agony in taking accurate impressions, and prolonged wait times. Chair-side 3D printing solutions are best adopted in an industry that experiences patient fear the most. Besides these protracted issues, treatment modalities are costly. That is why 3D printing is a grace for the dental industry that quickly adopted the technology against traditional transformation procedures. Without relying heavily on manual labour, dental care specialists are now using 3D to manufacture braces, individual teeth, and medical dentures.</p>
                            </div>
                        </div>

                        <div className='col-lg-5 industry-single-col-boxes'>
                            <div className='industry-single-survey-box'>
                                <div className='survey-title'>Survey</div>
                            </div>

                            <div className='industry-single-boxes'>
                                <div className='industry-single-box industry-single-related-box'>
                                    <div className='is-box-title'>Read the related blog</div>
                                    <ul>
                                        <li>
                                            <Link to={`/`}>When launching a new product or service, a go-to-market strategy is a tactical plan that contains/</Link>
                                        </li>
                                        <li>
                                            <Link to={`/`}>When launching a new product or service, a go-to-market strategy is a tactical plan that contains/</Link>
                                        </li>
                                        <li>
                                            <Link to={`/`}>When launching a new product or service, a go-to-market strategy is a tactical plan that contains/</Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className='industry-single-box industry-single-other-box'>
                                    <div className='is-box-title'>Other Industries</div>

                                    <div className='row industry-single-other-industries-row'>
                                        <OtherIndustryItem
                                            icon={`${BASE_URL}/img/industries/nanotech.png`}
                                            category={`Nanotech`}
                                            slug={`nanotech`}
                                        />

                                        <OtherIndustryItem
                                            icon={`${BASE_URL}/img/industries/construction.png`}
                                            category={`Construction`}
                                            slug={`construction`}
                                        />

                                        <OtherIndustryItem
                                            icon={`${BASE_URL}/img/industries/metal-industry.png`}
                                            category={`Metal Industry`}
                                            slug={`metal`}
                                        />

                                        <OtherIndustryItem
                                            icon={`${BASE_URL}/img/industries/agriculture.png`}
                                            category={`Agriculture`}
                                            slug={`agriculture`}
                                        />

                                        <OtherIndustryItem
                                            icon={`${BASE_URL}/img/industries/hightech.png`}
                                            category={`Hightech`}
                                            slug={`high-tech`}
                                        />

                                        <OtherIndustryItem
                                            icon={`${BASE_URL}/img/industries/geospatial.png`}
                                            category={`Geospatial`}
                                            slug={`geospatial`}
                                        />

                                        <OtherIndustryItem
                                            icon={`${BASE_URL}/img/industries/finance.png`}
                                            category={`Finance`}
                                            slug={`finance`}
                                        />

                                        <OtherIndustryItem
                                            icon={`${BASE_URL}/img/industries/manufacturing.png`}
                                            category={`Manufacturing`}
                                            slug={`manufacturing`}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <GetInvolved />

            <ServicesAskQuote />
        </div>
    )
}

export default IndustrySingle