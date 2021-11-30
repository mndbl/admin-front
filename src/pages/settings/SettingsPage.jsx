import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { DashboardLayout } from "../../components/layouts/DashboardLayout";
import { SectionPrimaryMenu } from "../../components/partials/SectionPrimaryMenu";
import { Empresaspage } from "./empresas/EmpresasPage";

const items = [
    { to: '/empresas', text: 'Empresas' },
    { to: '/usuarios', text: 'Administrar Usuarios' },
    { to: '/cuentas', text: 'Cuentas' },
]



export function SettingsPage() {
    const {url} = useRouteMatch()
    return (
        <DashboardLayout>
            <SectionPrimaryMenu items={items} />

            <Switch>
                <Route path={`${url}/empresas`} component={Empresaspage}/>
    

            </Switch>
                
        </DashboardLayout>
    )
}