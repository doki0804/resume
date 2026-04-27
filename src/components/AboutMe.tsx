import React from "react";
import '../assets/styles/AboutMe.scss';

function AboutMe() {
  return (
    <section className="section about-me">
      <h2>About Me</h2>

      <div className="about-card">
        <p className="intro-title">
          백엔드 개발 경험을 바탕으로 서비스 구조와 데이터 흐름을 함께 보는 QA 엔지니어입니다.
        </p>

        <div className="about-detail">
          <p>
            이전에는 Java 백엔드 개발자로 OMS와 주문 데이터 가공 시스템 개발에 참여했습니다.
            API를 설계하고 데이터를 다루는 과정에서, 기능 하나가 여러 시스템과 데이터 흐름 안에서 어떻게 동작하는지 이해하는 경험을 쌓았습니다.
          </p>

          <p>
            현재는 이 경험을 QA 업무에 연결해 테스트를 설계하고 있습니다.
            화면에서 보이는 결과만 확인하기보다 API 응답, DB 데이터, 배치 이후 생성된 결과까지 함께 확인하며 문제가 생길 수 있는 지점을 찾으려고 합니다.
          </p>

          <p>
            요구사항을 테스트 케이스로 옮길 때는 단순 정상 케이스보다 예외 상황과 영향 범위를 먼저 생각하는 편입니다.
            이슈가 발생하면 데이터를 따라가며 재현 조건을 정리하고, 같은 유형의 문제가 반복되지 않도록 테스트 케이스를 보완하고 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;