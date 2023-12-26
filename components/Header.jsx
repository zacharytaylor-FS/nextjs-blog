'use client'

import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import Image from "next/image";
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

    const navLinks = [
        {href: "/", label: 'Home'},
        {href: "/post", label: 'Posts'},
        {href: "/about", label: 'About'},
        {href: "/categories", label: 'Categories'},
        {href: "/studio", label: 'Studio'},
    ]

    return (
        <header className="light w-full light:bg-gray-400">
            <Navbar isBordered className="flex items-center justify-between text-gray-600 dark:text-gray-400 ">
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
                    {navLinks?.map((link) => (
                <NavbarContent key={link.href} className="flex sm:flex gap-4" justify="center">
                        <NavbarItem  isActive>
                            <Link color="foreground"  className="hover:text-[#2a86ff]" href={link.href}>{link.label}</Link>
                        </NavbarItem>
                </NavbarContent>
                    ))}

                <NavbarContent as='div' className="items-center hidden lg:flex" justify="end">
             
                    <NavbarItem className="hidden lg:flex">
                        <Link href='/signup' className="text-slate-500 px-2 py-2 mr-3 rounded-lg hover:bg-slate-800 hover:text-neutral-400">
                            Login
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Button as={Link} className="bg-[#2a86ff] opacity-60 hover:opacity-100" href="/" variant="flat">Sign Up</Button>
                    </NavbarItem>
                </NavbarContent>
                
            </Navbar>
        </header>
    )
}

export default Header;