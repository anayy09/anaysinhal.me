import React, {useContext, useRef, useState} from "react";
import emailjs from "@emailjs/browser";
import "./Contact.scss";
import {contactInfo} from "../../portfolio";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {Fade} from "react-reveal";
import emaillottie from "../../assets/lottie/mail";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {isDark} = useContext(StyleContext);

  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    // Form validation
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    emailjs
      .sendForm(
        "service_j92dcl3",
        "template_lgkonqp",
        form.current,
        "s9-qtKo5GbHojHOfg"
      )
      .then(
        result => {
          console.log(result.text);
          console.log("Message Sent");
          setIsSubmitted(true);
          setName("");
          setEmail("");
          setMessage("");
        },
        error => {
          console.log(error.text);
        }
      );
  };

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            <p
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              {contactInfo.subtitle}
            </p>

            <div
              className={
                isDark ? "dark-mode contact-text-div" : "contact-text-div"
              }
            >
              <SocialMedia />
              <br />
              <br />
              <span className="contact-label">Email Me at:</span>
              <br />
              <br />
              <a
                className="contact-detail-email"
                href={"mailto:" + contactInfo.email_address}
              >
                {contactInfo.email_address}
              </a>
              <br />
              <br />
              <span className="contact-label">Or Message Me Here:</span>
              <br />
              <br />
              {isSubmitted ? (
                <p className="submission-message">
                  I'll get back to you soon 😃
                </p>
              ) : (
                <div className="contact-form">
                  <form ref={form} onSubmit={sendEmail}>
                    <div className="contact-name">
                      <label>Name</label>
                      <input
                        type="text"
                        name="user_name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                      />
                    </div>
                    <div className="contact-email">
                      <label>Email</label>
                      <input
                        type="email"
                        name="user_email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="contact-message">
                      <label>Message</label>
                      <textarea
                        name="message"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                      />
                    </div>
                    <div className="contact-send">
                      <input type="submit" value="Send" />
                    </div>
                  </form>
                </div>
              )}
              <div className="contact-myimage-mobile">
                <img
                  alt="man sitting on table"
                  src={require("../../assets/images/myimage.jpeg")}
                ></img>
              </div>
            </div>
          </div>
          <div className="contact-image-div">
            <div className="contact-myimage">
              <img
                alt="man sitting on table"
                src={require("../../assets/images/myimage.jpeg")}
              ></img>
            </div>
            <div className="contact-lottie">
              <DisplayLottie animationData={emaillottie} />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
