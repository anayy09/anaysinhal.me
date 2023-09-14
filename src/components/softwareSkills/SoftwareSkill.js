import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skill, i) => (
            <li
              key={i}
              className="software-skill-inline"
              name={skill.skillName}
            >
              {skill.svgPath ? (
                <img
                  src={skill.svgPath.default} // Using `.default` to access the imported SVG
                  alt={skill.skillName}
                  className="software-skill-svg"
                />
              ) : (
                <i className={skill.fontAwesomeClassname}></i>
              )}
              <p>{skill.skillName}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}