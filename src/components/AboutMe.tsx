import React from "react";
import '../assets/styles/AboutMe.scss';

function AboutMe() {
  return (
    <section className="about-me">
      <h2>About Me</h2>

      <div className="about-intro">
        <p className="intro-title">
          백엔드 개발 경험을 바탕으로 서비스 구조와 데이터 흐름을 함께 보는 QA 엔지니어입니다.
        </p>

        <p className="intro-description">
          기능이 정상 동작하는지 확인하는 데서 그치지 않고, 데이터가 어떤 조건에서 생성되고 변경되는지,
          그 흐름 안에서 문제가 생길 수 있는 지점을 먼저 찾으려고 합니다.
        </p>
      </div>

      <div className="core-strength">
        <h3>Core Strength</h3>

        <ul>
          <li>백엔드 개발 경험 기반 API, DB, 비즈니스 로직 관점의 테스트 설계</li>
          <li>주문/결제/정산처럼 데이터 정합성이 중요한 도메인에 대한 이해</li>
          <li>요구사항을 테스트 케이스로 구체화하고 누락 시나리오를 보완하는 업무 방식</li>
          <li>이슈 발생 시 데이터 흐름을 따라가며 원인과 재현 조건을 정리하는 분석 역량</li>
        </ul>
      </div>

      <div className="about-detail">
        <p>
          이전에는 Java 백엔드 개발자로 OMS와 주문 데이터 가공 시스템 개발에 참여했습니다.
          Spring Boot, JPA, QueryDSL을 활용해 API와 데이터 처리 로직을 구현하며,
          시스템 내부 구조와 데이터 흐름을 이해하는 경험을 쌓았습니다.
        </p>

        <p>
          현재는 이 개발 경험을 QA 업무에 연결해, 화면 결과뿐 아니라 API 응답, DB 데이터,
          배치 이후 결과까지 함께 확인하며 서비스 품질을 검증하고 있습니다.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;