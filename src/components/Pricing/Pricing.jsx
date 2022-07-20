import React, { useState } from 'react'
import { API_BASE_URL, BASE_URL } from '../../config'
import { GetInvolved } from '../ServiceInsights/GetInvolved'
import './Pricing.css'
import { useForm } from "react-hook-form"
import axios from "axios";

function Pricing() {

    const { register, resetField, formState: { errors }, handleSubmit } = useForm();
    const [frmStep, setFrmStep] = useState(1)
    const [isServiceActive, setIsServiceActive] = useState(-1);
    const [isProjectDurationActive, setIsProjectDurationActive] = useState(0);
    const [isPriceGradeActive, setIsPriceGradeActive] = useState(0);
    const [isSendEmail, setIsSendEmail] = useState(0);
    const [isProjectDurationRequired, setIsProjectDurationRequired] = useState(0);
    const [isProjectGradeRequired, setIsProjectGradeRequired] = useState(0);
    const [gradeType, setGradeType] = useState('Grade 1');

    const onSubmit = frmData => {
        /* console.log(frmData) */
        if (frmData.privacy_policy_agree) {
            setFrmStep(2)

            // console.log(frmData.project_duration);

            if (frmData.service_name) {
                if (frmData.project_duration) {
                    setIsProjectDurationRequired(0)
                }
                else {
                    setIsProjectDurationRequired(1)
                }

                if (frmData.project_price) {
                    setIsProjectGradeRequired(0)
                }
                else {
                    setIsProjectGradeRequired(1)
                }
            }
            else {
                setIsServiceActive(0)
            }

            if (frmData.project_duration && frmData.project_price) {

                const data = {
                    ...frmData,
                    project_grade_type: gradeType
                }

                axios.post(`${API_BASE_URL}/pricing-store`, { data })
                    .then(response => {
                        // console.log(response.frmData);
                        setFrmStep(1)

                        resetField('first_name');
                        resetField('last_name');
                        resetField('company_name');
                        resetField('work_email');
                        resetField('mobile_number');
                        resetField('privacy_policy_agree');
                        resetField('service_name');
                        resetField('project_duration');
                        resetField('project_price');

                        setIsServiceActive(0)
                        setIsProjectDurationActive(0)
                        setIsPriceGradeActive(0)
                        setIsServiceActive(-1)

                        if (response.data) {
                            setIsSendEmail(1)
                        }
                        else {
                            setIsSendEmail(2)
                        }
                    })
                    .catch(error => {
                        console.log(error);
                        setIsSendEmail(2)
                    });
            }
        }
    }

    return (
        <div className='pricing-page'>

            <div className='pricing-banner-section'>
                <img src={`${BASE_URL}/img/Pricing/banner-bg.png`} alt={`Corporality Pricing`} className="pricing-banner-img" />

                <div className='container-lg'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='pricing-banner-title'>
                                <h1>Corporality Pricing</h1>
                            </div>
                        </div>

                        <div className={`col-lg-10 offset-lg-1 pricing-banner-content-col ${isServiceActive === 0 ? "pbcc-mb" : ""}`}>
                            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                                <div className={`service-form-step-1 service-form-step ${frmStep === 1 ? "show" : "hide"}`}>
                                    <p>We would be happy to send you our current pricing plans as a PDF document via e-mail.</p>

                                    <div className='container-fluid'>
                                        <div className='row pricing-banner-services-row'>
                                            <div className='col-lg-5'>
                                                <div className='pricing-banner-service-cont'>
                                                    <div className='service-title'>Services</div>
                                                    <img src={`${BASE_URL}/img/Pricing/services-img.png`} alt={`Services`} className="service-img" />
                                                </div>
                                            </div>

                                            <div className='col-lg-7'>
                                                <div className='pricing-banner-service-form'>

                                                    <div className={`price_email_msg text-success ${isSendEmail === 1 ? 'show' : 'hide'}`}>Email send successfully.</div>
                                                    <div className={`price_email_msg text-danger ${isSendEmail === 2 ? 'show' : 'hide'}`}>Something went wrong. Try after sometime...</div>

                                                    <div className="form-group">
                                                        <input {...register("first_name", { required: true })} className={`form-control ${errors.first_name?.type === 'required' && "border-danger text-danger"}`} placeholder="First Name" />
                                                        {/* <span className='text-danger'>{errors.first_name?.type === 'required' && "First name is required"}</span> */}
                                                    </div>

                                                    <div className="form-group">
                                                        <input {...register("last_name", { required: true })} className={`form-control ${errors.last_name?.type === 'required' && "border-danger text-danger"}`} placeholder="Last Name" />
                                                    </div>

                                                    <div className="form-group">
                                                        <input {...register("company_name", { required: true })} className={`form-control ${errors.company_name?.type === 'required' && "border-danger text-danger"}`} placeholder="Company Name" />
                                                    </div>

                                                    <div className="form-group">
                                                        <input type="email" {...register("work_email", { required: true, pattern: /\S+@\S+\.\S+/ })} className={`form-control ${errors.work_email?.type === 'required' && "border-danger text-danger"}`} placeholder="Work E-mail" />
                                                    </div>

                                                    <div className="form-group">
                                                        <input type="tel" {...register("mobile_number", { required: true, pattern: /^[0-9]+$/i })} className={`form-control ${errors.mobile_number?.type === 'required' && "border-danger text-danger"}`} placeholder="Mobile Number" />
                                                    </div>

                                                    <div className="form-group form-check">
                                                        <input type="checkbox" {...register("privacy_policy_agree", { required: true })} className={`form-check-input ${errors.privacy_policy_agree?.type === 'required' && "border-danger text-danger"}`} id="privacy_policy_agree" />
                                                        <label className="form-check-label" htmlFor="privacy_policy_agree">I have read the privacy policy & agree to the processing of my data.</label>
                                                    </div>

                                                    <button type="submit" className="btn-service">Submit</button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={`service-form-step-2 service-form-step ${frmStep === 2 ? "show" : "hide"}`}>
                                    <div className='pricing-services-list'>
                                        <div className='pricing-service-title'>I’M INTERESTED IN...</div>

                                        <div className='pricing-service-list'>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" {...register("service_name")} id="service_name_1" value="Digital Media Marketing" />
                                                <label className={`form-check-label ${isServiceActive === 1 ? 'active' : ''}`} htmlFor="service_name_1" onClick={() => setIsServiceActive(1)}>Digital Media Marketing</label>
                                            </div>

                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" {...register("service_name")} id="service_name_2" value="Brand Positioning" />
                                                <label className={`form-check-label ${isServiceActive === 2 ? 'active' : ''}`} htmlFor="service_name_2" onClick={() => setIsServiceActive(2)}>Brand Positioning</label>
                                            </div>

                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" {...register("service_name")} id="service_name_3" value="Go to Marketing Strategy" />
                                                <label className={`form-check-label ${isServiceActive === 3 ? 'active' : ''}`} htmlFor="service_name_3" onClick={() => setIsServiceActive(3)}>Go to Marketing Strategy</label>
                                            </div>

                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" {...register("service_name")} id="service_name_4" value="Account Based Marketing" />
                                                <label className={`form-check-label ${isServiceActive === 4 ? 'active' : ''}`} htmlFor="service_name_4" onClick={() => setIsServiceActive(4)}>Account Based Marketing</label>
                                            </div>

                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" {...register("service_name")} id="service_name_5" value="Interactive Blueprint" />
                                                <label className={`form-check-label ${isServiceActive === 5 ? 'active' : ''}`} htmlFor="service_name_5" onClick={() => setIsServiceActive(5)}>Interactive Blueprint</label>
                                            </div>

                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" {...register("service_name")} id="service_name_6" value="Outsourced CXO" />
                                                <label className={`form-check-label ${isServiceActive === 6 ? 'active' : ''}`} htmlFor="service_name_6" onClick={() => setIsServiceActive(6)}>Outsourced CXO</label>
                                            </div>

                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" {...register("service_name")} id="service_name_7" value="Outsourced CMO" />
                                                <label className={`form-check-label ${isServiceActive === 7 ? 'active' : ''}`} htmlFor="service_name_7" onClick={() => setIsServiceActive(7)}>Outsourced CMO</label>
                                            </div>

                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" {...register("service_name")} id="service_name_8" value="Outsourced COO" />
                                                <label className={`form-check-label ${isServiceActive === 8 ? 'active' : ''}`} htmlFor="service_name_8" onClick={() => setIsServiceActive(8)}>Outsourced COO</label>
                                            </div>
                                        </div>

                                        <div className={`project-budget-main ${isServiceActive !== 0 ? "show" : "hide"}`}>
                                            <div className='row project-budget-heading'>
                                                <div className='col-lg-6'>
                                                    <div className='project-budget-title'>PROJECT BUDGET:</div>
                                                </div>

                                                <div className='col-lg-6 project_duration_col'>
                                                    <div className='project_duration'>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" {...register("project_duration")} id="project_duration_monthly" value="Monthly" />
                                                            <label className={`form-check-label ${isProjectDurationActive === 'Monthly' ? 'active' : ''}`} htmlFor="project_duration_monthly" onClick={() => setIsProjectDurationActive('Monthly')}>Monthly</label>
                                                        </div>

                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" {...register("project_duration")} id="project_duration_quaterly" value="Quaterly" />
                                                            <label className={`form-check-label ${isProjectDurationActive === 'Quaterly' ? 'active' : ''}`} htmlFor="project_duration_quaterly" onClick={() => setIsProjectDurationActive('Quaterly')}>Quaterly</label>
                                                        </div>

                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" {...register("project_duration")} id="project_duration_yearly" value="Yearly" />
                                                            <label className={`form-check-label ${isProjectDurationActive === 'Yearly' ? 'active' : ''}`} htmlFor="project_duration_yearly" onClick={() => setIsProjectDurationActive('Yearly')}>Yearly</label>
                                                        </div>
                                                    </div>

                                                    <span className={`project_duration_error text-danger ${isProjectDurationRequired === 1 ? 'show' : 'hide'}`}>Select duration</span>
                                                </div>
                                            </div>

                                            <div className='project_currency'>
                                                <select {...register("project_currency")} id="project_currency" className='project_currency_dd' >
                                                    <option value={`AUD`}>AUD</option>
                                                    <option value={`USD`}>USD</option>
                                                </select>
                                            </div>

                                            <div className='row project_price_main'>
                                                <div className='col-lg-3 project_price_grade_item_col'>
                                                    <div className={`project_price_grade_item ${isPriceGradeActive === '8,500' ? 'active' : ''}`}>
                                                        <input className="form-check-input" type="radio" {...register("project_price")} id="project_price_grade_1" value={`8,500`} />

                                                        <label htmlFor="project_price_grade_1" onClick={() => { setIsPriceGradeActive('8,500'); setGradeType('Grade 1') }}>
                                                            <div className='price_total'>$1,02,000</div>
                                                            <div className='price_subtotal'>$8,500</div>
                                                            <div className='price_per_duration'>Per {
                                                                isProjectDurationActive === 'Quaterly' ? 'quater'
                                                                    :
                                                                    isProjectDurationActive === 'Yearly' ? 'year'
                                                                        : 'month'
                                                            }</div>
                                                            <div className='price_grade_type'>Grade 1</div>
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className='col-lg-3 project_price_grade_item_col'>
                                                    <div className={`project_price_grade_item ${isPriceGradeActive === '10,000' ? 'active' : ''}`}>
                                                        <input className="form-check-input" type="radio" {...register("project_price")} id="project_price_grade_2" value={`10,000`} />

                                                        <label htmlFor="project_price_grade_2" onClick={() => { setIsPriceGradeActive('10,000'); setGradeType('Grade 2') }}>
                                                            <div className='price_total'>$1,20,000</div>
                                                            <div className='price_subtotal'>$10,000</div>
                                                            <div className='price_per_duration'>Per {
                                                                isProjectDurationActive === 'Quaterly' ? 'quater'
                                                                    :
                                                                    isProjectDurationActive === 'Yearly' ? 'year'
                                                                        : 'month'
                                                            }</div>
                                                            <div className='price_grade_type'>Grade 2</div>
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className='col-lg-3 project_price_grade_item_col'>
                                                    <div className={`project_price_grade_item ${isPriceGradeActive === '12,500' ? 'active' : ''}`}>
                                                        <input className="form-check-input" type="radio" {...register("project_price")} id="project_price_grade_3" value={`12,500`} />

                                                        <label htmlFor="project_price_grade_3" onClick={() => { setIsPriceGradeActive('12,500'); setGradeType('Grade 3') }}>
                                                            <div className='price_total'>$1,50,000</div>
                                                            <div className='price_subtotal'>$12,500</div>
                                                            <div className='price_per_duration'>Per {
                                                                isProjectDurationActive === 'Quaterly' ? 'quater'
                                                                    :
                                                                    isProjectDurationActive === 'Yearly' ? 'year'
                                                                        : 'month'
                                                            }</div>
                                                            <div className='price_grade_type'>Grade 3</div>
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className='col-lg-3 project_price_grade_item_col'>
                                                    <div className={`project_price_grade_item ${isPriceGradeActive === '15,000' ? 'active' : ''}`}>
                                                        <input className="form-check-input" type="radio" {...register("project_price")} id="project_price_grade_4" value={`15,000`} />

                                                        <label htmlFor="project_price_grade_4" onClick={() => { setIsPriceGradeActive('15,000'); setGradeType('Grade 4') }}>
                                                            <div className='price_total'>$1,80,000</div>
                                                            <div className='price_subtotal'>$15,000</div>
                                                            <div className='price_per_duration'>Per {
                                                                isProjectDurationActive === 'Quaterly' ? 'quater'
                                                                    :
                                                                    isProjectDurationActive === 'Yearly' ? 'year'
                                                                        : 'month'
                                                            }</div>
                                                            <div className='price_grade_type'>Grade 4</div>
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className='col-lg-12'>
                                                    <span className={`project_grade_error text-danger ${isProjectGradeRequired === 1 ? 'show' : 'hide'}`}>Select Grade</span>
                                                </div>

                                            </div>

                                            <div className='btn-service-main'>
                                                <button type="submit" className="btn-service">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <GetInvolved />
        </div>
    )
}

export default Pricing