import { Button, ButtonGroup } from "@mui/material"
import { MdCard } from "../../../components/cards/MdCard";
import { styleInput } from "../../../assets/Styles";

export function Parametros() {
    return (
        <section className="mt-4">
            <MdCard text="Parámetros Administrativos">
                <form>
                    <div className="grid grid-cols-1 gap-x-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="iva">Alícuota IVA</label>
                            <input id="iva" type="number" min="0" step="0.01" className={"text-right " + styleInput}
                            />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="factura">Nro. Factura Inicial</label>
                            <input id="factura" type="text" placeholder="Número de Factura Inicial" className={styleInput}
                            />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="nro_control">Nro. Control Inicial</label>
                            <input id="nro_control" type="text" placeholder="Número de Control Inicial" className={styleInput}
                            />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="nro_pedido">Nro. Pedido Inicial</label>
                            <input id="nro_pedido" type="text" placeholder="Número de Pedido Inicial" className={styleInput}
                            />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="nro_servicio">Nro. Orden de Servicio Inicial</label>
                            <input id="nro_servicio" type="text" placeholder="Número de Orden de Servicio Inicial" className={styleInput}
                            />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="nota_debito">Nro. Nota de Débito Inicial</label>
                            <input id="nota_debito" type="text" placeholder="Número Nota de Débito Inicial" className={styleInput}
                            />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="nota_credito">Nro. Nota de Crédito Inicial</label>
                            <input id="nota_credito" type="text" placeholder="Número Nota de Crédito Inicial" className={styleInput}
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
                            <Button key="guardar_parametros" >Guardar</Button>,
                            <Button key="cancelar_parametros" color="error" onClick={() => setOption('index')}>Cancelar</Button>,

                        </ButtonGroup>
                    </div>
                </form>
            </MdCard>
        </section>

    )
}

