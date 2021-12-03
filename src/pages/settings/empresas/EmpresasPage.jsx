import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { SectionSecondaryMenu } from '../../../components/partials/SectionSecondaryMenu';
import { ProfileCompany } from './profile/ProfileCompany';

const items = [
    { to: '/profile', text: 'Perfil de Empresa' },
    { to: '/usuarios', text: 'Administrar Usuarios' },
    { to: '/cuentas', text: 'Cuentas' },
]

export function Empresaspage() {
    const { url } = useRouteMatch()
    return (
        <>
            <SectionSecondaryMenu items={items} />
            <div className="w-full px-2 min-h-full">
                <Switch>
                    <Route path={`${url}/profile`} component={ProfileCompany}/>
                    <Redirect from="/admin/registros-diarios" to={`${url}/profile`} />
                </Switch>
            </div>
        </>
    );
}

