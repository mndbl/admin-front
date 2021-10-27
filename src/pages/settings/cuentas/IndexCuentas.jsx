import { Switch, Route, Redirect } from 'react-router-dom'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useState } from 'react';
import { FormCuentas } from './FormCuentas';
import { TableCuentas } from './TableCuentas';


export function IndexCuentas() {
    
    return (
        <div className="w-full rounded-lg bg-blue-200 h-full">
            <div className="w-full">
                <ButtonGroup
                    fullWidth
                    size="large"
                    
                    aria-label="vertical contained button group"
                    variant="contained"
                >
                    <Button key="store-cuenta" href="/settings/cuentas/store">Agregar Cuenta</Button>,
                    <Button key="index-cuenta" href="/settings/cuentas/index" >Tabla de Cuentas</Button>,
                </ButtonGroup>
            </div>
            <div className="w-full py-4">
                <Switch>
                    <Route path="/settings/cuentas/index" component={TableCuentas} />
                    <Route path="/settings/cuentas/edit"><FormCuentas text="Actualizar Cuenta" /></Route>
                    <Route path="/settings/cuentas/store"><FormCuentas text="Registrar Cuenta" /></Route>

                    <Redirect from="/settings/cuentas" to="/settings/cuentas/index" />
                </Switch>

            </div>
        </div>
    )
}