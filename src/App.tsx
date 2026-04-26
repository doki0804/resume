import React from "react";
import {
  AboutMe,
  Experience,
  Skills,
  Education,
  Certifications,
} from "./components";
import ContactImage from "./components/ContactImage";
import ContactInfo from "./components/ContactInfo";
import FadeIn from './components/FadeIn';
import './index.scss';

function App() {
  return (
    <div className="cv-wrapper">
      <FadeIn transitionDuration={700}>
        <div className="cv-card">
          <div className="cv-layout">
            <div className="cv-columns-top">
              <ContactImage />
              <ContactInfo />
            </div>
            <div className="cv-columns-bottom">
              <div className="left-panel">
                <Skills />
                <Education />
                <Certifications />
              </div>
              <div className="right-panel">
                <AboutMe />
                <Experience />
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

export default App;
