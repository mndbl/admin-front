import { styleInput } from '../../../../assets/Styles'
import { Button, ButtonGroup, Tooltip, IconButton } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import { cuentas, fechaActual } from '../../../../assets/Variables'
import { useForm } from 'react-hook-form'
import { useState } from 'react';


export function OperacionSeleccionada({ operacionSeleccionada }) {
    const { register, handleSubmit } = useForm();
    const [fecha, setFecha] = useState(fechaActual)

    const handleChangeDate = (e) => {
        let newFecha = e.target.value
        setFecha(newFecha);
    }

    const onSubmitTraspaso = ({ fechaOperacion, cuentaOrigenTraspaso, cuentaDestinoTraspaso, montoTraspaso }) => {
        alert(JSON.stringify({ fechaOperacion, cuentaOrigenTraspaso, cuentaDestinoTraspaso, montoTraspaso }));
    }

    const onSubmitCompraDivisa = ({ fechaOperacion, compraDivDesdeCuenta, divisaComprada, montoDivisaComprada, montoPagadoCompraDivisa }) => {
        alert(JSON.stringify({ fechaOperacion, compraDivDesdeCuenta, divisaComprada, montoDivisaComprada, montoPagadoCompraDivisa }));
    }

    const onSubmitVentaDivisa = ({ fechaOperacion, divisaVendida, ventaDivACuenta, montoDivVendida, montoBsRecibidos }) => {
        alert(JSON.stringify({ fechaOperacion, divisaVendida, ventaDivACuenta, montoDivVendida, montoBsRecibidos }));
    }

    const onSubmitRecibirPrestamo = ({ fechaOperacion, recibidoDe, recibidoACuenta, montoRecibido }) => {
        alert(JSON.stringify({ fechaOperacion, recibidoDe, recibidoACuenta, montoRecibido }));
    }

    const onSubmitOtorgarPrestamo = ({ fechaOperacion, otorgadoA, otorgadoDeCuenta, montoOtorgado }) => {
        alert(JSON.stringify({ fechaOperacion, otorgadoA, otorgadoDeCuenta, montoOtorgado }));
    }

    if (operacionSeleccionada === 'traspasos') return <TraspasosForm handleSubmit={handleSubmit} onSubmitTraspaso={onSubmitTraspaso} register={register} fecha={fecha} handleChangeDate={handleChangeDate} />
    if (operacionSeleccionada === 'compras de divisas') return <ComprasDivisasForm handleSubmit={handleSubmit} onSubmitCompraDivisa={onSubmitCompraDivisa} register={register} fecha={fecha} handleChangeDate={handleChangeDate} />
    if (operacionSeleccionada === 'ventas de divisas') return <VentasDivisasForm handleSubmit={handleSubmit} onSubmitVentaDivisa={onSubmitVentaDivisa} register={register} fecha={fecha} handleChangeDate={handleChangeDate} />
    if (operacionSeleccionada === 'recibir préstamo') return <RecibirPrestamosForm handleSubmit={handleSubmit} onSubmitRecibirPrestamo={onSubmitRecibirPrestamo} register={register} fecha={fecha} handleChangeDate={handleChangeDate} />
    if (operacionSeleccionada === 'otorgar préstamo') return <OtorgarPrestamosForm handleSubmit={handleSubmit} onSubmitOtorgarPrestamo={onSubmitOtorgarPrestamo} register={register} fecha={fecha} handleChangeDate={handleChangeDate} />
}


const TraspasosForm = ({ handleSubmit, onSubmitTraspaso, register, fecha, handleChangeDate }) => {

    return (
        <form onSubmit={handleSubmit(onSubmitTraspaso)}>

            <label className="text-gray-700 dark:text-gray-200 mt-3 capitalize" htmlFor="fecha-traspasos">Fecha</label>
            <input id="fecha-traspasos" type="date" {...register('fechaOperacion')} onChange={(e) => handleChangeDate(e)} value={fecha} className={"w-1/2 md:w-1/4 " + styleInput} />
            <div id="traspasos" className="grid grid-cols-4 lg:grid-cols-7 gap-x-2">
                <div className="col-span-2">
                    <select id="traspasos_desde" {...register("cuentaOrigenTraspaso")} className={styleInput}>
                        <option value="">Traspasar de</option>
                        {cuentas.map((cuenta) => {
                            return <option value={cuenta.id} key={cuenta.id + '-traspasos'}>{cuenta.nombre}</option>
                        })}
                    </select>
                </div>
                <div className="col-span-2">
                    <select id="traspasos_hasta" {...register("cuentaDestinoTraspaso")} className={styleInput}>
                        <option value="">Traspasar a</option>
                        {cuentas.map((cuenta) => {
                            return <option value={cuenta.id} key={cuenta.id}>{cuenta.nombre}</option>
                        })}
                    </select>
                </div>
                <div className="col-span-2">
                    <input id="monto_traspaso" {...register("montoTraspaso")} type="number" min="0" step="0.01" placeholder="Monto Bs o ref" className={styleInput + ' text-right'} />
                </div>
                <div className="-space-x-4">
                    <Tooltip title="Guardar Traspaso" placement="top">
                        <IconButton size="large" color="primary" aria-label="guardar_traspaso" type="submit">
                            <SaveIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Cancelar" placement="top">
                        <IconButton size="large" color="error" aria-label="cancelar_traspaso" type="reset">
                            <CancelIcon />
                        </IconButton>
                    </Tooltip>
                </div>
            </div>
        </form>
    )
}

