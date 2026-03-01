import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {

    let navigate = useNavigate()
    const btnClicked = () =>{
        navigate('/')
    }

    return (
        <div>
            <div className="bg-slate-900 text-white shadow-md">
                <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
                
                <h2 
                onClick={btnClicked}
                className="text-2xl font-bold tracking-wide text-amber-400 cursor-pointer">
                    Heading
                </h2>

                <div className="flex gap-8 text-lg font-medium">
                    <Link
                    to="/"
                    className="hover:text-amber-400 transition duration-200"
                    >
                    Home
                    </Link>

                    <Link
                    to="/about"
                    className="hover:text-amber-400 transition duration-200"
                    >
                    About
                    </Link>

                    <Link
                    to="/contact"
                    className="hover:text-amber-400 transition duration-200"
                    >
                    Contact
                    </Link>

                    <Link
                    to="/product"
                    className="hover:text-amber-400 transition duration-200"
                    >
                    Product
                    </Link>
                    <Link
                    to="/kuchbhi"
                    className="hover:text-amber-400 transition duration-200"
                    >
                    Kuchbhi
                    </Link>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
