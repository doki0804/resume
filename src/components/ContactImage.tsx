import React from "react";
import '../assets/styles/Contact.scss';
import profileImg from '../assets/images/남산 사진.jpg'

function ContactImage() {
  return (
    <div className="profile-image">
      <div className="img-exposure-area">
        <img src={profileImg} alt="Avatar" />
      </div>
    </div>
  );
}

export default ContactImage;
