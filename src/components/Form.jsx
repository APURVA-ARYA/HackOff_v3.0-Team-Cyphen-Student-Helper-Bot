import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/form.css";
import ChatBot from "react-simple-chatbot";

export const Form = () => {
  // const [name, setName] = useState(``);
  // const [profession, setProfession] = useState(``);
  // const [about, setAbout] = useState(``);
  // const [skills, setProfession] = useState(``);
  // const [projects, setProfession] = useState(``);
  // const [education, setProfession] = useState(``);
  // const [resume, setResume] = useState({
  //   name: ``,
  //   profession: ``,
  //   about: ``,
  //   skills: [],
  //   projects: [],
  //   education: ``,
  // });

  const names = ["Angela", "Woebot", "CleverBot", "Eliza", "Poncho"];
  let randomName = names[Math.floor(Math.random() * names.length)];
  const handleEnd = ({ steps, values }) => {
    localStorage.clear();
    // console.log(steps);
    // console.log(values);
    // console.log(`${values[0]}`);

    // setResume({
    //   name: `${values[0]}`,
    //   profession: `${values[1]}`,
    //   about: `${values[2]}`,
    //   skills: [`${values[3]}`],
    //   projects: [`${values[4]}`],
    //   education: `${values[5]}`,
    // });
    localStorage.setItem("resumeData", JSON.stringify(values));
  };

  return (
    <div className="chatbot-main-div">
      <img
        className="avatar"
        src="https://media.istockphoto.com/vectors/cute-smiling-robot-chat-bot-say-hivector-modern-flat-cartoon-voice-vector-id1073076312?b=1&k=6&m=1073076312&s=612x612&w=0&h=MLhESI7N3cyGo-Flb36_42zPyL5q0SvmTRS0MF4lZiU="
        alt=""
      />
      {/* <Avatar
        sizes="100px"
        src="https://media.istockphoto.com/vectors/cute-smiling-robot-chat-bot-say-hivector-modern-flat-cartoon-voice-vector-id1073076312?b=1&k=6&m=1073076312&s=612x612&w=0&h=MLhESI7N3cyGo-Flb36_42zPyL5q0SvmTRS0MF4lZiU="
      /> */}

      <ChatBot
        handleEnd={handleEnd}
        recognitionEnable={true}
        userAvatar="https://alltop9.com/wp-content/uploads/2019/09/i6.png"
        width="500px"
        speechSynthesis={{ enable: true, lang: "en" }}
        steps={[
          {
            id: "welcome",
            message: `Hello there! I am ${randomName} your helper chatBot.`,
            trigger: "1",
          },
          {
            id: "1",
            message: "What is your name?",
            trigger: "name",
          },
          {
            id: "name",
            user: true,
            trigger: "3",
          },
          {
            id: "3",
            message: "Hi {previousValue}, nice to meet you!",
            trigger: "4",
          },
          {
            id: "4",
            message: "Can I know your wonderful profession ?",
            trigger: "5",
          },
          {
            id: "5",
            user: true,
            trigger: "6",
          },
          {
            id: "6",
            message: "Tell me something about yourself ?",
            trigger: "7",
          },
          {
            id: "7",
            user: true,
            trigger: "8",
          },
          {
            id: "8",
            message: "Hey amazing person tell me your skills ?",
            trigger: "9",
          },
          {
            id: "9",
            user: true,
            trigger: "10",
          },
          {
            id: "10",
            message:
              "Man you are wonderful can you name some of your projects ?",
            trigger: "11",
          },
          {
            id: "11",
            user: true,
            trigger: "12",
          },
          {
            id: "12",
            message: "From where have you completed your education ?",
            trigger: "13",
          },
          {
            id: "13",
            user: true,
            trigger: "14",
          },
          {
            id: "14",
            message:
              "Man you did a great work you have a wonderful career ahead. Get you pdf from the below link.",
            end: true,
          },
        ]}
      />
      <Link to="/resume-data">
        <button className="form-link">Click here to see your resume</button>
      </Link>
    </div>
  );
};
