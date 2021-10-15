import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useState } from 'react';
import { FormProfiles } from './FormProfiles';
import Profile from './Profile';
import { TableProfiles } from './TableProfiles';


export function IndexProfiles() {
    const [option, setOption] = useState('perfil')
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
                    <Button key="one" onClick={() => setOption('perfil')}>Perfil</Button>,
                    <Button key="one" onClick={() => setOption('actualizar')}>Actualizar Perfil</Button>,
                    <Button key="three" onClick={() => setOption('index')} >Tabla de Perfiles</Button>,
                </ButtonGroup>
            </div>
            <div className="w-full py-4">
                {option === 'perfil' && <Profile setOption={setOption} />}
                {option === 'index' && <TableProfiles setOption={setOption} />}
                {option === 'actualizar' && <FormProfiles setOption={setOption} text="Actualizar Perfil"/>}
                {option === 'edit' && <FormProfiles setOption={setOption} text="Editar Perfil"/>}
               
            </div>
        </div>
    )
}