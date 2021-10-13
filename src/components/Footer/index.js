import React, { useEffect } from 'react'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'

function Footer(props) {
    /*const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);*/


    return (
        <footer className="px-1 d-flex justify-content-center">
            <div className="px-4">
            <a href="https://github.com/askarrizvi/"><FaGithub size={42} /></a>
            </div>
            <div className="px-4">
            <a href="https://www.linkedin.com/in/askarrizvi/"><FaLinkedin size={42} /></a>
            </div>
            <div className="px-4">
            
            <a href="https://www.facebook.com/askar"><FaFacebook size={42} /></a>
            </div>
        </footer>
    );
}

export default Footer;