'use client'

import Image from "next/image";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Input} from "@nextui-org/react";
import Link from "next/link";


const Header = () => {
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
                            <span className="hidden sm:block self-center px-1 text-md font-semibold dark:text-white">Tech</span>
                        </Link>
                    </NavbarBrand>
                </NavbarContent>
                    <NavbarContent className="hidden sm:flex gap-4" justify="center">
                        <NavbarItem>
                            <Link color="foreground" className="hover:text-white" href='/'>about</Link>
                        </NavbarItem>
                        <NavbarItem isActive>
                            <Link aria-current='/' className="hover:text-white" color='secondary 'href='/'>feed</Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link color="foreground" className="hover:text-white" href='/studio'>studio</Link>
                        </NavbarItem>
                        
                    </NavbarContent>

                <NavbarContent as='div' className="items-center" justify="end">
             
                    <NavbarItem className="hidden lg:flex">
                        <Link href='/signup' className="text-slate-500 px-2 py-2 mr-3 rounded-lg ">
                            Login
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Button as={Link} color="secondary" href="/" variant="flat">Sign Up</Button>
                    </NavbarItem>
                </NavbarContent>
                
            </Navbar>
        </header>
    )
}

export default Header;