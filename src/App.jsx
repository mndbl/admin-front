import { Switch, Route } from 'react-router-dom'
import { DashboardLayout } from './components/layouts/DashboardLayout'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import { HomePage } from './pages/HomePage'

export function App() {
  return (
    <>
      
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={DashboardLayout} />
        <Route path="/" component={HomePage} />
      </Switch>
      
    </>
  )
}

