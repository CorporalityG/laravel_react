import React, { useState, useEffect } from 'react'
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../config'
import { GetInvolved } from '../ServiceInsights/GetInvolved'
import './Pricing.css'
import { useForm } from "react-hook-form"
import axios from "axios";
import { Helmet } from "react-helmet";

function Pricing() {

    const page_slug = 'pricing';
    const [pageDetail, setPageDetail] = useState([]);
    const [projectBudget, setProjectBudget] = useState([]);

    useEffect(() => {
        getPageDetail()
        getProjectBudget()
    }, []);

    async function getPageDetail() {
        let result = await fetch(`${API_BASE_URL}/page-detail/${page_slug}`);
        result = await result.json();
        setPageDetail(result);
    }

    async function getProjectBudget(service_name, duration) {
        let result = await fetch(`${API_BASE_URL}/project-budget?service_name=${service_name}&duration=${duration}`);
        result = await result.json();
        setProjectBudget(result);
    }

    const projectDuration = (duration) => {
        if (duration) {
            resetField('project_price');
            setIsPriceGradeActive(0)
            
            const projectCurrency = document.getElementById('project_currency');
            
            setCurrency(projectCurrency.value)
            getProjectBudget(serviceName, duration);
        }
    }

    const { register, resetField, formState: { errors }, handleSubmit } = useForm();
    const [frmStep, setFrmStep] = useState(1)
    const [isServiceActive, setIsServiceActive] = useState(-1);
    const [serviceName, setServiceName] = useState('');
    const [isProjectDurationActive, setIsProjectDurationActive] = useState(0);
    const [isPriceGradeActive, setIsPriceGradeActive] = useState(0);
    const [isSendEmail, setIsSendEmail] = useState(0);
    const [isProjectDurationRequired, setIsProjectDurationRequired] = useState(0);
    const [isProjectGradeRequired, setIsProjectGradeRequired] = useState(0);
    const [gradeType, setGradeType] = useState('Grade 1');
    const [currency, setCurrency] = useState('AUD');
    const [projectTotalPrice, setProjectTotalPrice] = useState(0);

    const onSubmit = frmData => {
        /* console.log(frmData) */
        if (frmData.privacy_policy_agree) {
            setFrmStep(2)

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
                    project_grade_type: gradeType,
                    project_total_price: projectTotalPrice
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
                        setCurrency('AUD')

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
            <Helmet>
                {pageDetail.meta_title && <title>{`${pageDetail.meta_title}`}</title>}
                {pageDetail.meta_description && <meta name="description" content={`${pageDetail.meta_description}`} />}
                {pageDetail.meta_keywords && <meta name="keywords" content={pageDetail.meta_keywords} />}
                <link rel="canonical" href={`${BASE_URL}/${page_slug}/`} />
            </Helmet>

            {
                pageDetail.detail ?
                    <div className='pricing-banner-section'>
                        <img src={`${API_IMG_URL}pages/${pageDetail.detail.banner_image}`} alt={`${pageDetail.detail.banner_title}`} className="pricing-banner-img" />

                        <div className='container-lg'>
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <div className='pricing-banner-title'>
                                        <h1>{`${pageDetail.detail.banner_title}`}</h1>
                                    </div>
                                </div>

                                <div className={`col-lg-10 offset-lg-1 pricing-banner-content-col ${isServiceActive === 0 ? "pbcc-mb" : ""}`}>
                                    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                                        <div className={`service-form-step-1 service-form-step ${frmStep === 1 ? "show" : "hide"}`}>
                                            <p>{`${pageDetail.detail.services_subtitle}`}</p>

                                            <div className='container-fluid'>
                                                <div className='row pricing-banner-services-row'>
                                                    <div className='col-lg-5 col-md-5'>
                                                        <div className='pricing-banner-service-cont'>
                                                            <div className='service-title'>{`${pageDetail.detail.services_title}`}</div>
                                                            <img src={`${API_IMG_URL}pages/${pageDetail.detail.services_image}`} alt={`${pageDetail.detail.services_title}`} className="service-img" />
                                                        </div>
                                                    </div>

                                                    <div className='col-lg-7 col-md-7'>
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
                                                        <input className="form-check-input" type="radio" {...register("service_name")} id="service_name_1" value="Digital Media Marketing" onClick={(e) => { setIsServiceActive(1); setServiceName(e.target.value) }} />
                                                        <label className={`form-check-label ${isServiceActive === 1 ? 'active' : ''}`} htmlFor="service_name_1">Digital Media Marketing</label>
                                                    </div>

                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" {...register("service_name")} id="service_name_2" value="Brand Positioning" onClick={(e) => { setIsServiceActive(2); setServiceName(e.target.value) }} />
                                                        <label className={`form-check-label ${isServiceActive === 2 ? 'active' : ''}`} htmlFor="service_name_2">Brand Positioning</label>
                                                    </div>

                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" {...register("service_name")} id="service_name_3" value="Go to Marketing Strategy" onClick={(e) => { setIsServiceActive(3); setServiceName(e.target.value) }} />
                                                        <label className={`form-check-label ${isServiceActive === 3 ? 'active' : ''}`} htmlFor="service_name_3">Go to Marketing Strategy</label>
                                                    </div>

                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" {...register("service_name")} id="service_name_4" value="Account Based Marketing" onClick={(e) => { setIsServiceActive(4); setServiceName(e.target.value) }} />
                                                        <label className={`form-check-label ${isServiceActive === 4 ? 'active' : ''}`} htmlFor="service_name_4">Account Based Marketing</label>
                                                    </div>

                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" {...register("service_name")} id="service_name_5" value="Interactive Blueprint" onClick={(e) => { setIsServiceActive(5); setServiceName(e.target.value) }} />
                                                        <label className={`form-check-label ${isServiceActive === 5 ? 'active' : ''}`} htmlFor="service_name_5">Interactive Blueprint</label>
                                                    </div>

                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" {...register("service_name")} id="service_name_6" value="Outsourced CXO" onClick={(e) => { setIsServiceActive(6); setServiceName(e.target.value) }} />
                                                        <label className={`form-check-label ${isServiceActive === 6 ? 'active' : ''}`} htmlFor="service_name_6">Outsourced CXO</label>
                                                    </div>

                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" {...register("service_name")} id="service_name_7" value="Outsourced CMO" onClick={(e) => { setIsServiceActive(7); setServiceName(e.target.value) }} />
                                                        <label className={`form-check-label ${isServiceActive === 7 ? 'active' : ''}`} htmlFor="service_name_7">Outsourced CMO</label>
                                                    </div>

                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" {...register("service_name")} id="service_name_8" value="Outsourced COO" onClick={(e) => { setIsServiceActive(8); setServiceName(e.target.value) }} />
                                                        <label className={`form-check-label ${isServiceActive === 8 ? 'active' : ''}`} htmlFor="service_name_8">Outsourced COO</label>
                                                    </div>
                                                </div>

                                                <div className={`project-budget-main ${isServiceActive !== 0 ? "show" : "hide"}`}>
                                                    <div className='row project-budget-heading'>
                                                        <div className='col-lg-6 col-sm-5'>
                                                            <div className='project-budget-title'>PROJECT BUDGET:</div>
                                                        </div>

                                                        <div className='col-lg-6 col-sm-7 project_duration_col'>
                                                            <div className='project_duration'>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="radio" {...register("project_duration")} id="project_duration_monthly" value="Monthly" onClick={(e) => { setIsProjectDurationActive(e.target.value); projectDuration(e.target.value) }} />
                                                                    <label className={`form-check-label ${isProjectDurationActive === 'Monthly' ? 'active' : ''}`} htmlFor="project_duration_monthly">Monthly</label>
                                                                </div>

                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="radio" {...register("project_duration")} id="project_duration_quaterly" value="Quaterly" onClick={(e) => { setIsProjectDurationActive(e.target.value); projectDuration(e.target.value) }} />
                                                                    <label className={`form-check-label ${isProjectDurationActive === 'Quaterly' ? 'active' : ''}`} htmlFor="project_duration_quaterly">Quaterly</label>
                                                                </div>

                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="radio" {...register("project_duration")} id="project_duration_yearly" value="Yearly" onClick={(e) => { setIsProjectDurationActive(e.target.value); projectDuration(e.target.value) }} />
                                                                    <label className={`form-check-label ${isProjectDurationActive === 'Yearly' ? 'active' : ''}`} htmlFor="project_duration_yearly">Yearly</label>
                                                                </div>
                                                            </div>

                                                            <span className={`project_duration_error text-danger ${isProjectDurationRequired === 1 ? 'show' : 'hide'}`}>Select duration</span>
                                                        </div>
                                                    </div>

                                                    <div className={`pb-duration-main ${isProjectDurationActive !== 0 ? "show" : "hide"}`}>
                                                        <div className='project_currency'>
                                                            <select {...register("project_currency")} id="project_currency" className='project_currency_dd' onChange={(e) => setCurrency(e.target.value)} >
                                                                <option value={`AUD`}>AUD</option>
                                                                <option value={`USD`}>USD</option>
                                                            </select>
                                                        </div>

                                                        {
                                                            projectBudget ?
                                                                <div className='row project_price_main'>
                                                                    {
                                                                        projectBudget.price_grade_1 && projectBudget.total_price_grade_1 ?
                                                                            <div className='col-lg-3 col-sm-6 project_price_grade_item_col'>
                                                                                {
                                                                                    currency === 'USD' ?
                                                                                        <div className={`project_price_grade_item ${isPriceGradeActive === projectBudget.price_grade_1.USD ? 'active' : ''}`}>
                                                                                            <input className="form-check-input" type="radio" {...register("project_price")} id="project_price_grade_1" value={projectBudget.price_grade_1.USD} onClick={(e) => { setIsPriceGradeActive(e.target.value); setGradeType(projectBudget.grade_type_1 ?? 'Grade 1'); setProjectTotalPrice(projectBudget.total_price_grade_1.USD) }} />

                                                                                            <label htmlFor="project_price_grade_1">
                                                                                                <div className='price_total'>${parseFloat(projectBudget.total_price_grade_1.USD).toLocaleString()}</div>
                                                                                                <div className='price_subtotal'>${parseFloat(projectBudget.price_grade_1.USD).toLocaleString()}</div>
                                                                                                <div className='price_per_duration'>Per {
                                                                                                    isProjectDurationActive === 'Quaterly' ? 'quater'
                                                                                                        :
                                                                                                        isProjectDurationActive === 'Yearly' ? 'year'
                                                                                                            : 'month'
                                                                                                }</div>
                                                                                                <div className='price_grade_type'>{projectBudget.grade_type_1 ?? 'Grade 1'}</div>
                                                                                            </label>
                                                                                        </div>
                                                                                        :
                                                                                        <div className={`project_price_grade_item ${isPriceGradeActive === projectBudget.price_grade_1.AUD ? 'active' : ''}`}>
                                                                                            <input className="form-check-input" type="radio" {...register("project_price")} id="project_price_grade_1" value={projectBudget.price_grade_1.AUD} onClick={(e) => { setIsPriceGradeActive(e.target.value); setGradeType(projectBudget.grade_type_1 ?? 'Grade 1'); setProjectTotalPrice(projectBudget.total_price_grade_1.AUD) }} />

                                                                                            <label htmlFor="project_price_grade_1">
                                                                                                <div className='price_total'>${parseFloat(projectBudget.total_price_grade_1.AUD).toLocaleString()}</div>
                                                                                                <div className='price_subtotal'>${parseFloat(projectBudget.price_grade_1.AUD).toLocaleString()}</div>
                                                                                                <div className='price_per_duration'>Per {
                                                                                                    isProjectDurationActive === 'Quaterly' ? 'quater'
                                                                                                        :
                                                                                                        isProjectDurationActive === 'Yearly' ? 'year'
                                                                                                            : 'month'
                                                                                                }</div>
                                                                                                <div className='price_grade_type'>{projectBudget.grade_type_1 ?? 'Grade 1'}</div>
                                                                                            </label>
                                                                                        </div>
                                                                                }
                                                                            </div>
                                                                            : null
                                                                    }

                                                                    {
                                                                        projectBudget.price_grade_2 && projectBudget.total_price_grade_2 ?
                                                                            <div className='col-lg-3 col-sm-6 project_price_grade_item_col'>
                                                                                {
                                                                                    currency === 'USD' ?
                                                                                        <div className={`project_price_grade_item ${isPriceGradeActive === projectBudget.price_grade_2.USD ? 'active' : ''}`}>
                                                                                            <input className="form-check-input" type="radio" {...register("project_price")} id="project_price_grade_2" value={projectBudget.price_grade_2.USD} onClick={(e) => { setIsPriceGradeActive(e.target.value); setGradeType(projectBudget.grade_type_2 ?? 'Grade 2'); setProjectTotalPrice(projectBudget.total_price_grade_2.USD) }} />

                                                                                            <label htmlFor="project_price_grade_2">
                                                                                                <div className='price_total'>${parseFloat(projectBudget.total_price_grade_2.USD).toLocaleString()}</div>
                                                                                                <div className='price_subtotal'>${parseFloat(projectBudget.price_grade_2.USD).toLocaleString()}</div>
                                                                                                <div className='price_per_duration'>Per {
                                                                                                    isProjectDurationActive === 'Quaterly' ? 'quater'
                                                                                                        :
                                                                                                        isProjectDurationActive === 'Yearly' ? 'year'
                                                                                                            : 'month'
                                                                                                }</div>
                                                                                                <div className='price_grade_type'>{projectBudget.grade_type_2 ?? 'Grade 2'}</div>
                                                                                            </label>
                                                                                        </div>
                                                                                        :
                                                                                        <div className={`project_price_grade_item ${isPriceGradeActive === projectBudget.price_grade_2.AUD ? 'active' : ''}`}>
                                                                                            <input className="form-check-input" type="radio" {...register("project_price")} id="project_price_grade_2" value={projectBudget.price_grade_2.AUD} onClick={(e) => { setIsPriceGradeActive(e.target.value); setGradeType(projectBudget.grade_type_2 ?? 'Grade 2'); setProjectTotalPrice(projectBudget.total_price_grade_2.AUD) }} />

                                                                                            <label htmlFor="project_price_grade_2">
                                                                                                <div className='price_total'>${parseFloat(projectBudget.total_price_grade_2.AUD).toLocaleString()}</div>
                                                                                                <div className='price_subtotal'>${parseFloat(projectBudget.price_grade_2.AUD).toLocaleString()}</div>
                                                                                                <div className='price_per_duration'>Per {
                                                                                                    isProjectDurationActive === 'Quaterly' ? 'quater'
                                                                                                        :
                                                                                                        isProjectDurationActive === 'Yearly' ? 'year'
                                                                                                            : 'month'
                                                                                                }</div>
                                                                                                <div className='price_grade_type'>{projectBudget.grade_type_2 ?? 'Grade 2'}</div>
                                                                                            </label>
                                                                                        </div>
                                                                                }
                                                                            </div>
                                                                            : null
                                                                    }

                                                                    {
                                                                        projectBudget.price_grade_3 && projectBudget.total_price_grade_3 ?
                                                                            <div className='col-lg-3 col-sm-6 project_price_grade_item_col'>
                                                                                {
                                                                                    currency === 'USD' ?
                                                                                        <div className={`project_price_grade_item ${isPriceGradeActive === projectBudget.price_grade_3.USD ? 'active' : ''}`}>
                                                                                            <input className="form-check-input" type="radio" {...register("project_price")} id="project_price_grade_3" value={projectBudget.price_grade_3.USD} onClick={(e) => { setIsPriceGradeActive(e.target.value); setGradeType(projectBudget.grade_type_3 ?? 'Grade 3'); setProjectTotalPrice(projectBudget.total_price_grade_3.USD) }} />

                                                                                            <label htmlFor="project_price_grade_3"x>
                                                                                                <div className='price_total'>${parseFloat(projectBudget.total_price_grade_3.USD).toLocaleString()}</div>
                                                                                                <div className='price_subtotal'>${parseFloat(projectBudget.price_grade_3.USD).toLocaleString()}</div>
                                                                                                <div className='price_per_duration'>Per {
                                                                                                    isProjectDurationActive === 'Quaterly' ? 'quater'
                                                                                                        :
                                                                                                        isProjectDurationActive === 'Yearly' ? 'year'
                                                                                                            : 'month'
                                                                                                }</div>
                                                                                                <div className='price_grade_type'>{projectBudget.grade_type_3 ?? 'Grade 3'}</div>
                                                                                            </label>
                                                                                        </div>
                                                                                        :
                                                                                        <div className={`project_price_grade_item ${isPriceGradeActive === projectBudget.price_grade_3.AUD ? 'active' : ''}`}>
                                                                                            <input className="form-check-input" type="radio" {...register("project_price")} id="project_price_grade_3" value={projectBudget.price_grade_3.AUD} onClick={(e) => { setIsPriceGradeActive(e.target.value); setGradeType(projectBudget.grade_type_3 ?? 'Grade 3'); setProjectTotalPrice(projectBudget.total_price_grade_3.AUD) }} />

                                                                                            <label htmlFor="project_price_grade_3">
                                                                                                <div className='price_total'>${parseFloat(projectBudget.total_price_grade_3.AUD).toLocaleString()}</div>
                                                                                                <div className='price_subtotal'>${parseFloat(projectBudget.price_grade_3.AUD).toLocaleString()}</div>
                                                                                                <div className='price_per_duration'>Per {
                                                                                                    isProjectDurationActive === 'Quaterly' ? 'quater'
                                                                                                        :
                                                                                                        isProjectDurationActive === 'Yearly' ? 'year'
                                                                                                            : 'month'
                                                                                                }</div>
                                                                                                <div className='price_grade_type'>{projectBudget.grade_type_3 ?? 'Grade 3'}</div>
                                                                                            </label>
                                                                                        </div>
                                                                                }
                                                                            </div>
                                                                            : null
                                                                    }

                                                                    {
                                                                        projectBudget.price_grade_4 && projectBudget.total_price_grade_4 ?
                                                                            <div className='col-lg-3 col-sm-6 project_price_grade_item_col'>
                                                                                {
                                                                                    currency === 'USD' ?
                                                                                        <div className={`project_price_grade_item ${isPriceGradeActive === projectBudget.price_grade_4.USD ? 'active' : ''}`}>
                                                                                            <input className="form-check-input" type="radio" {...register("project_price")} id="project_price_grade_4" value={projectBudget.price_grade_4.USD} onClick={(e) => { setIsPriceGradeActive(e.target.value); setGradeType(projectBudget.grade_type_4 ?? 'Grade 4'); setProjectTotalPrice(projectBudget.total_price_grade_4.USD) }} />

                                                                                            <label htmlFor="project_price_grade_4">
                                                                                                <div className='price_total'>${parseFloat(projectBudget.total_price_grade_4.USD).toLocaleString()}</div>
                                                                                                <div className='price_subtotal'>${parseFloat(projectBudget.price_grade_4.USD).toLocaleString()}</div>
                                                                                                <div className='price_per_duration'>Per {
                                                                                                    isProjectDurationActive === 'Quaterly' ? 'quater'
                                                                                                        :
                                                                                                        isProjectDurationActive === 'Yearly' ? 'year'
                                                                                                            : 'month'
                                                                                                }</div>
                                                                                                <div className='price_grade_type'>{projectBudget.grade_type_4 ?? 'Grade 4'}</div>
                                                                                            </label>
                                                                                        </div>
                                                                                        :
                                                                                        <div className={`project_price_grade_item ${isPriceGradeActive === projectBudget.price_grade_4.AUD ? 'active' : ''}`}>
                                                                                            <input className="form-check-input" type="radio" {...register("project_price")} id="project_price_grade_4" value={projectBudget.price_grade_4.AUD} onClick={(e) => { setIsPriceGradeActive(e.target.value); setGradeType(projectBudget.grade_type_4 ?? 'Grade 4'); setProjectTotalPrice(projectBudget.total_price_grade_4.AUD) }} />

                                                                                            <label htmlFor="project_price_grade_4">
                                                                                                <div className='price_total'>${parseFloat(projectBudget.total_price_grade_4.AUD).toLocaleString()}</div>
                                                                                                <div className='price_subtotal'>${parseFloat(projectBudget.price_grade_4.AUD).toLocaleString()}</div>
                                                                                                <div className='price_per_duration'>Per {
                                                                                                    isProjectDurationActive === 'Quaterly' ? 'quater'
                                                                                                        :
                                                                                                        isProjectDurationActive === 'Yearly' ? 'year'
                                                                                                            : 'month'
                                                                                                }</div>
                                                                                                <div className='price_grade_type'>{projectBudget.grade_type_4 ?? 'Grade 4'}</div>
                                                                                            </label>
                                                                                        </div>
                                                                                }
                                                                            </div>
                                                                            : null
                                                                    }

                                                                    <div className='col-lg-12'>
                                                                        <span className={`project_grade_error text-danger ${isProjectGradeRequired === 1 ? 'show' : 'hide'}`}>Select Grade</span>
                                                                    </div>

                                                                </div>
                                                                : null
                                                        }

                                                        <div className='btn-service-main'>
                                                            <button type="submit" className="btn-service">Submit</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    : null
            }

            <GetInvolved />
        </div>
    )
}

export default Pricing