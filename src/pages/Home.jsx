import { Navbar } from '../components/partials/Navbar'
import { Footer } from '../components/partials/Footer'

export function Home({ profile }) {
   
    return (
        <div className="h-screen w-full flex flex-col">
            <Navbar profile={profile} />
            <div className="flex-grow shadow">conten</div>
            <Footer />
        </div>
    )
}