import React from 'react'

const Skillcircle = (props) => {
    const radius=50;
    const dasharray = radius *Math.PI *2
    const off= dasharray -(dasharray*props.percent) /100
    return (
        <div className='skillcircle'>
            <div>
                <svg width={props.width} height={props.width} viewBox={`0 0 ${props.width} ${props.width}`} >
                    <circle className='circle' cx={props.width/2} cy={props.width/2} strokeWidth="5px" r={radius} />
                    <circle 
                        className='progress' 
                        cx={props.width/2} 
                        cy={props.width/2} 
                        strokeWidth="5px" 
                        r={radius} 
                        style={{
                            strokeDasharray:dasharray,
                            strokeDashoffset:off,
                        }}
                        transform={`rotate(-90 ${props.width/2} ${props.width/2})`}
                    />
                </svg>
            </div>
        </div>
    )
}

export default Skillcircle
