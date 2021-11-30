import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
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
    const {url}= useRouteMatch();
    return (
        <>
            <SectionSecondaryMenu items={items} />
            <div className="w-full px-2">
                
                <Switch>
                    <Route path={`${url}/ingresos-egresos`} component={IngresosEgresospage} />
                    <Redirect from="/admin/registros-diarios" to={`${url}/ingresos-egresos`} />
                </Switch>
            </div>
        </>
    )
}