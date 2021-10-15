import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useState } from 'react';
import AssignRol from './AssignRol';
import { FormRoles } from './FormRoles';
import { TableRoles } from './TableRoles';


export function IndexRoles() {
    const [option, setOption] = useState('index')
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
                    <Button key="one" onClick={() => setOption('nuevo')}>Nuevo Rol</Button>,
                    <Button key="two" onClick={() => setOption('asignar')}>Asignar Rol</Button>,
                    <Button key="three">Three</Button>,
                </ButtonGroup>
            </div>
            <div className="w-full py-4">
                {option === 'index' && <TableRoles setOption={setOption} />}
                {option === 'nuevo' && <FormRoles setOption={setOption} text="Registrar Rol"/>}
                {option === 'edit' && <FormRoles setOption={setOption} text="Editar Rol"/>}
                {option === 'asignar' && <AssignRol setOption={setOption}/>}
            </div>
        </div>
    )
}