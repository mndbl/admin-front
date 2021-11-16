import { LgCard } from '../../../../components/cards/LgCard'
import { useState } from 'react';
import { styleInput } from '../../../../assets/Styles'
import { OperacionSeleccionada } from './OperacionSeleccionada';

export function FormOtrosRegistros({ text }) {
    const [operacionSeleccionada, setOperacionSeleccionada] = useState(null)
    
    return (
        <LgCard text={text}>
            <div className="grid grid-cols-6 lg:w-2/5">
                <label className="col-span-2 text-gray-700 dark:text-gray-200 mt-3 capitalize" htmlFor="seleccionar-operacion">Operaciones</label>
                <select id="seleccionar-operaciones" className={'col-span-4 capitalize ' + styleInput} onChange={(e)=>setOperacionSeleccionada(e.target.value)}>
                    <option value="">Operaciones</option>
                    {operaciones.map((op, index) => {
                        return <option value={op} key={index + op} className="capitalize">{op}</option>
                    })}
                </select>

            </div>
            <div className="grid gap-x-2 mt-4 rows-auto">
                    {operacionSeleccionada != null && <OperacionSeleccionada operacionSeleccionada={operacionSeleccionada}/>}
               <hr className="my-2" />
            </div>
        </LgCard>
    )
}

const operaciones = [
    'traspasos', 'compras de divisas', 'ventas de divisas', 'recibir préstamo', 'otorgar préstamo'
]

