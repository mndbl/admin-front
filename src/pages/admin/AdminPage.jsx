import { Switch, NavLink, Route, Redirect } from "react-router-dom";
import { DashboardLayout } from "../../components/layouts/DashboardLayout";
import { activePrimaryMenu, defaultPrimaryMenu } from "../../assets/styles/tailwindClass";
import { RegistrosDiariosPage } from "./registros-diarios/RegistrosDiariosPage";

export function AdminPage() {
    return (
        <DashboardLayout>
            <div className="w-full flex justify-between divide-x-2 divice-blue-100 text-center shadow-xl">
                <NavLink className={isActive => isActive ? (activePrimaryMenu) : (defaultPrimaryMenu)} to="#!">Registros Diarios</NavLink>
                <NavLink className={isActive => isActive ? (activePrimaryMenu) : (defaultPrimaryMenu)} to="#!">Ordenes</NavLink>
                <NavLink className={isActive => isActive ? (activePrimaryMenu) : (defaultPrimaryMenu)} to="#!">Consultas</NavLink>
            </div>

            <Switch>
                <Route path="/admin/registros-diarios" component={RegistrosDiariosPage}/>
                <Redirect from="/admin" to="/admin/registros-diarios" />
            
            </Switch>

        </DashboardLayout>
    )
}



