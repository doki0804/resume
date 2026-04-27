import React from "react";
import Chip from '@mui/material/Chip';
import '../assets/styles/Skills.scss';

const labelsFirst = [
    "Test Case Design",
    "Integration Test",
    "Regression Test",
    "Release Test",
    "API Test",
    "Data Validation",
    "SQL",
    "Postman",
    "Charles Proxy",
    "Rest Assured"
];

const labelsSecond = [
    "Payment",
    "Settlement",
    "Batch",
    "SAP Validation",
    "OMS",
    "Fulfillment"
];

const labelsThird = [
    "Java",
    "Spring Boot",
    "JPA",
    "QueryDSL",
    "JWT",
    "JUnit",
    "Swagger",
    "RestDocs",
    "MySQL",
    "Oracle",
    "MongoDB",
    "Redis"
];

const labelsFourth = [
    "JIRA",
    "Confluence",
    "Git",
    "Agile",
    "TDD/BDD"
];

function Skills() {
    return (
    <section className="skills-section" id="skills">
        <div className="section-heading"><h1>Skills</h1></div>
        <div className="skills-container">
            <div className="skill">
                <h3>QA & Testing</h3>
                <div className="flex-chips">
                    {labelsFirst.map((label, index) => (
                        <Chip key={index} className='chip' label={label} />
                    ))}
                </div>
            </div>

            <div className="skill">
                <h3>Domain</h3>
                <div className="flex-chips">
                    {labelsSecond.map((label, index) => (
                        <Chip key={index} className='chip' label={label} />
                    ))}
                </div>
            </div>

            <div className="skill">
                <h3>Development & Database</h3>
                <div className="flex-chips">
                    {labelsThird.map((label, index) => (
                        <Chip key={index} className='chip' label={label} />
                    ))}
                </div>
            </div>
            
            <div className="skill">
                <h3>Tools & Process</h3>
                <div className="flex-chips">
                    {labelsFourth.map((label, index) => (
                        <Chip key={index} className='chip' label={label} />
                    ))}
                </div>
            </div>
        </div>
    </section>
    );
}

export default Skills;