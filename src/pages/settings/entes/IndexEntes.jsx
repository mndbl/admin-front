import { Switch, Route, Redirect } from 'react-router-dom'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useState } from 'react';
import { TableEntes } from './TableEntes';
import { FormEntes } from './FormEntes';


export function IndexEntes() {
    
    return (
        <div className="w-full rounded-lg bg-blue-200 h-full">
            <div className="w-full">
                <ButtonGroup
                    fullWidth
                    size="large"
                  
                    aria-label="vertical contained button group"
                    variant="contained"
                >
                    <Button key="show-profile" href="/settings/entes/store">Agregar Ente</Button>,
                    <Button key="index-profile" href="/settings/entes/index" >Tabla de Entes</Button>,
                </ButtonGroup>
            </div>
            <div className="w-full py-4">
                <Switch>
                    <Route path="/settings/entes/index"><TableEntes /></Route>
                    <Route path="/settings/entes/store"><FormEntes text="Agregar Ente" /></Route>
                    <Route path="/settings/entes/edit"><FormEntes text="Actualizar Ente" /></Route>
                    <Redirect from="/settings/entes" to="/settings/entes/index" />
                </Switch>

            </div>
        </div>
    )
}