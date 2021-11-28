import { NavLink, useRouteMatch } from "react-router-dom"
import { activePrimaryMenu, defaultPrimaryMenu } from "../../assets/styles/tailwindClass"

export function ItemPrimaryMenu({item }) {
    const {url}=useRouteMatch();
    return (
        <NavLink className={isActive => isActive ? (activePrimaryMenu) : (defaultPrimaryMenu)} to={`${url}${item.to}`}>
            {item.text}
        </NavLink>
    )
}