const ComprasDivisasForm = ({ handleSubmit, onSubmitCompraDivisa, register, fecha, handleChangeDate }) => {

    return (
        <form onSubmit={handleSubmit(onSubmitCompraDivisa)}>
            <label className="text-gray-700 dark:text-gray-200 mt-3 capitalize" htmlFor="fecha-compra-divisa">Fecha</label>
            <input id="fecha-compra-divisa" type="date" {...register('fechaOperacion')} onChange={(e) => handleChangeDate(e)}
                value={fecha} className={"w-1/2 md:w-1/4 " + styleInput} />
            <div id="compras_divisas" className="grid grid-cols-4 lg:grid-cols-9 gap-x-2">
                <div className="col-span-4">
                    <label className="text-gray-700 dark:text-gray-200 mt-3 capitalize" htmlFor="compras-divisas-desde-cuenta">Pagar desde cuenta</label>
                    <div className="flex space-x-1">
                        <select id="compras-divisas-desde-cuenta" {...register("compraDivDesdeCuenta")} className={styleInput}>
                            <option value="">Pagar desde:</option>
                            {cuentas.map((cuenta) => {
                                return <option value={cuenta.id} key={cuenta.id + '-compras-divisas'}>{cuenta.nombre}</option>
                            })}
                        </select>
                        <input id="monto-compra-divisa-bs" {...register('montoPagadoCompraDivisa')} type="number" min="0" step="0.01" placeholder="Monto Bs" className={styleInput + ' text-right'} />
                    </div>
                </div>

                <div className="col-span-4">
                    <label className="text-gray-700 dark:text-gray-200 mt-3 capitalize" htmlFor="compras-divisas-a-cuenta">Divisa Comprada</label>
                    <div className="flex space-x-1">
                        <select id="compras-divisas-a-cuenta" {...register("divisaComprada")} className={styleInput}>
                            <option value="">A cuenta:</option>
                            {cuentas.map((cuenta) => {
                                if (cuenta.denominacion != 'Bs.') return <option value={cuenta.id} key={cuenta.id + '-traspasos'}>{cuenta.nombre}</option>
                            })}
                        </select>
                        <input id="monto-compra-divisa-ref" {...register('montoDivisaComprada')} type="number" min="0" step="0.01" placeholder="Monto Ref" className={styleInput + ' text-right'} />
                    </div>
                </div>

                <div className="-space-x-4 lg:-mr-2 pt-4">
                    <Tooltip title="Guardar Compra de Divisas" placement="top">
                        <IconButton size="large" color="primary" aria-label="guardar_compra_divisas" type="submit">
                            <SaveIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Cancelar" placement="top">
                        <IconButton size="large" color="error" aria-label="cancelar_compra_divisas" type="reset">
                            <CancelIcon />
                        </IconButton>
                    </Tooltip>
                </div>
            </div>
        </form>
    )
}

const VentasDivisasForm = ({ handleSubmit, onSubmitVentaDivisa, register, fecha, handleChangeDate }) => {

    return (
        <form onSubmit={handleSubmit(onSubmitVentaDivisa)}>
            <label className="col-span-2 text-gray-700 dark:text-gray-200 mt-3 capitalize" htmlFor="fecha-venta-divisa">Fecha</label>
            <input id="fecha-venta-divisa" type="date" {...register('fechaOperacion')} onChange={(e) => handleChangeDate(e)} value={fecha} className={"w-1/2 md:w-1/4 " + styleInput} />
            <div id="ventas_divisas" className="grid grid-cols-4 lg:grid-cols-9 gap-x-2">
                <div className="col-span-4">
                    <label className="col-span-2 text-gray-700 dark:text-gray-200 mt-3 capitalize" htmlFor="ventas-divisas-de-cuenta">Venta de</label>
                    <div className="flex space-x-1">
                        <select id="ventas-divisas-de-cuenta" {...register('divisaVendida')} className={styleInput}>
                            <option value="">Venta de:</option>
                            {cuentas.map((cuenta) => {
                               if(cuenta.denominacion != 'Bs.') return <option value={cuenta.id} key={cuenta.id + '-traspasos'}>{cuenta.nombre}</option>
                            })}
                        </select>
                        <input id="monto-venta-divisa-ref" {...register('montoDivVendida')} type="number" min="0" step="0.01" placeholder="Monto Ref" className={styleInput + ' text-right'} />
                    </div>
                </div>
                <div className="col-span-4">
                    <label className="col-span-2 text-gray-700 dark:text-gray-200 mt-3 capitalize" htmlFor="ventas-divisas-a-cuenta">Ingreso a Cuenta</label>
                    <div className="flex space-x-1">
                        <select id="ventas-divisas-a-cuenta" {...register('ventaDivACuenta')} className={styleInput}>
                            <option value="">A cuenta:</option>
                            {cuentas.map((cuenta) => {
                                return <option value={cuenta.id} key={cuenta.id + '-traspasos'}>{cuenta.nombre}</option>
                            })}
                        </select>
                        <input id="monto-venta-divisa-bs" {...register('montoBsRecibidos')} type="number" min="0" step="0.01" placeholder="Monto Bs" className={styleInput + ' text-right'} />
                    </div>
                </div>

                <div className="-space-x-4 lg:-mr-2">
                    <Tooltip title="Guardar Venta de Divisas" placement="top">
                        <IconButton size="large" color="primary" aria-label="guardar_venta_divisas" type="submit">
                            <SaveIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Cancelar" placement="top">
                        <IconButton size="large" color="error" aria-label="cancelar_venta_divisas" type="reset">
                            <CancelIcon />
                        </IconButton>
                    </Tooltip>
                </div>
            </div>
        </form>
    )
}

