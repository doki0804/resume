import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCheckCircle, faCogs } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Selenium",
    "JUnit",
    "TestNG",
    "Postman",
    "JMeter",
    "Appium",
    "Cucumber",
    "Rest Assured",
    "SoapUI",
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
    "Jenkins",
    "Docker",
    "Kubernetes",
    "Agile/Scrum",
    "SQL"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faSearch} size="3x"/>
                    <h3>Automated Testing Tools</h3>
                    <p>다양한 자동화 테스트 도구를 활용하여 효율적이고 신뢰할 수 있는 테스트 스크립트를 작성할 수 있습니다.
                       Selenium, JUnit, TestNG 등을 사용하여 웹 애플리케이션과 API의 자동화 테스트를 수행하며,
                       CI/CD 파이프라인에 통합하여 지속적인 품질 보장을 지원합니다. 개발자로서의 JAVA 백앤드 경험을 바탕으로 TDD 방식의 개발과 API 테스트 및 ORM 관련 테스트를 효과적으로 수행할 수 있습니다.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCheckCircle} size="3x"/>
                    <h3>Testing Methodologies</h3>
                    <p> 수동 테스트부터 자동화 테스트까지 다양한 테스트 방법론을 적용하여 소프트웨어의 품질을 보장합니다.
                        기능 테스트, 성능 테스트, 보안 테스트 등 다양한 측면에서 철저한 검증을 수행하며,
                        회귀 테스트와 탐색적 테스트를 통해 잠재적 문제를 사전에 발견합니다.
                        <br/>
                        <br/>
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCogs} size="3x"/>
                    <h3>QA Tools and Processes</h3>
                    <p>프로젝트 관리 도구와 협업 툴을 활용하여 효율적인 QA 프로세스를 구축합니다.
                    JIRA, Confluence를 사용하여 이슈 추적과 문서화를 수행하며, Agile/Scrum 방법론을 적용하여
                    팀과의 협업을 강화하고, 지속적인 개선을 통해 품질 향상을 도모합니다.                   
                    <br/>
                    <br/>
                    <br/>
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    );
}

export default Expertise;