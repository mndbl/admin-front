import { Button } from "@mui/material"
import ButtonGroup from '@mui/material/ButtonGroup';
import { SmCard } from "../../../components/cards/SmCard"
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

const Input = styled('input')({
    display: 'none',
});

export function FormUsers({ setOption, text }) {
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

                        <div className="flex gap-2">
                            {/* <label className="text-gray-700 dark:text-gray-200" htmlFor="status">Status</label> */}
                            <input id="status" type="text" placeholder="Status" className="disabled  w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                            <input id="rol" type="text" placeholder="Rol" className="disabled  w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>


                        <div>
                            <input id="cargo" type="text" placeholder="Cargo" className="disabled block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                            <input id="departamento" type="text" placeholder="Departamento" className="disabled block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="phone">Teléfono</label>
                            <input id="phone" type="tel" className="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="direccion">Dirección</label>
                            <input id="direccion" type="address" className="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>


                    </div>

                    <div className="mt-6">
                        <ButtonGroup
                            fullWidth
                            size="large"
                            aria-label="default contained button group"
                            variant="contained"
                        >
                            <Button key="one" >Enviar</Button>,
                            <Button key="two" color="error" onClick={() => setOption('index')}>Cancelar</Button>,

                        </ButtonGroup>
                    </div>
                </form>
            </SmCard>
        </div>
    )
}