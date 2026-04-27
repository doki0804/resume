import React from "react";
import '../assets/styles/AboutMe.scss';

function AboutMe() {
    return(
    <section className="summary-section" id="aboutMe">
        <div className="section-heading"><h1>About Me</h1></div>
        <p>
            백엔드 개발을 하다가 현재는 결제/정산 도메인의 QA 엔지니어로 일하고 있는 이원호입니다.
            개발 경험 덕분에 기능이 화면에서 어떻게 보이는지만 보기보다, 시스템 내부에서 데이터가 어떤 흐름으로 생성되고 변경되는지를 먼저 확인하려고 합니다.
        </p>

        <p>
            현재는 배달의민족 결제/정산 파트에서 주문, 결제, 익일 배치, 일 단위·월 단위 정산, SAP 검증까지 이어지는 흐름을 기준으로 테스트를 수행하고 있습니다.
            금액, 수수료, 정산 기준처럼 실제 정산 결과에 영향을 주는 부분을 우선적으로 확인하고, 원천 데이터와 배치 이후 생성된 데이터를 비교하며 정합성을 검증합니다.
        </p>

        <p>
            문제가 발생했을 때는 DB 데이터를 직접 확인하며 흐름을 따라가고, 재현 조건을 정리해 같은 유형의 이슈가 반복되지 않도록 테스트 케이스를 보완하는 방식으로 일하고 있습니다.
            앞으로도 서비스 구조와 데이터 흐름을 이해하는 QA로서, 배포 전 품질 리스크를 줄이는 데 집중하고자 합니다.
        </p>
    </section>
    );
}

export default AboutMe;