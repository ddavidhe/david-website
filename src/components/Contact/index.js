import AnimatedLetters from '../AnimatedLetters'
import './index.css'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import Loader from 'react-loaders';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFile } from '@fortawesome/free-solid-svg-icons'


function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_bye3o18", 
            "template_httyxhi",
            form.current,
            "aIPq14S5ThxGkDvLS"
            )
            .then(
                (result) => {
                    console.log("sent!");
                    alert('Email sent successfully!')
                    e.target.reset();
                },
                (error) => {
                    alert('Email failed to send, maybe try again? :(')
                    console.log("failed :(");
                }
            );
    };

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 3000)
      }, []);

    return (
    <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={"Contact Me".split("")}
                    index={15}/>
                </h1>
                <p>
                Fill out the form below to send me an email! Talk to me about anything related to my hobbies and tech in general, or maybe your next great idea! I'd love to hear it :)
                </p>
                <div className='contact-form'>
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className = "half">
                                <input type="text" name="user_name" placeholder="Name" required/>
                            </li>
                            <li className = "half">
                                <input type="email" name="user_email" placeholder="Email" required/>
                            </li>
                            <li>
                                <input placeholder="Subject" type="text" name="subject" required/>
                            </li>
                            <li>
                                <textarea placeholder="Message" name="message" required/>
                            </li>
                            <li>
                                <input type="submit" className='flat-button' value="SEND" required/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div> 
        <Loader type="ball-grid-pulse" />
    </>
    )

}


export default Contact