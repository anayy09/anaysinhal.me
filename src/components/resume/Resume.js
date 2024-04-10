import React, { useEffect } from "react";
import "./Resume.css";
// Import the assets directly
import resumePDF from "./Resume_Anay_Sinhal.pdf";
import resumePage1 from "./Resume_Anay_Sinhal_01.jpg";
import resumePage2 from "./Resume_Anay_Sinhal_02.jpg";

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <a href={resumePDF} className="download-button" download="Resume_AS.pdf">
        <i className="fa fa-download"></i>Download
      </a>
      <div className="center-frame">
        <iframe
          src={resumePDF + "#toolbar=0"}
          type="application/pdf"
          title="Anay Sinhal Resume"
          style={{ width: "100%", height: "100vh", border: "none" }}
        ></iframe>
        <img src={resumePage1} className="mobile-image" alt="Resume Page 1" />
        <img src={resumePage2} className="mobile-image" alt="Resume Page 2" />
      </div>
    </div>
  );
};

export default Resume;
