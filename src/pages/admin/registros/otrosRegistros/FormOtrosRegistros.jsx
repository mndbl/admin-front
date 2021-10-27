import { LgCard } from '../../../../components/cards/LgCard'
import { styleInput } from '../../../../assets/Styles'
import { Button, ButtonGroup, Tooltip, IconButton } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';

export function FormOtrosRegistros({ text }) {
    return (
        <LgCard text={text}>
            <form>
                <div className="grid grid-cols-6 lg:w-1/3">

                    <label className="col-span-2 text-gray-700 dark:text-gray-200 mt-3 capitalize" htmlFor="fecha-registros-varios">Fecha</label>
                    <input id="fecha-registros-varios" type="date" className={"col-span-4 " + styleInput} />
                </div>
                <div className="grid gap-x-2 mt-4 rows-auto">
                    <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="traspasos">Trapasos</label>
                    <div id="traspasos" className="grid grid-cols-4 lg:grid-cols-7 gap-x-2">
                        <div className="col-span-2">
                            <select id="traspasos_desde" className={styleInput}>
                                <option value="">Desde</option>
                            </select>
                        </div>
                        <div className="col-span-2">
                            <select id="traspasos_hasta" className={styleInput}>
                                <option value="">hasta</option>
                            </select>
                        </div>
                        <div className="col-span-2">
                            <input id="monto_traspaso" type="number" min="0" step="0.01" placeholder="monto" className={styleInput} />
                        </div>
                        <div className="-space-x-4">
                            <Tooltip title="Guardar Traspaso" placement="top">
                                <IconButton size="large" color="primary" aria-label="guardar_traspaso">
                                    <SaveIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Cancelar" placement="top">
                                <IconButton size="large" color="error" aria-label="cancelar_traspaso">
                                    <CancelIcon />
                                </IconButton>
                            </Tooltip>
                        </div>
                    </div>
                    <hr className="my-2"/>
                    
                    <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="compras_divisas">Compras de Divisas</label>
                    <div id="compras_divisas" className="grid grid-cols-4 lg:grid-cols-9 gap-x-2">
                        <div className="col-span-2">
                            <select id="compras-divisas-desde-cuenta" className={styleInput}>
                                <option value="">Desde</option>
                            </select>
                        </div>
                        <div className="col-span-2">
                            <select id="compras-divisas-a-cuenta" className={styleInput}>
                                <option value="">hasta</option>
                            </select>
                        </div>
                        <div className="col-span-2">
                            <input id="monto-compra-divisa-ref" type="number" min="0" step="0.01" placeholder="Monto Ref" className={styleInput} />
                        </div>
                        <div className="col-span-2">
                            <input id="monto-compra-divisa-bs" type="number" min="0" step="0.01" placeholder="Monto Bs" className={styleInput} />
                        </div>
                        <div className="-space-x-4 lg:-mr-2">
                            <Tooltip title="Guardar Compra de Divisas" placement="top">
                                <IconButton size="large" color="primary" aria-label="guardar_compra_divisas">
                                    <SaveIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Cancelar" placement="top">
                                <IconButton size="large" color="error" aria-label="cancelar_compra_divisas">
                                    <CancelIcon />
                                </IconButton>
                            </Tooltip>
                        </div>
                    </div>
                    <hr className="my-2"/>
                    <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="ventas_divisas">Ventas de Divisas</label>
                    <div id="ventas_divisas" className="grid grid-cols-4 lg:grid-cols-9 gap-x-2">
                        <div className="col-span-2">
                            <select id="ventas-divisas-desde-cuenta" className={styleInput}>
                                <option value="">Desde</option>
                            </select>
                        </div>
                        <div className="col-span-2">
                            <select id="ventas-divisas-a-cuenta" className={styleInput}>
                                <option value="">hasta</option>
                            </select>
                        </div>
                        <div className="col-span-2">
                            <input id="monto-venta-divisa-ref" type="number" min="0" step="0.01" placeholder="Monto Ref" className={styleInput} />
                        </div>
                        <div className="col-span-2">
                            <input id="monto-venta-divisa-bs" type="number" min="0" step="0.01" placeholder="Monto Bs" className={styleInput} />
                        </div>
                        <div className="-space-x-4 lg:-mr-2">
                            <Tooltip title="Guardar Venta de Divisas" placement="top">
                                <IconButton size="large" color="primary" aria-label="guardar_venta_divisas">
                                    <SaveIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Cancelar" placement="top">
                                <IconButton size="large" color="error" aria-label="cancelar_venta_divisas">
                                    <CancelIcon />
                                </IconButton>
                            </Tooltip>
                        </div>
                    </div>
                    <hr className="my-2"/>
                    <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="prestamos-recibidos">Recibir Préstamo</label>
                    <div id="prestamos-recibidos" className="grid grid-cols-4 lg:grid-cols-7 gap-x-2">
                        <div className="col-span-2">
                            <select id="prestamo-recibido-de" className={styleInput}>
                                <option value="">Recibido de:</option>
                            </select>
                        </div>
                        <div className="col-span-2">
                            <select id="prestamo-recibido-a-cuenta" className={styleInput}>
                                <option value="">A cuenta</option>
                            </select>
                        </div>
                        <div className="col-span-2">
                            <input id="monto-prestamo-recibido" type="number" min="0" step="0.01" placeholder="monto" className={styleInput} />
                        </div>
                        <div className="-space-x-4">
                            <Tooltip title="Guardar Préstamo Recibido" placement="top">
                                <IconButton size="large" color="primary" aria-label="guardar_-prestamo-recibido">
                                    <SaveIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Cancelar" placement="top">
                                <IconButton size="large" color="error" aria-label="cancelar-prestamo-recibido">
                                    <CancelIcon />
                                </IconButton>
                            </Tooltip>
                        </div>
                    </div>
                    <hr className="my-2"/>
                    <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="prestamo-otorgado">Otorgar Préstamo</label>
                    <div id="prestamo-otorgado" className="grid grid-cols-4 lg:grid-cols-7 gap-x-2">
                    <div className="col-span-2">
                            <select id="prestamo-otorgado-de" className={styleInput}>
                                <option value="">Recibido de:</option>
                            </select>
                        </div>
                        <div className="col-span-2">
                            <select id="prestamo-otorgado-a-cuenta" className={styleInput}>
                                <option value="">A cuenta</option>
                            </select>
                        </div>
                        <div className="col-span-2">
                            <input id="monto-prestamo-otorgado" type="number" min="0" step="0.01" placeholder="monto" className={styleInput} />
                        </div>
                        <div className="-space-x-4">
                            <Tooltip title="Guardar Préstamo Recibido" placement="top">
                                <IconButton size="large" color="primary" aria-label="guardar_-prestamo-otorgado">
                                    <SaveIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Cancelar" placement="top">
                                <IconButton size="large" color="error" aria-label="cancelar-prestamo-otorgado">
                                    <CancelIcon />
                                </IconButton>
                            </Tooltip>
                        </div>
                    </div>
                    
                </div>
                
            </form>
        </LgCard>
    )
}