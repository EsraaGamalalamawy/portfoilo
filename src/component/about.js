import React from 'react'
import img from "../images/esraa.jpg"
import {FaBuffer} from "react-icons/fa6";
import {FaOdnoklassniki} from "react-icons/fa6";
import {FaPeopleGroup} from "react-icons/fa6";
import { Link } from 'react-scroll';

const About = () => {
    return (
        <div id='about'>
            <h1 className='title'>About Me</h1>
            <div className='center-item content'>
                <div className='image'>
                    <img src={img} alt='esraa'/>
                </div>
                <div className='content_inner'>
                    <div className='boxs'>
                        <div>
                            <FaOdnoklassniki/>
                            <h3>Eperience</h3>
                            <p>no-experience</p>
                        </div>
                        <div>
                            <FaPeopleGroup/>
                            <h3>Insert</h3>
                            <p>&lt;\&gt; Coding</p>
                        </div>
                        <div className='projects'>
                            <FaBuffer/>
                            <h3>Projects</h3>
                            <p>
                                <Link to="project" spy={true} smooth={true} offset={0} duration={500}>20+ Projects</Link>
                            </p>
                        </div>
                    </div>
                    <div className='info'>
                        <h3>Name: <span>Esraa Gamal Alamawy</span></h3>
                        <h3>Birth: <span>5/11/2000</span></h3>
                        <h3>Frelance: <span>Available</span></h3>
                        <h3>country: <span>Egypt</span></h3>
                        <h3>Phone: <span>01063302276</span></h3>
                        <h3>Language: <span>Arabic,English</span></h3>
                        <h3 className='mail'>Gmail: <span>esraa5112000esraa@gmail.com</span></h3>
                    </div>
                    <button className='btn2' onClick={()=>{
                        document.getElementById("contact").scrollIntoView({behavior:"smooth"});
                    }}>Contact Us</button>
                </div>
            </div>
        </div>
    )
}

export default About
