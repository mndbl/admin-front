import { useState } from 'react';
import { LgCard } from '../../../../components/cards/LgCard'
import { styleInput } from '../../../../assets/Styles'
import { Button, ButtonGroup } from '@mui/material'
import Radio from '@mui/material/Radio';
import FormLabel from '@mui/material/FormLabel';
import { useForm } from 'react-hook-form'



export function FormRegistros({ text }) {
    const { register, handleSubmit } = useForm();
    const [selectedValue, setSelectedValue] = useState('ingreso');
    
    const handleChangeRadio = (event) => {
        setSelectedValue(event.target.value);
    };

    const onSubmitRegistro=(data)=>{
        alert('registrando=> ' + selectedValue + ' ' + JSON.stringify(data))
    }

    return (
        <LgCard text={text}>
            <form onSubmit={handleSubmit(onSubmitRegistro)}>
                <div className="grid grid-cols-2 gap-x-2 mt-4 lg:grid-cols-4">
                    <div className="col-span-2 lg:col-span-4">
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-2">
                            <div className="text-gray-700 items-buttom">
                                <div className="mt-1">
                                    <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="libro_compra">Tipo de Registro: {selectedValue} </label>
                                    <div className=" flex items-center">
                                        <Radio
                                            checked={selectedValue === 'ingreso'}
                                            onChange={handleChangeRadio}
                                            value="ingreso"
                                            name="radio-buttons"
                                            inputProps={{ 'aria-label': 'Ingreso' }}
                                            label="Ingreso"
                                        />
                                        <FormLabel component="legend">Ingreso</FormLabel>
                                        <Radio
                                            checked={selectedValue === 'egreso'}
                                            onChange={handleChangeRadio}
                                            value="egreso"
                                            name="radio-buttons"
                                            inputProps={{ 'aria-label': 'egreso' }}
                                        />
                                        <FormLabel component="legend">Egreso</FormLabel>
                                    </div>
                                </div>

                            </div>
                            <div>
                                <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="fecha_registro">Fecha</label>
                                <input id="fecha_registro" {...register('fechaRegistro')} type="date" className={styleInput}
                                />
                            </div>
                            <div>
                                <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="libro_registrar">Cuenta</label>
                                <input id="libro_registrar" {...register('libroARegistrar')} type="text" placeholder="Cuenta en la que asentar" className={styleInput}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 lg:col-span-3 ">
                        <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="concepto_registro">Concepto</label>
                        <input id="concepto_registro" {...register('conceptoRegistro')} type="text" placeholder="Concepto" className={styleInput}
                        />
                    </div>
                    <div>
                        <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="monto_registro">Monto</label>
                        <input id="monto_registro" {...register('montoRegistro')} type="number" min="0" step="0.01" defaultValue="0.00" className={"text-right " + styleInput}
                        />
                    </div>

                </div>

                <div className="flex justify-end mt-6">
                    <ButtonGroup
                        fullWidth
                        size="large"
                        aria-label="default contained button group"
                        variant="contained"
                    >
                        <Button key="guardar_registro-diario" type="submit">Guardar</Button>,
                        <Button key="cancelar_registro-diario" color="error" onClick={() => setOption('index')}>Cancelar</Button>,

                    </ButtonGroup>
                </div>
            </form>
        </LgCard>
    )
}