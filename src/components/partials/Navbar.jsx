import { useEffect, useContext, useState } from "react"
import { NavLink } from "react-router-dom"
import UserContext from "../../context/User/UserContext"
import { ProfileNavMenu } from "./ProfileNavMenu"

export function Navbar({ profile }) {
    const { auth } = useContext(UserContext)
    const [itemsNav, setItemsNav] = useState(itemsNoAuth);
    const [navMenu, setNavMenu] = useState(false)
    const [profileMenu, setProfileMenu] = useState(false)
    useEffect(() => {
        auth ? setItemsNav((prevItems) => itemsAuth) : setItemsNav((prevItems) => itemsNoAuth);
    }, [auth]);
    return (
        // <!-- This example requires Tailwind CSS v2.0+ -->
        <nav className="dark:bg-gray-800 shadow">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* <!-- Mobile menu button--> */}
                        <button type="button" onClick={() => setNavMenu((prevMenu) => !prevMenu)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            {!navMenu ?
                                (<svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>)
                                :
                                (<svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>)
                            }
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            <img className="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
                            <img className="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow" />
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                                {itemsNav?.map(item => {
                                    return (
                                        <NavLink to={item.href} key={`${item.label}-standard`}
                                            className={isActive => classItemslg + (isActive ? (" bg-gray-900 text-white") : (" text-gray-600"))}
                                        >
                                            {item.label}
                                        </NavLink>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        {auth && (
                            <ProfileNavMenu
                                profileMenu={profileMenu}
                                setProfileMenu={setProfileMenu}
                            />
                        )}
                    </div>
                </div>
            </div>

            {/* <!-- Mobile menu, show/hide based on menu state. --> */}
            <div className="sm:hidden" id="mobile-menu">
                {navMenu && (
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                        {itemsNav.map(item => {
                            return (
                                <NavLink to={item.href} key={`${item.label}-mobile`}
                                className={isActive => classItemsSm + (isActive ? (" bg-gray-900 text-white") : (" text-gray-600"))}

                                >
                                    {item.label}
                                </NavLink>
                            )
                        })}
                    </div>
                )}
            </div>
        </nav>

    )
}

const itemsAuth = [
    { href: "/settings", label: "Configuraciones" },
    { href: "/admin", label: "Admin" },
]
const itemsNoAuth = [
    { href: "/login", label: "Login" },
    { href: "/register", label: "Register" },
]

const classItemslg = "dark:text-gray-300 no-underline hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
const classItemsSm = "block dark:text-gray-300 no-underline hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"