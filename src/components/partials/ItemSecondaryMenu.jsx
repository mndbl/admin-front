import { NavLink, useRouteMatch } from "react-router-dom"
import { activeSecondaryMenu, defaultSecondaryMenu,  } from "../../assets/styles/tailwindClass"

export function ItemSecondaryMenu({ item }) {
    const { url } = useRouteMatch();
    return (
        <NavLink className={isActive => isActive ? (activeSecondaryMenu) : (defaultSecondaryMenu)} to={`${url}${item.to}`}>
            {item.text}
        </NavLink>
    )
}
