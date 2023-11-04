import React from 'react'
import "../project.css"

const Project = (props) => {
    return (
        <div className='project'>
            <img src={props.src} alt='porj' />
            <div className='box'>
                <h1>{props.name}</h1>
                <p>{props.info}</p>
                <button className='btn1'><a href={props.github} target="_blank">GitHub</a></button>
                <button className='btn2'><a href={props.live} target="_blank" style={{color:"rgb(0 60 78)"}}>Live</a></button>
            </div>
        </div>
    )
}

export default Project
