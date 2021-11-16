import {Navbar} from '../components/partials/Navbar'
import {Footer} from '../components/partials/Footer'

export function Home(){
    return (
        <div className="h-screen w-full flex flex-col">
            <Navbar profile={null}/>
            <div className="flex-grow shadow">conten</div>
            <Footer/>
        </div>
    )
}