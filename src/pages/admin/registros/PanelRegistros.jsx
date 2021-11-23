import { Switch, Route, Redirect, NavLink } from 'react-router-dom'
import { RegistrosDiarios } from './RegistrosDiarios';
import { ItemsSections } from '../../../components/lnks/ItemsSections';

export function PanelRegistros() {

    return (
        <div className="w-full rounded-lg bg-blue-200 h-full">
            <div className="w-full shadow-xl mb-1">
                <ItemsSections 
                items={items}
                classItemSection={classItemSection}
                classItemActive={classItemActive}
                classItemDefault={classItemDefault}
                />
            </div>
            <div className="w-full lg:w-11/12 mx-auto bg-white lg:h-full rounded-b-lg shadow-xl">
                <Switch>
                    <Route path="/admin/registros/registro-diario" ><RegistrosDiarios /></Route>

                </Switch>

            </div>
        </div>
    )
}

const items = [
    { key: "registros-diarios", href: "/admin/registros/registro-diario", label: 'Registros Diarios' },
    { key: "ordenes-sevicios", href: "/admin/registros/ordenes-servicio", label: 'Ordenes de Servicio' },
    { key: "registros-pedidos", href: "/admin/registros/pedidos", label: 'Pedidos' },
]

const classItemSection ="ripple w-full text-center text-sm no-underline text-white py-4 hover:bg-blue-600 hover:font-bold "
const classItemActive ="bg-blue-600 font-bold "
const classItemDefault ="bg-blue-500 hover:bg-blue-600 hover:font-bold "

