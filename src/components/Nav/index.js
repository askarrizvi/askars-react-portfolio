import React, { useEffect } from 'react'

function Nav(props) {
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
        <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    <span>About Me</span>
                </li>
                <li className="mx-2">
                    <span>Portfolio</span>
                </li>
                <li className="mx-2">
                    <span>Contact</span>
                </li>
                <li className="mx-2">
                    <span>Resume</span>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;