import { useHistory } from 'react-router-dom'
import { useEffect } from 'react'
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Login } from "./components/forms/Login";
import { Register } from "./components/forms/Register";
import { Settings } from "./pages/Settings";
import { Admin } from "./pages/Admin";
import { useState } from "react";
import { Tooltip, Fab } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
//contexto
import {UserState} from './context/User/UserState'

const App = () => {
  const [profile, setProfile] = useState(null)
  const history = useHistory()

  const handleAutenticar = () => {
    let profileAuth = {
      id: 'iduser',
      name: "Usuario Auth",
      email: 'email',
      avatar: 'avatar'
    }
    profile ? setProfile((prevProfile) => null) : setProfile((prevProfile) => profileAuth)
    console.log(profile);
  }
  // useEffect(() => {
  //   profile ? history.push('/admin') : history.push('/')
  //   console.log(profile);
  // }, [profile])

  return (
    <UserState>
      <Router>
        <div className="absolute bottom-10 right-10">
          <Tooltip title="Simular Autenticación" placement="left">
            <Fab onClick={() => handleAutenticar()}
              color="primary" aria-label="add">
              <AddCircleIcon />
            </Fab>
          </Tooltip>
        </div>
        <Switch>
          <Route path="/settings"><Settings profile={profile} /></Route>
          <Route path="/admin"><Admin profile={profile} /></Route>
          <Route path="/login"><Login profile={profile} /></Route>
          <Route path="/register"><Register profile={profile} /></Route>
          <Route path="/"><Home profile={profile} /></Route>
        </Switch>
      </Router>
    </UserState>
  );
};

export default App;
