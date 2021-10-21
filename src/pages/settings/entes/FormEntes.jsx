import { Button } from "@mui/material"
import ButtonGroup from '@mui/material/ButtonGroup';
import { SmCard } from "../../../components/cards/SmCard"
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import { styleInput } from "../../../assets/Styles";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
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
                    <div className="mt-4">
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Ente</FormLabel>
                            <RadioGroup row aria-label="ente" name="row-radio-buttons-group">
                                <FormControlLabel value="cliente" control={<Radio />} label="Cliente" />
                                <FormControlLabel value="proveedor" control={<Radio />} label="Proveedor" />
                            </RadioGroup>
                        </FormControl>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="name">Nombre</label>
                            <input id="name" type="text" className={styleInput} />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="tipo_ente">Tipo</label>
                            <input id="tipo_ente" type="text" className={styleInput} />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="description">Description</label>
                            <input id="description" type="text" className={styleInput} />
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

const entes = [
    { nombre: 'cliente' },
    { nombre: 'proveedor' },
]