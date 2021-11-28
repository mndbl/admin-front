import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import { activeSecondaryMenu, defaultSecondaryMenu } from "../../../assets/styles/tailwindClass";
import { SectionSecondaryMenu } from "../../../components/partials/SectionSecondaryMenu";
import { IngresosEgresospage } from "./ingresos-egresos/IngresosEgresosPage";

const items = [
    { to: "/ingresos-egresos", text: 'Ingresos/Egresos' },
    { to: "/compras", text: 'Compras' },
    { to: "/ventas", text: 'Ventas' },
    { to: "/pedidos", text: 'Pedidos' },
    { to: "/otros-registros", text: 'Otros Registros' },
]

export function RegistrosDiariosPage() {
    return (
        <>
            <SectionSecondaryMenu items={items} />
            <div className="w-full px-2">
                <Switch>
                    <Route path="/admin/registros-diarios/ingresos-egresos" component={IngresosEgresospage} />
                    <Redirect from="/admin/registros-diarios" to="/admin/registros-diarios/ingresos-egresos" />
                </Switch>
            </div>
        </>
    )
}