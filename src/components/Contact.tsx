import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import '../assets/styles/Contact.scss';
import profileImg from '../assets/images/남산 사진.jpg'

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="profile-image">
        <img src={profileImg} alt="Avatar" />
      </div>
      <div className="contact-info">
        <h1>이원호</h1>
        <p className="profile-title">QA Engineer / Backend QA Specialist</p>
        <div className="contact-list">
          <div><GitHubIcon /> <a href="https://github.com/doki0804" target="_blank" rel="noreferrer">github.com/doki0804</a></div>
          <div>Email: <a href="mailto:doki0804@naver.com">doki0804@naver.com</a></div>
          <div>Location: Seoul, South Korea</div>
        </div>
      </div>
    </section>
  );
}

export default Contact;