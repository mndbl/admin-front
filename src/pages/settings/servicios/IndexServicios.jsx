import { Switch, Route, Redirect } from 'react-router-dom'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useState } from 'react';
import { TableServicios } from './TableServicios';
import { FormServicios } from './FormServicios';



export function IndexServicios() {
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
                    <Button key="serv_index" href="/settings/servicios/index">Servicios</Button>,
                    <Button key="nuevo_serv" href="/settings/servicios/store">Nuevo Servicio</Button>,
                    
                    
                </ButtonGroup>
            </div>
            <div className="w-full py-4">
                <Switch>
                    <Route path="/settings/servicios/index"><TableServicios/></Route>
                    <Route path="/settings/servicios/store"><FormServicios text="Agregar Servicio"/></Route>
                    <Route path="/settings/servicios/edit"><FormServicios text="Actualizar Servicio"/></Route>
                    <Redirect from="/settings/servicios" to="/settings/servicios/index"/>
                </Switch>
            </div>
        </div>
    )
}