import React from 'react'

//Import the Navigation(Nav) component that will be embedded in the header
import Nav from '../Nav'

// Header function for the header component
function Header(props) {
    // Assign the state of the selected page and the setters from props
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

    // JSX
    // Pass the Nav component the states and setters we assigned from props
    return (
        <header className="flex-row px-2 navbar-custom">
            <h2>
                <a className="navbar-brand" data-testid="link" href="/">
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