import { useState } from 'react'
import { Button } from '@mui/material'



export function UserProfile() {

    const [user, setUser] = useState({})



    return (

        <div className="overflow-hidden shadow-lg rounded-2xl h-90 w-64  mx-auto mt-4">
            <div className="h-52">
                <img alt="Foto de Perfil" src="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="rounded-t-lg object-contain" />
            </div>
            <div className="bg-white w-full p-4 relative">
                <button aria-label="Go to article" type="button" className="absolute rounded-full bg-indigo-500 text-white w-12 h-12 right-8 -top-6">
                    <svg width="20" height="20" fill="currentColor" className="h-6 w-6 text-white mx-auto" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                        </path>
                    </svg>
                </button>
                <p className="text-gray-800 text-xl font-medium mb-2">
                    Templates
                </p>
                <p className="text-gray-600 text-xs">
                    Improve UI with beautiful templates and components for Tailwind css.
                </p>
                <div className="flex flex-wrap justify-starts items-center mt-6">
                    <div className="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-purple-200 rounded-2xl">
                        #css
                    </div>
                    <div className="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-purple-200 rounded-2xl">
                        #tailwind
                    </div>
                    <div className="text-xs mb-2 py-1.5 px-4 text-gray-600 bg-purple-200 rounded-2xl">
                        #components
                    </div>
                </div>
            </div>
        </div>

    )
}