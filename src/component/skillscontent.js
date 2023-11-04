import {React} from 'react'
import Skillcircle from './skillcircle'

const Skillscontent = (props) => {
    return (
        <div className='element'>
            <Skillcircle percent={props.num} width="110" />
            <h2>{props.num}%</h2>
            <h3>{props.name}</h3>
        </div>
    )
}

export default Skillscontent
