import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header className="bg-indigo-900 text-gray-100 shadow w-full
        flex items-center justify-center">
            <div className="container mx-auto flex flex-wrap p-5 flex-col
                 md:flex-row items-center">
                <Link href="/">
                    <a className="flex md:w-1/5 title-font font-medium
                    items-center md:justify-start mb-4 md:mb-0">
                        <Image src="/images/logo.png" alt="Logo" width={40} height={40} />
                        <span className="ml-3 text-xl">Samenvatten</span>                        
                    </a>
                </Link>
            </div>
            <nav className="flex flex-wrap md:w-4/5 items-center 
                justify-end text-base md:ml-auto">
                <Link href="/blog">
                    <a className="mx-5 cursor-pointer uppercase 
                    hover:text-indigo-300">Boeken</a>
                </Link>
                <Link href="/about">
                    <a className="mx-5 cursor-pointer uppercase 
                    hover:text-indigo-300">Over mij</a>
                </Link>
            </nav>
            
        </header>
    )
}
