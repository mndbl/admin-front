import { Button } from "@mui/material"
import ButtonGroup from '@mui/material/ButtonGroup';
import { SmCard } from "../../../components/cards/SmCard"
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import { styleInput } from "../../../assets/Styles";

const Input = styled('input')({
    display: 'none',
});

export function FormProfiles
    ({ setOption, text }) {
    return (
        <div className="mt-4">
            <SmCard text={text}>
                <Tooltip title="Cambiar Avatar" placement="right">
                    <label htmlFor="contained-button-file">
                        <Input accept="image/*" id="contained-button-file" multiple type="file" />

                        <img
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                            width="300" height="300"
                            className="mx-auto" />
                    </label>
                </Tooltip>

                <form className="">
                    <div className="mt-4">

                        <div>
                            <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="tipo_perfil">Tipo de Perfil</label>
                            <select id="tipo_perfil" type="tel" className={styleInput}>
                                <option value="">Tipo de Perfil</option>
                                {perfiles.map((perfil)=>{
                                    return ( 
                                        <option className="capitalize"
                                        value={perfil.nombre}key={perfil.nombre}>{perfil.nombre}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="phone">Teléfono</label>
                            <input id="phone" type="tel" className={styleInput} />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="direccion">Dirección</label>
                            <input id="direccion" type="address" className={styleInput} />
                        </div>


                    </div>

                    <div className="mt-6">
                        <ButtonGroup
                            fullWidth
                            size="large"
                            aria-label="default contained button group"
                            variant="contained"
                        >
                            <Button key="enviar_profile" >Enviar</Button>,
                            <Button key="cancelar_profile" color="error" onClick={() => setOption('index')}>Cancelar</Button>,

                        </ButtonGroup>
                    </div>
                </form>
            </SmCard>
        </div>
    )
}

const perfiles=[
    {nombre:'empleado'},
    {nombre:'cliente'},
    {nombre:'proveedor'},
]