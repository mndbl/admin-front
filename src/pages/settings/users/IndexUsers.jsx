import { Switch, Route, Redirect } from 'react-router-dom'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useState } from 'react';
import { TableUsers } from './TableUsers';
import { FormUsers } from './FormUsers';



export function IndexUsers() {
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
                    <Button key="two" href="/settings/users/store">Nuevo Usuario</Button>,
                    <Button key="three" href="/settings/users/index" >Tabla de Usuarios</Button>,
                </ButtonGroup>
            </div>
            <div className="w-full py-4">
                <Switch>
                    <Route path="/settings/users/index" component={TableUsers} />
                    <Route path="/settings/users/store"><FormUsers text="Registrar Usuario" /></Route>
                    <Route path="/settings/users/edit"><FormUsers text="Actualizar Usuario" /></Route>

                    <Redirect from="/settings/users" to="/settings/users/index" />
                </Switch>

            </div>
        </div>
    )
}