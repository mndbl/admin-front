import {HomeNavbar} from '../components/partials/HomeNavbar'
import {Footer} from '../components/partials/Footer'

export function Home(){
    return (
        <div className="h-screen w-full flex flex-col">
            <HomeNavbar/>
            <div className="flex-grow">conten</div>
            <Footer/>
        </div>
    )
}