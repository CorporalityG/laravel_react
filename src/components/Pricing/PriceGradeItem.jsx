export const PriceGradeItem = (props) => {
    return (
        <div className='col-lg-3 project_price_grade_item_col'>
            <div className="project_price_grade_item">
                <div className='price_total'>{props.total}</div>
                <div className='price_subtotal'>{props.subtotal}</div>
                <div className='price_per_duration'>Per {props.duration.toLowerCase().slice(0, -2)}</div>
                <div className='price_grade_type'>{props.gradeType}</div>
            </div>
        </div>
    )
}