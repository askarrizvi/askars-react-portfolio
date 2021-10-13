import React, { useEffect } from 'react'
import coverImage from "../../assets/images/askarprofile.jpg";

function About() {
    return (
        <section className="my-1">
            <div className="d-flex justify-content-center">
            <h1 id="about">About Me</h1>
            </div>
            <div className="d-flex justify-content-center">
            <img src={coverImage} className="my-2" style={{ width: "20%" }} alt="cover" />
            </div>
            <p className="py-5">
                Hi! My name is Askar Rizvi.<br /> <br />
                I am currently a Software Developer at Ericsson, which is one of the largest telecom companies
                in the world.<br /> <br />
                For my education, I graduated from Carleton University in 2011 with a B.Eng in
                Software Engineering. <br /><br />
                I've been interested in web development since childhood. I built my first website
                when I was 11 years old, it was a fan page for the animated TV show Dragon Ball Z
                made entirely in HTML. With this website, I made $100 through ad revenue in less
                than a year after launch, which was a big amount of money to make for a preteen.
                Since my first website until now, I have been doing web development on and off, including
                for my final project at school and various other personal projects.
            </p>
        </section>
    );
}

export default About;