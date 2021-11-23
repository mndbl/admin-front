import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Switch, Route, Redirect } from 'react-router-dom';
import { TableRegistros } from './ingresos-gastos/TableRegistros';
import { FormRegistros } from './ingresos-gastos/FormRegistros';
import { TableCompras } from './compras/TableCompras';
import { FormCompras } from './compras/FormCompras';
import { TableVentas } from './ventas/TableVentas';
import { FormVentas } from './ventas/FormVentas';
import { FormOtrosRegistros } from './otrosRegistros/FormOtrosRegistros';
import { ItemsSections } from '../../../components/lnks/ItemsSections';

export function RegistrosDiarios() {
    return (
        <div className="flex flex-col min-h-full">

            <ItemsSections
                items={items}
                classItemSection={classItemSection}
                classItemActive={classItemActive}
                classItemDefault={classItemDefault}
            />

            <div className="w-full p-2 bg-gray-300 bg-opacity-50 flex-grow">
                <div className="">
                    <Switch>
                        <Route path="/admin/registros/registro-diario/index"><TableRegistros /></Route>
                        <Route path="/admin/registros/registro-diario/store"><FormRegistros text="Registrar Asiento" /></Route>
                        <Route path="/admin/registros/registro-diario/edit"><FormRegistros text="Actualizar Asiento" /></Route>
                        <Route path="/admin/registros/registro-diario/compras"><TableCompras /></Route>
                        <Route path="/admin/registros/registro-diario/compras-store"><FormCompras text="Registrar Compra" /></Route>
                        <Route path="/admin/registros/registro-diario/ventas"><TableVentas /></Route>
                        <Route path="/admin/registros/registro-diario/ventas-store"><FormVentas text="Registrar Venta" /></Route>
                        <Route path="/admin/registros/registro-diario/registros-varios"><FormOtrosRegistros text="Registros Varios" /></Route>
                        <Redirect from="/admin/registros/registro-diario" to="/admin/registros/registro-diario/index" />
                    </Switch>
                </div>

            </div>
        </div>
    )
}

const items = [
    { key: "registros_diarios", href: "/admin/registros/registro-diario/index", label: 'Ingresos/Gastos' },
    { key: "compras_registros", href: "/admin/registros/registro-diario/compras", label: 'Compras' },
    { key: "ventas_registros", href: "/admin/registros/registro-diario/ventas", label: 'Ventas' },
    { key: "otros_registros", href: "/admin/registros/registro-diario/registros-varios", label: 'Registros Varios' },
]

const classItemSection = "ripple w-full text-center text-sm no-underline text-white py-2 hover:bg-blue-600 hover:font-bold border-2 border-blue-600  "
const classItemActive = "bg-blue-600 font-bold "
const classItemDefault = "hover:bg-blue-600 hover:font-bold hover:text-white text-blue-600 "
