import { Switch, Route } from 'react-router-dom'
import { AdminLayout } from '../components/layouts/AdminLayout'
import { IndexRoles } from './settings/roles/IndexRoles'
import { IndexProfiles } from './settings/profile/IndexProfiles'
import { IndexUsers } from './settings/users/IndexUsers'
import GroupsIcon from '@mui/icons-material/Groups';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PeopleIcon from '@mui/icons-material/People';
import BusinessIcon from '@mui/icons-material/Business';
import { IndexEmpresas } from './settings/empresas/IndexEmpresas'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { IndexCuentas } from './settings/cuentas/IndexCuentas'
import CarRepairIcon from '@mui/icons-material/CarRepair';
import { IndexServicios } from './settings/servicios/IndexServicios'
import InventoryIcon from '@mui/icons-material/Inventory';
import { IndexProductos } from './settings/products/IndexProductos'
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import { IndexEntes } from './settings/entes/IndexEntes'

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


export function Settings() {
    return (
        <AdminLayout itemsOptions={itemsOptions}>
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
        </AdminLayout>
    )
}