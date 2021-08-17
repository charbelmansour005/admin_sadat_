
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import history from '../src/components/history';





import Currency from './components/Setup/currency/Currency';

import Categories from './components/Setup/category/Categories';
import SalesItem from './components/Setup/salesItem/SalesItem';
import Payment from './components/Setup/payment/Payment';
import VoidReason from './components/Setup/voidreason/VoidReason';
import Dashboard from './components/BackOffice/Dashboard';
import AboutUs from './components/main/AboutUs';
import Settings from './components/main/Settings';
import Accounting from './components/main/Accounting';
import Digital from './components/main/Digital';
import Login from './components/main/Login';
import Home from './components/main/Home';

function App() {
  return (
    <div >
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Login} ></Route>
          <Route exact path="/Home" component={Home} ></Route>
          <Route exact path="/Dashboard" component={Dashboard} render={(props) => <Dashboard {...props} />} />
          <Route exact path="/AboutUs" component={AboutUs} render={(props) => <AboutUs {...props} />} />
          <Route exact path="/Settings" component={Settings} render={(props) => <Settings {...props} />} />
          <Route exact path="/Accounting" component={Accounting} render={(props) => <Accounting {...props} />} />
          <Route exact path="/Digital" component={Digital} render={(props) => <Digital {...props} />} />
          <Route exact path="/SalesItem" component={SalesItem} render={(props) => <SalesItem {...props} />} />
          <Route exact path="/Categories" component={Categories} render={(props) => <Categories {...props} />} />
          <Route exact path="/Payment" component={Payment} render={(props) => <Payment {...props} />} />
          <Route exact path="/VoidReason" component={VoidReason} render={(props) => <VoidReason {...props} />} />
          <Route exact path="/Currency" component={Currency} render={(props) => <Currency {...props} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
