import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import { headerLinks } from "@/constants"

const Header = () => {
    return (
        <header className="relative container mx-auto p-6 bg-[#0B2033]">
            <nav className="flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-20">
                    <Image
                        src="/assets/icons/logo.svg" width={128} height={38}
                        alt="Evently logo"
                    />
                </Link>
                <div className="hidden space-x-8 font-bold lg:flex text-white">
                    {headerLinks.map((links) => (
                        <Link
                            key={links.title}
                            href={links.url}
                            className=""
                        >
                            <h3 className="font-bold">{links.title}</h3>
                        </Link>
                    ))}
                </div>
                <div className="hidden items-center space-x-6 font-bold text-grayishViolet lg:flex">
                    <div className="hover:text-veryDarkViolet">Login</div>
                    <a
                        href="#"
                        className="px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70"
                    >Sign Up</a>

                    <button
                        id="menu-btn"
                        className="block hamburger lg:hidden focus:outline-none"
                        type="button"
                    >
                        <span className="hamburger-top"></span>
                        <span className="hamburger-middle"></span>
                        <span className="hamburger-bottom"></span>
                    </button>
                </div>
                <div
                    id="menu"
                    className="absolute hidden p-6 rounded-lg bg-darkViolet left-6 right-6 top-20 z-100"
                >
                    <div
                        className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
                        <a href="#" className="w-full text-center">Features</a>
                        <a href="#" className="w-full text-center">Pricing</a>
                        <a href="#" className="w-full text-center">Resources</a>
                        <a href="#" className="w-full pt-6 border-t border-gray-400 text-center"
                        >Login</a>
                        <a href="#" className="w-full py-3 text-center rounded-full bg-cyan">Sign Up</a>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header