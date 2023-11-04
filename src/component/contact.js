import {React,useRef} from 'react'
import { FaLocationArrow } from "react-icons/fa6";
import Talk from './talk';
import { FaEnvelope } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa6";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef()
    const x1 = useRef()
    const x2 = useRef()
    const x3 = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_1fntedr', 'template_ihk4yv5', form.current, 'mJRtwjheTmbmNvWSX')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        x1.current.value=""
        x2.current.value=""
        x3.current.value="" 
            alert("your maessege is send")
    };
    const items=[
        {
            icon:<FaEnvelope/>,
            name:"Email",
            info:"esraa5112000esraa@gmail.com",
            link:"mailto:esraa5112000esraa@gmail.com"
        },
        {
            icon:<FaWhatsapp/>,
            name:"Whatsapp",
            info:"01063302276",
            link:"https://api.whatsapp.com/send?phone=+201063302276&text=hello7"
        },
        {
            icon:<FaFacebookMessenger/>,
            name:"Message",
            info:"Esraa Alamawy",
            link:"http://m.me/esraagamal.elamawy"
        },
    ]
    return (
        <div id='contact'>
            <h1 className='title'>Contac Us</h1>
            <div className='out'>
                <div className='left'>
                    <h2>Take to me</h2>
                    <div className='inner'>
                        {items.map((ele)=> <Talk icon={ele.icon} name={ele.name} info={ele.info} link={ele.link} />)}
                    </div>
                </div>
                <div className='right'>
                    <h2>Write me your project</h2>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type='text' placeholder='Insert your name' name="from_name" ref={x1} required />
                        <input type='email' placeholder='Insert your email' name="from_email" ref={x2} required />
                        <textarea placeholder='Insert your message' name="message" ref={x3} required ></textarea>
                        <button type='submit' className='btn2' value="Send" >Send Message <FaLocationArrow/> </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
