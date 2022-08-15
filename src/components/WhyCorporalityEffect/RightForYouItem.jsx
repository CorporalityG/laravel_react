export const RightForYouItem = (props) => {
    return (
        <div className="col-lg-4 wce-right-box-col">
            <div className="wce-right-box">
                <div className="wce-right-box-img">
                    {props.thumbnail && <img src={props.thumbnail} alt={props.title} />}
                </div>
                <div className="wce-right-box-title">{props.title}</div>
                <div className="wce-right-box-subtitle">{props.subtitle}</div>
            </div>
        </div>
    )
}