'use client'

import Image from "next/image";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Input} from "@nextui-org/react";
import Link from "next/link";

const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

const Header = () => {
    // const items = menuItems.map(i => <li>{i}</li>)
    return (
        <header className="w-full">
            <Navbar isBordered className="flex items-center justify-between p-2 m-2 text-gray-600 dark:text-gray-400">
                <NavbarContent justify="start">
                    <NavbarBrand className="flex items-center justify-between">
                        <Link href='/' className="flex">
                            <Image 
                                src='/images/blkLogo.png'
                                height='56'
                                width='56'
                                alt="BLK logo"
                            />
                            <span className="hidden md:block self-center px-1 text-md font-semibold dark:text-white">Tech</span>
                        </Link>
                    </NavbarBrand>
                </NavbarContent>
                    <NavbarContent className="hidden sm:flex gap-4" justify="center">
                        <NavbarItem>
                            <Link color="foreground" className="hover:text-white" href='/about'>About</Link>
                        </NavbarItem>
                        <NavbarItem isActive>
                            <Link aria-current='categories' className="hover:text-white" color='secondary 'href='/categories'>Categories</Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link color="foreground" className="hover:text-white" href='/studio'>Studio</Link>
                        </NavbarItem>
                        
                    </NavbarContent>

                <NavbarContent as='div' className="items-center hidden lg:flex" justify="end">
             
                    <NavbarItem className="hidden lg:flex">
                        <Link href='/signup' className="text-slate-500 px-2 py-2 mr-3 rounded-lg ">
                            Login
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Button as={Link} className="bg-pink-500 opacity-60 hover:opacity-100" href="/" variant="flat">Sign Up</Button>
                    </NavbarItem>
                </NavbarContent>
                
            </Navbar>
        </header>
    )
}

export default Header;