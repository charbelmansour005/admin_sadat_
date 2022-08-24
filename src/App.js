import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import history from "../src/components/history";
import Dashboard from "./components/BackOffice/Dashboard";
import AboutUs from "./components/main/AboutUs";
import Settings from "./components/main/Settings";
import Accounting from "./components/main/Accounting";
import Digital from "./components/DigitalMenu/Digital";
import Login from "./components/main/Login";
import Hm from "./components/main/Hm";
import MenuSummary from "./components/menuSummary/MenuSummary";


function App() {
  return (
    <div>

      <Router>
        <nav>
          {/* <Link to="/Home"> Home </Link> */}
          {/* <Link to="/Digital"> Digital </Link> */}
          {/* <Link to="/Dashboard"> Dashboard </Link>
          <Link to="/AboutUs"> AboutUs </Link>
          <Link to="/Settings"> Settings </Link>
          <Link to="/Accounting"> Accounting </Link> */}
          {/* <Link to="/"> Digital </Link> */}
          {/* <Link to="/MenuSummary"> MenuSummary </Link> */}
        </nav>
        <Switch>
          {/* <Route exact path="/Home" component={Hm}></Route>
          <Route exact path="/Dashboard" component={Dashboard} />
          <Route exact path="/AboutUs" component={AboutUs} />
          <Route exact path="/Settings" component={Settings} />
          <Route exact path="/Accounting" component={Accounting} /> */}
          <Route exact path="/" component={Digital} />
          {/* <Route exact path="/Home" component={Hm} />
          <Route exact path="/MenuSummary" component={MenuSummary} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
