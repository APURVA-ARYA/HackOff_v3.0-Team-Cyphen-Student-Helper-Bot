import React from "react";
import "../style/resumeData.css";
const ResumeData = () => {
  let resumeData = JSON.parse(localStorage.getItem("resumeData"));
  // console.log(resumeData[0]);
  return (
    <div className="resume">
      {resumeData ? resumeData[0] : ``}
      <div className="main">
        <h1 className="name">name</h1>
        <h1 className="profession">profession</h1>
      </div>
      <div className="center-div">
        <div className="left-div">
          <h1 className="about">
            about{" "}
            <p>
              ndcndjcdsc dcndsjcndsjcd kndc jdsjdc jdckjdsds cnkdcndndcd
              kncwdcdc kwncojdcc
            </p>
          </h1>
          <h1 className="skills">
            skills
            <p>jbdibdd djbcddc ncjncrc ncjc njcrc inrjec nircrc ncwc nrwcrc</p>
          </h1>
        </div>
        <div className="right-div">
          <h1 className="projects">
            projects
            <p>
              cbcbdcbduuc iwr wihehdje eedkn iei c eeefiea si p jefieiae e
              export default ejbeihcejef ejehj ej e echeh ceh
              cweihceihiewchdhaehifie ifieef;
            </p>
          </h1>
          <h1 className="education">education</h1>
        </div>
      </div>
    </div>
  );
};

export default ResumeData;
