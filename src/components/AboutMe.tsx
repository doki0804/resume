import React from "react";
import '../assets/styles/AboutMe.scss';

function AboutMe() {
    return(
    <section className="summary-section" id="aboutMe">
        <div className="section-heading"><h1>Professional Summary</h1></div>
        <p>QA 엔지니어로서 백엔드 개발 경험을 기반으로 품질 검증 역량을 갖춘 이원호입니다. TDD 기반 개발, Swagger/RestDoc API 문서화, ORM 테스트 경험을 통해 명확한 테스트 설계와 신뢰성 높은 QA 결과를 제공합니다. 현재 배달의민족 결제/정산 파트 QA 테스트를 수행하며, 기술 이해도와 분석력을 바탕으로 빠르게 문제를 발견하고 개선합니다.</p>
    </section>
    );
}

export default AboutMe;