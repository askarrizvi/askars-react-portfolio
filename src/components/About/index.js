import React from 'react'
import coverImage from "../../assets/images/askarprofile.jpg";

// About component with bio
function About() {
    // JSX
    return (
        <section className="my-1">
            <div className="d-flex justify-content-center">
            <h1 id="about">About Me</h1>
            </div>
            <div className="d-flex justify-content-center">
            <img src={coverImage} className="my-2" style={{ width: "20%" }} alt="cover" />
            </div>
            <p className="py-5">
            Software Engineer with a passion in web development and web technologies in general. 
            I love building things and, more importantly, building things that people will enjoy 
            using and will put a smile on their faces. I built my first website when I was 11 
            years old, it was a Dragonball Z fansite and I made a shiny $100 from it through 
            ad revenue(a hundred bucks can get you a long way when you're 11). Since then, I have 
            worked on several projects, both personal and for my job or education, that involved 
            full stack web development. <br /> <br />
            
            I have just recently completed a 6 month Full Stack Web Development bootcamp through 
            Carleton University, in addition to the Bachelor of Engineering that I received from 
            Carleton University in 2011. I have been working in various positions at Ericsson since 
            I was a new grad, and am presently working as a 5G Developer specializing in Java test 
            automation. <br /> <br />
            
            I am always working on improving myself and expanding my knowledge, not just for work, 
            but for life in general. I love learning about new things and am always up for a challenge 
            since facing a challenge is the best way to learn and grow.
            </p>
        </section>
    );
}

export default About;