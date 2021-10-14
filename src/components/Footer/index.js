import React from 'react'

// Import social media icons
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'

// Function for footer component
function Footer(props) {

    // JSX
    return (
        <footer className="px-1 d-flex justify-content-center">
            <div className="px-4">
            <a href="https://github.com/askarrizvi/" target='_blank'><FaGithub size={42} /></a>
            </div>
            <div className="px-4">
            <a href="https://www.linkedin.com/in/askarrizvi/" target='_blank'><FaLinkedin size={42} /></a>
            </div>
            <div className="px-4">
            
            <a href="https://www.facebook.com/askar" target='_blank'><FaFacebook size={42} /></a>
            </div>
        </footer>
    );
}

export default Footer;