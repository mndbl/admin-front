import { Navbar } from "../partials/Navbar"
import { Footer } from "../partials/Footer"
import { Sidebar } from "../partials/Sidebar"

export function AdminLayout({children, itemsOptions}){
    return (
        <div className="w-full lg:flex">
        <Sidebar itemsOptions={itemsOptions}/>
        <div className="w-full flex flex-col">
            <Navbar/>
            <div className="flex-grow">{children}</div>
            <Footer/>
        </div>
        </div>
    )
}