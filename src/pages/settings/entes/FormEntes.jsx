import { Button } from "@mui/material"
import ButtonGroup from '@mui/material/ButtonGroup';
import { SmCard } from "../../../components/cards/SmCard"
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import { styleInput } from "../../../assets/Styles";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';



const Input = styled('input')({
    display: 'none',
});

export function FormEntes
    ({ setOption, text }) {
    return (
        <div className="mt-4">
            <SmCard text={text}>
                <form className="">
                    <div className="mt-4 text-gray-700">
                        <FormLabel component="legend">Ente</FormLabel>
                        <RadioGroup row aria-label="ente" name="row-radio-buttons-group">
                            <FormControlLabel value="cliente" control={<Radio />} label="Cliente" />
                            <FormControlLabel value="proveedor" control={<Radio />} label="Proveedor" />
                        </RadioGroup>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="name_ente">Nombre</label>
                            <input id="name_ente" type="text" className={styleInput} />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="rif_ente">ID/RIF</label>
                            <input id="rif_ente" type="text" className={styleInput} />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="email">Email</label>
                            <input id="email" type="email" className={styleInput} />
                        </div>
                        <div className="grid grid-cols-2 gap-x-2">
                            <div>
                                <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="local_ente">Tel Oficina</label>
                                <input id="local_ente" type="tel" className={styleInput} />
                            </div>
                            <div>
                                <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="movil_ente">Tel Móvil</label>
                                <input id="movil_ente" type="tel" className={styleInput} />
                            </div>

                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="direccion_ente">Dirección</label>
                            <input id="direccion_ente" type="text" className={styleInput} />
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
                            <Button key="cancelar-form-rol" color="error" href="/settings/roles/index">Cancelar</Button>,

                        </ButtonGroup>
                    </div>
                </form>
            </SmCard>
        </div>
    )
}

