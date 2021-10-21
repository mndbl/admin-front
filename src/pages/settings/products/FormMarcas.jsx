import { Button } from "@mui/material"
import ButtonGroup from '@mui/material/ButtonGroup';
import { styleInput } from "../../../assets/Styles";
import { SmCard } from "../../../components/cards/SmCard"
export function FormMarcas({text}) {
    return (
        <div className="mt-4">
            <SmCard text={text}>
                <form className="">
                    <div className="mt-4">


                        <div>
                            <label className="text-gray-700 dark:text-gray-200 capitalize" htmlFor="name">Name</label>
                            <input id="name" type="text" className={styleInput} />
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
                            <Button key="cancelar-form-rol" color="error"  href="/settings/roles/index">Cancelar</Button>,

                        </ButtonGroup>
                    </div>
                </form>
            </SmCard>
        </div>
    )
}