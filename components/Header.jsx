'use client'

import Image from "next/image";
import Link from "next/link";


const Header = () => {
    return (
        <header className="sticky top-0">
            <nav className="flex items-center justify-between p-2 m-2 text-gray-600 dark:text-gray-400 dark:hover:text-white dark:focus:bg-gray-700 dark:focus:ring-gray-700 lg:hidden">

                <div className="flex items-center justify-between">
                    <Link href='/' className="flex">
                        <Image 
                            src='/images/blkLogo.png'
                            height='32'
                            width='32'
                            alt="BLK logo"
                        />
                        <span className="self-center px-1 text-md font-semibold dark:text-white">Tech</span>
                    </Link>
                </div>
                <div className="ml-auto">
                    <Link href='/signup' className="text-slate-500 px-2 py-2 mr-3 rounded-lg bg-white">
                        Signup
                    </Link>
                    <Link href='/create' className="text-slate-500 px-2 py-2 mr-3">
                        create
                    </Link>
                </div>
                
            </nav>
        </header>
    )
}

export default Header;