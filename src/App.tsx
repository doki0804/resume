import React from "react";
import {
  Contact,
  AboutMe,
  Experience,
  Skills,
  Languages,
  Education,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';

function App() {
  return (
    <div className="cv-wrapper">
      <FadeIn transitionDuration={700}>
        <div className="cv-card">
          <Contact />
          <div className="cv-columns">
            <div className="left-panel">
              <Skills />
              <Languages />
              <Education />
            </div>
            <div className="right-panel">
              <AboutMe />
              <Experience />
            </div>
          </div>
        </div>
      </FadeIn>
      <Footer />
    </div>
  );
}

export default App;