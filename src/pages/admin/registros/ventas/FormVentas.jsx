import { useState } from 'react';
import { LgCard } from '../../../../components/cards/LgCard'
import { styleInput } from '../../../../assets/Styles'
import { IconButton, Button, ButtonGroup } from '@mui/material'
import Radio from '@mui/material/Radio';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Tooltip } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import SaveIcon from '@mui/icons-material/Save';
import { TableDetallesVentas } from './TableIDetallesVenta';


const options = ['Option 1', 'Option 2'];

export function FormVentas({ text }) {
    const [selectedValue, setSelectedValue] = useState('contado');
    const [value, setValue] = useState(options[0]);
    const [inputValue, setInputValue] = useState('');


    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    return (
        <>
            <LgCard text={text}>
                <form>
                    <div className="grid grid-cols-2 gap-x-2 mt-4 lg:grid-cols-3 border-b-2 pb-2">
                        <div>
                            <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="fecha_venta">Fecha</label>
                            <input id="fecha_venta" type="date" className={styleInput}
                            />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="cliente">Proveedor</label>
                            <select id="cliente" className={styleInput}>
                                <option>Seleccione Cliente</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="monto_venta">Monto</label>
                            <input id="monto_venta" type="number" min="0" step="0.01" defaultValue="0.00" className={"text-right " + styleInput}
                            />
                        </div>
                        <div className="">
                            <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="">Convenio</label>
                            <div className=" flex items-center">
                                <Radio
                                    checked={selectedValue === 'contado'}
                                    onChange={handleChange}
                                    value="contado"
                                    name="radio-buttons"
                                    inputProps={{ 'aria-label': 'Contado' }}
                                    label="Contado"
                                />
                                <FormLabel component="legend">Contado</FormLabel>
                                <Radio
                                    checked={selectedValue === 'credito'}
                                    onChange={handleChange}
                                    value="credito"
                                    name="radio-buttons"
                                    inputProps={{ 'aria-label': 'Credito' }}
                                />
                                <FormLabel component="legend">Crédito</FormLabel>
                            </div>
                        </div>
                        {selectedValue === 'contado' ?
                        (<div >
                            <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="convenio_pago">Detalle Convenio</label>
                            <select id="convenio_pago" className={styleInput}>
                                <option>Forma de Pago</option>
                                {cuentas.map((item) => {
                                    return <option value={item.valor} key={item.valor}>{item.nombre}</option>
                                })}
                            </select>
                        </div>)
                        :
                        (<div >
                            <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="convenio_pago">Detalle Convenio</label>
                            <select id="convenio_pago" className={styleInput}>
                                <option>Detalle Convenio</option>
                                {convenioDePago.map((item) => {
                                    return <option value={item.valor} key={item.valor}>{item.nombre}</option>
                                })}
                            </select>
                        </div>)
                        }

                    </div>
                    <div className="grid grid-cols-2 gap-x-2 mt-4 lg:grid-cols-3">
                        <div className="">
                            <label className="text-gray-700 dark:text-gray-200 uppercase " htmlFor="fecha_compra">Agregar Items</label>
                            <div className="mt-2">

                                <Autocomplete
                                    value={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                    inputValue={inputValue}
                                    onInputChange={(event, newInputValue) => {
                                        setInputValue(newInputValue);
                                    }}
                                    id="controllable-states-demo"
                                    options={options}
                                    size="small"
                                    // sx={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} label="Productos" />}
                                />
                            </div>

                        </div>
                        <div className="flex space-x-2">

                            <div>
                                <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="cant_compra">Cant</label>
                                <input id="cant_compra" type="number" min="0" className={styleInput} />
                            </div>
                            <div>
                                <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="precio_unitario_compra">P/Unit</label>
                                <input id="precio_unitario_compra" type="number" min="0" step="0.01" defaultValue="0.00" className={"text-right " + styleInput} />

                            </div>
                        </div>
                        <div className="flex">
                            <div className="w-1/2">
                                <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="subtotal_compra">Subtotal</label>
                                <input disabled id="subtotal_compra" type="number" min="0" step="0.01" defaultValue="0.00" className={"text-right " + styleInput} />

                            </div>
                            <div className="mt-6 ml-2">

                                <Tooltip title="Guardar Item de Compra" placement="right">
                                    <IconButton size="large" color="primary" aria-label="guardar_item">
                                        <SaveIcon />
                                    </IconButton>
                                </Tooltip>
                            </div>

                        </div>


                    </div>
                    <div className="">

                        <TableDetallesVentas />
                    </div>
                    <div className="flex justify-end mt-6 border-t-2 pt-2">
                        <ButtonGroup
                            fullWidth
                            size="large"
                            aria-label="default contained button group"
                            variant="contained"
                        >
                            <Button key="guardar_compra-diario" >Guardar Venta</Button>,
                            <Button key="cancelar_compra-diario" color="error" onClick={() => setOption('index')}>Cancelar</Button>,

                        </ButtonGroup>
                    </div>
                </form>
            </LgCard>
        </>
    )
}

const convenioDePago = [
    { nombre: 'Crédito 30 días', valor: 'p30' },
    { nombre: 'Crédito 60 días', valor: 'p60' },
]

const cuentas=[
    {nombre:'Provincial', valor: 'prov'},
    {nombre:'Bancamiga', valor: 'banca'},
    {nombre:'Efectivo USD', valor: 'usd'},
    {nombre:'Efectivo Bs', valor: 'ebs'},
    {nombre:'Bofa', valor: 'bofa'},
    {nombre:'Efectivo EUR', valor: 'eur'},
]