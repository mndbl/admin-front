import { Redirect, Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
import { NuevoRegistro } from "./NuevoRegistro";
import { TableIngresosEgresos } from "./TableIngresosEgresos";


export function IngresosEgresospage() {
    const history = useHistory()
    const { url } = useRouteMatch()
    const handleNewRegister = () => {
        history.push(`${url}/nuevo-registro`)
    }
    return (
        <>
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <Switch>
                                <Route path={`${url}/relacion-ingresos-egresos`}>
                                    <TableIngresosEgresos handleNewRegister={handleNewRegister} />
                                </Route>
                                <Route path={`${url}/nuevo-registro`} component={NuevoRegistro} />
                                <Redirect from={`${url}`} to={`${url}/relacion-ingresos-egresos`} />

                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


