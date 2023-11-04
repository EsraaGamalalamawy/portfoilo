import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const Talk = (props) => {
    return (
        <div className='contact_talk'>
            {props.icon}
            <h3>{props.name}</h3>
            <p>{props.info}</p>
            <a href={props.link}>write me &nbsp; <FaArrowRight/></a>
        </div>
    )
}

export default Talk
