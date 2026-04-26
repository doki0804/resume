import React from "react";
import '../assets/styles/AboutMe.scss';

function AboutMe() {
    return(
    <section className="summary-section" id="aboutMe">
        <div className="section-heading"><h1>About Me</h1></div>
        <p>QA 엔지니어로서 백엔드 개발 경험을 기반으로 품질 검증 역량을 갖춘 이원호입니다. TDD 기반 개발, Swagger/RestDoc API 문서화, 백앤드 아키텍쳐 설계, 단위 테스트 경험이 있으며 백엔드 개발 경험을 바탕으로 시스템 동작과 데이터 흐름을 빠르게 이해할 수 있습니다.</p>
        <p>현재 배달의민족 결제/정산 파트 QA 테스트를 수행하며, 기술 이해도와 분석력을 바탕으로 정확한 테스트 설계 및 빠르고 정확하게 문제를 발견하고 해결하는데 기여하고 있습니다.</p>
    </section>
    );
}

export default AboutMe;