import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import { headerLinks } from "@/constants"

const Header = () => {
    return (
        <header className="w-full border-b bg-[#0B2033]">
            <nav className="wrapper flex items-center justify-between">
                <Link href="/" className="w-36">
                    <Image
                        src="/assets/icons/logo.svg" width={128} height={38}
                        alt="Evently logo"
                    />
                </Link>
                <div className="flex flex-row space-x-10 text-white">
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
            </nav>
        </header>
    )
}

export default Header