import React from 'react'

// Nav function for the Nav component 
function Nav(props) {
    // Assign the state of the selected page and the setters from props
    // that was passed from the header component
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

    // setHighlight function that takes a page name and sets
    // the proper page as true to be highlighted in the navigation bar
    function setHighlight(page) {
        setAboutSelected(false);
        setPortfolioSelected(false);
        setContactSelected(false);
        setResumeSelected(false);

        switch (page) {
            case "about":
                setAboutSelected(true);
                break;
            case "portfolio":
                setPortfolioSelected(true);
                break;
            case "contact":
                setContactSelected(true);
                break;
            case "resume":
                setResumeSelected(true);
                break;
        }
    }

    // JSX
    // The page that is currently selected will be highlighted through the CSS
    // rule for navActive
    return (
        <nav>
            <ul className="flex-row py-3">
                <li className={`mx-2 ${aboutSelected && 'navActive'}`}>
                    <span onClick={() => setHighlight("about")}>About Me</span>
                </li>
                <li className={`mx-2 ${portfolioSelected && 'navActive'}`}>
                    <span onClick={() => setHighlight("portfolio")}>Portfolio</span>
                </li>
                <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                    <span onClick={() => setHighlight("contact")}>Contact</span>
                </li>
                <li className={`mx-2 ${resumeSelected && 'navActive'}`}>
                    <span onClick={() => setHighlight("resume")}>Resume</span>
                </li>
            </ul>
        </nav >
    );
}

export default Nav;