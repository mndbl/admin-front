import { useState, useEffect } from 'react';
import { LgCard } from '../../../../components/cards/LgCard'
import { styleInput } from '../../../../assets/Styles'
import { IconButton, Button, ButtonGroup, Tooltip } from '@mui/material'
import Radio from '@mui/material/Radio';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SaveIcon from '@mui/icons-material/Save';
import { TableDetallesCompras } from './TableIDetallesCompra';
import { useForm } from 'react-hook-form';
import NumberFormat from 'react-number-format';



export function FormCompras({ text }) {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const [selectedConvenio, setSelectedConvenio] = useState('contado');
    const [subtotalCalculado, setSubtotalCalculado] = useState(0)
    const [productoSel, setProductoSel] = useState({
        id: '',
        nombre: '',
        existencia: '',
        precio: ''

    })

    const [itemsCompra, setItemsCompra] = useState([])

    useEffect(() => {
        console.log(productoSel);
    }, [productoSel])

    const handleProductoSel = (e) => {
        let seleccion = productos.find(prod => prod.nombre === e.target.value)
        setProductoSel({
            ...productoSel,
            id: seleccion?.id,
            nombre: seleccion?.nombre,
            existencia: seleccion?.existencia,
            precio: seleccion?.precio,
        })
    }

    const handleChangeRadio = (event) => {
        setSelectedConvenio(event.target.value);
    };

    const onSubmitCompra = data => {
        alert(JSON.stringify(data))
    }

    const calcularSubtotal = ({ cantidadCompra, precioUnitario }) => {
        let newSubtotal = cantidadCompra * precioUnitario
        setSubtotalCalculado(newSubtotal)
        console.log(subtotalCalculado);
    }

    const agregarItems = ({ cantidadCompra, precioUnitario }) => {
        let nroItem = itemsCompra.length + 1
        let itemForAdd = {
            id: nroItem,
            cantidad: cantidadCompra,
            productoId: productoSel.id,
            concepto: productoSel.nombre,
            alicuota: '16%',
            precioUnitario: precioUnitario,
            total: parseFloat(precioUnitario) * parseInt(cantidadCompra)
        }
        itemsCompra.push(itemForAdd)
    }

    return (
        <>
            <LgCard text={text}>
                <form onSubmit={handleSubmit(onSubmitCompra)}>
                    <p>productoSel: {productoSel?.precio} </p>
                    <div className="grid grid-cols-2 gap-x-2 mt-4 lg:grid-cols-3 border-b-2 pb-2 mb-4">
                        <div>
                            <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="fecha_compra">Fecha</label>
                            <input required id="fecha_compra" {...register("fechaCompra")} type="date" className={styleInput}
                            />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="proveedor">Proveedor</label>
                            <input required id="proveedorSel" {...register('proveedorSel')} placeholder="Seleccione Proveedor"
                                list="list-proveedor" type="text" className={styleInput} />
                            <datalist id="list-proveedor">

                                <option>Seleccione Proveedor</option>

                            </datalist>

                        </div>

                        <div className="">
                            <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="libro_compra">Convenio</label>
                            <div className=" flex items-center">

                                <Radio
                                    checked={selectedConvenio === 'contado'}
                                    onChange={handleChangeRadio}
                                    value="contado"
                                    name="tipo-convenio"
                                    inputProps={{ 'aria-label': 'Contado' }}
                                    label="Contado"
                                />
                                <FormLabel component="legend">Contado</FormLabel>
                                <Radio
                                    checked={selectedConvenio === 'credito'}
                                    onChange={handleChangeRadio}
                                    value="credito"
                                    name="tipo-convenio"
                                    inputProps={{ 'aria-label': 'Credito' }}
                                />
                                <FormLabel component="legend">Crédito</FormLabel>

                            </div>
                        </div>
                        {selectedConvenio === 'contado' ?
                            (<div >
                                <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="convenio_pago">{selectedConvenio === 'contado' ? 'Forma de Pago' : 'Crédito'}</label>
                                <select required id="convenio_pago" className={styleInput}>
                                    <option>Forma de Pago</option>
                                    {cuentas.map((item) => {
                                        return <option value={item.valor} key={item.valor}>{item.nombre}</option>
                                    })}
                                </select>
                            </div>)
                            :
                            (<div >
                                <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="convenio_pago">Detalle Convenio</label>
                                <select required id="convenio_pago" className={styleInput}>
                                    <option>Detalle Convenio</option>
                                    {convenioDePago.map((item) => {
                                        return <option value={item.valor} key={item.valor}>{item.nombre}</option>
                                    })}
                                </select>
                            </div>)
                        }

                    </div>

                    {/* items */}
                    <label className="mt-4 text-gray-700 dark:text-gray-200 uppercase">Agregar Items</label>
                    <div className="grid grid-cols-2 gap-x-2 mt-2 lg:grid-cols-3">
                        <div className="">
                            {!errors.productoSel ?
                                (<label className="text-gray-700 dark:text-gray-200" htmlFor="fecha_compra">
                                    Productos
                                </label>)
                                :
                                (<span className="text-xs font-bold text-red-500">
                                    * Requerido
                                </span>)
                            }
                            <div className="mt-2">
                                <input id="cant_compra" {...register('productoSel', { required: true })} placeholder="Seleccione Producto"
                                    list="list-productos"
                                    onChange={e => handleProductoSel(e)}
                                    type="text" className={styleInput} />
                                <datalist id="list-productos">

                                    {productos.map(prod => <option value={prod.nombre} key={prod.id}>{prod.nombre}</option>)}

                                </datalist>
                            </div>

                        </div>
                        <div className="flex space-x-2">

                            <div>
                                {!errors.cantidadCompra ?
                                    (
                                        <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="cant_compra">{`Max: ${productoSel?.existencia}`}</label>
                                    )
                                    :
                                    (
                                        errors.cantidadCompra.type === 'min' && <span className="text-xs font-bold text-red-500">* Min 1</span>

                                    )
                                }

                                <input id="cant_compra" {...register('cantidadCompra', { min: 1 })} onBlur={handleSubmit(calcularSubtotal)}
                                    type="number" min="1" defaultValue="1" className={"text-right " + styleInput} />
                            </div>
                            <div>
                                {!errors.precioUnitario ?
                                    (
                                        <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="precio_unitario_compra">P/Unit</label>
                                    )
                                    :
                                    (
                                        <span className="text-xs font-bold text-red-500">* Requerido</span>
                                    )
                                }
                                <input id="precio_unitario_compra" {...register('precioUnitario', { required: true, min: 1 })} onBlur={handleSubmit(calcularSubtotal)}
                                    type="number" min="0" step="0.01" defaultValue={productoSel?.precio} className={"text-right " + styleInput} />


                            </div>
                        </div>
                        <div className="flex">
                            <div className="w-1/2">
                                <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="subtotal_compra">Subtotal</label>
                                <NumberFormat
                                    className={styleInput}
                                    thousandsGroupStyle="thousand"
                                    value={subtotalCalculado}
                                    prefix="$ "
                                    thousandSeparator="."
                                    decimalSeparator=","
                                    decimalScale={2}
                                    fixedDecimalScale={true}
                                    displayType="text"
                                    type="input"

                                />

                            </div>
                            <div className="mt-6 ml-2">

                                <Tooltip title="Guardar Item de Compra" placement="right">
                                    <IconButton onClick={handleSubmit(agregarItems)}
                                        size="large" color="primary" aria-label="guardar_item" type="button">
                                        <SaveIcon />
                                    </IconButton>
                                </Tooltip>
                            </div>

                        </div>


                    </div>
                    <div className="">
                        {itemsCompra.length > 0 && <TableDetallesCompras itemsCompra={itemsCompra} />}
                    </div>
                    <div className="flex justify-end mt-6 border-t-2 pt-2">
                        <ButtonGroup
                            fullWidth
                            size="large"
                            aria-label="default contained button group"
                            variant="contained"
                        >
                            <Button key="guardar_compra-diario" >Guardar Compra</Button>,
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

const cuentas = [
    { nombre: 'Provincial', valor: 'prov' },
    { nombre: 'Bancamiga', valor: 'banca' },
    { nombre: 'Efectivo USD', valor: 'usd' },
    { nombre: 'Efectivo Bs', valor: 'ebs' },
    { nombre: 'Bofa', valor: 'bofa' },
    { nombre: 'Efectivo EUR', valor: 'eur' },
]

const productos = [
    { id: 1, nombre: 'producto 1', existencia: 5, precio: 5.15 },
    { id: 2, nombre: 'producto 2', existencia: 15, precio: 15.15 },
    { id: 3, nombre: 'producto 3', existencia: 25, precio: 25.15 },
    { id: 4, nombre: 'producto 4', existencia: 35, precio: 35.15 },
    { id: 5, nombre: 'producto 5', existencia: 45, precio: 45.15 },
    { id: 6, nombre: 'producto 6', existencia: 55, precio: 55.15 },
]