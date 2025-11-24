import "./Contact.css";
import React, { useState,useRef } from "react";
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
  const formRef = useRef(null);
  const handleScrollToForm = () => {
    formRef.current?.scrollIntoView({behavior:"smooth"});
  };
  const handleSubmit = () => {
    console.log("Form submitted:");
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName)
    console.log("Message", message);
  }
  return (
    <div className="full-page">
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
        <div className="centerB">
          <button className="button" onClick={handleScrollToForm}>
            Contact us!
          </button>
        </div>
        <div className="contact-form" ref={formRef}>
          <div className="form-fields">
            <p>First Name*</p>
            <input type="text" value={firstName} onChange={handleChangefN}/>
            <p>Last Name*</p>
            <input type="text" value={lastName} onChange={handleChangelN} />
            <p>Message*</p>
            <input type="text" value={message} onChange={handleChangeM} />
          </div>
          <button className="button" onClick={handleSubmit}>
            Submit!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
