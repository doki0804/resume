import React from "react";
import '../assets/styles/Education.scss';

function Education() {
    return(
    <section className="education-section" id="education">
        <div className="section-heading"><h1>Education</h1></div>
        <div className="education-item">
            <h3>컴퓨터공학과</h3>
            <p>대학교 졸업</p>
            <span>2018 - 2022</span>
        </div>
        <div className="education-item">
            <h3>QA 전문 교육</h3>
            <p>소프트웨어 테스팅 과정 수료</p>
            <span>2024</span>
        </div>
    </section>
    );
}

export default Education;