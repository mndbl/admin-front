import { Switch, Route } from 'react-router-dom'
import { AdminLayout } from '../components/layouts/AdminLayout'
import DashboardIcon from '@mui/icons-material/Dashboard';
import ArchiveIcon from '@mui/icons-material/Archive';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import { PanelRegistros } from './admin/registros/PanelRegistros';
import { Dashboard } from './admin/dashboard/Dashboard';
import { PanelConsultas } from './admin/consultas/PanelConsultas';
import SaveIcon from '@mui/icons-material/Save';

const itemsOptions =[
    {label: "Dashboard", path:"/admin/dashboard", icon:<DashboardIcon/>},
    {label: "Registros", path:"/admin/registros", icon:<SaveIcon/>},
    {label: "Consultas", path:"/admin/consultas", icon:<ManageSearchIcon/>},
    
]


export function Admin() {
    return (
        <AdminLayout itemsOptions={itemsOptions}>
            <Switch>
                <Route path="/admin/registros"><PanelRegistros/></Route>
                <Route path="/admin/dashboard"><Dashboard/></Route>
                <Route path="/admin/consultas"><PanelConsultas/></Route>

            </Switch>
        </AdminLayout>
    )
}