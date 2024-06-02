import React, { useContext, useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.scss";
import { contactInfo } from "../../portfolio";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { Fade } from "react-reveal";
import emaillottie from "../../assets/lottie/mail";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { isDark } = useContext(StyleContext);

  const form = useRef();

  useEffect(() => {
    emailjs.init("_WVNOma-APMkcwZBS");
  }, []);

  const sendEmail = (e) => {
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

    const btn = document.getElementById("button");
    btn.value = "Sending...";

    const serviceID = "default_service";
    const templateID = "template_lgkonqp";

    emailjs.sendForm(serviceID, templateID, form.current).then(
      () => {
        btn.value = "Send";
        // alert("Sent!");
        setIsSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
      },
      (err) => {
        btn.value = "Send";
        alert(JSON.stringify(err));
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
                      <label htmlFor="user_name">Name</label>
                      <input
                        type="text"
                        name="user_name"
                        id="user_name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="contact-email">
                      <label htmlFor="user_email">Email</label>
                      <input
                        type="email"
                        name="user_email"
                        id="user_email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="contact-message">
                      <label htmlFor="message">Message</label>
                      <textarea
                        name="message"
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>
                    <div className="contact-send">
                      <input type="submit" id="button" value="Send" />
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
