import { LgCard } from '../../../../components/cards/LgCard'
import { styleInput } from '../../../../assets/Styles'
import { Button, ButtonGroup } from '@mui/material'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

export function FormRegistros({ text }) {
    return (
        <LgCard text={text}>
            <form>
                <div className="grid grid-cols-2 gap-x-2 mt-4 lg:grid-cols-4">
                    <div className="col-span-2 lg:col-span-4">
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-2">
                            <div className="text-gray-700 items-buttom">
                                <FormLabel component="legend">Ente</FormLabel>
                                <div className="mt-1">
                                    <RadioGroup row aria-label="ente" name="row-radio-buttons-group">
                                        <FormControlLabel value="Ingreso" control={<Radio />} label="Ingreso" />
                                        <FormControlLabel value="Gasto" control={<Radio />} label="Gasto" />
                                    </RadioGroup>
                                </div>

                            </div>
                            <div>
                                <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="fecha_registro">Fecha</label>
                                <input id="fecha_registro" type="date" className={styleInput}
                                />
                            </div>
                            <div>
                                <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="libro_registrar">Cuenta</label>
                                <input id="libro_registrar" type="text" placeholder="Cuenta en la que asentar" className={styleInput}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 lg:col-span-3 ">
                        <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="concepto_registro">Concepto</label>
                        <input id="concepto_registro" type="text" placeholder="Concepto" className={styleInput}
                        />
                    </div>
                    <div>
                        <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="monto_registro">Monto</label>
                        <input id="monto_registro" type="number" min="0" step="0.01" defaultValue="0.00" className={"text-right " + styleInput}
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
                        <Button key="guardar_registro-diario" >Guardar</Button>,
                        <Button key="cancelar_registro-diario" color="error" onClick={() => setOption('index')}>Cancelar</Button>,

                    </ButtonGroup>
                </div>
            </form>
        </LgCard>
    )
}