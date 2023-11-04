import {React} from 'react'
import {FaHouseChimney} from "react-icons/fa6"
import {FaUserLarge} from "react-icons/fa6"
import {FaRegObjectUngroup} from "react-icons/fa6"
import {FaSpinner} from "react-icons/fa6"
import {Link} from "react-scroll"

function Header() {
    return (
            <div className='header'>
                <nav className='two'>
                    <Link to="home" spy={true} smooth={true} offset={0} duration={500}><FaHouseChimney/></Link>
                    <Link to="about" spy={true} smooth={true} offset={0} duration={500}><FaUserLarge/></Link>
                    <Link to="skills" spy={true} smooth={true} offset={0} duration={500}><FaSpinner/></Link>
                    <Link to="project" spy={true} smooth={true} offset={0} duration={500}><FaRegObjectUngroup/></Link>
                </nav>
            </div>
    )
}

export default Header;