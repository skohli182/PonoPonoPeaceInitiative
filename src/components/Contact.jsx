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
  const [email, setEmail] = useState("");
  const handleChangeE = (e) => {
    setEmail(e.target.value);
  }
  const formRef = useRef(null);
  const handleScrollToForm = () => {
    formRef.current?.scrollIntoView({behavior:"smooth"});
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!email || !firstName || !lastName || !message)
    {
      alert("Please fill out all required fields");
      return;
    }
    console.log("Form submitted:");
    console.log("Email:", email);
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName)
    console.log("Message", message);
  }
  return (
    <form className="full-page" onSubmit={handleSubmit}>
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
          <button type="button" className="button" onClick={handleScrollToForm}>
            Contact us!
          </button>
        </div>
        <div className="contact-form" ref={formRef}>
          <div className="form-fields">
            <p>Email*</p>
            <input type="text" value={email} onChange={handleChangeE}/>
            <p>First Name*</p>
            <input type="text" value={firstName} onChange={handleChangefN}/>
            <p>Last Name*</p>
            <input type="text" value={lastName} onChange={handleChangelN} />
            <p>Message*</p>
            <textarea
              value={message}
              onChange={handleChangeM}
              rows="5"
            />
          </div>
          <button type="submit" className="button">
            Submit!
          </button>
        </div>
      </div>
    </form>
  );
}

export default Contact;
