import { Switch, NavLink, Route, Redirect } from "react-router-dom";
import { DashboardLayout } from "../../components/layouts/DashboardLayout";
import { activePrimaryMenu, defaultPrimaryMenu } from "../../assets/styles/tailwindClass";
import { RegistrosDiariosPage } from "./registros-diarios/RegistrosDiariosPage";
import { SectionPrimaryMenu } from "../../components/partials/SectionPrimaryMenu";

const items=[
    {to: '/registros-diarios', text: 'Registros Diarios'},
    {to: '/ordenes-servicio', text: 'Ordenes de Servicio'},
    {to: '/consultas', text: 'Consultas'},
]

export function AdminPage() {
    return (
        <DashboardLayout>
           <SectionPrimaryMenu items={items}/>

            <Switch>
                <Route path="/admin/registros-diarios" component={RegistrosDiariosPage}/>
                <Redirect from="/admin" to="/admin/registros-diarios" />
            
            </Switch>

        </DashboardLayout>
    )
}



