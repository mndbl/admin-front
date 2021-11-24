import { Switch, Route } from 'react-router-dom'
import { DashboardLayout } from './components/layouts/DashboardLayout'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import { HomePage } from './pages/HomePage'
import {PrivateRoute} from './helpers/PrivateRoute'
import { AdminPage } from './pages/admin/AdminPage'
import { SettingsPage } from './pages/settings/SettingsPage'

export function App() {
  return (
    <>
      
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        
        {/* rutas privadas posteriormente */}

        <Route path="/admin" component={AdminPage} />
        <Route path="/settings" component={SettingsPage} />
        
        <Route path="/" component={HomePage} />
      </Switch>
      
    </>
  )
}

