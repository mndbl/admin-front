import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { SectionSecondaryMenu } from '../../../components/partials/SectionSecondaryMenu';
import { ProfileCompany } from './profile/ProfileCompany';

const items = [
    { to: '/usuarios', text: 'Administrar Usuarios' },
    { to: '/profile', text: 'Perfil de Empresa' },
    { to: '/cuentas', text: 'Cuentas' },
]

export function EmpresasPage() {
    const { url } = useRouteMatch()
    return (
        <>
            <SectionSecondaryMenu items={items} />
            <div className="w-full px-2 lg:min-h-full">
                <Switch>
                    <Route path={`${url}/profile`} component={ProfileCompany}/>
                    <Redirect from="/admin/registros-diarios" to={`${url}/profile`} />
                </Switch>
            </div>
        </>
    );
}

