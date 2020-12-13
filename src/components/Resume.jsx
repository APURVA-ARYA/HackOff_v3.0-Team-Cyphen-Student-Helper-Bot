import React from "react";
import ReactToPdf from "react-to-pdf";
const Resume = ({ resume }) => {
  const ref = React.createRef();
  return (
    <div>
      <ReactToPdf targetRef={ref} filename="div-blue.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate pdf</button>}
      </ReactToPdf>
      <div ref={ref}>
        <h1>{resume.name}</h1>
        <h1>{resume.profession}</h1>
        <h1>{resume.about}</h1>
        <h1>{resume.skills[0]}</h1>
        <h1>{resume.projects[0]}</h1>
        <h1>{resume.education}</h1>
        <h1>{}</h1>
      </div>
    </div>
  );
};

export default Resume;
