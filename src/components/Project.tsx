import React from "react";
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <h2>OMS 및 Fulfillment System 개발/QA</h2>
                <p>JAVA 백앤드 개발자로 참여하여 JPA, QueryDSL ORM, JWT 인증 RESTful API 설계를 담당. 이후 QA 관점에서 시스템의 안정성과 품질을 보장하는 테스트를 수행, 개발 경험을 통해 효과적인 테스트 케이스 설계 및 버그 사전 발견에 기여</p>
            </div>
            <div className="project">
                <h2>배달의민족 결제/정산 QA</h2>
                <p>배달의민족 서비스의 결제 및 정산 모듈에 대한 협력사 QA 테스트를 수행, 결제 프로세스의 정확성과 보안성을 확인</p>
            </div>
        </div>
    </div>
    );
}

export default Project;