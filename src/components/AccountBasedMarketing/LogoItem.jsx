import React from 'react'

export const LogoItem = (props) => {
  return (
    <div className="logo-item" data-aos="flip-up">
        {props.logo && <img src={props.logo} alt={props.title} />}
    </div>
  )
}