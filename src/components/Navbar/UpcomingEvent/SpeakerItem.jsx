export const SpeakerItem = (props) => {
    return (
        <>
            {
                props.avatar || props.name || props.designation ?
                    <div className="uce-speaker-item">
                        <div className="avatar">
                            {
                                props.avatar ?
                                    <img src={props.avatar} alt={props.name} />
                                    : null
                            }
                        </div>
                        <div className="author-detail">
                            <div className="name">{props.name}</div>
                            <div className="designation">{props.designation}</div>
                        </div>
                    </div>
                    : null
            }
        </>
    )
}