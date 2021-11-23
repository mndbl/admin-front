import { Switch, Route } from 'react-router-dom';
import { DashboardLayout } from '../../components/layouts/DashboardLayout'

//pages
import { IndexEntes } from './entes/IndexEntes'
import { IndexProductos } from './products/IndexProductos'
import { IndexServicios } from './servicios/IndexServicios'
import { IndexCuentas } from './cuentas/IndexCuentas'
import { IndexEmpresas } from './empresas/IndexEmpresas'
import { IndexRoles } from './roles/IndexRoles'
import { IndexProfiles } from './profile/IndexProfiles'
import { IndexUsers } from './users/IndexUsers'

//icons
import BusinessIcon from '@mui/icons-material/Business';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import CarRepairIcon from '@mui/icons-material/CarRepair';
import InventoryIcon from '@mui/icons-material/Inventory';
import GroupsIcon from '@mui/icons-material/Groups';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PeopleIcon from '@mui/icons-material/People';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const itemsOptions =[
    {label: "Users", path:"/settings/users", icon:<PeopleIcon/>},
    {label: "Roles", path:"/settings/roles", icon:<GroupsIcon/>},
    {label: "Profiles", path:"/settings/profiles", icon:<AccountCircleIcon/>},
    {label: "Empresas", path:"/settings/empresas", icon:<BusinessIcon/>},
    {label: "Cuentas", path:"/settings/cuentas", icon:<AccountBalanceWalletIcon/>},
    {label: "Servicios", path:"/settings/servicios", icon:<CarRepairIcon/>},
    {label: "Productos", path:"/settings/productos", icon:<InventoryIcon/>},
    {label: "Entes", path:"/settings/entes", icon:<GroupWorkIcon/>},
]

export function SettingsPage() {
    return (
        <DashboardLayout items={itemsOptions}>
            <Switch>
                <Route path="/settings/users" component={IndexUsers}/>
                <Route path="/settings/roles" component={IndexRoles}/>
                <Route path="/settings/profiles" component={IndexProfiles}/>
                <Route path="/settings/empresas" component={IndexEmpresas}/>
                <Route path="/settings/cuentas" component={IndexCuentas}/>
                <Route path="/settings/servicios" component={IndexServicios}/>
                <Route path="/settings/productos" component={IndexProductos}/>
                <Route path="/settings/entes" component={IndexEntes}/>
            </Switch>
        </DashboardLayout>
    )
}