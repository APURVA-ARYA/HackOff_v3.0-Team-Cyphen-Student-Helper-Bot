import React from "react";
import "../style/resumeData.css";
import ReactToPdf from "react-to-pdf";
const ResumeData = () => {
  let resumeData = JSON.parse(localStorage.getItem("resumeData"));
  // console.log(resumeData[0]);
  const ref = React.createRef();
  const options = {
    orientation: "landscape",
    unit: "in",
  };
  return (
    <div>
      <div ref={ref} className="resume">
        <div className="resume-header">
          <h1>{resumeData ? resumeData[0] : ``}</h1>
          <h1>{resumeData ? resumeData[1] : ``}</h1>
        </div>
        <div className="resume-body">
          <div className="resume-left">
            <h1>Skills</h1>
            <p>{resumeData ? resumeData[2] : ``}</p>
            <h1>Education</h1>

            <p>{resumeData ? resumeData[3] : ``}</p>
          </div>
          <div className="resume-right">
            <h1>About</h1>
            <p>{resumeData ? resumeData[4] : ``}</p>
            <h1>Projects</h1>
            <p>{resumeData ? resumeData[5] : ``}</p>
          </div>
        </div>
      </div>
      <div className="resume-button">
        <ReactToPdf
          targetRef={ref}
          filename="div-blue.pdf"
          options={options}
          x={0.5}
          y={0.5}
          scale={0.8}>
          {({ toPdf }) => <button onClick={toPdf}>Generate pdf</button>}
        </ReactToPdf>
      </div>
    </div>
  );
};

export default ResumeData;

// {resumeData ? resumeData[0] : ``}
