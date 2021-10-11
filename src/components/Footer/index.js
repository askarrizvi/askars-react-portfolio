import React, { useEffect } from 'react'

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
        <footer>
            <p>Author: Hege Refsnes</p>
            <p><a href="mailto:hege@example.com">hege@example.com</a></p>
        </footer>
    );
}

export default Footer;