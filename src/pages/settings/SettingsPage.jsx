import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { DashboardLayout } from "../../components/layouts/DashboardLayout";
import { SectionPrimaryMenu } from "../../components/partials/SectionPrimaryMenu";
import { EmpresasPage } from "./empresas/EmpresasPage";
import { UsersPage } from "./users/UsersPage";

const items = [
    { to: '/usuarios', text: 'Administrar Usuarios' },
    { to: '/empresas', text: 'Empresas' },
    { to: '/cuentas', text: 'Cuentas' },
]



export function SettingsPage() {
    const { url } = useRouteMatch()
    return (
        <DashboardLayout>
            <SectionPrimaryMenu items={items} />
            <div className="min-h-full">
                <Switch>
                    <Route path={`${url}/empresas`} component={EmpresasPage} />
                    <Route path={`${url}/usuarios`} component={UsersPage} />
                </Switch>
            </div>
        </DashboardLayout>
    )
}