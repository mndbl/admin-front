import { NavLink } from "react-router-dom"
export function ItemsSections({ items, classItemSection, classItemActive, classItemDefault }) {
    return (
        <div className="w-full flex justify-between divide-x divide-blue-200">
        {items.map((item)=>{
            return (
            <NavLink 
            key={item.href}
            to={item.href}
            className={(isActive)=> classItemSection + (isActive ? classItemActive : classItemDefault)}>
                {item.label}
            </NavLink>
            )
        })}
        </div>
    )
}


