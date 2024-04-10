import React, { useEffect } from "react";
import "./Resume.css";

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Update the paths to point to the public directory
  const resumePDF = "Resume_Anay_Sinhal.pdf";
  const resumePage1 = "Resume_Anay_Sinhal_01.jpg";
  const resumePage2 = "Resume_Anay_Sinhal_02.jpg";

  return (
    <div>
      <a
        href={process.env.PUBLIC_URL + "/" + resumePDF}
        className="download-button"
        download="Resume_AS.pdf"
      >
        <i className="fa fa-download"></i>Download
      </a>
      <div className="center-frame">
        <iframe
          src={process.env.PUBLIC_URL + "/" + resumePDF + "#toolbar=0"}
          type="application/pdf"
          title="Anay Sinhal Resume"
          style={{ width: "100%", height: "100vh", border: "none" }}
        ></iframe>
        <img
          src={process.env.PUBLIC_URL + "/" + resumePage1}
          className="mobile-image"
          alt="Resume Page 1"
        />
        <img
          src={process.env.PUBLIC_URL + "/" + resumePage2}
          className="mobile-image"
          alt="Resume Page 2"
        />
      </div>
    </div>
  );
};

export default Resume;
