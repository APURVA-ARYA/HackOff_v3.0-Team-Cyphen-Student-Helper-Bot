import React from "react";
import { Link } from "react-router-dom";

const LinkToResume = ({ resumeData }) => {
  return <div>{resumeData ? <Link to="/resume-data" /> : ``}</div>;
};

export default LinkToResume;
