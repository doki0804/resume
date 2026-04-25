import React from "react";
import '../assets/styles/Languages.scss';

function Languages() {
    return(
    <section className="languages-section" id="languages">
        <div className="section-heading"><h1>Languages</h1></div>
        <div className="language-item">
            <p>Korean - Native</p>
        </div>
        <div className="language-item">
            <p>English - Intermediate</p>
        </div>
    </section>
    );
}

export default Languages;