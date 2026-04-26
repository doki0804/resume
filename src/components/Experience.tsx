import React from "react";
import '../assets/styles/Experience.scss'

function Timeline() {
  return (
    <section className="experience-section" id="history">
      <div className="section-heading"><h1>경력사항</h1></div>
      <div className="experience-item">
        <div className="experience-header">
          <h3>노리앤드</h3>
          <span>2023.6 - 2024.8</span>
        </div>
        <p>JAVA 백엔드 개발자로 OMS(주문관리시스템) 및 주문정보 가공 기반 fulfillment 시스템 개발에 참여하였습니다. TDD를 적용하여 JPA, QueryDSL ORM, JWT 인증 기반 RESTful API를 설계하고 Swagger/RestDoc을 활용해 API 문서를 작성했습니다.</p>
        <ul>
          <li>Spring boot 기반 OMS 아키텍쳐 설계 및 개발</li>
          <li>JPA, QueryDSL ORM을 활용한 데이터 모델링과 서버사이드 DB 컨트롤</li>
          <li>JWT 인증 기반 RESTful API 설계 및 구현</li>
        </ul>
      </div>
      <div className="experience-item">
        <div className="experience-header">
          <h3>티벨</h3>
          <span>2025.7 - Present</span>
        </div>
        <p>우아한형제들 배달의민족 결제/정산 파트 QA 테스트를 협력사에서 수행하고 있으며, 결제/정산 프로세스의 정확성을 검증하고 사용자 경험 품질을 높이고 있습니다.</p>
        <ul>
          <li>결제 및 정산 워크플로우를 중심으로 애자일 프로세스 기반 스프린트별 테스트를 설계</li>
          <li>오류 재현과 이슈 원인 분석을 통해 품질 개선에 기여</li>
        </ul>
      </div>
    </section>
  );
}

export default Timeline;
