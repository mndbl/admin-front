import { Switch, Route } from 'react-router-dom'
import { AdminLayout } from '../components/layouts/AdminLayout'
import { IndexRoles } from './settings/roles/IndexRoles'
import { IndexProfiles } from './settings/profile/IndexProfiles'


export function Settings() {
    return (
        <AdminLayout>
            <Switch>
                <Route path="/settings/roles" component={IndexRoles}/>
                <Route path="/settings/profiles" component={IndexProfiles}/>

            </Switch>
        </AdminLayout>
    )
}