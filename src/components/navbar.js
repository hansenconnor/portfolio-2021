import * as React from "react"
import Memoji from '../images/memoji.png'
import MemojiParty from '../images/memoji-party.png'
import { Link } from "gatsby" 
import CustomLink from "./custom-link"

const Navbar = () => {

    return (
        <nav className="navbar flex flex-wrap items-center justify-between px-12 py-8 w-screen">
            <div className="w-full sm:w-1/3">
                <Link to="/" className="group rounded-full overflow-hidden h-16 w-16 block relative bg-gray-100 hover:bg-gray-50 hover:shadow-lg transition">
                    <img className="absolute inset-0 group-hover:left-full transition-all" src={Memoji} alt="Connor Hansen Memoji"/>
                    <img className="absolute left-full group-hover:inset-0 transition-all" src={MemojiParty} alt="Connor Hansen Party Memoji"/>
                </Link>
            </div>

            <div className="nav-links text-center w-full sm:w-1/3">
                <Link className="transition mx-4 text-gray-500 hover:text-gray-900" to="/">Home</Link>
                <Link className="transition mx-4 text-gray-500 hover:text-gray-900" to="/about">About</Link>
                <Link className="transition mx-4 text-gray-500 hover:text-gray-900" to="/showcase">Showcase</Link>
                <Link className="transition mx-4 text-gray-500 hover:text-gray-900" to="/contact">Contact</Link>
            </div>

            <div className="flex items-center w-full sm:w-1/3 justify-end">
                <CustomLink to="/">New Project</CustomLink>
            </div>

        </nav>
    )
}
 
export default Navbar
 