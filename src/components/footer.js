import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faInstagram, faGit } from '@fortawesome/free-brands-svg-icons'
import { footcontainer, footicon, footericon } from './navbar.module.css'
import { Link } from 'gatsby'
import { IconContext } from 'react-icons'

const Footer = () => {
    return (
        <div className={footcontainer}>

            {/* LinkedIn */}
            <div>
                <a href='https://linkedin.com/in/AqilSidek'>
                    <FontAwesomeIcon icon={faLinkedin} size='lg' />
                </a>
            </div>

            {/* Github */}
            <div>
                <a href='https://github/com/aqilsidek'>
                    <FontAwesomeIcon icon={faGithub} size='lg' />
                </a>
            </div>

            {/* E-mail */}
            <div>
                    <a href='mailto:aqil.sidek2@gmail.com'>
                        <FontAwesomeIcon icon={faEnvelope} size='lg' />
                    </a>
            </div>

            {/* Instagram */}
            <div>
                <a href='https://instagram.com/aqsidek'>
                    <FontAwesomeIcon icon={faInstagram} size='lg' />
                </a>
            </div>
        </div>
    )
}

export default Footer