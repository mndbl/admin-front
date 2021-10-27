import { Switch, Route, Redirect } from 'react-router-dom'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useState } from 'react';
import AssignRol from './AssignRol';
import { FormRoles } from './FormRoles';
import { TableRoles } from './TableRoles';


export function IndexRoles() {
    return (
        <div className="w-full rounded-lg bg-blue-200 h-full">
            <div className="w-full">
                <ButtonGroup
                    fullWidth
                    size="large"
                    aria-label="vertical contained button group"
                    variant="contained"
                >
                    <Button key="nuevo_rol" href="/settings/roles/store">Nuevo Rol</Button>,
                    
                    <Button key="assign_rol" href="/settings/roles/assign">Asignar Rol</Button>,
                </ButtonGroup>
            </div>
            <div className="w-full py-4">
                <Switch>
                    <Route path= "/settings/roles/index">
                        <TableRoles />
                    </Route>
                    <Route path="/settings/roles/store">
                        <FormRoles text="Registrar Rol" />
                    </Route>
                    <Route path="/settings/roles/update">
                        <FormRoles text="Editar Rol" />
                    </Route>
                    <Route path="/settings/roles/assign">
                        <AssignRol />
                    </Route>
                    <Redirect from="/settings/roles" to="/settings/roles/index"/>
                </Switch>
            </div>
        </div>
    )
}