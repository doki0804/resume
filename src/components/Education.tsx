import React from "react";
import '../assets/styles/Education.scss';

function Education() {
    return(
    <section className="education-section" id="education">
        <div className="section-heading"><h1>Education</h1></div>
        <div className="education-item">
            <div className="item-header">
                <h3>건국대학교</h3>
                <span>2009.03 - 2023.05</span>
            </div>
            <p>전자공학부(자퇴)</p>
        </div>
        <div className="education-item">
            <div className="item-header">
                <h3>ITWILL</h3>
                <span>2022.11 - 2023.04</span>
            </div>
            <p>Java 백엔드 개발자 양성 과정 수료</p>
        </div>
        <div className="education-item">
            <div className="item-header">
                <h3>서울시 QA 양성 교육</h3>
                <span>2025.05 - 2025.07</span>
            </div>
            <p>소프트웨어 테스팅 과정 수료</p>
        </div>
    </section>
    );
}

export default Education;