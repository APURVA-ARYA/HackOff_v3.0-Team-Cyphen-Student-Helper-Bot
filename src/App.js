import { Form } from "./components/Form";
import ResumeData from "./components/ResumeData";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CourseFinder from "./courseFinder/CourseFinder";
import HomePage from "./components/HomePage";
import "./style/App.css";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/chat-bot">
            <Form />
          </Route>
          <Route path="/course-finder">
            <CourseFinder />
          </Route>
          <Route path="/resume-data">
            <ResumeData />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
