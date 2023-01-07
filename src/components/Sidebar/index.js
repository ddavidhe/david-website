import { NavLink } from 'react-router-dom'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faEye} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


function Sidebar() {

    return (
    <div className='nav-bar'>
        <nav>
            <NavLink exact="true" activeclassname="active" to ="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>

            <NavLink exact="true" activeclassname="active" className = "about-link" to ="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>

            <NavLink exact="true" activeclassname="active" className = "mywork-link" to ="/mywork">
                <FontAwesomeIcon icon={faEye} color="#4d4d4e" />
            </NavLink>

            <NavLink exact="true" activeclassname="active" className = "contact-link" to ="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
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
    </div>
    )
}

export default Sidebar