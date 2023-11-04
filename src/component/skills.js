import {React} from 'react'
import Skillscontent from './skillscontent';
const Skills = () => {
        const items=[
            {
                num:90,
                name:"Html"
            },
            {
                num:95,
                name:"Css"
            },
            {
                num:70,
                name:"Bootstrap"
            },
            {
                num:80,
                name:"Tailwind"
            },
            {
                num:85,
                name:"JavaScript"
            },
            {
                num:90,
                name:"React"
            },
            {
                num:78,
                name:"Redux"
            },
            {
                num:65,
                name:"Redux toolkit"
            }
        ]
    return (
        <div className='skills' id='skills'>
            <h1 className="title" >Skills</h1>
            <p>My Techneical level</p>
            <div className='skillcont'>
                {items.map((ele)=><Skillscontent num={ele.num} name={ele.name} />)}
            </div>
        </div>
    )
}

export default Skills
