import { Switch, Route } from 'react-router-dom'
import { AdminLayout } from '../components/layouts/AdminLayout'
import { IndexRoles } from './settings/roles/IndexRoles'
import { IndexProfiles } from './settings/profile/IndexProfiles'
import { IndexUsers } from './settings/users/IndexUsers'
import GroupsIcon from '@mui/icons-material/Groups';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PeopleIcon from '@mui/icons-material/People';

const itemsOptions =[
    {label: "Users", path:"/settings/users", icon:<PeopleIcon/>},
    {label: "Roles", path:"/settings/roles", icon:<GroupsIcon/>},
    {label: "Profiles", path:"/settings/profiles", icon:<AccountCircleIcon/>}
]


export function Settings() {
    return (
        <AdminLayout itemsOptions={itemsOptions}>
            <Switch>
                <Route path="/settings/users" component={IndexUsers}/>
                <Route path="/settings/roles" component={IndexRoles}/>
                <Route path="/settings/profiles" component={IndexProfiles}/>

            </Switch>
        </AdminLayout>
    )
}