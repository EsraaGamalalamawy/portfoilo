import React ,{useEffect, useState, Fragment} from 'react'
import bg from "../images/istockphoto-1325007051-612x612.jpg"
import {FaSquareFacebook} from "react-icons/fa6"
import {FaGithub} from "react-icons/fa6"
import {FaLinkedinIn} from "react-icons/fa6"
import CV from "../images/Esraa_Gamal Alamawy_Resume_26-08-2023-16-22-45.pdf"
const Main = () => {
    const text=["F","r","o","n","t"," ","E","n","d"," ","D","e","v","e","l","o","p","r"]
    const [front,setFront]=useState([])
    const [x,setX]=useState(0)
    const [hid,setHid]=useState(true)
    const [even,setEven]=useState(true)
    const show=()=>{
        if(even){
            setX(x+0.5) 
            setFront([...front,text[x]])
            setHid(!hid)
            if(front.length>=35 || x === 18){
                setEven(false)
            }
        }
        if(!even){
            front.pop()
            setHid(!hid)
            if(front.length===0){
                setEven(true)
                setX(0)
            }
        }
    }
    useEffect(()=>{
        const time=setInterval(show,70)
        return ()=>{
            clearInterval(time);
        }
    })
    return (
        <Fragment>
            <div className='main' id='home'>
                <img src={bg} alt='background' className='background' />
                <h1 className='title'>Welcome All In My Portfoilo</h1>
                <div className='one'>
                        <a href='https://www.facebook.com/esraagamal.elamawy'><FaSquareFacebook /></a>
                        <a href="https://github.com/EsraaGamalalamawy"><FaGithub /></a>
                        <a href='https://www.linkedin.com/in/esraa-alamawy-023a6627b'><FaLinkedinIn/></a>
                    </div>
                <div className='content'>
                        <h3 className='me'>Hi! I'm Esraa Gamal Alamawy, {front.join("")}<span className={hid? "hidden": "show" }>|</span></h3>
                        <div>
                            <p>I am a web developer and have extensive experience in creating websites, My experience is creating and designing websites</p>
                            <div className='btn'>
                                <button className='btn1'>
                                    <a href={CV} download="">Download CV</a>
                                </button>
                                <button className='btn2' onClick={()=>{
                                    document.getElementById("contact").scrollIntoView({behavior:"smooth"});
                                }}>Contact Us</button>
                            </div>
                        </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Main;
