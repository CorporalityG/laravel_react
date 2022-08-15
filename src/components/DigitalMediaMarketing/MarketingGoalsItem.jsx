export const MarketingGoalsItem = (props) => {
    return (
        <div className="col-sm-6 dmm-gc-box-col">
            <div className="gc-box" data-aos="flip-left" data-aos-delay="300">
                <div className="gc-box-title">{props.title}</div>
                <div className="gc-box-subtitle">{props.subtitle}</div>
            </div>
        </div>
    )
}