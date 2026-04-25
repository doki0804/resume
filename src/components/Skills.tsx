import React from "react";
import Chip from '@mui/material/Chip';
import '../assets/styles/Skills.scss';

const labelsFirst = [
    "JUnit",
    "Postman",
    "Rest Assured",
    "Charles Proxy",
    "Swagger",
    "RestDoc"
];

const labelsSecond = [
    "Manual Testing",
    "Automated Testing",
    "API Testing",
    "Performance Testing",
    "Security Testing",
    "Regression Testing",
    "Exploratory Testing"
];

const labelsThird = [
    "JIRA",
    "Confluence",
    "Git",
    "SQL"
];

function Skills() {
    return (
    <section className="skills-section" id="skills">
        <div className="section-heading"><h1>Skills</h1></div>
        <div className="skills-container">
            <div className="skill">
                <h3>Automation & API</h3>
                <div className="flex-chips">
                    {labelsFirst.map((label, index) => (
                        <Chip key={index} className='chip' label={label} />
                    ))}
                </div>
            </div>

            <div className="skill">
                <h3>Test Methodology</h3>
                <div className="flex-chips">
                    {labelsSecond.map((label, index) => (
                        <Chip key={index} className='chip' label={label} />
                    ))}
                </div>
            </div>

            <div className="skill">
                <h3>Tools & Process</h3>
                <div className="flex-chips">
                    {labelsThird.map((label, index) => (
                        <Chip key={index} className='chip' label={label} />
                    ))}
                </div>
            </div>
        </div>
    </section>
    );
}

export default Skills;