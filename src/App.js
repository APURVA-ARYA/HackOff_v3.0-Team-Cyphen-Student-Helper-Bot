import { Form } from "./components/Form";
import ResumeData from "./components/ResumeData";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/resume-data">
            <ResumeData />
          </Route>
          <Route path="/">
            <Form />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
