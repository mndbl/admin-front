import { useState } from "react"
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Collapse } from "@mui/material";
const links = [
    { path: "/login", text: "Login" },
    { path: "/register", text: "Register" },
]

export function HomeNavbar() {
    const [mobileMenu, setMobileMenu] = useState(false)
    const showItems = mobileMenu ? 'block' : 'hidden'
    return (
        <nav className="bg-white shadow dark:bg-gray-800">
            <div className="container px-6 py-4 mx-auto">
                <div className="md:flex md:items-center md:justify-between">
                    <div className="flex items-center justify-between">
                        <div className="text-xl font-semibold text-gray-700">
                            <a className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="#">Brand</a>
                        </div>

                        {/* <!-- Mobile menu button --> */}
                        <div className="flex md:hidden" >
                            <button type="button" onClick={() => setMobileMenu((prevStateMenu) => !prevStateMenu)}
                                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                {!mobileMenu ? (<MenuIcon />) : (<CloseIcon />)}
                            </button>
                        </div>
                    </div>

                    {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
                    <Collapse in={mobileMenu}>
                        <div className={`md:flex md:items-center md:justify-between ${showItems}`}>
                            <div className="flex flex-col -mx-4 md:flex-row md:items-center md:mx-8">
                                {links.map((item) => {
                                    return <a href={item.path} key={`${item.path}_homenavbar`}
                                        className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">{item.text}</a>
                                })}
                            </div>
                        </div>
                    </Collapse>
                </div>
            </div>
        </nav>
    )
}
