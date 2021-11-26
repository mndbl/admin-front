import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import { activeSecondaryMenu, defaultSecondaryMenu } from "../../../assets/styles/tailwindClass";
import { IngresosEgresospage } from "./ingresos-egresos/IngresosEgresosPage";

export function RegistrosDiariosPage() {
    return (
        <>
        <div className="w-full flex justify-between divide-x-2 text-center px-2 mt-1">
                <NavLink className={isActive => isActive ? (activeSecondaryMenu) : (defaultSecondaryMenu)} to="#!">Ingresos/Egresos</NavLink>
                <NavLink className={isActive => isActive ? (activeSecondaryMenu) : (defaultSecondaryMenu)} to="#!">Compras</NavLink>
                <NavLink className={isActive => isActive ? (activeSecondaryMenu) : (defaultSecondaryMenu)} to="#!">Ventas</NavLink>
                <NavLink className={isActive => isActive ? (activeSecondaryMenu) : (defaultSecondaryMenu)} to="#!">Pedidos</NavLink>
                <NavLink className={isActive => isActive ? (activeSecondaryMenu) : (defaultSecondaryMenu)} to="#!">Varios</NavLink>
            </div>
            <div className="w-full px-2">
            <Switch>
                <Route path="/admin/registros-diarios/ingresos-egresos" component={IngresosEgresospage}/>
                <Redirect from="/admin/registros-diarios" to="/admin/registros-diarios/ingresos-egresos" />
            </Switch>
            </div>
            </>
    )
}