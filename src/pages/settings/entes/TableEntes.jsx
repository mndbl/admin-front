const entes = [
  {
    nombre: 'Nombre',
    rif: 'RIF',
    email: 'Email',
    local: 'Teléfono Oficina',
    movil: 'Teléfono Móvil',
    direccion: 'Dirección',
    tipo: 'Tipo de Ente',
  },
  // More people...
]

export function TableEntes() {
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
                    Nombre / Rif
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  >
                    Teléfonos / Email
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  >
                    Dirección
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  >
                    Tipo
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {entes.map((ente) => (
                  <tr key={ente.rif}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{ente.nombre}</div>
                          <div className="text-sm text-gray-500">{ente.rif}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{ente.email}</div>
                      <div className="text-sm text-gray-500">{ente.local} / {ente.movil}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{ente.direccion}</div>
                      {/* <div className="text-sm text-gray-500">{ente.precioCompra}</div> */}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{ente.tipo}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="/settings/entes/edit" className="text-indigo-600 hover:text-indigo-900">
                        Edit
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