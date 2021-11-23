import { useHistory } from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//páginas
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/auth/LoginPage';
import { PrivateRoute } from './components/PrivateRoute';
import { AdminPage } from './pages/admin/AdminPage';
import { SettingsPage } from './pages/settings/SettingsPage';

//contexto
import { UserState } from './context/User/UserState'

const App = () => {

  const history = useHistory()



  return (
    <UserState>
      <Router>

        <Switch>
          <Route path='/login' component={LoginPage} />
          <PrivateRoute path='/admin' component={AdminPage} />
          <PrivateRoute path='/settings' component={SettingsPage} />
          <Route path='/' component={HomePage} />
        </Switch>
      </Router>
    </UserState>
  );
};

export default App;
