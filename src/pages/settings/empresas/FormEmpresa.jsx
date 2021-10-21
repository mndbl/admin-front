import { Button } from "@mui/material"
import ButtonGroup from '@mui/material/ButtonGroup';
import { SmCard } from "../../../components/cards/SmCard"
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import { styleInput } from "../../../assets/Styles";

const Input = styled('input')({
    display: 'none',
});

export function FormEmpresa
    ({ setOption, text }) {
    return (
        <div className="mt-4">
            <SmCard text={text}>
                <Tooltip title="Cambiar Avatar" placement="right">
                    <label htmlFor="contained-button-file">
                        <Input accept="image/*" id="contained-button-file" multiple type="file" />

                        <img
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1415&q=80"
                            width="300" height="300"
                            className="mx-auto" />
                    </label>
                </Tooltip>

                <form className="">
                    <div className="mt-4">

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="nombre">Nombre</label>
                            <input id="nombre" type="text" className={styleInput} />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="rif">Rif</label>
                            <input id="rif" type="text" className={styleInput} />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="local">Teléfono de Oficina</label>
                            <input id="local" type="text" className={styleInput} />
                        </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="movil1">Teléfono Móvil</label>
                            <input id="movil1" type="text" className={styleInput} />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="movil2">Teléfono Móvil</label>
                            <input id="movil2" type="text" className={styleInput} />
                        </div>
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="direccion">Dirección</label>
                            <input id="direccion" type="text" className={styleInput} />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="direccion2">Dirección</label>
                            <input id="direccion2" type="text" className={styleInput} />
                        </div>


                    </div>

                    <div className="mt-6">
                        <ButtonGroup
                            fullWidth
                            size="large"
                            aria-label="default contained button group"
                            variant="contained"
                        >
                            <Button key="guardar-empresa" >Enviar</Button>,
                            <Button key="cancelar-form-empresa" color="error" onClick={() => setOption('index')}>Cancelar</Button>,

                        </ButtonGroup>
                    </div>
                </form>
            </SmCard>
        </div>
    )
}