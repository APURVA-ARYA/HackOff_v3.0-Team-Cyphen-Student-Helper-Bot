import React from "react";
import "../style/resumeData.css";
const ResumeData = () => {
  let resumeData = JSON.parse(localStorage.getItem("resumeData"));
  // console.log(resumeData[0]);
  return (
    <div className="resume">
      <div className="main">
        <h1 className="name"> {resumeData ? resumeData[0] : ``}</h1>
        <h1 className="profession"> {resumeData ? resumeData[1] : ``}</h1>
      </div>
      <div className="center-div">
        <div className="left-div">
          <h1 className="about">
            about
            <p>{resumeData ? resumeData[2] : ``}</p>
          </h1>
          <h1 className="skills">
            skills
            <p> {resumeData ? resumeData[3] : ``}</p>
          </h1>
        </div>
        <div className="right-div">
          <h1 className="projects">
            projects
            <p>{resumeData ? resumeData[4] : ``}</p>
          </h1>
          <h1 className="education"> {resumeData ? resumeData[5] : ``}</h1>
        </div>
      </div>
    </div>
  );
};

export default ResumeData;
