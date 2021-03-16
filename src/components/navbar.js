import * as React from "react"
import memoji from '../images/memoji.png'
import { Link } from "gatsby" 
import CustomLink from "./custom-link"

const Navbar = () => {

    return (
        <nav className="navbar flex flex-wrap items-center justify-between px-12 py-8 w-screen animate__animated animate__fadeIn">
            <Link to="/" className="rounded-full bg-gray-100 hover:bg-gray-50 hover:shadow-lg transition">
                <img src={memoji} alt="Connor Hansen Memoji"/>
            </Link>

            {/* <span class="font-bold">Connor Hansen</span> */}

            <div className="nav-links text-center">
                <Link className="transition mx-4 text-gray-500 hover:text-gray-900" to="/">Home</Link>
                <Link className="transition mx-4 text-gray-500 hover:text-gray-900" to="/showcase">Showcase</Link>
                <Link className="transition mx-4 text-gray-500 hover:text-gray-900" to="/contact">Contact</Link>
            </div>

            <CustomLink to="/">New Project</CustomLink>
        </nav>
    )
}
 
export default Navbar
 