import { Home } from "./pages/Home";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Login } from "./components/forms/Login";
import { Register } from "./components/forms/Register";
import { Settings } from "./pages/Settings";
import { Admin } from "./pages/Admin";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/settings" component={Settings}/>
        <Route path="/admin" component={Admin}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/" component={Home}/>
      </Switch>
      </Router>
  );
};

export default App;
