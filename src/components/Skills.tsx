import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCheckCircle, faCogs } from '@fortawesome/free-solid-svg-icons';
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

function Expertise() {
    return (
    <section className="skills-section" id="expertise">
        <div className="section-heading"><h1>Skills</h1></div>
        <div className="skills-container">
            <div className="skill">
                <FontAwesomeIcon icon={faSearch} size="3x"/>
                <h3>Automation & API</h3>
                <p>JUnit, Rest Assured, Postman 등을 사용해 API 자동화 테스트를 설계하고 실행했습니다.</p>
                <div className="flex-chips">
                    {labelsFirst.map((label, index) => (
                        <Chip key={index} className='chip' label={label} />
                    ))}
                </div>
            </div>

            <div className="skill">
                <FontAwesomeIcon icon={faCheckCircle} size="3x"/>
                <h3>Test Methodology</h3>
                <p>기능, 회귀, 보안 테스트와 탐색적 테스트를 통해 품질을 검증하고 잠재 이슈를 발견했습니다.</p>
                <div className="flex-chips">
                    {labelsSecond.map((label, index) => (
                        <Chip key={index} className='chip' label={label} />
                    ))}
                </div>
            </div>

            <div className="skill">
                <FontAwesomeIcon icon={faCogs} size="3x"/>
                <h3>Tools & Process</h3>
                <p>JIRA, Confluence, Git 기반 협업과 이슈 추적으로 QA 프로세스를 운영했습니다.</p>
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

export default Expertise;