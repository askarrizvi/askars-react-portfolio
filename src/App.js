import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Resume from './components/Resume'
import background from './assets/images/foster-lake.jpg'

function App() {
  const [aboutSelected, setAboutSelected] = useState(true);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);

  const styles = {
    header: {
      backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.6) 100%), url(${background})`,
      height: '120vh',
      width: '100vw',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
      //no-repeat center center fixed
    },

    //style="background-image: linear-gradient(to bottom, rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.6) 100%), url(https://placeimg.com/1000/480/nature)"
  
    content: {
      height: '100%',
      width: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    }
  }

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
