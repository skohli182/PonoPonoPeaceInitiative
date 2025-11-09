import "./Contact.css";
import React, { useState } from "react";
import groupPhoto from "../images/groupPhoto.png";

function Contact() {
  const [firstName, setFirstName] = useState("");
  const handleChangefN = (e) => {
    setFirstName(e.target.value);
  };
  const [lastName, setLastName] = useState("");
  const handleChangelN = (e) => {
    setLastName(e.target.value);
  };
  const [message, setMessage] = useState("");
  const handleChangeM = (e) => {
    setMessage(e.target.value);
  };
  return (
    <div className="full-page" style={{ overflow: "scroll" }}>
      <div>
        <p className="main-text">Get in Touch!</p>
        <div className="contact-row">
          <p className="semi-main-text">
            Thanks for your interest in Pono Pono Peace Initiative. Fill out the
            form below and we will get in touch with you!
          </p>
          <p className="contact-image">
            <img src={groupPhoto} alt="Group Photo" />
          </p>
        </div>
        <p className="semi-semi-main-text">
          Please fill out the information below so we can direct you to the
          right person!
        </p>
        <button className="button">Contact us!</button>
        <p>First Name*</p>
        <div className="input-boxes">
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <p>Last Name*</p>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <p>Message*</p>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
