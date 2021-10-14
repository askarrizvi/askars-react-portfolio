import React, { useState } from 'react';
import './App.css';

// Import the components that will be used in this app
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Resume from './components/Resume'

// Import the background image
import background from './assets/images/foster-lake.jpg'

function App() {

  // Set up the states and their setters with useState to track which page
  // the user has selected
  const [aboutSelected, setAboutSelected] = useState(true);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);

  // Setup the styles that will be used for the background image
  const styles = {
    header: {
      backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.6) 100%), url(${background})`,
      height: '120vh',
      width: '100vw',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    },
  
    content: {
      height: '100%',
      width: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    }
  }

  // JSX
  return (
    <div className="bg-cover text-white" style={styles.header} >
      <Header
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
      ></Header>

      <main>

        {aboutSelected &&
          <About />
        }
        {portfolioSelected &&
          <Portfolio />
        }
        {contactSelected &&
          <Contact />
        }
        {resumeSelected &&
          <Resume />
        }


      </main>
      <Footer />

    </div>

  );
}

export default App;
