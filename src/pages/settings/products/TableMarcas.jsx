import { Button } from '@mui/material'
import { useState } from 'react'
import { FormMarcas } from './FormMarcas'
export function TableMarcas() {
    const [open, setOpen] = useState(false)
    return (
        // <!-- This example requires Tailwind CSS v2.0+ -->
        <div className="flex flex-col">
            <div className="ml-8">
                <Button variant="outlined" onClick={() => setOpen(!open)}
                >Agregar Nueva Marca</Button>
            </div>
            {open ? <FormMarcas text="Agregar Marca" /> :
                <div className="py-2 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 min-w-full sm:px-6 lg:px-8 gap-2">

                    {marcas.map((marca) => {
                        return (
                            <span key={marca.nombre}
                                className="flex no-underline hover:underline items-center px-4 py-2 mb-4 text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-md dark:bg-gray-700 dark:text-gray-200">
                                {marca.nombre}
                            </span>
                        )
                    })}


                </div>
            }
        </div>

    )
}

const marcas = [
    { nombre: 'Kmp' },
    { nombre: 'Beco' },
]