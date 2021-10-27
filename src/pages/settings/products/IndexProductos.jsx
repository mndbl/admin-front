import { Switch, Route, Redirect } from 'react-router-dom'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useState } from 'react';
import { TableProductos } from './TableProductos';
import { FormProductos } from './FormProductos';
import { TableMarcas } from './TableMarcas';



export function IndexProductos() {
    return (
        <div className="w-full rounded-lg bg-blue-200 h-full">
            <div className="w-full">
                <ButtonGroup
                    fullWidth
                    size="large"
                    aria-label="vertical contained button group"
                    variant="contained"
                >
                    <Button key="prod_index" href="/settings/productos/index">Repuestos/Suministros</Button>,
                    <Button key="nuevo_prod" href="/settings/productos/store">Agregar</Button>,
                    <Button key="marcas" href="/settings/productos/marcas">Marcas</Button>,
                    
                    
                </ButtonGroup>
            </div>
            <div className="w-full py-4">
                <Switch>
                    <Route path="/settings/productos/index"><TableProductos/></Route>
                    <Route path="/settings/productos/marcas"><TableMarcas/></Route>
                    <Route path="/settings/productos/store"><FormProductos text="Agregar Producto"/></Route>
                    <Route path="/settings/productos/edit"><FormProductos text="Actualizar Producto"/></Route>
                    <Redirect from="/settings/productos" to="/settings/productos/index"/>
                </Switch>
            </div>
        </div>
    )
}