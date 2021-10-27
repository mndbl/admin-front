import { Switch, Route, Redirect } from 'react-router-dom'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useState } from 'react';
import { RegistrosDiarios } from './RegistrosDiarios';

export function PanelRegistros() {
    
    return (
        <div className="w-full rounded-lg bg-blue-200 h-full">
            <div className="w-full shadow-xl mb-1">
                <ButtonGroup
                    fullWidth
                    size="large"
                    aria-label="contained button group"
                    variant="contained"
                >
                    <Button key="registros-diarios" href="/admin/registros/registro-diario" >Registros Diarios</Button>,
                    <Button key="ordenes-sevicios" href="/admin/registros/ordenes-servicio">Ordenes de Servicio</Button>,
                    <Button key="registros-pedidos" href="/admin/registros/pedidos">Pedidos</Button>,
                </ButtonGroup>
            </div>
            <div className="w-full lg:w-11/12 mx-auto bg-white lg:h-full rounded-b-lg shadow-xl">
                <Switch>
                  <Route path="/admin/registros/registro-diario" ><RegistrosDiarios /></Route>
                   
                </Switch>

            </div>
        </div>
    )
}