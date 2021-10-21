import { Button } from "@mui/material"
import ButtonGroup from '@mui/material/ButtonGroup';
import { SmCard } from "../../../components/cards/SmCard"
import { styleInput } from "../../../assets/Styles";

export function FormCuentas({ text }) {
    return (
        <div className="mt-4">
            <SmCard text={text}>
                <form className="">
                    <div className="mt-4">

                        <div>
                            <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="name">Nombre de Cuenta</label>
                            <input id="name" type="text" className={styleInput}
                                placeholder="Nombre de Cuenta"  />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="description">Descripción de Cuenta</label>
                            <input id="description" type="text" className={styleInput}
                                placeholder="Descripción de la Cuenta"  />
                        </div>
                        
                        <div>
                            <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="denominacion">Denominación</label>
                            <select id="denominacion" className={styleInput}>
                                    <option>Seleccione Tipo</option>
                                    {denominaciones.map((den)=>{
                                        return (<option key={den.id} value={den.id}>{den.text}</option>)
                                    })}
                                </select>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2">
                            
                        <div>
                            <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="saldo">Saldo de Cuenta</label>
                            <input id="saldo" type="number" min="0" step="0.01" className={"text-right " + styleInput}
                                placeholder="Saldo de la Cuenta"  />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="fecha_corte">Fecha del Saldo</label>
                            <input id="fecha_corte" type="date"  className={styleInput}/>
                        </div>
                        </div>

                    </div>

                    <div className="mt-6">
                        <ButtonGroup
                            fullWidth
                            size="large"
                            aria-label="default contained button group"
                            variant="contained"
                        >
                            <Button key="guardar-cuenta" href="#" >Enviar</Button>,
                            <Button key="cancelar-for-cuenta" color="error" href="/settings/roles/index">Cancelar</Button>,

                        </ButtonGroup>
                    </div>
                </form>
            </SmCard>
        </div>
    )
}

const denominaciones = [
    {id:"Bs.",text: "Bolívares"},
    {id:"USD",text: "Dólares"},
    {id:"EUR",text: "Euros"},
]