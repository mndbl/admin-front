import { Switch, Route, Redirect } from 'react-router-dom'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useState } from 'react';
import Empresa from './Empresa';
import { FormEmpresa } from './FormEmpresa';
import { TableDptos } from './TableDptos';
import { FormDepartamento } from './FormDepartamento';
import { Parametros } from './Parametros';
import { TableRepresentantes } from './TableRepresentantes';

export function IndexEmpresas() {
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
                    <Button key="datos_empresa" href="/settings/empresas/show">Datos Empresa</Button>,
                    <Button key="representantes" href="/settings/empresas/representantes">Representantes</Button>,
                    <Button key="departamentos" href="/settings/empresas/departamentos">Departamentos</Button>,
                    <Button key="store_departamento" href="/settings/empresas/store-departamento">Nvo Departamento</Button>,
                    <Button key="parametros" href="/settings/empresas/parametros">Parámetros</Button>,
                    

                </ButtonGroup>
            </div>
            <div className="w-full py-4">
                <Switch>
                    <Route path="/settings/empresas/show" component={Empresa} />
                    <Route path="/settings/empresas/edit">
                        <FormEmpresa text="Editar Empresa" />
                    </Route>
                    <Route path="/settings/empresas/departamentos">
                        <TableDptos  />
                    </Route>
                    <Route path="/settings/empresas/representantes">
                        <TableRepresentantes  />
                    </Route>
                    <Route path="/settings/empresas/store-departamento">
                        <FormDepartamento text="Agregar Departamento" />
                    </Route>
                    <Route path="/settings/empresas/edit-departamento">
                        <FormDepartamento text="Editar Departamento" />
                    </Route>
                    <Route path="/settings/empresas/parametros">
                        <Parametros/>
                    </Route>
                    <Redirect from="/settings/empresas" to="/settings/empresas/show" />
                </Switch>
            </div>
        </div>
    )
}