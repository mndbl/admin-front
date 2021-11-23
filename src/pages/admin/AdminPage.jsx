import {Switch, Route} from 'react-router-dom'

import { DashboardLayout } from '../../components/layouts/DashboardLayout'
import { PanelRegistros } from './registros/PanelRegistros';
import { Dashboard } from './dashboard/Dashboard';
import { PanelConsultas } from './consultas/PanelConsultas';

import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SaveIcon from '@mui/icons-material/Save';
import ArchiveIcon from '@mui/icons-material/Archive';
import { PrivateRoute } from '../../components/PrivateRoute';

const itemsOptions = [
    { label: "Dashboard", path: "/admin/dashboard", icon: <DashboardIcon /> },
    { label: "Registros", path: "/admin/registros", icon: <SaveIcon /> },
    { label: "Consultas", path: "/admin/consultas", icon: <ManageSearchIcon /> },

]
export function AdminPage() {
    return (
        <DashboardLayout items={itemsOptions}>
            <Switch>
                <PrivateRoute path="/admin/registros" component={PanelRegistros}/>
                <PrivateRoute path="/admin/dashboard" component={Dashboard}/>
                <PrivateRoute path="/admin/consultas" component={PanelConsultas}/>
            </Switch>
        </DashboardLayout>
    )
}