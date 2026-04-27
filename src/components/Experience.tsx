import React from "react";
import '../assets/styles/Experience.scss'

function Timeline() {
  return (
    <section className="section experience">
      <h2>경력사항</h2>

      <div className="experience-item">
        <div className="experience-title-row">
          <div>
            <h3>티벨</h3>
            <p className="experience-role">
              우아한형제들 배달의민족 결제/정산 QA
            </p>
          </div>

          <p className="period">2025.07 - Present</p>
        </div>

        <p className="experience-description">
          우아한형제들 배달의민족 결제/정산 파트 QA를 협력사 소속으로 수행하고 있습니다.
          주문 이후 결제 데이터가 생성되고, 익일 배치와 일 단위·월 단위 배치를 거쳐
          정산 및 SAP 검증으로 이어지는 흐름을 기준으로 테스트를 설계하고 있습니다.
        </p>

        <ul className="experience-list">
          <li>애자일 스프린트 단위로 결제/정산 관련 과제의 요구사항을 분석하고 테스트 범위와 우선순위 정리</li>
          <li>주문 → 결제 → 익일 배치 → 정산 데이터 생성 → SAP 검증까지 이어지는 정산 프로세스 기반 테스트 케이스 설계</li>
          <li>통합 테스트, 리그레션 테스트, 릴리즈 테스트를 수행하며 기존 결제/정산 기능 영향도 검증</li>
          <li>금액, 수수료, 정산 기준 등 정산 결과에 영향을 주는 비즈니스 로직 중심 검증</li>
          <li>원천 데이터와 배치 이후 생성된 데이터를 비교해 정산 데이터 정합성 검증</li>
          <li>테스트 케이스 리뷰를 통해 누락 가능성이 있는 시나리오를 보완하고 반복 이슈 방지를 위한 케이스 개선</li>
          <li>오류 발생 시 데이터 처리 흐름을 확인해 재현 조건을 정리하고 이슈 원인 분석 지원</li>
        </ul>
      </div>

      <div className="experience-item">
        <div className="experience-title-row">
          <div>
            <h3>노리앤드</h3>
            <p className="experience-role">Java 백엔드 개발자</p>
          </div>

          <p className="period">2023.06 - 2024.08</p>
        </div>

        <p className="experience-description">
          Java 백엔드 개발자로 OMS와 주문 정보 가공 기반 fulfillment 시스템 개발에 참여했습니다.
          Spring Boot 기반 API를 설계하고 JPA, QueryDSL을 활용해 데이터를 다루며
          주문 데이터가 시스템 간에 전달되고 처리되는 흐름을 경험했습니다.
        </p>

        <ul className="experience-list">
          <li>Spring Boot 기반 OMS 아키텍처 설계 및 개발 참여</li>
          <li>JPA, QueryDSL을 활용한 데이터 모델링 및 비즈니스 쿼리 구현</li>
          <li>JWT 인증 기반 RESTful API 설계 및 구현</li>
          <li>TDD 기반 단위 테스트 작성 및 Swagger, RestDocs를 활용한 API 문서화</li>
          <li>주문 데이터 처리 경험을 바탕으로 현재 QA 업무에서 API, DB, 배치 데이터 흐름을 함께 고려한 검증 수행</li>
        </ul>
      </div>
    </section>
  );
}

export default Timeline;
