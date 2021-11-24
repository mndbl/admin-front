import { Switch, Route } from 'react-router-dom'
import { DashboardLayout } from './components/layouts/DashboardLayout'
import { Footer } from './components/partials/Footer'
import { Navbar } from './components/partials/Navbar'
import { Sidebar } from './components/partials/Sidebar'
import { HomePage } from './pages/HomePage'

export function App() {
  return (
    <>
      
      <Switch>
        <Route path="/dashboard" component={DashboardLayout} />
        <Route path="/sidebar" component={Sidebar} />
        <Route path="/" component={HomePage} />
      </Switch>
      
    </>
  )
}