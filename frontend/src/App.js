import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./Components/Landing";
import FormRecPage from "./Components/FormRecPage";
import FormPage from "./Components/FormPage";
import FormSuiviePage from "./Components/FormSuiviePage";
import StatusTimeLine from "./Components/StatusTimeLine";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {" "}
            <Landing />
          </Route>
          <Route exact path="/createClient">
            {" "}
            <FormPage />{" "}
          </Route>
          <Route exact path="/createReclamation">
            {" "}
            <FormRecPage />{" "}
          </Route>
          <Route exact path="/status">
            {" "}
            <FormSuiviePage />{" "}
          </Route>
          <Route exact path="/statusTimeline">
            {" "}
            <StatusTimeLine  />{" "}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
