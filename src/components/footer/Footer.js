import React, { useContext } from "react";
import "./Footer.scss";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const { isDark } = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div" style={{ textAlign: "center" }}>
        <p
          className={isDark ? "dark-mode footer-text small-text" : "footer-text small-text"}
        >
          {emoji("Developed with ❤️ by Anay on ")}
          <a
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React.js
          </a>
        </p>
        <p>
          "When I'm not coding, you can find me stargazing, plotting my next
          travel destination, or delving into the fascinating world of
          geography. I believe in blending the art of programming with the
          wonders of our universe, making every line of code a journey rather
          than a task."
        </p>
      </div>
    </Fade>
  );
}
