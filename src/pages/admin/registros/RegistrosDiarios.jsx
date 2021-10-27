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

export function RegistrosDiarios() {
    return (
        <div className="flex flex-col min-h-full">
            <div className="w-full">
                <ButtonGroup
                    fullWidth
                    size="large"
                    aria-label="contained button group"
                    variant="contained"
                >
                    <Button variant="outlined" key="registros_diarios" href="/admin/registros/registro-diario/index">Ingresos/Gastos</Button>,
                    <Button variant="outlined" key="compras_registros" href="/admin/registros/registro-diario/compras" >Compras</Button>,
                    <Button variant="outlined" key="ventas_registros" href="/admin/registros/registro-diario/ventas">Ventas</Button>,
                    <Button variant="outlined" key="otros_registros" href="/admin/registros/registro-diario/registros-varios">Registros Varios</Button>,
                </ButtonGroup>
            </div>
            <div className="w-full p-2 bg-gray-300 bg-opacity-50 flex-grow">
                <div className="">
                    <Switch>
                        <Route path="/admin/registros/registro-diario/index"><TableRegistros /></Route>
                        <Route path="/admin/registros/registro-diario/store"><FormRegistros text="Registrar Asiento"/></Route>
                        <Route path="/admin/registros/registro-diario/edit"><FormRegistros text="Actualizar Asiento" /></Route>
                        <Route path="/admin/registros/registro-diario/compras"><TableCompras /></Route>
                        <Route path="/admin/registros/registro-diario/compras-store"><FormCompras text="Registrar Compra"/></Route>
                        <Route path="/admin/registros/registro-diario/ventas"><TableVentas /></Route>
                        <Route path="/admin/registros/registro-diario/ventas-store"><FormVentas text="Registrar Venta"/></Route>
                        <Route path="/admin/registros/registro-diario/registros-varios"><FormOtrosRegistros text="Registros Varios"/></Route>
                        <Redirect from="/admin/registros/registro-diario" to="/admin/registros/registro-diario/index" />
                    </Switch>
                </div>
                
            </div>
        </div>
    )
}