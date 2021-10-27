import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { Tooltip } from '@mui/material';


const itemsCompras = [
    {
        id: 'id',
        cantidad: 'cant',
        concepto: 'concepto',
        alicuota: '16%',
        precioUnitario: "p/unit",
        total: 'total',
    },
]

export function TableDetallesCompras() {
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
                                        Cant
                                    </th>
                                    <th colSpan="2"
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                                    >
                                        Concepto
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                                    >
                                        IVA
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                                    >
                                        P/Unit
                                    </th>

                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                                    >
                                        Total
                                    </th>
                                    <th scope="col" className="relative px-6 py-3">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200 px-2">
                                {itemsCompras.map((item) => (
                                    <tr key={item.id + item.concepto}>
                                        <td className="px-6 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">{item.cantidad}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td colSpan="2"
                                        className="px-6 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{item.concepto}</div>
                                            {/* <div className="text-sm text-gray-500">{item.numero}</div> */}
                                        </td>
                                        <td className="px-6 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{item.alicuota}</div>
                                            {/* <div className="text-sm text-gray-500">{item.montoBs}</div> */}
                                        </td>
                                        <td className="px-6 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{item.precioUnitario}</div>
                                            {/* <div className="text-sm text-gray-500">{item.montoBs}</div> */}
                                        </td>

                                        <td className="px-6 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{item.total}</div>
                                        </td>
                                        <td className="px-6 whitespace-nowrap text-right text-sm font-medium">
                                            <a href="/admin/registros/registro-diario/edit" className="text-indigo-600 hover:text-indigo-900">
                                                Eliminar
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}