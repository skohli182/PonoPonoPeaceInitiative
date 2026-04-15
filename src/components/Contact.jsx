//importing the styling as well as necessary imports for react this includes the photo located in a different directory 
import "./Contact.css";
import React, { useState, useRef } from "react";
import groupPhoto from "../images/groupPhoto.png";
import emailjs from "@emailjs/browser";

function Contact() {
  //useState allows us to capture/see when there is a change in text box values
  //this is done for all values in the form
  const [firstName, setFirstName] = useState("");
  const handleChangefN = (e) => setFirstName(e.target.value);

  const [lastName, setLastName] = useState("");
  const handleChangelN = (e) => setLastName(e.target.value);

  const [message, setMessage] = useState("");
  const handleChangeM = (e) => setMessage(e.target.value);

  const [email, setEmail] = useState("");
  const handleChangeE = (e) => setEmail(e.target.value);

  //additional styling change so that the button drops you to the bottom
  const formRef = useRef(null);
  const handleScrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  //this function checks to ensure that users have provided satisfactory information before proceeding to submit meaning none of the values are empty 
  //if empty this function alerts the user
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !firstName || !lastName || !message) {
      alert("Please fill out all required fields");
      return;
    }

    //template param used below to show which fields are being used (if adding fields add here and in the useState above)
    const templateParams = {
      first_name: firstName,
      last_name: lastName,
      from_email: email,
      message: message,
    };

    emailjs
      .send(
        "service_h0iy6cp",
        "template_yq1vewm",
        templateParams,
        "cSQoLKbkM2queSkc3"
      )
      .then(() => {
        alert("Message sent successfully!");
        setEmail("");
        setFirstName("");
        setLastName("");
        setMessage("");
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send message.");
      });
  };

  //this return goes through all of the styling components focused on mainly css
  return (
    <form className="full-page" onSubmit={handleSubmit}>
      <p className="main-text">Get in Touch!</p>

      <div className="contact-row">
        <div className="contact-text">
          <p className="semi-main-text">
            Thanks for your interest in Pono Pono Peace Initiative. Fill out
            the form below and we will get in touch with you!
          </p>
        </div>
        <div className="contact-image">
          <img src={groupPhoto} alt="Group Photo" />
        </div>
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

      {/* Contact form */}
      <div className="contact-form" ref={formRef}>
        <div className="form-fields">
          <p>Email*</p>
          <input type="text" value={email} onChange={handleChangeE} />

          <p>First Name*</p>
          <input type="text" value={firstName} onChange={handleChangefN} />

          <p>Last Name*</p>
          <input type="text" value={lastName} onChange={handleChangelN} />

          <p>Message*</p>
          <textarea value={message} onChange={handleChangeM} rows="5" />
        </div>

        <button type="submit" className="button">
          Submit!
        </button>
      </div>
    </form>
  );
}

//exports are needed in order to make this reachable by other files
export default Contact;