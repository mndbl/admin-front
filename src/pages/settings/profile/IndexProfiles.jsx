import { Switch, Route, Redirect } from 'react-router-dom'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useState } from 'react';
import { FormProfiles } from './FormProfiles';
import Profile from './Profile';
import { TableProfiles } from './TableProfiles';


export function IndexProfiles() {
    
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
                    <Button key="one" href="/settings/profiles/show">Perfil</Button>,
                    <Button key="two" href="/settings/profiles/edit">Actualizar Perfil</Button>,
                    <Button key="three" href="/settings/profiles/index" >Tabla de Perfiles</Button>,
                </ButtonGroup>
            </div>
            <div className="w-full py-4">
                <Switch>
                    <Route path="/settings/profiles/show" component={Profile} />
                    <Route path="/settings/profiles/index" component={TableProfiles} />
                    <Route path="/settings/profiles/edit"><FormProfiles text="Actualizar Perfil" /></Route>

                    <Redirect from="/settings/profiles" to="/settings/profiles/show" />
                </Switch>

            </div>
        </div>
    )
}