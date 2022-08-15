export const MarketingApproachStep = (props) => {
  return (
    <div className={`mma-ma-step ma-step-${props.number}`} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-delay="500">
      <div className="ma-step-number">{props.number}</div>
      {props.bgIcon && <img src={props.bgIcon} alt={props.title} className="ma-step-hexagon-img" />}

      <svg className="ma-step-hexagon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 225 250"><path d="M0,58.4v79.9c0,6.5,3.5,12.6,9.2,15.8l70.5,40.2c5.6,3.2,12.4,3.2,18,0l70.5-40.2c5.7-3.2,9.2-9.3,9.2-15.8V58.4 c0-6.5-3.5-12.6-9.2-15.8L97.7,2.4c-5.6-3.2-12.4-3.2-18,0L9.2,42.5C3.5,45.8,0,51.8,0,58.4z"></path></svg>

      <div className="ma-step-title">{props.title}</div>
    </div>
  )
}