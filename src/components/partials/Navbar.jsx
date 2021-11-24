import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ProfileSection } from "./ProfileSection";
import { useWindowDimensions } from '../../hooks/useWindowsDimensions'

export function Navbar() {
    const [menu, setMenu] = useState(false)
    const { width } = useWindowDimensions()

    useEffect(() => {
        width > 639 && setMenu(false)
    }, [width]);
    return (

        <nav className="bg-white dark:bg-gray-800 w-full">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* <!--Mobile menu button--> */}
                        <button type="button" onClick={() => setMenu(!menu)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white bg-white dark:bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            {/* <!--
                Icon when menu is closed.
                Heroicon name: outline/menu
                Menu open: "hidden", Menu closed: "block"
                --> */}
                            <svg className={(menu ? 'hidden' : 'block') + " h-6 w-6"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            {/* <!--
                Icon when menu is open.

                Heroicon name: outline/x

                Menu open: "block", Menu closed: "hidden"
                --> */}
                            <svg className={(!menu ? 'hidden' : 'block') + " h-6 w-6"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            <img className="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
                            <img className="hidden lg:block h-8 w-auto bg-gray-200 rounded-full px-6" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow" />
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                {unAuthItems.map(item => {
                                    return (
                                        <NavLink key={item.to}
                                            to={item.to} className={isActive => isActive ? activeClassName : defaultClassName} >{item.label}</NavLink>

                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <ProfileSection />
                    </div>
                </div>
            </div>

            {/* <!--Mobile menu, show/hide based on menu state.--> */}
            <div className={menu ? '' : 'hidden'} id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1">
                    {/* <!--Current: "bg-gray-900 text-white", Default: "text-gray-800 dark:text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                    {unAuthItems.map(item => {
                        return (
                            <NavLink key={item.to}
                                to={item.to} className={isActive => 'block ' + (isActive ? activeClassName : defaultClassName)}>{item.label}</NavLink>

                        )
                    })}


                </div>
            </div>
        </nav>

    )
}

const activeClassName = "no-underline bg-gray-900 text-white px-3 py-2 rounded-md text-base font-medium"
const defaultClassName = "no-underline text-gray-800 dark:text-gray-300 hover:bg-gray-700 hover:text-white  px-3 py-2 rounded-md text-base font-medium"

const unAuthItems = [
    { label: 'Login', to: '/login' },
    { label: 'Register', to: '/register' }
]

const authItems = [
    { label: 'Configuración', to: '/settings' },
    { label: 'Registros', to: '/admin' }
]