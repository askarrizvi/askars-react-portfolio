import React from 'react'

// Resume function for Resume component
function Resume() {
    return (
        <div>
            <h1 id="resume">Resume</h1>
            <div className="my-5">
                <span>View my Resume: </span>
                <u><a href="https://docs.google.com/document/d/1yE9wfm5ujX8wsDuMRfiRwQ7QjQ2qL5t6/edit?usp=sharing&ouid=115489137251474452131&rtpof=true&sd=true" download>Askar's Resume</a></u>
            </div>
            <div>
                <h2>Front-End</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>Responsive Design</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>
            </div>
            <div className="my-2">
                <h2>Back-End</h2>
                <ul>
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL|Sequelize</li>
                    <li>MongoDB|Mongoose</li>
                    <li>REST</li>
                    <li>GraphQL</li>
                </ul>
            </div>
        </div>
    );
}

export default Resume;