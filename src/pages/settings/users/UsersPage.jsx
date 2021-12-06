import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { SectionSecondaryMenu } from '../../../components/partials/SectionSecondaryMenu';
import { UserProfile } from './profile/UserProfile';
import { RolesIndex } from './roles/RolesIndex';

const items = [
    { to: '/roles', text: 'Roles' },
    { to: '/user-profile', text: 'Perfil' },
    { to: '/asignar-roles', text: 'Asignar Roles' },
]

export function UsersPage() {
    const { url } = useRouteMatch()
    return (
        <>
            <SectionSecondaryMenu items={items} />
            <div className="w-full px-2 lg:min-h-full">
                <Switch>
                    <Route path={`${url}/roles`} component={RolesIndex}/>
                    <Route path={`${url}/user-profile`} component={UserProfile}/>
                    {/* <Redirect from="/admin/registros-diarios" to={`${url}/profile`} /> */}
                </Switch>
            </div>
        </>
    );
}

