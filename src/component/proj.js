import {React,useState} from 'react'
import img1 from "../images/task1.png"
import img2 from "../images/task2.png"
import img3 from "../images/task3.png"
import img4 from "../images/puzzle.png"
import img5 from "../images/backmon.png"
import img6 from "../images/books home.png"
import img7 from "../images/first web.png"
import img8 from "../images/five-star.png"
import img9 from "../images/first project.png"
import img10 from "../images/project2.png"
import img11 from "../images/airline.png"
import img12 from "../images/smart.png"
import img13 from "../images/task0.png"
import img14 from "../images/task.png"
import img15 from "../images/projectreact.png"
import Project from './Project'
import "../project.css"

const Proj = () => {
    const [styleall,setStyleall]=useState(true)
    const [stylewhile,setStylewhile]=useState(false)
    const [styleproj,setStyleproj]=useState(false)
    const All=[
        {
            src:img13,
            name:"Task",
            info:"Designed by React",
            github:"https://github.com/EsraaGamalalamawy/task",
            live:"https://esraagamalalamawy.github.io/task/"
        },
        {
            src:img14,
            name:"Task",
            info:"Designed by React",
            github:"https://github.com/EsraaGamalalamawy/task1",
            live:"https://esraagamalalamawy.github.io/task1/"
        },
        {
            src:img15,
            name:"Project",
            info:"Designed by React",
            github:"https://github.com/EsraaGamalalamawy/project_react",
            live:"https://esraagamalalamawy.github.io/project_react/"
        },
        {
            src:img1,
            name:"Task1",
            info:"Designed by Html and Css",
            github:"https://github.com/EsraaGamalalamawy/task0",
            live:"https://esraagamalalamawy.github.io/task0/"
        },
        {
            src:img2,
            name:"Task2",
            info:"Designed by Html and Css",
            github:"https://github.com/EsraaGamalalamawy/task2",
            live:"https://esraagamalalamawy.github.io/task2/"
        },
        {
            src:img3,
            name:"Task3",
            info:"Designed by Html and Css",
            github:"https://github.com/EsraaGamalalamawy/task3",
            live:"https://esraagamalalamawy.github.io/task3/"
        },
        {
            src:img4,
            name:"Puzzle",
            info:"Designed by Html and Css",
            github:"https://github.com/EsraaGamalalamawy/puzzle",
            live:"https://esraagamalalamawy.github.io/puzzle/"
        },
        {
            src:img5,
            name:"Backman",
            info:"Designed by Html and Css",
            github:"https://github.com/EsraaGamalalamawy/backman",
            live:"https://esraagamalalamawy.github.io/backman/"
        },
        {
            src:img6,
            name:"Books Home",
            info:"Designed by Html and Css",
            github:"https://github.com/EsraaGamalalamawy/book-house",
            live:"https://esraagamalalamawy.github.io/book-house/"
        },
        {
            src:img7,
            name:"Template1",
            info:"Designed by Html and Css",
            github:"https://github.com/EsraaGamalalamawy/first-webPage",
            live:"https://esraagamalalamawy.github.io/first-webPage/#"
        },
        {
            src:img8,
            name:"Five Star",
            info:"Designed by Html and Css and Bootstrap",
            github:"https://github.com/EsraaGamalalamawy/five_star",
            live:"https://esraagamalalamawy.github.io/five_star/"
        },
        {
            src:img9,
            name:"Template3",
            info:"Designed by Html and Css",
            github:"https://github.com/EsraaGamalalamawy/project1",
            live:"https://esraagamalalamawy.github.io/project1/"
        },
        {
            src:img10,
            name:"Template2",
            info:"Designed by Html and Css",
            github:"https://github.com/EsraaGamalalamawy/template2",
            live:"https://esraagamalalamawy.github.io/template2/"
        },
        {
            src:img11,
            name:"Airline",
            info:"Designed by Html and Css and Bootstrap",
            github:"https://github.com/EsraaGamalalamawy/airline",
            live:"https://esraagamalalamawy.github.io/airline/"
        },
        {
            src:img12,
            name:"Smart Restaurant",
            info:"Designed by Html and Css and JavaScript",
            github:"https://github.com/EsraaGamalalamawy/smart-resturent",
            live:"https://esraagamalalamawy.github.io/smart-resturent/"
        },
    ]
    const while_learning=[
        {
            src:img1,
            name:"Task1",
            info:"Designed by Html and Css",
            github:"https://github.com/EsraaGamalalamawy/task0",
            live:"https://esraagamalalamawy.github.io/task0/"
        },
        {
            src:img2,
            name:"Task2",
            info:"Designed by Html and Css",
            github:"https://github.com/EsraaGamalalamawy/task2",
            live:"https://esraagamalalamawy.github.io/task2/"
        },
        {
            src:img3,
            name:"Task3",
            info:"Designed by Html and Css",
            github:"https://github.com/EsraaGamalalamawy/task3",
            live:"https://esraagamalalamawy.github.io/task3/"
        },
        {
            src:img4,
            name:"Puzzle",
            info:"Designed by Html and Css",
            github:"https://github.com/EsraaGamalalamawy/puzzle",
            live:"https://esraagamalalamawy.github.io/puzzle/"
        },
        {
            src:img5,
            name:"Backman",
            info:"Designed by Html and Css",
            github:"https://github.com/EsraaGamalalamawy/backman",
            live:"https://esraagamalalamawy.github.io/backman/"
        },
        {
            src:img6,
            name:"Books Home",
            info:"Designed by Html and Css",
            github:"https://github.com/EsraaGamalalamawy/book-house",
            live:"https://esraagamalalamawy.github.io/book-house/"
        },
        {
            src:img7,
            name:"Template1",
            info:"Designed by Html and Css",
            github:"https://github.com/EsraaGamalalamawy/first-webPage",
            live:"https://esraagamalalamawy.github.io/first-webPage/#"
        },
        {
            src:img8,
            name:"Five Star",
            info:"Designed by Html and Css and Bootstrap",
            github:"https://github.com/EsraaGamalalamawy/five_star",
            live:"https://esraagamalalamawy.github.io/five_star/"
        },
        {
            src:img9,
            name:"Template3",
            info:"Designed by Html and Css",
            github:"https://github.com/EsraaGamalalamawy/project1",
            live:"https://esraagamalalamawy.github.io/project1/"
        },
        {
            src:img10,
            name:"Template2",
            info:"Designed by Html and Css",
            github:"https://github.com/EsraaGamalalamawy/template2",
            live:"https://esraagamalalamawy.github.io/template2/"
        },
        {
            src:img11,
            name:"Airline",
            info:"Designed by Html and Css and Bootstrap",
            github:"https://github.com/EsraaGamalalamawy/airline",
            live:"https://esraagamalalamawy.github.io/airline/"
        },
        {
            src:img12,
            name:"Smart Restaurant",
            info:"Designed by Html and Css and JavaScript",
            github:"https://github.com/EsraaGamalalamawy/smart-resturent",
            live:"https://esraagamalalamawy.github.io/smart-resturent/"
        },
        {
            src:img13,
            name:"Task",
            info:"Designed by React",
            github:"https://github.com/EsraaGamalalamawy/task",
            live:"https://esraagamalalamawy.github.io/task/"
        },
        {
            src:img14,
            name:"Task",
            info:"Designed by React",
            github:"https://github.com/EsraaGamalalamawy/task1",
            live:"https://esraagamalalamawy.github.io/task1/"
        },
        {
            src:img15,
            name:"Project",
            info:"Designed by React",
            github:"https://github.com/EsraaGamalalamawy/project_react",
            live:"https://esraagamalalamawy.github.io/project_react/"
        },
    ]
    const projects=[]
    const [action,setAction]=useState([...All])
    return (
        <div>
            <div className='buttons'>
                <button onClick={()=>{
                    setAction([...All]);
                    setStyleall(true)
                    setStylewhile(false)
                    setStyleproj(false)
                } } className={styleall? "button1":"button2"} >All</button>
                <button onClick={()=>{
                    setAction([...while_learning])
                    setStyleall(false)
                    setStylewhile(true)
                    setStyleproj(false)
                }} className={stylewhile? "button1":"button2"} >While learning</button>
                <button onClick={()=>{
                    setAction([...projects])
                    setStyleall(false)
                    setStylewhile(false)
                    setStyleproj(true)
                }} className={styleproj? "button1":"button2"} >Projects</button>
            </div>
            <div className='projcontent'>
                {action.map((ele)=>{
                    return(
                        <Project src={ele.src} name={ele.name} info={ele.info} github={ele.github} live={ele.live} />
                    )
                })}
            </div>
        </div>
    )
}

export default Proj
