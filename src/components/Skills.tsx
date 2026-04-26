import React from "react";
import Chip from '@mui/material/Chip';
import '../assets/styles/Skills.scss';

const labelsFirst = [
    "Java",
    "JavaScript",
    "Spring Boot",
    "JPA",
    "QueryDSL",
    "JWT",
    "MySQL",
    "MongoDB",
    "Oracle",
    "Redis",
    "SQL"
];

const labelsSecond = [
    "Postman",
    "JUnit",
    "Charles Proxy",
    "Swagger",
    "RestDoc",
    "Rest Assured"
];

const labelsThird = [
    "JIRA",
    "Confluence",
    "Git",
    "TDD/BDD",
    "Agile"
];

function Skills() {
    return (
    <section className="skills-section" id="skills">
        <div className="section-heading"><h1>Skills</h1></div>
        <div className="skills-container">
            <div className="skill">
                <h3>Development & Database</h3>
                <div className="flex-chips">
                    {labelsFirst.map((label, index) => (
                        <Chip key={index} className='chip' label={label} />
                    ))}
                </div>
            </div>

            <div className="skill">
                <h3>Testing</h3>
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