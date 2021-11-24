import { useEffect, useState } from 'react'
import FinanceApp from '../assets/videos/FinanceApp.mp4'
import { Footer } from '../components/partials/Footer'
import { Navbar } from '../components/partials/Navbar'

export function HomePage() {

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="items-center lg:flex my-2 flex-grow">
                <div className="w-full lg:w-1/2">
                    <video src={FinanceApp} autoPlay loop className="mx-auto"></video>
                    <a href="https://storyset.com/business" className="sr-only">Business illustrations by Storyset</a>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="mx-14 lg:mx-0 lg:max-w-xl">
                        <h1 className="text-center lg:text-left text-2xl font-semibold text-gray-800 uppercase dark:text-white lg:text-3xl">Best Place To Choose Your Clothes</h1>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.</p>
                        <button className="w-1/4 px-3 py-2 mt-6 text-xs font-medium text-white uppercase transition-colors duration-200 transform bg-indigo-600 rounded-md lg:w-auto hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">Shop Now</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}