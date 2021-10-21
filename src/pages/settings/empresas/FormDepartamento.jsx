import { Button } from "@mui/material"
import ButtonGroup from '@mui/material/ButtonGroup';
import { SmCard } from "../../../components/cards/SmCard"
import { styleInput } from "../../../assets/Styles";
import { styled } from '@mui/material/styles';

const Input = styled('input')({
    display: 'none',
});

export function FormDepartamento({ setOption, text }) {
    return (
        <div className="mt-4">
            <SmCard text={text}>
                <form className="">
                    <div className="mt-4">

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="nombre">Nombre</label>
                            <input id="nombre" type="text" className={styleInput} />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="descripcion">Descripción</label>
                            <input id="descripcion" type="text" className={styleInput} />
                        </div>


                    </div>

                    <div className="mt-6">
                        <ButtonGroup
                            fullWidth
                            size="large"
                            aria-label="default contained button group"
                            variant="contained"
                        >
                            <Button key="guardar-departamento" >Enviar</Button>,
                            <Button key="cancelar-form-departamento" color="error" onClick={() => setOption('index')}>Cancelar</Button>,

                        </ButtonGroup>
                    </div>
                </form>
            </SmCard>
        </div>
    )
}