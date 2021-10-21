import { Switch, Route } from 'react-router-dom'
import { AdminLayout } from '../components/layouts/AdminLayout'
import DashboardIcon from '@mui/icons-material/Dashboard';
import ArchiveIcon from '@mui/icons-material/Archive';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

const itemsOptions =[
    {label: "Dashboard", path:"/admin/dashboard", icon:<DashboardIcon/>},
    {label: "Registros", path:"/admin/registros", icon:<ArchiveIcon/>},
    {label: "Consultas", path:"/admin/consultas", icon:<ManageSearchIcon/>},
    
]


export function Admin() {
    return (
        <AdminLayout itemsOptions={itemsOptions}>
            <Switch>
                

            </Switch>
        </AdminLayout>
    )
}