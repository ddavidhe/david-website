import { NavLink } from 'react-router-dom'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faEye, faBars, faClose} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'


function Sidebar() {
    const [showNav, setShowNav] = useState(false);

    return (
    <div className='nav-bar'>
        <nav className={showNav ? 'mobile-show' : ''}>
            <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" to ="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>

            <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" className = "about-link" to ="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
 
            <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" className = "portfolio-link" to ="/portfolio">
                <FontAwesomeIcon icon={faEye} color="#4d4d4e" />
            </NavLink>

            <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" className = "contact-link" to ="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>

            <FontAwesomeIcon onClick={() => setShowNav(false)} icon={faClose} color="#4d4d4e" size="3x" className='close-icon'/>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/ddavid-he/'>
                    <FontAwesomeIcon icon = {faLinkedin}/>
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/ddavidhe/'>
                    <FontAwesomeIcon icon = {faGithub}/>
                </a>
            </li>
        </ul>
        <FontAwesomeIcon onClick={() => setShowNav(true)} icon={faBars} color="#4d4d4e" size="3x" className='hamburger-icon'/>
    </div>
    )
}

export default Sidebar