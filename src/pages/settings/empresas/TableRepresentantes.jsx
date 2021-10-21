export function TableRepresentantes() {
    return (
        // <!-- This example requires Tailwind CSS v2.0+ -->
        <div className="flex flex-col">
            <div className="">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-blue-500 text-white">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                                        Description
                                    </th>
                                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                                        Options
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                          
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">
                                                    Jane Cooper
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">Regional Paradigm Technician</div>
                                        
                                    </td>
                                 
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <a href="/settings/empresas/edit-departamento" className="text-indigo-600 hover:text-indigo-900" onClick={()=>setOption('edit')}>Edit</a>
                                    </td>
                                </tr>

                                {/* <!-- More people... --> */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    )
}