const RecibirPrestamosForm = ({ handleSubmit, onSubmitRecibirPrestamo, register, fecha, handleChangeDate }) => {

    return (
        <form onSubmit={handleSubmit(onSubmitRecibirPrestamo)}>
            <label className="col-span-2 text-gray-700 dark:text-gray-200 mt-3 capitalize" htmlFor="fecha-prestamo-otorgado">Fecha</label>
            <input id="fecha-prestamo-otorgado" type="date" {...register('fechaOperacion')} onChange={(e) => handleChangeDate(e)} value={fecha} className={"w-1/2 md:w-1/4 " + styleInput} />
            <div id="prestamos-recibidos" className="grid grid-cols-4 lg:grid-cols-7 gap-x-2">
                <div className="col-span-2">
                    <select id="prestamo-recibido-de" {...register('recibidoDe')} className={styleInput}>
                        <option value="">Recibido de:</option>
                    </select>
                </div>
                <div className="col-span-2">
                    <select id="prestamo-recibido-a-cuenta" {...register('recibidoACuenta')} className={styleInput}>
                        <option value="">A cuenta</option>
                        {cuentas.map((cuenta) => {
                            return <option value={cuenta.id} key={cuenta.id + '-traspasos'}>{cuenta.nombre}</option>
                        })}
                    </select>
                </div>
                <div className="col-span-2">
                    <input id="monto-prestamo-recibido" {...register('montoRecibido')} type="number" min="0" step="0.01" placeholder="Monto Bs o ref" className={styleInput + ' text-right'} />
                </div>
                <div className="-space-x-4">
                    <Tooltip title="Guardar Préstamo Recibido" placement="top">
                        <IconButton size="large" color="primary" aria-label="guardar_-prestamo-recibido" type="submit">
                            <SaveIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Cancelar" placement="top">
                        <IconButton size="large" color="error" aria-label="cancelar-prestamo-recibido" type="reset">
                            <CancelIcon />
                        </IconButton>
                    </Tooltip>
                </div>
            </div>
        </form>
    )
}

const OtorgarPrestamosForm = ({ handleSubmit, onSubmitOtorgarPrestamo, register, fecha, handleChangeDate }) => {

    return (
        <form onSubmit={handleSubmit(onSubmitOtorgarPrestamo)}>
            <label className="col-span-2 text-gray-700 dark:text-gray-200 mt-3 capitalize" htmlFor="fecha-prestamo-recibido">Fecha</label>
            <input id="fecha-prestamo-recibido" type="date" {...register('fechaOperacion')} onChange={(e) => handleChangeDate(e)} value={fecha} className={"w-1/2 md:w-1/4 " + styleInput} />
            <div id="prestamo-otorgado" className="grid grid-cols-4 lg:grid-cols-7 gap-x-2">
                <div className="col-span-2">
                    <select id="prestamo-otorgado-de" {...register('otorgadoA')} className={styleInput}>
                        <option value="">Prestado desde:</option>
                        {cuentas.map((cuenta) => {
                            return <option value={cuenta.id} key={cuenta.id + '-traspasos'}>{cuenta.nombre}</option>
                        })}
                    </select>
                </div>
                <div className="col-span-2">
                    <select id="prestamo-otorgado-a-cuenta" {...register('otorgadoDeCuenta')} className={styleInput}>
                        <option value="">Otorgado a:</option>
                    </select>
                </div>
                <div className="col-span-2">
                    <input id="monto-prestamo-otorgado" {...register('montoOtorgado')} type="number" min="0" step="0.01" placeholder="Monto Bs o ref" className={styleInput + ' text-right'} />
                </div>
                <div className="-space-x-4">
                    <Tooltip title="Guardar Préstamo Recibido" placement="top">
                        <IconButton size="large" color="primary" aria-label="guardar-prestamo-otorgado" type="submit">
                            <SaveIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Cancelar" placement="top">
                        <IconButton size="large" color="error" aria-label="cancelar-prestamo-otorgado" type="reset">
                            <CancelIcon />
                        </IconButton>
                    </Tooltip>
                </div>
            </div>
        </form>
    )
}