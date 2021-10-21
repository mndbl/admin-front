import { Button } from "@mui/material"
import ButtonGroup from '@mui/material/ButtonGroup';
import { styleInput } from "../../../assets/Styles";
import { SmCard } from "../../../components/cards/SmCard"
export function FormServicios({text}) {
    return (
        <div className="mt-4">
            <SmCard text={text}>
                <form className="">
                    <div className="mt-4">
                        <div>
                            <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="tipo_servicio">Tipo de Servicio</label>
                            <select id="tipo_servicio" type="text" className={styleInput}>
                                <option value="">Tipo de Servicio</option>
                                {tipoServicio.map((serv)=>{
                                    return (
                                        <option key={serv.value} value={serv.value}>{serv.nombre}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="tipo_motor">Tipo de Motor</label>
                            <select id="tipomotorservicio" type="text" className={styleInput}>
                                <option value="">Tipo de Motor</option>
                                {combustion.map((comb)=>{
                                    return (
                                        <option key={comb.value} value={comb.value}>{comb.nombre}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="cilindrada">Cilindrada</label>
                            <select id="cilindrada" type="text" className={styleInput}>
                                <option value="">Cilindrada</option>
                                {cilindrada.map((cil)=>{
                                    return (
                                        <option key={cil.value} value={cil.value}>{cil.nombre}</option>
                                    )
                                })}
                            </select>
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="description">Descripción</label>
                            <input id="description" type="text" className={styleInput} />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="precio">Precio</label>
                            <input id="precio" type="number" min="0" step="0.01" className={"text-right " + styleInput} />
                        </div>

                    </div>

                    <div className="mt-6">
                        <ButtonGroup
                            fullWidth
                            size="large"
                            aria-label="default contained button group"
                            variant="contained"
                        >
                            <Button key="guardar-rol" href="#" >Enviar</Button>,
                            <Button key="cancelar-form-rol" color="error"  href="/settings/roles/index">Cancelar</Button>,

                        </ButtonGroup>
                    </div>
                </form>
            </SmCard>
        </div>
    )
}


const tipoServicio = [
    {nombre: 'Servicio de Cámara', value:'camara'},
    {nombre: 'Servicio de Bloque', value:'bloque'},
    {nombre: 'Servicio de Cigüeñal', value:'ciguenal'},
    {nombre: 'Servicio de Soldadura y torno', value:'sold_torno'},
]

const combustion=[
    {nombre: 'Gasolina', value:'gas'},
    {nombre: 'Diesel', value:'diesel'},
    {nombre: 'Eléctrico', value:'elect'},
]

const cilindrada=[
    {nombre:'3 Cilindros', value:'3cil'},
    {nombre:'4 Cilindros', value:'4cil'},
    {nombre:'6 Cilindros', value:'6cil'},
    {nombre:'8 Cilindros', value:'8cil'},
]
