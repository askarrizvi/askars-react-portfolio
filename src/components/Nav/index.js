import React, { useEffect } from 'react'

function Nav(props) {
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