import React, { useEffect } from 'react'
import Nav from '../Nav'

function Header(props) {
    const {
        aboutSelected,
        setAboutSelected,
        portfolioSelected,
        setPortfolioSelected,
        contactSelected,
        setContactSelected,
        resumeSelected,
        setResumeSelected
    } = props;

    /*useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);*/


    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    Askar Rizvi
                </a>
            </h2>
            <Nav
                aboutSelected={aboutSelected}
                setAboutSelected={setAboutSelected}
                portfolioSelected={portfolioSelected}
                setPortfolioSelected={setPortfolioSelected}
                contactSelected={contactSelected}
                setContactSelected={setContactSelected}
                resumeSelected={resumeSelected}
                setResumeSelected={setResumeSelected}
            ></Nav>
        </header>
    );
}

export default Header;