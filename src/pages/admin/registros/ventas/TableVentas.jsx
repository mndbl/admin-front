import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { Tooltip } from '@mui/material';


const ventas = [
    {
        fecha: '23/10/2021',
        numero: 'Nro. Documento',
        cliente: 'Cliente',
        montoUsd: "ref Usd",
        montoBs: 'Monto Bs',
        status: 'Status'
    },
    // More people...
]

export function TableVentas() {
    return (
        <div className="flex flex-col">
            <div className="">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-blue-500 text-white">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                                    >
                                        Fecha
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                                    >
                                        Cliente / Nro. Documento
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                                    >
                                        Monto $/Bs
                                    </th>

                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                                    >
                                        Status
                                    </th>
                                    <th scope="col" className="relative px-6 py-3">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200 px-2">
                                {ventas.map((venta) => (
                                    <tr key={venta.fecha + venta.numero + venta.cliente}>
                                        <td className="px-6 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">{venta.fecha}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{venta.cliente}</div>
                                            <div className="text-sm text-gray-500">{venta.numero}</div>
                                        </td>
                                        <td className="px-6 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{venta.montoUsd}</div>
                                            <div className="text-sm text-gray-500">{venta.montoBs}</div>
                                        </td>

                                        <td className="px-6 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{venta.status}</div>
                                        </td>
                                        <td className="px-6 whitespace-nowrap text-right text-sm font-medium">
                                            <a href="/admin/registros/registro-diario/devolucion" className="text-indigo-600 hover:text-indigo-900">
                                                Devolución
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="relative mt-8">

                <div className="absolute bottom-0 right-0">
                    <Tooltip title="Registrar Compra" placement="left">
                        <Fab href="/admin/registros/registro-diario/ventas-store"
                            color="primary" aria-label="add">
                            <AddIcon />
                        </Fab>
                    </Tooltip>
                </div>
            </div>
        </div>
    )
}