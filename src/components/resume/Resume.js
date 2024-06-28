import React, { useEffect } from "react";
import "./Resume.css";

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const resumePDFLink = "https://drive.google.com/file/d/1XLWIPPTgbKP-C4zJyiu-qVo0fmvjz38G/preview";

  return (
    <div>
      {/* <a
        href="https://drive.google.com/uc?export=download&id=1XLWIPPTgbKP-C4zJyiu-qVo0fmvjz38G"
        className="download-button"
        download="Resume_AS.pdf"
      >
        <i className="fa fa-download"></i>Download
      </a> */}
      <div className="center-frame">
        <iframe
          src={resumePDFLink}
          title="Anay Sinhal Resume"
          style={{ width: "100%", height: "100vh", border: "none" }}
        ></iframe>
      </div>
    </div>
  );
};

export default Resume;
