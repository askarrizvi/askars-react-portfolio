import React, { useState } from 'react'

// Import GitHub icon
import { FaGithub } from 'react-icons/fa'

// Project function for the Project component
function Project() {

    // Array with the names, screenshot filenames, URLs of the deployed apps
    // and GitHub repo URLs
    const [projects] = useState([
        {
            name: 'HTML Portfolio',
            filename: 'htmlportfolio.png',
            url: 'https://askarrizvi.github.io/askar-portfolio/',
            github: 'https://github.com/askarrizvi/askar-portfolio'
        },
        {
            name: 'Budget Tracker',
            filename: 'budgettracker.png',
            url: 'https://safe-forest-82047.herokuapp.com/index.html',
            github: 'https://github.com/askarrizvi/budget-track'
        },
        {
            name: 'nAbl',
            filename: 'nabl.png',
            url: 'https://boiling-bastion-76402.herokuapp.com/',
            github: 'https://github.com/askarrizvi/n-abl'
        },
        {
            name: 'CMS Tech Blog',
            filename: 'cmstechblog.png',
            url: 'https://nameless-beyond-45887.herokuapp.com/',
            github: 'https://github.com/askarrizvi/cms-tech-blog'
        },
        {
            name: 'Note Taker',
            filename: 'notetaker.png',
            url: 'https://aqueous-ravine-18699.herokuapp.com/',
            github: 'https://github.com/askarrizvi/note-taker'
        },
        {
            name: 'PixaRadar',
            filename: 'pixaradar.png',
            url: 'https://askarrizvi.github.io/project1/',
            github: 'https://github.com/askarrizvi/project1'
        }
    ])

    // JSX
    // Use array map function to create an image of each project and 
    // show the name as a link to the deployed aqpp and the GitHub icon
    // as a link to the Github repo when the user hovers over the image
    return (
        <div className="flex-row justify-content-center">
            {projects.map((project) => (
                <div className="overlay">
                    <img
                        src={require(`../../assets/images/${project.filename}`).default}
                        className="image mx-1 my-2" />
                    <div className="middle">
                        <div class="text">
                            <a className="title" href={project.url} target='_blank'>{project.name}<br /><br /></a>
                            <a href={project.github} target='_blank'><FaGithub size={42} /></a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Project;