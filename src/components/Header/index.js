import React, { useEffect } from 'react'
import Nav from '../Nav'

function Header(props) {
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
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    Askar Rizvi
                </a>
            </h2>
            <Nav />
        </header>
    );
}

export default Header;