import React from "react";
import { Link } from "react-router-dom";
import "../style/courseFinder.scss";
import Dropdown from "./dropdown";

const items = [
  {
    id: 1,
    value: (
      <a href="https://www.youtube.com/watch?v=Ke90Tje7VS0">
        {" "}
        React Begginers{" "}
      </a>
    ),
  },
  {
    id: 2,
    value: (
      <a href="https://www.youtube.com/watch?v=DLX62G4lc44&feature=youtu.be">
        {" "}
        Learn React JS - Full Course for Beginners - Tutorial 2019
      </a>
    ),
  },
  {
    id: 3,
    value: (
      <a href="https://www.youtube.com/watch?v=-cMqr9HpZ-Y&feature=youtu.be">
        {" "}
        React JS Tutorial for Beginners with Projects - Full Course in 12 Hours
        [2021]
      </a>
    ),
  },
];
const html = [
  {
    id: 1,
    value: (
      <a href="https://www.youtube.com/watch?v=pQN-pnXPaVg">
        HTML Full Course - Build a Website Tutorial
      </a>
    ),
  },
  {
    id: 2,
    value: (
      <a href="https://www.youtube.com/watch?v=88PXJAA6szs">
        {" "}
        HTML Tutorial For Beginners | Learn HTML In 30 Minutes | Designing A Web
        Page Using HTML | Edureka
      </a>
    ),
  },
  {
    id: 3,
    value: (
      <a href="https://www.youtube.com/watch?v=v4oN4DuR7YU">
        {" "}
        HTML Tutorial for Beginners
      </a>
    ),
  },
  {
    id: 4,
    value: (
      <a href="https://www.youtube.com/watch?v=1Rs2ND1ryYc">
        {" "}
        CSS Tutorial - Zero to Hero (Complete Course)
      </a>
    ),
  },
  {
    id: 5,
    value: (
      <a href="https://www.youtube.com/watch?v=wNX7lWzchow">
        {" "}
        CSS Tutorial for Beginners - Getting Started
      </a>
    ),
  },
  {
    id: 6,
    value: (
      <a href="https://www.youtube.com/watch?v=J35jug1uHzE">
        {" "}
        HTML CSS Tutorial for Beginners - Web Development Tutorials For
        Beginners
      </a>
    ),
  },
];
const javascript = [
  {
    id: 1,
    value: (
      <a href="https://www.youtube.com/watch?v=W6NZfCO5SIk">
        {" "}
        JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour [2020]
      </a>
    ),
  },
  {
    id: 2,
    value: (
      <a href="https://www.youtube.com/watch?v=Qqx_wzMmFeA">
        {" "}
        JavaScript Full Course | JavaScript Tutorial For Beginners | JavaScript
        Training | Edureka
      </a>
    ),
  },
  {
    id: 3,
    value: (
      <a href="https://www.youtube.com/watch?v=o1IaduQICO0">
        {" "}
        JavaScript Tutorial for Beginners - Full Course in 8 Hours [2020]
      </a>
    ),
  },
];
const Python = [
  {
    id: 1,
    value: (
      <a href="https://www.youtube.com/watch?v=kqtD5dpn9C8">
        Python Tutorial - Python for Beginners [2020]
      </a>
    ),
  },
  {
    id: 2,
    value: (
      <a href="https://www.youtube.com/watch?v=_uQrJ0TkZlc&vl=en">
        Python Tutorial - Python for Beginners [Full Course]
      </a>
    ),
  },
  {
    id: 3,
    value: (
      <a href="https://www.youtube.com/watch?v=rfscVS0vtbw">
        Learn Python - Full Course for Beginners [Tutorial]
      </a>
    ),
  },
];
const C = [
  {
    id: 1,
    value: (
      <a href="https://www.youtube.com/watch?v=KJgsSFOSQv0&feature=youtu.be">
        C Programming Tutorial for Beginners
      </a>
    ),
  },
  {
    id: 2,
    value: (
      <a href="https://www.youtube.com/watch?v=-CpG3oATGIs&feature=youtu.be">
        {" "}
        C Programming Tutorial | Learn C programming | C language
      </a>
    ),
  },
  {
    id: 3,
    value: (
      <a href="https://www.youtube.com/watch?v=Bz4MxDeEM6k&feature=youtu.be">
        {" "}
        C Programming All-in-One Tutorial Series (10 HOURS!)
      </a>
    ),
  },
  {
    id: 4,
    value: (
      <a href="https://www.youtube.com/watch?v=Umm1ZQ5ltZw&feature=youtu.be">
        {" "}
        C++ Tutorial For Beginners in Hindi | C++ Programming | C++ Full Course
        | Great Learning
      </a>
    ),
  },
  {
    id: 5,
    value: (
      <a href="https://www.youtube.com/watch?v=vLnPwxZdW4Y&feature=youtu.be">
        {" "}
        C++ Tutorial for Beginners - Full Course
      </a>
    ),
  },
  {
    id: 6,
    value: (
      <a href="https://www.youtube.com/watch?v=RBSGKlAvoiM&t=11060s">
        Data Structures Easy to Advanced Course - Full Tutorial from a Google
        Engineer
      </a>
    ),
  },
];
function CourseFinder() {
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}></h1>
      <Dropdown title="React course" items={items} multiSelect />
      <Dropdown title="HTML/CSS Course" items={html} multiSelect />
      <Dropdown title="JavaScript" items={javascript} multiSelect />
      <Dropdown title="Python" items={Python} multiSelect />
      <Dropdown title="C/C++ and Data Structure" items={C} multiSelect />
      <div className="back-to-chat">
      <Link to="/resume-data">
        <button className="form-link">Click here to see your resume</button>
      </Link>
      </div>
    </div>
  );
}

export default CourseFinder;
