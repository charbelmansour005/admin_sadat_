import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import history from "../src/components/history";
import Dashboard from "./components/BackOffice/Dashboard";
import AboutUs from "./components/main/AboutUs";
import Settings from "./components/main/Settings";
import Accounting from "./components/main/Accounting";
import Digital from "./components/main/Digital";
import Login from "./components/main/Login";
import Hm from "./components/main/Hm";

function App() {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route
            exact
            path="/Dashboard"
            component={Dashboard}
            render={(props) => <Dashboard {...props} />}
          />
          <Route
            exact
            path="/AboutUs"
            component={AboutUs}
            render={(props) => <AboutUs {...props} />}
          />
          <Route
            exact
            path="/Settings"
            component={Settings}
            render={(props) => <Settings {...props} />}
          />
          <Route
            exact
            path="/Accounting"
            component={Accounting}
            render={(props) => <Accounting {...props} />}
          />
          <Route
            exact
            path="/Digital"
            component={Digital}
            render={(props) => <Digital {...props} />}
          />
          <Route
            exact
            path="/Home"
            component={Hm}
            render={(props) => <Hm {...props} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
