import { Switch, Route, Redirect } from 'react-router-dom'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useState } from 'react';

export function PanelConsultas() {
    
    return (
        <div className="w-full rounded-lg bg-blue-200 h-full lg:flex">
            <div className="w-64">
                <ButtonGroup
                    fullWidth
                    size="large"
                    orientation="vertical"
                    aria-label="vertical contained button group"
                    variant="contained"
                >
                    <Button key="registros-diarios" href="/admin/resgistros/registro-diario" >Registros Diarios</Button>,
                    <Button key="ordenes-sevicios" href="/admin/registros/ordenes-servicio">Ordenes/Servicio</Button>,
                    <Button key="registros-pedidos" href="/admin/registros/pedidos">Pedidos</Button>,
                </ButtonGroup>
            </div>
            <div className="w-full py-4">consultas
                <Switch>
                   
                   
                </Switch>

            </div>
        </div>
    )
}