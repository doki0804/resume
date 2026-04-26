import React from "react";
import '../assets/styles/Certifications.scss';

function Certifications() {
    return(
    <section className="certifications-section" id="certifications">
        <div className="section-heading"><h1>자격증</h1></div>
        <div className="certification-item">
            <div className="item-header">
                <h3>ISTQB-FL</h3>
                <span>2025.07</span>
            </div>
            <p>자격증 취득</p>
        </div>
    </section>
    );
}

export default Certifications;
